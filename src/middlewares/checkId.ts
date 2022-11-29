import { NextFunction, Request, Response } from 'express'

import User from '../models/user.model'

export const checkUserId = async (req: Request, res: Response, nex: NextFunction) => {
	const { id } = req.params
	try {
		const user = await User.findByPk(id)
		if (!user) {
			return res.status(400).json({ msg: `No existe el usuario con el id ${id}` })
		}

		nex()
	} catch (error) {
		console.log(500)
		res.status(500).json({ msg: error })
	}
}

import { NextFunction, Request, Response } from 'express'
import { Student, User } from '../models'

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

export const checkStudentId = async (req: Request, res: Response, nex: NextFunction) => {
	const { id } = req.params
	try {
		const user = await Student.findByPk(id)
		if (!user) {
			return res.status(400).json({ msg: `No existe el estudiante con el id ${id}` })
		}

		nex()
	} catch (error) {
		console.log(500)
		res.status(500).json({ msg: error })
	}
}

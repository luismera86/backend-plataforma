import { Request, Response } from 'express'

import Feedback from '../models/feedback.model'

export const getStudents = async (req: Request, res: Response) => {
	try {
        const feedbacks = await Feedback.findAll()
        if (feedbacks.length === 0) {
            return res.status(200).json({ msg: 'No hay ningún feedback registrado'})
        }
		res.status(200).json({ feedbacks })
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: error })
	}
}

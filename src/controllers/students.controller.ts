import { Request, Response } from 'express'

import Student from '../models/student.model'

export const getStudents = async (req: Request, res: Response) => {
	try {
        const students = await Student.findAll()
        if (students.length === 0) {
            return res.status(200).json({ msg: 'No hay ningún estudiante registrado'})
        }
		res.status(200).json({ students })
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: error })
	}
}

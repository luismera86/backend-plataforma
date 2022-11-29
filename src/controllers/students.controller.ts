import { Request, Response } from 'express'
import { Student, StudentModel } from '../models'

export const getStudents = async (req: Request, res: Response) => {
	try {
		const students = await Student.findAll()
		if (students.length === 0) {
			return res.status(200).json({ msg: 'No hay ningún estudiante registrado' })
		}
		res.status(200).json({ students })
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: error })
	}
}

export const getStudentById = async (req: Request, res: Response) => {
	const { id } = req.params
	try {
		const student = await Student.findByPk(id)

		res.status(200).json({ student })
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: error })
	}
}

export const postStudent = async (req: Request, res: Response) => {
	const { name, course, commission, noteOne, noteTow, noteThree }: StudentModel = req.body
	try {
		const student = await Student.create({ name, course, commission, noteOne, noteTow, noteThree })

		res.status(200).json({ student })
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: error })
	}
}

export const putStudent = async (req: Request, res: Response) => {
	const { name, course, commission, noteOne, noteTow, noteThree }: StudentModel = req.body
	
	const { id } = req.params
	try {
		const student = await Student.findByPk(id)
		await student?.update({ name, course, commission, noteOne, noteTow, noteThree })

		res.status(200).json({ student })
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: error })
	}
}

export const deleteStudent = async (req: Request, res: Response) => {
	const { id } = req.params
	try {
		const student = await Student.findByPk(id)
		await student?.destroy()

		res.status(200).json({ student })
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: error })
	}
}

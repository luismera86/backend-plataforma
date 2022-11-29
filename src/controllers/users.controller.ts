import { Request, Response } from 'express'
import { User, UserModel } from '../models'

export const getUsers = async (req: Request, res: Response) => {
	try {
		const users = await User.findAll()
		res.status(200).json({ users })
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: error })
	}
}

export const getUserById = async (req: Request, res: Response) => {
	const { id } = req.params
	try {
		const user = await User.findByPk(id)

		res.status(200).json({ user })
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: error })
	}
}

export const postUser = async (req: Request, res: Response) => {
	const { name, password, email }: UserModel = req.body
	try {
		const user = await User.create({ name, password, email })

		res.status(200).json({ user })
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: error })
	}
}

export const putUser = async (req: Request, res: Response) => {
	const { name, email }: UserModel = req.body
	const { id } = req.params
	try {
		const user = await User.findByPk(id)
		await user?.update({ name, email })

		res.status(200).json({ user })
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: error })
	}
}

export const deleteUser = async (req: Request, res: Response) => {
	const { id } = req.params
	try {
		const user = await User.findByPk(id)
		await user?.destroy()

		res.status(200).json({ user })
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: error })
	}
}

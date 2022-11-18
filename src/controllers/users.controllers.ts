import { Request, Response } from 'express'

import User from '../models/user.model'

// export const getUsers = (req: Request, res: Response) => {
//     try {

//     } catch (error) {
//   console.log(error)
// res.status(500).json({ msg: error })

//     }
// }

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll()
    res.status(200).json({ users })
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: error })
  }
}

export const getUsersById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const user = await User.findByPk(id)

    if (!user) {
      return res.status(400).json({ msg: 'El usuario con ese id no existe' })
    }
    res.status(200).json({ user })
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: error })
  }
}

export const postUsers = async (req: Request, res: Response) => {
  const { body } = req
  try {
    const user = await User.create(body)
    res.status(200).json({ user })
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: error })
  }
}

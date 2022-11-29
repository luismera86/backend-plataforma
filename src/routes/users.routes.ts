import { deleteUser, getUserById, getUsers, postUser, putUser } from '../controllers/users.controller'

import { Router } from 'express'
import { checkUserId } from '../middlewares'

const usersRoutes = Router()

usersRoutes.get('/', getUsers)
usersRoutes.get('/:id', checkUserId, getUserById)
usersRoutes.post('/', postUser)
usersRoutes.put('/:id', checkUserId, putUser)
usersRoutes.delete('/:id', checkUserId, deleteUser)

export default usersRoutes

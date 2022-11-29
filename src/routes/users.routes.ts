import { getUsers, getUsersById, postUsers } from '../controllers/users.controller'

import { Router } from 'express'

const usersRoutes = Router()

usersRoutes.get('/', getUsers)
usersRoutes.get('/:id', getUsersById)
usersRoutes.post('/', postUsers)

export default usersRoutes

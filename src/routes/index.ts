import { Router } from 'express'
import studentsRouter from './students.routes'
import usersRoutes from './users.routes'

const routes = Router()

routes.use('/users', usersRoutes)
routes.use('/students', studentsRouter)
export default routes

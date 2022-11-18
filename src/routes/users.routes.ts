import { Router } from "express";
import { getUsers } from '../controllers/users.controllers';

const usersRoutes = Router()

usersRoutes.get('/', getUsers)

export default usersRoutes
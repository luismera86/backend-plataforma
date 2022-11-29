import { Router } from "express";
import { getStudents } from "../controllers/students.controller";

const studentsRouter = Router()

studentsRouter.get('/', getStudents)

export default studentsRouter
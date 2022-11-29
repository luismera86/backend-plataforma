import { InferAttributes, InferCreationAttributes, Model } from 'sequelize'

export interface StudentModel extends Model<InferAttributes<StudentModel>, InferCreationAttributes<StudentModel>> {
	name: string
	course: string
	commission: number
	noteOne: string
	noteTow: string
	noteThree: string
	status?: boolean
}

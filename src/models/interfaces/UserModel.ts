import { InferAttributes, InferCreationAttributes, Model } from "sequelize"

export interface UserModel extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>> {
	name: string
	email: string
	password: string
	status?: boolean
	typeUser?: string
  }
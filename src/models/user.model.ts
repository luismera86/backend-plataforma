import { DataTypes } from 'sequelize'
import { UserModel } from './interfaces'
import db from '../db/config'

const User = db.define<UserModel>('user', {
	name: {
		type: DataTypes.STRING,
	},
	email: {
    type: DataTypes.STRING,
    allowNull: true
	},
	password: {
		type: DataTypes.STRING
	},
	typeUser: {
		type: DataTypes.STRING,
    values: ['Admin', 'User'],
    defaultValue: 'User',
	},
	status: {
		type: DataTypes.STRING,
		defaultValue: true
	}
})

export default User

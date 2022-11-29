import { DataTypes } from 'sequelize'
import db from '../db/config'

const User = db.define('User', {
	name: {
		type: DataTypes.STRING,
	},
	email: {
    type: DataTypes.STRING,
    allowNull: true
	},
	status: {
		type: DataTypes.BOOLEAN,
	},
	typeUser: {
		type: DataTypes.STRING,
    values: ['Admin', 'User'],
    defaultValue: 'User',
	},
})

export default User

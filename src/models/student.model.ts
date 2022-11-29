import { DataTypes } from 'sequelize'
import db from '../db/config'

const Student = db.define('Student', {
	name: {
		type: DataTypes.STRING,
	},
	commission: {
    type: DataTypes.NUMBER,
    },
    deliveryOne: {
        type: DataTypes.STRING
    },
    deliveryTow: {
        type: DataTypes.STRING
    },
    deliveryThree: {
        type: DataTypes.STRING
    },
	status: {
		type: DataTypes.BOOLEAN,
	},
})

export default Student

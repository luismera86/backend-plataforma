import { DataTypes } from 'sequelize'
import db from '../db/config'

// TODO ver como relacionar con las tablas del students

const Correction = db.define('Correction', {
	studentName: {
		type: DataTypes.STRING,
	},
	course: {
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
    commentOne: {
        type: DataTypes.STRING
    },
    commentTow: {
        type: DataTypes.STRING
    },
    commentThree: {
        type: DataTypes.STRING
    },
    commentFour: {
        type: DataTypes.STRING
    },
    commentFive: {
        type: DataTypes.STRING
    },
	
})

export default Correction
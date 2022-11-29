import { DataTypes } from 'sequelize'
import db from '../db/config'

const Student = db.define('student', {
	name: {
		type: DataTypes.TEXT,
	},
	commission: {
    type: DataTypes.INTEGER,
    },
    noteOne: {
        type: DataTypes.TEXT
    },
    noteTow: {
        type: DataTypes.TEXT
    },
    noteThree: {
        type: DataTypes.TEXT
    },
	status: {
		type: DataTypes.TINYINT,
	},
})

export default Student

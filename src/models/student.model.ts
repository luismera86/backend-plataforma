import { DataTypes } from 'sequelize'
import { StudentModel } from './interfaces'
import db from '../db/config'

const Student = db.define<StudentModel>('student', {
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

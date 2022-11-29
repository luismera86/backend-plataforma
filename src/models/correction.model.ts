import { DataTypes } from 'sequelize'
import db from '../db/config'

// TODO ver como relacionar con las tablas del students

const Correction = db.define('correction', {
	studentName: {
		type: DataTypes.TEXT,
	},
	course: {
		type: DataTypes.TEXT,
	},
	commission: {
    type: DataTypes.INTEGER,
    },
    preDeliveryOne: {
        type: DataTypes.TEXT
    },
    preDeliveryTow: {
        type: DataTypes.TEXT
    },
    preDeliveryThree: {
        type: DataTypes.TEXT
    },
    commentOne: {
        type: DataTypes.TEXT
    },
    commentTow: {
        type: DataTypes.TEXT
    },
    commentThree: {
        type: DataTypes.TEXT
    },
    commentFour: {
        type: DataTypes.TEXT
    },
    commentFive: {
        type: DataTypes.TEXT
    },
	
})

export default Correction
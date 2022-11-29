import { DataTypes } from 'sequelize'
import { PreDeliveryModel } from './interfaces'
import db from '../db/config'

// TODO ver como relacionar con las tablas del students

const PreDelivery = db.define<PreDeliveryModel>('preDelivery', {
	preDeliveryNumber: {
		type: DataTypes.INTEGER,
	},
	course: {
		type: DataTypes.TEXT,
	},
	generalSlogan: {
		type: DataTypes.TEXT,
	},
	sloganOne: {
		type: DataTypes.TEXT,
	},
	sloganTow: {
		type: DataTypes.TEXT,
	},
	sloganThree: {
		type: DataTypes.TEXT,
	},
	sloganFour: {
		type: DataTypes.TEXT,
	},
	sloganFive: {
		type: DataTypes.TEXT,
	},
})

export default PreDelivery

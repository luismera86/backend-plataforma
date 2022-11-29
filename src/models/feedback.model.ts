import { DataTypes } from 'sequelize'
import db from '../db/config'

const Feedback = db.define('Feedback', {
	feedback: {
		type: DataTypes.STRING,
	}
})

export default Feedback
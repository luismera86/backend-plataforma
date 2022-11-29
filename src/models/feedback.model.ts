import { DataTypes } from 'sequelize'
import db from '../db/config'

const Feedback = db.define('feedback', {
	feedback: {
		type: DataTypes.STRING,
	}
})

export default Feedback
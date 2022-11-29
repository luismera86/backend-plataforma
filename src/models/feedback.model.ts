import { DataTypes } from 'sequelize'
import { FeedbackModel } from './interfaces'
import db from '../db/config'

const Feedback = db.define<FeedbackModel>('feedback', {
	feedback: {
		type: DataTypes.STRING,
	}
})

export default Feedback
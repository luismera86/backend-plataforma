import { InferAttributes, InferCreationAttributes, Model } from 'sequelize'

export interface FeedbackModel extends Model<InferAttributes<FeedbackModel>, InferCreationAttributes<FeedbackModel>> {
	feedback: string
}

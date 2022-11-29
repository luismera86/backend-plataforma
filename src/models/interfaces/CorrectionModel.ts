import { InferAttributes, InferCreationAttributes, Model } from "sequelize"

export interface CorrectionModel extends Model<InferAttributes<CorrectionModel>, InferCreationAttributes<CorrectionModel>> {
	studentName: string
	course: string
	commission: number
    preDeliveryOne: string
    preDeliveryTow: string
    preDeliveryThree: string
    commentOne: string
    commentTow: string
    commentThree: string
    commentFour: string
    commentFive: string
  }
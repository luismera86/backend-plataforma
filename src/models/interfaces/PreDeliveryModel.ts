import { InferAttributes, InferCreationAttributes, Model } from 'sequelize'

export interface PreDeliveryModel
	extends Model<InferAttributes<PreDeliveryModel>, InferCreationAttributes<PreDeliveryModel>> {
	preDeliveryNumber: number
	course: string
	generalSlogan: string
	sloganOne: string
	sloganTow: string
	sloganThree: string
	sloganFour: string
	sloganFive: string
}

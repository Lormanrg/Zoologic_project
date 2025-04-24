import { OrderDetailsModel } from "./orderDetails.input"


export class OrderModel {
    id?: number
    provider: string
    state: string
    createdAt?: Date
    updatedAt?: Date
    orderDetails: OrderDetailsModel[]
}

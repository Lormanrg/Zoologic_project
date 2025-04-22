import { OrderDetailsModel } from "./orderDetails.model"

export class FoodModel {
    id?: number
    name: string
    category: string
    price: string
    stock: string
    orderDetails: OrderDetailsModel[]
}

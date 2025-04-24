import { OrderDetailsModel } from "./orderDetails.input"

export class FoodModel {
    id?: number
    name: string
    category: string
    price: string
    stock: string
    orderDetails: OrderDetailsModel[]
}

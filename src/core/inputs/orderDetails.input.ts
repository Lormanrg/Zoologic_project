import { FoodModel } from "./food.input"
import { OrderModel } from "./order.input"

export class OrderDetailsModel {
    id?: number
    orderId: number
    order: OrderModel
    foodId: number
    food: FoodModel
    quantity: number
    price: number
    totalPrice: number

}

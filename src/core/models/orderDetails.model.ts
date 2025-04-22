import { FoodModel } from "./food.model"
import { OrderModel } from "./order.model"

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

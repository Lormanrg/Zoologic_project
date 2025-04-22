import { AnimalModel } from "./animal.model"
import { FoodModel } from "./food.model"


export class FeedModel {
    id?: number
    animalId: number
    animal: AnimalModel
    foodId: number
    food: FoodModel
    quantity: number
    price: string
    time: string
}

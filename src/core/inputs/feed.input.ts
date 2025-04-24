import { AnimalFeedModel } from "./animalFeed.input"
import { FoodModel } from "./food.input"


export class FeedInput {
    id?: number
    animalFeedId: number
    animalFeed: AnimalFeedModel
    foodId: number
    food: FoodModel
    quantity: number
    price: string
    time: string
}

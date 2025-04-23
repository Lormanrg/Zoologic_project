import { AnimalModel } from "./animal.model"
import { AnimalFeedModel } from "./animalFeed.model"
import { FoodModel } from "./food.model"


export class FeedModel {
    id?: number
    animalFeedId: number
    animalFeed: AnimalFeedModel
    foodId: number
    food: FoodModel
    quantity: number
    price: string
    time: string
}

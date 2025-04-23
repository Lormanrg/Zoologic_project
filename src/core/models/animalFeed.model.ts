import { AnimalModel } from "./animal.model"
import { FeedModel } from "./feed.model"


export class AnimalFeedModel {
    id?: number
    animalId: number
    animal: AnimalModel
    feedId: number
    feed: FeedModel
    quantity: string



}

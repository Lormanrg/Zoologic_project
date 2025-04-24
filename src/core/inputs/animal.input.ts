import { AnimalCellModel } from "./animalCell.input"
import { AnimalFeedModel } from "./animalFeed.input"
import { HabitadModel } from "./habitad.input"
import { ZoneModel } from "./zone.input"


export class AnimalInput {
    id?: number
    name: string
    species: string
    age: string
    weight: string
    habitadId: number
    habitat: HabitadModel
    zoneId: number
    zone: ZoneModel
    animalCellModelId: number
    animalCellModel: AnimalCellModel
    animalFeedId: number
    animalFeed: AnimalFeedModel



}

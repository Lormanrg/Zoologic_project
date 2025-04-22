import { AnimalModel } from "./animal.model"
import { HabitadModel } from "./habitad.model"

export class ZoneModel {

    id?: number

    name: string
    description: string
    location: string
    animalId: number
    animal: AnimalModel
    habitatId: number
    habitat: HabitadModel

}


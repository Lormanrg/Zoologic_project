import { AnimalInput } from "./animal.input"
import { HabitadModel } from "./habitad.input"

export class ZoneModel {

    id?: number

    name: string
    description: string
    location: string
    animalId: number
    animal: AnimalInput
    habitatId: number
    habitat: HabitadModel

}


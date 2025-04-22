import { AnimalCellModel } from "./animalCell.model"
import { HabitadModel } from "./habitad.model"
import { ZoneModel } from "./zone.model"


export class AnimalModel {
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



}

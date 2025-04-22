import { AnimalModel } from "./animal.model"
import { CellModel } from "./cell.model"


export class AnimalCellModel {
    id?: number
    animalId: number
    animal: AnimalModel
    cellId: number
    cell: CellModel
}

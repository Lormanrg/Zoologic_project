import { AnimalInput } from "./animal.input"
import { CellModel } from "./cell.input"


export class AnimalCellModel {
    id?: number
    animalId: number
    animal: AnimalInput
    cellId: number
    cell: CellModel
}

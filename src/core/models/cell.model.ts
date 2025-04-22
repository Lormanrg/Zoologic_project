import { AnimalCellModel } from "./animalCell.model";
import { HabitadModel } from "./habitad.model";


export class CellModel {

    id?: number;
    name: string;
    capacity: number;
    habitadId: number
    habitad: HabitadModel
    animalCellModelId: number
    animalCellModel: AnimalCellModel

}
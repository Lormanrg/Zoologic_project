import { AnimalCellModel } from "./animalCell.input";
import { HabitadModel } from "./habitad.input";


export class CellModel {

    id?: number;
    name: string;
    capacity: number;
    habitadId: number
    habitad: HabitadModel
    animalCellModelId: number
    animalCellModel: AnimalCellModel

}
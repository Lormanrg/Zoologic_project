import { CellModel } from "./cell.model"
import { ZoneModel } from "./zone.model"

export enum EHabitatType {
    AQUATIC = 'AQUATIC',
    LAND = 'LAND',
    AIR = 'AIR'

}

export class HabitadModel {
    id?: number
    name: string
    capacity: string
    type: EHabitatType
    zoneId: number
    zone: ZoneModel
    cells: CellModel[]

}

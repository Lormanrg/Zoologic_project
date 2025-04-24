import { CellModel } from "./cell.input"
import { ZoneModel } from "./zone.input"

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

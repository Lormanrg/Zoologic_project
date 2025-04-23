import { Column, ManyToOne } from "typeorm";
import { AnimalEntity } from "./animal.entity";
import { CellEntity } from "./cell.entity";
import { EntityAbstract } from "src/core/database/pg/table/abstract.table";
import { Entity } from "typeorm";

@Entity('animal_cell')
export class AnimalCellEntity extends EntityAbstract {

    @Column({ type: 'int' })
    animalId: number

    @ManyToOne(() => AnimalEntity, (animal) => animal.animalCell)
    animal: AnimalEntity

    @Column({ type: 'int' })
    cellId: number

    @ManyToOne(() => CellEntity, (cell) => cell.animalCell)
    cell: CellEntity

}
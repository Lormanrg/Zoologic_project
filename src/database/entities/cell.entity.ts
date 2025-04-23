import { EntityAbstract } from "src/core/database/pg/table/abstract.table";
import { AnimalEntity } from "./animal.entity";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { HabitadEntity } from "./habitad.entity";
import { AnimalCellEntity } from "./animalCell.entity";

@Entity('cell')
export class CellEntity extends EntityAbstract {



    @Column({ type: 'int' })
    animalId: number

    @Column({ type: 'int' })
    habitadId: number

    @ManyToOne(() => HabitadEntity, (habitad) => habitad.cells)
    habitad: HabitadEntity

    @ManyToOne(() => AnimalEntity, (animal) => animal.animalCell)
    animal: AnimalEntity


    @OneToMany(() => AnimalCellEntity, (animalCell) => animalCell.cell)
    animalCell: AnimalCellEntity[]


}
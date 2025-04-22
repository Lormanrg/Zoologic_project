import { EntityAbstract } from "src/core/database/pg/table/abstract.table";
import { ZoneEntity } from "./zone.entity";
import { Column, ManyToOne, OneToMany } from "typeorm";
import { AnimalEntity } from "./animal.entity";
import { CellEntity } from "./cell.entity";

export class HabitadEntity extends EntityAbstract {

    @Column({ type: 'varchar' })
    zonesId: number

    @OneToMany(() => ZoneEntity, (zone) => zone.habitat)
    zone: ZoneEntity[]


    @Column({ type: 'varchar' })
    animalId: number

    @ManyToOne(() => AnimalEntity, (animal) => animal.habitad)
    animal: AnimalEntity

    @Column({ type: 'int' })
    cellId: number

    @OneToMany(() => CellEntity, (cell) => cell.habitad)
    cells: CellEntity[]
}


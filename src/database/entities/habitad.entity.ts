import { EntityAbstract } from "src/core/database/pg/table/abstract.table";
import { ZoneEntity } from "./zone.entity";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { AnimalEntity } from "./animal.entity";
import { CellEntity } from "./cell.entity";
import { Field, Int, ObjectType } from "@nestjs/graphql";

@Entity('habitad')
@ObjectType()
export class HabitadEntity extends EntityAbstract {

    @Column({ type: 'varchar' })
    @Field(() => Int)
    zonesId: number

    @OneToMany(() => ZoneEntity, (zone) => zone.habitat)
    @Field(() => [ZoneEntity])
    zone: ZoneEntity[]


    @Column({ type: 'varchar' })
    @Field(() => Int)
    animalId: number

    @ManyToOne(() => AnimalEntity, (animal) => animal.habitad)
    @Field(() => AnimalEntity)
    animal: AnimalEntity

    @Column({ type: 'int' })
    @Field(() => Int)
    cellId: number

    @OneToMany(() => CellEntity, (cell) => cell.habitad)
    @Field(() => [CellEntity])
    cells: CellEntity[]
}


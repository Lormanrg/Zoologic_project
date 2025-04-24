import { EntityAbstract } from "src/core/database/pg/table/abstract.table";
import { AnimalEntity } from "./animal.entity";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { HabitadEntity } from "./habitad.entity";
import { AnimalCellEntity } from "./animalCell.entity";
import { Field, Int, ObjectType } from "@nestjs/graphql";

@Entity('cell')
@ObjectType()
export class CellEntity extends EntityAbstract {



    @Column({ type: 'int' })
    @Field(() => Int)
    animalId: number

    @Column({ type: 'int' })
    @Field(() => Int)
    habitadId: number

    @ManyToOne(() => HabitadEntity, (habitad) => habitad.cells)
    @Field(() => HabitadEntity)
    habitad: HabitadEntity

    @ManyToOne(() => AnimalEntity, (animal) => animal.animalCell)
    @Field(() => AnimalEntity)
    animal: AnimalEntity


    @OneToMany(() => AnimalCellEntity, (animalCell) => animalCell.cell)
    @Field(() => [AnimalCellEntity])
    animalCell: AnimalCellEntity[]


}
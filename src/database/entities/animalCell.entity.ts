import { Column, ManyToOne } from "typeorm";
import { AnimalEntity } from "./animal.entity";
import { CellEntity } from "./cell.entity";
import { EntityAbstract } from "src/core/database/pg/table/abstract.table";
import { Entity } from "typeorm";
import { Field, Int, ObjectType } from "@nestjs/graphql";

@Entity('animal_cell')
@ObjectType()
export class AnimalCellEntity extends EntityAbstract {

    @Column({ type: 'int' })
    @Field(() => Int)
    animalId: number

    @ManyToOne(() => AnimalEntity, (animal) => animal.animalCell)
    @Field(() => AnimalEntity)
    animal: AnimalEntity

    @Column({ type: 'int' })
    @Field(() => Int)
    cellId: number

    @ManyToOne(() => CellEntity, (cell) => cell.animalCell)
    @Field(() => CellEntity)
    cell: CellEntity

}
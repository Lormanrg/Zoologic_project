import { Column, ManyToOne } from "typeorm";
import { EntityAbstract } from "src/core/database/pg/table/abstract.table";
import { Entity } from "typeorm";
import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Animal } from "./animal.entity";
import { Cell } from "./cell.entity";

@Entity('animal_cell')
@ObjectType()
export class AnimalCell extends EntityAbstract {

    @Column({ type: 'int' })
    @Field(() => Int)
    animalId: number

    @ManyToOne(() => Animal, (animal) => animal.animalCell)
    @Field(() => Animal)
    animal: Animal

    @Column({ type: 'int' })
    @Field(() => Int)
    cellId: number

    @ManyToOne(() => Cell, (cell) => cell.animalCell)
    @Field(() => Cell)
    cell: Cell

}
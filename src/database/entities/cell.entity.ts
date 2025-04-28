import { EntityAbstract } from "src/core/database/pg/table/abstract.table";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { AnimalCell } from "./animalCell.entity";
import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Habitad } from "./habitad.entity";
import { Animal } from "./animal.entity";

@Entity('cell')
@ObjectType()
export class Cell extends EntityAbstract {



    @Column({ type: 'int' })
    @Field(() => Int)
    animalId: number

    @Column({ type: 'int' })
    @Field(() => Int)
    habitadId: number

    @ManyToOne(() => Habitad, (habitad) => habitad.cells)
    @Field(() => Habitad)
    habitad: Habitad

    @ManyToOne(() => Animal, (animal) => animal.animalCell)
    @Field(() => Animal)
    animal: Animal


    @OneToMany(() => AnimalCell, (animalCell) => animalCell.cell)
    @Field(() => [AnimalCell])
    animalCell: AnimalCell[]


}
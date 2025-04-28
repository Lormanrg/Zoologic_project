import { EntityAbstract } from "src/core/database/pg/table/abstract.table";
import { Zone } from "./zone.entity";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { Animal } from "./animal.entity";
import { Cell } from "./cell.entity";
import { Field, Int, ObjectType } from "@nestjs/graphql";

@Entity('habitad')
@ObjectType()
export class Habitad extends EntityAbstract {

    @Column({ type: 'varchar' })
    @Field(() => Int)
    zonesId: number

    @OneToMany(() => Zone, (zone) => zone.habitat)
    @Field(() => [Zone])
    zone: Zone[]


    @Column({ type: 'varchar' })
    @Field(() => Int)
    animalId: number

    @ManyToOne(() => Animal, (animal) => animal.habitad)
    @Field(() => Animal)
    animal: Animal

    @Column({ type: 'int' })
    @Field(() => Int)
    cellId: number

    @OneToMany(() => Cell, (cell) => cell.habitad)
    @Field(() => [Cell])
    cells: Cell[]
}


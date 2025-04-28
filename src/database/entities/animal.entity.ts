import { EntityAbstract } from "src/core/database/pg/table/abstract.table";
import { Feed } from "./feed.entity";
import { Column, Entity, OneToMany } from "typeorm";
import { Zone } from "./zone.entity";
import { Habitad } from "./habitad.entity";
import { AnimalCell } from "./animalCell.entity";
import { AnimalFeed } from "./animalFeed.entity";
import { Field, Int, ObjectType } from "@nestjs/graphql";

@Entity('animal')
@ObjectType()
export class Animal extends EntityAbstract {

    @Column({ type: 'varchar' })
    @Field(() => String)
    name: string

    @Column({ type: 'varchar' })
    @Field(() => String)
    species: string

    @Column({ type: 'varchar' })
    @Field(() => String)
    age: string

    @Column({ type: 'varchar' })
    @Field(() => String)
    weight: string

    @Column({ type: 'int' })
    @Field(() => Int)
    feedId: number

    @OneToMany(() => AnimalFeed, (animalFeed) => animalFeed.animal)
    @Field(() => [AnimalFeed])
    animalFeed: AnimalFeed


    @Column({ type: 'int' })
    @Field(() => Int)
    zoneId: number

    @OneToMany(() => Zone, (zone) => zone.animal)
    @Field(() => [Zone])
    zone: Zone[]

    @Column({ type: 'int' })
    @Field(() => Int)
    habitadId: number

    @OneToMany(() => Habitad, (habitat) => habitat.animal)
    @Field(() => [Habitad])
    habitad: Habitad[]



    @OneToMany(() => AnimalCell, (animalCell) => animalCell.animal)
    @Field(() => [AnimalCell])
    animalCell: AnimalCell[]
}

import { EntityAbstract } from "src/core/database/pg/table/abstract.table";
import { FeedEntity } from "./feed.entity";
import { Column, Entity, OneToMany } from "typeorm";
import { ZoneEntity } from "./zone.entity";
import { HabitadEntity } from "./habitad.entity";
import { AnimalCellEntity } from "./animalCell.entity";
import { AnimalFeed } from "./animalFeed.entity";
import { Field, Int, ObjectType } from "@nestjs/graphql";

@Entity('animal')
@ObjectType()
export class AnimalEntity extends EntityAbstract {

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

    @OneToMany(() => ZoneEntity, (zone) => zone.animal)
    @Field(() => [ZoneEntity])
    zone: ZoneEntity[]

    @Column({ type: 'int' })
    @Field(() => Int)
    habitadId: number

    @OneToMany(() => HabitadEntity, (habitat) => habitat.animal)
    @Field(() => [HabitadEntity])
    habitad: HabitadEntity[]



    @OneToMany(() => AnimalCellEntity, (animalCell) => animalCell.animal)
    @Field(() => [AnimalCellEntity])
    animalCell: AnimalCellEntity[]
}

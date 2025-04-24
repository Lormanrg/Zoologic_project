import { EntityAbstract } from "src/core/database/pg/table/abstract.table";
import { AnimalEntity } from "./animal.entity";
import { HabitadEntity } from "./habitad.entity";
import { Column, Entity, ManyToOne } from "typeorm";
import { Field, Int, ObjectType } from "@nestjs/graphql";

@Entity('zone')
@ObjectType()
export class ZoneEntity extends EntityAbstract {


    @Column({ type: 'varchar' })
    @Field(() => String)
    name: string

    @Column({ type: 'varchar' })
    @Field(() => String)
    description: string

    @Column({ type: 'varchar' })
    @Field(() => String)
    location: string

    @Column({ type: 'int' })
    @Field(() => Int)
    animalId: number

    @ManyToOne(() => AnimalEntity, (animal) => animal.zone)
    @Field(() => AnimalEntity)
    animal: AnimalEntity

    @Column({ type: 'int' })
    @Field(() => Int)
    habitatId: number

    @ManyToOne(() => HabitadEntity, (habitat) => habitat.zone)
    @Field(() => HabitadEntity)
    habitat: HabitadEntity
}

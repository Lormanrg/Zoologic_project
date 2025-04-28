import { EntityAbstract } from "src/core/database/pg/table/abstract.table";
import { Habitad } from "./habitad.entity";
import { Column, Entity, ManyToOne } from "typeorm";
import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Animal } from "./animal.entity";

@Entity('zone')
@ObjectType()
export class Zone extends EntityAbstract {


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

    @ManyToOne(() => Animal, (animal) => animal.zone)
    @Field(() => Animal)
    animal: Animal

    @Column({ type: 'int' })
    @Field(() => Int)
    habitatId: number

    @ManyToOne(() => Habitad, (habitat) => habitat.zone)
    @Field(() => Habitad)
    habitat: Habitad
}

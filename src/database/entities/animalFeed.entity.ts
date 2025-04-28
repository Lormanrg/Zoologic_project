import { EntityAbstract } from "src/core/database/pg/table/abstract.table";
import { Column, Entity, ManyToOne } from "typeorm";
import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Feed } from "./feed.entity";
import { Animal } from "./animal.entity";


@Entity('animal_feed')
@ObjectType()
export class AnimalFeed extends EntityAbstract {

    @ManyToOne(() => Feed, (feed) => feed.animalFeed)
    @Field(() => Feed)
    feed: Feed

    @Column({ type: 'int' })
    @Field(() => Int)
    quantity: string

    @ManyToOne(() => Animal, (animal) => animal.animalFeed)
    @Field(() => Animal)
    animal: Animal


}


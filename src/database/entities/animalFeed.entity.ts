import { EntityAbstract } from "src/core/database/pg/table/abstract.table";
import { Column, Entity, ManyToOne } from "typeorm";
import { FeedEntity } from "./feed.entity";
import { AnimalEntity } from "./animal.entity";
import { Field, Int, ObjectType } from "@nestjs/graphql";


@Entity('animal_feed')
@ObjectType()
export class AnimalFeed extends EntityAbstract {

    @ManyToOne(() => FeedEntity, (feed) => feed.animalFeed)
    @Field(() => FeedEntity)
    feed: FeedEntity

    @Column({ type: 'int' })
    @Field(() => Int)
    quantity: string

    @ManyToOne(() => AnimalEntity, (animal) => animal.animalFeed)
    @Field(() => AnimalEntity)
    animal: AnimalEntity


}


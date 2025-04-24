import { EntityAbstract } from "src/core/database/pg/table/abstract.table";
import { AnimalEntity } from "./animal.entity";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { FoodEntity } from "./food.entity";
import { AnimalFeed } from "./animalFeed.entity";
import { Field, Int, ObjectType } from "@nestjs/graphql";

@Entity('feed')
@ObjectType()
export class FeedEntity extends EntityAbstract {

    @Field(() => [AnimalFeed])

    @OneToMany(() => AnimalFeed, (animalFeed) => animalFeed.feed)
    animalFeed: AnimalFeed

    @Column({ type: 'int' })
    @Field(() => Int)
    foodId: number

    @ManyToOne(() => FoodEntity, (food) => food.feeds)
    @Field(() => FoodEntity)
    food: FoodEntity

}

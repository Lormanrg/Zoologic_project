import { EntityAbstract } from "src/core/database/pg/table/abstract.table";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { Food } from "./food.entity";
import { AnimalFeed } from "./animalFeed.entity";
import { Field, Int, ObjectType } from "@nestjs/graphql";

@Entity('feed')
@ObjectType()
export class Feed extends EntityAbstract {

    @Field(() => [AnimalFeed])

    @OneToMany(() => AnimalFeed, (animalFeed) => animalFeed.feed)
    animalFeed: AnimalFeed

    @Column({ type: 'int' })
    @Field(() => Int)
    foodId: number

    @ManyToOne(() => Food, (food) => food.feeds)
    @Field(() => Food)
    food: Food

}

import { EntityAbstract } from "src/core/database/pg/table/abstract.table";
import { AnimalEntity } from "./animal.entity";
import { Column, ManyToOne, OneToMany } from "typeorm";
import { FoodEntity } from "./food.entity";
import { AnimalFeed } from "./animalFeed.entity";


export class FeedEntity extends EntityAbstract {


    @OneToMany(() => AnimalFeed, (animalFeed) => animalFeed.feed)
    animalFeed: AnimalFeed

    @Column({ type: 'int' })
    foodId: number

    @ManyToOne(() => FoodEntity, (food) => food.feeds)
    food: FoodEntity

}

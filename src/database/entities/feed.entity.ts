import { EntityAbstract } from "src/core/database/pg/table/abstract.table";
import { AnimalEntity } from "./animal.entity";
import { Column, ManyToOne } from "typeorm";
import { FoodEntity } from "./food.entity";


export class FeedEntity extends EntityAbstract {

    @Column({ type: 'int' })
    animalId: number

    @ManyToOne(() => AnimalEntity, (animal) => animal.feed)
    animal: AnimalEntity

    @Column({ type: 'int' })
    foodId: number

    @ManyToOne(() => FoodEntity, (food) => food.feeds)
    food: FoodEntity

}

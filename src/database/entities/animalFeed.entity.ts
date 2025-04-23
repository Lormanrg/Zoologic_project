import { EntityAbstract } from "src/core/database/pg/table/abstract.table";
import { Column, Entity, ManyToOne } from "typeorm";
import { FeedEntity } from "./feed.entity";
import { AnimalEntity } from "./animal.entity";


@Entity('animal_feed')
export class AnimalFeed extends EntityAbstract {

    @ManyToOne(() => FeedEntity, (feed) => feed.animalFeed)
    feed: FeedEntity

    @Column({ type: 'int' })
    quantity: string

    @ManyToOne(() => AnimalEntity, (animal) => animal.animalFeed)
    animal: AnimalEntity


}


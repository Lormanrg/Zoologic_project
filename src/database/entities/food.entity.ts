import { EntityAbstract } from "src/core/database/pg/table/abstract.table";
import { Column, OneToMany } from "typeorm";
import { OrderDetailsEntity } from "./orderDetails.entity";
import { FeedEntity } from "./feed.entity";
import { Entity } from "typeorm";

@Entity('food')
export class FoodEntity extends EntityAbstract {

    @Column({ type: 'varchar', length: 255 })
    name: string

    @Column({ type: 'varchar', length: 255 })
    category: string

    @Column({ type: 'varchar', length: 255 })
    price: string


    @Column({ type: 'varchar', length: 255 })
    stock: string

    @Column({ type: 'int' })
    orderDetailsId: number

    @OneToMany(() => OrderDetailsEntity, (orderDetails) => orderDetails.food)
    orderDetails: OrderDetailsEntity[]

    @Column({ type: 'int' })
    feedId: number

    @OneToMany(() => FeedEntity, (feed) => feed.food)
    feeds: FeedEntity[]

}

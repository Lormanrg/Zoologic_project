import { EntityAbstract } from "src/core/database/pg/table/abstract.table";
import { Column, OneToMany } from "typeorm";
import { OrderDetailsEntity } from "./orderDetails.entity";
import { FeedEntity } from "./feed.entity";
import { Entity } from "typeorm";
import { Field, Int, ObjectType } from "@nestjs/graphql";

@Entity('food')
@ObjectType()
export class FoodEntity extends EntityAbstract {

    @Column({ type: 'varchar', length: 255 })
    @Field(() => String)
    name: string

    @Column({ type: 'varchar', length: 255 })
    @Field(() => String)
    category: string

    @Column({ type: 'varchar', length: 255 })
    @Field(() => String)
    price: string

    @Column({ type: 'varchar', length: 255 })
    @Field(() => String)
    @Column({ type: 'varchar', length: 255 })
    stock: string

    @Column({ type: 'int' })
    @Field(() => Int)
    orderDetailsId: number

    @OneToMany(() => OrderDetailsEntity, (orderDetails) => orderDetails.food)
    @Field(() => [OrderDetailsEntity])
    orderDetails: OrderDetailsEntity[]

    @Column({ type: 'int' })
    @Field(() => Int)
    feedId: number

    @OneToMany(() => FeedEntity, (feed) => feed.food)
    @Field(() => [FeedEntity])
    feeds: FeedEntity[]

}

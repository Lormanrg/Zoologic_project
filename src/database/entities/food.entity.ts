import { EntityAbstract } from "src/core/database/pg/table/abstract.table";
import { Column, OneToMany } from "typeorm";
import { OrderDetails } from "./orderDetails.entity";
import { Feed } from "./feed.entity";
import { Entity } from "typeorm";
import { Field, Int, ObjectType } from "@nestjs/graphql";

@Entity('food')
@ObjectType()
export class Food extends EntityAbstract {

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

    @OneToMany(() => OrderDetails, (orderDetails) => orderDetails.food)
    @Field(() => [OrderDetails])
    orderDetails: OrderDetails[]

    @Column({ type: 'int' })
    @Field(() => Int)
    feedId: number

    @OneToMany(() => Feed, (feed) => feed.food)
    @Field(() => [Feed])
    feeds: Feed[]

}

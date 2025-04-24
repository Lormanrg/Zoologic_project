import { EntityAbstract } from "src/core/database/pg/table/abstract.table";
import { OrderEntity } from "./order.entity";
import { FoodEntity } from "./food.entity";
import { Column, Entity, ManyToOne } from "typeorm";
import { Field, Int, ObjectType } from "@nestjs/graphql";

@Entity('order_details')
@ObjectType()
export class OrderDetailsEntity extends EntityAbstract {

    @Column({ type: 'int' })
    @Field(() => Int)
    orderId: number

    @ManyToOne(() => OrderEntity, (order) => order.orderDetails)
    @Field(() => OrderEntity)
    order: OrderEntity

    @Column({ type: 'int' })
    @Field(() => Int)
    foodId: number

    @ManyToOne(() => FoodEntity, (food) => food.orderDetails)
    @Field(() => FoodEntity)
    food: FoodEntity

    @Column({ type: 'int' })
    @Field(() => Int)
    quantity: number

    @Column({ type: 'int' })
    @Field(() => Int)
    price: number

    @Column({ type: 'int' })
    @Field(() => Int)
    totalPrice: number
}

import { EntityAbstract } from "src/core/database/pg/table/abstract.table";
import { Column, Entity, ManyToOne } from "typeorm";
import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Order } from "./order.entity";
import { Food } from "./food.entity";

@Entity('order_details')
@ObjectType()
export class OrderDetails extends EntityAbstract {

    @Column({ type: 'int' })
    @Field(() => Int)
    orderId: number

    @ManyToOne(() => Order, (order) => order.orderDetails)
    @Field(() => Order)
    order: Order

    @Column({ type: 'int' })
    @Field(() => Int)
    foodId: number

    @ManyToOne(() => Food, (food) => food.orderDetails)
    @Field(() => Food)
    food: Food

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

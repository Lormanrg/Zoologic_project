import { EntityAbstract } from "src/core/database/pg/table/abstract.table";
import { OrderEntity } from "./order.entity";
import { FoodEntity } from "./food.entity";
import { Column, ManyToOne } from "typeorm";


export class OrderDetailsEntity extends EntityAbstract {

    @Column({ type: 'int' })
    orderId: number

    @ManyToOne(() => OrderEntity, (order) => order.orderDetails)
    order: OrderEntity

    @Column({ type: 'int' })
    foodId: number

    @ManyToOne(() => FoodEntity, (food) => food.orderDetails)
    food: FoodEntity

    @Column({ type: 'int' })
    quantity: number

    @Column({ type: 'int' })
    price: number

    @Column({ type: 'int' })
    totalPrice: number
}

import { EntityAbstract } from "src/core/database/pg/table/abstract.table";
import { Column, Entity, OneToMany } from "typeorm";
import { OrderDetails } from "./orderDetails.entity";
import { Field, Int, ObjectType } from "@nestjs/graphql";

@Entity('order')
@ObjectType()
export class Order extends EntityAbstract {

    @Column({ type: 'varchar', length: 255 })
    @Field(() => String)
    provider: string

    @Column({ type: 'varchar', length: 255 })
    @Field(() => String)
    state: string

    @Column({ type: 'int' })
    @Field(() => Int)
    orderDetailsId: number

    @OneToMany(() => OrderDetails, (orderDetails) => orderDetails.order)
    @Field(() => [OrderDetails])
    orderDetails: OrderDetails[]


}

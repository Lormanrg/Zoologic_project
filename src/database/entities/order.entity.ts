import { EntityAbstract } from "src/core/database/pg/table/abstract.table";
import { Column, Entity, OneToMany } from "typeorm";
import { OrderDetailsEntity } from "./orderDetails.entity";
import { Field, Int, ObjectType } from "@nestjs/graphql";

@Entity('order')
@ObjectType()
export class OrderEntity extends EntityAbstract {

    @Column({ type: 'varchar', length: 255 })
    @Field(() => String)
    provider: string

    @Column({ type: 'varchar', length: 255 })
    @Field(() => String)
    state: string

    @Column({ type: 'int' })
    @Field(() => Int)
    orderDetailsId: number

    @OneToMany(() => OrderDetailsEntity, (orderDetails) => orderDetails.order)
    @Field(() => [OrderDetailsEntity])
    orderDetails: OrderDetailsEntity[]


}

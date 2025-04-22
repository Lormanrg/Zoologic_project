import { EntityAbstract } from "src/core/database/pg/table/abstract.table";
import { Column, Entity, OneToMany } from "typeorm";
import { OrderDetailsEntity } from "./orderDetails.entity";


export class OrderEntity extends EntityAbstract {

    @Column({ type: 'varchar', length: 255 })
    provider: string

    @Column({ type: 'varchar', length: 255 })
    state: string

    @Column({ type: 'int' })
    orderDetailsId: number

    @OneToMany(() => OrderDetailsEntity, (orderDetails) => orderDetails.order)
    orderDetails: OrderDetailsEntity[]


}

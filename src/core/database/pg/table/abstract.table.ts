import { CreateDateColumn, DeleteDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity()
export abstract class EntityAbstract {

    @PrimaryColumn()
    id?: number

    @CreateDateColumn({ name: 'created_at' })
    createdAt?: Date

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt?: Date

    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt?: Date

}
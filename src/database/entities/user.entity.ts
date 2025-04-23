import { EntityAbstract } from "src/core/database/pg/table/abstract.table";
import { RoleModel } from "src/core/models/role.model";
import { EUserStatus } from "src/core/models/user.model";
import { Column, Entity, ManyToMany, ManyToOne, OneToOne } from "typeorm";
import { RoleEntity } from "./role.entity";

@Entity('user')
export class UserEntity extends EntityAbstract {

    @Column({ type: 'varchar', length: 255, nullable: false })
    userName: string

    @Column({ type: 'varchar', length: 255, nullable: false })
    email: string

    @Column({ type: 'varchar', length: 255, nullable: false })
    password: string

    @Column({ type: 'enum', enum: EUserStatus, default: EUserStatus.ACTIVE })
    status: EUserStatus

    @Column({ type: 'int' })
    roleId: number

    @ManyToOne(() => RoleEntity, (role) => role.id)
    role: RoleEntity




}


import { EntityAbstract } from "src/core/database/pg/table/abstract.table";
import { RoleModel } from "src/core/inputs/role.input";
import { EUserStatus } from "src/core/inputs/user.input";
import { Column, Entity, ManyToMany, ManyToOne, OneToOne } from "typeorm";
import { RoleEntity } from "./role.entity";
import { Field, Int, ObjectType } from "@nestjs/graphql";

@Entity('user')
@ObjectType()
export class UserEntity extends EntityAbstract {

    @Column({ type: 'varchar', length: 255, nullable: false })
    @Field(() => String)
    userName?: string

    @Column({ type: 'varchar', length: 255, nullable: false })
    @Field(() => String)
    email: string

    @Column({ type: 'varchar', length: 255, nullable: false })
    @Field(() => String)
    password: string

    @Column({ type: 'enum', enum: EUserStatus, default: EUserStatus.ACTIVE })
    @Field(() => EUserStatus)
    status?: EUserStatus

    @Column({ type: 'int' })
    @Field(() => Int)
    roleId?: number

    @ManyToOne(() => RoleEntity, (role) => role.id)
    @Field(() => RoleEntity)
    role?: RoleEntity




}


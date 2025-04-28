import { EntityAbstract } from "src/core/database/pg/table/abstract.table";
import { EUserStatus } from "src/core/inputs/user.input";
import { Column, Entity, ManyToMany, ManyToOne, OneToOne } from "typeorm";
import { Field, Int, ObjectType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsOptional } from "class-validator";
import { Role } from "./role.entity";

@Entity('user')
@ObjectType()
export class User extends EntityAbstract {

    @Column({ type: 'varchar', length: 255, nullable: true })
    @Field(() => String)
    @IsOptional()
    userName?: string

    @Column({ type: 'varchar', length: 255, nullable: false })
    @Field(() => String)
    @IsEmail()
    email: string

    @Column({ type: 'varchar', length: 255, nullable: false })
    @Field(() => String)
    @IsNotEmpty()
    password: string

    @Column({ type: 'enum', enum: EUserStatus, default: EUserStatus.ACTIVE, nullable: true })
    @Field(() => EUserStatus)
    @IsOptional()
    status?: EUserStatus

    @Column({ type: 'int', nullable: true })
    @Field(() => Int)
    @IsOptional()
    roleId?: number

    @ManyToOne(() => Role, (role) => role.id)
    @Field(() => Role, { nullable: true })
    @IsOptional()
    role?: Role




}


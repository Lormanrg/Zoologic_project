import { EntityAbstract } from "src/core/database/pg/table/abstract.table";
import { Column } from "typeorm";
import { Status } from '../../core/types/status.type';
import { ERoleStatus } from "src/core/inputs/role.input";
import { Entity } from "typeorm";
import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
@Entity('role')
export class RoleEntity extends EntityAbstract {

    @Column()
    @Field(() => String)
    name: string

    @Column()
    @Field(() => ERoleStatus)
    status?: ERoleStatus
}

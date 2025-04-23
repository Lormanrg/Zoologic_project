import { EntityAbstract } from "src/core/database/pg/table/abstract.table";
import { Column } from "typeorm";
import { Status } from '../../core/types/status.type';
import { ERoleStatus } from "src/core/models/role.model";
import { Entity } from "typeorm";

@Entity('role')
export class RoleEntity extends EntityAbstract {

    @Column()
    name: string

    @Column()
    status?: ERoleStatus
}

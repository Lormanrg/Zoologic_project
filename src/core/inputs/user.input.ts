import { RoleModel } from "./role.input";
import { registerEnumType } from '@nestjs/graphql';

export enum EUserStatus {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE'
}

registerEnumType(EUserStatus, {
    name: 'EUserStatus',
    description: 'El estado del usuario',
})

export class UserModel {
    id?: number
    userName?: string;
    email: string;
    password: string
    roleId?: number
    role?: RoleModel
    status?: EUserStatus



}

import { RoleModel } from "./role.model";

export enum EUserStatus {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE'
}

export class UserModel {

    username: string;
    email: string;
    password: string
    roleId: number
    role: RoleModel
    status: EUserStatus



}

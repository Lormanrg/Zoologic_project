import { registerEnumType } from '@nestjs/graphql';


export enum ERoleStatus {
    ADMIN = 'admin',
    USER = 'user'
}

registerEnumType(ERoleStatus, {

    name: 'ERoleStatus',
    description: 'El estado del rol',
})

export class RoleModel {
    id?: number
    name: string
    status?: ERoleStatus
    createdAt?: Date

}

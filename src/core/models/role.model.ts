

export enum ERoleStatus {
    ADMIN = 'admin',
    USER = 'user'
}

export class RoleModel {
    id?: number
    name: string
    status?: ERoleStatus
    createdAt?: Date

}

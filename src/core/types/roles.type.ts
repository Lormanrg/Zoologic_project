export enum Roles {
    ADMIN = 'ADMIN',
    USER = 'USER',
}

export const RolesTranslate: Record<Roles, string> = {
    [Roles.ADMIN]: 'Administrador',
    [Roles.USER]: 'Usuario',
}

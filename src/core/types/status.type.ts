export enum Status {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
    SUSPENDED = 'SUSPENDED',
    DELETED = 'DELETED',
}

export const StatusTranslate: Record<Status, string> = {
    [Status.ACTIVE]: 'Activo',
    [Status.INACTIVE]: 'Inactivo',
    [Status.SUSPENDED]: 'Suspendido',
    [Status.DELETED]: 'Eliminado',
}

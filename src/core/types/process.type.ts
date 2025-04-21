export enum Process {
    CREATE = 'CREATE',
    UPDATE = 'UPDATE',
    SUSPEND = 'SUSPEND',
    DELETE = 'DELETE',
    LIST = 'LIST',
    FIND = 'FIND',
}

export const ProcessTranslate: Record<Process, string> = {
    [Process.CREATE]: 'Crear',
    [Process.UPDATE]: 'Editar',
    [Process.SUSPEND]: 'Suspender',
    [Process.DELETE]: 'Eliminar',
    [Process.LIST]: 'Listar',
    [Process.FIND]: 'Ver',
}

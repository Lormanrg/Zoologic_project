// import { IRolePermission } from '@/apps/role/domain/interfaces/IRolePermission'

export interface Area {
    id: number
    name: string
    translatedName: string
    createdAt: string
    updatedAt: string
}

export interface Process {
    id: number
    name: string
    translatedName: string
}

export interface Permission {
    id: number
    processId: number
    areaId: number
    area: Area
    process: Process
    accessDenied: boolean
}

export interface GroupedPermissions {
    [key: string]: {
        area: Area
        permissions: Permission[]
    }
}

export interface Role {
    id: number
    name: string
    translatedName: string
    statusId: number
    areaId: number | null
    createdAt: string
    updatedAt: string
}

export interface Info {
    status: number
    message: string
    code: string
    message_to_show: string
}

export interface RolesPermissionsFormatted {
    groupedPermissions: GroupedPermissions
}

export const formatRolesPermissions = (rolesPermissions: any[]): RolesPermissionsFormatted => {
    const groupedPermissions = rolesPermissions.reduce((acc, permission) => {
        if (!acc[(permission.permission as any)?.area.name]) {
            acc[(permission.permission as any)?.area.name] = {
                area: (permission.permission as any)?.area,
                permissions: [],
            }
        }

        acc[(permission.permission as any).area.name].permissions.push({
            ...(permission.permission as any),
            rolePermission: permission.id,
            accessDenied: permission.accessDenied,
        })
        return acc
    }, {})

    return { groupedPermissions }
}

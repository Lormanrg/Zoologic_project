// import { IUser } from '@/apps/user/domain/interfaces'



export interface userMetadata {
    // user: UserModel
    ip: string
    coords: ICoords
}

export interface ICoords {
    latitude: string
    longitude: string
}

import * as geo from 'geoip-lite'
import { ICoords } from '../interfaces/Igossip'

export const getCoordsByIp = async (rIp: string): Promise<ICoords> => {
    const ip = rIp === '::1' ? '200.41.119.38' : rIp

    const geoMeta = geo.lookup(ip) ? await geo.lookup(ip).ll : ['10.000000', '-66.000000']
    const coords: ICoords = {
        latitude: String(geoMeta[0]),
        longitude: String(geoMeta[1]),
    }

    return coords
}

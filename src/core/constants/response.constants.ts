import { HttpStatus } from '@nestjs/common'
import { GlobalEventEnum, IInfo } from '../interfaces'

export const GlobalEventSuccess: Record<Exclude<GlobalEventEnum, 'SEND_MAIL'>, IInfo> = {
    [GlobalEventEnum.CREATE]: {
        status: HttpStatus.CREATED,
        message: '_CREATED',
        code: 'CR001',
    },
    [GlobalEventEnum.UPDATE]: {
        status: HttpStatus.OK,
        message: '_UPDATED',
        code: 'UR001',
    },
    [GlobalEventEnum.DELETE]: {
        status: HttpStatus.OK,
        message: '_SUSPENDED',
        code: 'SR001',
    },
    [GlobalEventEnum.LIST]: {
        status: HttpStatus.OK,
        message: '_LIST',
        code: 'LR001',
    },
    [GlobalEventEnum.LOGIN]: {
        status: HttpStatus.OK,
        message: '_LOGIN SUCCESSFULLY',
        code: 'LS001',
    },
    [GlobalEventEnum.RECOVER_PASSWORD]: {
        status: HttpStatus.OK,
        message: '_RECOVER PASSWORD SUCCESSFULLY',
        code: 'RP001',
    },
    [GlobalEventEnum.UPDATE_PASSWORD]: {
        status: HttpStatus.OK,
        message: '_UPDATE_PASSWORD_SUCCESSFULLY',
        code: 'UP001',
    },
    [GlobalEventEnum.FIND]: {
        status: HttpStatus.OK,
        message: '_FIND',
        code: 'FR001',
    },
    [GlobalEventEnum.VERIFY_TOKEN]: {
        code: 'VT001',
        message: '_VERIFY_TOKEN',
        status: HttpStatus.OK,
        message_to_show: '_VERIFY_TOKEN',
    },
}

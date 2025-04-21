import { HttpStatus } from '@nestjs/common'
import { GlobalEventEnum, IInfo } from '../interfaces'

export const GlobalEventError: Record<Exclude<GlobalEventEnum, 'SEND_MAIL'>, IInfo> = {
    [GlobalEventEnum.CREATE]: {
        status: HttpStatus.BAD_REQUEST,
        message: '_CREATE_ERROR',
        code: 'CE001',
    },
    [GlobalEventEnum.UPDATE]: {
        status: HttpStatus.BAD_REQUEST,
        message: '_UPDATE_ERROR',
        code: 'UE001',
    },
    [GlobalEventEnum.DELETE]: {
        status: HttpStatus.BAD_REQUEST,
        message: '_DELETE_ERROR',
        code: 'DE001',
    },
    [GlobalEventEnum.LIST]: {
        status: HttpStatus.NOT_FOUND,
        message: '_LIST',
        code: 'LR001',
    },
    [GlobalEventEnum.LOGIN]: {
        status: HttpStatus.UNAUTHORIZED,
        message: '_LOGIN_ERROR',
        code: 'LE001',
    },
    [GlobalEventEnum.RECOVER_PASSWORD]: {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        message: '_RECOVER_PASSWORD_ERROR',
        code: 'RP001',
    },
    [GlobalEventEnum.UPDATE_PASSWORD]: {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        message: '_UPDATE_PASSWORD_ERROR',
        code: 'UP001',
    },
    [GlobalEventEnum.FIND]: {
        status: HttpStatus.NOT_FOUND,
        message: '_NOT_FOUND',
        code: 'NF001',
    },
    [GlobalEventEnum.VERIFY_TOKEN]: {
        code: 'VT001',
        message: '_VERIFY_TOKEN',
        status: HttpStatus.BAD_REQUEST,
        message_to_show: '_VERIFY_TOKEN',
    },
}

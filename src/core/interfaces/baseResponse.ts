import { HttpStatus } from '@nestjs/common'

export interface IInfo {
    message: string
    message_to_show?: string
    code: string
    status: HttpStatus
}
export interface PaginateResult<T> {
    totalDocs: number
    count: number
    limit: number
    hasPrevPage: boolean
    hasNextPage: boolean
    page?: number | undefined
    totalPages: number
    offset: number
    prevPage?: number | null | undefined
    nextPage?: number | null | undefined
    pagingCounter: number
    meta?: any
    [customLabel: string]: T[] | number | boolean | null | undefined
}
export interface BaseResponse<T = null> {
    info: IInfo
    result?: T
    pagination?: Partial<PaginateResult<T>>
}

import { HttpException, HttpStatus } from '@nestjs/common';
import { ErrorResponse, IBaseError, ResponseHandler } from './';

import { BaseResponse, IResponseHandler } from '../interfaces';

export function responseHandler<T>(args: IResponseHandler<T>): BaseResponse<T> {
    const { data, pageInfo, event, module, message } = args;

    return new ResponseHandler({
        data: data,
        pageInfo,
        event,
        module,
        message,
    }).getInstance();
}

export function errorHandler(args: {
    base: IBaseError;
    status: HttpStatus;
    error: Error;
    message?: string;
    errorMessage?: string;
}): BaseResponse<any> {
    const { base, status, error, message } = args;

    const response = new ErrorResponse({ ...base }, status, error).getInstance();
    const errorMessage = args?.errorMessage || args?.error;
    let info;
    if (error?.name?.includes('Prisma')) {
        info = {
            ...response,
            info: {
                ...response.info,
                message_to_show: response.info.message_to_show,
            },
        };
    } else {
        info = {
            ...response,
            info: {
                ...response.info,
                message_to_show: errorMessage || response.info.message_to_show,
            },
        };
    }

    throw new HttpException(info, response.info.status);
}

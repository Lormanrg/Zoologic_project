import { HttpException, HttpStatus } from '@nestjs/common';
import { Module } from '../enums/module.enum';
import { BaseResponse, GlobalEventEnum } from '../interfaces';
import { formatResponseMessage } from '../utilities/formatResponseMessage';
import { GlobalEventError } from '../constants/ReponseError.constants';
import { LoggerService } from '../services/loggers/logger.service';


export interface IBaseError {
    path?: string;
    module: Module;
    event: GlobalEventEnum;
    context: string;
}

export class ErrorResponse extends HttpException implements IBaseError {
    readonly logger: LoggerService;
    readonly module: Module;
    readonly event: GlobalEventEnum;
    readonly context: string;
    readonly path: string | undefined;
    message: any;

    constructor(
        { event, module, context, path }: IBaseError,
        status: HttpStatus,
        error: Error,
    ) {
        super({ info: GlobalEventError[event] }, status);
        this.module = module;
        this.event = event;
        this.context = context;
        this.logger = new LoggerService(context);
        this.message = error;
        this.path = path;
    }

    getInstance(): BaseResponse<any> {
        const isDuplicateError = ['P2025'].includes(this.message?.code);

        const info = formatResponseMessage(
            this.event,
            this.module,
            isDuplicateError ? 'duplicated' : 'error',
        );

        this.logger.error(this.message, this.context, this.path);

        return { info };
    }
}

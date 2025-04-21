import { Module } from '../enums/module.enum';
import {
    BaseResponse,
    GlobalEventEnum,
    IInfo,
    IResponseHandler,
} from '../interfaces';
import { formatResponseMessage } from '../utilities/formatResponseMessage';

export class ResponseHandler<T> implements BaseResponse<T> {
    data: T | undefined;
    event: GlobalEventEnum;
    module: Module;
    info: IInfo;
    result?: T;
    pageInfo?: any;
    message?: string;
    constructor({ data, event, module, pageInfo, message }: IResponseHandler<T>) {
        this.data = data;
        this.event = event;
        this.module = module;
        this.pageInfo = pageInfo;
        this.message = message;
        this.getInstance();
    }

    getInstance(): BaseResponse<T> {
        const responseContext = formatResponseMessage(this.event, this.module);

        responseContext.message_to_show = this.message
            ? this.message
            : responseContext.message_to_show;
        return {
            info: responseContext,
            result: this.data,
            pagination: this.pageInfo,
        };
    }
}

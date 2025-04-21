import { Request } from 'express';
import { IncomingHttpHeaders } from 'http';
import { FullQueryDto } from '../dtos/fullQuery.dto';

export interface IRequestParams {
  id: number;
}
export interface IResponseLocal { }
export interface IRequestHeaders extends IncomingHttpHeaders {
  'x-token'?: string;
}
export interface IRequestExtends
  extends Request<IRequestParams, any, any, FullQueryDto, IResponseLocal> {
  headers: IRequestHeaders;
  meta: any;
  // user: UserModel;
}

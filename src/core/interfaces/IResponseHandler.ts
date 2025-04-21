import { Module } from '../enums/module.enum';

export enum GlobalEventEnum {
  CREATE = 'CREATE',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
  LIST = 'LIST',
  FIND = 'FIND',
  LOGIN = 'LOGIN',
  RECOVER_PASSWORD = 'RECOVER_PASSWORD',
  UPDATE_PASSWORD = 'UPDATE_PASSWORD',
  SEND_MAIL = 'SEND_MAIL',
  VERIFY_TOKEN = 'VERIFY_TOKEN',
}

export interface Filter {
  page: number;
  perPage: number;
}

export interface GetAllFilterResults extends Filter {
  count: number;
  pagesCount: number;
  nextPage: number | null;
  prevPage: number | null;
}
export interface IResponseHandler<T> {
  data?: T;
  module: Module;
  event: GlobalEventEnum;
  pageInfo?: GetAllFilterResults;
  message?: string;
}

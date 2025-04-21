/* eslint-disable @typescript-eslint/no-duplicate-enum-values */
import { Module } from '../enums/module.enum';
import { GlobalEventEnum } from '../interfaces';
import { IRequestExtends } from '../interfaces/IRequest';

interface IValidateRequest<T> {
  request: IRequestExtends;
}
interface IResponseValidRequest {
  module: Module;
  event: GlobalEventEnum;
  valid: boolean;
}

enum MethodsEvent {
  GET = 'LIST',
  POST = 'CREATE',
  PATCH = 'UPDATE',
  PUT = 'UPDATE',
  DELETE = 'DELETE',
}

function isConditionalEvent(event: GlobalEventEnum): {
  isConditional: boolean;
  event: GlobalEventEnum;
} {
  switch (event) {
    case GlobalEventEnum.RECOVER_PASSWORD:
      return { isConditional: true, event: GlobalEventEnum.RECOVER_PASSWORD };
    case GlobalEventEnum.UPDATE_PASSWORD:
      return { isConditional: true, event: GlobalEventEnum.UPDATE_PASSWORD };
    case GlobalEventEnum.VERIFY_TOKEN:
      return { isConditional: true, event: GlobalEventEnum.VERIFY_TOKEN };
    default:
      return { isConditional: false, event };
  }
}

export function validateRequest<T>({
  request,
}: IValidateRequest<T>): IResponseValidRequest {
  const module: Module =
    Module[request.originalUrl.split('/')[2].toUpperCase()];
  const conditionalUrl = request.originalUrl.split('/')[4]
    ? request.originalUrl.split('/')[4]
    : request.originalUrl.split('/')[3] || '';

  const conditionalEvent = isConditionalEvent(
    conditionalUrl.toUpperCase() as GlobalEventEnum,
  );

  const event = conditionalEvent.isConditional
    ? conditionalEvent.event
    : MethodsEvent[request.method];
  const valid = ['POST', 'PUT', 'PATCH'].includes(request.method);

  return {
    module,
    valid,
    event,
  };
}

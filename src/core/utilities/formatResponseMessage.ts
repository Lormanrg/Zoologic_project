import { GlobalEventError } from '../constants/ReponseError.constants';
import { GlobalEventSuccess } from '../constants/response.constants';
import {
  EventsMessagesToShow,
  IEventsMessages,
} from '../constants/translates.constants';
import { Module } from '../enums/module.enum';
import { GlobalEventEnum, IInfo } from '../interfaces';

export type messageType = 'success' | 'error' | 'duplicated';

export const formatResponseMessage = (
  event: GlobalEventEnum,
  module: Module,
  type: messageType = 'success',
): IInfo => {
  const info =
    type === 'success'
      ? GlobalEventSuccess[event === 'LIST' ? 'FIND' : event]
      : GlobalEventError[event === 'LIST' ? 'FIND' : event];
  const message_to_show: IEventsMessages =
    EventsMessagesToShow[module][event === 'LIST' ? 'FIND' : event];

  return {
    ...info,
    message: `${module}${info.message}`,
    message_to_show: !!message_to_show && message_to_show[type],
  };
};

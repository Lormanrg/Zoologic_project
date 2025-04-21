import { Module } from '../enums/module.enum';
import { GlobalEventEnum } from '../interfaces';

type OmitModules = Partial<Module>;
type OmitEvents = Exclude<
  GlobalEventEnum,
  GlobalEventEnum.LIST | GlobalEventEnum.LOGIN | GlobalEventEnum.SEND_MAIL
>;
export type IEventsMessages = {
  success: string;
  error: string;
  duplicated?: string;
};
export type Translates = Record<
  OmitModules,
  Partial<Record<OmitEvents, IEventsMessages>>
>;

export const EventsMessagesToShow: Translates = {
  [Module.USER]: {
    CREATE: {
      success: 'Usuario creado correctamente',
      error: 'Error al crear el usuario',
      duplicated: 'El usuario ya existe'
    },
    UPDATE: {
      success: 'Usuario actualizado correctamente',
      error: 'Error al actualizar el usuario',
      duplicated: 'El usuario ya existe'
    },
    DELETE: {
      success: 'Usuario eliminado correctamente',
      error: 'Error al eliminar el usuario'
    },
  },
  [Module.ZOOLOGIC]: {
    CREATE: {
      success: 'Zoológico creado correctamente',
      error: 'Error al crear el zoológico',
      duplicated: 'El zoológico ya existe'
    },
    UPDATE: {
      success: 'Zoológico actualizado correctamente',
      error: 'Error al actualizar el zoológico',
      duplicated: 'El zoológico ya existe'
    },
    DELETE: {
      success: 'Zoológico eliminado correctamente',
      error: 'Error al eliminar el zoológico'
    }
  },
  [Module.ANIMAL]: {
    CREATE: {
      success: 'Animal creado correctamente',
      error: 'Error al crear el animal',
      duplicated: 'El animal ya existe'
    },
    UPDATE: {
      success: 'Animal actualizado correctamente',
      error: 'Error al actualizar el animal',
      duplicated: 'El animal ya existe'
    },
    DELETE: {
      success: 'Animal eliminado correctamente',
      error: 'Error al eliminar el animal'
    }
  }
}

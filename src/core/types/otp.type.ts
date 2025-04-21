import { OTP_EVENT } from "../enums/otp.enum";

export const OTPTypes: { [key in OTP_EVENT]: any } = {
  OTP_RESET_PASSWORD: {
    event: OTP_EVENT.OTP_RESET_PASSWORD,
    contextMessage: 'la actualización de su contraseña',
    lenght: 4,
    minDuration: 50000,
  },
  OTP_UPDATE_RESOURCE: {
    event: OTP_EVENT.OTP_UPDATE_RESOURCE,
    contextMessage: 'la actualización del recurso',
    lenght: 6,
    minDuration: 10000,
  },
  OTP_CONCILIATION_RESOURCE: {
    event: OTP_EVENT.OTP_CONCILIATION_RESOURCE,
    contextMessage: 'la conciliacion del recurso',
    lenght: 6,
    minDuration: 10000,
  },
  OTP_CONFIRMATION_RESOURCE: {
    event: OTP_EVENT.OTP_CONFIRMATION_RESOURCE,
    contextMessage: 'la confirmacion del recurso',
    lenght: 6,
    minDuration: 10000,
  },
  OTP_DELETE_RESOURCE: {
    event: OTP_EVENT.OTP_DELETE_RESOURCE,
    contextMessage: 'la eliminación del recurso',
    lenght: 6,
    minDuration: 10000,
  },
  OTP_INCONSISTENCE_RESOURCE: {
    event: OTP_EVENT.OTP_INCONSISTENCE_RESOURCE,
    contextMessage:
      'la actualización al estatus de inconsistencia de datos del recurso',
    lenght: 6,
    minDuration: 10000,
  },
  OTP_REMOVE_ITEM_RESOURCE: {
    event: OTP_EVENT.OTP_REMOVE_ITEM_RESOURCE,
    contextMessage: 'la eliminación del rubro  del recurso',
    lenght: 6,
    minDuration: 10000,
  },
  OTP_TRANSFERENCE_RESOURCE: {
    event: OTP_EVENT.OTP_TRANSFERENCE_RESOURCE,
    contextMessage: 'la transferencia del recurso',
    lenght: 6,
    minDuration: 10000,
  },
  OTP_USER_SIGNIN: {
    event: 'OTP_USER_SIGNIN',
    lenght: 4,
    contextMessage: 'el inicio de sesión',
    minDuration: 10000,
  },
  OTP_CLOSE_BATCH: {
    event: 'OTP_CLOSE_BATCH',
    lenght: 6,
    contextMessage: 'el cierre de la jornada',
    minDuration: 10000,
  },
  OTP_CREATE_RESOURCE: {
    event: 'OTP_CREATE_RESOURCE',
    lenght: 6,
    contextMessage: 'la creación del recurso',
    minDuration: 10000,
  },
  OTP_FINISH_PROCESS_PRODUCTION: {
    event: 'OTP_FINISH_PROCESS_PRODUCTION',
    lenght: 6,
    contextMessage: 'la finalización del proceso de producción',
    minDuration: 10000,
  },
};

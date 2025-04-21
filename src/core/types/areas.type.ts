import { Module } from '../enums/module.enum';

type OmittedModules =
  | 'USER'
  | 'USER_ACCESS'
  | 'RESOURCE_TYPE'
  | 'STATUS'
  | 'CATEGORY'
  | 'AREAS'
  | 'ITEM_TYPE'
  | 'PROCESS'
  | 'OTP'
  | 'VERIFICATE_STATUS'
  | 'AUTH';

//omit these modules 'USER' | 'USER_ACCESS' | 'RESOURCE_TYPE' | 'FINANCIAL'
type OnlyAreas = Exclude<Module, OmittedModules>;


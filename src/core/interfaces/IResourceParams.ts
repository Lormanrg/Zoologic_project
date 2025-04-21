import { Module } from '../enums/module.enum';

export interface SaveResourceParams {
  module: Module;
  entitiyId: number;
  file: Express.Multer.File;
  callback?: Function;
}

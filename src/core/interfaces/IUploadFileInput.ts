import { AbstractRepository } from "../database/pg/abstract.repository";
import { EntityAbstract } from "../database/pg/table/abstract.table";

export interface IUploadFileInput<Entity extends EntityAbstract> {
  id: number;
  files: Record<string, Express.Multer.File[]>;
  repository: AbstractRepository<Entity>;
  destination: string;
}

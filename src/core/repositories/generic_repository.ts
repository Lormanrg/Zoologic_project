import { IFindMany } from '../interfaces/IFindMany';
import { IFindOne } from '../interfaces/IFindOne';

/**
 * @template R Entity response
 * @template C Create ntity
 * @template U Update entity
 * @template W where options
 * @template I include entity
 * @template {string} [RE=string] RE = Resource
 * @abstract
 */
export abstract class GenericRepository<
  R,
  C,
  U,
  W,
  I,
  RE = string,
  CS = undefined,
  DO = string,
> {
  /**
   * Creates a new entity.
   *
   * @abstract
   * @param {C} data - The data to create the entity with.
   * @param {Record<keyof RE | string, Express.Multer.File[]>} [file] - Optional files to include.
   * @returns {Promise<R>} The created entity.
   */
  abstract create(
    data: C,
    file?: Record<keyof RE | string, Express.Multer.File[]>,
    docs?: Record<keyof DO | string, Express.Multer.File[]>,
  ): Promise<R>;

  /**
   * Updates an existing entity.
   *
   * @abstract
   * @param {number} id - The ID of the entity to update.
   * @param {U} data - The data to update the entity with.
   * @param {Record<keyof RE, Express.Multer.File>} [file] - Optional files to include.
   * @returns {Promise<R>} The updated entity.
   */
  abstract update(
    id: number,
    data: U,
    file?: Record<keyof RE | string, Express.Multer.File[]>,
  ): Promise<R>;

  /**
   * Finds a single entity by its ID.
   *
   * @abstract
   * @param {number} id - The ID of the entity to find.
   * @param {I} [include] - Optional includes for the entity.
   * @returns {Promise<R>} The found entity.
   */
  abstract findOne(query: IFindOne<R>, include?: I): Promise<R>;

  /**
   * Finds multiple entities based on the given parameters.
   *
   * @abstract
   * @param {W} params - The parameters to find entities.
   * @returns {Promise<IFindMany<R>>} A promise of found entities.
   */
  abstract findMany(params: W): Promise<IFindMany<R>>;

  /**
   * Lists entities based on the given parameters.
   *
   * @abstract
   * @param {W} params - The parameters to list entities.
   * @returns {Promise<R>} A promise of listed entities.
   */
  abstract list(params: W): Promise<R[]>;

  /**
   *
   * @param id - The ID of the entity to suspend.
   * @returns {Promise<R>} A promise of suspended entity.
   */
  abstract changeStatus(id: number, data: CS): Promise<R>;
}

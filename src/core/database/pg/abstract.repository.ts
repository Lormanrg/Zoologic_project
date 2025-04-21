import { EntityTarget, DataSource, SaveOptions, FindManyOptions, FindOneOptions, FindOptionsWhere, UpdateResult, DeleteResult, EntityManager } from "typeorm";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import { EntityAbstract } from "./table/abstract.table";
import { IFindMany } from "src/core/interfaces/IFindMany";

/**
 * Abstract repository class for managing database operations.
 *
 * @abstract
 */
export abstract class AbstractRepository<Entity extends EntityAbstract> {
    /**
     * The constructor for the AbstractRepository class.
     *
     * @param {EntityTarget<Entity>} entity The target entity for which this repository is responsible.
     * This is typically the class of the entity, such as `User` or `Product`.
     * @param {DataSource} dataSource The datasource instance which provides an interface to the database.
     */
    constructor(
        /**
         * The target entity for which this repository is responsible.
         * This is typically the class of the entity, such as `User` or `Product`.
         */
        protected entity: EntityTarget<Entity>,
        /**
         * The datasource instance which provides an interface to the database.
         */
        protected dataSource: DataSource,
    ) { }

    /**
     * Prepares an entity for saving by preloading any existing data from the database.
     *
     * @async
     * @param {Entity} entity - The entity to be prepared.
     * @returns {Promise<Entity | null>} A promise that resolves to the prepared entity, or null if the entity could not be prepared.
     * @throws {Error} If the preparation operation fails.
     */
    async prepare(entity: Entity): Promise<Entity> {
        try {
            // Use the repository's preload method to prepare the entity. This method
            // takes an entity and returns a promise that resolves to the entity with
            // any existing data from the database preloaded.
            const result = await this.dataSource
                .getRepository(this.entity)
                .preload(entity);

            if (!result) {
                throw new Error('Entity not found');
            }
            return result;
        } catch (error) {
            // If an error is thrown, rethrow it with a more descriptive message.
            throw new Error(`Failed to prepare entity: ${error['message']}`);
        }
    }

    /**
     * Creates a new entity in the database with the specified payload and options.
     *
     * @async
     * @param {Entity} payload - An object representing the entity to be created.
     * @param {SaveOptions} [options] - Optional. A SaveOptions object used to customize the save operation.
     * @returns {Promise<Entity>} A promise that resolves to the newly created entity.
     * @throws {Error} If the creation operation fails.
     */
    async create(payload: Entity, options?: SaveOptions): Promise<Entity> {
        try {
            // Preload the entity with the specified payload. This method prepares the entity
            // to be saved by loading any existing data from the database if available.
            const prepare = await this.prepare(payload);

            // Save the prepared entity to the database using the repository associated with
            // the entity type. The save method persists the entity and returns the saved entity.
            return await this.dataSource
                .getRepository(this.entity)
                .save(prepare, options);
        } catch (error) {
            // If an error occurs during the save operation, throw a new error
            // with a detailed message indicating the operation that failed.
            throw new Error(`Failed to create entity: ${error['message']}`);
        }
    }

    /**
     * Retrieves an array of entities from the database that match the specified criteria.
     *
     * @async
     * @param {FindManyOptions<Entity>} options - A FindManyOptions object containing the criteria to locate the entities.
     * @returns {Promise<IFindMany<Entity>>} A promise that resolves to an array of entities if found, or an empty array if not found.
     * @throws {Error} If the find operation fails.
     */
    async findAll(options: FindManyOptions<Entity>): Promise<IFindMany<Entity>> {
        try {
            // Attempt to find the entities in the repository with the specified criteria
            const list = await this.dataSource
                .getRepository(this.entity)
                .find(options);
            const count = await this.dataSource
                .getRepository(this.entity)
                .count({ where: options.where });
            return {
                docs: list,
                count: count,
            };
        } catch (error) {
            // Throw an error with a message if the find operation fails
            throw new Error(`Failed to find entities: ${error['message']}`);
        }
    }

    /**
     * Retrieves a single entity from the database that matches the specified criteria.
     *
     * @async
     * @param {FindOneOptions<Entity>} options - A FindOneOptions object containing the criteria to locate the entity.
     * @returns {Promise<Entity | null>} A promise that resolves to the entity if found, or null if not found.
     * @throws {Error} If the find operation fails.
     */
    async findOne(options: FindOneOptions<Entity>): Promise<Entity | null> {
        try {
            // Attempt to find the entity in the repository with the specified criteria
            return await this.dataSource.getRepository(this.entity).findOne(options);
        } catch (error) {
            // Throw an error with a message if the find operation fails
            throw new Error(`Failed to find entity: ${error['message']}`);
        }
    }

    /**
     * Updates entities in the database that match the specified criteria with the given payload.
     *
     * @async
     * @param {QueryDeepPartialEntity<Entity>} payload - An object containing the fields and values to update the entities with.
     * @param {FindOptionsWhere<Entity>} where - A FindOptionsWhere object specifying the criteria to find the entities to update.
     * @returns {Promise<UpdateResult>} A promise that resolves to an UpdateResult object, which contains details about the update operation.
     * @throws {Error} If the update operation fails.
     */
    async update(
        payload: QueryDeepPartialEntity<Entity>,
        where: FindOptionsWhere<Entity>, // Criteria to locate the entities that need updating
    ): Promise<UpdateResult> {
        try {
            const find = await this.findOne({ where });
            if (!find) {
                throw new Error('Entity not found');
            }
            // Attempt to update the entities in the repository with the specified payload and criteria
            return await this.dataSource
                .getRepository(this.entity)
                .update(where, payload);
        } catch (error) {
            // Throw an error with a message if the update operation fails
            throw new Error(`Failed to update entity: ${error['message']}`);
        }
    }

    /**
     * Soft deletes an entity that matches the specified criteria.
     *
     * @async
     * @param {FindOptionsWhere<Entity>} where - A FindOptionsWhere object which specifies the criteria for the entities to be deleted.
     * @returns {Promise<DeleteResult>} A promise that resolves to a DeleteResult object, which contains the number of affected entities.
     * @throws {Error} If the deletion failed.
     */
    async delete(where: FindOptionsWhere<Entity>): Promise<DeleteResult> {
        try {
            // Get the repository for the entity type.
            const repository = this.dataSource.getRepository(this.entity);

            // Soft delete the entities which match the specified criteria.
            const deleteResult = await repository.softDelete(where);

            // Return the result of the deletion.
            return deleteResult;
        } catch (error) {
            // If an error was thrown, rethrow it with a more descriptive message.
            throw new Error(`Failed to delete entity: ${error['message']}`);
        }
    }

    /**
     * Executes a callback function within a transaction. If the callback function completes successfully, the transaction is committed. If the callback function throws an error, the transaction is rolled back.
     *
     * @async
     * @template T
     * @param {(entityRunner: EntityManager) => Promise<T>} runInTransaction - A callback function which takes an EntityManager as an argument and returns a promise. The promise resolves with the result of the callback function.
     * @returns {Promise<T>} A promise which resolves with the result of the callback function.
     * @throws {Error} If the callback function throws an error, the transaction is rolled back and an error is thrown with the message "Transaction failed: <error.message>".
     *
     * This function is a wrapper around the underlying transaction method of the datasource. It takes a callback function which is executed within a transaction.
     * The callback function takes an EntityManager as an argument, which is used to execute database operations.
     * The callback function returns a promise which is resolved when the callback function completes successfully. If the promise is rejected, the transaction is rolled back.
     * If the transaction is rolled back, an error is thrown with the message "Transaction failed: <error.message>".
     */
    async transaction<T>(
        runInTransaction: (entityRunner: EntityManager) => Promise<T>,
    ): Promise<T> {
        // Attempt to execute the callback function within a transaction.
        try {
            // Return the result of the callback function. If the callback function throws an error, the transaction is rolled back and an error is thrown with the message "Transaction failed: <error.message>".
            return await this.dataSource.transaction(runInTransaction);
        } catch (error) {
            // If an error was thrown, rethrow it with a more descriptive message.
            throw new Error(`Transaction failed: ${error['message']}`);
        }
    }
}

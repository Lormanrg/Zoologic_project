import { AbstractRepository } from "src/core/database/pg/abstract.repository";
import { UserEntity } from "src/database/entities/user.entity";
import { DataSource, EntityTarget } from "typeorm";



export class UserRepository extends AbstractRepository<UserEntity> {
    constructor(
        protected readonly dataSource: DataSource,
        protected readonly repository: EntityTarget<UserEntity>
    ) {
        super(repository, dataSource)
    }

    async createUser(user: UserEntity): Promise<UserEntity> {
        try {
            const newUser = this.dataSource.getRepository(UserEntity).create(user)

            return newUser
        } catch (error) {
            throw new Error(error)
        }


    }

    async findOneUser(id: number) {

        try {
            const findUser = await this.dataSource.getRepository(UserEntity).findOne({
                where: { id },
                relations: {
                    role: true
                }
            })

            return findUser

        } catch (error) {
            throw new Error(error)
        }
    }

    async findAllUser(data: UserEntity): Promise<UserEntity[]> {

        try {
            const findAllUser = await this.dataSource?.getRepository(UserEntity)?.find({
                where: data,
                relations: {
                    role: true
                }
            })

            return findAllUser

        } catch (error) {
            throw new Error(error)
        }
    }

    async updateUser(id: number, data: Partial<UserEntity>): Promise<UserEntity> {
        try {
            await this.dataSource.getRepository(UserEntity).update({ id }, data)

            const user = await this.dataSource.getRepository(UserEntity).findOne({
                where: { id },
                relations: {
                    role: true
                }
            })

            return user!



        } catch (error) {
            throw new error
        }
    }




}

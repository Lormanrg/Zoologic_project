import { AbstractRepository } from "src/core/database/pg/abstract.repository";
import { User } from "src/database/entities/user.entity";
import { DataSource, EntityTarget } from "typeorm";



export class UserRepository extends AbstractRepository<User> {
    constructor(
        protected readonly dataSource: DataSource,
        protected readonly repository: EntityTarget<User>
    ) {
        super(repository, dataSource)
    }

    async createUser(user: User): Promise<User> {
        try {

            const repository = this.dataSource?.getRepository(User)
            const newUser = repository?.create(user)


            const savedUser = await repository?.save(newUser)

            return savedUser
        } catch (error) {
            throw new Error(error)
        }


    }

    async findOneUser(id: number) {

        try {
            const findUser = await this.dataSource.getRepository(User).findOne({
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

    async findAllUser(data: User): Promise<User[]> {

        try {
            const findAllUser = await this.dataSource?.getRepository(User)?.find({
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

    async updateUser(id: number, data: Partial<User>): Promise<User> {
        try {
            await this.dataSource.getRepository(User).update({ id }, data)

            const user = await this.dataSource.getRepository(User).findOne({
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

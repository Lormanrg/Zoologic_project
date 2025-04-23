import { Injectable } from "@nestjs/common";
import { UserRepository } from "../domain/user.repository";
import { UserModel } from "src/core/models/user.model";
import { UserEntity } from "src/database/entities/user.entity";


@Injectable()
export class UserService {

    constructor(
        protected readonly userRepository: UserRepository
    ) {

    }

    async createUser(data: UserModel): Promise<UserEntity> {
        try {
            return await this.userRepository.createUser(data)

        } catch (error) {
            throw new Error(error)
        }

    }

    async findOne(id: number): Promise<UserEntity> {
        try {

            const findUser = await this.userRepository.findOneUser(id)

            return findUser!


        } catch (error) {
            throw new Error(error)
        }
    }

    async findAll(data: UserModel): Promise<UserModel[]> {
        try {

            return await this.userRepository.findAllUser(data)
        } catch (error) {
            throw new Error(error)
        }
    }

    async updateUser(id: number, data: Partial<UserModel>): Promise<UserEntity> {

        try {

            const updateUser = await this.userRepository.updateUser(id, data)

            return updateUser
        } catch (error) {
            throw new Error(error)
        }
    }
}

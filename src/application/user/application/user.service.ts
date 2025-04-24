import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { UserRepository } from "../domain/user.repository";
import { UserModel } from "src/core/inputs/user.input";
import { UserEntity } from "src/database/entities/user.entity";
import { TodoEntity } from "src/database/entities/todo.entity";


@Injectable()
export class UserService {

    constructor(
        protected readonly userRepository: UserRepository
    ) {

    }

    private todos: TodoEntity[] = [
        {
            id: 1,
            description: 'Aprender NestJS',
            done: false
        },
        {
            id: 2,
            description: 'Aprender React',
            done: false
        },
        {
            id: 3,
            description: 'Aprender TypeScript',
            done: false
        }
    ]

    async findAllTodos(): Promise<TodoEntity[]> {
        return this.todos
    }

    async findOneTodo(id: number): Promise<TodoEntity> {

        const findTodo = this.todos.find(todo => todo.id === id)

        if (!findTodo) {
            throw new NotFoundException(`Todo con el id ${id} no existe`)
        }

        return findTodo
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

    async findAll(data: UserEntity): Promise<UserEntity[]> {
        try {

            return await this.userRepository.findAllUser(data)
        } catch (error) {
            throw new Error(error)
        }
    }

    async updateUser(id: number, data: Partial<UserModel>): Promise<UserEntity> {

        try {

            const findUser = await this.findOne(id)

            if (!findUser) {
                throw new Error('User not found')
            }

            const updateUser = await this.userRepository.updateUser(id, data)

            return updateUser
        } catch (error) {
            throw new Error(error)
        }
    }
}

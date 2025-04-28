import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { UserRepository } from "../domain/user.repository";
import { Args } from "@nestjs/graphql";
import { UserInput } from "src/core/inputs/user.input";
import { Todo } from "src/database/entities/todo.entity";
import { User } from "src/database/entities/user.entity";


@Injectable()
export class UserService {

    constructor(
        protected readonly userRepository: UserRepository
    ) {

    }

    private todos: Todo[] = [
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

    async findAllTodos(): Promise<Todo[]> {
        return this.todos
    }

    async findOneTodo(id: number): Promise<Todo> {

        const findTodo = this.todos.find(todo => todo.id === id)

        if (!findTodo) {
            throw new NotFoundException(`Todo con el id ${id} no existe`)
        }

        return findTodo
    }

    async createUser(data: UserInput): Promise<User> {
        try {

            const findUserByEmail = await this.userRepository.findOne({
                where: { email: data?.email }
            })

            if (findUserByEmail) {
                throw new Error('Usuario ya existe')
            }
            const createUser = await this.userRepository.createUser(data)

            return createUser

        } catch (error) {
            throw new Error(error)
        }

    }

    async findOne(id: number): Promise<User> {
        try {

            const findUser = await this.userRepository.findOneUser(id)

            return findUser!


        } catch (error) {
            throw new Error(error)
        }
    }

    async findAll(data: User): Promise<User[]> {
        try {

            return await this.userRepository.findAllUser(data)
        } catch (error) {
            throw new Error(error)
        }
    }

    async updateUser(id: number, data: Partial<UserInput>): Promise<User> {

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

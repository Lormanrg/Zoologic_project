import { Args, Float, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UserService } from "../application/user.service";
import { Type } from 'class-transformer';
import { UserInput } from "src/core/inputs/user.input";
import { User } from "src/database/entities/user.entity";
import { Todo } from "src/database/entities/todo.entity";


@Resolver()
export class UserResolver {

    // @Query(() => String, { name: 'Hello', description: 'campo que retorna un hola' })
    // helloWorld() {
    //     return 'Hola'
    // }

    // @Query(() => Float, { name: 'randomNumber', description: 'campo que retorna un numero aleatorio' })
    // randomNumber() {
    //     return Math.random() * 100
    // }

    // @Query(() => Int, { name: 'randomNumberFromZeroTo', description: 'campo que retorna un numero aleatorio desde cero hasta TO(default 6) o el numero que se le pase' })
    // randomNumberFromZeroTo(
    //     @Args('to', { nullable: true, type: () => Int }) to: number = 6): number {
    //     return Math.floor(Math.random() * to)
    // }

    constructor(
        protected readonly userService: UserService
    ) { }

    @Mutation(() => User)
    async createUser(@Args('data') data: UserInput): Promise<User> {

        try {

            const { email, password, ...rest } = data
            const createUser = await this.userService.createUser({
                email: email,
                password: password,
                ...rest
            })

            return createUser
        } catch (error) {
            throw error
        }

    }

    @Query(() => [User], { name: 'Users', description: 'Devuelve todos los usuarios registrados', nullable: true })
    async getAllUsers(): Promise<User[]> {

        return this.userService.findAll({} as any)
    }

    // @Get(':id')
    // async getUserById(@Param('id') id: number): Promise<UserEntity> {

    //     const findUserById = await this.userService.findOne(id)

    //     return findUserById

    // }


    // @Patch(':id')
    // async updateUser(@Param('id') id: number, @Body() data: UserEntity): Promise<UserEntity> {

    //     const updateUser = await this.userService.updateUser(id, data)

    //     return updateUser

    // }

    @Query(() => [Todo], { name: 'todos', nullable: true })
    async findAll(): Promise<Todo[]> {
        return this.userService.findAllTodos()
    }

    @Query(() => Todo, { name: 'todo' })
    async findOne(@Args('id', { type: () => Int }) id: number): Promise<Todo> {
        return this.userService.findOneTodo(id)
    }

    @Mutation(() => Todo, { name: 'createTodo1' })
    async createTodo() { }
}

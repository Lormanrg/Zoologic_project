import { Args, Float, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UserService } from "../application/user.service";
import { Type } from 'class-transformer';
import { UserEntity } from "src/database/entities/user.entity";
import { TodoEntity } from "src/database/entities/todo.entity";


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

    @Query(() => UserEntity)
    async createUser(data: UserEntity): Promise<UserEntity> {

        const createUser = await this.userService.createUser(data)

        return createUser

    }

    @Query(() => [UserEntity], { name: 'Users', description: 'Devuelve todos los usuarios registrados', nullable: true })
    async getAllUsers(): Promise<UserEntity[]> {

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

    @Query(() => [TodoEntity], { name: 'todos', nullable: true })
    async findAll(): Promise<TodoEntity[]> {
        return this.userService.findAllTodos()
    }

    @Query(() => TodoEntity, { name: 'todo' })
    async findOne(@Args('id', { type: () => Int }) id: number): Promise<TodoEntity> {
        return this.userService.findOneTodo(id)
    }

    @Mutation(() => TodoEntity, { name: 'createTodo1' })
    async createTodo() { }
}

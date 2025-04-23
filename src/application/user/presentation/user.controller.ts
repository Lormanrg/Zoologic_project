import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { UserService } from "../application/user.service";
import { UserModel } from "src/core/models/user.model";
import { UserEntity } from "src/database/entities/user.entity";

@Controller('user')
export class UserController {

    constructor(
        protected readonly userService: UserService
    ) { }

    @Post()
    async createUser(@Body() data: UserEntity): Promise<UserEntity> {

        const createUser = await this.userService.createUser(data)

        return createUser

    }

    @Get()
    async geAllUsers(@Body() data: UserEntity): Promise<UserEntity[]> {

        const findAllUsers = await this.userService.findAll(data)

        return findAllUsers


    }

    @Get(':id')
    async getUserById(@Param('id') id: number): Promise<UserEntity> {

        const findUserById = await this.userService.findOne(id)

        return findUserById

    }


    @Patch(':id')
    async updateUser(@Param('id') id: number, @Body() data: UserEntity): Promise<UserEntity> {

        const updateUser = await this.userService.updateUser(id, data)

        return updateUser

    }


}
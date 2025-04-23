import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "src/database/entities/user.entity";
import { UserService } from "./application/user.service";
import { UserController } from "./presentation/user.controller";
import { UserRepository } from "./domain/user.repository";


@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    providers: [UserService, UserRepository],
    exports: [UserService],
    controllers: [UserController]

})
export class UserModule { }

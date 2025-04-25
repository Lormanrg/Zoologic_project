import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "src/database/entities/user.entity";
import { UserService } from "./application/user.service";
import { UserRepository } from "./domain/user.repository";
import { UserResolver } from "./presentation/user.resolver";


@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    providers: [UserResolver, UserRepository, UserService],
    exports: [UserService],
    controllers: []

})
export class UserModule { }

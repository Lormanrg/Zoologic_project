import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { UserService } from "../application/user.service";
import { UserModel } from "src/core/inputs/user.input";
import { UserEntity } from "src/database/entities/user.entity";

@Controller('user')
export class UserController {




}
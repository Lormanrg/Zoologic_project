import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString } from "class-validator";
import { RoleInput } from "./role.input";
import { Field, InputType, Int, registerEnumType } from '@nestjs/graphql';

export enum EUserStatus {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE'
}

registerEnumType(EUserStatus, {
    name: 'EUserStatus',
    description: 'El estado del usuario',
})

@InputType()
export class UserInput {


    @Field(() => String, { nullable: true })
    @IsOptional()
    @IsString()
    userName?: string;

    @Field(() => String)
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @Field(() => String)
    @IsNotEmpty()
    @IsString()
    password: string

    @Field(() => Int, { nullable: true })
    @IsOptional()
    @IsNumber()
    roleId?: number

    @Field(() => RoleInput, { nullable: true })
    @IsOptional()
    @IsObject()
    role?: RoleInput

    @Field(() => EUserStatus, { nullable: true })
    @IsOptional()
    @IsEnum(EUserStatus)
    status?: EUserStatus



}


import { IsEmail, IsNotEmpty, IsOptional } from "class-validator";
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
    @Field(() => Int, { nullable: true })
    @IsOptional()
    id?: number

    @Field(() => String, { nullable: true })
    @IsOptional()
    userName?: string;

    @Field(() => String)
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @Field(() => String)
    @IsNotEmpty()
    password: string

    @Field(() => Int, { nullable: true })
    @IsOptional()
    roleId?: number

    @Field(() => RoleInput, { nullable: true })
    @IsOptional()
    role?: RoleInput

    @Field(() => EUserStatus, { nullable: true })
    @IsOptional()
    status?: EUserStatus



}

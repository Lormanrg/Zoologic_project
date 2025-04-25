import { Field, InputType, Int, registerEnumType } from '@nestjs/graphql';


export enum ERoleStatus {
    ADMIN = 'admin',
    USER = 'user'
}

registerEnumType(ERoleStatus, {

    name: 'ERoleStatus',
    description: 'El estado del rol',
})

@InputType()
export class RoleInput {
    @Field(() => Int)
    id?: number
    @Field(() => String)
    name: string
    @Field(() => ERoleStatus)
    status?: ERoleStatus
    @Field(() => Date)
    createdAt?: Date

}

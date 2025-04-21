import { Transform, Type } from 'class-transformer'
import { ValidateNested } from 'class-validator'
import { PaginateDto } from './paginate.dto'

export class GenericPaginateDto {
    @Transform(({ value }) => {
        return JSON.parse(value as string) as PaginateDto
    })
    @ValidateNested({})
    @Type(() => PaginateDto)
    pagination: PaginateDto
}

export class GenericQueryDto<Type> {
    field: keyof Type
    text: string
}
export type GenericFilterDto<Type> = {
    [Property in keyof Type as Exclude<Property, '__typename'>]?: string[]
}

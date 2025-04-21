import { Allow, IsNotEmpty, IsNumber } from 'class-validator'

export class PaginateDto {
    @IsNumber()
    @IsNotEmpty()
    @Allow()
    skip: number
    @IsNumber()
    @IsNotEmpty()
    @Allow()
    limit: number
}

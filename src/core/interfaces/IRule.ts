// import { ApiPropertyOptions } from '@nestjs/swagger';
import { IsNumberOptions, ValidationOptions } from 'class-validator'

export interface lengthRule {
    max?: number
    min?: number
}
export interface GenericRule {
    //   apiProperty?: ApiPropertyOptions;
    isNumber?: IsNumberOptions
    requireOptions?: ValidationOptions
    validationOptions?: ValidationOptions & {
        regex?: RegExp
        enum?: any
    } & lengthRule
}

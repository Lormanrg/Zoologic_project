import { ConflictException, ValidationPipeOptions } from "@nestjs/common"

export const validationPipeConstants: ValidationPipeOptions = {
    exceptionFactory(errors) {
        const result = errors.reduce((acc, error) => {
            const keys = Object.keys(error.constraints || {})
            const messages = keys.map((key) => ({
                property: error.property,
                message: error.constraints?.[key],
            }))
            return acc.concat(messages)
        }, [] as { property: string; message: string | undefined }[])

        let errorsMappingString = ''
        result.forEach((error) => {
            errorsMappingString += `${error.message}${result.length - 1 === result.indexOf(error) ? '' : ', '} `
        })

        return new ConflictException(errorsMappingString)
    },
    transform: true,
}

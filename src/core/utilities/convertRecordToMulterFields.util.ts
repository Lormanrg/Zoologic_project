import { MulterField } from '@nestjs/platform-express/multer/interfaces/multer-options.interface'
import { FieldMulterOptions } from '../interfaces/MulterFieldOptions'

export const convertRecordToMulterFields = <T extends string>(object: Record<T, FieldMulterOptions>): MulterField[] => {
    const fields: MulterField[] = Object.entries(object).map(([resource, options]) => {
        return {
            name: resource,
            ...(options as FieldMulterOptions),
        }
    })

    return fields
}

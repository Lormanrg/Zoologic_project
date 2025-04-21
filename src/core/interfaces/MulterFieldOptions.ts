import { MulterField } from '@nestjs/platform-express/multer/interfaces/multer-options.interface'

export interface FieldMulterOptions extends Partial<MulterField> {
    required: boolean
}

export interface UploadPayload {
    file: Express.Multer.File
    destination?: string
    fileName: string
}

export interface StorageFile {
    buffer: Buffer
    metadata: Map<string, string>
    contentType: string
}

export interface OptimizedFile {
    fieldname: string
    originalname: string
    encoding: string
    mimetype: string
    buffer: Buffer
}

export interface MoveFilePayload {
    fileName: string
    resourceID: string
}

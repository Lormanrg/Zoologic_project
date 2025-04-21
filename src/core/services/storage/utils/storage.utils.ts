export function encodeFileName(fileName: string) {
    return fileName.replace('/', '%2F')
}

export function decodeFileName(fileName: string) {
    return fileName.replace('%2F', '/')
}

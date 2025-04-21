import { extensionToMimeMap } from "../constants/documents.constants";

// Función para obtener el MIME type a partir de una extensión de archivo
export function getMimeTypeFromExtension(extension: string): string | undefined {
    return extensionToMimeMap[extension]
}

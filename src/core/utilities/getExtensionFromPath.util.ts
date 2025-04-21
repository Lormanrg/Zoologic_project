export function getExtensionFromPath(filePath: string): string | undefined {
    const match = filePath.match(/\.([a-z0-9]+)(?:\?.*)?$/i) // Extrae la extensión del archivo
    return match ? match[1].toLowerCase() : undefined
}

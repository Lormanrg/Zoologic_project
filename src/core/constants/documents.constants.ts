import { DocExtension } from "../../core/enums/docExtension.enum";

export const mimeToExtensionMap: { [key: string]: DocExtension } = {
  'application/msword': DocExtension.DOC, // Para documentos de Word 97-2003
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
    DocExtension.DOCX, // Para documentos de Word 2007+
  'application/pdf': DocExtension.PDF, // Para archivos PDF
  'image/jpeg': DocExtension.JPG, // Para imágenes JPEG
  'image/png': DocExtension.PNG, // Para imágenes PNG
  'image/svg+xml': DocExtension.SVG, // Para imágenes SVG
  'image/webp': DocExtension.WEBPG, // Para imágenes WEBP
  'application/vnd.ms-excel': DocExtension.XLS, // Para hojas de cálculo Excel 97-2003
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
    DocExtension.XSLX, // Para hojas de cálculo Excel 2007+
  'application/octet-stream': DocExtension.JPG,
};

export const extensionToMimeMap: { [key: string]: string } = {
  [DocExtension.DOC]: 'application/msword', // Para documentos de Word 97-2003
  [DocExtension.DOCX]:
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // Para documentos de Word 2007+
  [DocExtension.PDF]: 'application/pdf', // Para archivos PDF
  [DocExtension.JPG]: 'image/jpeg', // Para imágenes JPEG
  [DocExtension.PNG]: 'image/png', // Para imágenes PNG
  [DocExtension.SVG]: 'image/svg+xml', // Para imágenes SVG
  [DocExtension.WEBPG]: 'image/webp', // Para imágenes WebP
  [DocExtension.XSLX]:
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // Para hojas de cálculo Excel 2007+
  [DocExtension.XLS]: 'application/vnd.ms-excel', // Para hojas de cálculo Excel 97-2003
};

export const DocExtensions: DocExtension[] = [
  DocExtension.DOC,
  DocExtension.DOCX,
  DocExtension.PDF,
  DocExtension.XSLX,
];

export const ImageExtensions = ['jpg', 'jpeg', 'png'];

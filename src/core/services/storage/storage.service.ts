import { Bucket, DownloadResponse, Storage } from '@google-cloud/storage';
import { Injectable } from '@nestjs/common';
import sharp from 'sharp';
import { v4 } from 'uuid';



import {
  MoveFilePayload,
  OptimizedFile,
  StorageFile,
  UploadPayload,
} from './types/interfaces/storage.interfaces';
import { decodeFileName, encodeFileName } from './utils/storage.utils';
import { DocExtensions, ImageExtensions } from 'src/core/constants/documents.constants';
import { stackENV } from 'src/core/constants/global.constants';
import { getExtensionFromMimeType } from 'src/core/utilities/getDocumentExtensionFromMIME.util';
import { timeStampDateTime } from 'src/core/utilities/getActualDate.utils';
import { getExtensionFromPath } from 'src/core/utilities/getExtensionFromPath.util';
import { getMimeTypeFromExtension } from 'src/core/utilities/getDocumentMIMEfromExtension.util';

const defaultDestinationPath = 'financial/image';
const defaultDestinationDocsPath = 'financial/docs';

@Injectable()
export class StorageService {
  private storage: Storage;
  private bucketString: string;
  private bucket: Bucket;
  constructor() {



    this.bucket = this.storage.bucket(this.bucketString);
  }

  async optimizeFile(file: Express.Multer.File): Promise<OptimizedFile> {
    const optimizedFile: OptimizedFile = {
      fieldname: file.fieldname,
      originalname: `thumbnail_${file.originalname}`,
      encoding: file.encoding,
      mimetype: file.mimetype,
      buffer: await sharp(file.buffer).jpeg({ quality: 100 }).toBuffer(),
    };
    return optimizedFile;
  }

  async uploadFile({
    file,
    fileName,
    destination,
  }: UploadPayload): Promise<string> {
    const extension = getExtensionFromMimeType(file.mimetype);
    if (!extension) throw new Error('Extension not found');
    let fileNameWExtension;
    let optimizedFile: OptimizedFile = {
      fieldname: file.fieldname,
      originalname: `thumbnail_${file.originalname}`,
      encoding: file.encoding,
      mimetype: file.mimetype,
      buffer: file.buffer,
    };

    if (ImageExtensions.includes(extension)) {
      optimizedFile = await this.optimizeFile(file);
      const destinationPath = destination || defaultDestinationPath;
      const uniquePreffix = v4();
      fileNameWExtension = `${destinationPath.toLowerCase()}/${fileName}_${uniquePreffix}.jpg`;
    }

    if (DocExtensions.includes(extension)) {
      const destinationPath = destination || defaultDestinationDocsPath;
      const uniquePreffix = v4();
      fileNameWExtension = `${destinationPath.toLowerCase()}/${fileName}_${uniquePreffix}.${extension}`;
    }

    const fileNameEncode = encodeFileName(fileNameWExtension);

    const fileGCS = this.bucket.file(fileNameWExtension);

    const streamGCS = fileGCS.createWriteStream();

    return new Promise(async (resolve, reject) => {
      streamGCS
        .on('finish', () => resolve(fileNameEncode))
        .on('error', (error) => reject(error));
      streamGCS.end(optimizedFile.buffer);
    });
  }

  async uploadDocument({
    file,
    fileName,
    destination,
  }: UploadPayload): Promise<{ fileName: string; extension: {} }> {
    const extension = getExtensionFromMimeType(file.mimetype) as String;

    if (!extension) throw new Error('Extension not found');

    const destinationPath = destination || defaultDestinationPath;

    const uniquePreffix = v4();

    const fileNameWExtension = `${destinationPath.toLowerCase()}/${fileName}_${uniquePreffix}.${extension.toLocaleLowerCase()}`;

    const fileNameEncode = encodeFileName(fileNameWExtension);

    const fileGCS = this.bucket.file(fileNameWExtension);

    const streamGCS = fileGCS.createWriteStream({});
    new Promise(async (resolve, reject) => {
      streamGCS
        .on('finish', () => resolve(fileNameEncode))
        .on('error', (error) => reject(error));
      streamGCS.end(file.buffer);
    });
    return {
      fileName: fileNameEncode,
      extension,
    };
  }

  async getFile(filePath: string): Promise<StorageFile> {
    try {
      const fileResponse: DownloadResponse = await this.storage
        .bucket(this.bucketString)
        .file(filePath)
        .download();

      const [buffer] = fileResponse;

      const storageFile: StorageFile = {
        buffer,
        metadata: new Map<string, string>(),
        contentType: 'image/jpeg',
      };

      return storageFile;
    } catch (error) {
      throw error;
    }
  }
  async getDocument(filePath: string): Promise<StorageFile> {
    const fileResponse: DownloadResponse = await this.bucket
      .file(filePath)
      .download();

    const extension = getExtensionFromPath(filePath);

    if (!extension) throw new Error('Extension not found');

    const mimeType = getMimeTypeFromExtension(extension.toLocaleUpperCase());

    if (!mimeType) throw new Error('MimeType not found');

    const [buffer] = fileResponse;

    const storageFile: StorageFile = {
      buffer,
      metadata: new Map<string, string>(),
      contentType: mimeType,
    };

    return storageFile;
  }

  async donwload(fileName: string): Promise<string> {
    const fileNameDecode = decodeFileName(fileName);

    const [metaData] = await this.bucket.file(fileNameDecode).getMetadata();

    if (!metaData.mediaLink) throw new Error('Media link not found');

    return metaData.mediaLink;
  }

  async deleteFile(fileName: string): Promise<any> {
    const decodeFileName = fileName.replace('%2F', '/');

    const deleteData = await this.bucket.file(decodeFileName).delete();

    return deleteData;
  }

  private async moveFileToDeletedFolder({
    fileName,
    resourceID,
  }: MoveFilePayload): Promise<void> {
    const fileNameDecode = decodeFileName(fileName);

    const destinationPath = fileNameDecode.split('/')[0];

    await this.bucket
      .file(fileNameDecode)
      .move(
        `deleted_files/${destinationPath}_${timeStampDateTime()}_${resourceID}`,
      );
  }

  async updateFile({
    file,
    fileName,
    resourceID,
    destination,
  }: UploadPayload & MoveFilePayload): Promise<string> {
    await this.deleteFile(fileName);

    const uploadFile = await this.uploadFile({
      file,
      fileName: `${file?.fieldname}_${resourceID}`,
      destination,
    });
    return uploadFile;
  }
}

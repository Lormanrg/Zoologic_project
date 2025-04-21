import { mimeToExtensionMap } from '../constants/documents.constants';
import { DocExtension } from '../enums/docExtension.enum';

export function getExtensionFromMimeType(
  mimeType: string,
): DocExtension | undefined {
  return mimeToExtensionMap[mimeType];
}

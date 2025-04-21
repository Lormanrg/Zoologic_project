import { stackENV } from '../constants/global.constants';

export const mapResource = (fileName: string) => {
  console.log(fileName);
  return fileName ? stackENV.SELF_URL + '/document/' + fileName : null;
};

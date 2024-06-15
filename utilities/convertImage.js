import { IMAGE_URL } from '@env';
export function convertImage(path = '') {
  if (!path) return null;

  return `${IMAGE_URL}${path}`;
}

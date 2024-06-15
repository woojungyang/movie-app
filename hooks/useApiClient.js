import axios from 'axios';
import { API_URL, TOKEN } from '@env';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    accept: 'application/json',
    Authorization: TOKEN,
  },
});

export default async function useApiClient(method = 'post', url = '', config = {}) {
  try {
    const result = await apiClient[method](url, { ...config, language: 'en-US' });
    return result.data;
  } catch (error) {
    throw error(error.response);
  }
}

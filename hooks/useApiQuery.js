import { useQuery } from 'react-query';
import useApiClient from './useApiClient';

export default function useApiQuery(url = '', params = {}, reactQueryOptions) {
  return useQuery({
    queryKey: [url],
    queryFn: () => useApiClient('get', url, params),
    ...reactQueryOptions,
  });
}

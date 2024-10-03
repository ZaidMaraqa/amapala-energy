import { fetcher } from "./fetcher";
import useSWR from "swr";

export default function useGetBlogs(pageIndex: number, search: string = '', category: string = '', country: string = '', articleType: string = '', pageSize: number = 9) {
  const queryParams = new URLSearchParams();

  queryParams.append('pageIndex', pageIndex.toString());

  if (pageSize) {
    queryParams.append('pageSize', pageSize.toString());
  }
  if (search) {
    queryParams.append('search', search);
  }
  if (category) {
    queryParams.append('category', category);
  }
  if (country) {
    queryParams.append('country', country);
  }
  if (articleType) {
    queryParams.append('articleType', articleType);
  }

  const queryString = queryParams.toString();
  const { data, error, isLoading } = useSWR(`/api/getBlogs?${queryString}`, fetcher, {
    keepPreviousData: true,
  });

  return {
    data,
    isLoading,
    error
  };
}

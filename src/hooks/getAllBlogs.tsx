import { fetcher } from "./fetcher";
import useSWR from "swr";

export default function getBlogs(pageIndex: number, search: string = '', category: string = '', country: string = '') {
  const queryParams = new URLSearchParams();

  queryParams.append('pageIndex', pageIndex.toString());

  if (search) {
    queryParams.append('search', search);
  }
  if (category) {
    queryParams.append('category', category);
  }
  if (country) {
    queryParams.append('country', country);
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

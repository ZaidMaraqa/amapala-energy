import useSWR from "swr"
import { fetcher } from "./fetcher"

export default function getBlogs (pageIndex: number) {
    const { data, error, isLoading } = useSWR(`/api/getBlogs?pageIndex=${pageIndex}`, fetcher)
    return {
      data,
      isLoading,
      error
    }
  }
  
  
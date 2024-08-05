import useSWR from "swr"
import { fetcher } from "./fetcher"

export default function getBlog (_id: string) {
    const { data, error, isLoading } = useSWR(`/api/getBlog?blog_id=${_id}`, fetcher)
    return {
      data,
      isLoading,
      error
    }
  }
  
  
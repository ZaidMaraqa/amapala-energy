import useSWR from "swr"
import { fetcher } from "./fetcher"

export default function getTopBlogs () {
    const { data, error, isLoading } = useSWR('/blogData.json', fetcher)
    return {
      data,
      isLoading,
      error
    }
  }
  
  
import useSWR from "swr"
import { fetcher } from "./fetcher"

export default function getBlogs () {
    const { data, error, isLoading } = useSWR('/allblogs.json', fetcher)
    return {
      data,
      isLoading,
      error
    }
  }
  
  
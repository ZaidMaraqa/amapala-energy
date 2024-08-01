import useSWR from "swr"
import { fetcher } from "./fetcher"

export default function getBlog () {
    const { data, error, isLoading } = useSWR('/singleBlogData.json', fetcher)
    return {
      data,
      isLoading,
      error
    }
  }
  
  
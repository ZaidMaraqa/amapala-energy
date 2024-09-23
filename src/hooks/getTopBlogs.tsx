import config from "@/config"
import { fetcher } from "./fetcher"
import useSWR from "swr"

export default function useGetTopBlogs () {
    const { data, error, isLoading } = useSWR(`${config.apiUrl}/popular-blogs`, fetcher)
    return {
      data,
      isLoading,
      error
    }
  }
  
  
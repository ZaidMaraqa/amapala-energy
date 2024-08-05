'use client'
import useSWR from "swr"
import { fetcher } from "./fetcher"

export default function getTopBlogs () {
    const { data, error, isLoading } = useSWR('/api/getPopularBlogs', fetcher)
    return {
      data,
      isLoading,
      error
    }
  }
  
  
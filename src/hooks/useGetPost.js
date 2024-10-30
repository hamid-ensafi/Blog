"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "@/service/blogApi";

export function useGetPosts() {
  const { data: blog, error:postError } = useQuery({
    queryKey: ["Blog"],
      queryFn: fetchPosts,
      retry: false, 
  });
  return { blog, postError };
}

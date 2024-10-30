'use client'

import { fetchDetail } from "@/service/detailApi";
import { useQuery } from "@tanstack/react-query";

export function useGetPostsDetail(id) {
  const { data: detail, error: detailError } = useQuery({
    queryKey: ["Details",id],
    queryFn:()=> fetchDetail(id),
  });
  return { detail, detailError };
}

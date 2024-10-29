"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../_lib/blogApi";
// import Image from "next/image";

export default function BlogItem() {
  const { data: blog } = useQuery({ queryKey: ["Blog"], queryFn: fetchPosts });

  const data = blog || [];
  return (
    <section>
      {data.map((item) => (
        <article key={item.id}>
          <figure>
            <img src={item.featured_media_object.source_url}></img>
          </figure>
        </article>
      ))}
    </section>
  );
}

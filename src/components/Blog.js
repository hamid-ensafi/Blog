"use client";

import Image from "next/image";
import Link from "next/link";
import ErrorMessage from "@/ui/Error";
import { useGetPosts } from "@/hooks/useGetPost";

export default function BlogItem() {
  const { blog, postError } = useGetPosts();
  const data = blog || [];
  if (postError) return <ErrorMessage error={postError}></ErrorMessage>;

  return (
    <section className=" flex gap-4">
      {data.map((item) => (
        <article className="w-2/12" key={item.id}>
          <Link className=" block w-full h-full p-2" href={`/blog/${item.id}`}>
            <figure className="w-full h-full">
              <Image
                className="block object-cover w-full h-full rounded"
                src={item.featured_media_object.source_url}
                alt={item.title.rendered}
                width={item.featured_media_object.media_details.width}
                height={item.featured_media_object.media_details.height}
                priority
              />
              {/* <figcaption dangerouslySetInnerHTML={{ __html: item.content.rendered }} /> */}
              <figcaption className="text-slate-500">
                <h3>{item.title.rendered}</h3>
              </figcaption>
            </figure>
          </Link>
        </article>
      ))}
    </section>
  );
}

"use client";
import { useGetPostsDetail } from "@/hooks/useGetPostDetail";
import ErrorMessage from "@/ui/Error";
import Image from "next/image"; 
export default function BlogDetail({ id }) {
  const { detail, postError } = useGetPostsDetail(id);
    const { content } = detail ?? {}
    
  if (postError) return <ErrorMessage error={postError}></ErrorMessage>;
  return (
    <section className="flex justify-center">
      <div className="w-6/12">
        <figure className="flex justify-center">
          {detail?.id && (
            <Image
              className="rounded"
              src={detail.featured_media_object.source_url}
              alt={detail.title.rendered}
              width={detail.featured_media_object.media_details.width}
              height={detail.featured_media_object.media_details.height}
              priority
            />
          )}
        </figure>
        <div
          className="text-white mt-5"
          dangerouslySetInnerHTML={{ __html: content?.rendered }}
        />
      </div>
    </section>
  );
}

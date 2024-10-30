import BlogDetail from "@/components/BlogDetail";


export const metadata = {
  title: ' جزییات بلاگ',
  description: 'آخرین دسته اورد های شرکت راهکار گستران مقالات راهکار گستران ',
  keywords: 'بلاگ, مقالات, مقالات راهکار گستران ,مقالات راهکار گستران ',
  openGraph: {
    title: 'صفحه بلاگ',
    description: 'آخرین مقالات و بلاگ‌های ما را مشاهده کنید.',
    url: 'لینک وبسایت را در اینجا قرار دهید  برای شبکه های اجتماعی است ',
    // images: [
    //   {
    //     url: 'URL_IMAGE_THUMBNAIL',
    //     width: 1200,
    //     height: 630,
    //     alt: 'تصویر کوچک برای بلاگ'
    //   },
    // ],
  },
 
};
export default function PostsDetail({ params }) {
  const { id } = params;

  return <BlogDetail id={id}></BlogDetail>;
}

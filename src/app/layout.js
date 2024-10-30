import "./../styles/globals.css";
import ReactQueryProvider from "../lib/queryClient";
import { Toaster } from "react-hot-toast";
import localFont from "next/font/local";

const myFont = localFont({ src: "./../fonts/nazanin.ttf", display: "swap" });


// چون هوم ما لاگین است زیاد متا دیتا در اینجا جذاب نیست


export const metadata = {
  title: {
    template: '  راهکار گستران %s',
    default :'راهکار گستران '
  },
  description:'شرکت راهکار گستران  طراحی وبسایت در راهکار گسترون پیشرو در صنعت وب راهکار گستران تبریز '
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <ReactQueryProvider>
        <body dir="rtl" className="h-[100vh] bg-slate-800">
          <main className="h-full">
            {children}
            <Toaster position="top-right"></Toaster>
          </main>
        </body>
      </ReactQueryProvider>
    </html>
  );
}

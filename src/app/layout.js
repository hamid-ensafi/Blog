import "./_styles/globals.css";
import ReactQueryProvider from "./_lib/queryClient";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ReactQueryProvider>
        <body className="h-[100vh] bg-slate-800">
          <main className="h-full">{children}</main>
        </body>
      </ReactQueryProvider>
    </html>
  );
}

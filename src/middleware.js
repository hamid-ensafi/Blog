import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("token");
  const { pathname } = req.nextUrl;
  console.log(req)

  
  if (pathname === "/login" && token?.value) {
    return NextResponse.redirect(new URL("/blog", req.url));
  }

  if (!token?.value) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/blog"],
};

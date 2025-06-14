import { NextResponse } from "next/server";

export function middleware(req) {

  const cookies = req.cookies;

  if (req.nextUrl.pathname === "/admin" && !cookies.has("resumeAccess")) {
    return NextResponse.redirect(new URL("/password-protected", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin"],
};

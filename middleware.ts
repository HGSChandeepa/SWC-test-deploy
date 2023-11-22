import { withAuth, NextRequestWithAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req: NextRequestWithAuth) {
    console.log(req.nextUrl.pathname);
    console.log(req.nextauth.token);
    if (
      req.nextUrl.pathname.startsWith("admin") &&
      req.nextauth.token?.role !== "admin"
    ) {
      return NextResponse.rewrite(new URL("/denied", req.url));
    }

    if (
      req.nextUrl.pathname.startsWith("agenterer/") &&
      req.nextauth.token?.role !== "admin" &&
      req.nextauth.token?.role !== "user"
    ) {
      return NextResponse.rewrite(new URL("/denied", req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = { matcher: ["/agent/:path*", "/admin/:path*"] };

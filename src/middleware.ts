import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const cookie = request.cookies.get("token")?.value;
  if (!cookie) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: [
    "/profile/:path*",
    "/panel/:path*",
    "/register-medical-equipments-device",
  ],
};

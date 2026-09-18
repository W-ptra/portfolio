import { NextResponse } from "next/server";
import { selectLocale } from "./src/i18n/locales.js";

const validPaths = new Set(["/en", "/ja"]);
const internalOrStaticPath = /^(?:\/_next\/|\/not-found-handler\/|\/api\/|\/others\/|\/logo\/|\/thumbnail\/|\/document\/)|\.[a-zA-Z0-9]+$/;

export function proxy(request) {
  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    const locale = selectLocale({
      cookieLocale: request.cookies.get("portfolio-locale")?.value,
      acceptLanguage: request.headers.get("accept-language") ?? "",
    });
    const destination = request.nextUrl.clone();
    destination.pathname = `/${locale}`;
    return NextResponse.redirect(destination);
  }

  if (validPaths.has(pathname) || internalOrStaticPath.test(pathname)) return NextResponse.next();

  const destination = request.nextUrl.clone();
  destination.pathname = pathname === "/ja" || pathname.startsWith("/ja/") ? "/not-found-handler/ja" : "/not-found-handler/en";
  return NextResponse.rewrite(destination);
}

export const config = { matcher: "/:path*" };

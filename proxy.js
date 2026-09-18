import { NextResponse } from "next/server";
import { selectLocale } from "./src/i18n/locales.js";

export function proxy(request) {
  const locale = selectLocale({
    cookieLocale: request.cookies.get("portfolio-locale")?.value,
    acceptLanguage: request.headers.get("accept-language") ?? "",
  });

  const destination = request.nextUrl.clone();
  destination.pathname = `/${locale}`;
  return NextResponse.redirect(destination);
}

export const config = { matcher: ["/"] };

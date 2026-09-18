import { renderNotFoundHtml } from "../../../src/notFoundHtml.js";

export async function GET(_request, { params }) {
  const { locale } = await params;
  const resolvedLocale = locale === "ja" ? "ja" : "en";

  return new Response(renderNotFoundHtml(resolvedLocale), {
    status: 404,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "x-robots-tag": "noindex",
    },
  });
}

import "../globals.css";
import { notFound } from "next/navigation";
import { isLocale } from "../../src/i18n/locales";

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}

import Header from "../../src/components/Header";
import Portfolios from "../../src/components/Portfolios";
import Footer from "../../src/components/Footer";
import { getPageContent } from "../../src/i18n/content";
import { isLocale, locales } from "../../src/i18n/locales";
import { getSeo, personJsonLd } from "../../src/seo";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getSeo(locale);
}

export default async function LocalePage({ params }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const { copy, portfolios } = getPageContent(locale);

  return (
    <>
      <main className="bg-cover bg-center bg-fixed bg-no-repeat px-5 pt-10 pb-10 md:px-28 md:pt-16" style={{ backgroundImage: "url('/others/bground.webp')", fontFamily: "'Roboto', sans-serif" }}>
        <Header copy={copy} locale={locale} />
        <Portfolios portfolios={portfolios} copy={copy} />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
    </>
  );
}

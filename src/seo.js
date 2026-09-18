import { siteCopy } from "./i18n/content.js";
import { defaultLocale, isLocale } from "./i18n/locales.js";

export const siteUrl = "https://wisnup.site";

export function getSeo(locale) {
  const resolvedLocale = isLocale(locale) ? locale : defaultLocale;
  const copy = siteCopy[resolvedLocale];
  const path = `/${resolvedLocale}`;

  return {
    metadataBase: new URL(siteUrl),
    title: copy.seoTitle,
    description: copy.seoDescription,
    alternates: {
      canonical: path,
      languages: { en: "/en", ja: "/ja", "x-default": "/" },
    },
    openGraph: {
      type: "website",
      url: path,
      title: copy.seoTitle,
      description: copy.seoDescription,
      locale: resolvedLocale === "ja" ? "ja_JP" : "en_US",
      alternateLocale: resolvedLocale === "ja" ? ["en_US"] : ["ja_JP"],
      siteName: "Wisnu Putra",
    },
    twitter: { card: "summary", title: copy.seoTitle, description: copy.seoDescription },
  };
}

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Wisnu Putra",
  url: siteUrl,
  jobTitle: "Backend Engineer",
  sameAs: ["https://github.com/W-ptra", "https://www.linkedin.com/in/wisnuputraaa/"],
};

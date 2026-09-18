"use client";

import Link from "next/link";

export default function LanguageSwitcher({ locale, label, switchLanguage }) {
  const targetLocale = locale === "ja" ? "en" : "ja";

  function savePreference() {
    document.cookie = `portfolio-locale=${targetLocale}; path=/; max-age=31536000; samesite=lax`;
  }

  return (
    <Link
      href={`/${targetLocale}`}
      onClick={savePreference}
      className="inline-flex items-center rounded-md border border-white px-3 py-1 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
      aria-label={`${switchLanguage} ${label}`}
    >
      {label}
    </Link>
  );
}

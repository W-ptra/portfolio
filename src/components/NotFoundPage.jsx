"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { getNotFoundCopy } from "../i18n/notFound.js";

export default function NotFoundPage() {
  const params = useParams();
  const locale = typeof params.locale === "string" ? params.locale : "en";
  const copy = getNotFoundCopy(locale);

  return (
    <>
      <main
        className="flex min-h-[calc(100vh-2.5rem)] items-center justify-center bg-cover bg-center bg-fixed bg-no-repeat px-5 py-10 md:px-28"
        style={{ backgroundImage: "url('/others/bground.webp')", fontFamily: "'Roboto', sans-serif" }}
      >
        <section className="w-full max-w-2xl rounded-xl border border-white bg-black/80 p-8 text-center text-white shadow-md md:p-12">
          <p className="mb-4 text-sm font-bold tracking-[0.2em] text-[#FFDC2B]">{copy.eyebrow}</p>
          <h1 className="text-3xl font-bold md:text-5xl">{copy.heading}</h1>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-white/90 md:text-lg">{copy.description}</p>
          <Link href={`/${locale}`} className="mt-8 inline-flex rounded-md border border-white px-5 py-2 font-semibold transition hover:bg-white hover:text-black">
            {copy.action}
          </Link>
        </section>
      </main>
      <footer className="h-10 bg-black" />
    </>
  );
}

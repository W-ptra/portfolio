import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { selectLocale } from "../src/i18n/locales.js";
import { getSeo } from "../src/seo.js";
import { getNotFoundCopy } from "../src/i18n/notFound.js";

const portfolios = JSON.parse(readFileSync(new URL("../src/portfolio.json", import.meta.url), "utf8"));

test("saved locale preference overrides Accept-Language", () => {
  assert.equal(selectLocale({ cookieLocale: "en", acceptLanguage: "ja-JP,ja;q=0.9" }), "en");
});

test("Japanese language headers select Japanese", () => {
  assert.equal(selectLocale({ acceptLanguage: "ja-JP,ja;q=0.9,en;q=0.8" }), "ja");
  assert.equal(selectLocale({ acceptLanguage: "ja" }), "ja");
});

test("English and unsupported headers fall back to English", () => {
  assert.equal(selectLocale({ acceptLanguage: "en-US,en;q=0.9,ja;q=0.8" }), "en");
  assert.equal(selectLocale({ cookieLocale: "invalid", acceptLanguage: "fr-FR,fr;q=0.8" }), "en");
});

test("all projects have complete English and Japanese content", () => {
  assert.equal(portfolios.length, 20);
  for (const portfolio of portfolios) {
    for (const field of ["title", "description"]) {
      assert.equal(typeof portfolio[field].en, "string");
      assert.ok(portfolio[field].en.length > 0);
      assert.equal(typeof portfolio[field].ja, "string");
      assert.ok(portfolio[field].ja.length > 0);
    }
    if (portfolio.winner) {
      assert.ok(portfolio.winner.en.length > 0);
      assert.ok(portfolio.winner.ja.length > 0);
    }
    assert.ok(Array.isArray(portfolio.skills) && portfolio.skills.length > 0);
    assert.ok(portfolio.thumbnail.startsWith("/thumbnail/"));
  }
});

test("localized metadata declares canonical and alternate language URLs", () => {
  const metadata = getSeo("ja");
  assert.equal(metadata.alternates.canonical, "/ja");
  assert.deepEqual(metadata.alternates.languages, { en: "/en", ja: "/ja", "x-default": "/" });
  assert.match(metadata.title, /Wisnu Putra/);
});


test("localized 404 copy supports English, Japanese, and fallback text", () => {
  assert.match(getNotFoundCopy("en").heading, /off the map/);
  assert.match(getNotFoundCopy("ja").heading, /ページ/);
  assert.deepEqual(getNotFoundCopy("unknown"), getNotFoundCopy("en"));
});

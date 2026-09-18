export const locales = ["en", "ja"];
export const defaultLocale = "en";

export function isLocale(value) {
  return locales.includes(value);
}

function preferredLocales(acceptLanguage = "") {
  return acceptLanguage
    .split(",")
    .map((entry, index) => {
      const [tag, ...parameters] = entry.trim().split(";");
      const qualityParameter = parameters.find((parameter) => parameter.trim().startsWith("q="));
      const quality = qualityParameter ? Number(qualityParameter.trim().slice(2)) : 1;

      return { locale: tag.toLowerCase().split("-")[0], quality: Number.isFinite(quality) ? quality : 0, index };
    })
    .filter(({ locale, quality }) => isLocale(locale) && quality > 0)
    .sort((left, right) => right.quality - left.quality || left.index - right.index)
    .map(({ locale }) => locale);
}

export function selectLocale({ cookieLocale, acceptLanguage } = {}) {
  if (isLocale(cookieLocale)) return cookieLocale;
  return preferredLocales(acceptLanguage)[0] ?? defaultLocale;
}

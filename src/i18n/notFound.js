import { defaultLocale, isLocale } from "./locales.js";

export const notFoundCopy = {
  en: {
    eyebrow: "404 · Page not found",
    heading: "This path is off the map.",
    description: "The page you are looking for does not exist or may have moved.",
    action: "Back to my portfolio",
  },
  ja: {
    eyebrow: "404 · ページが見つかりません",
    heading: "お探しのページは見つかりませんでした。",
    description: "このページは存在しないか、移動した可能性があります。",
    action: "ポートフォリオに戻る",
  },
};

export function getNotFoundCopy(locale) {
  return notFoundCopy[isLocale(locale) ? locale : defaultLocale];
}

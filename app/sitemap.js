import { siteUrl } from "../src/seo";

export default function sitemap() {
  return ["en", "ja"].map((locale) => ({
    url: `${siteUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
  }));
}

import type { CollectionEntry } from "astro:content";
import type { Lang } from "@/i18n";

/** "ar/how-to-choose" -> { lang: "ar", slug: "how-to-choose" } */
export function splitId(id: string): { lang: Lang; slug: string } {
  const [lang, ...rest] = id.split("/");
  return { lang: lang as Lang, slug: rest.join("/") };
}

export const inLang = <T extends CollectionEntry<"articles" | "policies">>(entries: T[], lang: Lang) =>
  entries.filter((e) => splitId(e.id).lang === lang);

export function readingMinutes(body = "", lang: Lang): number {
  const words = body.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / (lang === "ar" ? 160 : 200)));
}

export function formatDate(d: Date, lang: Lang): string {
  return new Intl.DateTimeFormat(lang === "ar" ? "ar-EG-u-nu-latn" : "en-GB", { day: "numeric", month: "long", year: "numeric" }).format(d);
}

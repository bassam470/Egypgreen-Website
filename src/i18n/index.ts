import { ar } from "./ar";
import { en } from "./en";

export const locales = ["ar", "en"] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = "ar";

const dictionaries = { ar, en } as const;
export type Dict = typeof ar;

export function t(lang: Lang): Dict {
  return dictionaries[lang] as Dict;
}

export const dir = (lang: Lang) => (lang === "ar" ? "rtl" : "ltr");
export const otherLang = (lang: Lang): Lang => (lang === "ar" ? "en" : "ar");
export const hrefLang = (lang: Lang) => (lang === "ar" ? "ar-EG" : "en");

/** Build a site path: href("ar", "/pumps") -> "/ar/pumps/". Always a trailing slash. */
export function href(lang: Lang, path = "/"): string {
  const clean = path.replace(/^\/+|\/+$/g, "");
  return clean ? `/${lang}/${clean}/` : `/${lang}/`;
}

/** The same page in the other language, from the current pathname. */
export function switchPath(pathname: string, to: Lang): string {
  const rest = pathname.replace(/^\/(ar|en)(?=\/|$)/, "");
  return href(to, rest);
}

/** getStaticPaths helper for pages under src/pages/[lang]/. */
export function langPaths() {
  return locales.map((lang) => ({ params: { lang } }));
}

/** Pick the right side of a bilingual value. */
export function pick<T>(v: { ar: T; en: T }, lang: Lang): T {
  return v[lang];
}

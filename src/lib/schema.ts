import { company } from "@/data/company";
import { href, t, type Lang } from "@/i18n";

const id = (frag: string) => `${company.site}/#${frag}`;

/** Organization + LocalBusiness for the home and contact pages. */
export function businessSchema(lang: Lang) {
  const d = t(lang);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": id("organization"),
        name: "EgypGreen",
        alternateName: ["ايجيب جرين", company.legal.nameAr],
        legalName: company.legal.nameAr,
        url: company.site,
        logo: `${company.site}/icon-512.png`,
        foundingDate: String(company.foundedYear),
        telephone: company.phones[0],
        ...(company.emailActive ? { email: company.email } : {}),
        // sameAs: add social profile URLs here when they exist.
      },
      {
        "@type": ["LocalBusiness", "Store"],
        "@id": id("business"),
        name: lang === "ar" ? "ايجيب جرين" : "EgypGreen",
        description: d.meta.defaultDescription,
        url: new URL(href(lang), company.site).href,
        image: `${company.site}/og/og-default-${lang}.png`,
        parentOrganization: { "@id": id("organization") },
        telephone: company.phones,
        address: {
          "@type": "PostalAddress",
          streetAddress: lang === "ar" ? "المجمع الصناعي بوصلة، المنطقة الصناعية" : "Bosla Industrial Complex, Industrial Zone",
          addressLocality: lang === "ar" ? "مدينة 6 أكتوبر" : "6th of October City",
          addressRegion: lang === "ar" ? "الجيزة" : "Giza",
          addressCountry: "EG",
        },
        geo: { "@type": "GeoCoordinates", latitude: company.geo.latitude, longitude: company.geo.longitude },
        hasMap: `https://www.google.com/maps?q=${company.geo.latitude},${company.geo.longitude}`,
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
        areaServed: { "@type": "Country", name: "Egypt" },
        brand: [{ "@type": "Brand", name: "Tormac" }, { "@type": "Brand", name: "Astral" }, { "@type": "Brand", name: "LONGi" }],
      },
    ],
  };
}

export function websiteSchema(lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": id(`website-${lang}`),
    name: lang === "ar" ? "ايجيب جرين" : "EgypGreen",
    url: new URL(href(lang), company.site).href,
    inLanguage: lang === "ar" ? "ar-EG" : "en",
    publisher: { "@id": id("organization") },
  };
}

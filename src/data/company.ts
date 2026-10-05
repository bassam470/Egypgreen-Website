import raw from "../../data/company.json";

/** Company facts. data/company.json is the single source; this file only shapes it for the site. */
export const company = {
  brand: raw.brand,
  legal: raw.legal,
  phones: raw.contact.phones,
  whatsapp: raw.contact.whatsappQuotes,
  email: raw.contact.email,
  emailActive: raw.contact.emailActive,
  address: { ar: raw.location.ar, en: raw.location.en },
  registeredAddress: {
    ar: raw.legal.registeredAddressAr,
    en: "Building 321, Fourth Tourist Zone, 6th of October City, Giza",
  },
  geo: raw.location.geo,
  foundedYear: raw.legal.foundedYear,
  site: "https://egypgreen.com",
} as const;

/** "+201068155336" -> "0106 815 5336" for display; tel: links keep the E.164 form. */
export function displayPhone(e164: string): string {
  const local = "0" + e164.replace(/^\+20/, "");
  return `${local.slice(0, 4)} ${local.slice(4, 7)} ${local.slice(7)}`;
}

export function waLink(text?: string): string {
  const n = company.whatsapp.replace(/\D/g, "");
  return `https://wa.me/${n}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
}

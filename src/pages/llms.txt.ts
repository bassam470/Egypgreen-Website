import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { brands } from "@/data/brands";
import { company, displayPhone } from "@/data/company";
import { products, productPath } from "@/data/products";
import { splitId } from "@/lib/content";
import { href } from "@/i18n";

// Plain-text summary of the site for AI assistants (llmstxt.org).
export const GET: APIRoute = async () => {
  const u = (p: string) => new URL(p, company.site).href;
  const articles = (await getCollection("articles")).filter((a) => splitId(a.id).lang === "en");
  const lines = [
    "# EgypGreen (ايجيب جرين)",
    "",
    "> Egyptian importer and authorized agent for Tormac submersible pumps and motors, Astral Bore-Well uPVC column pipes and LONGi solar panels. Delivers to every governorate in Egypt. Sales by phone and WhatsApp, 24/7. Prices are given on request; the site has no online checkout.",
    "",
    `- Phone / WhatsApp: ${displayPhone(company.phones[0])} (${company.phones[0]}), ${displayPhone(company.phones[1])}`,
    `- Warehouse: ${company.address.en}`,
    `- Founded: ${company.foundedYear}. Commercial register ${company.legal.commercialRegister}.`,
    "- Supply and distribution only: no installation service.",
    "- Site languages: Arabic (default, /ar/) and English (/en/).",
    "",
    "## Products",
    ...products.map((p) => `- [${p.name.en}](${u(href("en", productPath(p)))}): ${p.summary.en}`),
    "",
    "## Brands",
    ...brands.map((b) => `- ${b.name} (${b.country.en}): ${b.line.en}`),
    "",
    "## Guides",
    ...articles.map((a) => `- [${a.data.title}](${u(href("en", `/articles/${splitId(a.id).slug}`))}): ${a.data.description}`),
    "",
    "## Pages",
    `- [Catalogues (PDF)](${u(href("en", "/catalogs"))})`,
    `- [Request a quote](${u(href("en", "/quote"))})`,
    `- [Contact](${u(href("en", "/contact"))})`,
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};

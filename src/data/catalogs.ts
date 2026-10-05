import raw from "../../data/solar-panels-longi.json";
import type { BrandId, L10n } from "./products/types";

export interface Catalog {
  id: string;
  brand: BrandId;
  title: L10n;
  description: L10n;
  file: string;
  /** Size in MB, filled in by hand when the file changes. */
  sizeMb: number;
  pages: number;
  language: L10n;
}

const longiCatalogs: Catalog[] = raw.products.map((m) => ({
  id: `longi-${m.model.toLowerCase()}`,
  brand: "longi",
  title: { ar: `نشرة LONGi ${m.series} · ${m.model}`, en: `LONGi ${m.series} · ${m.model} datasheet` },
  description: {
    ar: `${m.power_range_w[0]} – ${m.power_range_w[1]} وات. المواصفات الكهربائية والميكانيكية والأبعاد.`,
    en: `${m.power_range_w[0]} – ${m.power_range_w[1]} W. Electrical and mechanical specifications and dimensions.`,
  },
  file: `/catalogs/longi-${m.model.toLowerCase()}-datasheet.pdf`,
  sizeMb: 1,
  pages: 2,
  language: { ar: "إنجليزي", en: "English" },
}));

export const catalogs: Catalog[] = [
  {
    id: "tormac-pumps",
    brand: "tormac",
    title: { ar: "كتالوج طلمبات Tormac الغاطسة، 50 هرتز", en: "Tormac submersible pumps catalogue, 50 Hz" },
    description: {
      ar: "سلسلة TS بكل مقاساتها: حدود التشغيل، ومنحنيات وجداول الأداء لكل موديل، والأبعاد.",
      en: "The full TS series: operating limits, performance curves and tables for every model, and dimensions.",
    },
    file: "/catalogs/tormac-submersible-pumps-50hz.pdf",
    sizeMb: 26.6,
    pages: 124,
    language: { ar: "إنجليزي", en: "English" },
  },
  {
    id: "tormac-motors",
    brand: "tormac",
    title: { ar: "كتالوج مواتير Tormac الغاطسة، 50 هرتز", en: "Tormac submersible motors catalogue, 50 Hz" },
    description: {
      ar: "سلسلة ECO: البيانات الفنية والكهربائية لكل مقاس، والأبعاد، وإرشادات الكابلات.",
      en: "The ECO series: technical and electrical data for every frame, dimensions and cable guidance.",
    },
    file: "/catalogs/tormac-submersible-motors-50hz.pdf",
    sizeMb: 4.7,
    pages: 42,
    language: { ar: "إنجليزي", en: "English" },
  },
  {
    id: "astral-bore-well",
    brand: "astral",
    title: { ar: "كتالوج مواسير Astral Bore-Well", en: "Astral Bore-Well column pipes catalogue" },
    description: {
      ar: "المقاسات والفئات، والجدول الفني، وخطوات التركيب والتخزين، والإكسسوارات.",
      en: "Sizes and classes, the technical chart, installation and storage steps, and accessories.",
    },
    file: "/catalogs/astral-bore-well-column-pipes.pdf",
    sizeMb: 2.6,
    pages: 36,
    language: { ar: "إنجليزي", en: "English" },
  },
  ...longiCatalogs,
];

export const catalogById = (id: string) => catalogs.find((c) => c.id === id);

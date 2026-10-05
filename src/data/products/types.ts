export type L10n = { ar: string; en: string };
export type L10nList = { ar: string[]; en: string[] };
export type Category = "pumps" | "pipes" | "solar";
export type BrandId = "tormac" | "astral" | "longi";

/** A table shown on the product page. Cells are plain strings (numbers, codes) or bilingual. */
export interface SpecTable {
  id: string;
  title: L10n;
  note?: L10n;
  columns: L10n[];
  rows: (string | L10n)[][];
  /** First column is a row heading. */
  rowHeads?: boolean;
  /** Render closed inside <details> (long per-model tables). */
  collapsible?: boolean;
  image?: string;
}

/**
 * Two-step selector feeding the quote cart: pick a group (bore size, pipe size,
 * panel model), then an option inside it (power, pressure class, wattage).
 */
export interface Selector {
  groupLabel: L10n;
  optionLabel: L10n;
  groups: {
    value: string;
    label: L10n;
    options: { value: string; label: L10n; detail?: L10n }[];
  }[];
}

export interface Product {
  slug: string;
  category: Category;
  brand: BrandId;
  name: L10n;
  /** One line for cards and meta descriptions. */
  summary: L10n;
  intro: L10nList;
  image: string;
  cardImage: string;
  gallery?: { src: string; alt: L10n }[];
  keyFigures: { value: L10n; label: L10n }[];
  cardSpecs: { label: L10n; value: L10n }[];
  features: L10nList;
  overview: SpecTable;
  tables: SpecTable[];
  selector: Selector;
  /** Manufacturer catalog id from src/data/catalogs.ts. */
  catalogs: string[];
  applications: string[];
  related: string[];
}

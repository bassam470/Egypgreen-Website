import { tormacTs } from "./tormac-ts";
import { tormacEco } from "./tormac-eco";
import { astral } from "./astral";
import { longi } from "./longi";
import type { Category, Product } from "./types";

export * from "./types";

export const products: Product[] = [tormacTs, tormacEco, astral, longi];

export const productBySlug = (slug: string) => {
  const p = products.find((x) => x.slug === slug);
  if (!p) throw new Error(`Unknown product "${slug}"`);
  return p;
};

export const productsIn = (c: Category) => products.filter((p) => p.category === c);

export const categoryPath: Record<Category, string> = { pumps: "/pumps", pipes: "/pipes", solar: "/solar" };
export const productPath = (p: Product) => `/products/${p.slug}`;

# EgypGreen website

Bilingual (Arabic first, English) static site for EgypGreen / ايجيب جرين, built with Astro. The build is plain HTML/CSS/JS in `dist/`, uploaded to the Namecheap addon domain's document root. No Node process runs on the server.

## Commands

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # writes dist/
npx astro check    # type check (needs TypeScript 6)
```

Image and catalogue sources (kept outside the repo) are processed by Python scripts, not by the build:

```bash
python scripts/process-images.py   # Images/ -> public/images/
CATALOG_SRC=/path/to/manufacturer/pdfs python scripts/build-catalogs.py   # -> public/catalogs/
```

## Where things live

| What | File |
|---|---|
| Company facts (phones, address, CR) | `data/company.json`, shaped by `src/data/company.ts` |
| Products, specs, quote selectors | `src/data/products/*.ts` (LONGi reads `data/solar-panels-longi.json`) |
| Brands, applications, catalogues | `src/data/brands.ts`, `applications.ts`, `catalogs.ts` |
| UI strings | `src/i18n/ar.ts`, `src/i18n/en.ts` |
| Articles and policies | `src/content/{articles,policies}/{ar,en}/<slug>.md` (same slug in both languages) |
| Analytics IDs (empty at launch) | `src/data/analytics.ts` |
| Brand tokens and site CSS | `src/styles/tokens.css`, `src/styles/global.css` |
| Host rules (HTTPS, `/` → `/ar/`, caching, 404) | `public/.htaccess` |

## Rules

- All product copy is original. Don't paste text from other websites.
- No prices anywhere. No installation promises. Voice: numbers first, no exclamation marks, no emoji.
- The logo is always the supplied SVG, never live text.

Keyword research is in `docs/`.

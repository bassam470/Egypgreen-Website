# EgypGreen brand: notes for the website build

The brand files here are Brand Kit **v1.1**, copied unchanged from `D:\EgypGreen-Brand-Kit-v1.1\EgypGreen-Brand-Kit`. The full rules are in `EgypGreen-Brand-Identity.pdf` (40 pages) and the changes since v1.0 are in `README.txt`.

## Names

- **English:** `EgypGreen`
- **Arabic:** `ايجيب جرين` (no ت), matching the commercial register.
- **Legal name:** ايجيب جرين لصناعة وتجارة الطلمبات (ش.ذ.م.م), registered under CR 31614 at the 6th of October Investment Office.

## Which files to use where

| Folder | Use on the site |
|---|---|
| `01-Logo-SVG/` | Header: `egypgreen-lockup-ar-en-color.svg` on Arabic pages and `egypgreen-lockup-en-ar-color.svg` on English pages. Use `egypgreen-wordmark-color.svg` where there's no room for both. Footer on pine: the `*-white.svg` versions |
| `02-Logo-PNG/` | OpenGraph and social share images, and the logo in the email signature |
| `03-App-Icon/` | `favicon.svg`, `favicon-32.png`, `apple-touch-180.png`, and `app-icon-512.png` for the manifest |
| `04-Icons-SVG/` | 10 line icons: pump (submersible), pipe, panel, truck, shield, badge, pin, whatsapp, phone, email |
| `05-Pattern-SVG/` | Section bands. Use them tone on tone only, and never behind small text |
| `06-Fonts/` | Readex Pro and Readex Pro Arabic, weights 400 and 600, self-hosted |
| `07-Web/` | Load `egypgreen-tokens.css` first, then `egypgreen-web-kit.css`. The tokens file loads the fonts from `../06-Fonts/`, so keep these two folders next to each other or update the paths |

## Rules that affect the code

- **Logos:** use the SVG files as supplied. Never retype "EgypGreen" or "ايجيب جرين" as live text in place of the logo.
- **Colour:**
  - Deep green dominates.
  - Leaf green is never used for body text.
  - Amber is an accent only, about 2–5% of a layout. Never put amber text on white or white text on amber. Use `amber-deep` for amber-coloured text.
- **Flat:** no shadows anywhere. Separate surfaces with `--line` borders. Cards and buttons use an 8 px radius.
- **Arabic first:** Arabic text is one size step larger than English and uses looser line height. Use Western digits in both languages.
- **Voice:**
  - Numbers before adjectives.
  - Simple formal Arabic.
  - No exclamation marks and no emoji.
  - Never promise installation. The company distributes only.
- **Photos:** daylight shots, and product photos on pure white. No palm trees, oases, dunes, wells, pharaonic imagery or other companies' logos.

## Sample values

Model numbers, prices and specs in the brand book (for example "SP-150" and "CP-50-6") are placeholders. Take real values from `data/` and the manufacturers' catalogues.

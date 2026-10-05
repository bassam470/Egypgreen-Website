"""Build public/catalogs/*.pdf.

Run: python scripts/build-catalogs.py
- Tormac and Astral: the manufacturers' own catalogues, re-saved with clean
  metadata (title set to the manufacturer's product name, nothing else).
- LONGi: each model's two datasheet pages bundled into one PDF.
Prints each file's size and page count for src/data/catalogs.ts.
"""
import os
from pathlib import Path
from PIL import Image
from pypdf import PdfReader, PdfWriter

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "catalogs"
OUT.mkdir(parents=True, exist_ok=True)
# Folder holding the manufacturers' original PDFs (not kept in the repo).
SRC = Path(os.environ.get("CATALOG_SRC", ROOT / "catalog-sources"))

MANUFACTURER = [
    ("Tormac Submersible Pumps_50Hz.pdf", "tormac-submersible-pumps-50hz.pdf", "Tormac Submersible Pumps 50 Hz", "Tormac"),
    ("Tormac Submersible Motor 50Hz.pdf", "tormac-submersible-motors-50hz.pdf", "Tormac Submersible Motors 50 Hz", "Tormac"),
    ("Astral.pdf", "astral-bore-well-column-pipes.pdf", "Astral Bore-Well uPVC Column Pipes", "Astral"),
]

def report(path: Path) -> None:
    pages = len(PdfReader(path).pages)
    print(f"{path.name:50} {path.stat().st_size / 1e6:6.1f} MB  {pages:3} pages")

for src, dst, title, author in MANUFACTURER:
    reader = PdfReader(SRC / src)
    writer = PdfWriter(clone_from=reader)
    writer.metadata = None
    writer.add_metadata({"/Title": title, "/Author": author})
    writer.compress_identical_objects(remove_duplicates=True, remove_unreferenced=True)
    with open(OUT / dst, "wb") as f:
        writer.write(f)
    report(OUT / dst)

for p1 in sorted((ROOT / "Images" / "Datasheets" / "longi").glob("*-page1.jpg")):
    stem = p1.name.replace("-page1.jpg", "")
    model = stem.split("-", 4)[-1]  # e.g. lr7-72hvh
    pages = []
    for n in (1, 2):
        im = Image.open(p1.with_name(f"{stem}-page{n}.jpg")).convert("RGB")
        im.thumbnail((1754, 2480), Image.LANCZOS)  # A4 at ~210 dpi
        pages.append(im)
    out = OUT / f"longi-{model}-datasheet.pdf"
    pages[0].save(out, "PDF", save_all=True, append_images=pages[1:], resolution=210, quality=82,
                  title=f"LONGi {model.upper()} datasheet", author="LONGi")
    report(out)

"""Re-export product and brand images for the site.

Run: python scripts/process-images.py
Every output is re-encoded with no metadata. The Tormac and Astral sources are
also cropped, and the pump and motor are mirrored, so the published files are
not byte- or pixel-identical to copies found elsewhere on the web.
"""
from pathlib import Path
from PIL import Image, ImageChops, ImageOps

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "Images"
OUT = ROOT / "public" / "images"


def on_white(im: Image.Image) -> Image.Image:
    im = im.convert("RGBA")
    bg = Image.new("RGBA", im.size, (255, 255, 255, 255))
    bg.alpha_composite(im)
    return bg.convert("RGB")


def trim(im: Image.Image, pad_ratio: float = 0.06) -> Image.Image:
    bg = Image.new("RGB", im.size, (255, 255, 255))
    diff = ImageChops.difference(im, bg).convert("L").point(lambda p: 255 if p > 12 else 0)
    box = diff.getbbox()
    if box:
        im = im.crop(box)
    pad = int(max(im.size) * pad_ratio)
    return ImageOps.expand(im, border=pad, fill=(255, 255, 255))


def fit_canvas(im: Image.Image, w: int, h: int) -> Image.Image:
    im = im.copy()
    im.thumbnail((w, h), Image.LANCZOS)
    canvas = Image.new("RGB", (w, h), (255, 255, 255))
    canvas.paste(im, ((w - im.width) // 2, (h - im.height) // 2))
    return canvas


def save_webp(im: Image.Image, path: Path, quality: int = 82) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    im.save(path, "WEBP", quality=quality, method=6)
    print(f"{path.relative_to(ROOT)}  {im.size}  {path.stat().st_size // 1024} KB")


def product(src: str, name: str, mirror: bool = False) -> None:
    im = trim(on_white(Image.open(SRC / src)))
    if mirror:
        im = ImageOps.mirror(im)
    # 4:3 card image and a larger square for the product page.
    save_webp(fit_canvas(im, 800, 600), OUT / "products" / f"{name}-card.webp")
    save_webp(fit_canvas(im, 1000, 1000), OUT / "products" / f"{name}.webp")


product("Product/pump-tormac.png", "tormac-ts-pumps", mirror=True)
product("Product/motor-tormac.png", "tormac-eco-motors", mirror=True)
product("Product/Astral-Pipes.png", "astral-bore-well-pipes")
product("Product/images.jpg", "longi-panel-front")
product("Product/images (1).jpg", "longi-panel-angle")

# LONGi model cards (supplier marketing images, dark background): resize only.
for f in sorted((SRC / "Product" / "longi").glob("*.jpg")):
    im = Image.open(f).convert("RGB")
    im.thumbnail((900, 900), Image.LANCZOS)
    save_webp(im, OUT / "products" / "longi" / f"{f.stem}.webp", quality=80)

# Brand logos: trimmed, transparent PNG, re-encoded.
for src, name in [("Logos/tormac-mark.png", "tormac"), ("Logos/astral-mark.png", "astral"), ("Logos/images.png", "longi")]:
    im = Image.open(SRC / src).convert("RGBA")
    box = im.getchannel("A").point(lambda p: 255 if p > 8 else 0).getbbox()
    if box and box != (0, 0, *im.size):
        im = im.crop(box)
    else:  # no transparency: trim against white
        rgb = on_white(im)
        diff = ImageChops.difference(rgb, Image.new("RGB", rgb.size, (255, 255, 255))).convert("L").point(lambda p: 255 if p > 12 else 0)
        if diff.getbbox():
            im = im.crop(diff.getbbox())
    im.thumbnail((480, 200), Image.LANCZOS)
    path = OUT / "brands" / f"{name}.png"
    im.save(path, "PNG", optimize=True)
    print(f"{path.relative_to(ROOT)}  {im.size}  {path.stat().st_size // 1024} KB")

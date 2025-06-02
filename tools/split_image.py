from PIL import Image
import sys, pathlib

src = pathlib.Path(sys.argv[1]).expanduser()
tag = src.stem             # e.g. img3
out = pathlib.Path(__file__).parent.parent / "assets" / "tiles" / tag
out.mkdir(parents=True, exist_ok=True)

img = Image.open(src).convert("RGBA")
w, h = img.size
tw, th = w // 3, h // 3

k = 0
for r in range(3):
    for c in range(3):
        tile = img.crop((c*tw, r*th, (c+1)*tw, (r+1)*th))
        if k != 8:            # leave the last square blank
            tile.save(out / f"{k}.png")
        k += 1
print(f"✓ {tag} tiles saved to {out}")

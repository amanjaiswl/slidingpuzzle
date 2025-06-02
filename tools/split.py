from PIL import Image
import sys, pathlib

src = pathlib.Path(__file__).parent.parent / "assets" / "mickey.png"
out_dir = pathlib.Path(__file__).parent.parent / "assets" / "tiles"
out_dir.mkdir(exist_ok=True)

img = Image.open(src).convert("RGBA")
W, H = img.size
tile_w, tile_h = W // 3, H // 3

k = 0
for r in range(3):
    for c in range(3):
        box = (c*tile_w, r*tile_h, (c+1)*tile_w, (r+1)*tile_h)
        tile = img.crop(box)
        if k != 8:                                     # keep last spot blank
            tile.save(out_dir / f"{k}.png")
        k += 1

print("✓ Tiles written to assets/tiles/")


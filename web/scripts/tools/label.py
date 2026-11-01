#!/usr/bin/env python3
# Crops a band like crop.py, but draws a numbered guide line at each x given with --ticks.
# The arrow positions printed by bars.py/tree.py are page percentages, so a bar's children can be
# fed straight in and every name read off against its own numbered line instead of by eye.
#
#   python label.py <image> <name> <y0> <y1> <x0> <x1> --ticks 23.5,34.2,44.6 [--size=1400]
#
# Ticks are numbered 1.. from the LEFT, so the eldest child (rightmost in the book) is the last one.

import os
import sys

from PIL import Image, ImageDraw, ImageEnhance, ImageOps

TOOLS = os.path.dirname(os.path.abspath(__file__))
CROPS = os.path.join(TOOLS, "crops")


def main(argv):
    size, ticks, args = 1400, [], []
    for a in argv:
        if a.startswith("--size="):
            size = int(a.split("=", 1)[1])
        elif a.startswith("--ticks"):
            ticks = [float(t) for t in a.split("=", 1)[1].split(",") if t]
        else:
            args.append(a)

    img, name, y0, y1, x0, x1 = args[0], args[1], float(args[2]), float(args[3]), float(args[4]), float(args[5])
    im = Image.open(img)
    W, H = im.size
    box = (int(W * x0 / 100), int(H * y0 / 100), int(W * x1 / 100), int(H * y1 / 100))
    im = im.crop(box).convert("L")
    im = ImageEnhance.Sharpness(ImageOps.autocontrast(im, cutoff=1)).enhance(2.0).convert("RGB")
    w, h = im.size
    s = size / max(w, h)
    im = im.resize((max(int(w * s), 1), max(int(h * s), 1)), Image.LANCZOS)
    w, h = im.size

    draw = ImageDraw.Draw(im)
    for i, t in enumerate(ticks, 1):
        x = int((t - x0) / (x1 - x0) * w)
        draw.line([(x, 0), (x, h)], fill=(255, 0, 0), width=2)
        draw.rectangle([x - 11, 2, x + 11, 26], fill=(255, 0, 0))
        draw.text((x - 6, 7), str(i), fill=(255, 255, 255))

    os.makedirs(CROPS, exist_ok=True)
    out = os.path.join(CROPS, f"{name}.jpg")
    im.save(out, "JPEG", quality=92)
    print(f"{out} {im.size[0]}x{im.size[1]}  ticks(left to right): " + " ".join(f"{i}={t}" for i, t in enumerate(ticks, 1)))


if __name__ == "__main__":
    main(sys.argv[1:])

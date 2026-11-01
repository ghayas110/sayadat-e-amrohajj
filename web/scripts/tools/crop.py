#!/usr/bin/env python3
# Windows/Linux stand-in for crop.sh + rows.sh + stack.swift (which need macOS sips/swift).
# Percentages and output names match crop.sh, so the HANDOFF.md recipes translate directly.
#
#   python crop.py <image> <name> <y0%> <y1%> [x0%] [x1%]        -> crops/<name>.jpg
#   python crop.py --rows <image> <prefix> <x0> <x1> <y0-y1>...  -> crops/<prefix>A.jpg, ...B (3 bands each)
#
# Crops are scaled so the long side is --size px (default 1800) and lightly sharpened, because the
# book photos are small (about 1200x1600) and the Nastaliq names are only legible enlarged.

import os
import sys

from PIL import Image, ImageEnhance, ImageOps

TOOLS = os.path.dirname(os.path.abspath(__file__))
CROPS = os.path.join(TOOLS, "crops")


def crop(img_path, name, y0, y1, x0=0, x1=100, size=1800, raw=False):
    im = Image.open(img_path)
    W, H = im.size
    box = (W * x0 // 100, H * y0 // 100, max(W * x1 // 100, 1), max(H * y1 // 100, 1))
    im = im.crop(box)
    w, h = im.size
    if max(w, h) != size:
        s = size / max(w, h)
        im = im.resize((max(int(w * s), 1), max(int(h * s), 1)), Image.LANCZOS)
    if not raw:
        im = ImageOps.autocontrast(im.convert("L"), cutoff=1)
        im = ImageEnhance.Sharpness(im).enhance(2.0)
    os.makedirs(CROPS, exist_ok=True)
    out = os.path.join(CROPS, f"{name}.jpg")
    im.convert("RGB").save(out, "JPEG", quality=90)
    print(f"{out} {im.size[0]} {im.size[1]}")
    return out


def stack(out, paths):
    ims = [Image.open(p) for p in paths]
    w = max(i.size[0] for i in ims)
    h = sum(i.size[1] for i in ims)
    canvas = Image.new("RGB", (w, h), "white")
    y = 0
    for i in ims:
        canvas.paste(i, (0, y))
        y += i.size[1]
    canvas.save(out, "JPEG", quality=90)
    print(f"{out} {w} {h}")


def main(argv):
    size = 1800
    raw = False
    args = []
    for a in argv:
        if a.startswith("--size="):
            size = int(a.split("=", 1)[1])
        elif a == "--raw":
            raw = True
        else:
            args.append(a)

    if args and args[0] == "--rows":
        _, img, prefix, x0, x1, *ranges = args
        letters = "ABCDEFGHIJ"
        group = []
        for i, r in enumerate(ranges, 1):
            y0, y1 = r.split("-")
            group.append(crop(img, f"{prefix}_{i}", int(y0), int(y1), int(x0), int(x1), size, raw))
            if len(group) == 3:
                stack(os.path.join(CROPS, f"{prefix}{letters[(i - 1) // 3]}.jpg"), group)
                group = []
        if group:
            stack(os.path.join(CROPS, f"{prefix}{letters[(len(ranges) - 1) // 3]}.jpg"), group)
        return

    img, name, y0, y1 = args[0], args[1], int(args[2]), int(args[3])
    x0 = int(args[4]) if len(args) > 4 else 0
    x1 = int(args[5]) if len(args) > 5 else 100
    crop(img, name, y0, y1, x0, x1, size, raw)


if __name__ == "__main__":
    main(sys.argv[1:])

#!/usr/bin/env python3
# Finds the connector lines of a Kausar-ul-Ansab tree page, so the shape of the tree can be read
# from numbers instead of squinting at a crop. Reading the names still needs the image; this only
# answers "which bar does this vertical feed, and where are its arrows".
#
#   python bars.py <image> [--thresh 140] [--minh 45] [--minv 12] [--debug out.png]
#
# Prints, in page percentages:
#   H  y  x0..x1   horizontal bars (a parent's children-bar), longest first within a row
#   V  x  y0..y1   vertical segments (parent down to a bar, or a bar down to one child)
# Run deskew.py on the photo first: a 2 degree tilt smears a bar over 30 rows and it is lost.

import sys

import numpy as np
from PIL import Image, ImageDraw


def runs(mask_line, minlen):
    """Start/end indices of True runs of at least minlen in a 1-D boolean array."""
    idx = np.flatnonzero(np.diff(np.concatenate(([0], mask_line.view(np.int8), [0]))))
    out = []
    for a, b in zip(idx[::2], idx[1::2]):
        if b - a >= minlen:
            out.append((int(a), int(b)))
    return out


def find(mask, minlen, axis):
    """Runs along `axis` (1 = horizontal), merged across neighbouring lines."""
    found = []
    lines = mask if axis == 1 else mask.T
    for i, line in enumerate(lines):
        for a, b in runs(line, minlen):
            found.append([i, a, b])
    merged = []
    for i, a, b in sorted(found):
        hit = None
        for seg in merged:
            # a connector is a few pixels thick; without the height cap one dark patch chains the lot
            if i - seg[3] <= 3 and i - seg[0] <= 8 and a < seg[2] and b > seg[1]:
                hit = seg
                break
        if hit:
            hit[1] = min(hit[1], a)
            hit[2] = max(hit[2], b)
            hit[3] = i
        else:
            merged.append([i, a, b, i])
    return [(s[0], s[1], s[2]) for s in merged]


def main(argv):
    path = argv[0]
    opt = {"--thresh": 140, "--minh": 45, "--minv": 12}
    debug = None
    for k in list(opt):
        if k in argv:
            opt[k] = int(argv[argv.index(k) + 1])
    if "--debug" in argv:
        debug = argv[argv.index("--debug") + 1]

    im = Image.open(path).convert("L")
    W, H = im.size
    mask = np.asarray(im) < opt["--thresh"]

    # the photo's margins — page edge, the gutter, the photographer's fingers — are all long dark
    # runs, so detection is kept inside the drawn box
    box = [2, 98, 2, 98]
    if "--box" in argv:
        box = [float(v) for v in argv[argv.index("--box") + 1].split(",")]
    bx0, bx1, by0, by1 = int(W * box[0] / 100), int(W * box[1] / 100), int(H * box[2] / 100), int(H * box[3] / 100)
    inside = np.zeros_like(mask)
    inside[by0:by1, bx0:bx1] = mask[by0:by1, bx0:bx1]
    mask = inside

    hor = find(mask, opt["--minh"], 1)
    ver = find(mask, opt["--minv"], 0)

    print(f"# {path} {W}x{H}")
    for y, x0, x1 in sorted(hor):
        print(f"H {100*y/H:.1f} {100*x0/W:.1f}..{100*x1/W:.1f}")
    for x, y0, y1 in sorted(ver, key=lambda s: s[1]):
        print(f"V {100*x/W:.1f} {100*y0/H:.1f}..{100*y1/H:.1f}")

    if debug:
        d = im.convert("RGB")
        g = ImageDraw.Draw(d)
        for y, x0, x1 in hor:
            g.line([(x0, y), (x1, y)], fill=(255, 0, 0), width=3)
        for x, y0, y1 in ver:
            g.line([(x, y0), (x, y1)], fill=(0, 120, 255), width=3)
        d.save(debug)
        print(f"# debug -> {debug}")


if __name__ == "__main__":
    main(sys.argv[1:])

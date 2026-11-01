#!/usr/bin/env python3
# Straightens a photographed book page so that the tree's horizontal bars line up with the crop
# bands. Without this, a 2-3 degree tilt moves a row by a tenth of the page across its width and
# the bands cut names in half.
#
#   python deskew.py <image> [<image> ...]        -> writes <name>.straight.jpg beside the source
#
# These pages are mostly long horizontal connector bars, so the angle is found by rotating a
# downscaled copy and keeping the angle at which the darkest rows are darkest: a straight bar
# falls into one row and spikes its dark-pixel count, a tilted one smears over many rows.

import os
import sys

import numpy as np
from PIL import Image

TOP_ROWS = 25


def score(arr):
    rows = (arr < 128).sum(axis=1)
    return float(np.sort(rows)[-TOP_ROWS:].sum())


def best_angle(path, span=4.0, step=0.1):
    im = Image.open(path).convert("L")
    w = 700
    im = im.resize((w, int(w * im.size[1] / im.size[0])), Image.BILINEAR)
    # drop the margins: the page edge and the photographer's fingers are not part of the diagram
    W, H = im.size
    im = im.crop((int(W * 0.1), int(H * 0.05), int(W * 0.95), int(H * 0.95)))
    best, best_a = None, 0.0
    for a in np.arange(-span, span + 1e-9, step):
        arr = np.asarray(im.rotate(float(a), resample=Image.BILINEAR, fillcolor=255))
        s = score(arr)
        if best is None or s > best:
            best, best_a = s, float(a)
    return best_a


def main(paths):
    for p in paths:
        a = best_angle(p)
        im = Image.open(p).convert("RGB")
        out = os.path.splitext(p)[0] + ".straight.jpg"
        im.rotate(a, resample=Image.BICUBIC, fillcolor=(255, 255, 255)).save(out, "JPEG", quality=95)
        print(f"{out} angle={a:+.2f}")


if __name__ == "__main__":
    main(sys.argv[1:])

#!/usr/bin/env python3
# Turns the lines found by bars.py into the skeleton of a Kausar-ul-Ansab page: for every
# children-bar, where its father's line comes down and how many children hang off it, with each
# child's x. Read the names from a crop of the bar's own span — the count tells you when you have
# them all, which is the part that is easy to get wrong by eye.
#
#   python tree.py <image> [--thresh 150] [--minh 28] [--minv 10] [--box x0,x1,y0,y1]
#
# Prints one line per bar:
#   bar y=36.0  x=31.8..88.7  father@x=72.3  children(7): 34.1 42.0 50.6 ...
# A bar with no father line is either the top of a tree or a box drawn round a family.

import subprocess
import sys
import os

TOOLS = os.path.dirname(os.path.abspath(__file__))


def collect(argv):
    out = subprocess.run(
        [sys.executable, "-I", os.path.join(TOOLS, "bars.py")] + argv,
        capture_output=True,
        text=True,
        encoding="utf-8",
    ).stdout
    hor, ver = [], []
    for line in out.splitlines():
        p = line.split()
        if not p or p[0] not in ("H", "V"):
            continue
        a, b = p[2].split("..")
        (hor if p[0] == "H" else ver).append((float(p[1]), float(a), float(b)))
    return hor, ver


def main(argv):
    hor, ver = collect(argv)
    # the same bar is often found two or three times, a pixel apart; keep the longest of each cluster
    hor.sort(key=lambda h: (h[0], -(h[2] - h[1])))
    bars = []
    for y, x0, x1 in hor:
        if x1 - x0 < 3:
            continue
        dup = next((b for b in bars if abs(b[0] - y) < 1.2 and x0 < b[2] and x1 > b[1]), None)
        if dup:
            if x1 - x0 > dup[2] - dup[1]:
                dup[0], dup[1], dup[2] = y, x0, x1
        else:
            bars.append([y, x0, x1])

    for y, x0, x1 in bars:
        father = [v for v in ver if x0 - 0.6 <= v[0] <= x1 + 0.6 and v[1] < y - 0.8 <= v[2] + 0.8]
        kids = sorted(v[0] for v in ver if x0 - 0.6 <= v[0] <= x1 + 0.6 and y - 0.8 <= v[1] <= y + 1.2 and v[2] > y + 0.8)
        # arrows a hair apart are one arrow found twice
        thin = [k for i, k in enumerate(kids) if i == 0 or k - kids[i - 1] > 1.0]
        f = f"{min(father, key=lambda v: y - v[2])[0]:5.1f}" if father else "    -"
        print(f"bar y={y:5.1f}  x={x0:5.1f}..{x1:5.1f}  father@x={f}  children({len(thin)}): " + " ".join(f"{k:.1f}" for k in thin))


if __name__ == "__main__":
    main(sys.argv[1:])

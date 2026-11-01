#!/bin/zsh
# crop.sh <image> <name> <y0%> <y1%> [x0%] [x1%]  -> crops/<name>.jpg, scaled so the long side is 1500px
img="$1"; name="$2"; y0=$3; y1=$4; x0=${5:-0}; x1=${6:-100}
out="$(cd "$(dirname "$0")" && pwd)/crops/$name.jpg"
W=$(sips -g pixelWidth "$img" | awk '/pixelWidth/{print $2}')
H=$(sips -g pixelHeight "$img" | awk '/pixelHeight/{print $2}')
cy=$(( H * y0 / 100 + 1 )); ch=$(( H * (y1 - y0) / 100 - 1 ))
cx=$(( W * x0 / 100 + 1 )); cw=$(( W * (x1 - x0) / 100 - 1 ))
sips -s format jpeg --cropOffset $cy $cx -c $ch $cw "$img" --out "$out" >/dev/null 2>&1
sips -Z 1500 "$out" >/dev/null 2>&1
echo "$out $(sips -g pixelWidth -g pixelHeight "$out" | awk '/pixel/{printf "%s ", $2}')"

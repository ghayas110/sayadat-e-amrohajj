#!/bin/zsh
# rows.sh <image> <prefix> <x0> <x1> <y-ranges...>  -> full-width row crops stacked 3 per image: <prefix>A.jpg, <prefix>B.jpg ...
S="$(cd "$(dirname "$0")" && pwd)"
img="$1"; p="$2"; x0=$3; x1=$4; shift 4
i=0; group=(); letters=(A B C D E F G H)
for r in "$@"; do
  y0=${r%-*}; y1=${r#*-}; i=$((i+1))
  $S/crop.sh "$img" ${p}_$i $y0 $y1 $x0 $x1 >/dev/null
  group+=($S/crops/${p}_$i.jpg)
  if (( ${#group} == 3 )); then n=$(( (i-1)/3 + 1 )); $S/stack $S/crops/${p}${letters[$n]}.jpg $group; echo $S/crops/${p}${letters[$n]}.jpg; group=(); fi
done
if (( ${#group} > 0 )); then n=$(( (i-1)/3 + 1 )); $S/stack $S/crops/${p}${letters[$n]}.jpg $group; echo $S/crops/${p}${letters[$n]}.jpg; fi

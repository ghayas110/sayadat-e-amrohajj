# Handoff: transcribing Kausar-ul-Ansab family trees

Project: **Sadat-e-Amroha Nasab Nama**, a genealogy site (Next.js + Sanity) for the Syed families of Amroha,
built from the 1999 book *Kausar-ul-Ansab*. Photos of the book's family-tree pages are in `web/public/<mohalla>/<family>/`.
The job: **read each photo and turn it into a TypeScript data file**, then import it into Sanity so the
admin page (`/admin`, PIN is in `web/.env.local` as `ADMIN_PIN`) draws the tree.

Done so far: **every khandan that has photos** — 5–61 (plus 33), including khandan 40 from its two surviving pages.
Remaining: **nothing.** Khandan 4 (Sambhal, p23) has no photos at all, and khandan 40 (Saddo) survives only
as book pages 234–235 (pages 229–233 are missing); neither is in the table below. Sanity holds
**9,362 family records / ~33,900 named people** across 57 khandans. Nothing is committed to git yet.

## What you need
- The whole project folder, **including the photos in `web/public/`** (they are not in git; zip or copy the folder).
- Node 20+, `cd web && npm install`.
- `web/.env.local` with `NEXT_PUBLIC_SANITY_PROJECT_ID=rohuunpd`, `NEXT_PUBLIC_SANITY_DATASET=production`,
  `SANITY_API_WRITE_TOKEN=<a Sanity token with write access>` and `ADMIN_PIN=3844`. Ask the owner for the token. Do not commit it.
- macOS for `crop.sh`/`rows.sh`/`stack.swift` (they use `sips` and `swift`). On Windows or Linux use
  `web/scripts/tools/crop.py` and `deskew.py` instead — same percentages, Python 3 with Pillow and numpy.
- Claude Code (or any Claude that can read images).

## The data format (read these first)
- `web/scripts/kausar-ul-ansab/book.ts`: helpers `m()` (son), `f()` (daughter), `onPage()` and the `BookKhandan` type.
- `web/scripts/kausar-ul-ansab/k07-darbar-kalan.ts`: a finished example. `k20-guzri.ts` is a short one.
- Write males **without** "سید"; husbands **with** "سید". Children eldest first = **right to left** in the book.
- `m(name, notes?, children?)`, `f(name, husband?, husbandMohalla?, notes?)`.
- A family the book continues on another page: `onPage(N, m(name))` stub, defined **before** it is used.
- Mark anything uncertain with a trailing `// VERIFY: <what>`. Never invent names.
- Each khandan is one file `web/scripts/kausar-ul-ansab/k<NN>-<mohalla>.ts` exporting `default` a
  `BookKhandan { serial, mohalla, trees: [{ page, father?, root }] }`. `mohalla` is the first mohalla for that serial
  in `web/src/data/amrohaIndex.ts` (exact `value` string).
- Register it in `web/scripts/kausar-ul-ansab/index.ts` (import + add to the `KHANDANS` array).

## Reading dense pages (this is the slow, costly part)
Pages are small photos of arrow diagrams. Zoom in tiles with the helpers in `web/scripts/tools/` (run from `web/public`):
```bash
cd web/scripts/tools && swiftc -O -o stack stack.swift   # once
cd ../../public
../scripts/tools/crop.sh "<folder>/page1.jpeg" mycrop 0 25 0 100        # y0% y1% x0% x1%
../scripts/tools/rows.sh "<folder>/page1.jpeg" pg1 47 98 4-20 19-35 34-50 49-65 64-80 79-97   # right half, 6 bands
```
On Windows/Linux the same two recipes are:
```bash
cd web/public
python ../scripts/tools/crop.py "<folder>/page1.jpeg" mycrop 0 25 0 100                      # y0% y1% x0% x1%
python ../scripts/tools/crop.py --rows "<folder>/page1.jpeg" p1r 47 98 4-20 19-35 34-50 49-65 64-80 79-97
python ../scripts/tools/deskew.py <image>...   # writes <name>.straight.jpg; do this first, the photos tilt 1-3°
python ../scripts/tools/tree.py <image.straight.jpg> --box 12,93,8,96   # the page's skeleton, see below
python ../scripts/tools/label.py <image> name <y0> <y1> <x0> <x1> --ticks=23.5,34.2,44.6  # bar + guide lines
```
`bars.py` finds the diagram's connector lines and `tree.py` pairs them up, printing one line per
children-bar: where the father's line comes down and how many children hang off it, with each child's x.
On a page where the bars run into one another that count is what tells you when you have them all —
read the names from a crop of the bar's own span and check them against it. `bars.py --debug out.png`
draws the lines it found over the page, which is the quickest way to see a box you have missed.
`label.py` crops a band like `crop.py` but draws a numbered guide line at each x you give it, so a
bar's children from `tree.py` can be fed straight in and each name read off against its own line —
much faster and far more reliable than matching names to arrows by eye, which is where these pages
mislead you. Names sit roughly centred under their arrow, a little to its left.

**All three tools write into the one `crops/` folder, keyed only by the `<name>` you pass.** If you
run several readers at once (one agent per page, say), give every crop a prefix unique to its page —
`p342head`, not `head` — or they overwrite each other and you will read another page's chart without
noticing. Two agents hit exactly that on khandan 61 and caught it only because the heading was wrong.
Crops land in `web/scripts/tools/crops/`. Read each with the image reader. Work in bands (about 6 per half page) until every name,
arrow and husband line is legible. Ignore circled ①-type reader's marks and pen crosses. Page numbers are in each photo's header.

What worked best, in order:
1. One full-page crop for the layout, then each page's **heading strip** (`y 3 14`) — the headings
   "صفحہ N سید X بن سید Y" name every tree on the page and pin down which page number is which.
2. Half-width bands (x split into two overlapping halves, ~12% tall, three stacked per image) at about
   2.7x for the names and the small زوجہ/مہلہ lines.
3. **Full-width** bands at about 2x whenever you need to see which vertical feeds which children's bar —
   half-width crops cut the long bars and it is easy to attach children to the wrong father.
Urdu numerals: ۶ looks like a Latin "7" and ۷ like a "V", so "صفحہ ۶۹" reads as "<9". Cross-check every
page marker against the other pages' headings before trusting it.

## Check and import
```bash
cd web
npx tsx --env-file=.env.local scripts/import-kausar-ul-ansab.ts --dry-run --only 26     # validates links
npx tsx --env-file=.env.local scripts/import-kausar-ul-ansab.ts --only 26               # writes to Sanity
```
The dry run fails if a child family does not match a son listed under its father. Importing again replaces
the same records (fixed IDs), so corrections are safe. Then open `/admin`, pick the mohalla and the khandan, and look at the tree.

## Suggested way of working (saves the Claude limit)
- Do **small khandans first** (1–3 photos), 3–5 at a time. Huge ones last (44 has 25 photos, 36 has 21).
- One khandan per Claude conversation works well. Prompt to paste (change the serial and folder):

> Transcribe khandan <N> of Kausar-ul-Ansab from the photos in `web/public/<folder>/`. Read `HANDOFF.md`, `book.ts` and
> `k07-darbar-kalan.ts` first. Crop and zoom every page, write `web/scripts/kausar-ul-ansab/k<NN>-<mohalla>.ts`, register it in
> `index.ts`, run the dry run until it passes, then import with `--only <N>`. Mark doubtful readings `// VERIFY`.

- Some photos are duplicates, belong to a neighbouring khandan, or have handwritten correction sheets. Assign each tree by its heading
  "صفحہ N سید X بن سید Y". The folder for khandan 8 holds copies of khandan 9–10 pages; use khandan 10's own folder.
- Pages missing from the photos (for example 24, 37, 38) are left as `onPage` stubs; list them in your notes.

## Remaining work
| # | Folder (inside web/public) | Book page | Photos | Status |
|---|---|---|---|---|
| 5 | `darbar kalan/aulad syed aqil bin  syed adil` | 24 | 5 | DONE |
| 6 | `darbar kalan/aulad syed abdul khaliq bin syed abulhassan` | 30 | 12 | DONE |
| 7 | `darbar kalan/aulad syed ghulam murtaza bin diwan syed mahmood` | 43 | 5 | DONE |
| 8 | `darbar kalan/aulad syed abdul bari sani bin diwan syed mahmood` | 48 | 11 | DONE |
| 9 | `darbar kalan/aulad syed mardan ali bin syed muhammad ali` | 49 | 1 | DONE |
| 10 | `darbar kalan/aulad syed abul wajid bin syed abdul bari sani` | 50 | 9 | DONE |
| 11 | `darbar kalan/aulad syed ghulam sharafuddin bin syed abdul bari sani` | 59 | 13 | DONE |
| 12 | `sathi/aulad syed abdul wasey bin shah syed abul hassan` | 72 | 7 | DONE |
| 13 | `sathi/aulad syed muhammad chand bin syed abdul wasey` | 79 | 1 | DONE |
| 14 | `gher karam ali khan/aulad syed muhammad hussain bin syed muhammad shah` | 80 | 1 | DONE |
| 15 | `sathi/aulad syed muhammad ujiyale bin syed muhammad chand` | 81 | 1 | DONE |
| 16 | `sathi/aulad syed roshan ali bin syed muhammad chand` | 82 | 1 | DONE |
| 17 | `sathi/aulad syed muhammad munawwar bin syed muhammad chand` | 83 | 2 | DONE |
| 18 | `sathi/aulad syed abdul bari bin syed abul hassan` | 85 | 1 | DONE |
| 19 | `guzri/aulad syed abdul ghaffar bin syed mubarak` | 86 | 5 | DONE |
| 20 | `guzri/aulad syed abdul majid bin syed nafees mohiuddin` | 91 | 1 | DONE |
| 21 | `guzri/aulad syed hizabr ali bin syed ghazanfar ali` | 92 | 2 | DONE |
| 22 | `guzri/aulad syed muhamaadi bin syed ata mohiuddin` | 93 | 1 | DONE |
| 23 | `guzri/aulad syed asadullah khan mir kallu bin syed mustafa ali` | 95 | 12 | DONE |
| 24 | `guzri/aulad syed shujaat ali bin syed hizabr ali` | 105 | 11 | DONE |
| 25 | `guzri/aulad syed ali murtaza khan bin syed hizabr ali` | 114 | 3 | DONE |
| 26 | `shafaat pota/aulad syed abdul jaleel bin syed mubarak` | 117 | 13 | DONE |
| 27 | `majhpota/aulad syed abdul majeed majja bin syed mubarak` | 131 | 12 | DONE |
| 28 | `chhewra/aulad syed ishaq bin syed raju` | 143 | 10 | DONE |
| 29 | `bagla/aulad syed muhammad baqir awwal bin syed abdul rahim` | 152 | 9 | DONE |
| 30 | `chhewra/aulad syed hatim bin syed abdul rahim` | 161 | 3 | DONE |
| 31 | `machhar hatta/aulad syed ali akbar bin syed bahauddin` | 164 | 3 | DONE |
| 32 | `sabungran/aulad syed saadatullah bin syed fateh murad` | 167 | 1 | DONE |
| 34 | `bhooka/aulad syed hadi bin syed bahauddin` | 171 | 3 | DONE |
| 35 | `pachdara/aulad syed ibrahim bin syed bahauddin` | 175 | 5 | DONE |
| 36 | `qazi zada/aulad syed alauddin bin syed ibrahim` | 179 | 21 | DONE |
| 37 | `haqqani/aulad syed muhammad ali bin syed mir ali` | 199 | 15 | DONE |
| 38 | `lakra/aulad syed muhammad munawwar bin syed sultan muhammad` | 213 | 11 | DONE |
| 39 | `pachdara/aulad syed muhammad bin syed ali mutawalliyan` | 224 | 7 | DONE |
| 41 | `gori kunwan/aulad syed barey bin syed syedan shah` | 236 | 3 | DONE |
| 42 | `bhooka/aulad syed chand bin syed abubakr badruddin` | 239 | 3 | DONE |
| 43 | `aghwan pur/aulad syed jan bin syed wajihuddin` | 242 | 16 | DONE |
| 44 | `danishmandan/aulad syed muhammad ashraf danishmand bin syed muhammad saeed khan` | 258 | 25 | DONE |
| 45 | `darbar kalan/aulad syed abdul rahim wa syed muhammad bin syed khwaja` | 283 | 4 | DONE |
| 46 | `nakhshbi/aulad syed khwaja buzurg bin khwaja syed khateer sani` | 287 | 9 | DONE |
| 47 | `kot/aulad syed sirajuddin awwal bin syed muhammad baghdadi` | 296 | 6 | DONE |
| 48 | `jarodi/aulad syed akhwan saeed wa syed hasan saeed bin syed badruddin` | 302 | 9 | DONE |
| 49 | `qazi zada/aulad shah syed abdul ghani bin syed muhammad tahir` | 311 | 6 | DONE |
| 50 | `sabungran/aulad syed abul khair bin syed muhammad` | 318 | 2 | DONE |
| 51 | `qazi zada/aulad syed abdul aziz khan bin syed bulaqi` | 319 | 2 | DONE |
| 52 | `chakli/aulad syed babar ali bin syed baqir ali jafri` | 321 | 3 | DONE |
| 53 | `darbar kalan/aulad syed khwaja wali jafri bin syed ahmad ali jafri` | 324 | 3 | DONE |
| 54 | `danishmandan/aulad syed ahmad shah bin syed muhammad yar` | 327 | 2 | DONE |
| 55 | `kankoi/aulad syed muhammad ashraf dehlvi` | 329 | 5 | DONE |
| 56 | `kali pagri/aulad syed abdullah sherazi bin syed muhammad` | 334 | 1 | DONE |
| 57 | `darbar kalan/aulad syed saifullah bin syed abu muhammad` | 335 | 2 | DONE |
| 58 | `darbar kalan/aulad syed rustam ali bin syed basharat ali` | 337 | 1 | DONE |
| 59 | `shahi chabutra/aulad syed jalaluddin surkh bukhari` | 338 | 1 | DONE |
| 60 | `bara poti/aulad syed mehdi hasan bin mubarak hasan` | 339 | 1 | DONE |
| 61 | `usmanpur/aulad syed hasan bin syed aal e muhammad` | 340 | 8 | DONE |

Khandan 4 (Sambhal, page 23) and 40 (Saddo, page 229) have no photos.

**Page numbers: check ۶ against ۷ before you trust the index.** In this book's hand ۶ and ۷ look alike
(۶ has a flat top, ۷ is the narrower `<` shape), and the index was transcribed with two of them swapped.
Verified from the photos' own page numbers and headings: khandan 11 runs **59–71**, khandan 12 **72–78**
(not 62–68) and khandan 13 is page **79** alone (not 69); khandan 14 starts on 80, which pins it. The
index entries for 12 and 13 in `web/src/data/amrohaIndex.ts` and `studio/schemaTypes/amrohaIndex.ts`
have been corrected, and `k12-sathi.ts` re-imported with the right pages. If a khandan's photo count
does not fit the gap to the next khandan's start page, suspect this.

Khandan 11 is finished and imported: `k11-darbar-kalan.ts` now covers all 13 photos, book pages 59–71
(310 families, 1281 people). Pages 66–71 were added in one pass and carry most of the file's 134
`VERIFY` marks; the lower halves of pages 69 and 71 are stacks of boxes whose bars run together, so the
names are sure but several father-to-child joins want checking. Page 66's first tree
(سید ابن محمد بن سید محمد) is carried as a second `BookTree` with `father: 'محمد'`, because that سید محمد
is not drawn on any page transcribed so far.

Khandan 29 is finished and imported: `k29-bagla.ts` covers all nine photos, book pages 152–160
(237 families, 863 people). Its page numbers were checked against the photos and agree with the index.
Three parentages came from a later page's heading rather than from the drawing, and the headings were
followed: سید نبی بخش ملسفی is رسول بخش's son (page 153), سید نذر حسین is یاد علی's son (page 157),
and the "صفحہ ۱۵۵" mark on page 152 belongs to سید علی داد, not شاہ محمد. Pages 156–160 are stacks of
boxes whose bars run together and carry most of the file's 118 `VERIFY` marks.

Khandan 46 is complete: `k46-bakhshi.ts` holds all nine photos = book pages 287–295 (272 families,
852 people, imported; 54/19/29/31/21/32/32/41/13 records per page). Page numbers check out against
the photos, with khandan 45 starting on 283 and khandan 47 on 296. Four of the nine pages carry more
than one chart:
  page 291  three charts, all "صفحہ ۲۹۰": سید نذیر احمد، سید معصوم احمد، سید مقبول احمد، each
            بن سید آل محمد. Those headings are what fixed the three "صفحہ ۲۹۱" leaves on page 290 to
            سید آل محمد rather than to سید علی رضا بن سید حسنین احمد, whose column they sit under.
  page 293  سید محمد بخش بن سید علی احمد (from 292) and سید بشیر حسن بن سید علی حسن (from 287)
  page 294  سید بہادر علی بن سید رستم علی (from 287) and سید خواجہ احمد عرف کمالے بن سید خواجہ
            میراں بزرگ (from 287) — that second heading is what page 287's "احمد بابے" really says
  page 295  سید مہدی حسن بن سید علی حسن (from 294)، سید سعید حسن بن سید حسین بخش (from 294)، and
            سید ماہر حسن / سید ذاکر حسن، both بن سید مظاہر حسن, drawn on the same page
Page 292's heading calls سید علی محمد a son of سید ابو محمد while page 287 draws him under ابو محمد's
son محمد درویش; the drawing was kept (it gives the whole chain) and the conflict is noted in the file.

The one drawing convention that matters on these pages: a long sibling list is drawn as a bracket
whose bar wraps — it runs along one row, turns down at an end and carries on as a second (sometimes
third) bar below. Both rows are one sibling list, top row first. It occurs on 289, 290, 292, 293, 294
and 295 and every instance carries a VERIFY. Pages 290 and 293 are the softest photos (290 is only
944×1401) and carry most of the khandan's uncertain readings.

**Mohalla:** every page of this khandan is headed محلہ نخشبی, but the index listed it as محلہ بخشی
under the stored value 'Bakhshi'. The Urdu and English labels in both `amrohaIndex.ts` copies have
been corrected to نخشبی / Nakhshbi; the stored `value` is left as 'Bakhshi' so existing records keep
matching, and `k46-bakhshi.ts` uses that value.

These pages are the densest in the book — page 287 alone is a ten-generation chart of single sons
with almost no daughters.

Khandan 39 is finished and imported: `k39-pachdara.ts` covers book pages 224–227 (126 families,
400 people; 43/23/26/34 records per page). Only four of the seven photos are khandan 39:
  page1 = book 224, page2 = a printed تتمہ slip for صفحہ ۲۲۴, page3 = 225, page4 = 226, page5 = 227.
  **page6 and page7 are not khandan 39** — they are محلہ سدّو, book pages 234 and 235, i.e. khandan
  40, which this table says has no photos at all. They are still untranscribed; see below.
Page 228 is missing, so the "صفحہ ۲۲۸" families are stubs, as are the "صفحہ ۲۲۹" ones (khandan 40).
Page 227 carries a second family of the mohalla (سید خواجہ نذیر عرف اخوان میر بن سید ابوبکر بدرالدین,
headed "صفحہ ۲۰۶") plus four sub-charts marked "صفحہ ہذا"; سید محمد حسین بن سید محمد محسن is folded
back in where the drawing shows the join, and سید نسیم اختر and سید حسنین اختر are carried as their
own `BookTree`s because their fathers are not drawn in these photos.
These pages are drawn differently from the rest of the book: each generation sits inside a box whose
bottom edge doubles as the next children-bar, and long sibling lists wrap onto a second bar below the
box. The names are legible; the joins are not, and the file's 66 `VERIFY` marks are nearly all joins
rather than readings. Pages 226 and 227 carry most of them — 227 is the smallest photo in the book
(889×1183) — so both want a pass against the physical book before the tree is trusted below the
third generation.

Khandan 40 (محلہ سدّو, page 229) is listed above as having no photos, but **two of its pages are in
khandan 39's folder**: `pachdara/aulad syed muhammad bin syed ali mutawalliyan/page6.jpeg` = book 234
and `page7.jpeg` = book 235. Page 234 holds four charts (سید آل حسین بن سید آل حسن، سید اعظم حسین بن
سید خادم حسین، سید فضل حسین بن سید احمد حسین، سید غلام سبطین بن سید اکبر حسین, all headed "صفحہ ۲۳۳")
and page 235 one (سید سبط محمد بن سید غلام سبطین, "صفحہ ۲۳۴"). Pages 229–233 are still missing, so a
`k40-saddo.ts` would be five trees each carrying a `father` and nothing linking them to the khandan's
root — worth doing, but as its own task.

Khandan 61 is finished and imported: `k61-usmanpur.ts` covers book pages 340–346 (274 families,
851 people; 89/40/26/23/40/28/28 records per page). It was transcribed by a **fan-out of eight agents,
one per photo**, and an assembler that merged the fragments — about ten minutes of wall clock against
the day a comparable khandan takes by hand. Three things that run was weak on, and that a human should
look at:
  - **Two photos carry the same family.** page7's third chart and page8 both draw ایزد بخش on book
    page 346 — page8 is a printed تتمہ, page7 a rough hand — and they disagree (page7 gives صابر حسین
    nine children and ضامن حسین two; page8 gives six and three). Only page8 is imported, as its own
    tree with `father: 'عبد المجید ثانی'`, because the book prints no link from this family to the
    rest. page7's reading is in the file header's note and nobody has reconciled the two.
  - **Four headings were overruled by the drawing**, which is the opposite of the rule khandans 29 and
    46 settled on. کبیر علی, عظیم علی, سبط حسن and کلو each hang under one father on page 340 but their
    own chart on 341/342 names a different one; the assembler wired by leaf position. Worth re-reading.
  - **150 VERIFY marks** in 274 families, a higher density than a hand pass produces, because eight
    readers shared no context.
The assembler also wired every continuation by substituting the chart's const for the "صفحہ N" leaf but
dropped the `onPage()` wrapper, so all 258 records below the root imported with page 340 on them. That
was repaired before the final import. **If you fan out again, check the page spread in Sanity after
importing** — a continuation that is not wrapped in `onPage()` is invisible in the data but wrong.

Khandans 24, 28, 38 and 48 were done in one 45-agent fan-out (one agent per photo, one assembler each),
about 19 minutes for 41 photos, and all four imported clean — every book page in each span present, no
dangling parent links:
  k48 `k48-jarodi.ts`   pages 302–310, 307 families / 985 people, 201 VERIFY
  k28 `k28-chhewra.ts`  pages 143–151, 274 families / 995 people, 223 VERIFY
  k24 `k24-guzri.ts`    pages 105–113, 280 families / 989 people, 225 VERIFY
  k38 `k38-lakra.ts`    pages 213–223, 349 families / 1270 people, ~200 VERIFY
Both k61 failure modes were briefed out and did not recur: crops were namespaced per page, and every
chart root came back wrapped in `onPage()`. The assemblers also applied the headings-beat-drawings rule
and listed each conflict in their file headers — read those blocks, they are the real handover. Known
loose ends in them: k28 has three stubs with no chart in the photos (سرور عباس، باقر عباس، بناز الحسن)
and a تتمہ slip on p.147 that replaced two entries; k24 had two duplicate photo pairs (106 and 108) that
disagree in places; k48's p.305 prints its heading twice over two bars and was split into two charts.

Khandans 23, 26, 27 and 37 were done in a second 56-agent fan-out (52 photos) and imported clean —
every page of each span present except one with no photo, and no dangling parent links:
  k23 `k23-guzri.ts`        pages 95–104,  295 families / 1148 people, 229 VERIFY, 3 trees
  k27 `k27-majhpota.ts`     pages 131–142, 387 families / 1422 people, 276 VERIFY
  k26 `k26-shafat-pota.ts`  pages 117–130, 383 families / 1428 people, 318 VERIFY — **page 129 has no
      photo**, so four childless stubs (آل احمد، اعجاز حسین، محمد، احمد) hang off page 128
  k37 `k37-haqqani.ts`      pages 199–212, 433 families / 1485 people, 288 VERIFY, 5 trees
Read each file's "FOR A HUMAN TO CHECK" block — that is the real handover. Notable: **the page-to-photo
mapping in the brief was wrong for most of khandan 27's photos**, and the assembler correctly used the
printed page numbers instead; if you fan out again, treat a scouted page number as a hint, not a fact.
k37's root chain carries stubs pointing into other khandans' ranges (213, 224, 227, 239, 242), which is
the book's own cross-referencing, not an error.

Khandans 36, 43 and 44 were done in a final 65-agent fan-out (62 photos) and imported clean — every
book page in each span present, no dangling parent links:
  k36 `k36-qazi-zada.ts`     pages 179–198, 667 families / 2299 people, 465 VERIFY, 4 trees
  k43 `k43-aghwanpur.ts`     pages 242–257, 667 families / 2131 people, 340 VERIFY, 5 trees
  k44 `k44-danishmandan.ts`  pages 258–282, 664 families / 2662 people, 587 VERIFY, 1 tree
That run was interrupted twice by the account usage limit (the agents die with "You've hit your session
limit"); resuming from the run ID replays finished agents from cache, so only the dead ones re-ran.
Things a human should look at, all recorded in the file headers:
  - k36 pages 184/191/186: the assembler found a daughter with a pen-X arrow carrying a whole child bar,
    and moved it to the right father — a daughter's children are silently dropped by `flatten()`, so any
    chart hung under a daughter is LOST on import. Three k36 charts headed صفحہ ۲۲ have their fathers on
    page 22, outside these photos, and should be linked to the earlier khandan that holds it.
  - k43's شفاعت حسین tree hangs from a box round his mother (a daughter), so he is placed as his own tree
    with father ظہیر حسن; k43 p253's نجف علی identification is weak.
  - k44 p269/270: محمد یوسف was drawn under متحسن علی but headed بن محسن علی; the heading was followed and
    the header block (A.9) says how to revert.
  - Across all three, the order inside wrapped sibling bars is a guess, and 1,392 VERIFY marks remain.

Khandan 40 `k40-saddo.ts` was done last from the two stray photos in khandan 39's folder (book pages 234
and 235; 34 families / 154 people, 4 trees). Pages 229–233 are missing, so its four page-234 charts
(آل حسین، اعظم حسین، فضل حسین، غلام سبطین) carry fathers drawn nowhere and are separate trees; page 235
is spliced into the غلام سبطین chart. Its one real judgement call: on page 235 the lower bar's five
daughters hang from حسن محمد's arrow and the upper bar has no father arrow, so all ten were read as
حسن محمد's children — the alternative is that the upper five are جہانزیب احمد's. Marked VERIFY.

The book is now fully transcribed apart from khandan 4 (no photos).

## After transcription
- **The public form now searches the ledger.** Typing a name in the form's name or father box searches
  every man in Sanity (family heads and the sons they list) via `/api/lineage/search`; picking one fills
  the form from `/api/lineage/person`. On submit the pick becomes a tree link: a man picked from a son
  slot gets `parentRecord`; a man who already has a record gets `updatesRecord`, and in the tree his
  submission **replaces** that record (delete the submission to undo); a father who is only a listed son
  gets `fatherInRecord`. `web/scripts/check-tree-links.ts` tests all three. The search is debounced
  (300 ms) and cached in the browser, and the server throttles each address to 90 calls a minute.
- **English keyboards work.** Most people type "Ali Muhammad", not علی محمد. `web/src/lib/roman.ts` reduces
  both scripts to one consonant skeleton (Muhammad, Mohammed and محمد are all `mhmd`), so the name search
  matches across scripts and breaks ties by the long vowels Urdu writes (Zaheer → ظہیر, not ظاہر). Under
  every name box, `UrduHint` offers the Urdu spelling **the ledger itself uses** for each word (Usman →
  عثمان with ث), picked from the ledger's 34,000 names by sound and frequency, with a one-click "Use Urdu".
  A name newer than the book (Ayaan) gets a letter-by-letter spelling, marked for the person to check.
  `web/scripts/check-roman.ts` tests the matching.
- Spot-check a tree in `/admin`, then fix the `VERIFY` marks against the book.
- Other open items: the Studio needs `sanity deploy`; `ADMIN_PIN` must be set on Vercel; the public form's `data/submissions.json`
  write fails on Vercel (the filesystem is read-only there).

## Edit / delete records, Urdu on submit, deploying (2026-10-31)

- **Edit and delete**: sign in at `/admin` (PIN from `ADMIN_PIN`), then `/records` shows Edit and Delete on each community record. Edit opens the main form at `/?edit=<id>` and saves with `PATCH /api/admin/records/<id>`; son photos, payment slips and tree links are kept unless changed. Records from the 1999 book are refused (403): fix those in `web/scripts/kausar-ul-ansab/*.ts` and re-import.
- **English names become Urdu on submit**: the first Submit turns every name with English letters into the book's Urdu spelling and stops so the family can check it ("Keep English instead" undoes it). The typed English is stored in `submissionMeta.originalSpellings` for the editors; words not found in the book are flagged as guessed.
- **Free option**: "Lineage Only / Free" hides the bank details, slip upload and transaction ID.
- **Public `/api/records`** never returns phone, address or payment details.
- **Vercel**: set Root Directory to `web`. Environment variables: `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `NEXT_PUBLIC_SANITY_API_VERSION`, `SANITY_API_WRITE_TOKEN`, `ADMIN_PIN` (values are in `web/.env.local`). The local backup `web/data/submissions.json` is only written when running on a computer; on Vercel, Sanity is the only store.
- `web/scripts/tools/crops` (1.1 GB of page crops used for transcription) is not in the deploy zip.

## Whole-book download (2026-10-31)

- `/admin` → **Whole book** (`web/src/components/BookPrintPanel.tsx`) prints every khandan as one book: cover, contents (khandan → page), then each khandan from a new page in index order, cut into sections with "صفحہ N" cross-references. Records without a khandan go last as "دیگر خاندان". "Save as PDF" in the print window is the download. Admin-only, since the book is sold.
- Loads every record through `GET /api/admin/records?all=1`.
- Page counts for 57 khandans / 34,114 people: A4 medium 1,780 · A4 small 1,176 · A3 medium 960 · A3 small 656. Most pages are part-empty because sections are only stacked top to bottom; packing them side by side would cut this a lot.
- The single-khandan Print now only offers Book style (the one-page and poster layouts were removed).

## Book records moved out of Sanity into JSON (2026-10-31)

Sanity's free plan holds 10,000 documents and the book alone was 9,361 of them. The book never changes on the website, so it now ships with the site:

- `web/scripts/import-kausar-ul-ansab.ts` writes `web/src/data/kausar-ul-ansab.json` (9,361 records, 5.8 MB, one record per line). To correct the book: edit `web/scripts/kausar-ul-ansab/*.ts`, run `npx tsx scripts/import-kausar-ul-ansab.ts`, redeploy. `--dry-run` only checks.
- `web/src/lib/bookRecords.ts` loads the JSON — server code only, never import it into a client component.
- Sanity holds only community submissions; every Sanity query filters `source != "kausar-ul-ansab-1999"`. The ledger search, person lookup, admin trees and whole-book print merge the JSON with Sanity.
- Edit and delete work for submissions; book IDs (`kaa1999-…`) are refused with 403. The admin side panel no longer offers "Open in Sanity Studio" for book people.
- Submissions link to book people by the same `kaa1999-…` IDs (weak references), so the IDs must never change.
- The ledger index refreshes every minute and straight after a save on the same server (state on `globalThis`, shared by all API routes).
- The JSON matched Sanity record for record before the switch (one son's note in khandan 8 was newer in the JSON).
- Done 2026-10-31: all 9,361 book records deleted from Sanity with `npx tsx --env-file=.env.local scripts/import-kausar-ul-ansab.ts --delete`; Sanity went from 9,374 documents to 13 (system documents only). The delete matches IDs by prefix in code, because GROQ `path()` does not match these dashed IDs.

## Photo gallery (2026-10-31)

- `/admin/gallery` (button "Gallery" in the admin header, PIN required) shows every photo families uploaded — the family head's own and his sons' — grouped by mohalla, in the index's mohalla order. Each photo shows the name, "بن father", (مرحوم) and the khandan.
- Filter by mohalla; **Print** prints the mohalla shown (or all of them, each starting on a new A4 portrait page, 4 photos per row), after every photo has loaded.
- Data: `GET /api/admin/gallery` (admin only), type in `web/src/lib/galleryTypes.ts`.
- Photos are no longer drawn in the family tree (names only); the admin side panel still shows a selected person's photo.
- Deleting a record leaves its uploaded photos in Sanity; they still count toward the free plan.

## Prices and payments (2026-10-31)

- Book prices: Rs. 6,000 (book) and Rs. 8,000 (book + colour photo; the photo is +Rs. 2,000). Stored values stay `standard_5000` / `with_photo_7000` / `submission_only`; prices and labels live in `web/src/lib/booking.ts`.
- `/admin/payments` (admin header → Payments): every submission with booking, amount, transaction ID, deposit slip (photo, or PDF link), phone and date. Totals for paid and not-yet-checked amounts. Filters: Not checked / Paid / Free / All, plus search by name, phone or transaction ID.
- The website cannot see the bank account: the admin checks the slip or transaction ID against Bank AL Habib, then presses **Mark paid** (sets `advanceBooking.paymentStatus = verified` and `verifiedAt`), later **Book sent** (`dispatched`), or **Mark not paid** to undo.
- New submissions start as `pending`, or `na` for the free option (whose slip is ignored). API: `GET /api/admin/payments`, `PATCH /api/admin/payments/<id>` with `{status}`.
- Slips sent as PDF are stored as a file (`advanceBooking.paymentSlipFile`); before, a PDF slip made the whole submission fail.

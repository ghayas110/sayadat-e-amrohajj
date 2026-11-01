// Kausar-ul-Ansab (1999), pages 242-257: محلہ اغوان پور
// Khandan 43 in the book's index (the last of the book's khandans): اولاد سید جان بن سید وجیہ الدین
//
// One photo per book page, 16 photos, pages 242-257 with no gaps and no duplicate shots. Every page
// header numeral was read clearly (page 254 slightly less sure, "fairly high"). Charts and headings
// verbatim, in book order:
//
//   242  1. صفحہ ۲۰۶ سید جان بن سید وجیہ الدین                          (root of the khandan; takes its page from trees)
//   243  1. صفحہ ۲۴۲ سید بلال حسین بن سید حامد حسین
//        2. صفحہ ۲۴۲ سید خالد حسین بن سید حامد حسین
//        3. صفحہ ہذا سید محمد نقی بن عنایت اللہ
//        4. صفحہ ۲۲ سید نعیم الدین بن سید تاج الدین عرف سید محمد
//   244  1. صفحہ ۲۴۳ سید محب علی بن سید مدد علی
//        2. صفحہ ۲۴۳ سید یاد علی بن سید قائم علی
//   245  1. صفحہ ۲۴۳ سید طالب حسین بن سید نذیر علی
//        2. صفحہ ۲۴۳ سید حامد بن سید حسن گھی بھود
//        3. صفحہ ہذا سید ناصر علی بن سید محمد
//   246  1. صفحہ ۲۴۵ سید نجابت علی بن سید شہامت علی
//        2. صفحہ ۲۴۵ سید سعادت علی بن سید نادر علی
//   247  1. صفحہ ۲۴۵ سید عزیز الدین بن سید اظہر الدین
//        2. صفحہ ہذا سید کریم الدین بن سید عزیز الدین
//   248  1. صفحہ ۲۴۵ سید غلام علی بن سید فیض علی
//        2. صفحہ ہذا ظہور الحسنین بن سید شرافت حسین
//        3. صفحہ ہذا سید فصاحت حسین بن سید لطافت حسین
//   249  1. محلہ ۲۲ سید عمر زندہ پیر بن سید خادم عرف طلبہ
//        2. صفحہ ہذا سید مرتضیٰ حسین بن سید مدد علی
//   250  1. صفحہ ۲۴۹ سید ارتضیٰ حسن بن سید مرتضیٰ حسین
//        2. صفحہ ۲۴۹ سید غلام علی بن سید فیض اللہ
//   251  1. صفحہ ۲۵۰ سید ذوالفقار حسین بن سید امیر حسین
//        2. صفحہ ۲۵۰ سید مقبول حسین بن سید امیر حسین
//        3. صفحہ ۲۵۰ سید نوازش علی بن سید رحمت علی
//        4. صفحہ ۲۵۰ سید برخوردار علی بن سید مردان علی
//        5. صفحہ ۲۲ قاضی سید مختار بن قاضی خادم عرف ظہیر
//   252  1. صفحہ ۲۴۹ سید غلام نبی بن سید فیض اللہ
//        2. صفحہ ہذا سید عاشق حسین بن سید مدد علی
//   253  1. صفحہ ۲۵۲ سید ظفر حسن بن سید عاشق حسین
//        2. صفحہ ۲۵۲ سید فاروق حسین بن سید عاشق حسین
//        3. صفحہ ۲۵۲ سید عتیق حسن بن سید عاشق حسین
//        4. صفحہ ۲۵۲ سید نجف علی بن سید نجابت علی            (the first reading, بخت علی, is wrong; see below)
//   254  1. صفحہ ۲۵۲ سید کفایت علی بن سید نذر علی               (the first reading, عنایت علی, is wrong; see below)
//        2. صفحہ ۲۵۲ سید خورشید علی بن سید نادر علی
//        3. صفحہ ۲۵۲ سید اصغر علی بن سید محبوب علی
//   255  1. صفحہ ۲۵۴ سید محمد حسن بن سید اعجاز حسین             (the first reading of the father, عماد حسین, is wrong; see below)
//        2. صفحہ ۲۵۴ سید شمشاد حسین بن سید اصغر علی
//        3. صفحہ ۲۴۹ سید اولاد علی بن سید یاد علی
//   256  1. صفحہ ۲۵۵ سید فیاض علی بن سید امداد علی
//        2. صفحہ ۲۵۵ سید عظیم علی                                (no father in the heading)
//        3. صفحہ ۲۴۹ سید ہدایت علی بن سید حیدر علی
//   257  1. صفحہ ۲۵۶ سید صفدر حسین بن سید محب علی
//        2. صفحہ ہذا سید جمیل حسین بن سید رشید حسین
//        3. صفحہ ۲۴۹ سید رجب علی بن سید ہدایت علی
//
// Every continuation is wired: where a page draws a stub and the next chart is rooted at the same man,
// the stub is replaced by that chart's root const, and every chart root is wrapped in
// onPage(<its own book page>, ...) so the pages below it import correctly. No onPage stub is left.
// The consts run deepest continuation first (page 257 at the top) so each is defined before it is used.
//
// ── FOR A HUMAN TO CHECK ──────────────────────────────────────────────────────────────────────
//
// Pages with no photo: none. Duplicate shots: none (16 photos for 16 pages).
//
// Headings against drawings. Three conflicts were misreadings by the page readers and were settled by
// opening the photos; the data follows the printed text:
//  1. Page 243 draws رستم علی > رمضان علی > قاسم علی > باد علی (stub "صفحہ ۲۴۴"). Page 244's chart is headed
//     "یاد علی بن قائم علی". The photos read قائم علی on both pages and یاد علی; the data says قائم علی and
//     the stub is replaced by the page-244 chart (yaadAli244).
//  2. Page 255 chart 1 was first read "محمد حسن بن عماد حسین". The photo heading reads اعجاز حسین, which
//     matches page 254 where محمد حسن (stub "صفحہ ۲۵۵") hangs under اعجاز حسین. Wired there.
//  3. Page 254 chart 1 was first read "عنایت علی بن نذر علی". The photo heading reads کفایت علی, matching the
//     "کفایت علی صفحہ ۲۵۴" stub under نذر علی on page 252. The root is کفایت علی.
//
// Further wirings that rest on the photos but are less certain:
//  4. Page 253 chart 4 was read "بخت علی بن نجابت علی". Page 252 has only one stub left over for page 253 or 254,
//     under نجات علی, first read "جعفر علی" with marker ۲۵۴. On the photo the marker is ۲۵۳ and the name reads
//     like نجف علی; chart 4's heading reads the same. The two are treated as one man, named نجف علی (VERIFY the
//     spelling), and the father is kept as drawn, نجات علی, though the heading prints نجابت علی (VERIFY).
//  5. Page 253's three charts were stubbed on page 252 as ظہیر حسن, فاروق حسن and عتیق حسن. The charts are headed
//     ظفر حسن, فاروق حسین and عتیق حسن, all "بن عاشق حسین". The chart names are used (VERIFY ظفر / ظہیر,
//     فاروق حسن / حسین).
//  6. Page 249 draws ہدایت علی under حیدر علی with marker "صفحہ ۲۵۴". Page 254 has no such chart; the chart
//     "ہدایت علی بن حیدر علی" is on page 256 (headed ۲۴۹). It is wired there, so the marker was probably a
//     misread ۲۵۶. A different ہدایت علی, son of غلام علی, carries the stub for رجب علی (page 257).
//  7. Page 252's chart 1 draws عاشق حسین under مدد علی as a stub; the full chart is chart 2 of the same page.
//     Page 245's ناصر علی, 247's کریم الدین, 243's محمد نقی and 249's مرتضیٰ حسین are the same pattern.
//
// Charts whose father is drawn nowhere in these photos (their own trees, with a father field):
//  - جان بن وجیہ الدین (page 242, headed صفحہ ۲۰۶; the numeral could be read ۲۰۹)
//  - نعیم الدین بن تاج الدین عرف سید محمد (page 243, headed صفحہ ۲۲: the number is probably truncated)
//  - عمر زندہ پیر بن خادم عرف طلبہ (page 249, headed "محلہ ۲۲", no صفحہ printed)
//  - قاضی سید مختار بن قاضی خادم عرف ظہیر (page 251, headed صفحہ ۲۲ with a tick: probably truncated)
//  - شفاعت حسین (page 246): drawn under a box round his mother زاہدہ خاتون, a daughter of ولی حسین, and a
//    daughter cannot carry children in this format. He is placed as his own tree with the father
//    given as her husband ظہیر حسن. VERIFY the parentage and the husband's name (ظہیر / ظہر).
//
// Other doubtful points:
//  - Page 243: the eldest son of بلال حسین carries the root's own name (the photo may read ہلال حسین).
//    Two "عرف" notes (الوالحسن, قطب) sit between two siblings and may belong to the neighbour.
//    Chart 4's heading father reads "حسن گھی بھود" on page 245 and "حسن گنی بہوڑ" on page 243.
//  - Page 244: page curvature defeated the line detector, so joins were read by eye. حشمت علی's bar wraps at both
//    ends; ضمانت علی's seven children may be grandchildren of مشکور علی instead (the alternative is in the file);
//    حمید حسن's ten children are on a bar that snakes round a box (the order may start from the bottom row).
//  - Page 246: two sons named محمود علی sit on منظور علی's bar.
//  - Page 247: the father of عدنان, شان, ارجمند and بدر is assigned to معراج الحسن (a pen X sits under امینہ خاتون).
//  - Page 248: a thumb over the left edge hides no chart text. The bars of منظور سبطین and منظر عباس look joined
//    but a close crop shows a gap, so they are two families.
//  - Page 250: the "صفحہ ۲۵۱" marker beside برخوردار علی may belong to his brother متفرد علی.
//  - Page 251: a name cut at the page edge (الفت علی). The line from شمرات علی loops left to a bar holding یوسف,
//    رحیم, حسن and امیر علی: they are his sons, not another generation.
//  - Page 252: the order of the sons and daughters under بشارت حسین is a guess (the bar wraps upward).
//  - Page 253: محمد اسلم, خورشید حیدر and توفیق حسین hang from elbows at the left end of a bar and are filed as the
//    youngest sibling; توقیر حسین's five children are read as siblings on three wrapped bars.
//  - Page 254: a thumb over the left edge hides no chart text; the long vertical line at the middle is
//    اظہر علی's connector to a bar drawn far below.
//  - Page 256: لقمان has no visible father line; his six children are attached by position only.
//  - Page 257: جمیل حسین (chart 2) is nested inside رشید حسین's children; the عشرت حسین family has no visible
//    father line and is assigned to him by position.
//  - Wrapped sibling bars throughout (a box edge that turns into a second bar, or a connector out of the left end
//    of a bar) are read as ONE sibling list, top bar first, each bar right to left. The order inside the lower
//    bars is uncertain everywhere; each such list carries a VERIFY.
//  - Names printed without سید are taken as female unless plainly male; husbands without سید are kept plain.
//    Unnamed "دختر" / "دختران" are written as f('دختر') / f('دختران').
//  - Page footnotes on page 245 (فیضان صلوات صفحہ ۲۸ and فیضان سادات صفحہ ۲۸۰) are commentary, not people: the
//    first says the book wrongly prints two sons for عظمت علی بن فیض علی, who had one son, محمد حسین (لاولد); the
//    second says the printed shajra of نجف علی بن شہامت علی was found wrong on research.

import { f, m, onPage, type BookKhandan } from './book'

// ═════════════════════════ book page 257 (photo page16) ═════════════════════════

// Kausar-ul-Ansab (1999), book page 257, mohalla اغوان پور (khandan 43). Photo: page16.straight.jpg
//
// Three charts share this page. Headings, verbatim:
//   1. صفحہ ۲۵۶  سید صفدر حسین بن سید محب علی
//   2. صفحہ ہذا  سید جمیل حسین بن سید رشید حسین
//   3. صفحہ ۲۴۹  سید رجب علی بن سید ہدایت علی
//
// Chart 2 hangs off chart 3: جمیل حسین is a son of رشید حسین, who is drawn in chart 3, and the book marks
// "صفحہ ہذا" under جمیل حسین. So jamilHusain257 is defined first and placed inside رشید حسین's list.
//
// Wrapped sibling lists: where one man's children are drawn on two or three bars joined by a connector line,
// they are listed bar by bar, top bar first, right to left inside each bar. The connectors sometimes run
// out of the left end of a bar into the next one (a snake), so the order inside the lower bars is uncertain.

// ───────────────────────── chart 2: صفحہ ہذا ─────────────────────────

// جمیل حسین بن رشید حسین: eight children on three joined bars (3 + 3 + 2). None of them has children.
const jamilHusain257 = onPage(257, m('جمیل حسین', [
  f('شان زہرا'),
  f('شگفتہ زہرا'),
  f('شبانہ زہرا'),
  f('پروین زہرا'),
  f('تسلیم زہرا'),
  f('ریحانہ خاتون'),
  m('عزادار حسین'),
  m('پرویز حیدر'),
]))

// ───────────────────────── chart 3: صفحہ ۲۴۹ ─────────────────────────

// سید شمیم حسین (son of رشید حسین): five children on two joined bars
const shamimHusain257 = m('شمیم حسین', [
  f('سرتاج زہرا'), // VERIFY: first name (سرتاج / مہتاج)
  f('مہتاب زہرا'),
  f('شیباز زہرا'),
  m('اشفاق حسین'),
  m('علمدار حسین'),
])

// سید معراج الحسن (son of رشید حسین): six children on one bar
const mirajulHasan257 = m('معراج الحسن', [
  m('بنیلو'), // VERIFY: first name is hard to read (بنیلو / ببلو / بنیاد)
  f('حسن زہرا'),
  m('سلمان حیدر'),
  m('منشو'), // VERIFY: منشو
  m('نجم الحسن'),
  m('شباب حیدر'),
])

// سید ظفر حسین (son of رشید حسین): five children drawn as two joined bars
const zafarHusain257 = m('ظفر حسین', [
  f('کہکشاں بانو'),
  f('ریشماں ناز'),
  m('شاہنواز حیدر'),
  f('نازش ناز'),
  f('شان فاطمہ'),
])

// سید خورشید حسین (son of رشید حسین)
const khurshidHusain257 = m('خورشید حسین', [
  m('چاند عباس'),
  m('شان عباس'),
  f('سیما بانو'),
  f('گلزار بانو'),
])

// سید اسرار حسین (son of رشید حسین)
const asrarHusain257 = m('اسرار حسین', [m('عابد حسین'), m('آصف حسین')])

// سید رشید حسین بن سید شبیر حسین. Seven children drawn on two joined bars: شاہدہ خاتون and اسرار حسین on the
// top bar, the other five on the bar below. جمیل حسین is the root of chart 2 ("صفحہ ہذا").
// VERIFY: which bar is read first (top bar / bottom bar), and the order inside the bottom bar
const rashidHusain257 = m('رشید حسین', [
  f('شاہدہ خاتون', 'سید زاہد حسین', 'اغوان پور'),
  asrarHusain257,
  jamilHusain257,
  shamimHusain257,
  mirajulHasan257,
  zafarHusain257,
  khurshidHusain257,
])

// سید شبیر حسین بن سید خادم علی
const shabbirHusain257 = m('شبیر حسین', [
  m('وحید حسین'),
  f('وحید النساء', 'سید آصف علی'),
  rashidHusain257,
])

// سید خادم علی بن سید قمر علی
const khadimAli257 = m('خادم علی', [shabbirHusain257, m('اولاد حسین', 'لاولد')])

// سید قمر علی بن سید صاحب علی
const qamarAli257 = m('قمر علی', [m('ابن علی', 'لاولد'), khadimAli257, m('عابد علی', 'لاولد')])

// سید ولایت علی بن سید صاحب علی
const wilayatAli257 = m('ولایت علی', [
  m('واجد علی', [m('تجمل حسین', 'لاولد'), m('تفضل حسین', 'لاولد')]),
  m('جواد علی', 'لاولد'),
])

// سید نصرت حسین (son of شبیر حسین بن منظر علی): three children
const nusratHusain257 = m('نصرت حسین', [m('شہزاد حسین'), m('خورشید حسین'), m('شمیم حیدر')])

// سید سبط حسین (son of شبیر حسین بن منظر علی): six children on two joined bars (3 females, then 3 males)
const sibtHusain257 = m('سبط حسین', [
  f('رضیہ پروین'),
  f('ثریا پروین'),
  f('ریحانہ پروین'),
  m('قیصر عباس'),
  m('ناصر عباس', [m('قمر عباس'), m('ظہیر عباس'), m('شہزاد علی'), f('زہرا بیگم')]),
  m('منظر عباس'),
])

// سید علی حسین (son of عترت حسین): five children on two joined bars
const aliHusain257 = m('علی حسین', [
  f('محمودی بیگم'), // VERIFY: محمودی / محمولی
  f('شمیم بانو'),
  f('بنو بیگم'),
  m('محمد ذاکر حسین'),
  f('نسیم بانو'),
])

// سید عشرت حسین (son of شبیر حسین بن منظر علی). VERIFY: the book draws no father line for this family; the
// children hang on three joined bars (3 + 3 + 2) directly under his name, so they are taken as his.
const ishratHusain257 = m('عشرت حسین', [
  f('طاہرہ بانو'),
  f('نظیر بیگم'),
  f('بانو بیگم'),
  f('سلمیٰ بیگم'),
  f('ستارہ بیگم'),
  m('منظر علی', [m('منظر عباس')]),
  m('رضوان حسین', [m('مستجاب حیدر')]), // VERIFY: his bar also meets the connector of ناصر عباس's children
  m('حیدر علی', [
    f('پھول عباس'), // VERIFY: printed without سید, so taken as female
    m('محمد مراد علی'),
    f('شنبم بانو'),
    f('نور بانو'),
  ]),
])

// سید عترت حسین (son of شبیر حسین بن منظر علی): two children on a first bar, seven on the long bar below it.
// VERIFY: the lower bar is joined to the first at its left end; the order inside it may run the other way.
const itratHusain257 = m('عترت حسین', [
  f('سبط زہرا'),
  f('خورشید بانو'),
  aliHusain257,
  f('قمر جہاں'),
  f('بنو بیگم'),
  f('ہلال بیگم'),
  m('شاداب حیدر'),
  f('منی بیگم'),
  m('نسیم عباس'),
])

// سید شبیر حسین بن سید منظر علی (a different man from the شبیر حسین above): four sons
const shabbirHusainB257 = m('شبیر حسین', [nusratHusain257, sibtHusain257, ishratHusain257, itratHusain257])

// سید گوہر علی بن سید صاحب علی
const gauharAli257 = m('گوہر علی', [
  m('اظہر علی', [m('نوشاہ علی'), m('محمد شفیع')]),
  m('فیاض حسین', [m('سخاوت حسین'), m('شفاعت حسین')]), // VERIFY: شفاعت / شفاء
  m('منظر علی', [shabbirHusainB257, m('نصیر حسین', 'لاولد')]),
])

// سید صاحب علی بن سید رجب علی
const sahibAli257 = m('صاحب علی', [qamarAli257, wilayatAli257, m('مدد علی'), gauharAli257])

// سید سعادت علی بن سید فیض علی: five children on two joined bars (اکبر علی, محمد علی, نظر علی, then احمد علی, امر علی)
const saadatAli257 = m('سعادت علی', [
  m('اکبر علی', 'لاولد'),
  m('محمد علی', [m('امداد حسین', 'لاولد')]),
  m('نظر علی', [m('وزیر علی', [m('ریاست علی'), m('لیاقت علی')])]),
  m('احمد علی', [
    m('فتح علی', [
      m('اشتیاق حسین', [m('تہور علی')]),
      m('محب علی', [m('اچھے میاں'), m('محبوب علی')]),
      m('شوکت حسین', [m('محفوظ علی'), m('فیمود علی'), m('لیاقت علی')]), // VERIFY: فیمود علی (فہمود / محمود)
      m('شرافت علی', 'لاولد'),
    ]),
  ]),
  m('امر علی', [m('شمشاد علی', [m('تفضل حسین')])]),
])

// سید رجب علی بن سید ہدایت علی, headed "صفحہ ۲۴۹"
const rajabAli257 = onPage(
  257,
  m('رجب علی', [
    m('فیض علی', [saadatAli257, m('اشرف علی')]),
    m('غلام علی', [m('حسین علی', 'لاولد')]),
    sahibAli257,
  ])
)

// ───────────────────────── chart 1: صفحہ ۲۵۶ ─────────────────────────

// سید ضمیر حیدر (son of صفدر حسین): six children
const zamirHaidar257 = m('ضمیر حیدر', [
  m('ریس حیدر', [m('امام حیدر'), m('پیروز حیدر')]), // VERIFY: ریس (رئیس)
  f('شمیم فاطمہ'),
  f('ضمیر فاطمہ', 'سید مظفر عباس', 'گذری'), // VERIFY: mohalla (گذری / گذرکی)
  m('تنویر حیدر', [
    f('نازنین فاطمہ'), // VERIFY: printed ناظین / نازین
    f('نسرین فاطمہ'),
    m('سمیر حیدر'),
    f('ریس فاطمہ'), // VERIFY: ریس (رئیس)
  ]),
  f('تنظیم فاطمہ', 'سید قمر رضا', 'حقانی'),
  f('ریشماں'),
])

// سید سرور حسین (son of صفدر حسین): eight children on two joined bars (3 + 5).
// VERIFY: the 3 + 5 are read as one sibling list on two joined bars (could instead be two generations in a box)
const sarwarHusain257 = m('سرور حسین', [
  f('سلمیٰ'),
  f('تحریر فاطمہ'), // VERIFY: first word (تحریر / نحریر)
  m('جمال حیدر'),
  m('کمال حیدر'),
  f('مرجبین فاطمہ'), // VERIFY: first word
  m('انتخاب حیدر'),
  f('نعمت جہاں', 'سید ریس حیدر', 'اغوان پور'), // VERIFY: husband's name and the mohalla line under it
  f('شاہین فاطمہ'),
])

// سید جمیل حیدر (son of صفدر حسین): five children
const jamilHaidar257 = m('جمیل حیدر', [
  f('شاداب فاطمہ'),
  f('نرگس فاطمہ', 'سید رضا حسین', 'سنبھل'), // VERIFY: this husband line may belong to شاداب فاطمہ
  f('مہتاب فاطمہ', 'سید رضا حسن', 'حقانی'), // VERIFY: husband's name (رضا حسن)
  f('عروج فاطمہ', 'سید انوار حسین', 'جیونس'), // VERIFY: husband's name and mohalla
  m('تصویر حیدر', [m('توصیف حیدر'), m('محمد حیدر')]),
])

// سید صفدر حسین بن سید محب علی, headed "صفحہ ۲۵۶" (drawn on page 256, continued here)
const safdarHusain257 = onPage(
  257,
  m('صفدر حسین', [
    // VERIFY: first name (افر / افسر)
    m('افر حسین', [
      f('مبین فاطمہ'),
      m('محمد انصار'),
      f('حریمین فاطمہ'),
      m('شبیر محمد'),
      f('عظیم فاطمہ'),
    ]),
    zamirHaidar257,
    sarwarHusain257,
    jamilHaidar257,
  ])
)

// ═════════════════════════ book page 256 (photo page15) ═════════════════════════

// Kausar-ul-Ansab (1999), printed page 256 (۲۵۶), محلہ اغوان پور. Khandan 43.
// Three charts on this page:
//   صفحہ ۲۵۵ سید فیاض علی بن سید امداد علی
//   صفحہ ۲۵۵ سید عظیم علی
//   صفحہ ۲۴۹ سید ہدایت علی بن سید حیدر علی
// Where a long sibling list is drawn on wrapped bars, the top row is listed first (right to left), then the
// wrapped row(s); each such list carries a VERIFY.

// ───────────── chart 1: فیاض علی بن امداد علی ─────────────

const luqman256 = m('لقمان', [
  m('راحت حسین', [f('راحت بانو'), m('جاوید حسین')]),
  m('ریاست علی'),
  m('رحمت علی'),
  f('صغدری بانو', 'سید واحد حسین'),
  f('صاحبزادی', 'سید علی اکبر'),
  f('اختری بانو', 'سید نصرت حسین'),
]) // VERIFY: the long bar of six children has no visible father line; it starts directly under لقمان

const fayyazAli256 = onPage(
  256,
  m('فیاض علی', [
    f('بسم اللہ', 'حکمت اللہ'), // a pen cross is drawn above her arrow
    m('محمود علی', [
      m('مسعود علی', [
        f('ثناء'), // VERIFY: printed without سید, so taken as female (ثناء / فرح / خنا could be male names)
        luqman256,
        f('فرح'), // VERIFY: printed without سید
        f('خنا'), // VERIFY: printed without سید; spelling
      ]),
    ]),
    m('احمد حسن'),
  ])
)

// ───────────── chart 2: عظیم علی ─────────────

// صفدر علی's nine children: top bar of three, a second bar (شاہجہاں, سخاوت علی, احمد علی), a third (اعظم علی, بشارت حسین, مبارک علی)
const safdarAli256 = m('صفدر علی', [
  f('شبانہ'),
  f('فرانہ'),
  f('شاہانہ'),
  f('شاہجہاں'), // VERIFY: printed without سید
  m('سخاوت علی'),
  m('احمد علی'),
  m('اعظم علی'),
  m('بشارت حسین'),
  m('مبارک علی', [m('علی شاہ')]),
]) // VERIFY: three wrapped bars; the order within the second and third bars is assumed right to left

const shakirAli256 = m('شاکر علی', [
  f('رضوانہ'),
  m('عشرت علی'),
  f('منورہ خاتون', 'سید تسلیم جاوید', 'اغوان پور'), // VERIFY: husband's name
  f('نوشابہ خاتون', 'سید مسعود حسین جعفری', 'دہلی'),
  f('منظمہ خاتون', 'سید قیوم علی جعفری', 'دہلی'), // VERIFY: منظمہ / معظمہ
  m('غضنفر علی'), // VERIFY: printed عضنفر
  m('معظم علی', [
    f('حرا'),
    m('عظیم علی'),
    f('مہ نظر'), // VERIFY: name reads مہ لنظر / مہ نظر; printed without سید
  ]), // VERIFY: معظم / مغظم
  m('مجاہد علی'),
  f('رضانہ'), // VERIFY: رضانہ (a different name from the first sister رضوانہ?)
  m('عابد علی'),
  f('یاسمین'),
]) // VERIFY: wrapped bar; عابد علی hangs from the bottom edge where شاکر علی's line enters, یاسمین from a hook at the right end; their place in the order is assumed

const asgharAli256 = m('اصغر علی', [
  f('عزیزہ بانو', 'سید ارشاد حسین'),
  f('سیدہ بانو', 'سید منظور علی', 'چک بھیری'),
  shakirAli256,
  safdarAli256,
]) // VERIFY: صفدر علی hangs from a hook at the right end of the bar, after عزیزہ بانو; he could be the eldest

const munawwarHusain256 = m('منور حسین', [
  f('درخشاں کنول'),
  f('عروسہ کنول'),
  f('افشاں کنول'),
  m('بشر حسین'),
  m('منظر حسین'),
  f('عروج کنول'),
  f('رضوانہ کنول'),
  f('کہکشاں کنول'),
  f('شیبا کنول'),
]) // VERIFY: the first three are on a boxed bar; the other six on the wrapped bar below, assumed right to left

const asrarHusain256 = m('اسرار حسین', [
  f('سحر بانو'),
  m('علی'),
  f('ندا بانو'),
  f('رباب بانو'),
])

const akhtarAli256 = m('اختر علی', [
  m('سرور علی', [m('مسعود علی'), f('بشریٰ')]),
  f('نسیم بانو', 'سید جمیل حسن', 'اغوان پور'),
  f('نسرین بانو', 'سید محمود علی', 'مراد آباد'),
  m('محبوب علی'),
  m('ذوالفقار علی'),
  f('شمیم بانو', 'سید انوار الحسن'),
  asrarHusain256,
  f('شاہدہ بانو', 'سید سلیل احمد', 'اغوان پور'), // VERIFY: husband's name (سلیل / جلیل)
  munawwarHusain256,
]) // VERIFY: nine children, six on the top bar and three on the boxed second bar (اسرار حسین, شاہدہ بانو, منور حسین)

const azeemAli256 = onPage(
  256,
  m('عظیم علی', [
    m('عاشق علی', [m('اشتیاق علی', 'لاولد'), m('معشوق علی', 'لاولد')]),
    m('محمد علی', 'لاولد'),
    m('قائم علی', [m('حشمت علی', [akhtarAli256]), asgharAli256]),
  ])
)

// ───────────── chart 3: ہدایت علی بن حیدر علی ─────────────

const wasiHaider256 = m('وصی حیدر', [
  f('نازنین بانو'),
  m('محمد فرمان حیدر'),
  f('سائمین بانو'), // VERIFY: سائمین / سائمہ
])

const shabihHaider256 = m('شبیہ حیدر', [
  f('شان زہرا'),
  m('قیصر عباس'),
  f('زیبا پروین'),
  m('منظر عباس'),
  f('شمع پروین'),
]) // VERIFY: the last two are on a wrapped second bar and the photo edge may cut a name

const wajidAli256 = m('واجد علی', [
  m('وصی حیدر', [m('فیروز حیدر')]), // VERIFY: printed وضی; same name as his brother further left
  f('امینہ خاتون', 'سید شفاعت حسین', 'اغوان پور'),
  m('تقی حیدر', [m('محمد آصف حسین')]),
  f('آمنہ خاتون', 'سید آل علی', 'اغوان پور'),
  wasiHaider256,
  f('شبنم خاتون', 'سید احقن میاں', 'اورنگ آباد'), // VERIFY: husband's name (احسن / احقن)
  shabihHaider256,
])

const muhibAli256 = m('محب علی', [
  f('افتخار بانو', 'سید ماجد حسین'),
  safdarHusain257,
])

const hasan256 = m('حسن', [
  f('گڈو'), // VERIFY: printed without سید, a nickname
  m('محمد حسن'),
  m('حیدر حسن'),
  m('محمد علی'),
  f('سلمیٰ'),
])

const afzalAli256 = m('افضل علی', [
  m('فیض الحسن', 'لاولد'),
  f('زاہدہ خاتون'),
  f('سیدہ خاتون', 'سید چھوٹے میاں', 'اغوان پور'), // VERIFY: husband's name (چھوٹے میاں / جھوٹے میاں)
  hasan256,
]) // VERIFY: the last two are on a wrapped second bar

const wilayatAli256 = m('ولایت علی', [
  m('مختار حسین', [m('مجاور حسین'), m('امانت حسین')]), // VERIFY: مجاور / مجاہد
  m('انتظار حسین', [m('ننھو میاں'), m('مسرت حسین')]), // VERIFY: ننھو میاں
  m('بشارت حسین', [m('مطاہر حسین'), m('منظاہر حسین')]), // VERIFY: both names
  m('دیدار حسین', [m('مخدوم حسین'), m('رحمت حسین')]),
])

const najafAli256 = m('نجف علی', [
  m('منظر علی', [m('امیر حسن', 'لاولد'), m('ابن علی', 'لاولد')]),
  m('عباس علی', [m('بشیر علی')]),
  wilayatAli256,
])

const hidayatAli256 = onPage(
  256,
  m('ہدایت علی', [
    najafAli256,
    m('امان علی', 'لاولد'),
    m('بنیاد علی', [
      m('مدد علی', [m('حشمت علی', [m('شبیر حسین', [m('اشرف علی')])]), m('نوشاہ علی')]),
      m('حیدر علی', [wajidAli256, muhibAli256]),
    ]),
    m('یعقوب علی', 'لاولد'),
    m('نیاز علی', [
      m('محبوب علی', [
        f('کبریٰ خاتون', 'سید حاجی حسین', 'امروہہ'),
        f('مقبول فاطمہ', 'سید شبر حسین', 'اغوان پور'), // VERIFY: husband's name
        f('صغریٰ خاتون', 'سید ریاض حسین', 'اغوان پور'),
      ]),
      afzalAli256,
    ]),
  ])
)

// ═════════════════════════ book page 255 (photo page14) ═════════════════════════

// Printed book page 255 (اغوان پور). Photo: aghwan pur/aulad syed jan bin syed wajihuddin/page14.straight.jpg
// Chart 1 heading: "صفحہ ۲۵۴ سید محمد حسن بن سید اعجاز حسین"   (an earlier reading had عماد; the photo reads اعجاز)
// Chart 2 heading: "صفحہ ۲۵۴ سید شمشاد حسین بن سید اصغر علی"
// Chart 3 heading: "صفحہ ۲۴۹ سید اولاد علی بن سید یاد علی"
// Wrapped sibling bars (box whose bottom edge is a second bar) are read as ONE list, top row right to left, then the lower row right to left.

// ───────── Chart 1: محمد حسن بن عماد حسین ─────────

const muhammadHasan255 = onPage(255, m('محمد حسن', [
  m('محمد کاظم', [
    f('بینش فاطمہ'),
    m('محمد رضا'),
    f('ناوش فاطمہ'), // VERIFY: ناوش / نوش
    f('عنبرین'),
    f('ضیا منظر'), // VERIFY: printed without سید but ضیا منظر reads like a male name
  ]),
  f('رقیہ بیگم', 'سید حیدر رضوی', 'مظفر نگر'), // VERIFY: husband's surname (رضوی / رعنوی)
  m('علی امداد', [
    f('بشریٰ'),
    f('صبیحہ شیرین'), // VERIFY: one name or two (صبینہ / شرین)
    f('سعیدہ عذرا'), // VERIFY: printed سعید عذرا
    f('فرح نورین'),
    m('علی رضا'),
    m('عامر رضا'),
  ]),
  f('مناظرہ خاتون', 'سید نصرت علی رضوی', 'بریلی'), // VERIFY: husband's name
  f('سلمیٰ بیگم', 'سید سعید الحسن', 'مراد آباد'), // VERIFY: husband's name (سعود / سعید الحسن)
  m('علی سجاد', [
    m('حسن مصطفیٰ', [m('فداحسن')]),
    m('اصغر کاظم', [m('کاشف علی'), m('عاطف علی')]),
    m('سجاد مصطفیٰ', [m('نادر مصطفیٰ')]),
    m('اعجاز کاظم', [m('عدیل حیدر'), m('نبیل حیدر')]),
    m('افتخار کاظم', [f('افشاں فاطمہ'), m('جعفر رضا'), f('زرین فاطمہ')]),
  ]),
]))

// ───────── Chart 2: شمشاد حسین بن اصغر علی ─────────

const shamshadHusain255 = onPage(255, m('شمشاد حسین', [
  m('عابد حسین', [
    m('واحد حسین', [
      f('فرزانہ بیگم', 'سید احسن', 'اغوان پور'), // VERIFY: husband's name (احسن / راحت حسن)
      m('علی ظفر', [m('محمد اسد'), m('محمد مصطفیٰ'), m('محمد حسن')]),
      f('عباسی بیگم', 'سید علی سجاد', 'اغوان پور'),
      m('رفیق کاظم', [m('عظیم رضا'), f('مہ جبین فاطمہ'), m('ناظر رضا')]), // VERIFY: ناظر (printed ناخر)
      f('صفیہ بیگم'),
      m('ندیم کاظم'),
      f('سیما بیگم'),
      m('علی شمشاد', 'لاولد'),
      // lower wrapped row (box bottom edge), read right to left
      f('رعنا بیگم', 'سید محمد قاسم', 'اغوان پور'),
      f('رضیہ بیگم', 'سید شاہد رضوی', 'پنجاب'), // VERIFY: husband's name (شاہد / شایدر) and surname
      f('شہناز بیگم', 'سید حسین کاظمی'),
      f('نعیم زہرا', 'سید علی امداد', 'اغوان پور'),
    ]),
    m('علی اکبر', [
      f('نگہت فاطمہ'),
      f('سنجیدہ فاطمہ'),
      m('علی رضا', [
        m('تقی رضا'),
        m('نقی رضا'),
        m('محمد رضا'),
        m('حسن رضا'),
        // lower wrapped row
        m('آصف رضا'),
        f('شازیہ'),
        f('فوریہ'),
      ]),
      f('نسرین فاطمہ'),
      f('نصرت فاطمہ'),
    ]),
    f('انیسہ خاتون', 'سید شفاعت حسین', 'اغوان پور'),
    m('علی مظفر', [
      m('سلیم کاظم', [m('علی نازش'), m('علی نالش'), m('علی دانش')]),
      m('ظہیر کاظم'),
      f('شفیق زہرا'),
      m('شمیم کاظم', [
        m('راجو'),
        m('علی جعفر'),
        f('سیما پروین'),
        f('صبیحہ پروین'),
        m('شباب کاظم'),
        m('شاداب کاظم'),
        m('شہاب کاظم'), // VERIFY: drawn on the wrapped end of the bar
      ]),
      m('نسیم کاظم'),
      f('شریا بانو'),
      m('حسین کاظم', [m('شان عباس')]),
    ]),
  ]),
  f('حمیدہ خاتون', 'سید محمود حسین', 'اغوان پور'),
  m('واجد حسین', [m('زاہد حسین')]),
  m('حامد حسین', [
    m('عزادار حسین', [
      f('ریحانہ فاطمہ', 'سید نذر حیدر', 'پٹنہ'), // VERIFY: husband's name (نذر / بندر)
      f('کوثر فاطمہ', 'سید انصار حسین', 'اغوان پور'),
      // box bottom edge (wrapped row), right to left
      f('غزالہ فاطمہ'),
      f('فرزانہ فاطمہ'),
      f('عرفانہ فاطمہ'),
      m('قمر عباس'),
      m('علی عباس'),
    ]),
    f('حنیفہ بانو', 'سید مشیر حسن', 'اغوان پور'), // VERIFY: husband's name (مشیر / مشبر)
    f('عزیزہ بانو', 'سید حبیب انور', 'پٹنہ'), // VERIFY: husband's name
    m('علمدار حسین', 'لاولد'),
    // lower wrapped row
    f('رفیقہ بانو', 'سید علی اکبر', 'اغوان پور'),
    f('صغیر بانو'),
    f('رشیدہ بانو', 'سید مبارک حسین', 'اغوان پور'), // VERIFY: mohalla line under her husband
  ]),
]))

// ───────── Chart 3: اولاد علی بن یاد علی ─────────


const aulaadAli255 = onPage(255, m('اولاد علی', [
  m('اسد علی', [
    m('عنایت علی', [
      m('امتیاز علی', [m('غنی اصغر'), m('فیاض علی')]),
      m('رحمت علی', 'لاولد'),
    ]),
  ]),
  m('دلاور علی', [
    m('نصیب علی', [m('عوض علی', [m('نقش علی', 'لاولد')])]),
    azeemAli256,
    m('کبیر علی', 'لاولد'),
  ]),
  m('امداد علی', [
    fayyazAli256,
    m('محمد علی', [
      f('فہمیدہ خاتون', 'سید اختر حسین', 'اغوان پور'),
      m('ارشد علی', [
        f('رضوانہ'),
        f('فرزانہ', 'سید ذوالفقار علی', 'اغوان پور'), // VERIFY: husband's name
        // lower wrapped row, right to left
        f('نازیہ'),
        m('عاصم حسین'),
        m('راشد حسین'),
        m('عامر حسین'),
        f('رخسانہ'),
      ]),
    ]),
  ]),
]))

// ═════════════════════════ book page 254 (photo page13) ═════════════════════════

// Kausar-ul-Ansab (1999), printed page 254, mohalla header: اغوان پور (khandan 43)
// Three charts on this page:
//   1. "صفحہ 252 سید عنایت علی بن سید نذر علی"
//   2. "صفحہ 252 سید خورشید علی بن سید نادر علی"
//   3. "صفحہ 252 سید اصغر علی بن سید محبوب علی"
// Sub-families continued on page 255 are marked "صفحہ 255" (شمشاد حسین, محمد حسن).

// ───────────── chart 3 (bottom): اصغر علی بن محبوب علی ─────────────

const asgharAli254 = onPage(254, m('اصغر علی', [
  shamshadHusain255,
  m('سجاد حسین', [
    m('اعجاز حسین', [muhammadHasan255]),
    m('اولاد حسین', [
      f('جعفری', 'سید تبارک حسین', 'اغوانپور'),
      f('باقری', 'سید عسکری'),
    ]),
  ]),
  m('امداد حسین', [f('دختر')]), // VERIFY: the book gives no name, only "دختر"
]))

// ───────────── chart 2 (middle): خورشید علی بن نادر علی ─────────────

// ارشد علی: eight children on one long bar (ثریا فاطمہ rightmost)
const arshadAli254 = m('ارشد علی', [
  f('ثریا فاطمہ', 'علی صدیقی'), // VERIFY: husband printed without سید
  m('مسرت علی', [m('حسن'), f('رومانہ')]), // VERIFY: حسن
  f('سیما', 'جاوید قیوم'), // VERIFY: husband's name (قیوم / قوم), printed without سید
  m('راشد علی'),
  m('آفتاب علی', [
    m('شہریار علی'),
    m('ذیشان علی'), // VERIFY: printed ذلیشان / ذیشان
    m('ٹی ٹو'), // VERIFY: unusual name, reads "ٹی ٹو"
  ]),
  m('اسد علی', 'لاولد'),
  f('کہکشاں'),
  m('اشرف علی', [
    m('حماد علی'),
    m('ہشام علی'),
    m('شہاب علی'),
    f('وجیہہ'),
  ]),
])

// شبیا علی: bar of four, whose ends wrap: right end down to a second row of three
// (رضوان علی, نجمہ بانو, شجاع علی)
const shabbaAli254 = m('شبیا علی', [
  m('شبیر علی', 'لاولد'),
  m('شرف علی', 'لاولد'),
  m('شاہد علی', 'لاولد'),
  f('ناہید اختر', 'سید اشرف علی', 'اغوانپور'),
  m('رضوان علی', [m('جمال علی'), m('نعمان علی'), m('کامران علی')]), // VERIFY: کامران علی is printed without سید
  f('نجمہ بانو'),
  m('شجاع علی', [
    m('وجاہت علی'),
    m('شجاعت علی'),
    m('جمشید علی'),
    m('جنید علی'),
  ]),
])

// اظہر علی: seven children on a long bar drawn well below him
const azharAli254 = m('اظہر علی', [
  m('اقبال نذر'),
  m('اقبال ممتاز'),
  m('اقبال طاہر'),
  m('اقبال بدر'),
  m('اقبال قمر'),
  m('اقبال اظہر'),
  f('بشریٰ', 'جاوید احمد'), // VERIFY: husband printed without سید
])

const khurshidAli254 = onPage(254, m('خورشید علی', [
  arshadAli254,
  f('زاہدہ خاتون', 'سید آل علی زیدی', 'نگینہ'),
  shabbaAli254, // VERIFY: name reads شبدا علی / شبیا علی
  azharAli254,
  m('شوکت علی', [
    m('خرم'),
    f('اطروبہ'),
    f('طوبا'),
    f('گڑیہ'),
    f('افشاں'),
  ]),
  f('شبیہ فاطمہ', 'سید عابد علی', 'اغوانپور'),
  f('طاہرہ خاتون', 'سید عذیر الحسن'), // VERIFY: husband's name (عذیر / عزیر)
  m('مرتضیٰ علی', [
    f('ہما'),
    f('صدف'),
    f('نازش'),
    f('کوثر'),
    f('لالہ رخ', 'سید عشرت علی', 'نگینہ'),
  ]),
  f('صغیر فاطمہ', 'سید حامد علی', 'اغوانپور'),
  m('ارشاد علی', 'لاولد'),
]))

// ───────────── chart 1 (top): عنایت علی بن نذر علی ─────────────

// مشتاق حسین: three daughters on the top bar, whose left end wraps down to a second bar of five
const mushtaqHusain254 = m('مشتاق حسین', [
  f('چندانی', 'سید رفاقت حسین', 'اغوانپور'), // VERIFY: name (چندانی / چنداتی)
  f('کبریٰ خاتون', 'سید زین العباد', 'بجنور'),
  f('کنیز فاطمہ', 'سید شاہنواز رضا', 'سرسی'), // VERIFY: husband's name and mohalla
  m('ظہور الحسن', [
    f('رضانہ بانو'),
    f('شبنم بانو'),
    f('زرین بانو'),
    f('شبانہ بانو'),
    m('دلاور حسین'),
  ]),
  m('پیمبر رضا'), // VERIFY: پیمبر / بیمبر
  m('اختر حسین', [
    m('محمد افسر'),
    f('شاہین اختر'),
    m('محمد اصغر'),
    f('ممتاز فاطمہ'),
  ]),
  f('منظور زہرا', 'سید نگہت امام', 'نہٹور'), // VERIFY: husband's name
  m('منظور الحسن', [m('شاہ رضا')]),
])

// راحت حسین: three on the top bar, whose right end wraps down to a second bar of four
const rahatHusain254 = m('راحت حسین', [
  m('دراست حسین'), // VERIFY: name reads دراست / راست حسین
  f('سکندر بانو', 'سید سرور حسین', 'اغوانپور'),
  m('محمد باقر'),
  m('محمد علی'),
  m('رفاقت حسین', [
    m('محمد اسلم', [m('اعظم')]),
    f('ناہرہ خاتون'),
    m('محمد احسن'),
  ]),
  m('محمد حیدر', [
    f('افسانہ'),
    f('ریشماں'),
    m('محمد جبرار'),
    f('اربعین'),
    m('محمد کرار'),
    f('غنچہ'),
  ]),
  m('محمد جعفر', [
    f('شگفتہ بانو'),
    m('محمد یاور'),
    f('زبیدہ بانو'),
  ]),
])

const ibrarHusain254 = m('ابرار حسین', [ // VERIFY: ابرار / ابراز
  f('انصار زہرا', 'سید فرحت حسین', 'جے پور'),
  f('ممتاز زہرا', 'سید سراہل حسین', 'جے پور'), // VERIFY: husband's name (سراہل / ابرامل)
  f('دلاری بانو', 'سید کبتن', 'جے پور'),
])

const walayatHusain254 = m('ولایت حسین', [
  rahatHusain254,
  ibrarHusain254,
  mushtaqHusain254,
])

const kifayatAli254 = onPage(254, m('کفایت علی', [
  m('علی حسن', 'لاولد'), // VERIFY: علی حسن / علی حسین
  walayatHusain254,
  m('علی حسین', 'لاولد'),
  m('حمایت علی', [m('نذر حسین', 'لاولد')]),
]))

// ═════════════════════════ book page 253 (photo page12) ═════════════════════════

// Kausar-ul-Ansab (1999), printed page 253: اغوان پور (khandan 43)
// Charts on this page, all continued from page 252 (headings verbatim):
//   1. صفحہ 252 سید ظفر حسن بن سید عاشق حسین
//   2. صفحہ 252 سید فاروق حسین بن سید عاشق حسین
//   3. صفحہ 252 سید عتیق حسن بن سید عاشق حسین
//   4. صفحہ 252 سید بخت علی بن سید نجابت علی
// Wrapped sibling bars (box edge / left-end elbow continuing on a second bar) are one sibling list, eldest first.

// ───────────────── chart 1: ظفر حسن بن عاشق حسین ─────────────────
const zafarHasan253 = onPage(253, m('ظفر حسن', [
  f('نجمہ بانو', 'حنفی'), // VERIFY: husband's name (printed حنفی / خفی)
  m('جمیل احمد', [
    f('ناز جمیل', 'منصور احمد'),
    f('لبنیٰ جمیل', 'ارشاد حسین'),
    f('وریبہ'), // VERIFY: spelling (وریبہ / وریہ)
    f('سمیرا'),
  ]),
  f('فخر النساء', 'رشید الدین'),
  f('رابعہ بانو', 'صابر علی'),
  f('طلعت بانو', 'شاہد علی'),
  m('عارف احمد', [m('ارسلان احمد'), m('حمدان احمد'), f('مریم'), f('سعدیہ')]),
]))

// ───────────────── chart 2: فاروق حسین بن عاشق حسین ─────────────────
const farooqHusain253 = onPage(253, m('فاروق حسین', [
  m('عالم فاروق', [
    m('ظہور'),
    m('مصور'), // VERIFY: first letter (مصور / تصور)
    f('تابندگی'), // VERIFY: first letter (تابندگی / نابندگی)
    f('عائشہ'),
  ]),
  f('عصمت بیگم', 'سید ریاض الدین', 'علی گڑھ'),
  f('عفت بیگم', 'زاہد حسین فاروقی', 'انبالہ'), // VERIFY: husband printed without سید
  f('نصرت بیگم', 'سید علی اکرم', 'اغوانپور'),
  // drawn at the far left end of the top bar by an elbow line, so taken as the youngest child of فاروق حسین
  m('محمد اسلم', [f('ماہرہ'), m('سلمان'), f('خدیجہ')]), // VERIFY: محمد اسلم is a child of فاروق حسین (elbow from the bar), not of نصرت بیگم
]))

// ───────────────── chart 3: عتیق حسن بن عاشق حسین ─────────────────
const ateeqHasan253 = onPage(253, m('عتیق حسن', [
  m('علی اکرم', [
    m('سعید'), // VERIFY: سعد / سعید
    m('بلال'),
    m('عارف'),
    f('شمع'),
    m('اسد'),
    f('سعدیہ'),
  ]),
  f('رفعت فاطمہ', 'عبدالقیوم', 'فیروز لودر'), // VERIFY: mohalla line under the husband (فیروز لودر?)
  m('کبیر علی', [m('اویس علی کبیر'), f('نادیہ')]), // VERIFY: اویس علی کبیر may be one name or two; نادیہ (نادبہ)
  m('محمد علی', [m('نجف علی'), f('سائرہ علی')]),
  m('علی محسن', [f('شنا'), m('طہ')]), // VERIFY: شنا spelling (printed شنائ)
  m('علی احسن', [m('فیصل'), f('عائشہ')]),
  f('نگہت فاطمہ', 'ریاض حسین', 'اخترنگر'), // VERIFY: mohalla (اخترنگر?)
  m('علی سعید', [f('کلثوم'), m('ہارون'), f('مریم')]),
]))

// ───────────────── chart 4: بخت علی بن نجابت علی ─────────────────
const najafAli253 = onPage(253, m('نجف علی', [
  m('مشتاق حسین', [
    // اسحاق حسین: five children, the last three on wrapped bars
    m('اسحاق حسین', [
      m('معین احمد'),
      f('روبینہ بانو', 'سید اطہر ضمیر احمد', 'اغوانپور'), // VERIFY: husband's name (اطہر / اظہر ضمیر احمد)
      m('جنید احمد'),
      m('سعید احمد'),
      m('زبیر احمد'),
    ]),
    // اخلاق حسین: nine children, the last seven on a wrapped bar below
    m('اخلاق حسین', [
      m('افروز احمد'),
      f('عصمت زہرا', 'سید محمد خالد', 'اغوانپور'),
      f('عزالہ'),
      f('فرزانہ'),
      f('ریحانہ'),
      m('فردوس احمد'),
      m('ہمایوں اقبال'), // VERIFY: ہمایوں اقبال may be two separate names
      m('اطہر ضمیر احمد'), // VERIFY: may be اطہر + ضمیر احمد (two names)
      m('معظم'),
    ]),
    m('اشفاق حسین', [
      f('زرینہ خاتون', 'سید محمد اسلم', 'ساہیوال'),
      m('محمد خالد', [
        m('رضوان'), // VERIFY: رضوان (small handwriting)
        m('دانش'), // VERIFY: دانش / دانیال
        f('افشاں'),
        m('سلمان'),
        m('شیروان'), // VERIFY: tiny handwriting (شیروان / سیروان)
        m('عمران'),
        f('بنیش'), // VERIFY: بنیش / بنیس
      ]),
      m('شکیل احمد', [
        f('در شہوار'),
        m('لقمان احمد'),
        m('ذلیشان احمد'), // VERIFY: ذلیشان / ذیشان
        f('درنایاب'),
      ]),
      m('محمد فہیم', [f('زرین بانو'), f('فخرین بانو'), f('فہیمہ بانو'), f('فرحین بانو')]),
    ]),
  ]),
  m('محمد حسین', [
    // VERIFY: a small extra word above the name (محمد اسلم حسین?)
    m('محمود حسین', [
      m('ظہور حیدر', [
        m('محمد حیدر', [
          f('روحی ناز'),
          f('حنا ناز'), // VERIFY: first letter (حنا / خنا)
          f('زیبی ناز'),
          m('ذیشان حیدر'), // VERIFY: ذیشان / زیشان (second row of the box)
          m('ذہین حیدر'),
        ]),
      ]),
    ]),
  ]),
  m('راحت حسین', [
    f('خوشنودی بیگم', 'سید نثار حسین', 'اغوانپور'),
    f('زبیدہ بیگم', 'بھولے میاں', 'رامپور'), // VERIFY: husband's name (بھولے / ہولے میاں)
    f('محمودہ بیگم', 'سید توحید حسین', 'اغوانپور'),
    m('محمد احمد', [
      m('دانشی'), // VERIFY: دانش / دانشی
      f('فرح ناز'),
      m('عادل'),
    ]),
  ]),
  m('بشیر حسین', [
    f('رشیدہ بیگم', 'سید امیر حسن', 'کندرکی'), // VERIFY: mohalla (کندرکی)
    m('مہدی حسن', [
      m('احمد حسن'),
      m('محمود حسن'),
      f('حسین بانو', 'سید فدا حسین', 'اغوانپور'),
      m('توحید حسین', [m('شہزاد احمد'), m('فرید احمد')]),
    ]),
    f('بلقیس بانو', 'سید مشہود حسن', 'مراد آباد'),
    m('رشید حسین', [
      m('تنویر حسین', [m('حسین تنویر'), f('فرحت بانو'), m('حسن تنویر'), m('احسن تنویر'), f('عزت بانو')]),
      m('وحید حیدر', [
        m('عزیز احمد'),
        f('تاج بی بی', 'سید شاہد علی', 'مراد آباد'),
        m('حبیب احمد'),
      ]),
      m('سعید حسین', [
        m('نوید عالم'),
        f('ہما ناز'),
        m('خورشید عالم'),
        m('جنید عالم'),
        m('مسعود عالم'),
        f('زیبا ناز'),
      ]),
      // توقیر حسین: five children, drawn on wrapped bars from the elbow at the bar's left end
      m('توقیر حسین', [
        f('معراج النساء', 'سید حسین علی', 'مراد آباد'), // VERIFY: these five may instead be children of معراج النساء (box edge); read as توقیر's wrapped list
        f('سراج النساء'),
        f('منہاج النساء'),
        m('قدیر حسین'),
        m('ضمیر حسین'),
      ]),
      m('توفیق حسین', [
        m('مبشر حسین'),
        f('عالیہ توفیق'),
        m('فراز توفیق'),
        f('سعدیہ توفیق'),
        m('علی زبیر'),
      ]),
    ]),
    f('منی بیگم', 'سید انور حسین', 'اغوانپور'),
    f('چھٹلی بیگم', 'سید مشتاق حسین', 'اغوانپور'),
    m('خورشید حیدر', 'لاولد'), // drawn at the left end of the bar by an elbow line
  ]),
]))

// ═════════════════════════ book page 252 (photo page11) ═════════════════════════

// Kausar-ul-Ansab (1999), printed page 252 (header: اغوان پور), khandan 43.
//
// Chart 1 heading: "صفحہ ۲۴۹ سید غلام نبی بن سید فیض اللہ"  (continued from page 249)
// Chart 2 heading: "صفحہ ہذا سید عاشق حسین بن سید مدد علی"  (drawn at the bottom of this same page; chart 1 carries
//                  a stub for عاشق حسین under مدد علی)
//
// Wrapped sibling bars (a box edge that turns into a second bar) are listed bar by bar, top bar first, right to left.
// Stubs for families the book continues on pages 253 / 254 are childless onPage() entries.

// ───────────────────────── chart 2: bottom of page 252 ─────────────────────────

// Children of سید خلیق حسین (four, one bar)
const khaliqHusain252 = m('خلیق حسین', [
  m('محمد وسیم'),
  m('نجم'), // VERIFY: second name reads like نجم / بحر
  m('سہیل'),
  f('نور جہاں'),
])

// احمد معین: four children on the wrapped bar below his box
const ahmadMoin252 = m('احمد معین', [f('شازیہ'), f('عافیہ'), f('ثناء'), f('ناجیہ')])

// رفیق حسن: احمد نعیم, ریحانہ, احمد معین on one bar
const rafiqHasan252 = m('رفیق حسن', [
  m('احمد نعیم'),
  f('ریحانہ', 'قطب الدین', 'شاملی مظفر نگر'), // VERIFY: husband printed without سید
  ahmadMoin252,
])

// Page 252 bottom: سید عاشق حسین بن سید مدد علی (صفحہ ہذا)
const ashiqHusain252 = onPage(252, m('عاشق حسین', [
  zafarHasan253, // VERIFY: name reads like ظہر حسن / ظہیر حسن; page marker ۲۵۳
  khaliqHusain252,
  farooqHusain253, // VERIFY: first letter ن or ف (فاروق / ناروق); page marker ۲۵۳
  rafiqHasan252,
  ateeqHasan253, // page marker ۲۵۳
  f('احمدی بیگم', 'سید ارشاد حسین', 'رامپور'),
  f('سروری بیگم', 'سید اسرار حسین', 'رامپور'),
]))

// ───────────────────────── chart 1: سید غلام نبی بن سید فیض اللہ ─────────────────────────

// مصدق حسین: seven children on three joined bars (top bar first, each bar right to left)
const musaddiqHusain252 = m('مصدق حسین', [
  // VERIFY: the name above reads like معتدلق / مصدق
  m('سلیم احمد'),
  f('نسیم بانو'),
  m('نعیم احمد'),
  f('شمیم بانو'),
  m('تسلیم جاوید', [
    m('نبیر'), // VERIFY: name reads like نبیر / شبیر and is printed without سید (female?)
    m('فہیم احمد'),
    m('فرحان احمد'),
    m('سلمان احمد'),
  ]),
  m('شفیق احمد'),
  m('شکیل احمد', [m('ضیاء'), m('بابر علی'), m('عدنان')]),
])

// سرور حسین: five children (three on the top bar, two on the wrapped bar)
const sarwarHusain252 = m('سرور حسین', [
  f('سلمیٰ احمد', 'سید شوکت علی', 'مراد آباد'),
  f('نجمہ احمد', 'سید اظہر حسین', 'مراد آباد'), // VERIFY: first name reads نجمہ / نخمہ
  m('مسعود حسین'),
  f('شاہانہ احمد', 'سید شاکر علی', 'مراد آباد'),
  f('ثناء احمد', 'سید عابر علی', 'مراد آباد'), // VERIFY: husband's name reads like عابر / بابر
])

// امداد حسین: two on the top bar, مصدق and سرور on the wrapped bar
const imdadHusain252 = m('امداد حسین', [
  f('امیمہ خاتون'), // VERIFY: first word of the name
  m('عبدالخالق حسین', 'لاولد'), // VERIFY: name reads like عبدالخالق / عبدالحق
  musaddiqHusain252,
  sarwarHusain252,
])

const maddadAli252 = m('مدد علی', [
  imdadHusain252, // VERIFY: name reads like امداد حسین
  ashiqHusain252, // "صفحہ ہذا": his chart is the second heading at the bottom of this page
])

const najatAli252 = m('نجات علی', [
  m('احمد علی', [f('دختر')]), // VERIFY: only "دختر" (a daughter) is printed, no name
  najafAli253, // VERIFY: name reads like جعفر; page marker ۲۵۴ (a word beside it reads like محرم / محلہ)
  maddadAli252,
  m('محمد علی', [m('یاد علی', 'لاولد')]), // VERIFY: یاد / باد
])

const sabitAli252 = m('ثابت علی', [najatAli252])

// آل نبی → ظہور علی → غلام نبی → آل نبی (لاولد); and نذر علی's line
const zuhoorAli252 = m('ظہور علی', [m('غلام نبی', [m('آل نبی', 'لاولد')])]) // VERIFY: ظہور / تھور

// تجمل حسین's wrapped children: تصور حسین on the top bar, then six on the box's lower bar
const tajammulHusain252 = m('تجمل حسین', [
  m('تصور حسین', [f('شمیم زہرا'), f('شان زہرا'), f('تسنیم زہرا')]),
  f('رضوان فاطمہ'),
  f('تنویر فاطمہ'),
  f('خورشید فاطمہ'),
  f('تجدید فاطمہ'),
  f('تصویر فاطمہ'),
  m('زیارت حسین', [f('نایاب فاطمہ')]),
])

const abdulHusain252 = m('عبد الحسین', [
  f('حوربی'),
  f('شہناز فاطمہ'),
  m('رجب حسن'),
  m('حیدر حسن'),
  m('نواب حسن'),
  m('عمران حسن'),
  f('شاہانہ بانو'),
  m('عرفان حسن'),
  m('شباب حسن'),
])

const nazirHusain252 = m('ناظر حسین', [
  f('رفعت جہاں'),
  m('ذاکر حسین'),
  m('جاوید حسین'),
  m('اعجاز حسین'),
  f('نشاط جہاں'),
  m('نام حسین', [f('فرحت زہرا')]),
])

// خورشید حسین: چاندنی بی on the box's top bar, five on the wrapped bar
const khurshidHusain252 = m('خورشید حسین', [
  f('چاندنی بی'),
  f('لاڈلی بی'),
  f('برکت بی'),
  m('نایاب علی'),
  f('منی بی'),
  f('جنی بی'),
])

// بشارت حسین: two daughters on his own bar, two sons on the bar that wraps up and to the left
const basharatHusain252 = m('بشارت حسین', [
  m('شبیہ عباس'), // VERIFY: reads like شبیہ / شمیم / شنہہ عباس
  m('شبیر عباس', [m('دانش رضا')]),
  f('رئیس فاطمہ'),
  f('معراج فاطمہ'), // VERIFY: order of the two sons vs the two daughters (wrapped bar)
])

const tafazzulHusain252 = m('تفضل حسین', [
  f('محمودہ خاتون', 'سید سلطان حسین', 'اغوان پور'),
  f('رئیسہ خاتون', 'سید اشرف علی', 'اغوان پور'),
  abdulHusain252,
  tajammulHusain252,
  nazirHusain252,
  khurshidHusain252,
  basharatHusain252,
])

// ابن حسن's line: مہدی حسن's four children, معراج الحسن's six sons
const mehdiHasan252 = m('مہدی حسن', [
  m('سراج الحسن'),
  f('شان زہرا', 'سید محسن علی', 'اغوان پور'),
  f('ستارہ بانو', 'سید انتظار حسین', 'دہلی'),
  m('معراج الحسن', [
    m('بنی حیدر'),
    m('وصی حیدر'),
    m('رضی حیدر'),
    m('شباب حیدر'),
    m('تقی حیدر'),
    m('نواب حیدر'),
  ]),
])

const ibnHasan252 = m('ابن حسن', [
  f('صغریٰ خاتون', 'سید رشید حسن', 'اغوان پور'),
  mehdiHasan252,
  m('سبط حسن'),
])

const rasheedHasan252 = m('رشید حسن', [
  f('راضیہ خاتون', 'سید تقی حیدر', 'اغوان پور'),
  m('علی مختار', [
    m('منظر عباس'),
    m('محمد عباس'),
    m('علی عباس'),
    m('علی سجاد', 'لاولد'),
    m('تقی عباس'),
  ]),
  m('صغیر احمد', 'لاولد'),
])

const zuhoorAliSon252 = m('ظہور علی', [
  tafazzulHusain252,
  m('انتظار حسین', [
    f('خاتون', 'سید ساجد حسین', 'اغوان پور'), // VERIFY: printed "خاتون مسماۃ"; مسماۃ may be a title, not part of the name
    rasheedHasan252,
  ]),
  m('محمد حسین', 'لاولد'),
])

const farzandAli252 = m('فرزند علی', [
  zuhoorAliSon252,
  m('احمد علی', [m('آل حسن', [m('ابوالحسین')]), ibnHasan252]),
  m('منظور علی', 'لاولد'),
])

const nazarAli252 = m('نذر علی', [
  kifayatAli254, // page marker ۲۵۴
  farzandAli252,
  m('غلام حسین', 'لاولد'),
])

const aleNabi252 = m('آل نبی', [zuhoorAli252, nazarAli252])

// صاحب علی → حیات علی → نادعلی and بنیاد علی (a one-son chain)
const hayatAli252 = m('حیات علی', [
  m('نادعلی', [
    m('محمود علی', [
      m('مسعود علی'),
      f('بلقیس زہرا', 'سید مسعود علی', 'مراد آباد'), // VERIFY: husband's name is smudged
      m('مقصود علی'),
    ]),
    khurshidAli254, // page marker ۲۵۴
  ]),
  m('بنیاد علی', [m('ذاکر علی', [m('شاکر علی', [m('صابر علی', [m('منور علی')])])])]),
])

// Page 252: سید غلام نبی بن سید فیض اللہ, continued from page 249
const ghulamNabi252 = onPage(
  252,
  m('غلام نبی', [
    sabitAli252,
    m('رمضان علی'),
    aleNabi252,
    m('محبوب علی', [asgharAli254]), // page marker ۲۵۴
    m('صاحب علی', [hayatAli252]),
  ])
)

// ═════════════════════════ book page 251 (photo page10) ═════════════════════════

// Kausar-ul-Ansab (1999), printed page 251, header "اغوان پور" (khandan 43).
// Chart headings on this page, verbatim:
//   1. صفحہ ۲۵۰ سید ذوالفقار حسین بن سید امیر حسین
//   2. صفحہ ۲۵۰ سید مقبول حسین بن سید امیر حسین
//   3. صفحہ ۲۵۰ سید نوازش علی بن سید رحمت علی
//   4. صفحہ ۲۵۰ سید برخوردار علی بن سید مردان علی
//   5. صفحہ ۲۲ قاضی سید مختار بن قاضی خادم عرف ظہیر   // VERIFY: the page marker (۲۲ with a tick) and the headline's exact wording

// ───────────── chart 1: ذوالفقار حسین ─────────────

const ghazanfarAbbas251 = m('غضنفر عباس', [
  f('عاشی'),
  f('ثمن'), // VERIFY: ثمن / سمن
  f('سنبل'),
  f('تہمینہ'),
])

const aliAsghar251 = m('علی اصغر', [m('عدیل اصغر'), m('قنبر ذوالفقار')])

const muzaffarAbbas251 = m('مظفر عباس', [
  m('باقر ذوالفقار'),
  f('عروسہ ذوالفقار'), // VERIFY: عروسہ
  f('سائرہ ذوالفقار'), // VERIFY: سائرہ
])

const zulfiqarHusain251 = onPage(251, m('ذوالفقار حسین', [
  ghazanfarAbbas251,
  f('حسین فاطمہ', 'سید علی جعفر', 'اغوان پور'),
  f('نسیم خاتون'),
  aliAsghar251,
  f('حبیبہ خاتون', 'سید احمد', 'مراد آباد'), // VERIFY: first letter (جبیہ / حبیبہ)
  f('عزیزہ خاتون', 'سید ابوطالب', 'چھیوڑہ امروہہ'), // VERIFY: mohalla (چھیوڑہ)
  muzaffarAbbas251,
]))

// ───────────── chart 2: مقبول حسین ─────────────

const zafarMohsin251 = m('ظفر محسن', [
  m('علی صفدر'), // VERIFY: صفدر / صغدر
  f('رئیس فاطمہ'),
  m('عابد حسین'),
  f('ظہیر فاطمہ'),
  m('علی انور'),
]) // VERIFY: ظفر محسن (may carry a leading م)

const aliAbbas251 = m('علی عباس', [f('شبیہ زہرا'), m('عاصم ظفر')])

const nazarMohsin251 = m('نذر محسن', [
  aliAbbas251,
  f('نسرین فاطمہ'),
  m('قمر عباس'),
  m('علی اظہر', [f('روبینہ بانو')]),
  m('علی اکرم', [m('محمد عباس')]),
])

const maqbulHusain251 = onPage(251, m('مقبول حسین', [
  zafarMohsin251,
  f('ظہور زہرا'),
  m('افضال محسن', [m('اقبال محسن'), f('نازنین فاطمہ')]),
  f('مقبول زہرا'),
  f('بنت زہرا'),
  nazarMohsin251,
  m('ریاض محسن'),
]))

// ───────────── chart 3: نوازش علی ─────────────

const ashfaqHusain251 = m('اشتیاق حسین', [m('نور حسین'), f('رئیس فاطمہ')])

const mumtazHusain251 = m('ممتاز حسین', [m('ظہیر حیدر'), m('مجاہد حسین'), m('وقار حسن')])

const irshadHusain251 = m('ارشاد حسین', [m('اقتدار حسین'), m('بدر الحسن'), mumtazHusain251])

const mahmoodHasan251 = m('محمود حسن', 'عرف جمعہ', [
  ashfaqHusain251,
  f('نفیس فاطمہ', 'سید اقبال حسین', 'مراد آباد'), // VERIFY: mohalla (printed نراد آباد)
  irshadHusain251,
  f('رشید فاطمہ', 'سید مشتاق حسین', 'اغوان پور'),
])

const ibnHasan251 = m('ابن حسن', [m('مہدی حسن', 'لاولد'), m('محمد حسن', 'عرف کلو، لاولد')])

const aliHasan251 = m('علی حسن', 'عرف تولا', [f('اصغری بانو', 'سید محمد احسن', 'شفاعت پوتہ', 'زوجہ ثانی')])

const nawazishAli251 = onPage(251, m('نوازش علی', [mahmoodHasan251, ibnHasan251, aliHasan251]))

// ───────────── chart 4: برخوردار علی ─────────────
// (the book prints the root as "برخوردار علی بن سید مردان علی"; reading of the first name is VERIFY)

const sacadHusain251 = m('سعید حسین', [m('مسعود الحسن'), f('شازیہ')]) // VERIFY: شازیہ

const bashirHusain251 = m('بشیر حسین', [m('امیر حسین'), m('صدیق حسین'), sacadHusain251])

const aazamHusain251 = m('اعظم حسین', [
  m('شبیر حسین', 'لاولد'),
  bashirHusain251,
  m('مشتاق حسین', [m('اشتیاق حسین')]),
])

const shaukatHusain251 = m('شوکت حسین', [m('شاہد حسن'), m('راشد حسین'), m('زاہد حسین')])

const imdadHusain251 = m('امداد حسین', [m('دلشاد حسین'), m('سردار حسین')])

const anwarHusain251 = m('انوار حسین', [m('انصار حسین')])

const aliHusain251 = m('علی حسین', [shaukatHusain251, imdadHusain251, anwarHusain251])

const barkhurdarAli251 = onPage(251, m('برخوردار علی', [
  m('جعفر حسین', [m('احمد حسین')]),
  m('محمد علی', [m('حامد علی')]),
  aliHusain251,
  m('بنی حسین', 'لاولد'),
  m('محبوب علی', [m('فتح علی')]),
  m('خادم حسین'),
  aazamHusain251,
])) // VERIFY: root name reading (برخوردار)

// ───────────── chart 5: قاضی مختار ─────────────

const hasanAli251 = m('حسن علی', [
  m('نصیب علی', [m('عاشق حسین'), m('مشتاق حسین')]),
  m('باد علی'),
  m('نثار حسین', [m('زوار حسین', [m('خورشید حسین', 'لاولد')])]),
]) // VERIFY: زوار (printed زقار / زوار)

const sharafatAli251 = m('شمرات علی', [
  m('یوسف علی', [f('دختر')]), // VERIFY: the book gives only "دختر", no name
  m('رحیم علی', 'مفقود الخبر'),
  hasanAli251,
  m('امیر علی', 'لاولد'),
]) // VERIFY: شمرات (ثمرات / شرافت)

const lutfAli251 = m('لطف علی', [
  m('نور علی', [m('الفت علی', 'مفقود الخبر'), m('مدد علی', [m('واجد علی')])]), // VERIFY: الفت (cut at the page edge)
  m('حامد علی', 'لاولد'),
  m('مراد علی'),
  sharafatAli251,
])

const qaziMukhtar251 = onPage(251, m('مختار', [lutfAli251])) // heading: قاضی سید مختار بن قاضی خادم عرف ظہیر

// ═════════════════════════ book page 250 (photo page9) ═════════════════════════

// Kausar-ul-Ansab (1999), printed page 250, khandan 43 (اغوان پور), header corner: اغوان پور
// Chart 1 heading: صفحہ 249 سید ارتضیٰ حسن بن سید مرتضیٰ حسین
// Chart 2 heading: صفحہ 249 سید غلام علی بن سید فیض اللہ
// Continued on page 251 (stubs below): برخوردار علی, نوازش علی, مقبول حسین, ذوالفقار حسین

// "صفحہ 251" is printed under برخوردار علی / beside the right end of his brother عباس علی's children bar

// ───────── Chart 1: ارتضیٰ حسن بن مرتضیٰ حسین ─────────
const irtezaHasan250 = onPage(250, m('ارتضیٰ حسن', [
  m('مجتبیٰ حسین', [
    f('ریحانہ خاتون', 'سید محمود الحسن', 'سرسی'), // VERIFY: a further word after سرسی (محمود پور?)
    m('شہنشاہ حسین'),
    f('سلطانہ خاتون', 'سید منور حسین', 'اغوان پور'),
    m('غلام مرتضیٰ', [
      f('بے نظیر زہرا'),
      m('احتشام حسین'), // VERIFY: spelling (اختشام / احتشام)
      m('ظفر حیدر'),
      f('فرح ناز'),
    ]),
    m('علی اختر'),
  ]),
  m('فدا حسین', [
    m('محمد شفیع'),
    f('شہناز فاطمہ'),
    m('مرتضیٰ حسین'), // VERIFY: a small "محمد" is written under the name (محمد مرتضیٰ حسین?)
    m('صابر حسین'),
    m('منور حسین'),
  ]),
]))

// ───────── Chart 2: غلام علی بن فیض اللہ ─────────
const ghulamAli250 = onPage(250, m('غلام علی', [
  m('اصالت علی', [
    m('عالم علی', 'لاولد'),
    m('انور علی', [m('اکبر علی'), m('احمد علی'), m('گوہر علی'), m('رستم علی')]),
    m('شیر علی', 'لاولد'),
    // مردان علی: four children drawn on a bar that starts at his own line
    m('مردان علی', [
      barkhurdarAli251,
      m('عباس علی', [
        m('متفرد علی', [
          m('معشوق حسین', [f('دختر')]), // VERIFY: first name (معشوق / مشتاق)
          m('فاروق حسین', 'لاولد'),
        ]),
        m('معصوم علی'),
        // رونق علی: a box whose bottom edge doubles as the second row of his children
        m('رونق علی', [
          f('کلثوم بانو', 'سید تفضل حسین', 'اغوان پور'), // VERIFY: husband's name (تفضل / لفضل)
          f('خاتون بانو', 'سید شرافت حسین', 'اغوان پور'),
          m('شوکت حسین', [
            // eight children on two joined rows (a box); the top row is the daughters
            f('شفاعت بانو', 'سید حسین', 'اغوان پور'), // VERIFY: first name and husband (حسن / حسین)
            f('حسن بانو', 'سید ظہور الحسینی', 'اغوان پور'), // VERIFY: husband's name
            f('خورشید بانو', 'سید مختار حسین', 'اغوان پور'),
            f('امیر بانو'),
            m('شفاعت حسین', [
              f('فرزانہ خاتون'),
              f('شبانہ خاتون'), // VERIFY: spelling
              m('وسیم حیدر'),
              m('حسن عباس'),
              f('عروس فاطمہ'),
              m('سراج حسین'),
              m('شان عباس'),
              m('ارشاد حسین'),
              m('وزیر حیدر'),
            ]),
            m('سرفراز حسین', [
              m('شاہنواز حیدر'),
              m('وقار حیدر'), // VERIFY: وقار / وتار; these four hang on a second row joined to سرفراز حسین's bar
              f('عفت بانو'),
              f('ریشماں خاتون'),
              f('منی'),
            ]),
            m('اسرار حسین', [f('ریشماں بانو'), m('طارق انور'), f('صائمہ بانو')]),
            m('افزار حسین', [m('اشفاق حسین')]), // VERIFY: افزار / افراز; اشفاق / اشتیاق
          ]),
          m('لیاقت حسین', 'لاولد'),
        ]),
      ]),
      m('عالم علی', 'لاولد'),
      m('اسد علی', [f('دختر')]),
    ]),
    m('فیض علی', [m('حسین علی', [f('دختر')])]),
  ]),
  m('امیر علی', [
    m('مظفر علی', [
      m('امیر حسن', [
        // امیر حسین: six children on three joined rows (top row first)
        m('امیر حسین', [
          m('طاہر حسین', [f('صغریٰ بانو', 'سید جرار حسین', 'اغوان پور')]), // VERIFY: husband's name
          m('اظہر حسین', [f('عصمت زہرا', 'سید صادق حسین', 'لکھنؤ')]),
          maqbulHusain251,
          f('آل زہرا', 'سید ریحان حسن', 'سرسی'),
          zulfiqarHusain251,
          m('اختر حسین', [
            f('سعید فاطمہ', 'سید حسنین کاظمی', 'دہلی'), // VERIFY: name (سعیدہ فاطمہ?)
            m('منظر عباس', [f('عذرا بانو'), m('عامر عباس'), f('صدف زہرا')]),
            m('علی جعفر'),
            m('ظہیر الحسن', [
              f('حنا محسن'),
              f('روبینہ محسن', 'سید محمد ارشاد', 'ہردوئی'),
            ]),
          ]),
        ]),
      ]),
    ]),
    m('مہربان علی', [
      m('محمد علی', [
        m('امجد علی', [
          m('واحد حسین', [
            m('زاہد حسین', [
              f('چاند زہرا'),
              f('شہناز زہرا'),
              f('شہباز زہرا'), // VERIFY: spelling
              f('قمر زہرا'),
              // second row of the same bar
              m('شان عباس'),
              f('شان زہرا', 'سید ذوالفقار حیدر', 'سرسی'),
              m('شہزادے عباس', [m('شاہد عباس'), m('عرفی بخت')]),
              m('قمر عباس'),
            ]),
            m('شاہد حسین', [
              m('انیس حسین'),
              f('شریف زہرا', 'سید کاظم عباسی', 'رامپور'),
              m('ساجد حسین', [m('شاداب حسین'), f('یاسمین زہرا')]),
              m('مناظر حسین'),
              m('مشاہد حسین'),
            ]),
          ]),
          f('تنویر النساء', 'سید الطاف حسین', 'اغوان پور'),
          f('لطیف النساء', 'سید حسن', 'سرپرہ'), // VERIFY: mohalla (سرپروہ / سربیرہ)
          m('ماجد حسین'),
        ]),
      ]),
      m('فرزند علی', 'لاولد'),
    ]),
    m('دلیل علی', [f('طوب دولت', 'سید حسین علی', 'تکردہ')]), // VERIFY: mohalla (تکردہ / نگردہ)
    m('قائم علی', [m('نور علی', 'لاولد')]),
    m('رحمت علی', [m('عوض علی', [m('اولاد علی')]), nawazishAli251]),
  ]),
]))

// ═════════════════════════ book page 249 (photo page8) ═════════════════════════

// Printed book page 249 (header: اغوان پور)
// Chart 1 heading: "محلہ ۲۲ سید عمر زندہ پیر بن سید خادم عرف طلبہ"
//   (side notes: "قبر سید عمر زندہ پیر" / "برائے فاروق اغوان پور")
// Chart 2 heading: "صفحہ ہذا سید مرتضیٰ حسین بن سید مدد علی"
//
// Wrapped sibling bars on this page: Faizullah (3 + 2), Madad Ali (2 + Mustafa Husain), Saadat Husain (4 daughters box + 4 sons),
// Salam Husain (5 on the top bar, 3 on the wrapped bar), Murtaza Husain (6 + 2).

// ───────── Chart 2: سید مرتضیٰ حسین بن سید مدد علی (bottom of the page) ─────────
const shujaatHusain249 = m('شجاعت حسین', [
  m('شبیہ الحسن'), // VERIFY: شبیہ الحسن reading
  m('مجاہد حسین'),
  f('کنیز فاطمہ', 'سید محمد رضا'),
  m('رجب حسن'),
  f('شمیم فاطمہ', 'سید رئیس گل حسن', 'سنجل'), // VERIFY: husband's name (رئیس گل حسن?) and whether سنجل is his place
])

const murtazaHusain249 = onPage(249, m('مرتضیٰ حسین', [
  // top bar, right to left
  m('امانت حسین', 'لاولد'),
  shujaatHusain249,
  m('صابر حسین', 'لاولد'),
  m('رجب علی', 'لاولد'),
  m('صفدر حسین', 'لاولد'),
  f('چھوٹی', undefined, undefined, 'مساۃ'),
  // wrapped second bar (right to left)
  irtezaHasan250,
  m('سعادت حسین', 'لاولد'),
])) // VERIFY: order of the two wrapped children Irtaza Hasan / Saadat Husain relative to the top bar

// ───────── Chart 1: سید عمر زندہ پیر ─────────

// سید مظفر علی
const nasirAli249 = m('نصیر علی', [m('منور علی', [m('روشن علی')])])
const ghulamAli249 = m('غلام علی', [m('ہدایت علی', [rajabAli257])])
const mustafaHusain249 = m('مصطفیٰ حسین', [m('انوار حسین', [f('دختر')])])
// سید مومن حسین (son of مدد علی): five children on one bar
const saadatHusain249 = m('سعادت حسین', [
  // box: wrapped list, four daughters on the top bar then four sons on the wrapped bar
  f('سلمیٰ بی بی'),
  f('شہر بانو'),
  f('رقیہ بانو'),
  f('عذرا بانو'),
  m('شفاعت حسین'),
  m('یاور حسین'),
  m('شکیل احمد', [m('ایاز حسین'), m('رضا حسین'), f('جیا بانو')]),
  m('رضا علی'),
]) // VERIFY: name reads سعادت / سجادت حسین
const iftikharHusain249 = m('افتخار حسین', [
  m('شجاعت حسین'),
  m('امیر مہدی'),
  m('اقتدار حسین'),
  m('قمر مہدی'),
])
const salamHusain249 = m('سلیم حسین', [
  // top bar, right to left
  f('نفیس بانو'),
  m('حالم حسین', [m('محمد اسلم'), f('فرید زہرا'), m('غیور عباس'), f('ناہید زہرا')]), // VERIFY: حالم / عالم
  m('مناظر حسین'),
  m('الطاف حسین', [m('نثار حسین')]), // VERIFY: الطاف / انتظار
  m('امیر حسین', [m('ظہیر عباس')]),
  // wrapped second bar (right to left)
  m('تعلیم حسین', [
    m('ارشد علی'),
    f('چاند بی بی'),
    m('کاشف علی'),
    f('شبناز بانو'),
  ]),
  m('حسین محمد'),
  m('انتظار حسین'),
]) // VERIFY: سلیم / سلم حسین; order of the three wrapped children relative to the top bar
const mominHusain249 = m('مومن حسین', [
  saadatHusain249,
  f('نوری بیگم'), // VERIFY: انوری / نوری
  iftikharHusain249,
  m('ضامن حسین'),
  salamHusain249,
])

// سید ابدال محمد -> مرتضیٰ -> نادر علی / کرامت علی
const nadirAli249 = m('نادر علی', [
  m('معشوق علی', [f('دختر')]),
  m('عاشق علی', 'لاولد'),
  m('عزت علی', [
    m('فیاض علی', [f('دختر')]),
    m('اشرف علی', [
      m('مشتاق حسین', [m('اولاد حسین', 'لاولد'), m('آل نبی', 'لاولد')]),
      m('شرافت حسین', [m('محمد علی', 'لاولد')]),
    ]),
    m('صفدر علی', [f('دختر')]),
  ]),
])
const karamatAli249 = m('کرامت علی', [
  m('حیدر علی', [m('نثار حسین', 'لاولد'), m('ارشاد علی', 'لاولد')]),
  m('نجف علی'),
])
const murtaza249 = m('مرتضیٰ', [nadirAli249, karamatAli249]) // VERIFY: father of نادر علی / کرامت علی is مرتضیٰ (son of ابدال محمد)
const aliMuhammad249 = m('علی محمد', [m('ابدال محمد', [murtaza249])])

const muzaffarAli249 = m('مظفر علی', [
  m('شیر علی', 'لاولد'),
  m('مدد علی', [
    mominHusain249,
    murtazaHusain249,
    mustafaHusain249,
  ]),
  ghulamAli249,
  nasirAli249,
]) // VERIFY: مصطفیٰ حسین is drawn on a wrapped bar below مدد علی's bar

// سید فاروق
const faizullah249 = m('فیض اللہ', [
  ghulamAli250,
  ghulamNabi252,
  m('یاد علی', [aulaadAli255]),
  // wrapped second bar
  m('امانت علی', [
    m('صادق علی', [m('فیض علی', [m('علی', [f('دختر')])])]),
    m('احسن علی', [m('اصغر علی', [f('دختران')])]), // VERIFY: دختران (plural, unnamed daughters)
    m('سعادت علی', 'لاولد'),
  ]),
  m('اکبر علی', [
    m('قمر علی', [
      m('قاسم حسین', 'لاولد'),
      m('رستم علی', [
        m('خادم حسین'),
        m('فضل حسین', [
          m('شاکر حسین', [
            f('قمر جہاں', 'سید تہذیب الحسن', 'علی گڑھ'),
            f('مظفر فاطمہ', 'سید اختر حسین', 'اغوان پور'),
          ]),
        ]),
      ]),
    ]),
  ]),
])
const sherZaman249 = m('شیر زمان', [m('حیدر علی', [hidayatAli256])])
const feroz249 = m('فیروز', [
  m('عنایت علی', [
    m('امام علی', [
      m('امداد علی', [
        m('ضامن علی', [
          m('فدا حسین', [m('باقر حسین')]),
          m('رضا حسین', [m('محمد حسین')]),
          m('ذاکر حسین', 'لاولد'),
        ]),
        m('اولاد علی', 'مفقود الخبر'),
      ]),
      m('ذوالفقار علی', 'لاولد'),
    ]),
  ]),
])
const farooq249 = m('فاروق', [faizullah249, sherZaman249, feroz249])

const muhammadMuqeem249 = m('محمد مقیم', [
  farooq249,
  m('محبوب عالم', 'لاولد'),
  aliMuhammad249,
  muzaffarAli249,
])
const umarZindaPir249 = onPage(249, m('عمر زندہ پیر', [m('اسد اللہ', [muhammadMuqeem249])])) // VERIFY: father's line reads خادم عرف طلبہ

// ═════════════════════════ book page 248 (photo page7) ═════════════════════════

// Kausar-ul-Ansab (1999), printed page 248: محلہ اغوان پور
// Photo: aghwan pur/aulad syed jan bin syed wajihuddin/page7.straight.jpg
//
// Chart 1 heading: "صفحہ ۲۴۵ سید غلام علی بن سید فیض علی"   (continued from page 245)
// Chart 2 heading: "صفحہ ہذا ظہور الحسنین بن سید شرافت حسین"   (same page, drawn below)
// Chart 3 heading: "صفحہ ہذا سید فصاحت حسین بن سید لطافت حسین"   (same page, drawn below)
//
// Where a father's children are drawn in a box (top bar, then a second bar along the box bottom edge),
// both rows are one sibling list, top row first, each row right to left.

// ───────────── Chart 2: ظہور الحسنین بن شرافت حسین (صفحہ ہذا) ─────────────
const zahoorulHasnain248 = onPage(248, m('ظہور الحسنین', [
  m('منظر عباس', [
    m('رنکو'),
    f('حور بانو'),
    m('جمی'),
  ]),
  m('تہذیب البطین', [
    f('رانی'), // VERIFY: رانی / زانی
    m('شاہنواز'),
    f('گلنواز'),
    m('دلنواز'),
  ]),
  f('شبیہ زہرا', 'سید محمد قاسم زیدی', 'نورپور'), // husband's place printed "نورپور، امروہہ"
  f('شوکت جہاں', 'مولوی حبیب رضا', 'بدایوں'), // printed "بدایوں حال مراد آباد"; VERIFY: whether سید belongs to his name
  f('نصرت جہاں', 'سید تلمذ حسین', 'اغوان پور'),
  m('منظور سبطین', [
    f('شائستہ سبطین'),
    m('شبیہ الحسن'),
  ]), // VERIFY: his vertical line and منظر عباس's line both run to the row below; two separate bars were seen (a gap between شائستہ and جمی)
]))

// ───────────── Chart 3: فصاحت حسین بن لطافت حسین (صفحہ ہذا) ─────────────
const fasahatHusain248 = onPage(248, m('فصاحت حسین', [
  m('وضاحت حسین', [
    // eight children on one long bar fed by the line down the right of the chart
    f('شمع بانو'),
    f('شان زہرا'),
    m('نقی عباس'),
    f('نسیم زہرا'),
    f('شہناز زہرا'),
    m('شان عباس'),
    f('شہلا پروین'),
    f('نسرین زہرا'),
  ]),
  m('وجاہت حسین'),
  m('غیور الحسن'),
  m('شباہت حسین', [
    m('کاظم عباس'),
    f('ناہید پروین'),
    m('تمر عباس'), // VERIFY: تمر / ثمر
    f('طلعت پروین'),
    m('ندیم عباس'),
  ]),
  f('آل فاطمہ'),
]))

// ───────────── Chart 1: غلام علی بن فیض علی (from 245) ─────────────
const ghulamAli248 = onPage(248, m('غلام علی', [
  // 1. صندر علی
  m('صندر علی', [
    m('غضنفر حسین', [
      m('وصی حسین', [
        m('رضی حسین', [
          // box: three daughters on the top bar, four sons on the bar along its bottom edge
          f('حور جہاں', 'سید بخش حسن', 'بجنور'), // VERIFY: first letter حور / خور; husband's name
          f('نور جہاں', 'سید خورشید حیدر', 'نگینہ'),
          f('حضور جہاں'),
          m('رضی الحیدر', [
            f('زاہدہ خاتون', 'سید ضامن علی', 'لکھنؤ'),
            m('نقی حیدر', [
              // box of two rows, one family
              f('مدحت زہرا'),
              f('منیز حیدر'), // VERIFY: reads منیز / منیر; no سید printed so taken as female
              m('مجتبیٰ حیدر'),
              m('ارتضیٰ حیدر'),
            ]), // VERIFY: نقی / تقی حیدر
            f('عذرا خاتون', 'سید اظہار حسین', 'خیر پور'),
            m('نسیم حیدر', [
              f('مہوش کنول'),
              m('علی جنید'),
              f('راضیہ طاہر'),
            ]),
          ]),
          m('منتخب الحیدر'),
          m('ضمیر حیدر'),
          m('ذوالفقار حیدر', [
            m('ذی وقار حیدر'),
            f('ملکہ مہر نگار', 'سید نعیم الحسن', 'لندری'), // VERIFY: mohalla reads لندری
            m('علی رضا'),
          ]),
        ]),
        f('رضی النساء', 'سید حسین العسکری', 'مراد آباد'), // VERIFY: husband's name
      ]),
      f('وصی النساء', 'سید وزیر حسین', 'مراد آباد'),
      m('عسکری حسین', [
        f('ریاض فاطمہ', 'سید بنیاد علی زیدی', 'مظفر نگر'),
        m('ریاض الحیدر', [
          // box: top row of five, then a second row of four along the box bottom edge
          m('عارف رضا'),
          m('منور رضا'),
          m('محمد رضا'),
          m('ظہیر رضا'),
          f('مہرل بی'), // VERIFY: reads مہرل بی (مہر لبی?)
          f('چاندنی بی بی', 'سید رضا حیدر', 'اغوان پور'),
          m('ریاض العسکری', [
            f('زرین فاطمہ'),
            m('شمیم ریاض'),
            f('مہرین فاطمہ'),
          ]),
          f('شان بی بی', 'سید شمیم حیدر زیدی', 'نورپور'),
          f('قمر جہاں', 'سید غلام مرتضی', 'اغوان پور'),
        ]), // VERIFY: the second row of four is read as continuing ریاض الحیدر's list (box), not as a separate family
      ]),
    ]),
  ]),
  // 2. سخاوت علی
  m('سخاوت علی', [
    m('لطافت حسین', [
      m('شرافت حسین', [zahoorulHasnain248]),
      m('شریف حسین'),
      fasahatHusain248,
    ]),
  ]),
  // 3. خیرات علی
  m('خیرات علی', [
    m('عنایت حسین', [
      m('ریاض حسین', [
        m('راغب حسین', 'لاولد'),
        m('توصیف حسین', [
          f('لطیفہ بانو', 'سید ساجد حسین', 'رام پور'),
          m('لئیق الحسنین', [
            f('بشری'),
            f('فردوس جہاں'),
            m('انتظار حسین'),
            f('گلستان بانو'),
            f('ناہید جہاں'),
          ]),
          f('رفیقہ بانو', 'سید افتدار حسن خاں', 'دربار کلاں'), // VERIFY: افتدار / اقتدار; printed "دربار کلاں - امروہہ"
        ]),
        m('توقر حسین', 'لاولد'),
      ]),
    ]),
    m('رضا علی', [
      f('فرحت النساء', 'سید رشید حسین', 'اغوان پور'),
      m('زاہد حسین', [
        m('زائر حسین', [f('دختر')]), // VERIFY: the book prints only "دختر" (a daughter) with no name
        m('مظاہر حسین', [
          // box: top bar of six, then a second bar of two along the box bottom edge
          m('رضائے سبطین', [
            m('نسیم رضا'),
            m('معصوم رضا'),
            m('شبیہ رضا'),
            m('شباب رضا'),
            f('ضیاء نیلوفر'),
          ]),
          f('انجم زہرا', 'سید علی اظہر', 'دھولڑی'), // VERIFY: mohalla reading
          f('ظفر فاطمہ', 'سید مظہر الحسن', 'اغوان پور'),
          f('قیصر جہاں', 'سید توفیق حسین', 'اغوان پور'),
          f('شمیمہ فاطمہ', 'سید منور حسین', 'اغوان پور'), // VERIFY: husband's first name
          m('نقی حیدر'),
          m('ضیاء حیدر', [
            f('زرین فاطمہ'),
            m('حسین رضا'),
            f('نسرین فاطمہ'),
            f('نحدین فاطمہ'), // VERIFY: first word reads نحدین
          ]),
          m('رضائے حیدر', [
            f('تشبیہ فاطمہ'),
            m('ریاض حیدر'),
            f('کہکشاں بانو'),
            m('شاداب رضا'),
          ]),
        ]), // VERIFY: the two second-row sons (ضیاء حیدر, رضائے حیدر) are read as مظاہر حسین's, from the box
      ]),
    ]),
  ]),
]))

// ═════════════════════════ book page 247 (photo page6) ═════════════════════════

// Kausar-ul-Ansab (1999), printed page 247, mohalla header: اغوان پور (khandan 43)
// Chart 1 heading: صفحہ ۲۴۵ سید عزیز الدین بن سید اظہر الدین
//   (note printed under the four sons: "تمامی ... امروہہ میں ساکن ہوئے")
// Chart 2 heading: صفحہ ہذا سید کریم الدین بن سید عزیز الدین   ("امروہہ محلہ چاہ ملا امان میں ساکن ہوئے")
// Where a father's children are drawn on two bars joined by a connector (or a box whose bottom edge is the next bar),
// the children are listed as one sibling list.

// ───────────── Chart 2 (listed first because chart 1 stubs it) ─────────────

// کریم الدین -> بشیر حسین -> یامین حسن -> ...
const yaseenAhsan247 = m('یسین احسن', [
  f('شائستہ'),
  f('دعنا'), // VERIFY: دعنا / دعا
  f('خالدہ'),
  m('اسد یاسین'),
]) // VERIFY: first name reads یسین / یاسین (احسن)

const ziyaUlHasan247 = m('ضیاء الحسن', [f('ہما ضیاء'), f('مسرت ضیاء'), m('اظہر ضیاء'), f('ثروت ضیاء')])

const muhammadHasan247 = m('محمد حسن', [m('فہد حسن'), m('سعد حسن')])

const najmUlHasan247 = m('نجم الحسن', [f('ارم'), m('خرم حسن'), f('الماس')])

const masoodUlHasan247 = m('مسعود الحسن', [
  f('نکہت'),
  m('جاوید مسعود'),
  f('فرحت'),
  m('ارشد مسعود'),
  f('فوزیہ'),
])

const maseehUlHasan247 = m('مسیح الحسن', [m('راشد حسن'), m('زاہد حسن'), m('حسب حسن'), f('فرح ناز')])

const yameenHasan247 = m('یامین حسن', [
  // top bar (right to left), then the second bar below-left; both hang from the line of یامین حسن
  yaseenAhsan247,
  ziyaUlHasan247,
  muhammadHasan247,
  najmUlHasan247,
  masoodUlHasan247,
  maseehUlHasan247,
]) // VERIFY: order of the two bars (top bar of four sons first, then مسعود الحسن and مسیح الحسن)

const bashirHusain247 = m('بشیر حسین', 'ساکن دربار کلاں', [
  yameenHasan247,
  m('حسن', [m('تہور حسن', [m('مسرور حسن')])]), // VERIFY: the second son's name reads only حسن (maybe a longer name)
])

const shujaUlHasan247 = m('شجاع الحسن', [m('نازش حسن'), f('نازیہ حسن')])

// شبیہ الحسن: three daughters drawn in a box, whose bottom bar carries four more children; all are his
const shabeehUlHasan247 = m('شبیہ الحسن', [
  f('گلشن آرا بیگم'),
  f('فرحت آرا بیگم'),
  f('شبلنہ خاتون'), // VERIFY: شبلنہ / شبنم
  m('ضیاء الحسن'),
  f('شاہجہاں بیگم', 'اسد میاں', 'رامپور'),
  shujaUlHasan247,
  f('فرزانہ خاتون'),
]) // VERIFY: the box bottom bar is read as children of شبیہ الحسن (a pen X sits on the box)

const meraajUlHasan247 = m('معراج الحسن', [
  m('عدنان حیدر'),
  m('شان حیدر'),
  f('ارجمند خاتون', 'ظہیر احمد'),
  m('بدر الحسن'),
]) // VERIFY: father of these four: the connector comes down under the entry of امینہ خاتون (pen X on it), assigned to معراج الحسن

const saeedHusain247 = m('سعید حسین', [
  meraajUlHasan247,
  f('امینہ خاتون', 'سید اعجاز حسین', 'سرائے کہنہ'),
  f('مسکینہ خاتون', 'سید علی رضا', 'سنبھل'),
  shabeehUlHasan247,
])

const karimUddin247 = onPage(247, m('کریم الدین', [bashirHusain247, saeedHusain247]))

// ───────────── Chart 1 ─────────────

// رحیم الدین -> زاہد حسین -> three sons
const raheemUddin247 = m('رحیم الدین', [m('زاہد حسین', [m('شاہد حسین'), m('عابد حسین'), m('مرتضیٰ حسین')])])

// امیر الدین -> مسرت حسین, معجز حسین (boxed pair); the box bottom bar: ثروت حسین under مسرت, سبط حسن under معجز
const ameerUddin247 = m('امیر الدین', [
  m('مسرت حسین', [m('ثروت حسین', [f('شاکرہ خاتون')])]),
  m('معجز حسین', [
    m('سبط حسن', [
      m('اعجاز علی', [
        m('ریاض حیدر', [
          m('علی رضا'),
          m('ذیشان حیدر'),
          m('کمیل رضا صائم'), // VERIFY: صائم may be a separate child or a pen-name
          f('مہوش'),
          f('ارم آفرین'),
        ]),
        m('سجاد حیدر', [f('نایاب زہرا'), f('کرن بتول'), f('سدرہ بتول'), m('موسیٰ رضا')]),
        f('نرجس فاطمہ', 'سید باقر امام زیدی'),
        f('نرگس فاطمہ', 'سید علی جعفر رضوی'),
        f('نسیم فاطمہ'),
        m('ذوالفقار حیدر'),
      ]),
    ]),
  ]),
]) // VERIFY: that ثروت حسین belongs to مسرت حسین and سبط حسن to معجز حسین (box bottom bar, split by position)

// مصطفیٰ احسن
const mustafaAhsan247 = m('مصطفیٰ احسن', [
  f('سکینہ خاتون', 'سید محمد نور عین', 'دانشمندان'),
  f('فردوس فاطمہ', 'سید علی نقی', 'چھنگا دروازہ'),
  m('مجتبیٰ حسن', [
    f('حسین فاطمہ'),
    m('حسن مجتبیٰ'),
    f('تسنیم فاطمہ', 'سید علی ضامن', 'اغوان پورہ'), // VERIFY: a further word follows the mohalla (حال ...)
    f('وسیم فاطمہ', 'سید علی حسنین', 'بھٹی'), // VERIFY: mohalla reads like بھٹی / ہٹی
    m('پرویز مجتبیٰ'),
  ]),
  f('شعور فاطمہ', 'سید توصیف الحق', 'چاہ غوری'),
  f('عروج فاطمہ', 'سید علی', 'حال دربار کلاں عثمان پور'), // VERIFY: husband's full name and which woman the mohalla lines belong to
  f('معراج فاطمہ', 'سید محمد عباس', 'مجاپوتہ'),
  m('مرتضیٰ حسن', [
    f('جمال زہرا'),
    f('عزمات زہرا'),
    f('بہار زہرا'),
    m('محمد مصطفیٰ'),
    f('وصال زہرا'),
  ]),
])

// مستحسن: two daughters in a box, bottom bar carries two sons
const muhammadMustahsan247 = m('محمد مستحسن', [
  f('صغیرہ خاتون', 'سید انعام حسین', 'گوری'),
  f('مجاہدہ خاتون', 'سید واحد علی', 'ثقافی'), // VERIFY: mohalla reads ثقافی / تھانوی
  m('مستجاب حسن', [m('امیر حسن')]), // VERIFY: امیر / امر
  m('مستفیض الحسن', [
    // lower bar first (the father's line lands there), then the upper bar of six
    f('عزت زہرا'), // VERIFY: reads like عنزیت / عزت / نزہت
    f('فرحت زہرا'),
    m('ممتاز الحسن'),
    m('توقیر حسین'),
    m('تصویر حسین'),
    m('سمیع الحسن', [m('نسیم الحسن'), f('اسماء زہرا'), m('عرفان حسن'), f('ہما زہرا')]),
    m('ذکی الحسن'),
    f('طلعت زہرا'),
  ]), // VERIFY: order of the two joined bars
]) // VERIFY: the box bottom bar is read as children of مستحسن (box holds two daughters)

// اصغر علی
const asgharAli247 = m('اصغر علی', [
  f('محمودہ خاتون', 'سید شہاب حسین زیدی', 'گولہ قاضی زادہ'), // VERIFY: mohalla line
  m('محمد علی', [
    f('مہجبین فاطمہ'),
    f('روشن جبین'),
    m('عامر علی', [m('گوہر علی'), m('احمد علی'), m('بابر علی'), m('رحمت علی')]), // VERIFY: boxed trio's bottom bar assigned to the only son, عامر علی
  ]),
  f('محفوظہ خاتون', 'سید سراج الحسن', 'حقانی قاضی زادہ'), // VERIFY: mohalla line
])

const ramzanAli247 = m('رمضان علی', [mustafaAhsan247, muhammadMustahsan247, asgharAli247])

// Chart 1 root, continued from page 245. کریم الدین is the chart-2 root drawn on this same page.

const azizUddin247 = onPage(247, m('عزیز الدین', [ramzanAli247, karimUddin247, ameerUddin247, raheemUddin247]))

// ═════════════════════════ book page 246 (photo page5) ═════════════════════════

// Kausar-ul-Ansab (1999), printed page 246 (۲۴۶), محلہ اغوان پور. Khandan 43.
// Chart 1 heading: "صفحہ ۲۴۵ سید نجابت علی بن سید شہامت علی"
// Chart 2 heading: "صفحہ ۲۴۵ سید سعادت علی بن سید نادر علی"
//
// Layout notes: in chart 1 the bracket under مقصود حسین wraps (sons on the top bar, four daughters on the
// bar below, joined at the left edge). شفاعت حسین hangs from a box around his mother زاہدہ خاتون; a daughter
// cannot carry children in this format, so he is a separate const (shafaatHusain246) for the assembler.
// In chart 2 the bracket under مقصود علی (second generation) is a rectangle: top bar and bottom bar are one list.

// ───────────────────────── Chart 1: سید نجابت علی بن سید شہامت علی ─────────────────────────

const qasimHusain246 = m('قاسم حسین', [
  f('نجمہ خاتون'),
  m('شبیہ حیدر'),
  f('بٹو'),
  f('اچھی', 'سید بنین', 'اغوان پور', 'مسماۃ'), // VERIFY: the husband's name (بنین) and the name اچھی
])

const mehdiHusain246 = m('مہدی حسین', [
  m('صابر حسین'), // VERIFY: صابر / صائر / ساجر
  f('شاہجہاں بانو'),
  m('ہاشم حسین'),
  f('وزارہ خاتون', 'سید وجاہت حسین', 'اغوان پور'), // VERIFY: the name reads وزارہ / وزائرہ
  qasimHusain246,
])

// مظہر حسین: five daughters on the top bar, the bar wraps down at the left to two sons
const mazharHusain246 = m('مظہر حسین', [
  f('اعجاز فاطمہ'), // VERIFY: first daughter's name (اعجاز / انجاز)
  f('شہناز فاطمہ'),
  f('طلعت فاطمہ'),
  f('نگہت فاطمہ'),
  f('لی بی'), // VERIFY: لی بی / بی بی
  // second bar of the wrapped bracket
  m('محمد حسین'),
  m('محمد عباس'),
]) // VERIFY: that محمد حسین and محمد عباس are on the wrapped second bar of مظہر حسین (not children of لی بی)

// Son of زاہدہ خاتون (the box under her on the page); his mother is a daughter of ولی حسین
const shafaatHusain246 = onPage(246, m('شفاعت حسین', [
  m('منظر عباس'),
  f('زہرا خاتون', 'سید حسین الحسن', 'امروہہ'), // VERIFY: husband's name
  mazharHusain246,
  m('ناصر حسین'),
])) // VERIFY: parentage, drawn under the box around زاہدہ خاتون so he is her son (not a son of ولی حسین)

const waliHusain246 = m('ولی حسین', [
  f('زاہدہ خاتون', 'سید ظہیر حسن', 'چاہ شور', 'mother of شفاعت حسین'), // VERIFY: husband's name ظہیر/ظہر
  f('سیدہ خاتون', 'سید ارتضیٰ حسن', 'اغوان پور'), // VERIFY: husband's name
  m('شماعت حسین'), // VERIFY: شماعت / شمامت
])

const aliHusain246 = m('علی حسین', [
  m('زین العابدین', [f('ذاکرہ خاتون', 'سید مہدی حسن', 'اغوان پور')]),
  m('یوسف حسین', [m('بنی حسین', [mehdiHusain246, m('ذکی حسین', 'لاولد'), f('آمنہ خاتون')])]),
])

const ghulamMurtaza246 = m('غلام مرتضی', [aliHusain246, waliHusain246])

const rizwanHusain246 = m('رضی حسین', [
  f('رضیہ بانو', 'سید منور حسین', 'شکارپور'), // VERIFY: husband's name منور
  f('رئیسہ بانو', 'سید قاسم حسین', 'اغوان پور'),
  m('انیس الحسن', [m('شبیہ الحسن'), f('فرح ناز'), m('ظہیر الحسن')]),
  f('عباسی بانو', 'سید مظفر حسین', 'شکارپور'),
  m('رئیس الحسن'),
])

const maqsoodHusain246 = m('مقصود حسین', [
  m('شاہد حسین'),
  m('سرور حسین'),
  m('مطلوب حسین'),
  m('منصور حسین'), // VERIFY: منصور / معصوم
  m('منظور حسین'),
  // second bar of the wrapped bracket
  f('قیصر بانو', 'سید محمد ابراہیم', 'بہار'),
  f('شہناز بانو'),
  f('کشور بانو', 'سید شبیر احمد', 'گوالشور'), // VERIFY: mohalla reading
  f('ریحانہ بانو', 'سید اکبر حسین', 'چکوال'), // VERIFY: mohalla reading
]) // VERIFY: the four daughters are on the wrapped second bar of مقصود حسین (box bottom edge), not children of one son

const wasiHusain246 = m('وصی حسین', [
  maqsoodHusain246,
  f('امیر بانو', 'سید مسلم حسین', 'اغوان پور'),
  rizwanHusain246,
])

const amdadAli246 = m('امداد علی', [
  f('مشیت النساء', 'سید علی حسن', 'اغوان پور'),
  m('امتیاز علی', [wasiHusain246]),
  f('حسین دولت', 'سید باسط علی', 'اغوان پور'),
])

const nijabatAli246 = onPage(246, m('نجابت علی', [amdadAli246, f('شمع دولت'), f('نصیب دولت'), ghulamMurtaza246]))

// ───────────────────────── Chart 2: سید سعادت علی بن سید نادر علی ─────────────────────────

const munawwarAli246 = m('منور علی', [m('ناصر علی'), m('نادر علی'), m('عامر علی')]) // VERIFY: منور / مقبول

const zakawatHusain246 = m('ذکاوت حسین', [
  m('مظفر علی'),
  m('غضنفر علی'),
  f('اکبری خاتون', 'سید علی حیدر', 'فیض آباد'),
  f('سلطانہ ناز'),
  f('سروری خاتون', 'سید علی رضا رضوی', 'الہ آباد'),
  munawwarAli246,
  f('ناہید اختر', 'سید نواب حیدر', 'الہ آباد'),
  m('مبشر علی'),
])

const maqsoodAli246 = m('مقصود علی', [
  f('شاہدہ خاتون'),
  f('پروین بانو'),
  f('روبینہ خاتون'),
  f('فرزانہ بانو'),
  f('ذاکرہ خاتون', 'سید غلام مہدی', 'اغوان پور'), // VERIFY: name reads ذاکرہ / ماکعہ
  // second bar of the wrapped bracket (the rectangle)
  m('قاسم علی'),
  f('ثمینہ خاتون'),
  f('شبانہ بانو'),
  m('مقصود علی'), // VERIFY: name of the last son
]) // VERIFY: that the rectangle is one wrapped sibling list of nine

const mahmoodAli246b = m('محمود علی', [
  f('شائستہ بانو', 'سید باسم مہدی', 'بریلی'), // VERIFY: husband's name
  f('شہناز بانو', 'سید مظفر رضا', 'دربار کلاں'),
  m('باقر عباس'),
  m('اسد عباس'),
])

const manzoorAli246 = m('منظور علی', [
  f('خورشید خاتون', 'سید انفضال علی', 'مراد آباد'), // VERIFY: husband's name
  maqsoodAli246,
  f('عزیزہ خاتون', 'سید مجتبیٰ حسن', 'اغوان پور'),
  m('محمود علی'),
  f('سعیدہ خاتون', 'سید خصال حسن', 'کنٹھولی'), // VERIFY: husband's name and mohalla
  mahmoodAli246b, // VERIFY: two sons both named محمود علی on this bar
])

const mushiyatAli246 = m('مشیت علی', [manzoorAli246, f('دختر', 'سید محبوب حسین'), zakawatHusain246])

const sadrAli246 = m('صدر علی', [
  m('یاد علی', [mushiyatAli246]),
  m('فتح علی', [m('تیغ علی', 'لاولد')]),
  m('بخت علی'), // VERIFY: بخت / نجف
  m('عباس علی', [m('امیر حسین', [m('نصیر حسین')]), m('شبیر حسین', 'لاولد')]),
])

const qamarAli246 = m('قمر علی', [
  m('مظفر حسین', [f('دختران')]), // VERIFY: "دختران" (daughters, plural) is drawn as one unnamed child
  m('علی حسن', 'لاولد'),
  m('علی حسین', 'لاولد'),
])

const saadatAli246 = onPage(246, m('سعادت علی', [qamarAli246, m('احمد علی', 'لاولد'), sadrAli246]))

// ═════════════════════════ book page 245 (photo page4) ═════════════════════════

// Kausar-ul-Ansab (1999), printed page 245: اغوان پور (khandan 43)
// Photo: aghwan pur/aulad syed jan bin syed wajihuddin/page4.straight.jpg
//
// Charts on this page (headings verbatim):
//   1. صفحہ ۲۴۳ سید طالب حسین بن سید نذیر علی          (top; talibHusain245)
//   2. صفحہ ۲۴۳ سید حامد بن سید حسن گھی بھود            (middle; hamid245)
//   3. صفحہ ہذا سید ناصر علی بن سید محمد               (left, under chart 1; nasirAli245)
//
// Footnotes printed at the right of the page (not people):
//  - فیضان صلوات صفحہ ۲۸: it prints two sons for عظمت علی بن فیض علی, which is wrong; he had only one son,
//    محمد حسین, who was لاولد (matches the chart below).
//  - فیضان سادات صفحہ ۲۸۰: the printed shajra of نجف علی بن شہامت علی was found wrong on research; his
//    great-grandson سید محمد اسعد حسین drew attention to it in a letter.
// Where a father's children are drawn on two bars joined by a box edge, they are listed top bar first,
// right to left, then the second bar right to left (one sibling list).


// ───────────────────────── chart 3: صفحہ ہذا سید ناصر علی بن سید محمد ─────────────────────────

const nasirAli245 = onPage(245, m('ناصر علی', [
  m('امانت علی', 'لاولد'),
  m('مبارک علی', [
    m('قربان علی', 'لاولد'),
    m('امیر علی', [
      m('ہادی حسن', 'مفقود الخبر'), // VERIFY: first letter reads like مہادی / ہادی; the left brother is مہدی حسن
      m('مہدی حسن', 'مفقود الخبر'),
    ]),
    m('عنایت علی', 'لاولد'),
  ]),
  m('گوہر حسین', 'لاولد'),
])) // VERIFY: heading's first name reads like نام علی / ناصر علی; taken as ناصر علی because the same man is listed under محمد with "صفحہ ہذا"

// ───────────────────────── chart 2: صفحہ ۲۴۳ سید حامد بن سید حسن گھی بھود ─────────────────────────

// Continued on other pages
// ناصر علی is drawn on this same page (chart 3, "صفحہ ہذا")

// شاہ محمد's line
const shahMuhammad = m('شاہ محمد', [
  m('مرتضیٰ', [m('حسین علی', [m('رحمت علی', 'لاولد')])]),
  m('شہامت علی', [
    nijabatAli246,
    m('نجف علی', [
      // top bar (right to left), then the second bar (box edge on the right)
      f('برکت النساء'),
      m('امیر علی شاہ', [
        m('حسین', [
          // one list drawn on a long bar that bends up into the box at the right: box first, then the bar below
          m('احمد حسین'),
          m('محمد اسعد حسین', [
            f('طاہرہ بانو'),
            m('بدر الحسن'),
            m('نور الحسن'),
            m('مصباح الحسن'),
            f('رضیہ بانو'),
            m('ضیاء الحسن', [m('حمزہ حسن'), m('مجیب حسن')]), // VERIFY: حمزہ reading
          ]), // VERIFY: six children drawn on two joined bars (طاہرہ..نور الحسن top, مصباح..ضیاء الحسن below)
          m('محمد حسین'),
          m('حفاظ حسین'), // VERIFY: printed like احفاظ حسین
          m('انوار حسین', [f('ناہید جہاں'), m('سرور حسین')]),
        ]), // VERIFY: حسین's five children are one wrapped list (box at right, bar below)
        m('دیدار حسین', 'لاولد'),
        m('حسن', [
          m('غیور حسین', 'لاولد'),
          m('مہدی حسن', [m('نعیم الحسن'), f('عشرت جہاں')]),
        ]),
        f('سیدانی بی بی', undefined, undefined, 'ساکن بھوپال'), // VERIFY: name
      ]),
      f('عمدۃ النساء'),
      f('نجیب النساء'),
      f('علیم النساء'),
      f('مجید النساء'), // VERIFY: second row of the box (below برکت النساء); first letter
    ]), // VERIFY: seven children, a box at the right wraps the last one onto a second bar
  ]),
])

const pirMuhammad = m('پیر محمد', [
  m('کمالن', [ // VERIFY: name reads کمالن
    m('رمضان علی', [
      m('ظہیر الدین', [
        m('اظہر الدین', [azizUddin247]),
        m('نظیر الدین', 'لاولد'),
      ]),
    ]),
  ]),
  m('لطف محمد', 'لاولد'), // VERIFY: printed بے اولاد (reads like یاولد)
  m('اولاد محمد', [shahMuhammad]),
  m('وراثت علی', 'لاولد'),
  m('محمد', [
    m('فیض علی', [
      ghulamAli248,
      m('عظمت علی', [m('محمد حسین', 'لاولد')]),
      m('رمضان علی', [
        m('سلطان علی', [
          m('فدا حسین', [
            f('فراست النساء', 'سید وصی حسین', 'اغوان پور'),
            m('اظہر حسین', [
              m('منظر الحسن', [m('وسیم رضا')]),
              f('نسیم بانو', 'سید الحسنین حسین', 'اغوان پور'), // VERIFY: husband's name
              m('محمد حسین', [m('فقیر عباس'), m('حسن عباس')]), // VERIFY: فقیر عباس
            ]),
          ]),
        ]),
      ]),
    ]),
    m('نادر علی', [saadatAli246]),
    nasirAli245,
  ]),
])

const hamid245 = onPage(245, m('حامد', [pirMuhammad])) // VERIFY: heading text "سید حامد بن سید حسن گھی بھود", last words uncertain

// ───────────────────────── chart 1: صفحہ ۲۴۳ سید طالب حسین بن سید نذیر علی ─────────────────────────

const mutlub = m('مطلوب حسین', [
  // One sibling list drawn on a long bar that wraps down a box at the right: top bar right to left, then the bar below
  m('مرغوب حسین'),
  f('ستارہ بیگم', 'سید سبط نبی', 'اغوان پور'), // VERIFY: husband's name
  f('کنیز بانو', 'سید منظور علی', 'اغوان پور'),
  m('اظہار مصطفیٰ', [m('مبشر عالم'), f('نرجس فاطمہ')]),
  m('یعقوب حسین', [
    m('اختر حسین', [m('اشتیاق حسین')]),
    f('نوشابہ خاتون', 'سید بدر حسین', 'سرسی'),
    m('محفوظ الحسن', [m('منصور الحسن')]),
    m('افسر حسین'),
    m('منور حسین'),
    f('شبانہ خاتون'), // VERIFY: sits at the left end of the bar where the father's line lands
  ]),
  m('محبوب حسین', [
    f('شہر بانو', 'سید صنی محمد', 'دھولری'), // VERIFY: husband's name and mohalla
    m('اسلم حسین', [
      m('محمد اویب'),
      f('حبیب زہرا'),
      m('منیب الحسن'),
      f('نصیب زہرا'),
      m('بخت الحسن'),
    ]),
    f('شجاعت فاطمہ', 'سید رفیع محمد', 'دھولری'), // VERIFY: mohalla spelling
  ]),
  f('کنیز فاطمہ'),
  m('ممتاز حسین', [
    f('ممتاز فاطمہ', 'سید ارتضیٰ حسن', 'حیدرآباد'), // VERIFY: husband's mohalla (حیدرآباد / حبیب آباد)
    m('فخر عالم', [
      m('سرور عالم'),
      m('تہور عالم'),
      f('تطہیر عالم'), // VERIFY: no سید printed under it, so taken as female
      f('مہجور'), // VERIFY: name reads مہجور / مہبور, no سید printed
    ]),
  ]),
]) // VERIFY: مطلوب's eight children are one wrapped list (five on the top bar, three on the bar below the box)

const tabarak = m('تبارک حسین', [
  f('مرتضائی خاتون', 'سید ممتاز حسین', 'اغوان پور'),
  m('اولاد حسن', 'لاولد'),
  f('مصطفائی خاتون', 'سید ہادی حسن', 'سرسی'),
  m('مبشر حسین', [
    m('رئیس عباس', [m('علی عباس')]),
    m('تقی عباس', [m('اسد عباس'), m('باقر عباس')]),
    m('حضور عباس'),
    m('تصور عباس'),
  ]),
  m('سراج الحسن', 'لاولد'),
  m('مبارک حسین', [
    f('عرش النساء', 'سید صادق حسین', 'دھولری'), // VERIFY: name (عرش / عشق) and mohalla
    m('غلام مہدی', [
      f('نزیہ زہرا'),
      f('عنبر زہرا'),
      f('شکیبا زہرا'),
      m('شعیب رضا'),
      f('مدیحہ زہرا'),
      m('حبیب رضا'),
      m('شکیب رضا'),
    ]), // VERIFY: seven children on two joined bars (box at the right)
    f('قمر النساء', 'سید عاشق حسین'),
  ]), // VERIFY: تبارک's six children are one wrapped list (three on top, three on the bar below the box)
])

const talibHusain245 = onPage(245, m('طالب حسین', [
  m('مطالب حسین', 'لاولد'),
  mutlub,
  m('آل حسن', [m('اقبال حسین', 'لاولد')]),
  tabarak,
]))

// ═════════════════════════ book page 244 (photo page3) ═════════════════════════

// Kausar-ul-Ansab (1999), printed page 244, محلہ اغوان پور (khandan 43)
// Chart 1 heading: "صفحہ ۲۴۳ سید محب علی بن سید مدد علی"
// Chart 2 heading: "صفحہ ۲۴۳ سید یاد علی بن سید قائم علی"   // VERIFY: father's name reads قائم / نائم
// Both charts continue families begun on page 243. Where a long sibling list wraps onto a second/third bar,
// the rows are listed top row first, each row right to left (VERIFY on each).

// ───────── chart 1: سید محب علی بن سید مدد علی ─────────

// Children of سید معز علی (nine, on one long bar)
const moizAli244 = m('معز علی', [
  m('پرویز علی'),
  f('فرخ بانو'),
  m('تنویر علی'),
  m('عامر علی'),
  m('واصف علی', [f('حیدرہ'), f('عرضیہ')]), // VERIFY: first daughter's name (حیدرہ / صیدرہ)
  f('صبا ولی'), // VERIFY: name reads حبار ولی / صبا ولی; no سید so taken as female
  m('قاسم علی', [m('عامل علی')]),
  f('ہما رولی'),
  m('آصف علی', [f('لبنی آصف')]),
])

// سید امانت علی: two children
const amanatAli244 = m('امانت علی', [f('قمر تاج', 'سید ناصر علی', 'گذری'), m('قمر سلطان')])

// سید شجاعت علی: three daughters
const shujaatAli244 = m('شجاعت علی', [f('نور زہرا'), f('مریم زہرا'), f('سیمی زہرا')])

// سید رحمت علی: five children (bar runs along the top and wraps down the right edge onto a second bar)
const rahmatAli244 = m('رحمت علی', [
  f('شمع زہرا'),
  f('نذر زہرا'),
  f('احباب زہرا', 'سید ضامن الحسن', 'گذری'), // VERIFY: husband's name (ضامن / ضمن); and that these last three hang from رحمت علی's wrapped bar, not from احمد نواز
  f('نذیر زہرا'),
  f('سلمی زہرا'),
])

// سید عزت علی: five children (top bar wraps around a box onto a second bar)
const izzatAli244 = m('عزت علی', [
  m('حیدر نواز', [f('سارہ')]),
  f('ریحانہ یاسمین'),
  m('حسن نواز'),
  m('احمد نواز'),
  f('رخسانہ یاسمین'),
]) // VERIFY: wrapped bar, order of حسن نواز / احمد نواز / رخسانہ یاسمین

// سید مسرور علی: three children
const masroorAli244 = m('مسرور علی', [m('حیدر علی'), f('اسما مسرور'), m('محمد علی')])

// سید ضمانت علی: a line loops round from him to one long bar of seven children, each of which sits directly under
// one of سید مشکور علی's seven children
const zamanatAli244 = m('ضمانت علی', [
  m('حسین نواز'),
  m('علی ہارون', [f('مریم نواز'), m('دانش نواز')]),
  m('حسین نواز'),
  m('علی ضامن', [m('محسن نواز'), f('افشین فاطمہ'), m('رضا نواز')]),
  f('حسین فاطمہ', 'سید ذیشان حیدر', 'مجاپوتہ'),
  m('علی نواز', [m('جعفر نواز'), m('سمیر نواز')]),
  m('عابد نواز', [m('شتر نواز')]), // VERIFY: شتر نواز (شبتر / شہتر)
]) // VERIFY: these seven may instead be the children of مشکور علی's seven sons, one under each (ضیا مشکور -> حسین نواز, منظور علی -> علی ہارون, مسعود علی -> حسین نواز, منصور علی -> علی ضامن, رضا مشکور -> حسین فاطمہ, نسیما -> علی نواز, صبا -> عابد نواز); the drawn loop line ties the bar to ضمانت علی

// سید مشکور علی: seven children on one bar (a long vertical comes down to it)
const mashkoorAli244 = m('مشکور علی', [
  m('ضیا مشکور'),
  m('منظور علی'),
  m('مسعود علی'),
  m('منصور علی'),
  m('رضا مشکور'),
  f('نسیما مشکور'), // VERIFY: printed without سید, but see the VERIFY on ضمانت علی
  f('صبا مشکور'), // VERIFY: as above
])

// سید مسرت علی: four children
const masarratAli244 = m('مسرت علی', [f('ثنا زہرا'), f('دعا زہرا'), f('ولا زہرا'), m('حشمت علی')])

// سید مشرف علی: one daughter
const musharrafAli244 = m('مشرف علی', [f('عارفین فاطمہ')]) // VERIFY: reads عارفین فاطمہ, partly cut by the left edge of the photo

// سید عظمت علی: ten children on one long bar, eldest (right) first
const azmatAli244 = m('عظمت علی', [
  rahmatAli244,
  izzatAli244,
  zamanatAli244,
  masroorAli244,
  mashkoorAli244,
  masarratAli244,
  f('ام البنین', 'سید محمود الحسن حسینی', 'کالی بگڑی'),
  f('ام المتین', 'سید شجاع حسن', 'کٹرہ'), // VERIFY: husband's name and mohalla
  f('امیر زہرا', 'سید مرتضیٰ حسن', 'اغوان پور حال قاضی گلی'), // VERIFY: 'حال' mohalla
  musharrafAli244,
])

// سید حشمت علی: eleven children on one long bar that wraps round at both ends (the right-hand wrap carries عظمت علی,
// the left-hand wrap carries معز علی); listed right to left
const hashmatAli244 = m('حشمت علی', 'امروہہ آکر محلہ کالی بگڑی میں ساکن ہو گئے', [
  f('نفیس فاطمہ', 'سید علی الاقدم', 'گذری'), // VERIFY: husband's name
  azmatAli244,
  f('نرجس بانو', 'سید سماع الحسن', 'کٹرہ'), // VERIFY: husband's name and mohalla
  f('ام لیلی', 'سید شہاب الحسن', 'دربار کلاں'), // VERIFY: husband's name (tiny script)
  shujaatAli244,
  f('کنیز مولائی', 'سید شفیع الحسن', 'گذری'), // VERIFY: husband's name
  f('حسین فاطمہ', 'سید حیدر', 'دربار کلاں'), // VERIFY: husband's full name (reads حیدر ز... , unclear)
  amanatAli244,
  f('شاد بانو', 'سید حمزہ الحسن', 'دانشمندان'), // VERIFY: husband's name
  f('امیر بانو', 'سید حبیب الحسن', 'دربار کلاں'), // VERIFY: husband's name
  moizAli244,
]) // VERIFY: the note in brackets beside حشمت علی reads "(امروہہ آکر محلہ کالی بگڑی میں ساکن ہو گئے)"; first word unclear, and order of عظمت علی among the daughters

// Chart 1 root: سید محب علی بن سید مدد علی, continued from page 243
const muhibAli244 = onPage(244, m('محب علی', [hashmatAli244, f('مریم خاتون', 'سید اظہر علی حسنی', 'کالی بگڑی')])) // VERIFY: husband's name/surname and mohalla

// ───────── chart 2: سید یاد علی بن سید قائم علی ─────────

// سید رفیق حسین: three children
const rafeeqHusain244 = m('رفیق حسین', [m('ظہیر حسن'), f('سکندر بانو'), m('محمود حسن')]) // VERIFY: ظہیر / نظیر

// سید مقصود حسن: two sons
const maqsoodHasan244 = m('مقصود حسن', [m('محمد عباس'), m('ثمر عباس')])

// سید حسن (son of حمید حسن, left end of the second row): seven children on one bar
const hasan244 = m('حسن', [
  f('اختری بیگم', 'سید عباس حیدر', 'مظفر نگر'),
  m('رضوان حیدر'),
  m('عزمان حیدر'), // VERIFY: عزمان / عرفان
  m('وسیم حیدر'),
  f('رضیہ بیگم', 'سید مشیر حسن', 'مظفر نگر'), // VERIFY: name (رضیہ / رضائیہ)
  f('سلمی بیگم'),
  m('چاند میاں'),
])

// سید جمیل حسن: seven children, four on the top bar and three on the second bar of a box
const jameelHasan244 = m('جمیل حسن', [
  f('شہناز بانو'),
  f('رولی بانو'), // VERIFY: رولی / ربی
  m('ضیاء عباس'),
  f('عرشی بانو'),
  m('نظر عباس'), // VERIFY: نظر / فطر
  m('عمران عباس'),
  m('امیر عباس'),
])

// سید مستجاب حیدر: three children
const mustajabHaidar244 = m('مستجاب حیدر', [m('بلال علی'), f('عروج فاطمہ'), m('فہاد علی')])

// سید ذلیشان حیدر: three children
const zeeshanHaidar244 = m('ذلیشان حیدر', [f('سمی'), m('خرم رضا'), f('مومنہ خاتون')])

// سید زاہد حسین: six children on one bar
const zahidHusain244 = m('زاہد حسین', [
  m('ارشد رضا'),
  zeeshanHaidar244,
  m('تحسین رضا'), // VERIFY: تحسین / تخیین
  mustajabHaidar244,
  f('عذرا بیگم', 'سید ریحان اطہر', 'مظفر نگر'), // VERIFY: husband's name
  m('جمال رضا'),
])

// سید حمید حسن: ten children on one bar that wraps up round a box onto a second and a third row
const hameedHasan244 = m('حمید حسن', [
  f('عزیز فاطمہ', 'سید آل نبی', 'اغوان پور'),
  f('امیر فاطمہ', 'سید ابرار حسین', 'اغوان پور'),
  f('گوہر فاطمہ', 'سید عنایت حسین', 'اغوان پور'),
  f('صغیر فاطمہ', 'سید مظاہر حسین', 'اغوان پور'), // VERIFY: husband's name (مظاہر / نظاہر)
  f('ریس فاطمہ', 'سید عباس حسین', 'الہ آباد'), // VERIFY: name (ریس / رئیس)
  m('شاہد حسین', 'لاولد'),
  maqsoodHasan244,
  hasan244,
  jameelHasan244,
  zahidHusain244,
]) // VERIFY: rows of the wrapped bar: top row four daughters, second row ریس..حسن, bottom row (where حمید حسن's own line joins) جمیل حسن and زاہد حسین; the true eldest-first order may start from the bottom row

// سید محمد علی: three children
const muhammadAli244 = m('محمد علی', [rafeeqHusain244, m('احمد حسین', 'لاولد'), hameedHasan244])

// Chart 2 root: سید یاد علی بن سید قائم علی, continued from page 243
const yaadAli244 = onPage(244, m('یاد علی', 'عرف حنانی', [muhammadAli244, m('علی حسن', [f('دختر')])])) // VERIFY: the عرف beside the bar reads عرف حنانی / خیالی; the daughter is only "دختر" (no name)

// ═════════════════════════ book page 243 (photo page2) ═════════════════════════

// Kausar-ul-Ansab (1999), printed page 243: محلہ اغوان پور (khandan 43)
// Charts on this page (headings verbatim):
//   1. صفحہ ۲۴۲ سید بلال حسین بن سید حامد حسین
//   2. صفحہ ۲۴۲ سید خالد حسین بن سید حامد حسین
//   3. صفحہ ہذا سید محمد نقی بن عنایت اللہ
//   4. صفحہ ۲۲ سید نعیم الدین بن سید تاج الدین عرف سید محمد   // VERIFY: the number printed reads ۲۲ (probably ۲۴۲ or similar)

// ───────── Chart 1: بلال حسین بن حامد حسین (continued from page 242) ─────────
const bilalHusain243 = onPage(243, m('بلال حسین', [
  m('بلال حسین'), // VERIFY: eldest son shares the root's name
  f('فاطمہ زہرا'),
  m('جمال حسین'),
  f('طاعت قمر'), // VERIFY: طاعت / طلعت
  m('جلال حسین'),
  f('نگہت قمر'),
  m('افضال حسین'),
  f('عشرت قمر'),
]))

// ───────── Chart 2: خالد حسین بن حامد حسین (continued from page 242) ─────────
const khalidHusain243 = onPage(243, m('خالد حسین', [
  m('جابر حسین'),
  f('صابرہ خاتون'),
  m('عبدالخالق'),
  m('محمد ہاشم'),
  f('ہاشمہ خاتون'),
  m('شاہد'),
  f('عائشہ خاتون'),
  m('محمد عامر'),
]))

// ───────── Chart 3: محمد نقی بن عنایت اللہ (his father's line is drawn in chart 4 below) ─────────
const muhammadNaqi243 = onPage(243, m('محمد نقی', [
  m('رستم علی', [m('رمضان علی', [m('قائم علی', [yaadAli244])])]),
  m('روشن علی', 'لاولد'),
  m('امان علی', [
    m('مشیت علی', [
      m('انور علی', [m('فیض علی', 'لاولد')]),
      m('معین الدین', 'لاولد'),
      m('احمد علی', [
        m('مشیت علی', 'لاولد'),
        m('محمد حسین', 'سید محب علی'), // VERIFY: second name printed under محمد حسین (عرف محب علی?)
      ]),
    ]),
    m('رجب علی', 'لاولد'),
  ]),
]))

// ───────── Chart 4: نعیم الدین بن تاج الدین عرف سید محمد ─────────

// Right branch: بدر الدین's descendants

const hussainQutb = m('حسین', 'عرف قطب', [ // VERIFY: عرف قطب could belong to معظم beside him
  m('منور علی', [m('ابوالحسن', 'لاولد'), m('نور', 'لاولد')]),
  m('حسن', [m('محمد عوض', 'لاولد'), m('عبداللہ', 'لاولد')]),
  m('رحمت اللہ', [
    m('شجاعت علی', 'لاولد'),
    m('غریب اللہ', [
      m('ہدایت اللہ', [
        m('عزیز اللہ', [
          m('مظفر علی', [
            // جعفر علی's two sons are drawn in a box on the lower right
            m('جعفر علی', [
              m('غضنفر حسین', [m('موسیٰ رضا', 'لاولد')]),
              m('علمدار حسین', [m('ذوالفقار حسین', 'لاولد')]),
            ]),
            m('نذیر علی', [
              m('بشارت حسین', 'لاولد'),
              m('ظہور حسین', 'لاولد'),
              m('احمد حسین', 'لاولد'),
              talibHusain245,
            ]),
          ]),
        ]),
      ]),
      m('خبیر اللہ', 'لاولد'),
    ]),
  ]),
  m('مظفر علی', [
    // drawn with a connector round to the bar above (فتح علی، مدد علی، خضر علی)
    m('غضنفر علی', [
      m('فتح علی', 'لاولد'),
      m('مدد علی', [
        m('محمد امین', [
          m('مدد علی', [
            m('مہدی حسن'),
            muhibAli244,
          ]),
          m('منور علی', [f('دختر')]),
        ]),
        m('شمیم', [f('دختر')]), // VERIFY: name reads شمیم / شعیم
      ]),
      m('خضر علی', 'لاولد'),
    ]),
  ]),
])

const badrUddin243 = m('بدر الدین', [
  m('احمد', [m('عارف', 'لاولد')]),
  m('حسن', [m('عبدالغنی', 'لاولد'), m('ابراہیم', 'لاولد')]),
  m('حسین', 'عرف الوالحسن', [ // VERIFY: عرف الوالحسن could belong to منصور beside him
    m('مرتضیٰ', 'لاولد'),
    m('نذیر اللہ', [
      m('عبدالعلی', 'لاولد'),
      m('ابوالحسن', [
        m('شاہ جمال', 'لاولد'),
        m('نعمت اللہ', [
          m('عنایت اللہ', [muhammadNaqi243]),
          m('ہدایت اللہ', 'لاولد'),
        ]),
        m('شاہ جلال', 'لاولد'),
      ]),
      m('عبدالستار', 'لاولد'),
      m('عبدالمحسن', [
        m('عبدالباسط', [
          m('بدر الدین', 'لاولد'),
          hussainQutb,
          m('معظم', 'لاولد'),
        ]),
      ]),
    ]),
    m('عبداللہ', 'لاولد'),
  ]),
  m('منصور', [m('عبدالغفور', 'لاولد'), m('عبدالشکور', 'لاولد')]),
])

// Left branch: بہیک's descendants
const gumanAli243 = m('گمان علی', [
  m('عاشق علی', [
    m('فرزند علی', [
      m('عجائب علی', 'لاولد'),
      m('نثار حسین', [m('یوسف حسین')]),
    ]),
    // عبدالعلی's four sons: two on the box top bar, two on the bar below it (one sibling list)
    m('عبدالعلی', [
      m('امجد حسین'),
      m('تہور علی'), // VERIFY: تہور / ظہور
      m('مقبول حسین'),
      m('ولایت حسین'),
    ]),
  ]),
  m('نجیب اللہ', [f('دختر')]),
  m('مقدد علی', [m('قمر علی', 'لاولد')]), // VERIFY: مقدد علی spelling
])

const rahimUllah243 = m('رحیم اللہ', [
  m('عظیم الدین', 'لاولد'),
  m('اشرف علی', [
    m('بادشاہ علی', 'لاولد'),
    m('مدد علی', [
      m('ناد علی', [
        m('ریاست حسین', 'مفقود الخبر'),
        m('شرافت حسین', [m('غضنفر حسین', 'مفقود الخبر')]),
      ]),
      m('شمشاد علی', 'لاولد'),
      m('آل علی', [
        m('آل حسن', 'لاولد'),
        m('مبارک علی', 'لاولد'),
        m('فدا علی', 'لاولد'),
      ]),
    ]),
    m('انور علی', 'لاولد'),
    m('ناصر علی', 'لاولد'), // second row of the same bar, joined by the left-hand connector
  ]),
  m('فخر الدین', [f('دختر')]),
])

const naeemUddin243 = onPage(243, m('نعیم الدین', [
  m('فرض اللہ', [
    m('حسن گنی بہوڑ', [ // VERIFY: name reads حسن گنی بہوڑ
      badrUddin243,
      hamid245,
    ]),
  ]),
  m('بہیک', [
    m('خیرات علی', [
      m('ظہور علی', [
        m('اعجاز حسین', [m('انوار حسین', 'لاولد')]),
        m('اشتیاق حسین', 'لاولد'),
        m('بشیر علی', [f('دختران', undefined, undefined, 'بیٹیاں، نام نہیں دیے')]),
      ]),
      m('فیاض علی', 'لاولد'),
    ]),
    f('بدو', undefined, undefined, 'مسماۃ'),
    m('منقو', [ // VERIFY: name unclear (منقو / مسقو)
      m('سمجن', [gumanAli243, rahimUllah243]),
    ]),
  ]),
]))

// ═════════════════════════ book page 242 (photo page1) ═════════════════════════

// Kausar-ul-Ansab (1999), printed page 242: اغوان پور (khandan 43)
//
// Chart heading (verbatim, one chart on the page):
//   "صفحہ ۲۰۶ سید جان بن سید وجیہ الدین"
//
// Layout notes:
//  - Where a father's children sit on a wrapped or boxed pair of bars, the children are listed bar by bar
//    (right to left inside each bar, top bar first). Where the wrap joins at the left end the second bar may
//    really be read left to right; the order within such a wrap is therefore uncertain.
//  - Single-line descents drawn with arrows (e.g. عبداللہ -> میر محمد -> ...) are written as one child each.
//  - Pen crosses (x) on the lines are the reader's marks and are ignored.
//  - Names printed without "سید" are taken as females, except where the name is plainly a man's (VERIFY).

// ───────── سید نعمت اللہ's line: a single arrow chain down to امانت علی, whose two sons are drawn below ─────────

const asgharAli242 = m('اصغر علی', [m('نذر حسین', 'لاولد'), m('علی حسین', 'دختران')])

const qaimAli242 = m('قائم علی', [m('منور علی', 'دختران'), asgharAli242, m('برخوردار علی', 'لاولد')])

const amanatAliA242 = m('امانت علی', [qaimAli242, m('وزیر علی', 'مفقود الخبر')]) // VERIFY: وزیر علی's note is printed "معفوذ الخبر"

const niamatullah242 = m('نعمت اللہ', [
  m('عبداللہ', [m('میر محمد', [m('حسن اللہ', [m('لطف علی', [m('حسن علی', [amanatAliA242])])])])]),
])

// ───────── سید بڑے's line: arrow chain معظم -> امانت علی -> نجات علی -> نجف علی -> اکبر حسین ─────────

// واحد حسین (the elder son of صابر حسین): eight children on two joined bars
const wahidHusainA242 = m('واحد حسین', [
  // top bar
  m('سرفراز حسین'),
  f('وسیمہ خاتون', 'دلدار حسین'), // VERIFY: husband printed "زوجہ دلدار حسین" without سید
  m('ساجد حسین'),
  // second bar (joined to the first at its right end)
  m('اظہار حسین', [
    m('یامین'), // VERIFY: printed without سید but a man's name
    m('محمد عمران حسین'),
  ]),
  f('میمونہ خاتون', 'سید عبد الحی', 'دربار کلاں'), // VERIFY: husband's name (عبد الحی / عبد الہدیٰ)
  f('جمیلہ خاتون', 'سید شجاع الحق', 'بازار خٹ'), // VERIFY: mohalla (بازار خٹ / بازار چٹ)
  m('ذوالفقار حسین', [
    m('امرن'), // VERIFY: name hard to read (امرن / امین) and printed without سید
    m('سلیم حسین'),
  ]),
  f('نسیمہ خاتون', 'اختر علی', 'نوبت خانہ'), // VERIFY: husband printed without سید
])

// طاہر حسین: five daughters on the top bar, two sons on the bar bent off its left end
const tahirHusain242 = m('طاہر حسین', [
  f('عائشہ خاتون', 'سید قمر الدین', 'میرٹھ'),
  f('زینت خاتون', 'سید محمد سلمان', 'اغوان پور حال دربار کلاں'),
  f('عاملہ خاتون', 'سید خلق حسن کاظمی', 'کشلوئی'), // VERIFY: mohalla (کشلوئی / کشکولی)
  f('شافعہ خاتون', 'سید مشہود حسن', 'حال ...'), // VERIFY: the husband's surname and the "حال ..." place are hard to read
  f('طاہرہ خاتون', 'سید شکیل احمد', 'دربار کلاں'),
  m('راشد حسین', [f('رخسانہ پروین'), m('اشرف علی'), f('ام سلمیٰ')]),
  // ناظر حسین: eight children on one bar
  m('ناظر حسین', [
    m('مناظر حسین'),
    m('مطاہر حسین'),
    f('مطاہرہ خاتون'),
    m('امجد حسین'),
    m('ماہر حسین'),
    f('ماہرہ خاتون'),
    m('ارشد حسین'),
    m('اصغر حسین'),
  ]),
])

// شاہد حسین -> رئیسہ خاتون and واحد حسین (the second one), whose six children hang from one long bar
const wahidHusainB242 = m('واحد حسین', [
  m('محمد طارق'),
  f('فرح ناز'),
  m('محمد خالد'),
  f('رخسانہ'), // VERIFY: رخسانہ / رضانہ
  m('حمورانی'), // VERIFY: name (حمورانی / حمیدانی)
  f('ہماناز'),
])

const shahidHusain242 = m('شاہد حسین', [f('رئیسہ خاتون'), wahidHusainB242])

// زاہد حسین's line
const anasHusain242 = m('انس حسین', [
  m('انیس احمد'),
  f('عزالہ تبسم'),
  m('شعیب احمد'),
  f('نذرہ تبسم'),
  m('فیصل احمد'),
  f('مبشرہ'),
  m('سہیل احمد'),
  m('محمد نشہ'), // VERIFY: last name (محمد نشہ) and printed without سید
])

const khalladHusain242 = m('خلاد حسین', [
  f('حمیرا'),
  f('شمائلہ'),
  f('بشریٰ'),
  f('نسیم'), // drawn on a hooked second bar at the left end
])

const ashrafHusain242 = m('اشرف حسین', [m('مشرف حسین'), f('جلیلہ خاتون')])

// حامد حسین: nine children on a boxed pair of bars (the box's bottom edge is the second bar)
const hamidHusain242 = m('حامد حسین', [
  // top bar of the box
  f('خالدہ خاتون', 'سید محمد تقی', 'میرٹھ'),
  bilalHusain243,
  khalidHusain243,
  f('عادلہ خاتون', 'سید محمود اشرف', 'میرٹھ'),
  // bottom bar of the box
  f('صالحہ خاتون', 'سید اسد علی', 'مظفر نگر'),
  khalladHusain242,
  ashrafHusain242,
  f('مہاجرہ خاتون', 'سید ناظر حسین', 'اغوان پور حال دربار کلاں'),
  anasHusain242, // VERIFY: انس حسین hangs off the right end of the bottom bar; his place in the order is uncertain
])

const muhammadSalman242 = m('محمد سلمان', [
  m('فضل الرحمن'),
  f('عالیہ خاتون'),
  m('حفیظ الرحمن'),
  f('عابدہ خاتون'),
  m('عزیز الرحمن'),
  f('نادرہ خاتون'),
])

const muhammadIdrees242 = m('محمد ادریس', [m('محمد ظفر'), m('محمد اظہر'), m('محمد مظفر'), m('محمد منور')])

// ماجد حسین: six children on two joined bars
const majidHusain242 = m('ماجد حسین', [
  muhammadSalman242,
  f('خدیجہ خاتون', 'احمد سعید'), // VERIFY: husband printed "زوجہ احمد سعید" without سید
  m('محمد لقمان'),
  muhammadIdrees242,
  m('محمد امان'),
  m('محمد عثمان'),
])

const muhammadQasim242 = m('محمد قاسم', [
  m('محمد قمر'),
  f('ناہمیہ خاتون'), // VERIFY: name (ناہمیہ / ناجمیہ)
  m('محمد اسلم'),
  f('فاطمہ زہرا'),
  m('محمد انور'),
])

const muhammadTaiyab242 = m('محمد طیب', [
  f('ذکیہ خاتون'), // VERIFY: ذکیہ / زکیہ
  f('طیبہ خاتون'),
  muhammadQasim242,
  m('محمد ناصر'),
  m('محمد اعظم'),
  f('مطیبہ خاتون', 'افسر علی', 'چلہ'), // VERIFY: name (مطیبہ / طیبہ); husband printed without سید; mohalla "چلہ"
  m('محمد نجم', [m('غفران نجم')]),
])

// زاہد حسین: the first four are on the top bar; محمد طیب and ماجد حسین on a bar bent off its left end
const zahidHusain242 = m('زاہد حسین', [
  hamidHusain242,
  f('کلثوم خاتون', 'سید طاہر حسین', 'اغوان پور حال دربار کلاں'),
  f('زہرا خاتون', 'سید جعفر حسین', 'دربار کلاں'),
  f('راشدہ خاتون', 'سید مرتضیٰ حسین', 'چاہ غوری'),
  muhammadTaiyab242, // VERIFY: محمد طیب and ماجد حسین hang from a bar bent off the left end of the top bar (children of زاہد?)
  majidHusain242,
])

// شاکر حسین: seven children drawn in a box of two bars
const aamilHusainB242 = m('عامل حسین', [m('محمد عادل'), f('فرحانہ')])

const kamilHusain242 = m('کامل حسین', [
  f('صائمہ فاطمہ'),
  m('محمد فاضل'), // VERIFY: محمد فاضل
  f('ممتاز فاطمہ'), // VERIFY: printed "ممناز"
])

const shakirHusain242 = m('شاکر حسین', [
  // top bar
  m('عامل حسین'), // VERIFY: two sons both read عامل حسین (the other is on the second bar)
  f('نظام فاطمہ'), // VERIFY: نظام / لظام
  f('مہتاب فاطمہ'),
  f('اعجاز فاطمہ'),
  // second bar (box bottom)
  aamilHusainB242,
  f('نایاب فاطمہ', 'سید راشد حسین', 'اغوان پور حال دربار کلاں'),
  kamilHusain242,
])

const raghibHusain242 = m('راغب حسین', [
  m('نوید انجم'),
  f('بشریٰ خاتون'),
  f('ثنا انجم'), // VERIFY: printed "شنا انجم" (ثنا / شنا / شاہ)
])

const baqirHusain242 = m('باقر حسین', [
  // top bar
  f('تنویر فاطمہ'),
  m('نسیم اختر'), // VERIFY: reads like منیم / نسیم / نعیم; printed with سید
  f('عافیہ پروین'),
  // second bar (box bottom)
  m('نعیم اختر'),
  f('سعدیہ پروین'),
])

// عابد حسین's children hang from the bottom edge of the box round the first four of اکبر حسین's children
const abidHusain242 = m('عابد حسین', [zahidHusain242, baqirHusain242, f('بریرہ خاتون'), raghibHusain242])

const sabirHusain242 = m('صابر حسین', [
  wahidHusainA242,
  tahirHusain242,
  f('حاجرہ خاتون', 'سید حامد حسین', 'دربار کلاں'),
  f('البعہ خاتون'), // VERIFY: name (البعہ / الربعہ)
  shahidHusain242,
])

const zaminHusain242 = m('ضامن حسین', [f('عابدہ خاتون'), shakirHusain242])

const akbarHusain242 = m('اکبر حسین', [
  f('کبریٰ خاتون', 'سید قمر علی تقوی', 'دانشمندان حال دربار کلاں'), // VERIFY: husband's name (قمر علی / قمر الدین)
  abidHusain242,
  sabirHusain242,
  zaminHusain242,
])

// the chain معظم -> امانت علی -> نجات علی -> نجف علی -> اکبر حسین is drawn with arrows, one child each
const bareLine242 = m('بڑے', [
  m('معظم', [
    m('امانت علی', [
      m('نجات علی', [
        m('نجف علی', [akbarHusain242]), // VERIFY: first letter of نجف علی (printed like تحف / بحف)
      ]),
    ]),
  ]),
])

// ───────── the page's root ─────────

// سید جان بن سید وجیہ الدین (headed "صفحہ ۲۰۶"). His son سیدن شاہ has two sons: بڑے (right) and نعمت اللہ
const jaan242 = m('جان', [
  m('سیدن شاہ', [bareLine242, niamatullah242]), // VERIFY: بڑے is hard to read (برنے / بڑے)
])

// ═════════════════════════ the khandan ═════════════════════════

const khandan: BookKhandan = {
  serial: 43,
  mohalla: 'Aghwanpur',
  trees: [
    { page: 242, father: 'وجیہ الدین', root: jaan242 },
    { page: 243, father: 'تاج الدین عرف سید محمد', root: naeemUddin243 },
    { page: 246, father: 'ظہیر حسن', root: shafaatHusain246 },
    { page: 249, father: 'خادم عرف طلبہ', root: umarZindaPir249 },
    { page: 251, father: 'خادم عرف ظہیر', root: qaziMukhtar251 },
  ],
}

export default khandan

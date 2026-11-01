// Kausar-ul-Ansab (1999), pages 199–212: محلہ حقانی
// Khandan 37 in the book's index: اولاد سید محمد علی بن سید میر علی
//
// Book pages and the charts on them (photos page1..page15 of the khandan's folder; photo page3 is a
// second shot of book page 200, see below):
//   199  one chart: سید محمد علی بن سید میر علی (headed "صفحہ ۲۲") — the khandan's root
//   200  three charts, all headed "صفحہ ۱۹۹": سید عاشق حسین بن سید سجاد حسین, سید بشیر علی بن سید نظیر علی,
//        سید عطا حسین بن سید شرف الدین علی
//   201  four charts: سید رضا حسین (headed "صفحہ ۲۰۰"), سید ارشاد علی بن سید ذوالفقار علی ("صفحہ ۱۹۹"),
//        سید فضل بن سید جلال and سید محمد طاہر بن سید خضر (both headed "صفحہ ۲۲" with a digit possibly cut off)
//   202  one chart: سید میر علی بن سید غلام علی ("صفحہ ۲۰۱")
//   203  five charts: سید نثار مہدی بن سید ضامن علی and سید ضمیر حسن بن سید قاسم حسین (both "صفحہ ۲۰۲"),
//        سید عشرت علی and سید فرزند علی, both sons of سید جعفر علی ("صفحہ ہذا"), and
//        دیوان سید الیاس عرف ننجھو بن سید عبدالستار (heading page ۲۰۴ or ۲۴, unclear)
//   204  two charts, both headed "صفحہ ۲۰۳": سید علی حیدر بن سید علی اصغر, سید محمد علی عرف فدا علی بن سید نور علی
//   205  three charts: سید نثار حسین بن سید نذر حسین ("صفحہ ۲۰۴"), سید علی اکبر عرف بسا بن سید میر بہادر and
//        سید عبدالرحیم عرف علی اصغر (father's name not printed), both "صفحہ ۲۰۳"
//   206  one chart: سید ابوبکر (عرف بدرالدین) بن سید محمد عرف تاج الدین (heading page "۲۲؟")
//   207  one chart: سید مدد علی بن سید رستم علی
//   208  three charts: سید حامد حسن بن سید حاجی حسن ("صفحہ ۲۰۷"), سید نادر علی بن سید دلاور علی ("صفحہ ۲۰۷"),
//        سید حمایت علی بن سید محمد علی ("صفحہ ۲۰۶")
//   209  three charts, all headed "صفحہ ۲۰۸": سید مظفر حسن and سید ظفر حسن (sons of دلشاد علی),
//        سید ممتاز علی بن سید امداد علی
//   210  three charts: سید متبرک حسن بن سید تبارک حسن and سید سبط حسن بن سید ممتاز علی (both "صفحہ ۲۰۹"),
//        سید ارشاد علی بن سید شہامت علی ("صفحہ ۲۰۸")
//   211  three charts: سید نجم الحسن بن سید باقر حسین and سید زاہد حسین بن سید ارشاد علی (both "صفحہ ۲۱۰"),
//        سید عبدالکریم بن سید اسمٰعیل ("صفحہ ۲۰۳")
//   212  two charts, both headed "صفحہ ۲۱۱": سید عبدالرزاق (عرف مشرف حسین) بن سید فرزند علی,
//        سید احمد علی بن سید محمد علی
//
// How the charts are joined: wherever a page draws a man as a stub ("صفحہ ... پر") and the named page has a
// chart rooted at him, the stub is replaced by that chart's root const. Every chart root other than the first is
// wrapped in onPage(<its own book page>, ...), so its descendants import with that page. Chart roots that no
// stub reaches are separate trees with a `father`: فضل (father جلال) and محمد طاہر (father خضر) on 201,
// دیوان الیاس (father عبدالستار) on 203 and ابوبکر (father محمد عرف تاج الدین) on 206.
//
// FOR A HUMAN TO CHECK
//  * Printed page numbers differ from the brief everywhere. Each photo's own header was followed, so the book
//    pages are 199–212 in photo order, with no page missing. (Photo page10 was reported with a bare file name;
//    its header prints 207.)
//  * Duplicate photos: photo page2 and photo page3 are two shots of the SAME book page 200. Photo page2 is
//    transcribed here; photo page3 was not used. They disagree on a few readings: ناطقہ خاتون's husband (واجد
//    here, واحد on page3), the last daughter of امانت حسین (مزنبہ here, مرزیہ on page3), طیبہ خاتون / طہیرہ خاتون
//    under آل نبی, علی تقی / علی نقی, گل زہرا / کمل زہرا, and the spelling of several mohallas (بچدرہ / بچھدرہ,
//    حال نوگنیاں / حال نو گیال). Compare the two photos for those. Photo page9 is NOT a duplicate (it is page 206).
//  * HEADING vs DRAWING, رضا حسین: page 200 draws him under صفدر حسین (بہادر حسین -> صفدر حسین -> رضا حسین); the
//    page-201 chart's heading gives his father as مسعود حسن by one agent's reading, while the agent who read the
//    photo says the heading actually reads "صعدر حسین" (= صفدر). The drawing is kept; if the heading really says
//    مسعود حسن, move him out of صفدر حسین's list and make him a tree with father: 'مسعود حسن'.
//  * HEADING vs DRAWING, علی اکبر عرف بسا: page 203 draws his father as میر بھاون, the page-205 heading says
//    بن میر بہادر. The heading was followed (the parent is written میر بہادر). The عرف is بسا on the heading and
//    لبسا on the drawing.
//  * Two men called عبدالکریم hang off page 203: one is the stub under اسمعیل (the chart on page 211, headed
//    "بن اسمٰعیل", which is wired in) and one is عبدالکریم عرف علی اکبر under سعید خان with his own family on that
//    page. They may be the same man drawn twice; they are kept as printed.
//  * Charts whose heading page number is a guess: فضل and محمد طاہر (both "صفحہ ۲۲(?)", probably a longer number,
//    so nothing refers to them), دیوان الیاس (۲۴ or ۲۰۴), ابوبکر (۲۲؟), and the root chart (صفحہ ۲۲, book page 22 is
//    outside this khandan). Their fathers come from the headings only.
//  * Stubs left as stubs, because their pages are outside 199–212: چاند عرف ہیگا (239), جان (242), محمد (224) and
//    خوندمیر عرف اخوان میر (227) on page 206 (the last two are in khandan 39's range: its page 224 is محمد بن علی
//    and its page 227 is خواجہ نذیر عرف اخوان میر), and محمد منور (213) on page 205. The page numbers on 206
//    for 239, 242 and 224 are hard to read.
//  * Bars cut off by the photo edge: the rightmost child of یوسف حسن on page 211 (ابوالبجاہ); کنیز فاطمہ's husband
//    on 211 is partly hidden by the border; several names on page 209 and 210 are cut at the page edge.
//  * Wrapped sibling bars (a bar that turns down into a box and runs back along its bottom edge) are read as ONE
//    list, top row first. Every such join is marked VERIFY. The biggest are ولی حیدر's 13 children (page 204),
//    شان حیدر's 11 (212), ناطق حسین's 13 and شجاعت علی's 13 (200), and the long snake bar of وصی احمد (204).
//  * Hardest pages: 201 (the boxes under مصطفیٰ احسن), 204 (وصی احمد's bar), 206 (the long arrow chain from
//    شرف الدین to سراج حسین and the wrapped bars of مجاء الحسن, معراج الحسن, نسیم حیدر) and 209.
//  * Daughters printed only as "دختر" keep that as their name. Husbands printed without سید are kept without it.
//  * تنویر حیدر appears both as an unexpanded son of شبیہ حیدر شاہ (nijmulHasan211) and with three children under
//    شباہت حسین (zahidHusain211); kept separate, probably two different men.

import { f, m, onPage, type BookKhandan } from './book'

// ═════════════════════════ book page 212 (photo page15) ═════════════════════════
// Khandan 37, محلہ حقانی. Printed book page 212 (photo page15; the task header said 206, the page itself prints 212).
//
// Chart 1: heading "صفحہ 211  سید عبدالرزاق (عرف مشرف حسین) بن سید فرزند علی"  -> abdurRazzaq212
// Chart 2: heading "صفحہ 211  سید احمد علی بن سید محمد علی"                      -> ahmadAli212
//
// Wrapped/boxed sibling lists are written as one list, eldest first.
// Nothing on this page is continued onto another page (both charts are continued FROM page 211).

// ───────────────────────── chart 2: سید احمد علی بن سید محمد علی ─────────────────────────

// شان حیدر: four children in a box on the top bar, the box's bottom edge wraps to a second bar with seven more.
const shanHaidar212 = m('شان حیدر', [
  f('حسن فاطمہ'),
  f('درشہوار'),
  m('محمد نقی'), // VERIFY: reads like محمد نقی / محمد تقی; the next row also has a محمد تقی
  m('محمد منتقی'), // VERIFY: منتقی / متقی
  m('محمد تقی'),
  f('یاسمین فاطمہ', 'سید سلیم محمد', 'جلالی'),
  f('نرجس فاطمہ', 'سید زین العابدین حیدر', 'شفاعت پوتہ'),
  f('آل فاطمہ', 'سید ناصر جمال', 'چنیوڑہ'), // VERIFY: husband's name and mohalla
  f('ریاض فاطمہ', 'سید جعفر رضا', 'چاہ شور'),
  f('محمد بانو', 'سید عاقل عباس'),
  f('گوہر بانو', 'سید علی حیدر', 'نگڑہ'), // VERIFY: mohalla (نگڑہ / نکڑہ)
]) // VERIFY: the two rows are read as one sibling list of 11 (box bottom edge drawn as the second bar)

const ibnHaidar212 = m('ابن حیدر', [
  f('گلزار فاطمہ'),
  f('نگہت فاطمہ'),
  m('محمد علی', [m('افتخار علی'), m('احمد علی'), m('حسن علی')]),
  f('برجیس فاطمہ', 'سید غضنفر محمد', 'جلالی'), // VERIFY: husband's name
])

const baniHaidar212 = m('بنی حیدر', [
  shanHaidar212,
  f('ذہین فاطمہ', 'سید ذکی حیدر', 'بھنڈیڑی'), // VERIFY: mohalla
  f('شان فاطمہ', 'سید نصرت حسین', 'شفاعت پوتہ'),
  ibnHaidar212,
])

const ahmadAli212 = onPage(212, m('احمد علی', [
  m('علی حیدر', 'لاولد'),
  baniHaidar212,
  f('کنیز زہرا', 'سید قربان حسین', 'حقانی'),
  f('کنیز فضہ', 'سید محسن علی', 'حال نوگنیاں'), // VERIFY: name (فضہ / فصنہ)
  f('ساجدہ خاتون', 'سید سجاد حسین', 'قاضی زادہ'),
]))

// ───────────────────────── chart 1: سید عبدالرزاق عرف مشرف حسین بن سید فرزند علی ─────────────────────────

// عبدالحق
const shabbir212 = m('شبیر حسین', [
  m('شاہد حسین', [
    m('عامر حسین', [f('سیما بانو')]),
    m('مشبر حسین'), // VERIFY: مشبر / مشیر
    m('کاشف حسین'),
  ]),
  f('عابدہ خاتون', 'سید ذی وقار حیدر'),
])

const abulQasim212 = m('ابوالقاسم', [
  m('علی محتشم', [f('ندرت بانو')]),
  m('علی احتشام'),
  m('علی ہاشم', [f('عروج فاطمہ'), m('علی امام'), f('قرۃ العین')]),
])

const maqbool212 = m('مقبول حسین', [
  m('مہدی حسن'),
  m('افتخار حسن'),
  f('منہیدہ خاتون', 'سید آل حسن', 'دانشمندان'), // VERIFY: name (منہیدہ / مہیدہ)
  f('ساجدہ خاتون', 'سید محمود حسن', 'پیلی بھیت'),
])

const yaqoob212 = m('یعقوب حسین', [
  m('تنویر سجاد'),
  m('حسین جعفر'),
  f('سعیدہ کوثر'),
  m('حسن جعفر'),
  m('محمد حسنین جعفر', [
    m('عمران حسین'),
    m('عشرت حسین'), // VERIFY: عشرت / عنترت
    m('عباس حسین'),
    m('طلعت عنبر'), // VERIFY: may be two names (طلعت / عنبر)
    m('عرفان حسین'),
  ]),
])

const abdulHaq212 = m('عبدالحق', [
  f('ذائرہ خاتون', 'سید محمود حسن'), // VERIFY: ذائرہ / ذاکرہ
  shabbir212,
  abulQasim212,
  maqbool212,
  yaqoob212,
])

// عبدالقیوم
const nooruLHasan212 = m('نور الحسن', [
  m('طاہر حسن', [
    f('کنیز حیدر'),
    m('عسکری حسین'),
    m('نصرت حیدر'),
    m('اقبال حیدر'),
  ]),
])

const abdulQayyum212 = m('عبدالقیوم', [
  m('عزیز الحسن', [
    m('رئیس الحسن'),
    m('انیس الحسن'),
    m('ادریس الحسن'),
    f('رئیسہ خاتون'),
    f('انیسہ خاتون', 'سید مصطفیٰ حسن', 'پچدرہ'), // VERIFY: mohalla spelled بچیدرہ
  ]),
  m('فضل حسین', [
    f('ہاشمہ خاتون', 'سید طاہر حسین'), // VERIFY: husband's name (طاہر / ظاہر)
    f('فاطمہ خاتون', 'سید ابراہیم حسین', 'نگڑہ', 'زوجہ حکیم'), // VERIFY: mohalla and the "حکیم" title
    f('سلمہ خاتون', 'سید لیاقت حسین رضوی', 'لکھنؤ'),
    f('قاسمہ خاتون', 'سید یوسف حسن', 'حقانی حال گذری'),
    m('نقی حیدر', [
      m('حیدر عباس'),
      f('نرجس خاتون'),
      m('کوثر عباس'),
      m('حسن عباس'),
      f('ندا فاطمہ'),
    ]),
    f('شان زہرا'),
    f('عالمہ خاتون'),
  ]),
  m('حامد حسین', [
    f('شمع حیدر', 'سید ظہیر عباس', 'دانشمندان'), // VERIFY: husband's name (ظہیر / ظفر)
    f('نجمہ شاہین', 'سید محمد جعفر', 'دانشمندان'),
  ]),
  f('خدیجہ خاتون', 'سید مبارک حسین زیدی', 'گذری'),
])

// انوار حسین (and نور الحسن): the two youngest sons
const anwarHusain212 = m('انوار حسین', [
  m('مظفر حسین', 'لاولد'),
  m('جعفر حسین', [f('تحسین فاطمہ'), m('ابن حسن'), f('نجمی فاطمہ')]), // VERIFY: ابن حسن / ابن حسین
  f('فاطمہ خاتون', 'سید مجاور حسین', 'نگڑہ'), // VERIFY: mohalla (نگڑہ / نکڑہ)
])

const abdurRazzaq212 = onPage(212, m('عبدالرزاق', 'عرف مشرف حسین', [
  abdulHaq212,
  abdulQayyum212,
  f('ہاجرہ خاتون', 'سید اعجاز حسن', 'حقانی حال گذری'),
  f('کنیز سیدہ', 'سید امیر حسن', 'مجاپوتہ'),
  nooruLHasan212,
  anwarHusain212,
]))

// ═════════════════════════ book page 211 (photo page14) ═════════════════════════
// Kausar-ul-Ansab (1999), printed page 211: محلہ حقانی, khandan 37 (folder: aulad syed muhammad ali bin syed mir ali, page14)
// Three charts on this page:
//   1. Top:    "صفحہ ۲۱۰ سید نجم الحسن بن سید باقر حسین"  (root نجم الحسن, father باقر حسین)  -> nijmulHasan211
//   2. Middle: "صفحہ ۲۱۰ سید زاہد حسین بن سید ارشاد علی"  (root زاہد حسین, father ارشاد علی)   -> zahidHusain211
//   3. Bottom: "صفحہ ۲۰۳ سید عبدالکریم بن سید اسمٰعیل"    (root عبدالکریم, father اسمٰعیل)     -> abdulKarim211
// Two photographs sit between charts 2 and 3 (captions "شان حیدر بن بنی حیدر" and "محمد علی ولد ابن حیدر"); not part of the tree.
// Pen crosses (x) are ignored.

// ───────────────────────── chart 2: زاہد حسین ─────────────────────────

// Nine children on one bar (eldest = rightmost): شہادت حسین, عقیقہ, طریقہ, صدیقہ, حدیثہ, خلیقہ, توفیقہ, مجاہد حسین, شباہت حسین.
const shahadatHusain211 = m('شہادت حسین', [
  m('شباب حیدر', [m('شاہنواز حیدر')]),
  f('نسیم فاطمہ'),
  m('امام حیدر', [m('انعام حیدر')]), // VERIFY: انعام / العام (printed العام حیدر)
  f('معراج فاطمہ', 'سید اعجاز حسین', 'دربار کلاں'),
  m('نسیم حیدر', [
    m('وسیم حیدر'),
    f('انتظار فاطمہ'),
    m('عظیم حیدر'),
    f('ارشاد فاطمہ'),
  ]),
  f('امام فاطمہ', 'سید حسین محمد', 'قاضی زادہ'), // VERIFY: husband's name (حسین محمد / محمد حسین)
  m('محمد حیدر'),
])

const mujahidHusain211 = m('مجاہد حسین', [
  m('محمد علی مہدی'),
  f('ماہ زہرا', 'سید رضا حسین', 'گذری'),
  m('محمد حسن مہدی'), // VERIFY: مہدی / مہدوی
])

const tanveerHaidar211 = m('تنویر حیدر', [
  f('نشاط زہرا'),
  m('ضیا حیدر'),
  f('اسما زہرا'),
])

const shabahatHusain211 = m('شباہت حسین', [
  m('شجاعت حسین', 'لاولد'),
  f('سلیقہ خاتون', 'سید شمیم حیدر', 'لکڑہ'),
  tanveerHaidar211,
  f('انجم زہرا', 'سید باقر رضا', 'کٹرہ غلام علی'),
])

const zahidHusain211 = onPage(211, m('زاہد حسین', [
  shahadatHusain211,
  f('عقیقہ خاتون', 'سید تصور حسین', 'لکڑہ'),
  f('طریقہ خاتون', 'سید غلام سبطین', 'دانشمندان'), // VERIFY: husband's name (سبطین / سیدین); طریقہ printed طرلیقہ
  f('صدیقہ خاتون', 'سید عتیق حسن', 'گذری'),
  f('حدیثہ خاتون', 'سید اکرام حسین', 'لکڑہ'),
  f('خلیقہ خاتون', 'سید مصاحب حسین', 'سرسی'),
  f('توفیقہ خاتون', 'سید شاہد حسین', 'حقانی'),
  mujahidHusain211,
  shabahatHusain211,
]))

// ───────────────────────── chart 1: نجم الحسن ─────────────────────────

const nijmulHasan211 = onPage(211, m('نجم الحسن', [
  m('شبیہ حیدر شاہ', [m('تنویر حیدر')]), // VERIFY: a تنویر حیدر with three children is also drawn in chart 2 under شباہت حسین; unclear whether it is the same man
  f('خورشید زہرا', 'سید ابن حیدر', 'حقانی حال چاہ غوری'),
  f('رشیدہ خاتون', 'سید جعفر رضا', 'قاضی گلی'), // VERIFY: husband's name (جعفر / جعطر)
  f('حمیدہ خاتون', 'سید انیس الحسن', 'حقانی'), // VERIFY: husband's first name
  f('سنجیدہ خاتون', 'سید واحد علی شاہ', 'لاہور'),
  m('تصویر حیدر شاہ', [
    f('فریدہ خاتون'),
    m('شمیم حیدر', [
      f('سحر بانو'),
      f('سیمی حیدر'), // VERIFY: printed without سید, taken as female
    ]),
    f('سعیدہ خاتون', 'الیاس شمیم'), // VERIFY: husband printed without سید
    f('رشیدہ خاتون', 'سلیم لغمی'), // VERIFY: husband printed without سید; surname reads لغمی
  ]),
  f('سجیلہ خاتون', 'انور علی', 'پنجاب'), // VERIFY: husband printed without سید (ابو انور علی / انور علی)
]))

// ───────────────────────── chart 3: عبدالکریم ─────────────────────────


// ابوالحسن's line: اعجاز حسن (انتخاب حسن لاولد, یوسف حسن with eight children), and سائرہ بانو
const yusufHusain211 = m('یوسف حسن', [
  m('ابوالبجاہ'), // VERIFY: name cut by the page edge (ابوالبجاہ / ابوالمجاہ), may be longer
  f('شاہانہ خاتون'),
  m('آصف جاہ'),
  m('ذیجاہ'), // VERIFY: ذیجاہ
  m('محمد علی', [
    m('کامران حیدر'),
    f('شبانہ خاتون'),
    m('ذلیشان حیدر'), // VERIFY: ذلیشان
    f('فوزیہ خاتون'),
    m('مہران حیدر'),
  ]),
  m('شہزاد حیدر'),
  m('احمد حسن'),
  m('شہنشاہ حیدر'),
])

const abulHasan211 = m('ابوالحسن', [
  m('اعجاز حسن', [
    m('انتخاب حسن', 'لاولد'),
    yusufHusain211,
  ]),
  f('سائرہ بانو'),
])

// علی تمکین: six children on one bar (eldest = rightmost)
const aliTamkeen211 = m('علی تمکین', [
  f('زہرہ فاطمہ', 'سید محمود حسن', 'قاضی زادہ'),
  f('وزیر فاطمہ', 'سید جعفر علی', 'مجاپوتہ'),
  f('شمیم فاطمہ', 'سید محمد عبداللہ', 'گذری'),
  f('نثار فاطمہ', 'سید شبر حسن'),
  m('علی ذہین', [
    m('علی حسین'),
    f('ذرین اختر', 'سراج الحسن', 'حال بجنور'), // VERIFY: husband printed without سید; mohalla/place hard to read (حال بجنور / عظا بنور)
  ]),
  f('کنیز فاطمہ', 'سید داد حسن', 'کٹرہ غلام علی'), // VERIFY: husband's name is partly hidden by the page border
])

const mushtaqHusain211 = m('مشتاق حسین', [
  f('ذہینہ خاتون', 'سید حشمت علی', 'اغوانپور حال کمالی پگڑی'), // VERIFY: place reads اغوانپور حال کمالی پگڑی
  aliTamkeen211,
  f('معینہ خاتون', 'سید حشمت علی', 'اغوانپور حال کمالی پگڑی', 'زوجہ ثانی'), // VERIFY: same husband as her sister; place as above
])

const hidayatSonMuhammadAli211 = m('محمد علی', [
  m('عاشق حسین', [f('منورہ خاتون', 'سید تاج الدین', 'شفاعت پوتہ')]),
  mushtaqHusain211,
  ahmadAli212,
])

const abdulKarim211 = onPage(211, m('عبدالکریم', [
  m('محمد یوسف', [
    m('عنایت علی', [
      m('مدد علی', [
        m('فرزند علی', [
          abdurRazzaq212,
          f('تاج دولت', 'سید محمد علی زیدی', 'جارودی'), // VERIFY: mohalla (جارودی / جاؤدی)
          abulHasan211,
          f('شرافت النساء', 'سید نثار حسین', 'چھیوڑہ'),
          f('ام کلثوم'),
        ]),
      ]),
    ]),
    m('ہدایت علی', [hidayatSonMuhammadAli211]),
  ]),
]))

// ═════════════════════════ book page 210 (photo page13) ═════════════════════════
// Khandan 37 (محلہ حقانی), book page 210 (printed top centre; file haqqani/aulad syed muhammad ali bin syed mir ali/page13).
// Three charts on this page:
//   1. صفحہ ۲۰۹ سید متبرک حسن بن سید تبارک حسن  -> mutabarakHasan210 (continued from page 209)
//   2. صفحہ ۲۰۹ سید سبط حسن بن سید ممتاز علی    -> sibtHasan210 (continued from page 209)
//   3. صفحہ ۲۰۸ سید ارشاد علی بن سید شہامت علی  -> irshadAli210 (continued from page 208)
// Continued on page 211: زاہد حسین and نجم الحسن (both inside irshadAli210).

// ───────────────────────── chart 1 ─────────────────────────
const mutabarakHasan210 = onPage(210, m('متبرک حسن', [
  m('تمکین مصطفیٰ', [
    f('عطیہ زہرا'),
    m('ظہیر عباس'),
    m('علی عباس'),
    m('ندیم مصطفیٰ'), // VERIFY: drawn on a short spur off the right end of the bar; placed last (could be eldest)
  ]),
  m('تنویر مصطفیٰ', [
    m('نسیم مصطفیٰ'), // VERIFY: first letter (نسیم / تسنیم / تبسم)
    m('احتشام رضا'), // VERIFY: احتشام / اعتشام
    f('زینب تنویر'),
    m('خوشتر رضا'),
    m('اکرام رضا'),
    m('عرفان رضا'),
  ]),
  f('شمیم زہرا', 'سید محمد علی رضا', 'عثمان پور'), // VERIFY: husband's name (printed small) and mohalla (عثمان پور / عمان پور)
  m('زین مصطفیٰ', [m('حسن عباس'), f('امام بانو')]),
  f('حسن زہرا', 'سید محمد مہدی', undefined, 'زوجہ ثانی'), // VERIFY: mohalla line under the husband is unreadable (looks like الڑہ); omitted
  f('گل زہرا', 'سید شان رضا', 'دانشمندان', 'زوجہ ثانی'),
  m('تسکین مصطفیٰ', [
    f('فرزانہ تسکین'),
    m('دانش رضا'),
    m('نوازش رضا'), // VERIFY: printed without سید but a male-sounding name
    f('فرحانہ تسکین'),
    f('رضانہ تسکین'), // VERIFY: رضانہ / رخسانہ
  ]),
]))

// ───────────────────────── chart 2 ─────────────────────────
// Page 210, middle: سید سبط حسن بن سید ممتاز علی (eight children on one bar)
const sibtHasan210 = onPage(210, m('سبط حسن', [
  m('قاسم حسین', [
    m('عالم حسین', [
      m('عاقل حسین'),
      f('ممتاز فاطمہ'),
      m('عارف حسین'),
      f('حسین فاطمہ'),
      m('آصف حسین'),
    ]),
    m('حاکم حسین', [
      f('یمین فاطمہ'), // VERIFY: first letter (یمین / بگین)
      f('شاہین فاطمہ'),
      f('فہیم فاطمہ'),
      f('ارم فاطمہ'), // VERIFY: ارم / ام
    ]),
    f('جمیلہ خاتون', 'سید ادلی حسین', 'جھنگا دروازہ مجاپوتہ'), // VERIFY: husband's name and mohalla
    m('انعام حسین', [m('فرمان حسین'), m('عرفان حسین'), m('احسان حسین')]),
    f('عالمہ خاتون', 'سید تصور حسین', 'چاہ شور'),
  ]),
  f('تمکنہ خاتون', 'سید محمد مبین', 'دربار کلاں'),
  f('ارعینہ خاتون', 'سید منظر حسین', 'قاضی زادہ'), // VERIFY: husband's name (printed تسطر / تنظیر حسین)
  f('سکینہ خاتون', 'سید صابر حسین', 'قاضی زادہ'),
  // ہاشم حسین: eight children, five on the top bar and three on a wrapped bar below it
  m('ہاشم حسین', [
    m('مرتضیٰ ہاشم'),
    m('مجتبیٰ ہاشم', [m('علی شاہ زیب'), f('رباب بتول')]),
    f('مہرین زہرا'),
    m('حسن علی ہاشم'),
    f('روحین زہرا'),
    f('نسرین زہرا', 'سید جاوید رضا', 'گذری'),
    m('ہمایوں ہاشم'),
    f('یاسمین زہرا', 'سید علی حسن', 'قاضی زادہ'),
  ]),
  f('ذہینہ خاتون', 'سید رضا علی', 'بخشی'), // VERIFY: first letter (ذہینہ / زہینہ) and mohalla
  m('کاظم حسین', [
    m('محمد صادق', [m('شاہ حسن'), f('ام البنین'), m('علی ثاقب')]),
    f('نازنین بانو', 'سید وقار حسین', 'بلند شہر'),
    m('محمد ناظم', [f('حسن زہرا'), f('نازش زہرا')]),
    f('ناہید بانو'),
  ]),
  f('امینہ خاتون', 'سید ظاہر حسین', 'بنگلہ'), // VERIFY: husband's name (ظاہر / زاہر) and mohalla
]))

// ───────────────────────── chart 3 ─────────────────────────
// Page 210, bottom: سید ارشاد علی بن سید شہامت علی (eight children)
const irshadAli210 = onPage(210, m('ارشاد علی', [
  zahidHusain211,
  m('ابن علی', 'لاولد'),
  m('صادق حسین', [
    m('ناطق حسین', [
      m('انیس الحسن', [
        f('ناہید فاطمہ', 'سید ارشد حسین', 'قاضی زادہ'), // VERIFY: husband's name
        m('حسن شکوہ', [m('زین حسن'), f('ضوفی')]), // VERIFY: ضوفی (صوفی؟)
        m('رئیس الحسن', [
          f('شانیہ حسن'),
          m('حسن شکیل'),
          m('حسن جمال'),
          m('سعید حسن'),
        ]),
        m('حسن ندیم'),
        f('بے نظیر فاطمہ'), // VERIFY: printed بخطیر / بنظیر فاطمہ
        m('حسن شجاع'),
        // نفیس الحسن: drawn on the left end of the bar, its five children hang on a second bar that wraps below
        m('نفیس الحسن', [
          m('فیاض حسن'),
          f('ثناء حسن'), // VERIFY: printed without سید; ثناء may be a man's name
          f('مہناز حسن'),
          m('حسن ضیاء'),
          m('علی حسن'),
        ]),
      ]),
      f('جمیلہ خاتون', 'سید اسرار حسین زیدی', 'اعوان پور'),
      f('ناصرہ خاتون', 'سید شباب حسین', 'قاضی زادہ'),
      m('ناصر حسین', [
        m('نثار حسین'),
        f('سیما خاتون'),
        m('ندر حسین'),
        m('نعیم حسین'),
        f('رخسانہ خاتون'),
        m('نوید حسین'),
      ]),
      f('انیسہ خاتون', 'سید کاظم حسین زیدی', 'اعوان پور'),
      f('رئیسہ خاتون', 'سید شاکر حسین', 'قاضی زادہ'),
      m('ذاکر حسین', [f('زبیدہ بانو'), m('ظہیر عباس'), m('ظفر حسین')]),
    ]),
  ]),
  m('نثار علی', 'لاولد'),
  m('ابرار حسین', [
    f('عالمہ خاتون', 'سید مجتبیٰ حسن', 'دربار کلاں'), // VERIFY: husband's name (مجتبیٰ حسن / مجتبیٰ حسنان)
    f('آفرین خاتون', 'سید غلام مرتضیٰ', 'پچدرہ'), // VERIFY: mohalla (printed بچیدرہ)
  ]),
  m('فرحت علی', [m('شریعت حسین', 'لاولد')]),
  m('شرف علی', 'لاولد'),
  m('باقر حسین', [
    f('مطاہرہ خاتون'),
    f('منورہ خاتون', 'سید انتخاب حسین', 'راجو سرائے حال حقانی'), // VERIFY: mohalla (راجو / راجہ سرائے)
    nijmulHasan211,
  ]),
]))

// ═════════════════════════ book page 209 (photo page12) ═════════════════════════
// Khandan 37 (محلہ حقانی), photo haqqani/aulad syed muhammad ali bin syed mir ali/page12, book page 209 (printed).
// The brief names the heading "صفحہ ۲۰۲ سید شاہ مہدی بن سید ضامن علی", but this photo carries three charts, none of which is that one:
//   1. muzaffarHasan209 : "صفحہ ۲۰۸ سید مظفر حسن بن سید دلشاد علی"
//   2. zafarHasan209    : "صفحہ ۲۰۸ سید ظفر حسن بن سید دلشاد علی" (circled mark beside the heading)
//   3. mumtazAli209     : "صفحہ ۲۰۸ سید ممتاز علی بن سید امداد علی" with the note "(بھوپال کی سکونت اختیاری)"
// Where a bar's left end drops down and runs across to one lone arrow (علی رضا, تقدیس الحسن) that child is read as the youngest sibling.

// ───────────────────────── chart 1 ─────────────────────────

const muzaffarHasan209 = onPage(209, m('مظفر حسن', [
  m('منصور حسین', [
    m('فرمان منصور'),
    f('نوشین منصور'), // VERIFY: name (نوشین / نوشبن) and gender: printed without سید
    m('عمران منصور'),
    f('نورین منصور'), // VERIFY: printed without سید
    m('کامران منصور'),
  ]),
  m('معطر حسن'),
  f('نسیم زہرا', 'سید قیصر حسن', 'بگلہ'), // VERIFY: mohalla (بگلہ)
  f('شبیہ زہرا', 'سید محمد ہاشم', 'حقانی'),
  m('شجر حسن', 'لاولد'),
  m('ہزبر حسن', [
    f('فردوس فاطمہ'),
    m('سجاد حسین'),
    f('رباب بانو'),
    f('کلثوم زہرا'),
    f('بتول فاطمہ'),
    m('علی رضا'), // VERIFY: drawn on a lower bar hanging off the left end of the bar, read as the youngest son of ہزبر حسن (not a child of بتول فاطمہ)
  ]),
]))

// ───────────────────────── chart 2 ─────────────────────────

// تہذیب الحسن: children drawn in a box on three wrapped bars, read as one sibling list
const tahzibulHasan209 = m('تہذیب الحسن', [
  f('فرحت تہذیب'),
  f('حنا تہذیب'),
  m('سعید الحسن'), // VERIFY: sits in the box as a child of تہذیب الحسن (his name follows the uncles' pattern)
  f('نزہت تہذیب', 'سید اسلم جاوید زیدی', 'گولی حال حقانی'), // VERIFY: husband's surname (زیدی / نیازی)
  f('آل زہرا', 'سید منور مصطفیٰ', 'حقانی'), // VERIFY: husband's name
  m('تقدیس الحسن', [f('فرح تقدیس'), m('کامران تقدیس')]), // VERIFY: lone arrow on the third wrapped bar, read as the youngest son of تہذیب الحسن
])

const tausifulHasan209 = m('توصیف الحسن', [
  f('رمزی توصیف'),
  f('دیبا توصیف'),
  f('صبا توصیف', 'سید عشرو وصال', 'گنکولی'), // VERIFY: husband's name and mohalla
  m('ہمایوں توصیف'),
  f('زریا توصیف', 'سید فرقان احمد', 'چاہ شور'), // VERIFY: mohalla (چاہ شور / چاہ شنور)
  f('ہما توصیف', 'سید مبارک', 'شفاعت پوتہ'),
  f('کامنی توصیف', 'سید تقدیس الحسن', 'حقانی'),
])

const naseemulHasan209 = m('نسیم الحسن', [
  f('طلعت نسیم'),
  f('ذکیہ نسیم'),
  f('نادرہ نسیم'),
  m('حسن نسیم'),
  m('جعفر نسیم'),
  f('ریحانہ نسیم', 'سید علی حسین', 'لکھنؤ'), // VERIFY: husband's name (علی حسین / علی الف حسین)
  f('فرحانہ نسیم', 'سید عالیجاہ حسین زیدی', 'گولی قاضی زادہ'),
])

// شمیم الحسن: three children in a box, three more on the wrapped bar below it
const shameemulHasan209 = m('شمیم الحسن', [
  m('فردوس شمیم'),
  f('بتول شمیم'),
  m('علی شمیم'),
  f('ریاب شمیم', 'سید شاہد حسین', 'گولی قاضی زادہ'), // VERIFY: husband's name (شاہد / شباہ)
  f('فرزانہ شمیم', 'سید محمد سلطان', 'لکھرہ'), // VERIFY: husband's name and mohalla
  f('رعنا شمیم', 'سید ضیاء حسین', 'پشیالہ'), // VERIFY: her name (رعنا / رعیانہ), husband's name and mohalla
])

const qaseemulHasan209 = m('قسیم الحسن', [
  f('معصوم زہرا'),
  f('گل زہرا'),
  m('ظفر مہدی'),
  f('گلفام زہرا', 'سید مرتضیٰ احسن', 'حقانی'),
  f('ملتزم زہرا', 'سید جعفر نسیم', 'حقانی'),
])

const nadeemulHasan209 = m('ندیم الحسن', [
  m('مرتضیٰ احسن'),
  m('مجتبیٰ حسن'),
  f('گلناز فاطمہ'),
  f('عندلیب زہرا', 'سید فردوس شمیم', 'حقانی'),
  f('زینب'),
])

const shabihulHasan209 = m('شبیہ الحسن', [m('ظفر عباس'), f('یاسمین زہرا')])

const zafarHasan209 = onPage(209, m('ظفر حسن', [
  tahzibulHasan209,
  tausifulHasan209,
  naseemulHasan209,
  shameemulHasan209,
  qaseemulHasan209,
  nadeemulHasan209,
  f('بلقیس فاطمہ', 'سید آل محمد', 'لکھرہ'), // VERIFY: mohalla (لکھرہ / لکردہ)
  shabihulHasan209,
  f('بیردین دولت', 'سید عرفان حسن زیدی', 'گولی قاضی زادہ'), // VERIFY: her name (بیردین) and the small word above the husband's surname
]))

// ───────────────────────── chart 3 ─────────────────────────

const zirakHasan209 = m('زیرک حسن', [
  m('محمد تقلین', 'لاولد'),
  f('رعئے زہرا', 'سید علی مجتبیٰ', 'چنگا دروازہ حقانی'),
  f('بوئے زہرا', 'سید اقبال رضا', 'دانشمندان'),
  m('شبیہ مصطفیٰ', [
    f('مثال زہرا'), // VERIFY: name (مثال / شمال)
    m('حسن مصطفیٰ'),
  ]),
  f('شبیہ فاطمہ', 'سید یاور عباس', 'گذری'),
  m('محمد نورعین', [
    f('تحسین زہرا'),
    f('حسین زہرا', 'سید منور حسین', 'گذری'), // VERIFY: this husband line could belong to تحسین زہرا
    f('نعیم زہرا', 'سید محمد رضا', 'حقانی'), // VERIFY: printed لعیم / نعیم
    f('زرین حما', 'سید ظل حیدر رضوی', 'لوہان اودے پور'), // VERIFY: her name, and the mohalla words
    f('نسرین زہرا', 'سید آصف علی جنوی', 'چکلی'), // VERIFY: husband's surname
    m('محمد سیدین'),
  ]),
])

const tabarakHasan209 = m('تبارک حسن', [
  mutabarakHasan210,
  f('ضامنہ خاتون', 'سید حسن احمد زیدی', 'گولی قاضی زادہ'),
  m('ذو الفقار حیدر', [
    // two joined bars: four children on the top bar, three on the wrapped bar below
    f('شباب زہرا', 'سید منور عباس', 'عثما بنور'), // VERIFY: mohalla
    m('شباب حیدر'),
    f('جمال زہرا'),
    f('آفتاب زہرا'),
    m('افتخار حیدر', [m('عظیم حیدر'), m('جمشید حیدر')]),
    f('مہتاب زہرا', 'سید ثمین مصطفیٰ', 'حقانی'), // VERIFY: husband's name (ثمین / فرمن)
    m('وقار حیدر', [f('زرینہ وقار'), f('روما وقار')]),
  ]),
])

const mubarakHasan209 = m('مبارک حسن', [
  f('زرینہ خاتون', 'سید ناصر حسین', 'دانشمندان'),
  zirakHasan209,
  f('میمونہ خاتون', 'سید ظفر حسن', 'حقانی'), // VERIFY: a small word before the husband's name (read زوجہ اولی?)
  tabarakHasan209,
  m('تبرک حسن', 'لاولد'),
])

const mumtazAli209 = onPage(209, m('ممتاز علی', 'بھوپال کی سکونت اختیاری', [
  m('سرور حسین', [
    m('غلام حسین', [f('عطا فاطمہ'), m('عابد حسین'), f('ضیا فاطمہ')]),
    m('خادم حسین', 'لاولد'),
  ]),
  f('زاہدہ خاتون', 'سید امیر حسن زیدی', 'گولی قاضی زادہ'),
  mubarakHasan209,
  f('واجدہ خاتون', 'سید شاہد حسین', 'گذری'),
  sibtHasan210,
  m('ریاض حسن', [
    f('آمنہ خاتون', 'سید تبارک حسین', 'حقانی'),
    f('طاہرہ خاتون', 'سید محمد حسین', 'گذری'), // VERIFY: husband's name (محمد / محب)
    f('طیبہ خاتون', 'سید اجمل حسین', 'مجاپوتہ'),
  ]),
]))

// ═════════════════════════ book page 208 (photo page11) ═════════════════════════
// Khandan 37 (محلہ حقانی), photo page11 (aulad syed muhammad ali bin syed mir ali), book page 208 as printed.
// Charts on this page:
//  1. hamidHasan208  - "صفحہ ۲۰۷ سید حامد حسن بن سید ہاجی حسن" (continued from page 207)
//  2. nadirAli208    - "صفحہ ۲۰۷ سید نادر علی بن سید دلاور علی" (continued from page 207)
//  3. himayatAli208  - "صفحہ ۲۰۶ سید حمایت علی بن سید محمد علی" (continued from page 206)

// ───────────── chart 1: سید حامد حسن بن سید ہاجی حسن ─────────────
const hamidHasan208 = onPage(208, m('حامد حسن', [
  m('امجد حسین'), // VERIFY: first letters (امجد / انجد)
  m('احمد حسین', [
    f('حسنین فاطمہ'), // VERIFY: first word partly hidden by the page edge (حسنین / محسنین)
    m('سلمان احمد'), // VERIFY: printed without سید but a male name
    f('اسما احمد'), // VERIFY: printed without سید, gender unclear
    m('نوید احمد'),
    m('فرمان احمد'), // VERIFY: printed without سید but a male name
  ]),
  f('زبیدہ خاتون'),
  m('کاظم حسین'),
  f('حامدہ خاتون', 'حسین مرزا', 'بنارسی'), // VERIFY: husband printed without سید; an X pen mark above her arrow
  m('واحد حسین', [m('شوذب رضا')]),
  m('ساجد حسین', [
    m('شاہ رخ حسن'),
    m('تصویر حسن'),
    f('تنویر زہرا'),
    m('شعیب حسن'),
    m('شفیع حسن'),
  ]),
  m('مجاہد حسین', [f('فوزیہ بانو'), f('زینب بانو')]),
  f('نسیم خاتون', 'سید شاہد حسین', 'اعوان پور'), // VERIFY: mohalla (اعوان پور)
  m('جاوید حسین', [m('عابد حسین'), f('کائنات بانو'), f('مہک بانو')]),
]))

// ───────────── chart 2: سید نادر علی بن سید دلاور علی ─────────────
const nadirAli208 = onPage(208, m('نادر علی', [
  m('باد علی', [
    m('فرحت علی', [
      f('جمیلہ خاتون', 'سید ظفر احمد', 'صابو نگراں'), // VERIFY: ظفر / طفر; mohalla (صابو نگراں)
      m('سرور حسین', [
        f('حسینہ خاتون', 'سید بدر الحی', 'نکڑہ'), // VERIFY: mohalla (نکڑہ / لکڑہ)
        m('جراح حسین', 'عرف جری', [
          m('عزادار حسین', [
            f('ارمان فاطمہ'),
            m('شاندار حسین'),
            f('عروج فاطمہ'),
            m('ناجدار حسین'),
            f('شاہین فاطمہ'),
          ]),
          m('عمار حسین', [
            m('اسرار حسین'),
            m('وقار حسین'),
            m('شہزاد حسین'),
            f('حسین زہرا'),
          ]),
        ]),
        f('امینہ خاتون', 'سید محمد امام زیدی', 'جڑودی حال شفاعت پوتہ'), // VERIFY: mohalla spelling
      ]),
      f('طاہرہ خاتون', 'سید ابن حیدر', 'نکڑہ'), // VERIFY: mohalla (نکڑہ / لکڑہ)
      m('اختر حسین', [
        m('کرار حسین', [
          m('سردار حسین'), // VERIFY: سردار / سرداد
          f('ندیم فاطمہ', 'سید عرفان حسن', 'بخشی'),
          m('احسان حسین'),
          f('ذہین فاطمہ'),
          f('حسین فاطمہ'),
          m('حسین عباس'),
          m('حسن عباس'),
        ]), // VERIFY: seven children on one long bar; the two sisters before حسین عباس are read by position
        f('مبارکہ خاتون', 'سید رضا عباس', 'نگلی'), // VERIFY: mohalla (نگلی)
        f('باصرہ خاتون', 'سید کرار حیدر جعفری'),
        f('معصومہ خاتون', 'سید اظہر حسن کاظمی', 'دانشمندان'), // VERIFY: husband's name
        f('حسن فاطمہ', 'سید زوار احمد', 'صابو نگراں'),
        m('علمدار حسین', [
          m('شہوار حسین'),
          m('ناجدار حسین', [f('نرجس فاطمہ'), f('ندا فاطمہ')]),
          m('شاندار حسین', [m('محمد اکبر')]),
          f('عذیر فاطمہ', 'سید محمد', 'عثمانپور'), // VERIFY: husband's name and mohalla
          m('اقتدار حسین'),
        ]),
      ]),
    ]),
    f('کنیز زہرا', 'سید نیاز علی', 'چھنگا دروازہ'),
    f('رقیہ خاتون', 'سید حسن', 'گذری'),
    f('ملو', 'سید اولاد حسن', undefined, 'مساۃ'), // VERIFY: printed "مساۃ ملو"; mohalla not given
    f('سعیدہ خاتون', 'سید ابن علی', 'حقانی'),
    m('نظیر حسن', [
      f('شکیلہ خاتون', 'سید قسیم علی', 'دانشمندان'), // VERIFY: husband's name (قسیم)
      f('صابرہ خاتون', 'سید مہدی رضا', 'دانشمندان'),
      f('پنجتنی خاتون', 'سید مہدی حسن', 'شفاعت پوتہ'),
      f('باقرہ خاتون', 'سید غلام حیدر', 'نکڑہ'), // VERIFY: mohalla (نکڑہ / لکڑہ)
      f('مصطفائی خاتون', 'سید مبارک حسن', 'پچدرہ'), // VERIFY: mohalla spelled بچیدرہ
    ]),
  ]),
  f('دختر', 'سید شیر علی', 'حقانی'), // VERIFY: the book gives no name, only "دختر"
]))

// ───────────── chart 3: سید حمایت علی بن سید محمد علی ─────────────

const himayatAli208 = onPage(208, m('حمایت علی', [
  m('شہامت علی', [irshadAli210]),
  m('امان علی', 'لاولد'),
  m('امداد علی', [
    m('دلشاد علی', [
      zafarHasan209,
      f('عابدہ خاتون', 'سید انوار مہدی', 'حقانی'),
      f('مومنہ خاتون', 'سید ضیاء علی', 'بگلہ'),
      f('صابرہ خاتون', 'سید عمران حسن زیدی', 'گولی قاضی زادہ'), // VERIFY: mohalla (گولی / قاضی زادہ)
      muzaffarHasan209,
    ]),
    f('لطیف النساء', 'سید یاد علی', 'چاہ شور'), // VERIFY: husband's name (یاد علی)
    f('شرافت النساء', 'سید امتیاز حسین', 'چھیوڑہ'),
    f('فصاحت النساء', 'سید لطافت حسین', 'قاضی زادہ'),
    f('سلمیٰ خاتون', 'سید امیر حسن', 'چھیوڑہ'),
    mumtazAli209,
  ]),
]))

// ═════════════════════════ book page 207 (photo page10) ═════════════════════════
// Kausar-ul-Ansab (1999), khandan 37, محلہ حقانی. Photo page10 (the printed page number is 207, not 201).
// Chart 1 (the only chart on the page): heading "سید مدد علی بن سید رستم علی".
// One tree. The top bar has five sons; only قاسم علی → رضا علی continues, and رضا علی has ten children.
// Continued on page 208: نادر علی (son of دلاور علی) and حامد حسن (son of حاجی حسن).
// Wrapped sibling lists: مرتضیٰ حسن's six children run over three boxed rows, حسین رضا's four over two rows.

// ───── حاجی حسن: eight children on the long bar down the right edge ─────
const hajiHasan207 = m('حاجی حسن', [ // VERIFY: first letter (حاجی / ناجی / ساجی)
  hamidHasan208,
  f('حامدہ خاتون', 'سید ضمیر حیدر', 'اعوان پور'), // VERIFY: mohalla (اعوان نور / اعوان پور)
  m('ہادی حسن', [
    m('قائم رضا', [m('جمال رضا'), m('عابد رضا'), m('صائم رضا')]),
    f('افروز فاطمہ', 'سید سخاء الحسین', 'حقانی'), // VERIFY: husband's name
    f('فیروز فاطمہ', 'سید شمیم حیدر', 'کٹرہ غلام علی'),
    m('حیدر رضا', [m('صفدر رضا'), f('اعجاز فاطمہ'), m('خوشحال رضا')]),
    m('قمر رضا', [m('ثمر رضا'), f('ریاض فاطمہ'), m('وسیم رضا')]), // VERIFY: ثمر رضا (first name hard to read)
    f('سرورہ فاطمہ', 'سید ابجد حسین', 'حقانی'), // VERIFY: her name (سرورہ / سروم) and the husband's name
  ]),
  f('حاجرہ خاتون', 'سید سبط علی', 'کٹرہ غلام علی'),
  f('مشاہدہ خاتون', 'سید ضیاء الحسنین', 'دانشمندان'),
  m('شاہد حسین', [
    m('شمیم حیدر'),
    m('نسیم حیدر'),
    f('شمیم بانو'),
    m('نعیم حیدر'), // VERIFY: first letter (نعیم / لغیم)
    m('خورشید حیدر', [m('نذیم حیدر'), f('ہلال فاطمہ')]), // VERIFY: نذیم (نظیم / نذیر)
    m('امیر حیدر'),
  ]),
  m('مشاہد حسین', [
    m('تصویر حیدر'),
    f('فرحت بانو', 'سید محمد سراج احمد', 'حقانی'),
    f('نگہت بانو', 'سید مجاہد حسین', 'حقانی'),
    m('تنویر حیدر'),
  ]),
  f('شاہدہ خاتون', 'سید لقا علی', 'حقانی'),
])

// ───── شیدا علی: five children on the bar at the left edge ─────
const shaidaAli207 = m('شیدا علی', [ // VERIFY: name (شیدا علی / شہید علی)
  m('قاسم رضا', [
    m('کوثر رضا'),
    f('قمر بانو', 'سید حسین رضا', 'حقانی'), // VERIFY: husband (the same name is printed for قمر بانو, اقبال بانو and حسین بانو)
    m('محمد صادق', [
      m('قمر رضا'),
      m('قارب رضا'), // VERIFY: first letter (قارب / تارب / ثاقب)
      m('رضا علی'),
      f('عالیہ عشرت'),
    ]),
    f('اقبال بانو', 'سید حسین رضا', 'حقانی'),
    f('حسین بانو', 'سید حسین رضا', 'حقانی'),
  ]),
  f('نسیمہ خاتون', 'سید مطاہر حسن', 'دانشمندان'),
  f('رضی النساء', 'سید مشاہد حسن', 'حقانی'),
  f('ناظمہ خاتون', 'سید حسن امام', 'حقانی'),
  m('علی رضا', [
    m('عباس رضا', [m('وفا عباس'), f('رباب فاطمہ'), m('محمد عباس')]),
    m('حسنین رضا', [f('باقرہ خاتون'), m('نقی رضا'), f('زیبا بانو')]),
    m('اقبال رضا'),
    m('حسین رضا', [
      f('ماہرہ خاتون'),
      f('ام لیلیٰ'),
      m('علی حسنین'),
      m('علی عباس'),
    ]),
  ]),
])

// ───── مصطفیٰ حسن: three children ─────
const mustafaHasan207 = m('مصطفیٰ حسن', [
  m('لقا علی', [
    f('خورشید فاطمہ'),
    f('گلناز فاطمہ'),
    f('نسرین فاطمہ'),
    m('خورشید علی'),
    f('شہناز فاطمہ'),
    f('پروین فاطمہ'),
  ]),
  f('ذہینہ خاتون', 'سید ارتضیٰ حسن', 'حقانی'),
  f('یاسمینہ خاتون', 'سید حامد حسن', 'حقانی'),
])

// ───── مرتضیٰ حسن: six children drawn on three boxed rows (top row first, each row right to left) ─────
const murtazaHasan207 = m('مرتضیٰ حسن', [
  f('علیمہ خاتون', 'سید نجم الحسن', 'حقانی'),
  f('شمیمہ خاتون', 'سید عابد حسین', 'قاضی زادہ'), // VERIFY: husband's name (عابد / عابر)
  m('مجتبیٰ حسن', [
    f('باقیس فاطمہ', 'سید محمد علی', 'چکلی'), // VERIFY: her name (باقیس / باقرہ)
    f('نسیم بانو', 'سید احمد علی', 'چکلی'),
    f('ثریا بانو', 'سید شبیہ الحسن', 'سرائے ترین'), // VERIFY: mohalla (سرائے ترین / سرائے تہمینہ)
    m('محمد جمالی', [
      f('ترنم زہرا'),
      f('انجم جمالی', 'سید ضمیر حسن', 'مظفر نگر'),
      f('تنظیم زہرا'),
      m('فیض علی'),
      m('منصور علی'),
    ]),
    f('فردوس فاطمہ', 'سید باقر حسین', 'قاضی زادہ'),
    f('نجمہ بانو', 'سید ناصر حسین', 'حقانی'),
    f('نور جہاں', 'سید منصور حسین', 'قاضی زادہ'),
  ]),
  f('تسلیمہ خاتون', 'سید ناطق حسین', 'حقانی'), // VERIFY: husband's name (ناطق / ناصر)
  m('اجتبیٰ حسن', [m('ذوالفقار حیدر'), f('یاسمین بانو'), m('علی حیدر')]),
  m('ارتضیٰ حسن', [f('جمیلہ خاتون', 'سید رضی حیدر', 'حقانی')]),
])

// ───── the other sons of رضا علی ─────
const mazaharHasan207 = m('مظاہر حسن', [ // VERIFY: ط/ظ (the lawlad brother is written مطاہر)
  m('زائر حسین', [f('انتظار فاطمہ')]),
  f('کنیز فاطمہ', 'سید ہادی حسن', 'حقانی'),
  f('کنیز زہرا', 'سید شاہد حسین', 'قاضی زادہ'),
  f('کنیز صغریٰ', 'سید قاسم سعید', 'در جلو ملان'), // VERIFY: mohalla
])

const tahirHasan207 = m('طاہر حسن', [
  f('ناہرہ خاتون', 'سید واحد حسن', 'حقانی'), // VERIFY: her name (ناہرہ / ناظرہ / ناصرہ)
  m('محمد رضا', [f('نسیم زہرا'), m('انور رضا'), m('عمران رضا'), f('وسیم زہرا')]),
  f('طاہرہ خاتون', 'سید علی رضا', 'حقانی'),
])

// ───── the whole tree: مدد علی بن رستم علی ─────
const mududAli207 = onPage(207, m('مدد علی', [
  m('انور علی', 'اولاد مشہد میں ہے'), // VERIFY: note reads "اولاد مشہدیں ہے"
  m('امیر علی', 'لاولد'), // VERIFY: امیر / امر
  m('قاسم علی', [
    m('رضا علی', [
      hajiHasan207,
      m('مطاہر حسن', 'لاولد'),
      tahirHasan207,
      f('رضی النساء', 'سید باقر حسین', 'حقانی'),
      mazaharHasan207,
      f('چینگلو', 'سید شریعت حسن', 'حقانی', 'مسماۃ'),
      f('رفیع النساء', 'سید سبط بنی', 'کٹرہ غلام علی'),
      mustafaHasan207,
      murtazaHasan207,
      shaidaAli207,
    ]),
  ]),
  m('کریم علی', 'لاولد'),
  m('دلاور علی', [nadirAli208]),
]))

// ═════════════════════════ book page 206 (photo page9) ═════════════════════════
// Khandan 37, محلہ حقانی — photo page9.straight.jpg is BOOK PAGE 206 (NOT a duplicate of page 200 / page8, which is book page 205).
// One connected chart, headed "صفحہ ۲۲؟ سید ابوبکر بن سید محمد عرف تاج الدین" (with "عرف بدرالدین" written above the name);
// VERIFY: the صفحہ number in the heading is hard to read (۲۲ followed by a cut-off digit?).
// ابوبکر's sons: وجیہ الدین (drawn here), چاند عرف ہیگا (continued صفحہ ۲۳۹), خوندمیر عرف اخوان میر (continued صفحہ ۲۲۷).
// Wrapped sibling bars (drawn as one list, top row first) are marked VERIFY where they occur: مجاء الحسن, معراج الحسن, نسیم حیدر.

// ── leaves continued on other pages ──
const khundMir206 = onPage(227, m('خوندمیر', 'عرف اخوان میر')) // صفحہ ۲۲۷
const chand206 = onPage(239, m('چاند', 'عرف ہیگا')) // VERIFY: nickname (ہیگا / بہیکا) and page (۲۳۹)
const jaan206 = onPage(242, m('جان')) // VERIFY: صفحہ ۲۴۲
const muhammad206 = onPage(224, m('محمد')) // VERIFY: صفحہ ۲۲۴ (could be ۲۴۴)

// ── کبیر علی's sons (under اسد علی under رستم علی) ──
const kabirAli206 = m('کبیر علی', [
  m('شبیر علی', [m('لعشق حسین')]), // VERIFY: name reads like لعشق / تعشق حسین
  m('دبیر علی', [
    m('ضمیر علی', [f('رباب بانو', 'سید محمد حامد', 'کٹرہ')]), // VERIFY: mohalla (کٹرہ / لکردہ)
    f('محسنہ خاتون', 'سید نظر حسن', 'حقانی'),
  ]),
])

// ── مبارک علی's sons ──
const mubarakAli206 = m('مبارک علی', [
  m('رستم علی', [m('اسد علی', [kabirAli206]), mududAli207]),
  m('محمد علی', [himayatAli208]),
])

// ── معراج الحسن's family (father line drawn at far left of a wrapped bar) ──
const dayajHasan206 = m('دیاج الحسن', [
  // VERIFY: name reads دباج / دیاج / دیباج الحسن
  // seven children on one long bar, eldest (right) first
  m('مداح الحسن', [
    // VERIFY: name (مداح / مراح); five children on the bar along the foot of the page
    m('مہدی حسن'),
    f('فیروز بانو', 'سید سجاد ظہیر', 'چاہ عزوری'), // VERIFY: mohalla (چاہ غوری)
    m('ریاض الحسن'),
    m('راجہ'), // VERIFY: راجہ
    m('محمد علی'),
  ]),
  f('قیصر بانو', 'سید غلام حسین', 'چاہ عزوری'), // VERIFY: mohalla (چاہ غوری)
  f('سکندر بانو', 'سید توصن حسن', 'سدو'), // VERIFY: husband's name (توصن / نوصل)
  m('شریف الحسن', [f('مزاج بانو'), m('سراج الحسن'), f('زہرا بانو')]),
  m('قمر رضا', [m('مزاج الحسن'), m('معراج الحسن'), m('شمس الحسن'), m('ثمر رضا')]), // VERIFY: ثمر / شمر رضا
  f('حسن بانو', 'سید عتیق حسن', 'سدو'),
  m('نسیم حیدر', [
    // wrapped bar: top row افروز بانو, شہناز بانو, مائرہ بانو, then a short second bar below with محمد نواب
    f('افروز بانو'),
    f('شہناز بانو'),
    f('مائرہ بانو'), // VERIFY: name (مائرہ / سائرہ)
    m('محمد نواب'), // VERIFY: wrap — drawn on a short second bar below افروز بانو
  ]),
])

const mehrajHasan206 = m('معراج الحسن', [
  // VERIFY: father line comes down at the far left of a bar that wraps: row 1 = ظہور ... ساجدہ, row 2 = صلاح, منظور
  m('ظہور الحسن', [
    m('شکور الحسن'),
    m('مشکور الحسن'),
    m('منصور الحسن'),
    m('ذہین حسن'),
    f('ذہین فاطمہ'),
  ]),
  dayajHasan206,
  m('مظہر حسن', [m('نذر حسن')]),
  f('عابدہ خاتون', 'سید نظام حسن زیدی', 'جڑودی حال کٹرہ'), // VERIFY: mohalla (جلودی / جڑودی)
  f('ساجدہ خاتون', 'سید ذکی حسن', 'نوگنیاں حال بخشی'),
  m('صلاح الحسن', [
    // a pen cross is drawn beside his name
    m('عباس حیدر'),
    f('نعیم فاطمہ', 'سید شبیہ عباس'), // VERIFY: husband's mohalla not printed
    m('کمال حسن'),
  ]),
  m('منظور الحسن', [
    m('ارمان رضا'),
    f('رضانہ بانو', 'سید نسیم حیدر', 'حقانی'), // VERIFY: name (رضانہ / رضیانہ)
    m('فرمان رضا', [
      m('ریاض الحسن'),
      f('روحین زہرا'),
      m('شاندار حسن'),
      f('گمل نشان زہرا'), // VERIFY: may be two names (گمل / نشان زہرا) but only one arrow
    ]),
  ]),
])

// ── منہاج الحسن عرف بجن's family ──
const mujaHasan206 = m('مجاء الحسن', [
  // VERIFY: name (مجاء / مجاد). Five children on a bar that turns down at its right end and wraps
  // to a second bar of three; read as ONE list, top row first. VERIFY: the last three may instead be سراج الحسن's sons.
  m('سراج الحسن'),
  f('بہاری بی'), // VERIFY: name (بہاری بی / بہار بی بی), printed without سید
  m('وسیم حسن'),
  m('فہیم حسن'),
  m('عظیم حسن'),
  m('ضیاء الحسن'),
  m('انتخاب الحسن'),
  m('شبیہ الحسن'),
])

const minhajHasan206 = m('منہاج الحسن', 'عرف بجن', [
  f('پاکیزہ خاتون', 'سید حسین محمد', 'مجاپوتہ'), // VERIFY: husband's name order (حسین محمد / محمد حسین)
  m('مزاج الحسن', [m('مہتاب حسن'), f('نرجس بانو')]),
  f('عزیزہ خاتون', 'سید رضی حسن', 'قاضی زادہ'),
  f('امیر بانو', 'سید فضل حسین', 'بخشی'),
  f('نرجس بانو', 'سید شجاع الحسن', 'چھیوڑہ'), // VERIFY: mohalla (چھیوڑہ / چیوڑہ)
  f('شکیلہ بانو', 'سید وصی حیدر', 'حقانی'),
  mujaHasan206,
])

// ── سراج حسین's six children (right to left) ──
const sirajHusain206 = m('سراج حسین', [
  minhajHasan206,
  f('سلطان بانو', 'سید ناظم حسین', 'قاضی زادہ چاہ سنور'), // VERIFY: mohalla (قاضی زادہ / چاہ سنور)
  f('مہتاب بانو', 'سید اشتیاق حسین', 'دانشمندان'),
  f('زہرا بانو', 'سید سلطان حسین', 'شفاعت پوتہ'),
  f('دلبشان بانو', 'سید زوار مہدی', 'حقانی'), // VERIFY: name دلبشان; husband زوار مہدی
  mehrajHasan206,
])

// ── شرف الدین's long single line of descent (drawn with arrows along three rows) ──
const sharafuddin206 = m('شرف الدین', [
  m('غلام رسول', [
    m('غلام محی الدین', [
      m('ولی محمد', [
        m('چاند', [
          m('مکین', [
            // VERIFY: مکین / مکہین
            m('نور علی', 'محلہ قاضی زادہ میں ساکن ہوئے', [
              m('محبوب علی', [
                m('ظہور علی', [
                  m('نصیب علی', [
                    m('نذر حسین', [
                      m('ریاض الحسین', [sirajHusain206]), // VERIFY: ریاض الحسین / الحسن
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
    ]),
  ]),
])

// ── root: سید ابوبکر عرف بدرالدین بن سید محمد عرف تاج الدین ──
const abuBakr206 = onPage(206, m('ابوبکر', 'عرف بدرالدین', [
  m('وجیہ الدین', [
    jaan206,
    m('غازی الدین', 'عرف غازی خان', [
      m('قطب الدین', [
        m('محمد محسن', [
          m('غلام محی الدین', [mubarakAli206]),
          sharafuddin206,
        ]),
      ]),
    ]),
    m('علی', [muhammad206]),
  ]),
  chand206,
  khundMir206,
]))

// ═════════════════════════ book page 205 (photo page8) ═════════════════════════
// Khandan 37, محلہ حقانی. Photo page8.straight.jpg; the page number PRINTED on the photo is 205 (the task said 200).
// Charts on this page:
//  1. nisarHusain205: "صفحہ ۲۰۴ سید نثار حسین بن سید نذر حسین" (top, whole width)
//  2. aliAkbar205: "صفحہ ۲۰۳ سید علی اکبر عرف بسا بن سید میر بہادر" (right middle)
//  3. abdulRahim205: "صفحہ ۲۰۳ سید عبدالرحیم عرف علی اصغر بن سید ..." (left middle, father's name not printed)

// ───────────── chart 1: نثار حسین بن نذر حسین ─────────────

// منتظر حسین عرف دولھا: six children drawn on one bar that wraps round a box (the last two sit in the box)
const muntazirHusain205 = m('منتظر حسین', 'عرف دولھا', [
  m('اقتدار مہدی'),
  f('اقبال کوثر', 'سید ظفر یاب حسین', 'چاہ غوری'),
  f('نثار فاطمہ', 'سید انتخاب حسین', 'حقانی'), // VERIFY: husband's name (انتخاب / نتخاب)
  f('عزیز فاطمہ', 'سید ظہیر الکرام', 'لکڑہ حال چاہ غوری'),
  m('اظہار مہدی'), // VERIFY: the last two (اظہار / انتظار مہدی) hang off a wrapped box on the same bar
  m('انتظار مہدی'),
])

// منتظم حسین: nine children, five on the top bar and four on a wrapped second bar below
const muntazimHusain205 = m('منتظم حسین', [
  m('نثار اصغر', [m('علی منتظم')]),
  m('منتظم حسین', [m('محمد شبانی')]), // VERIFY: محمد شبانی / شیانی; a tiny word sits above it
  m('علی'),
  m('صغیر المہدی'),
  f('اربعین طلعت', 'سید عباس حسین', 'دانشمندان'),
  f('بہار فاطمہ', 'محمد انور'), // husband printed without سید
  m('ناظم حسین', [f('ندا کلثوم'), m('علی صادق'), f('ضیاء کلثوم')]),
  f('اعجاز فاطمہ', 'سید منور رضا', 'لکڑہ'),
  f('فرحت بانو', 'سید ماہر حسین', 'حقانی'),
])

const mustafizHasan205 = m('مستفیض حسن', [
  muntazimHusain205,
  f('عترت بانو', 'سید آفتاب حسین', 'قاضی گلی'),
  f('معظمہ خاتون', 'سید ماہر حسین', 'چاہ غوری'),
  muntazirHusain205,
])

const anisHasan205 = m('انیس حسن', [
  m('انصار حسین'),
  f('خوشنود بانو', 'سید سخا حیدر', 'حقانی'),
  m('رئیس حسن', [m('معصوم حسن'), m('محسن حسن'), m('منور حسن'), m('مبین حسن')]),
  f('خورشید بانو', 'سلطان حسن', 'رامپور'), // husband printed without سید
])

const nisarHusain205 = onPage(205, m('نثار حسین', [
  m('فدا حسن', 'لاولد'),
  f('کبریٰ خاتون', 'سید اشتیاق حسین', 'گذری'),
  mustafizHasan205,
  m('نیاز حسن', 'لاولد'),
  f('ضامنہ خاتون', 'سید محمد حسین', 'سرائے کہنہ'),
  f('صغریٰ خاتون'),
  f('نفیسہ خاتون', 'سید زائر حسین', 'چاہ غوری'),
  anisHasan205,
  f('انیسہ خاتون', 'سید مظہر حسن', 'قاضی گلی'),
  m('نیاز حسن'),
]))

// ───────────── chart 2: علی اکبر عرف بسا بن میر بہادر ─────────────

const tasaddaqHusain205 = m('تصدق حسین', [
  m('غضنفر عباس'),
  f('اقبال فاطمہ', 'سید قصور رضا', 'لکڑہ'), // VERIFY: husband's name (قصور / منصور)
  m('بختاور عباس'),
])

const aliAkbar205 = onPage(205, m('علی اکبر', 'عرف بسا', [
  m('کرار بخش', [
    m('حاجی حسن', 'لاولد'),
    m('تبارک حسن', [tasaddaqHusain205]),
    m('مومن حسن', 'لاولد'),
  ]),
  m('حسین بخش', 'دختران'),
]))

// ───────────── chart 3: عبدالرحیم عرف علی اصغر ─────────────

// تصور حسین is the 7th child of مصطفیٰ احسن (his arrow hangs off the left end of the same bar, wrapped)
const tasawwurHusain205 = m('تصور حسین', [
  f('سلمیٰ بانو'),
  m('وقار حیدر'),
  m('افتخار حسین'),
  f('نازنین فاطمہ'),
  f('ناہید فاطمہ'),
])

const mustafaAhsan205 = m('مصطفیٰ احسن', [
  m('رضا حسن', [
    m('وسیم حیدر', [m('فہیم حیدر')]), // VERIFY: فہیم / نہیم
    f('نسرین بانو', 'سید شبر حسین کاظمی', 'لکھنؤ'), // VERIFY: a tiny word (کاظمی) sits beside the husband's name
    m('نسیم حیدر'),
    f('ذکیہ بانو', 'سید سرور حیدر', 'لکڑہ'), // VERIFY: husband's first name
    m('شمیم حیدر'),
  ]),
  f('حسین فاطمہ', 'سید شوکت علی', 'حقانی'), // VERIFY: the next daughter below has the identical name and husband
  m('مصور حسین', [m('جاوید حسین'), f('ندا بانو'), f('اسما بانو')]),
  f('حسین فاطمہ', 'سید شوکت علی', 'حقانی'), // VERIFY: same name and husband as the daughter above
  f('ہلال زہرا', 'سید جعفر علی جعفری', 'کشمیر'),
  f('شبیہ فاطمہ', 'سید علی عباس', 'سرسی'), // VERIFY: husband's name (a longer name is partly illegible)
  tasawwurHusain205,
])

const murtazaHasan205 = m('مرتضیٰ حسن', [
  m('ولی حسن', [f('شمیمہ خاتون'), m('تقی حسن'), f('کنیز فاطمہ')]),
  m('علی حسن', 'لاولد'),
])

const razaAli205 = m('رضا علی', [
  m('مشتاق حسن', 'لاولد'),
  murtazaHasan205,
  m('فدا حسین', 'رامپور'), // the note "رامپور" is printed above his name
  m('ارتضیٰ حسن', [
    m('اصطفیٰ احسن', 'لاولد'),
    mustafaAhsan205,
    m('ناصر حسین', 'لاولد'),
  ]),
])

// محی الدین → غلام رسول → مبارک علی → نثار علی → رضا علی is a single line of descent drawn with arrows
const muhiuddin205 = m('محی الدین', [m('غلام رسول', [m('مبارک علی', [m('نثار علی', [razaAli205])])])])

const abdulRahim205 = onPage(205, m('عبدالرحیم', 'عرف علی اصغر', [
  m('سلطان محمد', [
    muhiuddin205,
    onPage(213, m('محمد منور', 'جد سادات محلہ لکڑہ در بارشاہ ولایت')),
  ]),
]))

// ═════════════════════════ book page 204 (photo page7) ═════════════════════════
// Khandan 37 (محلہ حقانی), photo page7.straight.jpg. The page number printed on the photo is 204 (۲۰۴), not 212.
// Two charts, both headed "صفحہ ۲۰۳" (i.e. continued from page 203):
//  1. صفحہ ۲۰۳ سید علی حیدر بن سید علی اصغر            -> aliHaidar204
//  2. صفحہ ۲۰۳ سید محمد علی عرف فدا علی بن سید نور علی  -> muhammadAli204
// Wrapped sibling bars (a bar whose end turns down into a box and runs back along the box's bottom edge) are read as
// ONE sibling list: top row first, each row right to left.


// ───────────────────────── chart 1: سید علی حیدر بن سید علی اصغر ─────────────────────────

const aliHaidar204 = onPage(204, m('علی حیدر', [
  m('ولی حیدر', [
    // Row 1: the bar under ولی حیدر (four daughters, inside a box)
    f('زینب خاتون', 'سید سردار حسین', 'مجاپوتہ'),
    f('نرجس خاتون', 'سید سعادت حسین', 'قاضی زادہ حال چاہ نور'), // VERIFY: mohalla reads "قاضی زادہ حال چاطور"
    f('برجیس خاتون', 'سید محمد مختار', 'قاضی گلی حال شفاعت پوتہ'),
    f('سنجیدہ خاتون', 'سید علمدار حسین', 'مجاپوتہ'),
    // Row 2: the box's bottom edge, run on from the same bar (wrapped sibling list)
    m('رضی حیدر', [f('رضیہ بانو')]),
    m('ذکی حیدر'),
    f('ام لیلی'),
    f('ثریا بانو', 'سید محمد عباس', 'قاضی گلی'),
    f('عطیہ زہرا', 'سید علی رفعت زیدی', 'بجنور'),
    // Row 3: the second box's bottom edge, drawn left to right under the box (wrapped sibling list)
    m('وقار حیدر'), // VERIFY: وقار / ونار
    m('شان حیدر'),
    f('سیما بانو'),
    m('اعجاز حیدر'),
  ]), // VERIFY: the two boxes under ولی حیدر's four daughters are read as wrapped rows of ONE sibling list (13 children); they could instead be the daughters' children
  f('چند ولیا', 'سید تبرک حسین', 'حقانی'), // VERIFY: name reads "چند ولیا"
  m('نقی حیدر', [
    m('وصی حیدر', 'لاولد'),
    f('ذہین فاطمہ', 'سید ذاکر حسین', 'مجاپوتہ'),
    f('رفیقہ خاتون', 'سید مصطفی اعلی', 'دلپت پور'), // VERIFY: husband's name (مصطفیٰ علی؟) and mohalla spelling
    m('تصور حیدر', [
      m('تحسین حیدر'),
      m('تعظیم حیدر'),
      f('حسن فاطمہ'),
      // second row, drawn on the box's bottom edge (wrapped sibling list)
      m('تطہیر حیدر'), // VERIFY: تطہیر / نظہیر
      m('نسیم حیدر'),
      f('حسین فاطمہ'),
      m('محمد حیدر'),
    ]), // VERIFY: the two rows of تصور حیدر are read as one wrapped sibling list of seven
    m('عباس حیدر', [
      m('ندیم حیدر'),
      f('عظیم زہرا'),
      f('نشاط زہرا'),
      f('نایاب زہرا'),
      // second row, drawn on the box's bottom edge (wrapped sibling list)
      m('عظیم حیدر'),
      m('نواب حیدر'),
      m('نایاب حیدر'),
    ]), // VERIFY: row 1 printed ندیم حیدر (left) .. نایاب زہرا (right); read as one wrapped list, but row 2 could be عظیم زہرا's children
    m('سنجا حیدر', [
      f('نعیم زہرا'),
      m('شفا حیدر'),
      f('ذہین زہرا'),
      f('زرین زہرا'),
      m('وقار حیدر'), // VERIFY: وقار / ونار
      f('نسیم زہرا'),
    ]), // VERIFY: hangs from the right end of نقی حیدر's bar (wrapped end); name reads "سنجا حیدر"
  ]),
]))

// ───────────────────────── chart 2: سید محمد علی عرف فدا علی بن سید نور علی ─────────────────────────

// وصی احمد's seven children hang from one snake-shaped bar: it leaves his name down the left edge of the page,
// runs right along the lower row (علی اکبر .. نقی احمد), turns up and runs on along the upper row (مرجبین فاطمہ .. مشفقہ خاتون).
// Read eldest first as upper row right to left, then lower row right to left.
const waseeAhmad204 = m('وصی احمد', [
  f('مشفقہ خاتون', 'سید محمد حیدر', 'پچدرہ'), // VERIFY: mohalla (بچدرہ / پچدرہ)
  f('حسن آرا', 'سید علی اظہر', 'کٹرہ غلام علی'),
  f('مرجبین فاطمہ', 'سید کوثر الحسن', 'مجاپوتہ'), // VERIFY: name (مرجبین / مرجین)
  m('نقی احمد', [
    // one bar of seven; the box's left edge is وفی احمد's line, not part of this bar
    m('رضی احمد'),
    f('کنیز فاطمہ'),
    m('انیس احمد'),
    f('شہلا نقی'), // VERIFY: name reads "شہلا نقی" (سہیلا؟)
    m('صفدر عباس'),
    f('کنیز سیدہ'),
    m('حیدر عباس'),
  ]),
  m('وفی احمد', [
    f('یاسمین فاطمہ'),
    m('ضامن رضا'),
    m('اطہر حسین'), // VERIFY: اطہر / اظہر
    m('وجیہہ حیدر'),
    f('زرین فاطمہ'),
    m('جاوید رضا'),
  ]),
  m('محمد احمد', [
    f('فردوس فاطمہ'),
    m('ضیاء احمد'),
    m('فیضان احمد'),
    f('عروس فاطمہ'),
    m('سرفراز احمد'),
  ]), // VERIFY: his line runs down the left of the page to the bottom bar of five
  m('علی اکبر', [
    m('سلمان اکبر'),
    f('قرۃ العین فاطمہ'), // VERIFY: may be two names (قرۃ العین / فاطمہ), but only three arrows are on the bar
    m('صادقین اکبر'),
    m('حسن اکبر'), // VERIFY: hangs from the right end of the bar (wrapped end), directly under سلمان اکبر
  ]),
]) // VERIFY: whether وصی احمد is the father of this snake bar (the line down from his name is the only feeder; علی رضا / محتشم رضا / واصف رضا / کامران رضا sit above it but have no line into it)

// مشتاق حسین's four children
const mushtaqHusain204 = m('مشتاق حسین', [
  f('احسان زہرا', 'سید عرفان علی', 'بگلہ'),
  f('حبیب زہرا', 'سید ظہیر احمد', 'بگلہ'),
  m('قائم رضا', [m('کامران رضا'), m('واصف رضا'), m('محتشم رضا'), m('علی رضا')]),
  f('سردار زہرا', 'سید معراج حسین', 'قاضی زادہ حال سدو'),
])

const muhammadAli204 = onPage(204, m('محمد علی', 'عرف فدا علی', [
  m('بخش علی', [
    m('فضل حسین', [
      m('نذر حسین', [
        nisarHusain205,
        m('مظہر حسین', [
          m('شاکر حسین', 'لاولد'),
          m('مظاہر حسین', [m('مظاہر حسین')]), // VERIFY: both printed مظاہر / مطاہر حسین (son has the same name as his father)
          m('طاہر حسین', [m('واحد حسین', 'لاولد')]),
          m('عابد حسین', [m('نظیر حسین')]), // VERIFY: نظیر / نسطر
        ]),
        m('عاشق حسین', 'لاولد'),
      ]),
      f('شبیہہ النساء'),
      f('نجیب النساء', 'سید انتظار علی', 'مجاپوتہ'), // VERIFY: name (نجیب / نجیف)
      m('کاظم حسین', 'لاولد'),
      m('صادق حسین', [
        m('عسکری حسن', [
          f('ناظمہ خاتون', 'سید مبارک حسن', 'بخشی'),
          f('کاظمہ خاتون', 'سید محمد متقی', 'دانشمندان'),
          m('عباد الحسن'),
        ]),
      ]),
      m('خادم حسین', [
        f('ربیع النساء', 'سید شادمان علی', 'بگلہ'),
        f('سعیدہ خاتون', 'سید ظریف حسن', 'گذری'),
        mushtaqHusain204,
        f('راشدہ خاتون', 'سید ماہر رضا', 'گذری'),
        m('اشتیاق حسین', [f('کنیزہ خاتون', 'سید الصادقین جعفری')]),
      ]),
    ]),
  ]),
  m('بخش اللہ', 'لاولد، عرف محسن علی'), // VERIFY: "عرف محسن علی" is printed beside his arrow (محس علی)
  m('امام علی', [
    m('داد علی', [
      // the note "(محلہ جنوبی بن جارہے)" is printed beside داد علی / اوسط علی
      m('اوسط علی', [
        f('حاجرہ خاتون', 'سید حامد حسین جعفری'),
        m('علی احمد', 'مفقود الخبر'),
        f('سعیدہ خاتون', 'سید خورشید نقی', 'لکردہ'), // VERIFY: mohalla (لکردہ / نگردہ)
        waseeAhmad204,
      ]),
    ]), // VERIFY: the note "(محلہ جنوبی بن جارہے)" printed beside داد علی is not carried
  ]),
]))

// ═════════════════════════ book page 203 (photo page6) ═════════════════════════
// Khandan 37 (محلہ حقانی), photo page6.straight.jpg, printed book page 203 (not 211 / not 210: the header number reads ۲۰۳)
// Charts on this page:
//  1. صفحہ ۲۰۲ سید نثار مہدی بن سید ضامن علی        -> nisarMahdi203
//  2. صفحہ ۲۰۲ سید ضمیر حسن بن سید قاسم حسین        -> zameerHasan203
//  3. صفحہ ہذا سید عشرت علی بن سید جعفر علی         -> ishratAli203
//  4. صفحہ ہذا سید فرزند علی بن سید جعفر علی        -> farzandAli203
//  5. صفحہ ۲۰۴(؟) دیوان سید الیاس عرف ننجھو بن سید عبدالستار -> dewanIlyas203
//     (leaves: عبدالکریم 211, عبدالرحیم 205, علی اکبر 205, محمد علی 204, علی حیدر 204)

// ───────── Chart 3: عشرت علی (one line of descent) ─────────
const ishratAli203 = onPage(203, m('عشرت علی', [m('مراد علی', [m('سخاوت علی', [m('محمد حسین', [m('ضامن حسین', 'لاولد')])])])]))

// ───────── Chart 4: فرزند علی (one line, then two sons) ─────────
const farzandAli203 = onPage(203, m('فرزند علی', [
  m('عالم علی', [
    m('بنیاد علی', [
      m('علی اکبر', [f('دختر')]), // VERIFY: the book prints just "دختر" with no name
      m('علی اصغر', [
        m('غلام حیدر', 'لاولد'),
        aliHaidar204,
      ]),
    ]),
  ]),
]))

// ───────── Chart 5: دیوان الیاس عرف ننجھو ─────────
const dewanIlyas203 = onPage(203, m('دیوان الیاس', 'عرف ننجھو', [ // VERIFY: heading page number (reads ۲۴ / ۲۰۴) and the عرف word
  m('اسمعیل', [
    m('عبدالصمد'),
    m('حامد', [
      m('سعید خان', [
        abdulRahim205,
        m('عبدالکریم', 'عرف علی اکبر', [
          m('علی احمد', 'محلہ لکڑہ میں آباد ہوئے', [ // VERIFY: the note "محلہ لکڑہ میں آباد ہوئے" sits above this bar, between علی احمد and محمد علی
            m('ولی احمد', [
              m('وارث علی', [
                m('میر بہادر', [ // the drawing reads میر بھاون; the heading of the aliAkbar205 chart (page 205) says بن سید میر بہادر, so the heading is followed
                  aliAkbar205, // VERIFY: عرف لبسا
                  m('غلام سرور', 'لاولد'),
                ]),
              ]),
            ]),
          ]),
          m('محمد علی', [
            m('فیض علی', [
              m('نور علی', [
                muhammadAli204, // VERIFY: عرف فدا علی
              ]),
            ]),
          ]),
          f('سنکھین', 'سید غلام محی الدین', 'گذری', 'مساۃ'), // VERIFY: name reads سنکھین
          m('جعفر علی', [ishratAli203, farzandAli203]),
        ]),
      ]),
    ]),
    m('گدن'),
    abdulKarim211,
  ]),
  m('سلیمان'),
]))

// ───────── Chart 2: ضمیر حسن ─────────
const zameerHasan203 = onPage(203, m('ضمیر حسن', 'رامپور', [ // the "(رامپور)" printed under his name on page 202 is carried as a note

  m('صغیر حسن', 'لاولد'),
  m('جمیل حسن'),
  m('وحید حسن', [
    m('ظہیر الحسن'),
    m('منیر حسن'),
    m('نور الحسن'),
    m('واحد حسین'),
    m('کاظم حسین'),
    m('بشیر حسین'),
  ]),
  m('نظیر الحسن'),
  m('ابرار حسین'),
])) // VERIFY: heading reads ضمیر حسن (could be خیر / ضمیر)

// ───────── Chart 1: نثار مہدی ─────────
const nisarMahdi203 = onPage(203, m('نثار مہدی', [
  m('کرار مہدی', [
    m('ارمان مہدی', [ // VERIFY: ارمان / اومان
      m('غفران مہدی'),
      f('فیضان فاطمہ'),
      f('فرمان فاطمہ'),
      f('ارمان فاطمہ', 'سید کوکب عباس', 'دانشمندان'),
    ]),
    f('کنیز صغریٰ', 'سید ظفر حسن', 'شفاعت پوتہ'),
    f('محسنہ خاتون', 'سید محمد اظہر', 'قاضی گلی'),
    m('علی مہدی', [f('نفیسہ خاتون')]), // VERIFY: نفیسہ / نقیبہ
    f('توقیر بانو', 'سید حامد حسین', 'حقانی'),
    m('محمد مہدی', [
      m('وقار مہدی'),
      m('سرکار مہدی'),
      f('حسن زہرا', 'سید فرمان رضا', 'حقانی حال قاضی زادہ'),
      f('نسیم زہرا', 'سید حسین مہدی', 'شفاعت پوتہ'),
      f('شبیہہ زہرا'),
      m('اوصاف مہدی'),
    ]),
  ]),
  f('سیدہ خاتون', 'سید نجف علی', 'حقانی'), // VERIFY: husband's name (نجف / بخش علی)
  m('گلزار مہدی', 'لاولد'),
  f('ناضیہ خاتون', 'سید غلام مصطفیٰ', 'کنگوئی'), // VERIFY: name (ناضیہ / ناصیہ) and mohalla
  m('انوار مہدی', [
    m('ظہور مہدی', [
      m('زوار مہدی', [
        m('شاندار مہدی'),
        m('نصیر مہدی', [
          f('تسکین بانو'),
          m('ثمر مہدی'), // VERIFY: ثمر / تمر
          m('اطہر مہدی'),
          m('اصغر مہدی'),
        ]),
        f('ممتاز بانو', 'سید علی مہدی', 'حقانی'),
        f('افتخار بانو', 'سید ثناء حسین', 'چاہ شور'), // VERIFY: husband's name
        m('مختار مہدی', [
          m('دلشان مہدی'),
          f('ثنا بانو'),
          m('بوستان مہدی'),
          f('رہنما بانو'),
          m('گلغام مہدی'),
        ]),
        f('شاندار بانو', 'سید صفدر رندر', 'سنبھلی'), // VERIFY: husband's name (صفدر رندر?) and mohalla
        f('شہناز بانو'),
        f('انوار بانو'),
      ]),
    ]),
    f('ہاشمہ خاتون', 'سید علی مہدی', 'حقانی'),
    f('ام لیلیٰ', 'سید شجاع الحسن', 'نگردہ', 'زوجہ ثانی'), // VERIFY: mohalla spelling
    f('کنیز فاطمہ', 'سید سبط احمد', 'چاہ غوری'),
    m('اسرار مہدی', [
      f('عنبرین فاطمہ'),
      f('اسرار فاطمہ', 'سید ماجد حسین', 'قاضی زادہ'),
      f('انوار فاطمہ', 'سید نعیم حیدر', 'نگردہ'), // VERIFY: mohalla spelling
      f('اقبال فاطمہ'),
      // the box's bottom bar wraps round from the left end of the top bar: one sibling list, so these two follow
      m('سکندر مہدی'),
      f('مہ جبین فاطمہ'),
    ]),
  ]),
]))

// ═════════════════════════ book page 202 (photo page5) ═════════════════════════
// Khandan 37 (محلہ حقانی), photo page5.straight.jpg. The page prints book page 202.
// NOTE: the task named this page "210 / صفحہ ۲۰۹ سید شریک حسن بن سید مشتاق حسن", but the photo itself prints 202 and is headed
// "صفحہ ۲۰۱ سید میر علی بن سید غلام علی" (a single chart, continued from page 201). Consts below are therefore named ...202.
//
// Chart 1: صفحہ 201 — سید میر علی بن سید غلام علی (root mirAli202), the whole page.
//   Sons of میر علی: منور علی (امام علی -> حسین علی / مردان علی / مہربان علی) and سعادت علی (نجابت علی, حشمت علی).
//   Sub-families continued on page 203 (onPage stubs): ضمیر حسن and نثار مہدی.
// Wrapped sibling lists (one list, top row first): مستجاب حسین's six, علی حسین's five, نواب علی's four,
//   ضامن علی's four, محمد علی's six.

// ───────── منور علی -> امام علی -> حسین علی ─────────
const qasimHusain202 = m('قاسم حسین', [
  zameerHasan203, // VERIFY: "(رامپور)" is printed under the name
  m('نبی حسین', 'لاولد'),
  m('شبیہ الحسن', 'لاولد'),
])

const muhammadHusain202 = m('محمد حسین', [qasimHusain202, m('حامد حسین', 'لاولد')])

const husainAli202 = m('حسین علی', [muhammadHusain202, m('علمدار حسین', 'لاولد')])

// ───────── مردان علی ─────────
const mardanAli202 = m('مردان علی', [
  m('آعظم علی', [f('رضی النساء', 'سید عبداللہ', 'چاہ شور')]),
  m('کاظم علی', [f('دختر')]), // VERIFY: the daughter is printed just as "دختر"
])

// ───────── مہربان علی: five children on one bar (right to left) ─────────
// غلام حسین, ام ایمن, علی حسین, اصغر علی, شرافت علی

const zawarHusain202 = m('زوار حسین', [
  f('حسن بانو', 'سید محمد مہدی', 'شفاعت پوتہ'),
  m('ظہور حسین', [
    m('سعادت حسین'),
    f('انیس فاطمہ', 'سید ذوالفقار عباس', 'دانشمندان'),
    m('عزادار حسین'),
  ]),
  f('حسن بانو', 'سید شفیق حسن', 'اعوانپور'),
  // مستجاب حسین: six children drawn on two joined bars (top row first)
  m('مستجاب حسین', [
    f('شاہین فاطمہ'),
    f('مہ جبین فاطمہ'),
    f('شہباز فاطمہ'),
    m('استجاب حسین'), // VERIFY: father is printed مستجاب, this son استجاب
    m('شاداب حسین'),
    m('شہزاد حسین'),
  ]),
])

const jawadHusain202 = m('جواد حسین', [
  zawarHusain202,
  f('ناظرہ خاتون', 'سید شمس الحسن', 'سنبھل'),
  f('آمنہ خاتون', 'سید علی حسن', 'بریلی'),
])

const ghulamHusain202 = m('غلام حسین', [
  f('زاہدہ خاتون', 'سید مظفر حسن', 'نگڑہ'), // VERIFY: husband مظفر / مظہر حسن; mohalla spelled like نگڑہ / نکردہ
  jawadHusain202,
])

// علی حسین: top bar (four) then a wrapped second bar (نبی حسین)
const aliHusain202 = m('علی حسین', [
  f('تمکینہ خاتون'),
  f('کنیز فاطمہ', 'سید اسرار حسین', 'چاہ شور'),
  f('تاسمہ خاتون', 'سید مطاہر حسین', 'حقانی'), // VERIFY: name تاسمہ / تبسمہ; husband مطاہر
  f('مدینہ خاتون'),
  m('نبی حسین'),
])

// شرافت علی -> لطافت علی / راحت علی
const nawabAli202 = m('نواب علی', [
  m('آفتاب علی'),
  m('مہتاب علی'),
  f('ملکہ عالیہ'),
  m('شاداب علی'), // wrapped second bar of the same sibling list
])

const wajahatAli202 = m('وجاہت علی', [
  m('اسد وجاہت'),
  f('مزینہ وجاہت'), // VERIFY: مزینہ / مزبینہ
])

const imamAliII202 = m('امام علی', [m('کاظمین علی'), f('امامیہ خاتون'), m('فرحان علی')])

const hurmatAli202 = m('حرمت علی', [nawabAli202, wajahatAli202, imamAliII202])

const rahatAli202 = m('راحت علی', [
  f('مبینہ خاتون', 'سید شبیر علی', 'حقانی'), // VERIFY: husband's first name (شبیر / شہید)
  f('امینہ خاتون', 'سید محمود حسن', 'نخشبی'),
  hurmatAli202,
  f('سکینہ خاتون', 'سید محمد حسین', 'مجاپوتہ'),
])

const shaukatAli202 = m('شوکت علی', [f('یاسمین فاطمہ'), m('تنویر حیدر'), m('ندیم حیدر')])

const munsabAli202 = m('منصب علی', [
  f('شاہدہ خاتون', 'سید رضا حسین', 'حقانی'),
  shaukatAli202,
])

const hasanAli202 = m('حسن علی', [
  m('علی عنبر'), // VERIFY: عنبر / عنصر
  f('انجم فاطمہ'),
  m('حسن عارف'),
  f('شازیہ فاطمہ'),
])

// محمد علی: six children, top bar then a wrapped bar (نظیر فاطمہ)
const muhammadAli202 = m('محمد علی', [
  m('آصف علی'),
  m('محمد جاوید'),
  m('حسین علی'),
  f('شاہین فاطمہ'),
  f('نازین فاطمہ'),
  f('نظیر فاطمہ'),
])

const rahmatAli202 = m('رحمت علی', [hasanAli202, muhammadAli202])

const lataafatAli202 = m('لطافت علی', [rahmatAli202, munsabAli202])

const sharafatAli202 = m('شرافت علی', [lataafatAli202, rahatAli202])

const meharbanAli202 = m('مہربان علی', [
  ghulamHusain202,
  f('ام ایمن', 'سید شبیر حسن', 'نخشبی'),
  aliHusain202,
  m('اصغر علی', 'لاولد'),
  sharafatAli202,
])

const imamAli202 = m('امام علی', [husainAli202, mardanAli202, meharbanAli202])
const munawwarAli202 = m('منور علی', [imamAli202])

// ───────── سعادت علی -> نجابت علی ─────────
const niyazAli202 = m('نیاز علی', [
  m('صغیر حسن', [
    m('سفیر حسن', [f('حسین بانو', 'سید حاجی حسن', 'قاضی زادہ')]), // VERIFY: سفیر / شفیع
    m('وزیر حسن', 'لاولد'),
  ]),
  m('منور حسن', [
    f('سلمیٰ خاتون', 'سید حامد حسین', 'مجاپوتہ'),
    f('مدینہ خاتون', 'سید عسکری حسن', 'چاہ شور'),
  ]),
])

const yaseenAli202 = m('یاسین علی', [niyazAli202])

const arifAli202 = m('عارف علی', [
  m('ریاض حسین', [m('معراج الحسن', 'لاولد')]),
  f('دختر حسین', 'سید ولایت حسین', 'دانشمندان'), // VERIFY: the name is printed "دختر حسین" (just "daughter"?)
  m('ریحان علی', [
    m('باقر حسین', [
      f('خاتون دولت', 'سید صفدر علی', 'دانشمندان'),
      m('علی اختر', [f('اعجاز فاطمہ', 'سید عسکری حسن', 'گدڑی')]), // VERIFY: mohalla گدڑی / گذری
    ]),
    m('سردار حسین', 'لاولد'),
  ]),
])

const najabatAli202 = m('نجابت علی', [yaseenAli202, arifAli202])

// ───────── سعادت علی -> حشمت علی ─────────
const aliHaider202 = m('علی حیدر', [
  m('علی باقر'),
  m('علی گوہر'),
  m('شجاعت حیدر'),
  m('اویس حیدر'),
  m('عذنان حیدر'),
  f('حنا زہرا'),
])

const aliAhmad202 = m('علی احمد', [
  m('علی جعفر', [f('ام رباب')]),
  f('اعجاز فاطمہ', 'سید شوکت عباس رضوی', 'لکھنؤ'),
  aliHaider202,
])

const najafAli202 = m('نجف علی', [
  aliAhmad202,
  f('نادرہ خاتون', 'سید ظفر حسن', 'نگڑہ'), // VERIFY: mohalla spelled like نگڑہ / نکردہ
  f('شمیمہ خاتون', 'سید حسین محمد', 'شفاعت پوتہ'),
  m('آل احمد', [
    f('حسن فاطمہ', 'سید قدرت علی', 'نگڑہ'), // VERIFY: same mohalla spelling
    f('حسین فاطمہ', 'سید غلام عباس', 'نوگانواں', 'حال'), // VERIFY: "حال نوگانواں" (printed like نوگئیاں)
    m('اقرار حیدر'),
  ]),
])

const azeemAli202 = m('عظیم علی', [
  m('قائم علی', [m('غلام علی', 'عرف چھدا', [f('ہاشمہ خاتون', 'سید خوشنود احمد', 'بنگلہ')])]),
  m('حشمت علی', 'لاولد'),
  najafAli202,
])

const ghulamAli202 = m('غلام علی', [azeemAli202, m('غلام عباس', 'لاولد')])

const riyasatAli202 = m('ریاست علی', [
  f('دختر', 'سید جمیل حسین', 'دانشمندان'), // VERIFY: husband's name; the daughter is printed just as "دختر"
  // ضامن علی: four children drawn on a box and a wrapped bar (box row first)
  m('ضامن علی', [
    f('ساجدہ خاتون', 'سید اعجاز حسین', 'چھیوڑہ'),
    f('ماجدہ خاتون', 'سید حیدر مہدی', 'قاضی گلی'), // VERIFY: husband's name (حیدر مہدی)
    f('مینو', 'سید علی صادق', 'ٹنکوئی'), // VERIFY: printed "مسماۃ مینو"; mohalla unclear
    nisarMahdi203, // VERIFY: نثار / شار / شاہ
  ]),
])

const hashmatAli202 = m('حشمت علی', [riyasatAli202, ghulamAli202])

const saadatAli202 = m('سعادت علی', [najabatAli202, hashmatAli202])

// ───────── root: صفحہ 201 سید میر علی بن سید غلام علی ─────────
const mirAli202 = onPage(202, m('میر علی', [munawwarAli202, saadatAli202]))

// ═════════════════════════ book page 201 (photo page4) ═════════════════════════
// Khandan 37 (محلہ حقانی), photo page4. The printed page number on the photo is 201 (the brief said 209).
// Four charts on this page:
//   1. صفحہ ۲۰۰  سید رضا حسین بن سید مسعود حسن   (rizaHusain200)
//   2. صفحہ ۱۹۹  سید ارشاد علی بن سید ذوالفقار علی (irshadAli199)
//   3. صفحہ ۲۲(?) سید فضل بن سید جلال             (fazl22)
//   4. صفحہ ۲۲(?) سید محمد طاہر بن سید خضر        (muhammadTahir22), continues on page 202 with میر علی

// ───────────── Chart 3: صفحہ ۲۲(?) سید فضل بن سید جلال ─────────────
// VERIFY: the heading's page number is printed "۲۲" (probably a longer number, the photo shows two digits)
const fazl22 = onPage(201, m('فضل', [
  m('امام بخش', [
    m('مندھو', 'لاولد'), // VERIFY: spelling (مندھو / مندھو)
    m('چھٹو', 'لاولد'), // VERIFY: spelling (چھٹو / چھتو)
  ]),
  m('اللہ بخش', [
    m('نصیب علی', [
      m('مظہر علی', 'لاولد'), // VERIFY: مظہر / منظر
      m('واحد علی', 'لاولد'),
    ]),
  ]),
]))

// ───────────── Chart 4: سید محمد طاہر بن سید خضر ─────────────
// VERIFY: heading page number printed "۲۲"; father's name reads خصر / خضر
const muhammadTahir22 = onPage(201, m('محمد طاہر', [m('غلام علی', [mirAli202])]))

// ───────────── Chart 2: صفحہ ۱۹۹ سید ارشاد علی بن سید ذوالفقار علی ─────────────
const irshadAli199 = onPage(201, m('ارشاد علی', [
  // زاہد علی (right) and عابد علی (left)
  m('زاہد علی', [
    m('شاہد علی', [m('وزیر علی', 'ساکن جے پور')]), // VERIFY: the place in brackets (جے پور / مجاپور)
    f('دختر', 'سید ابوالحسن', 'دانشمندان'), // VERIFY: the book gives no name, only "دختر"
    m('ماجد علی', [
      // آل معصومین: four children on the top bar, four more on the bar below it (wrapped, one list)
      m('آل معصومین', [
        f('طاہرہ خاتون'),
        f('نگہت انجم'),
        f('نورین بانو'), // VERIFY: نورین / ذوعین
        f('نجم السحر'),
        m('سبطین رضا'),
        m('ثقلین رضا', [m('افشین رضا')]), // VERIFY: افشین رضا printed without سید
        m('ذوالقرنین رضا'),
        m('حسنین رضا'),
      ]),
    ]), // VERIFY: ماجد علی (could be ماشد)
  ]),
  m('عابد علی', [
    f('انوار بانو', 'سید شاہد علی', 'حقانی'),
    m('ساجد علی', [
      m('محمد علی', [
        m('مجاہد علی', [
          m('آصف علی'),
          m('عارف رضا'),
          m('عامر رضا'),
          m('کاشف رضا'),
          f('کہکشاں بانو'),
          m('ناصر رضا'),
        ]),
      ]),
      f('تمکنہ خاتون', 'سید رضا حسین', 'قاضی زادہ'),
      f('تسلیمہ خاتون', 'سید آل احمد', 'نگردہ'), // VERIFY: mohalla (نگردہ / تکردہ)
      f('تحسینہ خاتون', 'سید ممتاز حسن', 'سدو'), // VERIFY: name (تحسینہ / تحسین) and husband's first name
      m('واجد علی', [
        m('واحد علی', [
          m('حسن احمد', [
            f('حسن نوہ'), // VERIFY: name is cut by the photo's edge in places (حسن نوہ)
            m('علیم اختر'),
          ]),
          f('حسن مسلمی', 'سید ابصار احمد', 'منی پور اناؤ'), // VERIFY: husband's first name (ابصار / انصار), mohalla
          m('حسن حیدر', [
            m('ندیم اختر'),
            m('نعیم اختر'),
            f('حسن زیبا'), // VERIFY: زیبا / ریبا
            f('حسن شہلا'),
            f('حسن رعنا'),
            m('عظیم اختر'),
          ]), // VERIFY: a small note "عرف ..." sits above his name, unreadable
        ]),
        f('شاہدہ خاتون', 'سید مطاہر حسن', 'سدو'), // VERIFY: husband's first name
        f('شمیمہ خاتون', 'سید شاکر حسین', 'گذری'),
        f('حامدہ خاتون', 'سید علمدار حسین', 'گذری'),
        f('تصویر فاطمہ', 'سید محمد حیدر', 'بگلہ'),
        f('مصورہ خاتون', 'سید ناظر حسین', 'گذری'),
        f('شاعرہ خاتون', 'سید شبیب الحسن زیدی', 'گولی قاضی زادہ'), // VERIFY: husband's first name (شبیب / شعیب)
        m('ذوالفقار علی', [
          f('شمع زہرا'),
          f('فردوس زہرا'),
          f('عصمت زہرا'),
          f('شان زہرا'),
          m('اسد منار عالم'), // VERIFY: the middle word (منار / مختار / منظر)
          f('شفقت زہرا'),
          m('اسد علی'),
        ]),
      ]),
    ]),
    f('حسین بانو', 'سید عسکری حسین زیدی', 'جڑودی حال نوگنیاں'), // VERIFY: mohalla (جڑودی / جروری)
  ]),
]))

// ───────────── Chart 1: صفحہ ۲۰۰ سید رضا حسین بن سید مسعود حسن ─────────────
// مصطفیٰ احسن's children are drawn in a box: the daughters on the top bar and the three below on the box's bottom bar
// (one sibling list, top bar first). Printed father's name reads "صعدر حسین" in the heading, so VERIFY.
const rizaHusain200 = onPage(201, m('رضا حسین', [
  m('مصطفیٰ احسن', [
    f('ناذک بانو'),
    f('اصطفائی خاتون', 'سید ہاشم رضا', 'قاضی زادہ'),
    f('خورشید بانو'),
    f('مصطفائی خاتون', 'سید عطا حسین', 'حقانی'),
    f('نایاب بانو'),
    m('حسن مجتبیٰ', [m('رضا حسن'), f('حسین بانو')]),
    m('مختار عباس'),
    f('شیر بانو', 'سید زائر حسین', 'حقانی'),
  ]), // VERIFY: the bottom bar (حسن مجتبیٰ, مختار عباس, شیر بانو) could instead hang from مصطفائی خاتون
  f('رئیس خاتون', 'سید زائر حسین', 'چاہ غوری'), // VERIFY: name (رئیس / رسیم)
  m('اصطفیٰ احسن', [
    m('مہتاب حسن', [
      // a tiny word "مسعود" is written beside his name
      f('کمال فاطمہ'),
      f('حسین فاطمہ', 'سید امام حیدر', 'حقانی'),
      f('شمیم فاطمہ'),
      m('تاجدار حسین'),
      f('مہ جبین فاطمہ'), // VERIFY: مہ جبین / محسن
      m('آفتاب حسین'),
    ]),
    f('مہمان فاطمہ', 'سید امتیاز الحسن زیدی', 'گولی قاضی زادہ'),
    m('التجا حسین'),
    m('عطا حسین', [
      f('ناذک بانو'), // VERIFY: drops from the right end of the bar, not from an arrow on it
      f('بلقیس فاطمہ'),
      m('مزدار حسین'), // VERIFY: مزدار / مراد
      m('محمد اختر', [
        m('اصطفیٰ اجمال'),
        m('حسین محمد'),
        m('اصطفیٰ کمال'),
        f('حسن زہرا'),
        m('محمد انور'),
      ]),
      m('بہادر حسین'), // VERIFY: printed without سید but a male name
      m('محمد اکبر'),
    ]),
  ]),
]))

// ═════════════════════════ book page 200 (photo page2) ═════════════════════════
// Khandan 37 (محلہ حقانی), photo page2.straight.jpg, book page 200 (printed number; task said 207).
// The photo carries three charts, each headed "صفحہ 199":
//   1. سید عاشق حسین بن سید سجاد حسین  (ashiqHusain200)
//   2. سید بشیر علی بن سید نظیر علی    (bashirAli200)
//   3. سید عطا حسین بن سید شرف الدین علی (ataHusain200)
// NOTE: this photo does NOT contain the heading سید دولت علی بن سید رستم علی.
// Wrapped sibling bars (snake-shaped boxes) are read as one sibling list, eldest first.

// ───────── Chart 1: سید عاشق حسین بن سید سجاد حسین ─────────

const ashiqHusain200 = onPage(200, m('عاشق حسین', [
  m('امانت حسین', [
    m('ناظر عباس'),
    f('صبا زہرا', 'سید ہاشم عباس', 'چھیوڑہ'),
    m('سکندر عباس', [f('کنول زہرا'), f('بشریٰ'), m('عادل عباس')]),
    f('شیرین خاتون'),
    f('مزنبہ خاتون'), // VERIFY: first name is hard to read (مزنبہ / منیبہ)
  ]),
  m('صادق حسین', 'لاولد'),
  f('ناطقہ خاتون', 'سید واجد حسین', 'کٹرہ غلام علی'),
  m('مشتاق حسین', 'لاولد'),
  // ناطق حسین: thirteen children on three joined (snaking) bars: 4 + 4 + 5
  m('ناطق حسین', [
    f('عشرت بانو'),
    f('فرحت بانو'),
    f('عترت بانو'), // VERIFY: عترت / عنترت
    f('نازنین بانو'),
    f('کنیز بانو', 'سید خورشید حسین'), // VERIFY: husband's first name (خورشید)
    f('تصویر فاطمہ', 'سید علی حسین'),
    f('مسرت بانو', 'سید رضی حسین'),
    f('قمر بانو', 'سید شباب حیدر', 'بچدرہ'), // VERIFY: mohalla spelled بچیدرہ
    m('شجاعت علی', [
      m('اقبال رضا'),
      f('شہلا شاہین'),
      m('جاوید رضا'),
      m('سلیم رضا'),
      m('شمیم رضا'),
      m('فہیم رضا'),
      m('حسن رضا'),
      f('سلمیٰ شاہین'),
      f('گل زہرا'),
      m('کاشف رضا'),
      f('عذرا شاہین', 'سید عارف رضا', 'چھیوڑہ حال بچدرہ'),
      f('کنول زہرا'),
      m('علی رضا', [m('آل رضا'), m('اسد رضا')]),
    ]),
    f('عصمت بانو', 'سید غیور حسین', 'سادات بارہہ'), // VERIFY: a small word "زیدی" sits beside her name; husband's first name
    f('ثروت بانو', 'سید مظفر حسین', 'محمود آباد'),
    m('بضاعت علی', [f('قمر زہرا'), m('خرم علی'), f('کائنات زہرا')]),
    m('لیاقت علی', [
      m('عمران رضا'),
      f('قرۃ العین'),
      m('احسن رضا'),
      m('ریحان رضا'),
      f('نگین زہرا'),
    ]),
  ]),
]))

// ───────── Chart 2: سید بشیر علی بن سید نظیر علی ─────────

const bashirAli200 = onPage(200, m('بشیر علی', [
  f('میمونہ خاتون', 'سید جعفر حسین', 'قاضی زادہ'),
  m('آل علی', 'لاولد'),
  m('علی تقی', 'لاولد'),
  m('آل نبی', [
    f('ظہیرہ خاتون', 'سید ماجد حسین', 'کٹرہ غلام علی'), // VERIFY: husband's name (ماجد / ماجدین)
    f('شاکرہ خاتون', 'سید معظم حسین', 'حال نوگنیاں'), // VERIFY: mohalla
    m('اظہر نبی', 'لاولد'),
    f('زاہرہ خاتون', 'سید سلطان حسین', 'قاضی زادہ'),
    m('اختر نبی', [
      m('چاند', [m('آفتاب نبی')]),
      m('حسن علی', [f('فرزانہ')]),
      f('لطیفہ خاتون', 'سید گوہر علی', 'شفاعت پوتہ'),
      f('محفوظہ خاتون', 'سید چاند بابو', 'دھولڑی'), // VERIFY: mohalla (دھولڑی)
      m('معراج النبی'),
      f('محمودہ خاتون', 'سید عابد حسین', 'نگینہ'),
      m('بدر النبی', [f('پروین زہرا'), m('قیصر علی'), f('نسرین زہرا')]),
      m('قمر النبی'),
    ]),
    f('طیبہ خاتون', 'سید آل محمد', 'حقانی'),
    f('رازفر خاتون', 'سید ظہیر حسن', 'بچدرہ'), // VERIFY: her name (رازفر / رافعہ) and mohalla spelling بچیدہ
    f('مہتاب فاطمہ', 'سید نجم الحسن', 'شاہی چبوترہ'),
    m('افسر نبی', [f('فیض فاطمہ')]),
  ]),
  f('حسینہ خاتون', 'سید ابرار حسین', 'حقانی'),
  m('ذیشان علی', 'لاولد'),
  f('آمنہ خاتون', 'سید انوار نبی', 'حقانی'), // VERIFY: husband's name (انوار نبی)
]))

// ───────── Chart 3: سید عطا حسین بن سید شرف الدین علی ─────────

const ataHusain200 = onPage(200, m('عطا حسین', [
  m('حسین علی', [
    m('احمد حسین', 'لاولد'),
    f('دختر', 'سید ہادی حسن', 'دانشمندان'), // VERIFY: the book gives no name, only "دختر"
    m('علی حسین', 'لاولد'),
    m('ابوالحسن', [m('آل حسن', [f('دختر')])]), // VERIFY: the child of آل حسن is printed only as "دختر"
    m('میر حسن', 'لاولد'),
  ]),
  m('محمد حسین', 'لاولد'),
  m('بہادر حسین', [m('صفدر حسین', [rizaHusain200])]),
]))

// ═════════════════════════ book page 199 (photo page1) ═════════════════════════
// Khandan 37 (محلہ حقانی), book page 199 (photo page1).
// One chart: "صفحہ ۲۲  سید محمد علی بن سید میر علی" (muhammadAli199) -- the khandan root.
// Continuations off this page: ارشاد علی (صفحہ 201), عطا حسین (صفحہ 200), بشیر علی (صفحہ 200), عاشق حسین (صفحہ 200).
// Layout notes:
//  - اولاد مرتضیٰ's two daughters sit in a box whose bottom edge is a second bar holding عنایت حسین, ظفر حسن and
//    غلام مرتضیٰ; read as ONE sibling list, box row first.
//  - رئیس حسن's four children are inside a box (نعیم حیدر, زرتاج بانو, سلمیٰ بانو, ندیم حیدر); نعیم حیدر's son
//    محمد حسن is drawn inside the box and the box bottom edge carries محمد حسن's three sons.
//  - وحید حسین's top bar wraps down its right end into a second bar (عزیز فاطمہ, مسرت فاطمہ): one list, top row first.
//  - مختار محمد's bar (نثار فاطمہ / نفیس حسن / وحید حسین) runs along the bottom edge of the box holding
//    ریاض فاطمہ and حمید حسن (children of مبارک حسن).



// رئیس حسن's line (box). Box bottom bar: sons of محمد حسن (son of نعیم حیدر, drawn inside the box).
const muhammadHasanGrandson199 = m('محمد حسن', [
  m('وسیم حیدر'),
  m('ناصر مسعود', [
    f('انجم زہرا'),
    m('محمد حیدر'),
    f('وجیہہ بانو'),
    m('رئیس حسن حمزہ'), // VERIFY: one name or two (رئیس حسن / حمزہ)
  ]),
  m('طاہر مسعود', [
    f('ثناء طاہر'), // VERIFY: spelling (printed ثنا طاہر)
    m('محمد رضا'),
    f('سحر طاہر'),
    f('زہرا طاہر'),
  ]), // VERIFY: طاہر مسعود's bar is read from the line dropping from his name; it runs under ناصر مسعود's children
]) // VERIFY: box bottom bar attached to محمد حسن (inside the box), not to the box as a whole

const raeesHasan199 = m('رئیس حسن', [
  m('نعیم حیدر', [muhammadHasanGrandson199]),
  f('زرتاج بانو', 'سید جاوید شاہد عابد', 'لکھنؤ'), // VERIFY: name (زرتاج / زرناج) and husband (جاوید شاہد عابد may be two men)
  f('سلمیٰ بانو', 'سید محمد ناظم', 'حقانی'),
  m('ندیم حیدر'),
])

// محمد حسن (son of محسن علی)
const muhammadHasan199 = m('محمد حسن', [
  raeesHasan199,
  f('ستاج فاطمہ', 'سید کاظم حسین', 'حقانی'), // VERIFY: name (ستاج / سراج)
  m('احمد حسن', [
    f('نسیم بانو'),
    m('محمد قائم'),
    f('شمیم بانو'),
  ]),
  m('شجاع الحسن', [
    f('ستارہ', 'سید خوشنود مہدی', 'گذری'), // VERIFY: husband's name
    m('سخا الحسن'), // VERIFY: spelling
  ]),
])

// احسن علی (son of غلام مرتضیٰ)
const ahsanAli199 = m('احسن علی', [
  f('دختر', 'سید قاسم حسین', 'حقانی'),
  f('زاہدہ خاتون', 'سید عزیز الحسن', 'گذری'),
  m('محسن علی', [muhammadHasan199]),
  f('دختر', 'سید وصف الحسن', 'گذری'),
])

// باقر حسین's line
const wahidHusain199 = m('وحید حسین', [
  // top bar, right to left
  f('اختر فاطمہ'),
  f('حسن فاطمہ', 'سید نقی ہادی', 'لکڑہ'), // VERIFY: husband (نقی / لقی) and mohalla (لکڑہ / ککڑہ)
  f('مرور فاطمہ', 'سید محمد تقی', 'منڈی چوب'), // VERIFY: name (مرور / سرور) and husband's name
  m('کاظم رضا', [
    m('رئیس حیدر', [
      f('معجز رئیس'),
      f('سکینہ رئیس'),
      f('عین فاطمہ'),
    ]),
  ]),
  m('حسن رضا', [
    f('نور صبا'),
    m('وسیم حیدر'),
    f('زرین فاطمہ'),
    m('محمد شاندار'),
    f('فرحین فاطمہ'),
    m('رضا کمال'),
  ]), // VERIFY: these six hang from the long vertical at the far left that ends at حسن رضا
  // wrapped second bar, right to left
  f('عزیز فاطمہ', 'سید اکبر بجنتی', 'چھیوڑہ حال جعفری'), // VERIFY: husband (بجنتی?) and mohalla
  f('مسرت فاطمہ', 'سید محمد علی', 'حقانی'),
]) // VERIFY: the wrapped second bar (عزیز فاطمہ, مسرت فاطمہ) is read as part of the same sibling list

const mukhtarMuhammad199 = m('مختار محمد', [
  f('نثار فاطمہ', 'سید واحد علی', 'حقانی'),
  m('نفیس حسن', [
    f('نایاب فاطمہ', 'سید حسن بن حامد', 'کنکوئی'), // VERIFY: husband "حسن بن حامد"
    f('انعام فاطمہ', 'سید اعتماد حسین', 'گھیر مناف'),
    f('نسیم فاطمہ', 'سید عمران حیدر', 'لکڑہ'), // VERIFY: mohalla
  ]),
  wahidHusain199,
])

const sadiqHusain199 = m('صادق حسین', [
  m('آل احمد', 'لاولد'),
  m('آل محمد', [
    m('وصال محمد'),
    m('بلال محمد'), // VERIFY: بلال / جلال
    m('نہال محمد', 'مفقود الخبر'), // VERIFY: note reads مفقود الخبر
    m('اسرار محمد', [
      f('امرت بانو'),
      f('صباح زہرا'),
    ]),
    mukhtarMuhammad199,
  ]),
])

const baqirHusain199 = m('باقر حسین', [
  f('دولت', 'سید صفدر نذر', 'دانشمندان'), // VERIFY: husband's name
  f('دھنو', 'سید علی اسلم', 'پچدرہ'), // VERIFY: mohalla spelled بچدرہ
  sadiqHusain199,
  f('بدھو', 'سید ابوالحسن', 'بخشی'), // VERIFY: husband's name (printed الواحسن)
  f('تولی', 'سید محمد حسن', 'چاہ شور'),
])

const maqsoodHusain199 = m('مقصود حسین', [
  baqirHusain199,
  m('مقبول حسین', [
    m('مبارک حسن', [
      f('ریاض فاطمہ', 'سید محمد حامد', 'کنتوئی'), // VERIFY: mohalla
      m('حمید حسن', 'لاولد'),
    ]),
    m('معجز حسن', 'لاولد'),
  ]),
])

// اولاد مرتضیٰ's line
const awladMurtaza199 = m('اولاد مرتضیٰ', [
  // box row
  f('دختر', 'سید مراد علی', 'دانشمندان'),
  f('دختر', 'سید فیض علی', 'دانشمندان'),
  // box bottom bar
  m('عنایت حسین', [m('سجاد حسین', [ashiqHusain200])]), // VERIFY: سجاد (printed ستجاد)
  m('ظفر حسن', 'لاولد'),
  m('غلام مرتضیٰ', [
    ahsanAli199,
    m('محمد مرتضیٰ', 'لاولد'),
  ]),
]) // VERIFY: box row and bottom bar read as one sibling list

// chart: سید محمد علی بن سید میر علی (صفحہ 22)
const muhammadAli199 = m('محمد علی', [
  m('طفیل محمد', [
    m('لطف علی', 'حقانی', [ // VERIFY: حقانی is printed beside the name; read as a note
      m('حسن علی', [
        m('رحمت علی', [m('اکبر علی', [f('دختر')])]),
        m('حمایت علی', 'لاولد'),
        m('اولاد علی', 'عرف بینیگا', [awladMurtaza199]), // VERIFY: عرف reading (بینیگا / ہینیگا) and whether it belongs to اولاد علی or اولاد مرتضیٰ
        m('آل نبی', [
          m('آل مصطفیٰ', 'لاولد'),
          m('نظیر علی', [bashirAli200]), // VERIFY: نظیر / نظر
        ]),
      ]),
      m('احمد علی', [
        m('ذوالفقار علی', [irshadAli199]),
        f('دختر', 'سید سخاوت علی', 'دانشمندان'),
        m('شرف الدین علی', [
          m('منظور حسین', [
            m('خادم حسین', 'لاولد'), // VERIFY: خادم حسین / خادم حسنین
            m('خادم حسن', 'لاولد'),
            m('خادم حسین', 'لاولد'),
          ]),
          maqsoodHusain199,
          ataHusain200,
        ]),
      ]),
    ]),
  ]),
  m('غضنفر علی', 'لاولد'),
  m('روشن علی', [
    m('محمد طاہر', 'لاولد'),
    m('مظفر علی', 'لاولد'),
    m('کریم علی', [m('رحیم علی', 'لاولد')]),
  ]),
])

const khandan: BookKhandan = {
  serial: 37,
  mohalla: 'Haqqani',
  trees: [
    { page: 199, father: 'میر علی', root: muhammadAli199 },
    { page: 201, father: 'جلال', root: fazl22 },
    { page: 201, father: 'خضر', root: muhammadTahir22 },
    { page: 203, father: 'عبدالستار', root: dewanIlyas203 },
    { page: 206, father: 'محمد عرف تاج الدین', root: abuBakr206 },
  ],
}

export default khandan

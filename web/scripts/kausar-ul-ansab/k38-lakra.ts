// Kausar-ul-Ansab (1999), pages 213–223: محلہ لکڑہ (دربار شاہ ولایت)
// Khandan 38 in the book's index: اولاد سید محمد منور بن سید سلطان محمد
//
//   page 213  سید محمد منور بن سید سلطان محمد (headed "صفحہ ۲۰۵"): the khandan root, four sons
//   page 214  two charts, headed "صفحہ ۲۱۳": سید نصیر حسن بن سید امیر حسن, سید فیض احمد بن سید ابدال محمد
//             (plus two small charts, حمورابی and حیدر کرار sons of محمد تقی, already nested in نصیر حسن's tree)
//   page 215  three charts, headed "صفحہ ۲۱۴": محمد مجتبیٰ بن مصطفیٰ علی, مرتضیٰ علی بن میر علی, بشیر علی بن قائم علی
//   page 216  two charts, headed "صفحہ ۲۱۵": امیر باقر بن محمد باقر, حسین بن بشیر علی
//   page 217  two charts, headed "صفحہ ۲۱۴": مظفر حسن بن نذیر حسن, مہدی حسن بن رجب علی (بنارس میں حالیہ)
//   page 218  سراج حسین بن مہدی حسن (headed "صفحہ ۲۱۷"), with مختار حسین and حیدر حسن "صفحہ ہذا" nested inside
//   page 219  صاحب علی بن فیض احمد (headed "صفحہ ۲۱۴"), with رضا علی "صفحہ ہذا" nested inside
//   page 220  ولی احمد بن ابدال محمد (headed "صفحہ ۲۱۳")
//   page 221  two charts, headed "صفحہ ۲۲۰": آل احمد بن ظہور حسن, محمد وزیر احمد بن ولی احمد
//   page 222  محمد پناہ بن عبدالوالی (headed "صفحہ ۲۱۳")
//   page 223  two charts, headed "صفحہ ۲۲۲": ضرغام حیدر بن ابن حیدر, اکبر حسین بن نبی حسین
//
// Wiring: every "صفحہ N" stub is replaced by the chart it points to, and each of those chart roots is
// wrapped in onPage(its own book page), so the descendants carry the right page. Consts run deepest
// continuation first, the root page (213) last.
//
// FOR A HUMAN TO CHECK
//  - Photo-to-page mapping: the workflow's page numbers for photos page4-page11 and page5 were not the
//    printed ones. The printed numbers (216, 217, 218, 219, 220, 221, 222, 223) were used; pages
//    213-223 are each present exactly once, none missing, no duplicates. The stub page numbers inside
//    the charts (215, 216, 217, 218, 219, 221, 223) all agree with this mapping.
//  - HEADING OVER DRAWING: on page 213 the stub for ولی احمد reads "صفحہ ۲۳۰" (VERIFY). His chart is on
//    page 220 and is headed "بن ابدال محمد", so it hangs under ابدال محمد at page 220.
//  - HEADING OVER DRAWING: page 214 draws "ظفر حسن" (stub, صفحہ ۲۱۷) under نذیر حسن; the chart on
//    page 217 is headed "مظفر حسن بن نذیر حسن". Taken as the same man (ظفر read for مظفر).
//  - The stub "محمد پناہ" (page 222) hangs under عبدالوالی, matching its heading. "مرغام حیدر" on page 222
//    (name doubtful) is wired to the chart headed ضرغام حیدر بن ابن حیدر on page 223.
//  - Page 223 heading names ضرغام حیدر and نبی حسین are doubtful; page 222 draws the latter as بنی حسین.
//  - Page 217: ظریف الحسن's eight bars are read as ONE sibling list of 22 (snake layout); some rows may
//    be separate generations. Check against the printed book.
//  - Page 213: عابد علی's three bars and علی احمد's wrapped row (سبطین احمد, حسین احمد possibly بنت زہرا's
//    own children). Page 216: تقی رضا's box. Page 220: نور حسن's three bars (row order a guess).
//  - Page 214: ظفر حسن, mirAliSon222 is میر علی son of قائم علی, kept separate from میر علی (غلام شبر).
//  - Page 219: ہتور حسین / بیمر رضا readings doubtful. Page 215: the "صفحہ ۲۱۶" tag by حسین may belong to the
//    frame line, not to him (the heading of his chart on page 216 says بن بشیر علی, so followed).
//  - Page 218 "صفحہ ہذا" charts (مختار حسین, حیدر حسن) are nested in سراج حسین only, not trees of their own.
//  - Page 223 bottom: photographs of the Imambargah of Mohalla Lakra, no chart. Page 213 root reads
//    منور (the brief said منصور).
//  - Many VERIFY marks remain in the data (mohalla spellings, husband names, aliases).

import { f, m, onPage, type BookKhandan } from './book'

// ───────────────────────── photo page11 · book page 223 ─────────────────────────
const aliHaidar221 = m('علی حیدر', [
  m('حیدر مہدی', [f('زہیر فاطمہ')]), // VERIFY: ظہیر / زہیر فاطمہ
  m('رضوان حیدر'),
  f('بنت حیدر'), // VERIFY: printed without سید, "بنت حیدر" may be a descriptor rather than a name
  m('فیروز حیدر'),
])

// عباس حیدر: two children in a drawn box whose bottom edge wraps into a second bar (one sibling list)
const abbasHaidar221 = m('عباس حیدر', [
  m('لقا عباس'),
  f('مہتاب فاطمہ'),
  m('ندیم حیدر'), // VERIFY: second row of the wrapped bar; could instead be children of لقا عباس
  m('عظیم حیدر'),
  m('سلیم حیدر'),
])

const naseemHaidar221 = m('نسیم حیدر', [
  m('وسیم حیدر'),
  m('فہیم حیدر'), // VERIFY: printed without سید but a male name
  f('حسین فاطمہ'),
  m('ابن حیدر'),
  m('نعیم حیدر'),
  f('تبسم فاطمہ'),
])

const taqiHaidar221 = m('تقی حیدر', [
  m('ثقلین حیدر'), // VERIFY: ثقلین / لقلین
  f('شیریں بانو'),
  m('حسنین حیدر'),
  m('تنویر حیدر'), // VERIFY: spelling
])

const sarghamHaidar221 = onPage(223, m('ضرغام حیدر', [ // VERIFY: heading name (ضرغام حیدر / ضرغام جبلا)
  aliHaidar221,
  f('باہرہ خاتون', 'سید محمد حسین', 'سرسی'),
  abbasHaidar221,
  f('نازک خاتون', 'سید صفدر حسین', 'سرسی'),
  naseemHaidar221,
  m('شمیم حیدر', 'سید کاشف حیدر'), // VERIFY: "سید کاشف حیدر" is written under his name with no arrow (alias or note?)
  taqiHaidar221,
]))

// ───────────────────────── chart 2: اکبر حسین ─────────────────────────

// علی رضا: four children
const aliRaza221 = m('علی رضا', [
  m('حسین رضا'),
  f('عالیہ سلطانی', 'سید نوقمر حسین زیدی', 'بھندیر پٹی'), // VERIFY: husband's name and mohalla
  m('افضال رضا', [m('اسد رضا'), m('وجیہہ رضا')]),
  m('اقبال رضا'),
])

const nafeesRaza221 = m('نفیس رضا', [
  m('سکندر نفیس'),
  f('ارم نفیس'), // VERIFY: printed without سید
  m('دانش نفیس'),
])

const qaimRaza221 = m('قائم رضا', [
  m('عرفان رضا'),
  m('تاج رضا'),
  m('کمال رضا'),
  f('عذیر فاطمہ'), // VERIFY: عذیر / عدیر
])

const hasanRaza221 = m('حسن رضا', [
  qaimRaza221,
  nafeesRaza221,
  m('منظور رضا'),
])

const sibtainRaza221 = m('سبطین رضا', [
  m('مہدی رضا'),
  f('العبہ خاتون', 'سید سردار حسین', 'بچدرہ'), // VERIFY: name (العبہ) and husband's name
  m('محسن رضا'),
])

const muhammadRaza221 = m('محمد رضا', [
  hasanRaza221,
  aliRaza221,
  f('حبیبہ خاتون'),
  sibtainRaza221,
  m('کاظم رضا'),
])

const walayatHusain221 = m('ولایت حسین', [
  f('امینہ خاتون', 'سید ارتضیٰ حسن', 'قاضی زادہ'),
  muhammadRaza221,
])

const azharulHasan221 = m('اظہر الحسن', [
  f('بے بی'), // VERIFY: reads "بے بی" / "بی بی"
  f('شبانہ', 'سید شمیم رضا', 'سادات بارہہ'), // VERIFY: husband's first name
  m('نقی حسن'), // VERIFY: نقی / لقی
  m('ارشد حسن'), // second row of a wrapped bar (box around نقی حسن)
])

const qamarulHasan221 = m('قمر الحسن', [
  f('معراج فاطمہ'),
  m('اصغر حسن'),
  f('حسین فاطمہ'),
])

// بدر الحسن: six children on a bar that wraps to a second row (چمن is the last)
const badrulHasan221 = m('بدر الحسن', [
  f('سکینہ خاتون', 'سید دلشان حیدر', 'عثمان پور'), // VERIFY: husband's name and mohalla (a word "حیدر" sits between her name and the next)
  qamarulHasan221,
  f('روبینہ خاتون', 'سید قائم رضا', 'گھیر مناف'),
  m('شبیہ الحسن'),
  f('نازک بانو'),
  m('چمن'), // VERIFY: name read as چمن
])

const mazharHusain221 = m('مظہر حسین', [
  m('محمود الحسن', 'لاولد'),
  m('قمر الحسن', 'لاولد'),
  f('ناظمہ خاتون', 'سید اختر علی', 'شاہی چبوترہ'),
  azharulHasan221,
  f('فضہ خاتون', 'سید مشتاق حسین', 'دربار کلاں'),
  // second row of the wrapped bar
  badrulHasan221,
  m('شمس الحسن', 'مفقود الخبر'),
])

const akbarHusain221 = onPage(223, m('اکبر حسین', [
  mazharHusain221,
  walayatHusain221,
]))

// ───────────────────────── photo page10 · book page 222 ─────────────────────────
const qasimHusain222 = m('قاسم حسین', [
  f('توقیرہ خاتون', 'سید سرور حسین', 'لکڑہ'),
  m('توقیر حسین', [
    m('ظہیر حسین', [
      m('ارمان حیدر'),
      f('ارمان فاطمہ', 'سید منصور حسین', 'حقانی'), // VERIFY: husband's first name (منصور / مصطفیٰ)
      f('حضور فاطمہ'),
    ]),
  ]),
  f('تفسیرہ خاتون', 'سید اصغر علی', 'مجاپوتہ'), // VERIFY: husband line is cramped (read "ادلی سید اصغر علی")
])

const faqirullah222 = m('فقیر اللہ', [m('میر علی', [m('تاج الدین', [qasimHusain222])])])

const khurshidQasim222 = m('خورشید القاسم', [
  // top row
  f('کشور سلطانہ', 'سید صغر عباس', 'صابو نگران'), // VERIFY: husband's name; she sits in a box whose bottom edge is the second row
  m('خورشید حیدر'),
  f('انجم بانو', 'سید ظل نقین', 'دانشمندان'), // VERIFY: husband's name (ظل نقین)
  f('شہلا بانو', 'سید سائر رضا', 'دانشمندان'),
  m('خورشید رضا'),
  // second row (wrapped)
  m('خورشید نور', [m('حسن'), f('سونیا'), f('صبیحہ خاتون')]), // VERIFY: sons/daughter order (حسن and سونیا in a box, صبیحہ on its bottom edge)
  m('خورشید انور', [m('عون محمد'), f('حنا زہرا'), m('سجاد')]),
  m('خورشید اختر', [f('قرۃ العین'), m('علی')]),
  m('خورشید گوہر', [m('شہریار'), f('شازیہ')]),
  m('خورشید قیصر', [m('محسن'), f('سیمی'), m('احسن'), f('سہوش')]),
])

const aaleNabi222 = m('آل نبی', [
  f('کنیز فاطمہ', 'سید اجمل حسین', 'چاہ شور'), // VERIFY: husband's name (اجمل / اجل)
  m('منہاج النبی', 'عرف خوجنوی', [m('وقار عباس'), m('غلام عباس'), m('منظر عباس')]), // VERIFY: the tiny عرف above his name is hard to read
  f('صادقہ خاتون', 'سید اعتقاد محمد', 'حلالی'),
  f('فاطمہ خاتون', 'سید مہربان علی زیدی', 'جرودی حال دربار کلاں'), // VERIFY: mohalla (جرودی / حرودی)
  m('معراج النبی', [khurshidQasim222, f('بلقیس فاطمہ', 'سید ظہیر الحسن زیدی', 'مظفر نگر')]),
  f('کنیز کبریٰ', 'سید لقی نذر', 'سنبھی'), // VERIFY: husband's name
])

const daimAli222 = m('دائم علی', [
  m('فرزند علی', [
    m('آل علی', 'لاولد'),
    f('عقیلہ خاتون', 'سید فرحت علی', 'حقانی'),
    aaleNabi222,
    f('شکیلہ خاتون', 'سید خورشید حسن', 'شفاعت پوتہ'),
  ]),
])

const zakirAli222 = m('ذاکر علی', [m('جعفر علی', [m('وصی حسین', 'لاولد')])])

const anwarAli222 = m('انور علی', [daimAli222, m('محمد زمان', 'لاولد'), zakirAli222])

// نعیم حیدر's family under محمد حیدر: top row in the box, then a row hanging from the box's bottom edge
const muhammadHaidar222 = m('محمد حیدر', [
  m('نعیم حیدر'),
  f('خوشبو زہرا'),
  f('نصرت بانو'),
  m('فہیم حیدر'), // VERIFY: drawn on the box's left side, may belong at the end of the list
  m('شفیق حیدر'),
  m('وسیم حیدر'),
  m('انیس حیدر'),
  m('نسیم حیدر'),
])

const nafeesHaidar222 = m('نفیس حیدر', [
  f('منصورہ خاتون'),
  m('ذوالفقار حیدر'),
  f('معصومہ خاتون', 'سید ذکی حسن', 'دانشمندان'),
  m('منور حیدر'),
])

const raisHaidar222 = m('رئیس حیدر', [
  muhammadHaidar222,
  f('حدیثہ خاتون', 'سید انتظار حسین', 'عماد پور'), // VERIFY: mohalla (read عثمان پور / عماد پور)
  nafeesHaidar222,
])

const hasanHaidar222 = m('حسن حیدر', [
  m('علی حیدر'),
  m('خورشید حیدر'),
  m('نوید حیدر'),
  f('عین فاطمہ'),
  m('ممتاز حیدر'), // wrapped second row inside the box
  m('تنویر حیدر'),
])

const shamimHaidar222 = m('شمیم حیدر', [
  m('نعیم حیدر'),
  f('سیما پروین'),
  m('شان حیدر'),
  f('شازیہ پروین'),
  m('شعیب حیدر'),
  f('طاہرہ پروین'),
  m('شاہ زیب حیدر'),
  f('نازیہ پروین'),
  m('فہیم حیدر'),
])

const inaamHaidar222 = m('انعام حیدر', 'عرف ابن محمد', [
  m('ذہین حیدر'),
  f('نجمہ پروین', 'سید اقبال حیدر', 'سہارنپور'),
  shamimHaidar222,
  f('اختر پروین', 'سید محمد عباس زیدی', 'سادات بارہہ'),
  hasanHaidar222,
])

const ibnHaidar222 = m('ابن حیدر', [
  f('سجیلہ خاتون', 'سید اصغر نذر', 'سنبھی'), // VERIFY: husband's name
  f('نازک بانو', 'سید ریحان حسن', 'شفاعت پوتہ'),
  sarghamHaidar221, // VERIFY: name reads like مرغام / عرغام; book says "صفحہ 223"
  inaamHaidar222,
  raisHaidar222,
])

const ghulamHaidar222 = m('غلام حیدر', [
  f('سعیدہ خاتون', 'سید انیس حسن', 'گذری'),
  m('امیر حیدر', 'لاولد'),
  f('کنیز فاطمہ', 'سید قاسم حسین', 'شفاعت پوتہ'),
  f('رئیسہ خاتون', 'سید رئیس حیدر', 'لکڑہ'),
])

const fidaHusain222 = m('فدا حسین', [ibnHaidar222, ghulamHaidar222])

const nabiHusain222 = m('بنی حسین', [akbarHusain221, fidaHusain222])

const munawwarAli222 = m('منور علی', [nabiHusain222, m('علی حسین', [m('محمد حسن', 'لاولد')])])

const muhammadSalah222 = m('محمد صلاح', [munawwarAli222, anwarAli222])

const muhammadPanah222 = onPage(222, m('محمد پناہ', [muhammadSalah222, m('محمد ماہ', 'لاولد'), faqirullah222]))

// ───────────────────────── photo page9 · book page 221 ─────────────────────────
const zahoorAbbas221 = m('ظہور عباس', [
  m('ثمر عباس'), // VERIFY: first letter (ثمر / شمر / قمر)
  f('ظہور فاطمہ'),
  m('قمر عباس'),
  f('تصویر فاطمہ'),
  m('شاہ عباس'),
])

const manzoorAhmad221 = m('منظور احمد', [
  f('احسان فاطمہ', 'سید سلطان حسن', 'مجاپوتہ'),
  zahoorAbbas221,
  f('عزیز فاطمہ', 'سید سراج الدین', 'نور لیود'), // VERIFY: mohalla spelling
  f('شفیق فاطمہ', 'سید ضیاء الحسن', 'چھیوڑہ'),
  m('عاشق عباس'),
])

const masoodAhmad221 = m('مسعود احمد', [
  m('کمال مسعود'),
  f('شمیم فاطمہ', 'سید افتخار حسین', 'بلندشہر'),
  m('اقبال مسعود', [m('رضوان اقبال')]),
])

const khursheedAalam221 = m('خورشید عالم', [
  m('مسرور احمد'), // VERIFY: مسرور / مسزور
  m('فراز احمد'),
  m('شیراز احمد'),
  f('فردوس'),
  f('امروز'), // VERIFY: gender (printed without سید)
])

const mansoorAhmad221 = m('منصور احمد', [
  m('عام علی'), // VERIFY: عام / عامر
  m('جمشید علی'),
  m('اسد علی'),
  f('عندلیب فاطمہ'),
  m('مختار عالم'),
  f('ممتاز فاطمہ', 'سید ابرار حسین زیدی', 'لکھنؤ'), // VERIFY: husband's name (ابرار / حیدر)
  f('نسرین فاطمہ', 'سید وحید الحسن زیدی', 'جونپور'), // VERIFY: small word after name (زیدی / زہری) and mohalla
  khursheedAalam221,
  f('ناہید فاطمہ', 'سید انصار حسین زیدی', 'لکھنؤ'),
])

const hasanAbbas221 = m('حسن عباس', [
  f('کنول حسن'),
  f('شازیہ حسن'),
  f('نوشابہ حسن'),
  f('فوزیہ حسن'),
  f('نازیہ حسن'),
  f('فرزانہ حسن'), // VERIFY: drawn on a second row hanging from the bar's right end; order among siblings assumed last
])

const maasoomAhmad221 = m('معصوم احمد', [hasanAbbas221])

const aalAhmad221 = onPage(221, m('آل احمد', [
  mansoorAhmad221,
  f('شان فاطمہ', 'سید حسین محمد', 'لکڑہ'),
  f('حسن فاطمہ', 'سید اکرام حسن', 'کٹرہ غلام علی'),
  maasoomAhmad221,
  f('مطلوبہ خاتون', 'سید محمد تقی', 'لکڑہ'),
  masoodAhmad221,
  f('محمودہ خاتون', 'سید وحی احمد', 'حقانی'), // VERIFY: husband's name (وحی)
  manzoorAhmad221,
]))

// ───── chart 2: محمد وزیر احمد ─────

const mazharAbbas221 = m('مظفر عباس', [
  m('علی رضا'),
  m('حسن رضا'),
  m('کاظم رضا'),
  m('محمد رضا'),
  f('عطیہ زہرا', 'سید اقبال حسن زیدی', 'گولی قاضی زادہ'),
  f('شبیہ زہرا', 'سید جاوید زیدی'),
  f('رباب فاطمہ'),
  f('نرجس خاتون'),
])

const nisarHaider221 = m('نثار حیدر', [
  f('انس فاطمہ'),
  m('اعجاز حیدر'),
  f('نورین فاطمہ'),
  m('امام حیدر'),
  f('عنبرین فاطمہ'),
])

const aqdasHusain221 = m('اقدس حسین', [
  mazharAbbas221,
  f('شمیم زہرا', 'سید علی جاد', 'کنکوئی'), // VERIFY: husband's name and mohalla
  nisarHaider221,
])

const aftabHaider221 = m('آفتاب حیدر', [f('سمیعہ بتول'), f('حنا بتول')])

const shamimHaider221 = m('شمیم حیدر', [
  f('ملیحہ بتول'),
  m('عمران حیدر'),
  f('سمیر بتول'),
])

const sibtHaider221 = m('سبط حیدر', [
  aftabHaider221,
  f('پروین فاطمہ', 'سید ستارے مہدی', 'کنکوئی'), // VERIFY: husband's name and mohalla
  f('ناہید فاطمہ', 'سید اختر جمال', 'کنکوئی'), // VERIFY: mohalla
  shamimHaider221,
])

const sibtPaighambar221 = m('سبط پیمبر', [
  f('ام فروہ'),
  f('فضل فاطمہ', 'سید قمر عباس', 'چھڑودی حال سدو'), // VERIFY: mohalla
  f('نجمہ بانو'),
  m('فضل پیمبر', [f('ثمرین زہرا'), f('فرحین زہرا')]), // VERIFY: ثمرین / شمرین
  f('فضل زہرا', 'سید مصدق عباس', 'دانشمندان'),
  m('فضل حیدر', [m('حسن حیدر')]),
])

const ansarHusain221 = m('انصار حسین', [
  aqdasHusain221,
  f('معظمہ خاتون', 'سید ولی حسن', 'قاضی زادہ'),
  f('مبارکہ خاتون', 'سید ضمیر الحسن', 'دانشمندان'),
  sibtHaider221,
  f('بنت زہرا', 'سید عروج الحسن', 'چھیوڑہ حال دانشمندان'),
  sibtPaighambar221,
])

const nisarHusain221 = m('نثار حسین', [
  m('ابرار حسین', 'لاولد'),
  f('زرینہ خاتون', 'سید عزادار حسین', 'دانشمندان'),
  ansarHusain221,
  f('سفینہ خاتون', 'سید ریاض حسن', 'گذری'),
  f('بلو', 'سید ناصر حسن', 'چھیوڑہ حال دانشمندان', 'سماۃ'),
])

const ghafoorAli221 = m('غفور علی', [
  f('کنیز زینب', 'سید عظیم علی', 'کھوجا حال دانشمندان'), // VERIFY: mohalla (کھوجا / کوچا)
  nisarHusain221,
  f('بشیر النساء', 'سید فضل حسین', 'دانشمندان'),
])

const muhammadWazeerAhmad221 = onPage(221, m('محمد وزیر احمد', [
  ghafoorAli221,
  m('سنجو', 'لاولد'), // VERIFY: name reads سنجو / سنجھو
  m('ظفر علی', 'لاولد'),
  m('غضنفر علی', 'لاولد'),
]))

// ───────────────────────── photo page8 · book page 220 ─────────────────────────
// "صفحہ ۲۲۱" under محمد وزیر احمد (ولی احمد's youngest son)

// ───────────── رحیم اللہ's line ─────────────

// ابوالحسن's son مظہر حسین
const mazharHusain218 = m('مظہر حسین', [
  // شجاع الحسن: five children on one bar (the first drawn at the elbow of the bar)
  m('شجاع الحسن', [
    f('حسن فاطمہ', 'سید ابن الحسن', 'شفاعت پوتہ'), // VERIFY: name (حسن / حسین فاطمہ)
    f('پروین فاطمہ', 'سید شمیم اختر', 'کٹرہ غلام علی'),
    m('نسیم الحسن', [
      f('حناز زہرا'), // VERIFY: first word (حناز / خناز)
      m('ندیم عباس'),
      m('دلاور عباس'),
      f('عنبرین زہرا'),
      f('ام زہرا'),
    ]),
    f('شبیہ فاطمہ', 'سید احسان حسین', 'ہوگلہ حال مجاپوتہ'), // VERIFY: mohalla (ہوگلہ؟)
    f('لبین فاطمہ', 'سید محسن حسین', 'قاضی زادہ'), // VERIFY: first word (لبین / لیین)
  ]),
  m('اظہر الحسن', 'لاولد'),
  m('شبیہ الحسن', [
    f('نازنین بانو'),
    m('شمیم حیدر', [
      m('مہدی حیدر'),
      m('نورین حیدر'), // VERIFY: no سید visible in the photo, taken as male
      m('عمران حیدر'),
    ]),
    m('محمد حیدر', [m('ذوالفقار حیدر'), m('علی حیدر'), m('وقار حیدر')]),
    m('رضا حیدر', [m('عنبرین حیدر')]), // VERIFY: عنبرین حیدر has no سید printed, taken as male
  ]),
  f('فاطمہ خاتون', 'سید ولی حیدر', 'حقانی'),
  f('زہرا خاتون'),
])

// ابوالحسن: four children on one bar (the first drawn at the bar's elbow)
const abulHasan218 = m('ابوالحسن', [
  f('رضیہ خاتون', 'سید محمد مصطفیٰ', 'لکڑہ'),
  f('عقیلہ خاتون', 'سید مومن حسین', 'لکڑہ'),
  mazharHusain218,
  f('چھوٹی', 'سید غلام مصطفیٰ', 'چھیدرہ'), // VERIFY: the word مسماۃ is printed with her name; mohalla (چھیدرہ)
])

const rahimUllah218 = m('رحیم اللہ', 'عرف رحیم الٰہی', [
  // VERIFY: the عرف note above رحیم اللہ is small and runs into کریم اللہ's name
  m('باسط علی', [f('جمعی', 'سید مظاہر حسین', 'جعفری')]), // VERIFY: husband's name (مظاہر / مطاہر) and whether جعفری is his place
  m('اعظم علی', [
    m('محمد نقی', [f('دختر')]), // the book gives no name, only "دختر"
    m('محمد محسن', 'لاولد'),
    m('ظہور حسن', [
      f('رقیہ خاتون', 'سید نثار حسین', 'لکڑہ'),
      m('آل حسن', [
        f('حسنہ خاتون', 'سید ماجد حسین', 'قاضی گلی'),
        f('زائرہ خاتون', 'سید معصوم احمد', 'لکڑہ'),
      ]),
      aalAhmad221,
    ]),
    abulHasan218,
  ]),
  m('بشارت علی', [m('موسیٰ علی', 'لاولد')]),
])

// ───────────── عظیم اللہ's line ─────────────

// قاسم حسین بن داد علی
const qasimHusain218 = m('قاسم حسین', [
  m('کاظم حسین', 'لاولد'),
  m('ہاشم حسین', [f('مہ جبین فاطمہ', 'سید تنویر حسین', 'کٹرہ غلام علی')]), // VERIFY: husband's name (تنویر / تہور)
  m('خادم حسین', [
    f('سجاد فاطمہ', 'سید افضال احمد', 'بگلہ'), // VERIFY: mohalla (بگلہ)
    f('ارمان فاطمہ', 'سید تقی الحسن', 'چھیوڑہ حال دانشمندان', 'زوجہ ثانی'), // VERIFY: husband's mohalla spelling
  ]),
  f('محسنہ خاتون', 'سید شاکر حسین', 'مجاپوتہ'),
])

// مومن حسین بن داد علی: three children on one bar
const momenHusain218 = m('مومن حسین', [
  m('محفوظ حسین', [
    f('عزیز فاطمہ', 'سید مجاہد حسین', 'حقانی'), // VERIFY: first name (عزیز / عنبر)
    m('شان حیدر', [
      // six children drawn on one bar; the first (عرفان حیدر) is at the bar's elbow
      m('عرفان حیدر'), // VERIFY: عرفان is drawn at the right-hand elbow of the bar, below ندیم حیدر
      m('ندیم حیدر'),
      m('ثمرین حیدر'),
      m('وسیم حیدر'),
      m('عنبرین حیدر'),
      m('افشین حیدر'),
    ]),
  ]),
  f('ثقینہ خاتون', 'سید ہاشم حسین', 'لکڑہ'), // VERIFY: first letter (ثقینہ / نقینہ / لقینہ)
  m('مستفیض حسین', [
    m('دلاور عباس'),
    f('شہناز فاطمہ', 'سید امام علی', 'حقانی'),
    f('اعجاز فاطمہ', 'سید خورشید احمد', 'لکڑہ'),
    m('محمد یوسف'),
  ]),
])

const azeemUllah218 = m('عظیم اللہ', [
  m('داد علی', [
    qasimHusain218,
    f('راضیہ خاتون', 'سید واحد حسین', 'گذری'),
    momenHusain218,
  ]),
  m('سجاد علی', [
    m('غنی حسن', 'لاولد'),
    f('مسلمہ خاتون', 'سید ریاض الحسن', 'گذری'),
    f('مومنہ خاتون', 'سید امام بخش', 'قاضی زادہ'),
    f('مبینہ خاتون', 'سید قاسم حسین', 'لکڑہ'),
  ]),
])

// ───────────── کریم اللہ ─────────────

const kareemUllah218 = m('کریم اللہ', 'عرف کھوچا', [
  // VERIFY: the عرف note sits just left of the arrow above کریم اللہ
  m('رحمت علی', [m('علی حسین', 'لاولد')]),
])

// ───────────── نعیم اللہ's line ─────────────

// نور حسن: ten children. Drawn as three bars joined by connector lines: the top bar (محمد نور عین, ستارہ خاتون),
// whose left end turns down into a second bar (محمد نذیر عین ... علی حسین), whose right end turns up into a third
// bar (نذار حسین ... حسنین محمد). Listed bar by bar, right to left inside each bar, top bar first.
const noorHasan218 = m('نور حسن', [
  // VERIFY: the whole order of this wrapped list (the connectors could also be read as a snake: left to right on the lower bars)
  m('محمد نور عین', [m('فیضان حسین')]),
  f('ستارہ خاتون', 'سید دلشاد حسین', 'سنبھلی'), // VERIFY: husband's name and mohalla
  m('محمد نذیر عین'),
  m('محمد عین', 'لاولد'),
  // محمد حسنین: nine children on one long bar (the first drawn at the bar's right elbow)
  m('محمد حسنین', [
    f('یاقوت فاطمہ'),
    m('محمد عباس'),
    f('چاند فاطمہ'),
    m('علی عباس'),
    f('گلزار فاطمہ'),
    m('حسن عباس'),
    f('زمرد فاطمہ'),
    m('حسین عباس'),
    f('گلشن فاطمہ'),
  ]),
  m('علی حسین', 'لاولد'),
  m('نذار حسین'), // VERIFY: name (نذار / نزار / نذر)
  f('نرگس آشیانہ'), // VERIFY: one name or two (نرگس / آشیانہ); one arrow serves both words
  m('حسین محمد'),
  m('حسنین محمد'),
])

// معشوق حسین: three children
const mashooqHusain218 = m('معشوق حسین', [
  m('منظور حسین', [f('طہیرہ خاتون', 'سید محمد نبی', 'چاہ شور')]), // VERIFY: his name (منظور / مذور) and her name (طہیرہ / ظہیرہ)
  m('صغدر حسین', [f('ظہیرہ خاتون', 'سید نظام حسین زیدی', 'جڑودی حال لکڑہ')]), // VERIFY: her name and the mohalla
  noorHasan218,
])

// خورشید حیدر: eight children on one bar
const khurshidHaider218 = m('خورشید حیدر', [
  m('محمد ظفر', [m('انوار حیدر')]),
  f('اشتیاق فاطمہ', 'سید شجاعت علی جنوی', 'دہلی'), // VERIFY: husband's name (جنوی / حنوی)
  m('محمد عرفان'),
  f('اقبال فاطمہ', 'سید حضور حسن', 'دربار کلاں'),
  m('محمد وقار حیدر'),
  f('شباب دولت', 'سید عباس اکرم', 'دربار کلاں'),
  f('آفتاب دولت', 'گلزار احمد', 'کشمیر'), // husband printed without سید
  f('تبسم پروین', 'سید کاظم رضا', 'گذری'),
])

// علمدار علی: three children on one bar (fed by the long line down the left edge)
const alamdarAli218 = m('علمدار علی', [
  m('عاشق حسین', [
    f('تسلیمہ خاتون', 'سید آل احمد', 'لکڑہ'),
    m('انوار حسن', [khurshidHaider218]),
    f('زہرا خاتون', 'سید صغدر حسین', 'لکڑہ'),
  ]),
  f('سخاوت النساء', 'سید امیر علی', 'لکڑہ'),
  mashooqHusain218,
])

// اصغر علی: four children on two joined bars (top bar یوسف علی, عباس علی; its left end turns down into the second bar)
const asgharAli218 = m('اصغر علی', [
  m('یوسف علی', [f('دھنو', 'سید حمید حسن', 'لکڑہ')]), // VERIFY: her name (دھنو / دکھنو) and husband (حمید / حامد)
  m('عباس علی', [m('عسکری حسن', 'لاولد')]),
  // VERIFY: order of the second bar (read right to left: ابراہیم علی then علمدار علی)
  m('ابراہیم علی', [
    m('اسمعیل', 'لاولد'),
    f('طاہرہ خاتون', 'سید معشوق حسین', 'لکڑہ'),
  ]),
  alamdarAli218,
])

const naeemUllah218 = m('نعیم اللہ', [
  m('قدرت علی', [f('دختر')]), // the book gives no name, only "دختر"
  asgharAli218,
])

// ───────────── the page's root ─────────────

// Heading: صفحہ ۲۱۳ سید ولی احمد بن سید ابدال محمد
const waliAhmad218 = onPage(220, m('ولی احمد', [
  rahimUllah218,
  kareemUllah218,
  azeemUllah218,
  m('امین اللہ', [f('دختر')]), // the book gives no name, only "دختر"
  naeemUllah218,
  muhammadWazeerAhmad221,
]))

// ───────────────────────── photo page7 · book page 219 ─────────────────────────
const razaAli217 = m('رضا علی', [
  m('وصیت حسین', 'لاولد'),
  f('معینہ خاتون'),
  m('آل علی', [
    m('نبی محمد', 'لاولد'),
    m('آل محمد', [
      m('حسنین محمد', 'لاولد'),
      f('ادریسہ خاتون', 'سید جواد مہدی', 'گھیر مناف'), // VERIFY: mohalla (گھیر مناف / غیر مناف)
      m('سبطین محمد', [
        f('صائمہ سبطین'),
        f('فاطمہ سبطین'),
        f('مہرین سبطین'),
        // the daughters sit in a drawn box whose bottom edge is a second bar: the two sons below are the same sibling list
        m('محمد رضا'),
        m('اسد رضا'),
      ]),
      f('طہیرہ خاتون', 'سید عالیجاہ حسین'),
      m('حسین محمد', [
        f('شائستہ پروین', 'سید محمد اقبال', 'شفاعت پوتہ'),
        m('عارف عباس', [m('واصف مہدی')]),
      ]), // VERIFY: a small word follows his name (read نابل / قابل)
    ]),
    f('طاہرہ خاتون', 'سید علی صفی رضا', 'گھیر مناف'), // VERIFY: mohalla
    m('ابدال محمد', 'لاولد'),
  ]),
  m('علی حسن', 'لاولد'),
])

// ───────────── chart 1: صاحب علی بن فیض احمد ─────────────

// Sarwar Husain's eldest son. The photo prints it like ہتور حسین.
const hatoorHusain217 = m('ہتور حسین', [
  m('مبشر حسین', [
    // nine children on one stepped (wrapped) bar, eldest first
    f('فرح بتول'),
    f('ثمانہ بتول'), // VERIFY: ثمانہ / شمامہ
    f('سکینہ بتول'),
    f('سیما بتول'),
    f('رابعہ بتول'), // VERIFY: printed like رالعبہ
    m('ضیغم عباس'),
    m('مدثر حسین'), // VERIFY: مدثر
    f('عذرا بتول'),
    m('اسد عباس'),
  ]),
  f('عزیز فاطمہ', 'سید شفاعت حسین زیدی', 'گولی حال قاضی زادہ'),
  m('سردار حسین', [m('ریحان عباس'), m('رضوان عباس'), f('کرن زہرا'), m('عمران عباس'), f('ارم زہرا')]),
  m('کرار حسین', [f('خورشید زہرا'), m('علی عباس'), f('شمیم زہرا')]),
  f('کنیز فاطمہ', 'سید شاہد نذر', 'بخشی'), // VERIFY: mohalla (بخشی / ہشتی)
]) // VERIFY: the first name reads ہتور / منظور

const tasawwurHusain217 = m('تصور حسین', [
  m('بیمر رضا', [f('عظیم زہرا'), f('بزم زہرا'), f('نجم زہرا'), f('نغمہ زہرا'), m('ظفر عباس')]), // VERIFY: بیمر; نغمہ printed لغمہ
  m('مہدی رضا'),
  m('محمد رضا', [m('فہیم رضا'), m('سلیم رضا'), m('ارشد رضا'), m('اسلم رضا')]),
  f('حسین بانو', 'سید سیادت حسین', 'قاضی زادہ'),
  f('شفیقہ خاتون', 'سید امین ہادی', 'قاضی زادہ'), // VERIFY: husband's name
  f('فیفہ خاتون', 'سید وقار حسین', 'بچیدرہ', 'زوجہ ثالث'), // VERIFY: name (فیفہ / نفیسہ); وقار
  m('قائم رضا', [f('شاہین فاطمہ'), f('افشاں فاطمہ'), m('ندیم رضا'), m('سعید رضا'), f('نشاط فاطمہ')]), // VERIFY: سعید / عبید
])

const sarwarHusain217 = m('سرور حسین', [
  hatoorHusain217,
  tasawwurHusain217,
  f('امینہ خاتون', 'سید شجاعت حسین', 'گولی حال قاضی زادہ'),
  m('متبشر حسین'), // drawn in a jog of the bar; no children
  f('منصورہ خاتون', 'سید وقار حسین زیدی', 'سنبھل پور'), // VERIFY: the line above her husband reads زیدی; mohalla
  m('منصور حسین', [m('عظیم حسین'), f('پاکیزہ خاتون'), m('تنویر حسین')]), // VERIFY: عظیم حسین has a scribble under the name
  f('حسین بانو', 'سید ابرار حسین', 'دربار کلاں'),
  m('غلام عباس', [m('قاسم عباس'), m('فہیم عباس')]),
  m('تصویر حسین', [m('انتظار حسین'), f('حسین زہرا')]),
  m('تغیر حسین', [m('سلیم رضا'), f('سیما بانو'), m('نعیم رضا')]),
])

const mahmoodHasan217 = m('محمود حسن', [
  m('قیصر رضا', [
    // two bars joined at the right end: one sibling list
    f('رشک قمر'), // VERIFY: printed رشنگ قمر
    f('نجم السحر'),
    m('وقار محمود'),
    f('قرۃ العین', 'سید کاشف رضا', 'لکھنؤ'),
    m('افتخار محمود'),
  ]),
  f('کنیز زہرا', 'سید وزیر حسن', 'مجاپوتہ'),
  f('کنیز فضہ', 'سید افتدار حسین', 'نگردہ'), // VERIFY: mohalla (نگردہ / لکردہ)
])

const tanveerHasan217 = m('تنویر حسن', [
  m('ظہور حیدر'),
  f('حسین فاطمہ', 'سید عمران حسین', 'بچیدرہ', 'زوجہ اولیٰ'),
  f('شمامہ', 'سید عمران حسین', 'بچیدرہ', 'زوجہ ثانی'), // VERIFY: a small word (چنی) sits above her name; the husband line could belong to the next sister
  f('شہر بانو'), // VERIFY: husband line sits between her and شمامہ
  m('ظہور مہدی'),
  f('ظہور فاطمہ'),
])

const munawwarHusain217 = m('منور حسین', [
  tanveerHasan217,
  mahmoodHasan217,
  m('مظفر حسن', [
    m('شجر حسین', [f('انیس فاطمہ'), m('قمر حسن'), m('احمد عباس'), m('وسیم عباس'), m('حسن عباس')]),
    m('اطہر حسین', [m('گوہر علی'), m('جوہر علی'), m('حیدر علی')]),
  ]),
  f('ام لیلیٰ', 'سید ماہر حسین', 'بگلہ'),
  m('مجاہد حسین', [f('نرجس فاطمہ', 'سید افضال حسین', 'لکھنؤ')]), // VERIFY: husband's surname (زیدی؟)
])

const badrulHasan217 = m('بدر الحسن', [
  m('حسنین محمد', [
    m('گوہر عباس', [f('نور زہرا')]),
    f('مرجین فاطمہ'), // VERIFY: مرجین / مرجینہ
    m('مسعود رضا', [f('فریال'), m('موسیٰ رضا'), m('مجتبیٰ رضا'), m('میثم رضا')]),
    m('مقصود رضا'),
    m('طاہر عباس'),
  ]), // VERIFY: his name reads حسنین / حسین محمد
])

const jauharAli217 = m('جوہر علی', [
  sarwarHusain217,
  f('ناظمہ خاتون', 'سید ابرار حسین', 'بچیدرہ'),
  f('کنیز کبریٰ', 'سید مراد احمد', 'بخشی'), // VERIFY: mohalla
  m('مسلم حسین', 'لاولد'),
  badrulHasan217,
  munawwarHusain217,
  m('نور حسین', [f('ثمینہ خاتون', 'سید حمید حسن', 'حقانی')]),
  m('مظفر حسین', [
    f('مطاہرہ خاتون', 'سید انتظار حسین', 'گذری'),
    f('مطاہرہ خاتون', 'سید انتظار حسین', 'گذری'), // VERIFY: the book prints the same name and husband twice
    m('مظفر حسین', 'لاولد'), // VERIFY: name reads like مضغفر / منظفر حسین
  ]),
])

const sahibAli217 = onPage(219, m('صاحب علی', [jauharAli217, razaAli217]))

// ───────────────────────── photo page6 · book page 218 ─────────────────────────
const mukhtarHusain216 = m('مختار حسین', [
  m('سلمان حسین', [f('غزالہ بانو'), f('راحینہ بانو')]),
  f('نفیسہ خاتون', 'سید ادریس حسن', 'قاضی زادہ حال مجاپوتہ'), // VERIFY: mohalla wording
  f('بنی فاطمہ', 'سید قمر الحسن', 'مجاپوتہ'),
  m('مہدی', [
    f('مہ لقا بانو', 'سید اسد رضا'),
    m('محمد علی'),
    f('شمس آرا', 'سید ضیا حیدر', 'لکڑہ'), // VERIFY: mohalla (لکڑہ / نگڑہ)
    m('مرتضیٰ علی'),
    f('نعیم زہرا'),
    m('حسن علی'),
    f('فرحت زہرا'),
  ]),
  f('عصمت آرا', 'سید علی عباس', 'لکڑہ'), // VERIFY: mohalla
  f('عفت آرا', 'سید محمد خامس زیدی', 'سامانہ گذری'), // VERIFY: husband's name
  f('طلعت آرا', 'سید سعید الحسن', 'دانشمندان', 'عرف مہ جبیں'),
])

// ───────── Chart 3: حیدر حسن ─────────
const haidarHasan216 = m('حیدر حسن', [
  f('ماہ بانو', 'سید محمد تصویر', 'دانشمندان'),
  m('مہدی حسن', [
    f('ماہ منور', 'سید رضا حیدر', 'بگلہ'),
    m('ریاض حیدر'),
    f('ماہ تبسم', 'سید مقصود احمد', 'بخشی'), // VERIFY: mohalla (بخشی / نخشی)
    f('عظمیٰ مہدی', 'سید خوشتر', 'گذری'),
    f('زیبا مہدی', 'سید حسن عباس', 'دانشمندان'),
    m('سراج حیدر', [m('فرہاد مہدی')]),
  ]),
  f('خورشید بانو', 'سید انتظار حسین', 'شفاعت پوتہ'),
  f('شہر بانو', 'سید حضور احمد', 'بگلہ', 'عرف لاڈو'), // VERIFY: first name (شہر / شبیر)
  f('قمر بانو', 'سید اقبال حسین', 'چھنگا دروازہ'),
  f('زہرا بانو', 'سید یاور عباس', 'صابو نگراں'), // VERIFY: mohalla
  m('علی حیدر', [f('بتول زہرا')]),
])

// ───────── Chart 1: اکرام حسین's descendants (bottom of page, one long wrapped bar) ─────────
const ikramHusain216 = m('اکرام حسین', [
  f('فرزانہ خاتون'),
  m('باقر عباس', [f('ضحیٰ باقر'), m('داؤد عباس'), f('عبیر فاطمہ')]), // VERIFY: داؤد / داور
  m('عابد عباس', [m('عرفان عباس')]), // VERIFY: عرفان / عمران
  m('حسن عباس', [f('عزت بانو'), f('ندرت بانو')]),
  f('رضانہ خاتون', 'سید ارشد کمال', 'منڈی چوب'), // VERIFY: first name (رضانہ / رضیانہ)
  f('رضوانہ خاتون', 'سید نوید عروج', 'گھیر مناف'), // VERIFY: mohalla
  f('ریحانہ خاتون', 'سید جاوید رضا', 'گذری'),
  f('شمیم فاطمہ', 'سید اعظم حیدر', 'مجاپوتہ'),
  f('اقبال فاطمہ', 'سید منور حسن', 'چھنگا دروازہ'),
  // second row of the same wrapped bar
  m('کاظم عباس', [f('تمثیل فاطمہ'), f('تکمیل فاطمہ'), m('مشیر عباس')]),
  m('حسین عباس', [m('یاور عباس'), f('زہرا'), m('مصور عباس')]),
  m('رضا عباس'),
  m('علی عباس', [f('سطوت آرا'), m('محمد عباس'), f('نگہت آرا')]),
  m('جعفر عباس', [m('ظہیر عباس'), f('نکہت')]),
])

// ───────── Chart 1: سلطان حسین ─────────
const sultanHusain216 = m('سلطان حسین', [
  m('ضمیر احمد'),
  f('شفیقہ بانو', 'سید حسن مہدی', 'لکڑہ'), // VERIFY: mohalla
  m('ظہیر احمد'),
  // second row of the wrapped bar
  m('افتخار احمد', [
    m('تصویر حیدر'),
    f('کوثر جہاں', 'سید حیدر عباس', 'دربار کلاں'),
    f('نازش', 'سید مہتاب حسین زیدی'),
    f('شریا', 'سید اظہار حسین زیدی'),
    f('گل زہرا', 'سید نصرت حسین زیدی'),
  ]),
  m('ذوالفقار احمد', [
    m('سجاد حیدر'),
    m('حیدر مہدی', [f('مشکبار بانو'), f('ارجمند بانو')]),
    m('تنویر حیدر'),
  ]),
  m('امیر احمد', [m('علی امیر'), m('حسن امیر')]),
])

// ───────── Chart 1: شمس الحسن ─────────
const shamsulHasan216 = m('شمس الحسن', [
  m('حسن مہدی', [
    m('نظاہر حسین'),
    m('طاہر حسین'),
    f('معصومہ خاتون'),
    m('آصف حسین'),
    m('عمران حسین'),
    f('ناہید اعجاز'),
  ]),
  m('کلب حسین', [
    m('ریاض شاہد'),
    f('سائرہ بانو'),
    m('تنویر حیدر'),
    f('شازیہ بانو'),
    m('کمال حیدر'),
  ]),
])

// ───────── Chart 1: اختر حسین ─────────
const akhtarHusain216 = m('اختر حسین', [
  m('علی مہدی', [
    f('ذکیہ بانو', 'سید اشفاق حسین', 'مظفر نگر'),
    m('سراج مہدی', [
      m('حیدر مہدی'),
      m('افراز مہدی'),
      m('منظر مہدی'),
      m('علی حیدر', 'عرف فیض'),
    ]),
  ]),
  m('ممتاز احمد', [f('ارمان بانو'), m('فضل عباس'), f('فیضان فاطمہ')]),
  f('رضیہ بانو', 'سید نور الحسن', 'مجاپوتہ', 'زوجہ اولیٰ'),
  m('الطاف حسین', [
    m('شرف الدین'),
    f('نرجس خاتون', 'سید علی مومن زیدی', 'نگینہ'),
  ]),
  m('امیر کاظم', 'لاولد'),
])

// ───────── Chart 1: root ─────────
const sirajHusain216 = onPage(218, m('سراج حسین', [
  ikramHusain216,
  mukhtarHusain216,
  sultanHusain216,
  haidarHasan216,
  shamsulHasan216,
  f('ذاکرہ خاتون', 'سید ظفر حسن', 'لکڑہ'), // VERIFY: mohalla (نگڑہ / لکڑہ)
  akhtarHusain216,
]))

// ───────────────────────── photo page5 · book page 217 ─────────────────────────
const mubarakHusain215 = m('مبارک حسین', [
  f('ناطقہ خاتون', 'سید علی احمد', 'لکڑہ'),
  m('نایاب الحسن', 'لاولد'),
  m('محمد تقی', [
    f('شاہدار بانو', 'سید شبیہ حیدر', 'محلہ کرم علی خان'), // VERIFY: name (شاہندار / شاہدار) and mohalla line
    m('محمد تقی'),
    f('تاجدار بانو', 'سید شمیم الحسن', 'لکڑہ'), // VERIFY: first letter (تاجدار / ناجدار)
    m('محمد علی'),
    m('محمد سخی', [m('محمد مبارک')]),
  ]),
  f('صادقہ خاتون', 'سید نصیر حسن زیدی', 'گولی قاضی زادہ'), // VERIFY: صادقہ / صادفہ
])

const askariHusain215 = m('عسکری حسین', [
  m('اقتدار حسین', [
    f('حسین فاطمہ', 'سید تغلین احمد', 'لکڑہ'), // VERIFY: husband's name (تغلین / لغلین)
    m('شباب حسین', [m('منظر حسین'), f('خوش بخت سیدہ')]),
    f('طلعت خورشید فاطمہ', 'سید سرفراز حسین', 'دربار کلاں'), // VERIFY: name may be split (طلعت / خورشید فاطمہ)
    m('اقبال حسین', [m('فرحان حسین'), f('نغمی فاطمہ')]),
    m('خورشید حسین', [m('کاشف حسین'), f('گلناز فاطمہ')]),
  ]),
  f('شان فاطمہ', 'سید حسن ثنی', 'منڈی چوب'), // VERIFY: husband's name
  m('برکت حسین', [
    f('شاہین فاطمہ', 'سید آل احمد'),
    f('یاسمین فاطمہ', 'سید سلیم حسن جعفری', 'کرنال'), // VERIFY: first letter (یاسمین / ناسمین)
    f('نسرین فاطمہ'),
  ]),
])

const mehdiHasan215 = onPage(217, m('مہدی حسن', 'بنارس میں حالیہ', [
  askariHusain215,
  sirajHusain216,
  m('صغیر حسین', [
    f('شمیم بانو'),
    m('ظہیر احمد'),
    f('نسیم فاطمہ'),
    m('فیض احمد'),
  ]),
  f('اللہ دتی', 'سید سالم حسین', 'منڈی چوب'), // VERIFY: name (التدی / اللہ دی?)
  m('احمد حسین', [f('تغیر بانو', 'سید امیر مہدی', 'مجاپوتہ')]), // VERIFY: name (تغیر / تفسیر)
  mubarakHusain215,
]))

// ───────────── chart 1 pieces ─────────────

// ظریف الحسن's snake, rows top to bottom, each right to left (VERIFY the row order and that all rows are his children)
const zuLqarnain215 = m('ذوالقرین حیدر', [
  f('رہا فاطمہ'), // VERIFY: reading
  m('جوان حیدر'),
])

const aliShaheed215 = m('علی شہید', [
  f('عنبرین زہرا'),
  m('عاصم فرزوق'),
  m('جاصم فرزوق'),
  m('ناظم فرزوق'),
])

const hasanShaheed215 = m('حسن شہید', [
  m('علی امیر'),
  m('علی ظہیر'),
  m('علی نعیم'),
  f('عروسہ زہرا'),
])

const husainShaheed215 = m('حسین شہید', [
  f('زہرا'),
  m('علی مختار'),
])

const zareefulHasan215 = m('ظریف الحسن', [
  f('کنیز سیدہ'),
  f('حسین بانو'),
  f('نعیم فاطمہ'),
  f('انجم زہرا'),
  f('فیروز فاطمہ'),
  f('قرۃ العین زہرا'),
  m('ناصر عباس'),
  m('حسن امام'),
  zuLqarnain215,
  m('تعظیم عباس'),
  f('نفیس فاطمہ', 'سید بابر رضا', 'گذری'),
  f('بہترین فاطمہ', 'سید غلام عباس', 'شفاعت پوتہ'),
  aliShaheed215,
  f('نگہت فاطمہ', 'سید مجتبیٰ حسن', 'حقانی'),
  f('شمیم زہرا', 'سید حسن علی', 'لکڑہ'),
  hasanShaheed215,
  m('عظیم الدین حیدر'),
  f('شاہدار فاطمہ', 'سید محمود رضا', 'شکار پور'), // VERIFY: name (شاہدار)
  m('حسن فرزوق'),
  husainShaheed215,
  m('محمد منتظم', [m('منظر حسین'), m('عون محمد')]),
  m('ظفر عباس', [m('محمد عباس')]),
])

const zamurrudHusain215 = m('زمرد حسین', [
  m('جعفر حسین', 'لاولد'),
  m('شہنشاہ حسین', 'عرف زوار حسین'),
  m('منظور حسین', 'لاولد'),
  m('رضا حیدر', [
    m('اصغر عباس'),
    m('صفدر عباس'), // VERIFY: tiny note under his name not read
    f('شنبہ شہر'), // VERIFY: name unclear (شنبہ شہر / شبنم)
    f('کوثر پروین', 'سید صادق حسین', 'الہ آباد'),
    m('علی عباس'),
    f('شبانہ پروین', 'سید رضی حیدر', 'سہارنپور'),
    m('شاہنواز حیدر', [m('ایاز حیدر'), m('کاشان حیدر'), m('شاہان حیدر')]),
    m('علی نواز'),
  ]),
  m('عزادار حسین', 'عرف یاقوت', [ // VERIFY: عرف یاقوت is his alias, not رضا حیدر's
    f('نازش فاطمہ'),
    f('شائستہ فاطمہ'),
    f('شیریں فاطمہ'),
    f('افشاں فاطمہ'),
    m('محمد علی عباس'),
  ]),
])

const aliHadi215 = m('علی ہادی', [
  f('مکین فاطمہ', 'سید عابد عباس', 'لکڑہ'),
  f('زرین فاطمہ'),
  f('شاہین فاطمہ', 'سید غلام حیدر', 'حقانی'),
  m('ابن حیدر'),
  m('نشان حیدر'),
  m('آفاق حیدر'),
  m('محمد نسیم', [f('ثمرین')]),
  m('نثار حیدر'),
  m('حسین حیدر'),
  m('محمد جاوید', [
    m('محمد عدیل'),
    f('عالیہ پروین'),
    m('نبیل جاوید'),
    f('نادرہ پروین'),
  ]),
]) // VERIFY: the top bar (3 daughters) and the wrapped bar below it are read as one list

const sabhiHadi215 = m('سمحی ہادی', [ // VERIFY: first name (سمحی / صبحی / سنجی)
  m('ابن ہادی'),
  f('گل زہرا'),
  m('حسن ہادی'),
  m('سجاد ہادی'),
  f('تصویر زہرا', 'سید بادشاہ علی', 'میرٹھ'),
  m('حسین ہادی'),
])

const naqiHadi215 = m('نقی ہادی', [
  m('نایاب حیدر'),
  m('پرویز حیدر'),
  m('شاہد عباس'),
  f('نازک بانو', 'سید سرور مجتبیٰ', 'جیوٹرہ حال جعفری'), // VERIFY: husband and mohalla line
  m('شان حیدر'),
])

const muzaffarHasan215 = onPage(217, m('مظفر حسن', [
  zareefulHasan215,
  zamurrudHusain215,
  aliHadi215,
  f('پنجتنی خاتون', 'سید رضوان حیدر', 'مجاپوتہ'), // VERIFY: name (پنجتنی / بنجتنی)
  sabhiHadi215,
  m('ہادی حسن', 'لاولد'), // VERIFY: first letter (ہادی / نادی)
  naqiHadi215,
]))

// ───────────────────────── photo page4 · book page 216 ─────────────────────────
const amirHaidarKids214 = m('امیر حیدر', [
  f('ندا'),
  f('حرا'),
  f('فرح'),
  m('کمیل حیدر'), // VERIFY: tiny word under his name not legible
])

const nawabHaidar214 = m('نواب حیدر', [
  f('عنبرین فاطمہ'),
  m('شاہنواز حیدر'),
  f('حنا نواز'), // VERIFY: first letters (حنا / خانواز)
])

const zulfiqarHaidar214 = m('ذوالفقار حیدر', [
  f('منورہ خاتون', 'سید حسین بن حامد', 'کنتولی'), // VERIFY: husband's name reads like حسین بن حامد
  amirHaidarKids214,
  f('مصورہ خاتون', 'سید ضیا مہدی کاظمی', 'دانشمندان حال دربار کلاں'), // VERIFY: husband's name
  f('شمع بانو', 'سید ممتاز حیدر', 'الہ آباد'),
  f('کہکشاں بانو', 'سید محمود سعید', 'گذری'), // VERIFY: husband's name
  nawabHaidar214,
])

const muhammadBaqir214 = m('محمد باقر', [
  f('تبسم باقر'),
  f('لبنی باقر', 'سید حسن عباس', 'لکھنؤ'),
  m('امیر باقر'),
  f('نسترن باقر'), // VERIFY: reads نسترن / نثرتم
])

const iftikharHaidar214 = m('افتخار حیدر', [
  f('نازنین فاطمہ', 'سید اعجاز حسین زیدی', 'سادات بارہہ'),
  muhammadBaqir214,
  f('ذہین فاطمہ', 'سید کاظم علی', 'دربار کلاں'),
])

const ziaHaidar214 = m('ضیا حیدر', [
  f('مختار فاطمہ', 'سید رضا علی', 'دربار کلاں', 'عرف کرن'),
  m('ضیا باقر'),
  f('ام فاطمہ'),
  f('حجاب فاطمہ'),
  f('رباب فاطمہ', 'سید نذر عباس', 'محمد پورہ حال قاضی زادہ'), // VERIFY: mohalla reads محمد پورہ / مجیر پورہ
])

const amirBaqir214 = onPage(216, m('امیر باقر', [
  iftikharHaidar214,
  ziaHaidar214,
  f('نسیمہ خاتون', 'سید محمد حیدر', 'کنتولی'),
  zulfiqarHaidar214,
]))

// ───────────── Chart 2: حسین بن بشیر علی ─────────────

// ابو محمد: six children, drawn on two joined bars (top bar then the wrapped second bar)
const muhammadMunawwar214 = m('محمد منور', [
  m('عباس آصف جاہ', [f('درافشاں بانو'), f('شازیہ پروین')]),
  f('بلقیس زہرا', 'سید محمد باقر', 'دانشمندان'),
  m('محمد مہدی', [m('علی مہدی'), f('شباب زہرا')]),
  f('حدیثہ خاتون', 'سید علی امام', 'لکڑہ'),
  m('حسین شہنشاہ', [f('قرین فاطمہ'), m('علی نواز'), m('حسن نواز')]),
  m('محمد انور', [
    f('سلمیٰ انور'), // VERIFY: سلمی / سلمیٰ
    f('نگہت پروین'),
    f('زیبا جبین'),
    f('نگار سیدہ'),
  ]),
])

const abuMuhammad214 = m('ابو محمد', [
  m('محمد احمد'),
  f('شمیمہ خاتون', 'سید علی اکرم', 'دربار کلاں', 'زوجہ اولیٰ'),
  f('ذہینہ خاتون', 'سید نفیس حسن', 'چھوڑہ حال دانشمندان'), // VERIFY: husband's name
  f('طیبہ خاتون', 'سید مہتاب حسن', 'دربار کلاں'), // VERIFY: husband's name (مہتاب / ہمایت)
  muhammadMunawwar214,
  f('واجدہ خاتون', 'سید غلام صفدر', 'جعفری'), // VERIFY: husband's name
])

const taqiRaza214 = m('تقی رضا', [
  m('قصور رضا'),
  m('انور رضا'),
  f('سکینۃ الزہرا'), // VERIFY: wrapped second bar of the box, right-to-left order
  m('قائم رضا'), // VERIFY: first letter reads like تائم / قائم
  f('سکینہ اختر', 'سید تاجدار حسین', 'لکڑہ'), // VERIFY: third wrapped bar; is she a child of تقی رضا
])

const hasanRaza214 = m('حسن رضا', [
  f('قیصر بانو', 'سید تصدق حسین', 'لکڑہ'), // VERIFY: husband's name
  m('حسین رضا', [m('محسن رضا'), m('شہاب رضا'), m('ندیم رضا')]),
  f('کوثر بانو', 'سید امامین رضا', 'جعفری'), // VERIFY: husband's name
  f('قمر زہرا', 'سید انور رضا', 'لکڑہ'),
  m('نقی رضا', [m('عسکری رضا'), m('نوید رضا'), m('گلفام رضا')]), // VERIFY: گلفام / گلغام
  f('شان زہرا', 'سید محمد سبطین', 'سنبھلی'), // VERIFY: husband's name and mohalla
])

const aliRaza214 = m('علی رضا', [
  m('حسین ارتضیٰ', [
    m('عاطف رضا'),
    f('شمائلہ رضا'),
    m('واصف رضا'),
    m('توصیف رضا'),
  ]),
  m('حسین مرتضیٰ', [m('جمال حسین'), f('نوشین بانو'), m('افضال حسین')]),
  m('علی عطا', [m('شبر رضا')]),
])

const musaRaza214 = m('موسیٰ رضا', [
  f('کاظمہ خاتون', 'سید محمد مجتبیٰ', 'لکڑہ'),
  aliRaza214,
  f('رضیہ خاتون', 'سید علی اکرم', 'دربار کلاں'),
  taqiRaza214,
  hasanRaza214,
])

const zainulAbidin214 = m('زین العابدین', [
  f('حسین بانو', 'سید سخا حسین', 'شفاعت پوتہ'), // VERIFY: husband's name
  m('قائم علی', [
    m('تاجدار حسین', [
      f('زنیب تاجدار', 'سید نور کامل', 'دانشمندان'), // VERIFY: ذنیب / زینب
      f('آسیہ تاجدار'),
      m('محمد تاجدار'),
      f('خوشبو زہرا'),
      f('مریم تاجدار'),
    ]),
  ]),
  f('امام بانو', 'سید محمد سبطین', 'عثما پورہ'), // VERIFY: mohalla
  f('امیر بانو', 'سید نایاب حسن خاں', 'دانشمندان'), // VERIFY: husband's name
])

const husain214 = onPage(216, m('حسین', [
  abuMuhammad214,
  f('راشدہ خاتون', 'سید محمد مجتبیٰ', 'لکڑہ', 'زوجہ اولیٰ'),
  zainulAbidin214,
  f('ساجدہ خاتون', 'سید ضیا حسن', 'جعفری'), // VERIFY: husband's name
  f('نفیسہ خاتون', 'سید میر محمد', 'لکڑہ'),
  f('بتول عذرا', 'سید امیر باقر', 'لکڑہ'),
  musaRaza214,
]))

// ───────────────────────── photo page3 · book page 215 ─────────────────────────
const shanHaider223 = m('شان حیدر', [
  m('انعام حیدر'),
  m('اکرام حیدر'),
  f('شان فاطمہ', 'سید غضنفر عباس', 'لکڑہ'),
  m('عدنان حیدر'),
])

const salmanHaider223 = m('سلمان حیدر', [
  f('صبیحہ خاتون'), // VERIFY: first letters of the name are cut by the crop edge (صبیحہ / سیحہ)
  f('عطیہ خاتون'),
  m('ارمان حیدر'),
  m('اقبال حیدر'),
  m('افضال حیدر'),
  m('فرمان حیدر'),
])

const ijazHaider223 = m('اعجاز حیدر', [
  m('شیراز حیدر'),
  f('شیریں بانو', 'سید گلبز ندیم', 'جرودی حال شفاعت پوتہ'), // VERIFY: husband's name (گلبز / گلبدن ندیم)
  m('ہمراز حیدر'),
])

const abbasHaider223 = m('عباس حیدر', [
  f('ام حبیبہ', 'سید ذاور رضا جعفری'),
  m('رضوان حیدر'),
  m('شاہنواز حیدر'),
  f('عالیہ بتول'),
])

const farrukhHaider223 = m('فرخ حیدر', [
  abbasHaider223,
  ijazHaider223,
  f('حسن فاطمہ', 'سید قائم علی', 'لکڑہ', 'عرف ببی'),
  f('حسین فاطمہ', 'سید نور عین رضا جعفری'), // VERIFY: an unreadable عرف is written above her name
  f('حسن فاطمہ', 'سید محمد حسین', 'دانشمندان', 'عرف سجن'), // VERIFY: second "حسن فاطمہ" in this list (حسن / حسین); husband's name
  f('اعجاز فاطمہ', 'سید عباس وفا داد', 'دانشمندان', 'عرف منی'), // VERIFY: husband's name (وفا داد)
])

const muhammadMujtaba223 = onPage(215, m('محمد مجتبیٰ', [
  farrukhHaider223,
  f('رضیہ خاتون', 'سید بو علی', 'لکڑہ'),
  f('ذکیہ خاتون', 'سید محمد مطلب', 'سنبھلی'), // VERIFY: the husband's place reads like سنبھی / سنبھلی
  m('عمران حیدر', 'لاولد'),
  salmanHaider223,
  shanHaider223,
]))

// ───────────────────────── chart 2: مرتضیٰ علی بن میر علی ─────────────────────────

const mirAhmad223 = m('میر احمد', 'عرف اچھو', [
  f('کنیز فاطمہ', 'سید شان حیدر', 'لکڑہ'),
  f('حسین فاطمہ', 'سید سبط رضا', 'ترلو بیہ', 'عرف حسینہ'), // VERIFY: mohalla (ترلو بیہ) and the عرف above her name
  f('ذہین فاطمہ', 'سید ظفر علی خان', 'سرسی محمود دلپور'), // VERIFY: mohalla
  f('حسن فاطمہ', 'سید محمد سبطین', 'شفاعت پوتہ'),
  f('شمیم فاطمہ', 'سید علی حیدر', 'گھیر کرم علیخان'), // VERIFY: mohalla
  f('احسان فاطمہ', 'سید معطر حسین', 'حقانی'), // VERIFY: husband's name and mohalla (printed like حنانی)
])

const muhammadMahdi223 = m('محمد مہدی', [
  m('محمد'),
  m('علی'),
  m('حسن'), // VERIFY: name reads like حسین / حسن / سیدین
  m('حسین'),
  m('عباس'),
  f('حسن فاطمہ'),
])

const muhammadTaha223 = m('محمد طٰہ', [
  f('کنیز فاطمہ', 'سید نبی رضا', 'لکڑہ'), // VERIFY: a scribble overwrites her name (کنیز کبریٰ؟); husband's name (نبی / لبی)
  muhammadMahdi223,
])

const muhammadMurtazaAli223 = m('محمد مرتضیٰ علی', [
  m('مرتضیٰ'),
  f('مدثرہ بانو'),
  f('مزملہ بانو'),
  f('حسن فاطمہ'),
  m('ابراہیم مرتضیٰ'),
  f('ام فروہ'),
])

const muhammadMutalib223 = m('محمد مطلب', [
  m('محمد علی'),
  f('عذرا بتول'),
  m('محمد حیدر'),
])

const sultanMuhammad223 = m('سلطان محمد', [
  m('محمد'),
  f('خدیجہ رباب', 'سید احمد کاظمی', 'حیدر آباد'),
  m('علی مرتضیٰ'),
])

const muhammadMunawwar223 = m('محمد منور', [
  m('خامس علی'),
  m('میر محمد'),
])

const muhammadHamid223 = m('محمد حامد', [
  f('عروس فاطمہ'),
  muhammadMunawwar223,
  f('طاہرہ خاتون', 'سید محمد قیصر', 'سرسی'),
  sultanMuhammad223,
  f('ماہرہ خاتون', 'سید ذوالفقار رشید', 'نو گنیاں'), // VERIFY: husband's name (ذوالفقار / ذوالفعار رشید)
  f('جمال آرا', 'سید محمد حسین', 'قاضی زادہ'),
])

const mirMuhammad223 = m('میر محمد', [
  // top row
  f('زینب خاتون', 'سید محمد مجتبیٰ', 'لکڑہ', 'زوجہ ثانیہ'), // VERIFY: "ثانیہ" (second wife) reading
  f('مبارکہ خاتون', 'سید محمد مہدی', 'لکڑہ', 'زوجہ اولیٰ'),
  // second row (wrapped bar)
  f('ام کلثوم', 'سید حسن رضا', 'لکڑہ'),
  f('کنیز فاطمہ', 'سید حسین محمد', 'مجاپوتہ'),
  // third row (wrapped bar)
  muhammadMutalib223,
  muhammadHamid223,
  m('محمد حسین', 'لاولد'), // VERIFY: name reads like محمد حسین / محمد یٰسین
  muhammadMurtazaAli223,
])

const muhammad223 = m('محمد', [
  mirMuhammad223,
  muhammadTaha223,
  mirAhmad223,
])

const murtazaAli223 = onPage(215, m('مرتضیٰ علی', [
  f('سعیدہ خاتون', 'سید حسن', 'لکڑہ'),
  f('تحسینہ خاتون', 'سید محمد اکرم', 'دربار کلاں'),
  muhammad223,
  f('مومنہ خاتون', 'سید زاہد حسین جعفری'),
  f('سکینہ خاتون', 'سید موسیٰ رضا', 'لکڑہ'),
]))

// ───────────────────────── chart 3: بشیر علی بن قائم علی ─────────────────────────

const sibtMuhammad223 = m('سبط محمد', 'عرف سبیل', [
  f('کنیز فاطمہ', 'سید انصار مہدی', 'جرودی حال صابو نگران', 'زوجہ ثانی'), // VERIFY: husband's name (a tiny word after مہدی is unreadable) and mohalla
  m('حسین محمد', 'عرف جبی', [ // VERIFY: the عرف above him
    m('محمد علی'),
    f('نسیم فاطمہ', 'سید علی زمن', 'تامی گلہ'), // VERIFY: name (نسیم / تسنیم), husband and mohalla
    m('حیدر علی'),
  ]),
  f('حسین فاطمہ', 'سید غفار حیدر', 'دانشمندان'),
  f('حسین فاطمہ', 'سید لقا حسین', 'شفاعت پوتہ'), // VERIFY: husband's name (لقا / لقاء)
  m('حسین محمد', [m('وقار حسین'), m('راشد حسین'), m('عامر حسین')]),
])

const ahmad223 = m('احمد', [
  f('فاطمہ زہرا', 'سید میر علی', 'لکڑہ', 'زوجہ ثانی'), // VERIFY: mohalla is partly hidden by the page edge
  f('ببنی', 'سید افتخار حیدر', 'لکڑہ'), // VERIFY: name (ببنی / ببی)
])

const muhammadBaqir223 = m('محمد باقر', [
  amirBaqir214,
  f('انیسہ خاتون', 'سید زین العابدین', 'لکڑہ', 'زوجہ اولیٰ'),
  ahmad223,
  f('ام سلمیٰ', 'سید زین العابدین', 'لکڑہ'),
  m('عباس حسین', 'لاولد'),
  sibtMuhammad223,
])

const hasan223 = m('حسن', [
  f('سیدہ خاتون', 'سید عطا حسین', 'شفاعت پوتہ', 'زوجہ ثانی'),
  f('فاطمہ صغریٰ', 'سید حسن رضا', 'لکڑہ'),
])

const bashirAli223 = onPage(215, m('بشیر علی', [
  // top row
  f('مریم النساء', 'سید علی', 'لکڑہ'),
  f('حاجرہ خاتون', 'سید سبط احمد', 'بنگلہ'), // VERIFY: mohalla (بنگلہ / بگلہ)
  f('رقیہ خاتون', 'سید حمزہ علی', 'لکڑہ'),
  f('دختر', 'سید آل احمد', 'شفاعت پوتہ'), // VERIFY: the book prints only "دختر" (no name)
  // second row (wrapped bar) -- VERIFY: order of the second row relative to the first
  muhammadBaqir223,
  f('سلمیٰ خاتون', 'سید مصطفیٰ اعلیٰ', 'لکڑہ'), // VERIFY: husband's name (مصطفیٰ اعلیٰ)
  hasan223,
  husain214, // VERIFY: the "صفحہ ۲۱۶" tag beside him joins the frame line, not clearly him
]))

// ───────────────────────── photo page2 · book page 214 ─────────────────────────
const hamurabi222 = m('حمورابی', [
  f('خریال فاطمہ'), // VERIFY: first letter (خریال / جریال)
  f('نرجس فاطمہ'),
  m('حسن فارابی'),
])

const haidarKarrar222 = m('حیدر کرار', [
  f('فرح حیدر'),
  f('بشرہ حیدر'),
  m('حسین شفیق'),
])

// ───────────────────────── chart 1 ─────────────────────────

// سید شفیق حسن's descendants
const muhammadMehdi222 = m('محمد مہدی', [
  f('ریحانہ رئیس', 'سید حسنین مہدی', 'بریلی'), // VERIFY: husband's name
  f('دردانہ رئیس', 'سید سبط اختر', 'ترولیہ'),
  f('شاہانہ رئیس', 'سید علی جراد', 'جنوبی'), // VERIFY: husband's name and mohalla (جنوبی / جبوری)
  f('فرزانہ رئیس', 'سید حسنین رضی', 'لکھنؤ'),
  f('خیزران رئیس', 'سید سبط اطہر', 'ترولیہ'), // VERIFY: husband's name
])

const muhammadTaqi222 = m('محمد تقی', [
  haidarKarrar222,
  f('شائستہ تقی', 'سید ممتاز سعید', 'سدو'), // VERIFY: mohalla (سدو)
  hamurabi222,
  f('شہناز تقی', 'سید منور سعید', 'سدو'), // VERIFY: mohalla (سدو / مدو)
])

const hussainJaunAsghar222 = m('حسین جون اصغر', [
  f('فینانہ'), // VERIFY: spelling (فینانہ / فیانہ)
  f('سبحانہ'),
  f('زیدون ایلیا'), // VERIFY: spelling (printed زدیون ایلیا); may be a male name
])

const shafiqHasan222 = m('شفیق حسن', [
  muhammadMehdi222,
  muhammadTaqi222,
  hussainJaunAsghar222,
  f('نخی خاتون', 'سید محمد شفاعت', 'شفاعت پورہ حال گذری'), // VERIFY: first word (نخی / بخی)
  m('محمد عباس', 'لاولد'),
])

// سید وحید حسن's descendants
const dilshanHaidar222 = m('دلشان حیدر', [
  f('سیدہ شمیم', 'سید محمد منتظم', 'لکڑہ'),
  m('سکندر نواب', [
    m('رضا نواب'),
    f('نفرت فردوس'),
    m('شہزاد نواب'),
  ]),
  m('نواب حیدر', [
    m('فرزق علی'), // VERIFY: name (فرزق / رزق علی); a pen line crosses it
    f('ناہید فردوس'),
    m('حسین اسمعیل'),
  ]),
  m('عباس حیدر', [
    m('عطائے مہدی'),
    f('شمیم بانو'),
    f('رضیہ بانو'),
  ]),
])

const waheedHasan222 = m('وحید حسن', [
  m('عمران حیدر', 'لاولد'),
  m('عرفان حیدر', 'عرف نایاب حیدر'),
  f('عزیز زہرا', 'سید ابرار احمد'), // VERIFY: husband's name
  dilshanHaidar222,
  f('دختر', 'سید مومن حسن', 'کنکولی', 'زوجہ اولی'), // VERIFY: the book gives no name, only "دختر"
  f('بتول عذرا', 'سید نائب الحسن خان', 'دانشمندان', 'زوجہ ثانی'),
])

// سید انیس حسن's descendants
// The sibling bar wraps: the first four children are on the top bar, سلطان بانو and رضا حیدر on the bar below.
const rizaHaidar222 = m('رضا حیدر', [
  // Top bar of رضا حیدر's children
  m('مسعود رضا', [f('فرزانہ مسعود')]),
  m('شان رضا', [f('شاہانہ انجم'), f('فرزانہ انجم')]),
  m('شمیم رضا', [f('شیریں شمیم'), f('نسرین شمیم'), f('ناحیہ شمیم')]),
  f('انیس زہرا'),
  m('سبطین حیدر', [f('فوزیہ انجم'), m('عظیم حیدر')]),
  // Wrapped second bar (left end of the first bar drops down and runs back right)
  f('ذکیہ انجم'),
  m('منظور رضا'),
  f('شازیہ انجم'),
  m('سعید حیدر'),
  f('صبیحہ انجم'),
]) // VERIFY: the second bar of five is read as a wrap of رضا حیدر's own bar, not a separate father

const ameerHaidarKamal222 = m('امیر حیدر کمال', [
  m('تاجدار کمال', [m('مشہور عالم')]), // VERIFY: مشہور عالم is shown with an arrow from تاجدار کمال and no children of his own
  f('رضانہ زہرا', 'محمد عارف', 'بھیکی'), // VERIFY: mohalla (بھیکی / بہمی); a pen X sits on her arrow; husband printed without سید
  m('شاندار کمال'),
])

const aneesHasan222 = m('انیس حسن', [
  ameerHaidarKamal222,
  f('خورشید بانو', 'سید ظہیر حسن', 'منڈی چوب'),
  m('عطا حیدر', 'لاولد'),
  f('ذلیشان بانو', 'سید رئیس حسن', 'گذری'),
  // Wrapped second bar of انیس حسن's children
  f('سلطان بانو', 'سید محمد حامد', 'کنکولی', 'زوجہ اولی'),
  rizaHaidar222,
])

const naseerHasan222 = onPage(214, m('نصیر حسن', [
  shafiqHasan222,
  m('نفیس حسن', 'لاولد'),
  f('زینب خاتون', 'سید ماجد حسین', 'گذری'),
  waheedHasan222,
  aneesHasan222,
]))

// ───────────────────────── chart 2 ─────────────────────────

const mustafaAla222 = m('مصطفیٰ اعلی', [
  f('مجاہدہ خاتون', 'سید محمد طہ', 'لکڑہ', 'زوجہ اولی'), // VERIFY: husband's name
  muhammadMujtaba223,
])

const mirAli222 = m('میر علی', 'عرف مبین', [
  // VERIFY: the alias above his name
  // Top bar of five
  f('اقبال زہرا', 'سید علی افسر', 'مجاپورہ حال قاضی زادہ', 'عرف چمکنی'),
  m('افضال مہدی', [m('علی مہدی'), m('حسین مہدی')]),
  f('جمال زہرا', 'سید ابن محمد', 'مجاپورتہ'), // VERIFY: husband's name and mohalla
  f('ہلال زہرا', 'سید علی ظہیر', 'لکڑہ حال چاہ غوری'),
  f('آل زہرا'),
  // Wrapped second bar of three
  m('ہلال مہدی', [f('ندا')]),
  f('افضال زہرا'),
  m('اقبال مہدی', [m('فرحان مہدی')]),
])

const ghulamShubbar222 = m('غلام شبر', [mirAli222])

const buAli222 = m('بو علی', [
  f('بلند اختر'),
  f('اسلام فاطمہ', 'سید مجاور حسین', 'الہ آباد'),
  m('علی امام', [
    m('رضا امام'),
    f('تبسم زہرا'),
    m('وفا امام'),
    f('عذرا بانو'),
  ]),
  f('رازقہ خاتون', 'سید علمدار حسین', 'دانشمندان', 'عرف جینی'), // VERIFY: the alias (printed "عرف جین")
])

const ghulamImam222 = m('غلام امام', [
  f('ملیکہ خاتون', 'سید میر علی', 'لکڑہ', 'زوجہ اولی'),
  buAli222,
])

const hamzaAli222 = m('حمزہ علی', [
  ghulamImam222,
  f('خدیجۃ الکبریٰ', 'سید میر محمد', 'لکڑہ', 'زوجہ اولی'),
  f('محمودہ خاتون', 'سید زین العابدین', 'لکڑہ'),
  ghulamShubbar222,
])

const mirAliSon222 = m('میر علی', [
  m('علی', [f('حنیفہ خاتون', 'سید محمد', 'لکڑہ')]),
  f('رضی النسا', 'سید حسین', 'لکڑہ'),
  hamzaAli222,
  murtazaAli223,
  mustafaAla222,
])

const qaimAli222 = m('قائم علی', [
  bashirAli223,
  f('ملوک دولت', 'سید احمد حسین', 'سرائے کہنہ'),
  mirAliSon222,
])

const muhammadAli222 = m('محمد علی', [
  f('دختر', 'سید بشیر علی', 'لکڑہ'), // VERIFY: the book gives no name, only "دختر"
  f('دختر', 'سید ضامن علی', 'حقانی', 'زوجہ ثانی'), // VERIFY: no name given; husband's name and "ثانی"
])

const rajabAli222 = m('رجب علی', [
  m('ہادی حسن', [
    m('نذیر حسن', [
      f('تسکینہ خاتون', 'سید کاظم حسین', 'حقانی'),
      f('سفینہ خاتون', 'سید اختر حسین', 'لکڑہ'),
      f('زاہدہ خاتون', 'سید جواد حسین عابدی', 'نوگنیاں حال بخشی'),
      muzaffarHasan215,
    ]),
  ]),
  mehdiHasan215,
])

const faizAhmad222 = onPage(214, m('فیض احمد', [
  qaimAli222,
  muhammadAli222,
  sahibAli217,
  rajabAli222,
]))

// ───────────────────────── photo page1 · book page 213 ─────────────────────────
const razaShuja213 = m('رضا شجاع', [f('ایمن فاطمہ'), m('حسن شجاع'), m('حسین شجاع')])

const murtazaShuja213 = m('مرتضی شجاع', [
  f('شیمہ'), // VERIFY: reads شیمہ / نعیمہ / سیمہ
  f('نزہت'), // VERIFY: نزہت / سرہت
])

const aliAbbas213 = m('علی عباس', [murtazaShuja213, razaShuja213])

const abbasShuja213 = m('عباس شجاع', [
  m('اقبال شجاع'),
  f('اقبال زہرا'),
  m('سبطین شجاع'),
  f('افضال زہرا'),
])

const hasnainShuja213 = m('حسنین شجاع', [
  f('اختر زہرا'),
  f('دختر زہرا'),
  m('حسین شجاع'),
  f('خوشتر زہرا', 'سید منور حسین', 'شناعت پورہ'),
  f('دلبر زہرا', 'سید آل مصطفین', 'منڈی چوب'), // VERIFY: husband's name آل مصطفین
  m('سبطین شجاع', [m('اسد شجاع')]), // VERIFY: the leftmost name reads سبطین / سیدین شجاع
])

const shujaAlHasan213 = m('شجاع الحسن', [
  aliAbbas213,
  f('چاند بی بی', 'سید ذوالفقار احمد', 'قاضی زادہ'), // VERIFY: name is written چاند لی لی (dots dropped?); husband ذوالفقار
  f('یاسین فاطمہ', 'سید عزت علی', 'اعوان پور حال کاکی بگڑی'), // VERIFY: the "حال ..." part of the mohalla
  abbasShuja213,
  m('اصغر شجاع', 'لاولد'),
  m('حیدر شجاع', 'لاولد'),
  m('سجاد شجاع', 'لاولد'),
  hasnainShuja213,
  m('مہدی شجاع'),
  m('احمد شجاع'),
])

// ───────────── ظہیر الحسن's seven children ─────────────

const zahirulHasan213 = m('ظہیر الحسن', [
  m('حیات ظہیر', [m('ظہیر عباس'), f('واعظہ حیات'), m('وسیم عباس')]),
  m('عباس ظہیر'),
  m('سجاد ظہیر'),
  m('علی ظہیر', [m('مظہر عالم'), m('شیر عالم')]),
  f('ارعین فاطمہ', 'سید صلاح الحسن', 'حقانی حال قاضی زادہ'), // VERIFY: mohalla wording حقانی / حنانی
  m('شہزاد ظہیر', [f('فیضی'), f('عظمی')]),
  f('دلنشین فاطمہ', 'سید محمد اصغر', 'گنج غلام علی'), // VERIFY: mohalla reads like کنزہ / لکڑہ غلام علی
])

// ───────────── اسد علی (child of عابد علی) ─────────────

const asadAli213 = m('اسد علی', [
  zahirulHasan213,
  f('ناہدہ خاتون', 'سید معراج الحسن', 'حقانی حال قاضی زادہ'), // VERIFY: mohalla wording
  f('خامسہ خاتون', 'سید جعفر علی', 'حقانی', 'زوجہ ثانی'), // VERIFY: husband reads like جعفر علی / مظفر علی
  shujaAlHasan213,
])

// ───────────── عابد علی: his line runs down to the second bar (اسد علی, فاطمہ خاتون, آمنہ خاتون),
// whose left end turns down to a third bar (محمد تقی, محمد عسکری) ─────────────

const abidAli213 = m('عابد علی', [
  asadAli213,
  f('فاطمہ خاتون', 'سید زاہد حسین', 'دربار کلاں'), // VERIFY: زاہد
  f('آمنہ خاتون'),
  // third bar (the second bar's left end turns down)
  m('محمد تقی', '(میرٹھ جا کر ساکن ہوئے)'), // VERIFY: the note sits between محمد تقی and شجاع الحسن
  m('محمد عسکری', [f('رقیہ بانو', 'سید ماجد حسین', 'دربار کلاں')]),
]) // VERIFY: that the second and third bars are all عابد علی's children (wrapped rows)

// ───────────── ظفر حیدر (child of صفدر حسین), drawn in a box whose left end wraps onto a second bar ─────────────

const zafarHaider213 = m('ظفر حیدر', [
  f('کوثر فاطمہ'),
  f('تنویر فاطمہ'),
  // second bar (the box's bottom edge)
  f('تسنیم فاطمہ'),
  f('تسلیم فاطمہ'),
  m('مفراب حیدر'), // VERIFY: مفراب / محراب
  m('شباب حیدر'),
  m('دانش حیدر'),
]) // VERIFY: that the bar along the bottom of the box is a wrapped row of ظفر حیدر's children

const shamsulHasan213 = m('شمس الحسن', [m('آفتاب حیدر'), m('جاوید حیدر')])

const saqibHusain213 = m('ثاقب حسین', [f('ماہ ضیا فاطمہ', 'سید نذر حیدر', 'زنگی پور'), m('محمد حیدر')])

const nazarHaider213 = m('نذر حیدر', [f('بلقیس زہرا')])

const safdarHusain213 = m('صفدر حسین', [
  nazarHaider213,
  saqibHusain213,
  shamsulHasan213,
  f('اسرار فاطمہ', 'سید ذوالفقار احمد', 'لکڑہ'),
  zafarHaider213,
]) // VERIFY: صفدر (reads صندر)

const kashifHusain213 = m('کاشف حسین', '(الہ آباد)', [safdarHusain213])

const aliHusainRafi213 = m('علی حسین', '(اورنگ آباد دکن میں جا کر آباد ہو گئے)') // VERIFY: the note's wording

const rafiUdDin213 = m('رفیع الدین', [kashifHusain213, aliHusainRafi213])

const raziqAli213 = m('رازق علی', [abidAli213])

const chiragAli213 = m('چراغ علی', [rafiUdDin213, raziqAli213])

// ───────────── برخوردار علی's two daughters ─────────────

const barkhurdarAli213 = m('برخوردار علی', [
  f('لطیف النساء', 'سید مقبول حسین', 'شناعت پورہ'),
  f('عنایت النساء', 'سید ہادی حسین', 'گذری'), // VERIFY: husband's first name
])

// ───────────── علی احسن's three children ─────────────

// علی احمد (son of شبیر احمد): six children over two bars (the first bar's left end turns down round the box
// holding بنت زہرا and carries on as a second bar)
const aliAhmadSon213 = m('علی احمد', [
  m('نور عین احمد', [
    f('نازیہ تصویر'), // VERIFY: one name, or نازیہ and تصویر
    m('تالش حسین'),
    // second bar (the right end of the first bar turns down)
    m('روشن حسین'),
  ]),
  m('ثقلین احمد', [m('ظفر عباس'), f('مریم فاطمہ')]),
  f('حسن زہرا', 'سید منور رضا', 'سرسی'), // VERIFY: mohalla (written in brackets)
  f('بنت زہرا', 'سید اولاد حسن', 'مجاپورہ', 'زوجہ ثانی'), // VERIFY: اولاد حسن / اولاد حسین
  // second bar (the box round بنت زہرا; its bottom edge is a wrapped continuation of this bar)
  m('سبطین احمد', [m('احمد ابوتراب'), m('احمد انوار'), f('شگفتہ سجاد')]),
  m('حسین احمد', [
    f('شیریں بانو'), // VERIFY: reads نرین / شرین بانو
    m('شبیہ حسین'),
    f('نازنین بانو'),
    m('نوازش حسین'),
  ]),
]) // VERIFY: that سبطین احمد and حسین احمد are علی احمد's own sons on a wrapped second bar and not بنت زہرا's children

const shabbirAhmad213 = m('شبیر احمد', [
  aliAhmadSon213,
  f('کنیز سیدہ', 'سید اولاد حسن', 'مجاپورہ', 'زوجہ اولی'),
])

const aliMuhsin213 = m('علی محسن', [m('علی محسن', 'لاولد')]) // VERIFY: the father and the son both read علی محسن

const zainab213 = f('زینب', 'سید ضامن حسین', 'دانشمندان', 'مسماۃ')

const aliAhsan213 = m('علی احسن', [zainab213, shabbirAhmad213, aliMuhsin213])

const manzoorAhmad213 = m('منظور احمد', [aliAhsan213, barkhurdarAli213])

const aliAhmad213 = m('علی احمد', [manzoorAhmad213, chiragAli213])

// ───────────── عطا احمد's family ─────────────

const sultanAhmad213 = m('سلطان احمد', [
  m('تصدق حسین', [
    m('امیر حسن', [naseerHasan222, f('سیدہ')]), // VERIFY: امیر / ابر حسن
  ]),
  m('اسد علی', [f('دختر')]),
  m('احمد حسن', 'لاولد'),
])

const ataAhmad213 = m('عطا احمد', [
  m('قربان احمد', [f('دختر')]),
  sultanAhmad213,
  f('دختر', 'سید روایت علی', 'دانشمندان'), // VERIFY: روایت / رعایت
]) // VERIFY: that قربان احمد's arrow belongs to this bar (the line is faint)

// ───────────── ابدال محمد ─────────────

const abdalMuhammad213 = m('ابدال محمد', [
  ataAhmad213,
  faizAhmad222, // VERIFY: page number reads ۲۱۴
  waliAhmad218, // VERIFY: page number reads ۲۳۰
  aliAhmad213,
])

// ───────────── the root's other sons ─────────────

const muhammadShakir213 = m('محمد شاکر', [
  m('معین الدین', [m('قمر علی', [m('انتظار علی', 'لاولد')])]),
  m('محی الدین', 'لاولد (قصہ خوانی میں مارے گئے)'), // VERIFY: the bracketed note reads قصہ خوانی میں مارے گئے
])

const abdulWali213 = m('عبدالوالی', [muhammadPanah222])

const azmatullah213 = m('عظمت اللہ', [f('سکینہ'), f('دختر', 'سید علی احمد', 'لکڑہ')])

// ───────────── the root: صفحہ ۲۰۵ ─────────────

const muhammadMunawwar213 = m('محمد منور', [
  muhammadShakir213,
  abdulWali213,
  abdalMuhammad213,
  azmatullah213,
]) // VERIFY: root reads منور (the brief said منصور), بن سید سلطان محمد

const khandan: BookKhandan = {
  serial: 38,
  mohalla: 'Lakra',
  trees: [{ page: 213, father: 'سلطان محمد', root: muhammadMunawwar213 }],
}

export default khandan

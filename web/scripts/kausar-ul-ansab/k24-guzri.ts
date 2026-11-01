// Kausar-ul-Ansab (1999), pages 105–113: محلہ گذری (some pages add ـ گھیر مناف)
// Khandan 24 in the book's index: اولاد سید شجاعت علی بن سید ہزبر علی
//
//   page 105  two charts: سید سرفراز علی بن سید عبدالہادی عرف ہادی علی (headed "صفحہ ۱۰۱") and
//             سید شجاعت علی بن سید ہزبر علی (headed "صفحہ ۹۲")  -- the khandan's root
//   page 106  three charts, all headed "صفحہ ۱۰۵": امداد حسین بن غلام تقی, رحیم اللہ بن منور علی, ابو علی بن منور علی
//   page 107  انتظام علی بن وزیر علی (from 106), with ظہیر الدین بن اظہر الدین ("صفحہ ہذا") nested inside it
//   page 108  محمد تقی بن ظہیر الدین (from 107) and ضمیر علی بن ابو علی (from 106); the small
//             "صفحہ ہذا" chart حسن ضیاء بن وفاء الحسین is spliced under وفاء الحسین
//   page 109  نذر سبطین بن نذر حسین, موسیٰ رضا بن نذر حسین (both from 108); علی صفی رضا ("صفحہ ہذا") is nested in موسیٰ رضا
//   page 110  جواد حسین بن نذر حسین (from 108) and فضل علی عرف مکھو بن شجاعت علی (from 105)
//   page 111  six charts from 110: ذلیشان حسین, نایاب حیدر, انتخاب (small, heading unreadable),
//             رضا علی, اختر علی, افسر علی
//   page 112  افتدا علی بن ارتضیٰ علی, شہید علی بن رضا علی (both from 111), عنایت علی بن فضل علی (from 110)
//   page 113  نجم الحسن بن ندا الحسن عرف طپش, تصدق حسین بن نصیر الدین, خیرات علی بن وصی علی (all from 112)
//
// The consts are in dependency order: page 113 first, page 105 last. Every continuation chart's root is
// wrapped in onPage(<its own page>, ...) and replaces the stub that the earlier page drew for that man.
//
// FOR A HUMAN TO CHECK
//
//  * DUPLICATE PHOTOS (two photos of the same printed page; only one of each pair is used):
//      - page2.straight.jpg and page3.straight.jpg both print page 106. Page 2 is used (34 families, 14 VERIFY
//        marks). Page 3 reads the same three charts with small differences: امداد دین for امداد حسین, the
//        first man of chart 2 as a separate root انور علی, اظہر حسینی for اظہر حسین, نذیر علی for زبیر علی.
//      - page5.straight.jpg and page6.straight.jpg both print page 108. Page 6 is used (fewer VERIFY marks, and
//        its ظل سبطین agrees with the husband name on its own page). Page 5 differs in structure: it hangs the
//        قل سبطین family under a separate نذر حسین, gives واصف رضا three children, and gives محسن رضا only
//        two. If the book page 108 should be re-checked, compare those points first.
//  * HEADINGS BEAT DRAWINGS on page 105: the photo-1 agent put four children (شہر بانو, مہر بانو, کریم اللہ,
//    رحیم اللہ) under an unnamed daughter of نوروز علی, which flatten() would silently drop. The page-106
//    headings say رحیم اللہ بن منور علی and امداد حسین بن غلام تقی, and the four hang from the bar that is the
//    bottom edge of the box around منور علی's children, so they are written as the wrapped second row of
//    منور علی's children. The daughter 'دختر' is kept childless. The drawn غلام نقی is written غلام تقی
//    (heading), and the drawn name امداد علی is replaced by the heading's امداد حسین.
//  * NAME DIFFERENCES between a stub and its chart heading, resolved to the chart: ذیشان / ذلیشان حسین
//    (chart's spelling, alias شباب kept), شیدا علی / شہید علی, اقتدار علی / افتدا علی (stub spelling kept;
//    the heading may read افتخار or اقتدا; the stub says صفحہ 113 but the chart is on 112), انتخاب حیدر / انتخاب
//    (the page-111 heading is barely legible and says بن انور حق, taken as انور علی), فضل علی alias مکھو vs گھسو vs ملکو.
//  * نذر سبطین on page 109 is wired to the نذر سبطین drawn with no children inside نذر حسین's wrapped list
//    on page 108 (the rotated pen mark beside him), not to the elder نذر سبطین who already has six children
//    there. Both have a father named نذر حسین, so this is a judgement call.
//  * Page 112's printed page is not 110 and several task headings did not match the photos; the photos' own
//    printed pages and headings are followed throughout.
//  * Continuations that point outside the photos stay as stubs: عزیز الحسن (صفحہ 114, under خیرات علی).
//  * Page 108's wrapped sibling bars (قل/ظل سبطین, نذر حسین, ذکاء الحسین, ثناء الحسین, اصل سبطین) and the
//    long bar under انیس الحسین on page 106 (which may belong to ابراہیم حسین) are the least certain
//    structural readings. Many husband names and mohallas are marked VERIFY inline.
//  * Cut-off at the photo edge: زبیر علی (page 106, first letter), the fifth daughter of نذر حسین on page 108
//    (stored as دولت), and the unreadable rotated mark beside نذر سبطین.
//  * A pencil addition under منظور حسین's children on page 110 (عبداللہ سید and one more name) was not transcribed.
//  * The photograph and caption at the foot of page 113 (ناصر علی ولد متین حسن) are not part of a chart.
//  * No chart's father is drawn on any other photo except as wired above; the two roots on page 105 are
//    their own trees (fathers ہزبر علی and عبدالہادی), so ہزبر علی is not linked to anything here.

import { f, m, onPage, type BookKhandan } from './book'

// ───────────────────────── photo page11 ─────────────────────────
// Khandan 24, book page 111 (printed 113), mohalla گذری. Three charts on this page:
//  A. نجم الحسن بن سید ندا الحسن (عرف طپش), continued from "صفحہ ۱۱۲"  -> najmulHasan111
//  B. تصدق حسین بن سید نصیر الدین, "صفحہ ۱۱۲"                        -> tasaddukHusain111
//  C. خیرات علی بن سید وصی علی, "صفحہ ۱۱۲"                           -> khairatAli111
// (A caption at the bottom right, "ناصر علی ولد متین حسن", labels the photograph; it is not a chart.)

// ───────────── Chart A ─────────────

// شان حسن (son of رئیس حسن): four children on one bar, eldest first
const shanHasan111 = m('شان حسن', [
  f('زیبا نسیم', 'سید علی ظہیر', 'جعفری'),
  m('اظہر عباس'),
  f('مہر زہرا', 'سید اظہر عباس رضوی', 'مراد آباد'),
  m('ظفر عباس', [f('عرشی عباس')]), // VERIFY: عرشی عباس is printed without سید, taken as female
])

const muhammadShuzab111 = m('محمد شوذب', [
  m('محمد سروش'),
  f('فرح دیبا'),
  m('محمد یزدان'),
]) // VERIFY: شوذب spelling

const raeesHasan111 = m('رئیس حسن', [
  muhammadShuzab111,
  f('دلشاد بانو', 'سید محمد صادق زیدی', 'نورپور - حال گذری'),
  shanHasan111,
])

// علی ہادی: four children on one bar
const aliHadi111 = m('علی ہادی', [
  m('محمد عمران'),
  f('عشرت ہادی'), // VERIFY: printed without سید, taken as female
  m('کامران ہادی'),
  f('فرحت ہادی', 'سید شرف الدین', 'دانشمندان'),
])

// ناصر علی: children drawn in a box whose bottom edge is the next bar (شگفتہ ناصر sits inside the box)
const naserAli111 = m('ناصر علی', [
  f('شگفتہ ناصر', 'سید اعجاز کاظم', 'حال قاضی ڈاہ'), // VERIFY: husband's mohalla line reads like "محی بشر / حال قاضی ڈاہ"
  f('عنبرین ناصر', 'سید اسد مرتضیٰ', 'بنگلہ'),
  f('مہرین ناصر'),
  f('حمائل ناصر'),
  f('شائستہ ناصر', 'سید کمال رضا', 'دانشمندان'),
]) // VERIFY: whether شگفتہ ناصر (in the box) is a child of ناصر علی together with the four on the bar below

const aliMuttaqin111 = m('علی متین', [
  m('علی رضا'),
  f('بلقیس فاطمہ', 'سید فرقد رضا', 'جرولی'), // VERIFY: mohalla reads جڑ و دی
  f('برجیس فاطمہ', 'سید ابوالحسن', 'کوٹ'),
])

// ذہین حسن: seven children on one bar
const zaheenHasan111 = m('ذہین حسن', [
  m('احسن ذہین', [m('شمس مہدی')]),
  f('فہیم زہرا'),
  f('نشاط ذہین', 'سید صادق رضا', 'قاضی ڈاہ'), // VERIFY: husband line sits between فہیم زہرا and نشاط ذہین; could belong to فہیم زہرا
  m('مظفر ذہین'),
  f('رباب زہرا', 'سید شاہد رحیم', 'چھیوڑہ'), // VERIFY: husband's name (شاندار حسین?)
  m('نوید ذہین'),
  f('خولی زہرا', 'سید شان کاظم', 'سدو'), // VERIFY: husband and mohalla (read from a small crop)
])

const mutaqinHasan111 = m('متین حسن', [
  zaheenHasan111,
  naserAli111,
  aliHadi111,
  aliMuttaqin111,
  f('نسیم زہرا', 'سید شان حسن', 'گذری'),
  f('نعیم زہرا', 'سید امام مرتضیٰ', 'گذری'),
  f('ماہ زہرا', 'سید رضا علی', 'گذری'),
])

const najmulHasan111 = onPage(113, m('نجم الحسن', 'عرف طپش', [
  mutaqinHasan111,
  m('رفیع حسن', 'لاولد'),
  m('تمکین حسن', 'لاولد'),
  raeesHasan111,
]))

// ───────────── Chart B ─────────────

// نایاب حسن: six children on one bar
const nayabHasan111 = m('نایاب حسن', [
  m('ستجاب حسن'), // VERIFY: reads ستجاب / استجاب
  m('شاہنواز حسن'),
  m('اکرم حسن'),
  f('نجمہ بانو'),
  m('اکرام حسن'),
  m('مہتاب حسن'),
])

const kamyabHasan111 = m('کامیاب حسن', [
  f('عروج فاطمہ'),
  m('فہد حسن'),
  f('مرجبین فاطمہ'), // VERIFY: spelling
])

const muhammadHasan111 = m('محمد حسن', [
  f('طاہرہ خاتون', 'سید احمد حسن'),
  nayabHasan111,
  f('نجیدہ خاتون', 'ظہیر احمد', 'مراد آباد'), // VERIFY: spelling نجمیدہ / سنجیدہ; husband printed without سید
  f('ظاہرہ خاتون', 'سید شاہد حسین زیدی', 'مراد آبادی دروازہ'),
  f('پاکیزہ خاتون', 'سید علی حسن', 'عثمان پورہ'), // VERIFY: mohalla
  f('آصفہ خاتون', 'سید زاہد حسین', 'ہنڈور - بجنور'), // VERIFY: mohalla
  kamyabHasan111,
])

const aaleMustafa111 = m('آل مصطفیٰ', [
  m('پرویز حیدر'),
  f('نگار فاطمہ'),
  f('کنیز فاطمہ'),
  f('پروین زہرا'),
  f('نازنین زہرا'),
])

const afzalAli111 = m('افضل علی', [
  aaleMustafa111,
  f('کنیز زہرا', 'سید محمد مہدی', 'گذری'),
])

const shamsulHasan111 = m('شمس الحسن', [
  muhammadHasan111,
  m('علی نقی', [f('فہمیدہ خاتون', 'سید ببر علی', 'چکلی')]), // VERIFY: husband reads ببر علی جعفری; mohalla چکلی
  f('آمنہ خاتون', 'سید شمس الدین', 'کوٹ'),
  f('سکینہ خاتون', 'سید ببر علی', 'گذری'), // VERIFY: husband's name
  f('حسینہ خاتون', 'سید شمشاد حسین', 'گذری'), // VERIFY: husband's name
  f('ظہیرہ خاتون', 'سید محمد کاظم', 'دانشمندان'),
  afzalAli111,
])

const tasaddukHusain111 = onPage(113, m('تصدق حسین', [
  m('مصطفیٰ حسین', [shamsulHasan111]),
  m('مرتضیٰ حسین', 'لاولد'),
]))

// ───────────── Chart C ─────────────

const mubarakHasan111 = m('مبارک حسن', [
  m('مجاہد حسین', 'لاولد'),
  m('مہاجر حسین', 'لاولد'),
])

const zakiHasan111 = m('زکی حسن', [
  mubarakHasan111,
  f('انیسہ خاتون', 'سید نہال احمد', 'پچدرہ'),
  f('متینہ خاتون', 'سید الطاف حسین', 'کوچہ غلام علی'),
  f('جمیلہ خاتون', 'سید آل احمد', 'سدو'),
]) // VERIFY: the four are drawn on one bar below زکی حسن

const azeezulHasan111 = onPage(114, m('عزیز الحسن', 'عرف ٹنا')) // VERIFY: alias reads like ٹنا / جنا

const khairatAli111 = onPage(113, m('خیرات علی', [
  azeezulHasan111,
  f('ذکیہ خاتون', 'سید عابد نذر', 'سنبھلی'), // VERIFY: mohalla
  m('تمیز حسن', 'لاولد'),
  f('رضیہ خاتون', 'سید محمد الیاس', 'چاہ شور حال بچدرہ'), // VERIFY: mohalla
  zakiHasan111,
]))


// ───────────────────────── photo page10 ─────────────────────────
// Khandan 24 (محلہ گذری), photo page10.straight.jpg, printed page number 112 (the task said 110; the photo prints 112).
// The task's heading "سید جواد حسین بن سید نذر حسین" does not appear on this photo; the three headings actually printed are:
//  1. افتدا علی (VERIFY: افتخار / اقتدا) علی بن سید ارتضیٰ علی  ("صفحہ 111")  -> iftidaAli110
//  2. سید شہید علی بن سید رضا علی  ("صفحہ 111")                             -> shahidAli110
//  3. سید عنایت علی بن سید فضل علی عرف ملکو  ("صفحہ 110")                    -> inayatAli110
// Wrapped sibling bars: shahidAli's son mujtabaAli's children (5 on top row, 4 on second row), aliAqsam's children
// (4 + 4) and hizabrAli's children (6 + 2) are each ONE sibling list, eldest first.


// ───────── Chart 1: افتدا علی بن ارتضیٰ علی ─────────

const muhammadHaidar110 = m('محمد حیدر', [
  f('تاجدار زہرا'), // VERIFY: first letters of the name
  m('سجاد حیدر'),
  m('منتظر مہدی'),
  m('بخت حیدر'),
  f('شاندار زہرا'),
])

const idrisHaidar110 = m('ادریس حیدر', [m('شارق حیدر'), f('عزالہ کنیز')])

const riazHaidar110 = m('ریاض حیدر', [
  f('شافعہ تسنیم', 'سید کلیم رضا', 'شفاعت پوتہ'), // VERIFY: husband's name
  f('شافعہ بردین', 'سید علی بن حامد', 'کٹرہ غلام علی'), // VERIFY: name (بردین / بیدین) and husband's name; blurred
  m('امتیاز حیدر', [m('ضیا حیدر'), f('تصویر امتیاز')]), // VERIFY: امتیاز / اعجاز; blurred
])

const iftidaAli110 = onPage(112, m('اقتدار علی', [ // heading reads افتدا / افتخار / اقتدا (VERIFY); the page-111 leaf reads اقتدار
  muhammadHaidar110,
  f('بلقیس زہرا', 'سید علی صادق', 'گذری'),
  m('خلیق حیدر'),
  idrisHaidar110,
  f('انیس زہرا', 'سید ابن حسن', 'دانشمندان'),
  riazHaidar110,
])) // VERIFY: first name of the heading person (افتدا / اقتدا)

// ───────── Chart 2: شہید علی بن رضا علی ─────────

const aliAqsam110 = m('علی الاقسم', [
  // top row
  f('نسرین فاطمہ', 'سید قمر عباس', 'دانشمندان'),
  f('نگین فاطمہ', 'سید وامق علی', 'اعوان پور حال کالی گذری'), // VERIFY: husband's name and mohalla
  f('شاہانہ خاتون', 'سید نور علی', 'کالی گذری'),
  m('علی صغدر'),
  // second (wrapped) row
  m('علی سکندر', [m('عربان سکندر')]),
  f('ریحانہ خاتون'),
  m('علی الاسلم', [m('زہیب علی'), f('مسائلہ زہرا')]),
  m('علی الاکرم'),
]) // VERIFY: name علی الاقسم (قاسم / اقصم)

const itqiAli110 = m('اتقی علی', 'عرف حسینا', [ // VERIFY: name and alias
  f('مکبرہ خاتون', 'سید سبط عباس', 'دربار کلاں'),
  aliAqsam110,
])

const mustafaAli110 = m('مصطفیٰ علی', [itqiAli110])

const shujaAli110 = m('شجاع علی', [
  f('فاطمہ خاتون', 'سید عین الحسن', 'بگلہ'),
  f('اعظم خاتون', 'سید شاکر حسین', 'ٹھلوئی'), // VERIFY: mohalla
])

const mahdiAli110 = m('مہندی علی', [ // VERIFY: name (مہندی / مہتدی)
  // top row
  f('صغریٰ خاتون', 'سید آباد اصغر', 'قاضی زادہ'), // VERIFY: husband's name
  f('نسرین فاطمہ', 'سید علی ہادی', 'گذری'),
  f('بلقیس فاطمہ', 'سید شجاعت علی', 'کالی بگڑی'), // VERIFY: mohalla
  f('حسن فاطمہ', 'سید زین رضا', 'بگلہ'),
  m('ضیا علی'),
  // second (wrapped) row
  m('سعید اختر', [
    f('مہوش سعید'),
    m('جون ایلیا سعید'), // VERIFY: printed without سید but a male name
    f('سارا سعید'),
  ]),
  m('باسط علی', [m('واصف علی')]),
  m('رضا علی', [m('کاشف عباس'), m('حسن عباس'), m('محمد علی'), f('مہر زہرا')]),
  f('رئیس فاطمہ', 'سید علی انور', 'گذری'),
])

const mujtabaAli110 = m('مجتبیٰ علی', [
  m('مطیع الحسن', 'عرف ...', [m('عزالحسین')]), // VERIFY: small word above the name (read like "وف عکل") and the child's name
  m('اجتبیٰ علی', 'لاولد'),
  m('شرف الدین', [f('مرناز زہرا'), f('مہناز زہرا'), f('گلناز زہرا'), f('فرحین زہرا')]),
  mahdiAli110,
])

const hizabrAli110 = m('ہزبر علی', [
  // top row
  f('سفینہ خاتون', 'سید نقی رضا', 'گذری'),
  f('تسکینہ خاتون', 'سید صفی حیدر', 'گھیر کرم علی خان'), // VERIFY: mohalla
  f('تمکنہ خاتون', 'سید سبط ضغیم', 'ترپولیہ', 'زوجہ ثانی'), // VERIFY: husband's name and mohalla
  m('شجر علی', [m('رضا علی'), f('مہناز فاطمہ'), m('مرتضیٰ علی')]),
  f('برجیس فاطمہ', 'سید قائم مہدی', 'شفاعت پوتہ'),
  m('قمر علی', [m('اظہر علی'), f('صبہا'), m('جوہر علی')]),
  // second (wrapped) row
  f('مرجین فاطمہ', 'سید حسین رضا'),
  m('نذر علی', [f('رومانہ'), m('جواہر علی')]),
])

const shahidAli110 = onPage(112, m('شہید علی', [
  hizabrAli110,
  mustafaAli110,
  m('حمزہ علی', 'لاولد'),
  shujaAli110,
  f('معظمہ خاتون', 'سید معصوم حسن', 'گذری', 'زوجہ ثانی'),
  m('مقتدی علی', 'لاولد'),
  f('نصیرہ خاتون', 'سید اسرار حسن', 'دانشمندان'),
  f('فاطمہ خاتون', 'سید مجاہد حسین', 'دانشمندان'),
  mujtabaAli110,
]))

// ───────── Chart 3: عنایت علی بن فضل علی عرف ملکو ─────────

const wasiAli110 = m('وصی علی', [
  khairatAli111,
  f('فراست النسا', 'سید اولاد علی', 'گذری'),
  m('ضامن علی', [
    m('تحسین علی', [
      f('کنیز سلمیٰ', 'سید عطا حسن', 'گذری'),
      m('فدیہ حسین', 'لاولد'), // VERIFY: name (فدیہ / فدا)
      f('امان دولت', 'سید عطا حسن', 'گذری'), // VERIFY: husband's name (same as her sister's?)
    ]),
  ]),
])

const naseeruddin110 = m('نصیر الدین', [
  f('مبارک النسا', 'سید علی عابد'),
  tasaddukHusain111,
])

const nasirAli110 = m('ناصر علی', [
  m('مہدی علی', [
    f('ماجدہ خاتون', 'سید حامد حسین', 'ہوکر حال شفاعت پوتہ'), // VERIFY: mohalla
    m('نبی حسن', 'لاولد'),
  ]),
  m('نذر الحسن', 'عرف طیش', [ // VERIFY: the word above the name (طیش) is probably an alias
    najmulHasan111,
    f('سیدہ خاتون', 'سید ولی حسن', 'گذری'),
  ]),
  f('زیب النسا', 'سید محسن علی', 'گذری'), // VERIFY: زیب / ریب
  m('مظفر حسین', [f('دختر', 'سید عابد حسین', 'جعفری')]), // VERIFY: the book gives no name, only "دختر"
])

const inayatAli110 = onPage(112, m('عنایت علی', 'عرف ملکو', [wasiAli110, naseeruddin110, nasirAli110]))


// ───────────────────────── photo page9 ─────────────────────────
// Khandan 24 (محلہ گذری), photo page9 = book page printed 111 (task said 109; the printed header reads ۱۱۱).
// NOTE: the heading given in the task (موسیٰ رضا بن نذر حسین / نذر سبطین) is NOT on this photo. Charts actually on it:
//  1. ذلیشان حسین بن سید رضوان حسین ("صفحہ 110")                       -> zalishanHusain109
//  2. سید نایاب حیدر بن سید الو (انور؟) علی ("صفحہ 110")                -> nayabHaidar109
//  3. انتخاب ... بن انور حق (small chart, middle right, no page tag)     -> intikhab109
//  4. سید رضا علی بن سید الہی بخش ("صفحہ 110")                          -> razaAli109
//  5. سید اختر علی بن سید انظار حسین ("صفحہ 110")                       -> akhtarAli109
//  6. سید افسر علی بن سید انظار حسین ("صفحہ 110")                       -> afsarAli109
// Wrapped sibling lists (drawn as a box / bars joined at the ends) are written as one list, top bar first, right to left.

// ───────── 1. ذلیشان حسین بن رضوان حسین ─────────
const zalishanHusain109 = onPage(111, m('ذلیشان حسین', 'عرف شباب', [
  f('ریحان فاطمہ'),
  f('بوستان فاطمہ'),
  m('ایمان حسین'),
  m('حسین رضا', [
    f('سیدہ سلطانہ'),
    m('مناظر عباس'),
    f('زہین رضوانہ'), // VERIFY: spelling (زہین / ذہین)
  ]),
  f('شان فاطمہ', 'سید نوفر حسن', 'حال دانشمندان'), // VERIFY: husband's name (نوفر / نو قمر)
  m('ریحان حسین'),
  m('سبطین رضا'),
]))

// ───────── 2. نایاب حیدر بن الو علی ─────────
const nayabHaidar109 = onPage(111, m('نایاب حیدر', [
  f('زرین فاطمہ'),
  f('عاشور فاطمہ'),
  f('عروج فاطمہ', 'سید کاظم تابش', 'چاہ غوری حال دربار کلاں'), // VERIFY: husband's name (تابش / تاجد)
  f('رخشندہ فاطمہ'),
  m('حسنین حیدر', [f('ندیم فاطمہ')]),
  m('نواب حیدر', [f('صدرہ کنول')]),
  f('ناہید پروین', 'سید سکندر جاوید', 'گذری'),
  m('فتحیاب حیدر'),
  m('نوید حیدر'),
])) // VERIFY: father's father printed "الو علی" (probably انور علی)

// ───────── 3. انتخاب ... بن انور حق (small chart) ─────────
// VERIFY: heading is hard to read ("انتخاب سید ... بن انور حق"); root name and father uncertain
const intikhab109 = onPage(111, m('انتخاب حیدر', [
  m('سلمان مرتضیٰ'),
  f('شاہ حسین'), // VERIFY: name reads شاہ/ثناہ حسین; no سید printed so taken as female
  f('ثنا حسین'), // VERIFY: name reads ثنا/منا حسین; no سید printed so taken as female
  m('ارسلان مرتضیٰ'),
]))

// ───────── 4. رضا علی بن الہی بخش ─────────
// مرتضیٰ علی's children: 4 daughters on the top bar, then 4 on the bar below (joined at the left), then a third bar (اقتدار, سنا علی)
const razaAli109 = onPage(111, m('رضا علی', [
  shahidAli110, // page 112 chart (headed شہید علی بن رضا علی); this page drew شیدا
  m('مرتضیٰ علی', 'عرف چاند', [
    f('مخدوم خاتون', 'سید اختر حسین خان', 'دانشمندان'), // VERIFY: a small word (خان) sits above the husband's name
    f('مومنہ خاتون', 'سید فرمان خان', 'پچھوڑہ'), // VERIFY: husband's name hard to read
    f('جمیلہ خاتون', 'سید محمد رضا', 'گذری', 'عرف کربلائی'),
    f('مطاہرہ خاتون', 'سید حیدر رضا', 'گذری', 'زوجہ ثانی'), // VERIFY: husband's name and "ثانی"
    m('ضیا علی', 'لاولد'),
    f('زائرہ خاتون', 'سید ذلیشان حسین', 'گذری'),
    m('فضل علی', 'لاولد'),
    m('لقا علی', [
      m('محمد مرتضیٰ علی', [m('علمدار حیدر'), m('رضا حیدر'), m('عباس حیدر')]),
      f('حسین فاطمہ', 'سید عبد حسنین خان', 'دانشمندان'), // VERIFY: husband's name (عبد الحسنین / عبد حسنین)
    ]),
    iftidaAli110, // page 112 chart headed افتدا علی بن ارتضیٰ علی (VERIFY: same man as اقتدار; this page tagged 113, the chart is on 112)
    m('سنا علی', [
      m('فضنفر علی', [m('حمید علی')]), // VERIFY: فضنفر (فضنفر / مظفر)
      // صفدر علی: 3 daughters on the top bar, 3 sons on the bar below (joined), one sibling list
      m('صفدر علی', [
        f('نسیم فاطمہ', 'سید محمد حسنین', 'دانشمندان'),
        f('شمیم فاطمہ', 'سید علی عباس زیدی', 'نوگانواں سادات'),
        f('نذر فاطمہ', 'سید محمد جعفر', 'اعوان پور'), // VERIFY: mohalla (اعوان پور)
        m('علی نوبر', [m('ببر علی', 'لاولد'), f('تبسم زہرا'), m('عباس علی')]), // VERIFY: علی نوبر (نوبر / نویر / توپر)
        m('علی اصغر'),
        m('علی جعفر', [m('علی جوہر'), m('علی جواہر'), m('علی اختر'), f('ماہ زہرا')]),
      ]),
    ]),
  ]), // VERIFY: the second and third bars below the daughters are read as more children of مرتضیٰ علی (wrapped list)
  f('معصومہ خاتون', 'سید سعید حسن', 'گذری', 'عرف مجو'),
]))

// ───────── 5. اختر علی بن انظار حسین ─────────
const akhtarAli109 = onPage(111, m('اختر علی', [
  m('کوثر علی', [
    f('مقدس خاتون'),
    f('صالحہ خاتون', 'سید نور الحسن', 'لکھنؤ'),
    f('اعجاز فاطمہ'),
    f('تسنیم فاطمہ', 'سید ترغیب حسن', 'گذری'),
    m('علی امام'),
  ]),
  f('مزملہ خاتون', 'سید آفتاب احمد', 'چاہ شور پچدرہ'), // VERIFY: name (مزملہ / مزیلہ)
  f('سنجیدہ خاتون', 'سید زین الحسن', 'بگلہ', 'زوجہ ثانی'),
  f('اربعین خاتون', 'سید محمد احمد', 'پچدرہ'), // VERIFY: name (اربعین / ارلعبینہ)
  m('غلام قنبر', [
    m('محمد جاوید'),
    f('شائستہ خاتون'),
    m('محمد سکندر جاوید'),
    f('مشاہدہ خاتون'),
    m('سبطین جاوید'),
    m('تقی جاوید'),
  ]),
]))

// ───────── 6. افسر علی بن انظار حسین ─────────
// Top bar five, bottom bar four (joined at the left end), one list
const afsarAli109 = onPage(111, m('افسر علی', [
  m('ذوالقرنین حیدر', [m('اعجاز حیدر')]),
  f('حدیثہ خاتون', 'سید تہذیب الحسن', 'دربار کلاں'),
  f('خورشید بانو', 'سید عباد الحسن', 'دربار کلاں'),
  f('تنویر بانو', 'سید محمد حسن', 'سنبھلی حال چنگی دروازہ'), // VERIFY: husband's name and mohalla
  f('حسین بانو', 'سید حیدر رضا', 'دانشمندان'),
  m('سیدین حیدر', [f('صنم زہرا'), m('عرفان حیدر'), f('العم زہرا')]), // VERIFY: name (سیدین / سجدین), العم زہرا
  m('فردوس حیدر', 'لاولد'),
  m('نورعین حیدر', [m('فرمان حیدر'), f('سیما بانو'), m('فرحان حیدر')]),
  m('ثقلین حیدر', [
    // top bar two, bottom bar three (joined at the right end), one list
    f('شمع پروین', 'سید محمد مہدی', 'قاضی زادہ'),
    m('جمال حیدر', [f('علیزہ فاطمہ')]),
    m('صادقین حیدر', [
      f('ثنا حیدر'), // VERIFY: printed without سید, taken as female
      m('شاہ زیب حیدر'),
      f('سحر حیدرہ'), // VERIFY: name (سحر حیدرہ)
    ]),
    f('رعنا پروین', 'سید نسیم حیدر', 'قاضی زادہ'),
    m('کمال حیدر', [f('تبسم کمال'), m('زہیب حیدر'), f('سنبل کمال')]),
  ]),
]))


// ───────────────────────── photo page8 ─────────────────────────
// Khandan 24, محلہ گذری ـ گھیر مناف. Photo page8 (the printed page number on the photo is 110; filed as book page "108").
// Chart 1 (top): heading "صفحہ 108 / سید جواد حسین بن سید نذر حسین"  -> jawadHusain108
// Chart 2 (bottom): heading "صفحہ 105 / سید فضل علی عرف مکھو بن سید شجاعت علی" -> fazlAli108
// Wrapped-sibling convention: where a drawn box's bottom edge doubles as a second bar, both rows are one sibling list, eldest first.
// A faint pencil addition (عبداللہ سید and a second name, dashed arrows under the children of منظور حسین) is NOT transcribed.

// ───────────────── Chart 1: جواد حسین بن نذر حسین ─────────────────
const jawadHusain108 = onPage(110, m('جواد حسین', [
  m('امجاد حسین', [
    f('توحید زہرا'),
    f('تہذیب زہرا', 'سید منصوب حسن', 'مجاپورہ'), // VERIFY: husband's first name
    f('تمہید زہرا', 'سید علی داور', 'مجاپورہ حال دانشمندان'),
    // second bar (the box's bottom edge) continues the same sibling list
    m('ایجاد حسین', [
      f('تکبیر زہرا', 'سید فیض یاب حسین', 'چاندپور'), // VERIFY: husband's name
      f('تطہیر زہرا', 'سید محمد شفیع', 'لکھنؤ'),
      m('ایجاب مہدی', [
        f('ذاکیہ زہرا'),
        m('شباب مہدی'),
        m('شعیب مہدی'),
        m('شیراز مہدی'),
      ]),
    ]),
    m('عروج مہدی', [
      f('عروس زہرا', 'سید تصویر رضا', 'گذری'),
      m('نوید عروج', [f('عنبر فاطمہ')]),
      f('یزداں عروج', 'سید ذاکر حسین', 'نخشی حال دانشمندان'), // VERIFY: mohalla
      m('ترنم عروج', [f('فاطمہ زادی'), f('مبارکین')]), // VERIFY: ترنم عروج has سید under it (a man); his two children are printed without سید
      f('شادان عروج', 'سید شکور حسین', 'بھوکہ حال مجاپورہ'), // VERIFY: mohalla
    ]),
    m('جواد مہدی', [
      f('یاسمین زہرا'),
      m('شہزاد مہدی'),
      f('نازیہ زہرا'),
      f('انجم زہرا'),
    ]),
    m('اوصاف مہدی', [
      m('امام مہدی'),
      f('صندل اوصاف'), // VERIFY: صندل اوصاف may be a man's name or two names
      m('حسن مہدی'),
    ]),
  ]),
  f('سائرہ خاتون', 'سید ذکی رضا', 'گھیر مناف'),
  f('حاجرہ خاتون', 'سید حسن رضا', 'گھیر مناف'),
  m('آباد حسین', 'عرف منا', [
    f('معراج فاطمہ', 'سید صبیح رضا', 'گھیر مناف'),
    m('اتحاد حسین', 'عرف چنا', [
      m('انوار حیدر', 'لاولد'),
      f('عزیزہ خاتون', 'سید ستار حیدر', 'دانشمندان'),
      m('اجتہاد حسین'),
    ]),
    f('انوار فاطمہ'),
  ]),
  f('زہرا خاتون', 'سید اختر حسن', 'گذری'),
  f('نادرہ خاتون', 'سید نفیس حسن', 'حقانی'),
  m('زین العابدین', 'عرف جمعہ', [
    // first bar
    m('پیمبر رضا', 'مفقود الخبر، عرف محمد حیدر'), // VERIFY: name reads پیمبر رضا
    f('جعفرہ خاتون', 'سید کاظم حسن', 'حقانی'),
    f('پاکیزہ خاتون', 'سید صفدر حسن', 'گذری'),
    // second bar (box bottom) continues the same list
    m('قائم رضا'), // VERIFY: drawn from the end of the box's bottom bar; could instead be a child of اتحاد حسین
    m('اعتماد حسین', [
      f('ثمرین فاطمہ'), // VERIFY: spelling (نمرین / ثمرین)
      f('انیسہ خاتون'),
      m('وقار حسین'),
      f('فرحت بانو'),
      // second row
      m('منظور حسین', [
        m('حسن مہدی', [
          f('حسن فاطمہ'), // VERIFY: the three daughters read حسن / حسنین / حسین فاطمہ
          f('حسنین فاطمہ'),
          f('حسین فاطمہ'),
          m('دائم رضا'),
          m('قمر رضا'),
        ]),
        f('زرین فاطمہ'),
        f('افروز فاطمہ'),
        f('مہرین فاطمہ'),
        f('بلقیس فاطمہ', 'سید ستار متقی', 'چھنگا دروازہ حال حقانی'), // VERIFY: drawn on a bar below the box; may belong to اعتماد حسین instead of منظور حسین; husband's name
      ]),
      m('رئیس حسین', [f('مہوش')]), // VERIFY: مہوش hangs on an arrow under رئیس حسین
      m('انیس حسین'),
      m('مدبر حسین'),
    ]),
    f('مشبّہ خاتون', 'سید بدر منیر', 'گذری'),
    f('مبشرہ خاتون', 'سید فراز الحسن', 'سرائے کہنہ'), // VERIFY: husband's name
  ]),
]))

// ───────────────── Chart 2: فضل علی عرف مکھو بن شجاعت علی ─────────────────
const fazlAli108 = onPage(110, m('فضل علی', 'عرف مکھو', [
  m('ولایت علی', [
    m('ذاکر علی', [
      m('خادم حسین', [
        m('سلطان حسین', [
          m('رضوان حسین', [
            zalishanHusain109, // page 111 chart spells ذلیشان; عرف شباب from this page
            f('ام فروہ', 'سید سعید اعلی', 'گذری'), // VERIFY: husband's name
            f('ام حبیبہ', 'سید ظہر الحسن', 'مجھیر پٹی حال قاضی زادہ'), // VERIFY: husband's name and mohalla
            m('شادمان حسین', 'لاولد'),
          ]),
          m('عرفان حسین', [
            f('ام البنین', 'سید نور رضا', 'دانشمندان', 'عرف چنی'), // VERIFY: the small عرف word
            f('ام رباب', 'سید مبارک سعید', 'دربار کلاں'), // VERIFY: husband's name
          ]),
          f('وحیدہ خاتون', 'سید حمید الدین', 'گذری'),
        ]),
      ]),
      f('صغیر النساء', 'سید مظہر الدین', 'گنڈی'), // VERIFY: mohalla
    ]),
    m('باقر علی', [
      m('محمد حسین', 'لاولد'),
      f('دختر', 'سید عابد حسین', 'دانشمندان'), // VERIFY: the book gives no name, only "دختر"
      m('بندہ علی', [
        f('زاہدہ خاتون', 'سید حسن ضیاء', 'شفاعت پورہ'), // VERIFY: husband's name
        m('زاہد حسین', [
          m('صائب حسین', 'لاولد'),
          f('کنیزہ خاتون', 'سید قائم رضا', 'دانشمندان'),
          m('نائب حسین'),
        ]),
      ]),
    ]),
    m('شاکر علی', [
      m('ابن علی', 'لاولد'),
      m('ابراہیم علی', [f('دختر')]), // VERIFY: the book gives no name
      f('کنیز بانو', 'سید رحیم بخش', 'صالونگراں'), // VERIFY: mohalla
    ]),
  ]),
  m('افضل علی', [f('دختر'), f('دختر')]), // VERIFY: the book gives no names for these two daughters
  inayatAli110,
  m('الہی بخش', [
    m('مہربان علی', [
      m('عاشق حسین', 'لاولد'),
      m('شائق حسین', 'لاولد'),
      m('نثار حسین', [
        m('انتظار حسین', [
          afsarAli109,
          m('انور علی', [
            nayabHaidar109,
            intikhab109, // VERIFY: the page-111 heading is barely legible (انتخاب ... بن انور حق); matched to this leaf
            m('آفتاب حیدر', [
              m('محمد حیدر'),
              m('علی حیدر'),
              f('رضیہ بانو', 'سید محمد عباس', 'آگرہ'),
              m('محمد الطاف حیدر'),
              f('ذکیہ بانو', 'سید ارشاد علی', 'نوگانواں سادات'),
              m('ارشد حیدر'),
              m('مہتاب حیدر'), // VERIFY: drawn from the hooked end of the bar under محمد حیدر; may instead be محمد حیدر's son
            ]),
          ]),
          akhtarAli109,
          m('منور علی', [
            f('فاطمہ خاتون', 'سید محمد عباس', 'چاہ شور بچھیدرہ'), // VERIFY: husband's name and mohalla
            f('ضامنہ خاتون', 'سید غلام قنبر', 'گذری'),
          ]),
        ]),
        f('عقیلہ خاتون', 'سید نجم الحسن', 'گذری'),
      ]),
      f('کریم النساء', 'سید بشارت حسین'),
      m('قربان حسین', 'لاولد'),
    ]),
    f('حبیب النساء', 'سید لبیس علی', 'گذری'), // VERIFY: husband's name
    razaAli109,
  ]),
]))


// ───────────────────────── photo page7 ─────────────────────────
// Khandan 24 (محلہ گذری ـ گھیر مناف), photo page7. The photo's printed page number is 109 (the task called it 108).
// Chart 1: سید نذر سبطین بن سید نذر حسین (marginal "صفحہ ۱۰۸"), top right corner.
// Chart 2: سید موسیٰ رضا بن سید نذر حسین (headed "صفحہ ۱۰۸"), top; its son علی صفی رضا is drawn lower on this same page.
// Chart 3: سید علی صفی رضا بن سید موسیٰ رضا ("صفحہ ہذا"), middle and lower page. It is spliced into chart 2 below, so no onPage is needed.
// Wrapped sibling bars (one sibling list, top row first, right to left inside each row) occur for عسکری رضا and سبط رضا.

// ───────── chart 3: sub-families ─────────

// علی موتی رضا: three children on one bar
const aliMotiRaza108 = m('علی موتی رضا', [
  m('علی ملیح رضا', [
    f('کنیز فاطمہ'),
    m('حیدر رضا'),
    m('عباس رضا'),
    f('تطہیر فاطمہ', 'سید محمد علی نیدی', 'قاضی زادہ'), // VERIFY: husband's name (نیدی / زیدی)
    m('تسنیم رضا'),
    f('ثنا رضا'), // VERIFY: printed without سید, so taken as female; the name could be ثنا / بنا
  ]),
  f('مہ لقا بانو', 'سید فراز حسین زیدی', 'گذری'), // VERIFY: first word (مہ لقا / مرلقا)
  m('علی سمیع رضا', [
    f('حسین زہرا'),
    f('ماہ زہرا'),
    m('محمد علی'),
    m('جعفر علی گوہر'), // VERIFY: may be two names (جعفر علی / گوہر)
    f('شان فاطمہ'),
    f('ام زہرا'),
  ]),
])

// علی صبیح رضا: three children on one bar
const aliSabihRaza108 = m('علی صبیح رضا', [
  m('اقبال رضا', [f('نورین فاطمہ')]),
  f('نازنین بانو', 'سید شبیہ اصغر جعفر', 'آگرہ'), // VERIFY: husband's name and mohalla
  m('حیدر رضا', [
    f('ماہرہ تبسم'),
    m('حسن رضا'),
    f('سارا تبسم'),
    m('ظاہر رضا'), // VERIFY: reading ظاہر / طاہر; the arrow is bent
  ]),
])

// علی امام رضا: four children on one bar
const aliImamRaza108 = m('علی امام رضا', [
  m('حسین امام'),
  f('منور سلطانہ', 'سید سمیع رضا', 'گھیر مناف'),
  m('حسن امام', 'عرف ضیا عباس', [ // VERIFY: the عرف line sits between حسن امام and رضا امام; could belong to رضا امام
    f('عندلیب'),
    m('محمد امام'),
    f('سلمیٰ'),
  ]),
  m('رضا امام'),
])

// سبط رضا (the eldest, drawn at the far right edge): his children are one long bar plus a wrapped second bar
const sibtRaza108 = m('سبط رضا', [
  // first row, right to left
  f('ثمین فاطمہ', 'سید باریاب حسین', 'دربار کلاں'), // VERIFY: first name (ثمین / نمین)
  f('شبانہ قمر', 'سید علی تقی', 'مجاپوتہ حال دانشمندان'),
  m('علی باقر رضا', [f('کومل رضا')]), // VERIFY: single child drawn under him with no bar; name and gender (کومل / کوثر)
  m('علی سمطر رضا', [m('دایان رضا'), f('افروز فاطمہ')]), // VERIFY: سمطر spelling
  // علی لحت رضا: six children on one bar
  m('علی لحت رضا', [
    m('نوید امام'),
    f('شبنم رضا'),
    m('عدیل عباس'),
    m('زیب رضا'), // VERIFY: زیب / زبیب
    f('نرسی رضا', 'سید محمد عباس', 'چاہ غوری'), // VERIFY: first name (نرسی / نریسی)
    m('خرم رضا'),
  ]),
  m('غلام تقلین', 'عرف نقن', [ // VERIFY: عرف word (نقن / نقی)
    f('نزہت ناز'),
    m('محمد کاشف رضا'),
    m('جمال التقلین'), // VERIFY: may be جمال رضا
    m('حسین رضا'),
    f('مہناز فاطمہ'),
  ]),
  // second wrapped row, right to left
  m('علی تقی رضا', [f('حنا رضا'), m('احسن رضا'), f('گل زہرا')]), // VERIFY: first child's name and gender (حنا / خنار)
  m('علی رفعت امام', [m('زاہد امام'), f('رضا زہرا'), f('طاہرہ بتول')]), // VERIFY: رضا زہرا may read ردا زہرا
]) // VERIFY: the second row (علی تقی رضا, علی رفعت امام) hangs off a bar joined to the end of the first; taken as one wrapped sibling list

// ───────── chart 3: علی صفی رضا بن موسیٰ رضا ─────────

const aliSafiRaza108 = onPage(109, m('علی صفی رضا', [
  sibtRaza108,
  aliSabihRaza108,
  f('معینہ خاتون', 'سید مبارک حسن', 'مجاپوتہ'),
  f('مکینہ خاتون', 'سید ہزبر علی', 'گذری'), // VERIFY: husband's name (ہزبر / ہنر)
  aliMotiRaza108,
  f('سکینہ خاتون', 'سید شہنشاہ حسین', 'شفاعت پوتہ'),
  f('قدسیہ خاتون', 'سید اکرم رضا', 'دربار کلاں', 'عرف صدیقی'), // VERIFY: first name (قدسیہ / فدسیہ) and the عرف word (صدیقی / سدقی)
  f('صبیحہ خاتون', 'سید حسین محمد قابل', 'لگڑہ'), // VERIFY: husband's name and mohalla
  aliImamRaza108,
  m('علی منتقی رضا', [
    f('تسنیم زہرا'),
    m('رضا عباس'),
    m('فہیم رضا', [m('احسن رضا'), m('عدیل رضا')]),
    f('شگفتہ زہرا', 'سید سجاد حسین', 'گڑھ گنگا نوان'), // VERIFY: mohalla
    m('ندیم رضا'),
  ]),
]))

// ───────── chart 2: سید موسیٰ رضا بن سید نذر حسین ─────────

// منتظم رضا: four children on one bar
const muntazimRaza108 = m('منتظم رضا', [
  f('نازش سیدہ'),
  m('احمد نواز'),
  f('سیدہ عروسہ'),
  m('اسکندر رضا'),
])

// علی رضا: four children on one bar
const aliRaza108 = m('علی رضا', [
  muntazimRaza108,
  f('کنیز سکینہ', 'سید نایاب حیدر', 'شفاعت پوتہ'), // VERIFY: husband's name
  m('معتشم رضا'), // VERIFY: معتشم / منتشم
  m('منتظر رضا', [
    m('پرویز رضا'),
    m('شارق رضا'),
    m('صادق رضا'),
    m('واثق رضا'),
  ]),
])

// حسن جاہ: three children on one bar
const hasanJah108 = m('حسن جاہ', [
  f('مہوش زہرا'),
  m('مرسلین حسن'), // VERIFY: مرسلین / مسلیم
  f('بشریٰ زہرا'),
])

// محمد رضا: four children on one bar
const muhammadRaza108 = m('محمد رضا', [
  m('عالی جاہ', [
    f('صاحبہ زہرا'), // VERIFY: drawn at the curved end of the bar with no arrow
    f('ثمینہ زہرا'), // VERIFY: ثمینہ / ثانیہ
    f('صبا زہرا'),
  ]),
  f('مہذبہ خاتون', 'سید منہاج الحسن', 'چھیوڑہ حال شفاعت پوتہ'), // VERIFY: first name reads مذتبہ / مہذبہ
  f('مرشیر خاتون', 'سید غدیر الحی', 'سنبھلی'), // VERIFY: first name (مرشیر / مشیر) and the mohalla
  hasanJah108,
])

// عسکری رضا: nine children. The top bar holds six; the box's lower bar holds three more (read as a wrapped sibling list).
const askariRaza108 = m('عسکری رضا', [
  muhammadRaza108,
  m('ذکی رضا', [
    f('ہاشمہ خاتون', 'سید انصار مہدی', 'نوگنیاں جزودی', 'زوجہ اولی'), // VERIFY: husband's name and mohalla
    m('طیب رضا', 'لاولد'),
  ]),
  m('وفی رضا', 'لاولد'),
  f('امین بانو', 'سید شجر علی', 'گذری'),
  m('آل رضا', 'لاولد'),
  m('ابن رضا', 'لاولد'),
  f('سمیرا خاتون', 'سید زین العابدین', 'گھیر مناف', 'زوجہ اولی'),
  aliRaza108,
  f('ثمینہ خاتون', 'سید امجاد حسین', 'گھیر مناف', 'زوجہ اولی'),
]) // VERIFY: the last three (سمیرا, علی رضا, ثمینہ) hang from the lower edge of a box with no father line of their own; taken as the wrapped second row of عسکری رضا's sibling list, and the order within that row is a guess

const musaRaza108 = onPage(109, m('موسیٰ رضا', [
  m('حسن رضا', [f('اعجاز فاطمہ', 'سید ذکی رضا', 'گھیر مناف')]),
  m('اوسط رضا', 'لاولد'),
  aliSafiRaza108,
  askariRaza108,
]))

// ───────── chart 1: سید نذر سبطین بن سید نذر حسین ─────────

const nazarSibtain108 = onPage(109, m('نذر سبطین', [m('حیدر سبطین'), m('عباس سبطین')]))


// ───────────────────────── photo page6 ─────────────────────────
// Khandan 24, محلہ گذری ـ گھیر مناف. Photo page6.straight.jpg; the page number printed on it is 108.
//
// Chart A (right half): heading "صفحہ ۱۰۷ سید محمد تقی بن سید ظہیر الدین"  -> const muhammadTaqi107
// Chart B (left half, and the long descent down the page): heading "صفحہ ۱۰۶ سید ضمیر علی بن سید ابو علی" -> const zameerAli107
//   (the task text gave the heading as انتظام علی بن وزیر علی; the photo reads ضمیر علی بن ابو علی)
//
// The same-page sub-chart "صفحہ ہذا سید حسن ضیاء بن سید وفاء الحسین" is inlined as hasanZiya107.
// Wrapped sibling lists (a bar whose end drops down a box edge into a second bar) are written as ONE list, top row first.

// ───────────────────────── Chart A ─────────────────────────

// محسن رضا: top bar (2) wraps down the right edge into a second bar (3)
const muhsinRaza107 = m('محسن رضا', [
  m('محمد حیدر رضا'),
  m('محمد حسن رضا'),
  f('زینب خاتون'),
  m('محمد حسین رضا'),
  m('محمد عابد رضا'),
])

const masoomRaza107 = m('معصوم رضا', [m('واصف رضا'), f('بہار زہرا'), m('صفدر رضا')])

const imamRaza107 = m('امام رضا', [
  m('وسیم رضا'),
  f('سیدہ خاتون'),
  m('حسین رضا'),
  f('حسین بانو'),
  m('جبار رضا'),
])

const muhammadTaqi107 = onPage(108, m('محمد تقی', [
  muhsinRaza107,
  f('مشرفہ خاتون', 'سید ثابت حسین علی', 'گذری'), // VERIFY: husband's name (ثابت حسین علی / ثابت حسین، علی)
  masoomRaza107,
  imamRaza107,
]))

// ───────────────────────── Chart B ─────────────────────────

// ظہور سبطین (box row of فرزند سبطین): two children on a bar under him
const zahoorSibtain107 = m('ظہور سبطین', [
  f('شاداں'),
  m('شہبور سبطین'), // VERIFY: شہبور / شہباز
])

// فرزند سبطین: seven children on one bar (drawn as a box whose bottom edge is نور سبطین's bar)
const farzandSibtain107 = m('فرزند سبطین', [
  f('روبی بانو'),
  f('رباب زہرا'),
  f('روزی بانو'),
  m('گوہر سبطین'),
  f('زیبی نقوی', 'سید افضال سبطین'),
  m('قمر سبطین'),
  zahoorSibtain107,
])

// نور سبطین: four children on the box's bottom edge
const noorSibtain107 = m('نور سبطین', [
  m('انور سبطین'),
  m('اعجاز سبطین'),
  m('ممتاز سبطین'),
  f('نور سحر'),
])

// کمال سبطین: five children on a bar, the last (حسن سبطین) hangs from the bar's left end
const kamalSibtain107 = m('کمال سبطین', [
  f('ندا کمال'),
  m('حسین مرتضیٰ'),
  f('زہرا کمال'),
  f('نکہار کمال'),
  f('صبا کمال'),
  m('حسن سبطین'), // VERIFY: drawn on a step below the bar's left end
])

const nihalSibtain107 = m('نہال سبطین', [
  m('زین سبطین'),
  f('مہک زہرا'),
  f('صدرا زہرا'), // VERIFY: صدر ازہرا / صدرا زہرا
  f('بشریٰ'),
])

const afzalSibtain107 = m('افضال سبطین', [
  m('عالم سبطین'), // VERIFY: printed عا… سبطین, middle letters unclear
  m('عظیم سبطین'), // VERIFY: printed غظیم / غلیم
  f('انعم زہرا'),
])

// نذر حسین (grandson line): 3 children on a top bar whose right end wraps down the box edge into a second bar of 4
const nazrHusainSon107 = m('نذر حسین', [
  m('بلال سبطین'),
  f('ارم زہرا', 'سید محمد علی', 'دانشمندان'),
  m('اقبال سبطین'),
  nazarSibtain108, // page 109 chart (two sons); the rotated pen mark beside this نذر سبطین on page 108 points to it
  afzalSibtain107,
  nihalSibtain107,
  kamalSibtain107,
]) // VERIFY: the two bars are one wrapped list under نذر حسین (7 children), not two separate generations

// ظل سبطین: four daughters in a box, the box's bottom edge carries four more (wrapped, one list)
const zillSibtain107 = m('ظل سبطین', [
  f('حدیقہ خاتون', 'سید ثناء الحسین', 'گھیر مناف'),
  f('حسینی خاتون', 'سید فراز حسین', 'دربار کلاں'),
  f('توصیفہ خاتون', 'سید حسن خان', 'چھیوڑہ'), // VERIFY: husband's name (حسن خان / حسین خان)
  f('ضعیفہ خاتون', 'سید انوار حسین', 'گھیر مناف حال بگلہ'), // VERIFY: printed ضعیفہ/شفیقہ; husband's name
  nazrHusainSon107,
  f('جمال زہرا', 'سید ذوالفقار احمد', 'چاہ شور پچیدہ'), // VERIFY: husband's name and mohalla
  noorSibtain107,
  farzandSibtain107,
])

// عبد سبطین (عرف چنی): four children on a bar
const abdSibtain107 = m('عبد سبطین', 'عرف چنی', [
  f('دیبا'),
  f('ترنم زہرا'),
  f('فرجین'), // VERIFY: spelling
  f('شیدا'),
])

// محمد سبطین (عرف منجھو): three children
const muhammadSibtain107 = m('محمد سبطین', 'عرف منجھو', [
  m('حبیب سبطین'),
  f('ذیبا شاہین'), // VERIFY: one name; printed without سید
  m('عظیم سبطین'),
])

// بدر سبطین: four children on a bar
const badrSibtain107 = m('بدر سبطین', 'عرف لڑن', [ // VERIFY: عرف reads لڑن / ذُن
  m('محمد رامش سبطین'), // VERIFY: رامش
  m('محمد کاشف سبطین'),
  f('سائرہ'),
  m('محمد دانش سبطین'), // VERIFY: دانش / دالش
])

// اصل سبطین (عرف حیدر): drawn as a box, two daughters on the top bar and two more on its bottom edge
const asalSibtain107 = m('اصل سبطین', 'عرف حیدر', [
  f('نرگس زہرا', 'سید نظاعت علی', 'عشا پور'), // VERIFY: husband's name and mohalla
  f('غنچہ زہرا'),
  m('کمبل سبطین'), // VERIFY: کمبل / کمیل
  f('نرجس زہرا', 'سید ریاض الحق باقری', 'بگلی'), // VERIFY: husband's name and mohalla
])

// فضل سبطین: six children on one bar
const fazlSibtain107 = m('فضل سبطین', [
  abdSibtain107,
  f('تصویر زہرا', 'سید ذہین حسن', 'گذری'), // VERIFY: printed ذہن حسن
  muhammadSibtain107,
  f('نعیم زہرا', 'سید عزیز احمد', 'سدو'), // VERIFY: name printed لعیم زہرا; mohalla سدو
  badrSibtain107,
  asalSibtain107,
])

// نذر سبطین: six children on one bar
const nazrSibtain107 = m('نذر سبطین', [
  zillSibtain107,
  m('عدل سبطین', 'لاولد'),
  f('نسیم زہرا', 'سید خلق حسن خان', 'چھیوڑہ'),
  f('شبیہہ زہرا', 'سید ثناء الحسین', 'گھیر مناف', 'زوجہ اولی'),
  fazlSibtain107,
  f('وسیم زہرا', 'سید محمد عباس', 'گذری'),
])

// نذر حسین (the second one, father of نذر سبطین): two children
const nazrHusainMid107 = m('نذر حسین', [
  nazrSibtain107,
  f('شمیمہ خاتون', 'سید شفیق حسن', 'بگلہ', 'زوجہ اولی'),
])

// ضیاء الحسین's sons and their descendants
const dilarHusain107 = m('دلار الحسین', [f('زینب'), f('سکینہ')])

const sakhaHusain107 = m('سخاء الحسین', [
  f('تزئین فاطمہ', 'سید حسن عباس', 'بکتالہ'), // VERIFY: name printed تزئین ناظمہ; mohalla printed بکنالر
  dilarHusain107,
])

const hasanZiya107 = m('حسن ضیاء', [m('صیف ضیاء'), f('سارہ ضیاء')]) // heading "صفحہ ہذا" at the foot of the page

const wafaHusain107 = m('وفاء الحسین', [
  hasanZiya107,
  f('سعیدہ سلطانہ', 'سید ضمیر عباس'),
  m('باقر ضیاء'),
])

const fazaHusain107 = m('فضاء الحسین', [m('ضیاء کمال'), m('حسن کمال')])

// ثناء الحسین: two daughters on a box's top bar; the box's bottom edge carries six more (wrapped, one list)
const sanaHusain107 = m('ثناء الحسین', [
  f('فاطمہ ثناء'),
  f('زینب زہرا'),
  f('انجم زہرا', 'سید خلق مصطفیٰ', 'چھیوڑہ'),
  f('نگہت زہرا', 'سید حسن جاہ', 'گھیر مناف'),
  m('سبطین ضیاء'),
  f('فرح زہرا', 'سید ظہور سبطین', 'گھیر مناف'),
  m('حسنین ضیاء', [m('شیراز ضیاء')]),
  m('حسین ضیاء', [m('ظہیر حسین')]),
]) // VERIFY: the second bar (انجم زہرا ... حسین ضیاء) hangs from the left edge of ثناء's box, so is taken as his, not حسن ضیاء's

// ذکاء الحسین: three daughters in a box, the box's bottom edge carries five more (wrapped, one list)
const zakaHusain107 = m('ذکاء الحسین', [
  f('صائمہ خاتون', 'سید معروف حسن خان', 'چھیوڑہ'), // VERIFY: معروف / محمود
  f('عالمہ خاتون', 'سید اکرام حسن خان', 'چھیوڑہ', 'عرف منو'), // VERIFY: عرف منو
  f('سالمہ خاتون', 'سید فیض الحسنین', 'دربار کلاں'), // VERIFY: husband's name
  wafaHusain107,
  f('کاظمہ خاتون', 'سید امام علی خان', 'دربار کلاں'),
  fazaHusain107,
  f('ثامنہ خاتون', 'سید تاجدار حسین', 'دانشمندان'),
  sanaHusain107,
])

const ziaulHusain107 = m('ضیاء الحسین', [
  f('ذہینہ خاتون', 'سید احسان حسن', 'چھیوڑہ'), // VERIFY: printed ذہنہ
  sakhaHusain107,
  f('ضامنہ خاتون', 'سید ظل سبطین', 'گھیر مناف', 'زوجہ اولی'),
  zakaHusain107,
])

const niazHusain107 = m('نیاز حسین', [ziaulHusain107])

// نذر حسین (son of ضمیر علی): five daughters and five sons drawn on two joined bars
const nazrHusain107 = m('نذر حسین', [
  f('آفتاب دولت', 'سید ظہیر الدین', 'گذری'),
  f('مہتاب دولت', 'سید عابد حسین', 'گذری'),
  f('رضوان دولت', 'سید نوازش علی', 'چھیوڑہ'), // VERIFY: husband's name
  f('ثمینہ خاتون', 'سید امداد علی', 'گذری'),
  f('دختر', 'سید جمیل حسین', 'حقانی'), // VERIFY: the book gives no name, only "دختر"; husband's name
  nazrHusainMid107,
  niazHusain107,
  f('تحسین دولت', 'سید عابد حسین', 'بگلہ'),
  musaRaza108,
  jawadHusain108,
])

const zameerAli107 = onPage(108, m('ضمیر علی', [
  nazrHusain107,
  f('سخاوت النساء', 'سید محمد حسین', 'گذری'),
]))


// ───────────────────────── photo page4 ─────────────────────────
// Khandan 24 (محلہ گذری / گھیر مناف), photo page4, printed page 107 (task label: page 106)
// Chart 1: "صفحہ ۱۰۶ سید انتظام علی بن سید وزیر علی"  -> root const intizamAli106
// Chart 2: "صفحہ ہذا سید ظہیر الدین بن سید اظہر الدین" -> root const zahiruddinHazaa106
//   Chart 2 sits on this same page and chart 1 points at it ("صفحہ ہذا" beside the right-hand ظہیر الدین),
//   so it is defined first and nested directly inside chart 1 under اظہر الدین (no onPage needed).
// Wrapped sibling bars (boxes whose bottom edge is a second bar) are merged into ONE sibling list, eldest first.

// ───────────────────────── chart 2 ─────────────────────────

// محمد عباس: seven children, four on the top bar and three on the wrapped bar below
const muhammadAbbas106 = m('محمد عباس', [
  f('نصیر فاطمہ', 'سید علی رضا', 'دانشمندان'), // VERIFY: first name (نصیر / نفیر)
  f('کنیز فاطمہ', 'سید منظر اقبال', 'چکلی'), // VERIFY: husband's name
  f('حنا فاطمہ', 'سید جواد اصغر زیدی', 'قاضی زادہ'),
  f('سعید فاطمہ'),
  m('حبیب حیدر', [
    m('کامران حیدر'),
    f('شیرین فاطمہ'),
    m('رضوان حیدر'),
    f('مہرین فاطمہ'),
  ]),
  m('یاور عباس', [
    m('آصف عباس'), // VERIFY: first letters (آصف / اصف)
    f('عطیہ فاطمہ'),
    m('یوسف عباس'),
  ]),
  m('شمیم حیدر'), // an ink blot is drawn under his name
])

const hameeduddin106 = m('حمید الدین', [
  f('باقرہ خاتون', 'سید حسن رضا', 'دربار کلاں'),
  muhammadAbbas106,
])

const waheeduddin106 = m('وحید الدین', [
  f('امیر بانو', 'سید مبارک حسین', 'حقانی', 'زوجہ ثانی'), // VERIFY: "حسین" is printed beside her name, husband probably مبارک حسین
  f('طہیر بانو', 'سید محمد عباس', 'گذری'), // VERIFY: first name (طہیر / ظہیر)
  f('تصویر بانو', 'سید قاسم رضا', 'دانشمندان', 'زوجہ اول'),
  f('تنویر بانو', 'سید محمد جعفر', 'گذری', 'زوجہ ثانی'),
])

const waqarHaidar106 = m('وقار حیدر', [
  m('تاثیر حیدر', [m('سلمان حیدر')]), // VERIFY: تاثیر / تاشیر
  f('تہذیب زہرا', 'سید رجب علی', 'جون پور'),
  m('اقبال حیدر', [
    m('عمران حیدر'),
    f('ثمینہ بانو'), // VERIFY: ثمینہ / تمینہ
    m('آفتاب حیدر'),
    f('سائمہ بانو'),
  ]),
  f('کنیز زہرا', 'سید شمیم حیدر', 'گذری'),
])

const azeezuddin106 = m('عزیز الدین', [
  waqarHaidar106,
  f('سمانہ خاتون', 'سید ممتاز احمد', 'نگرہ'), // VERIFY: first name (سمانہ / ثمانہ) and mohalla
])

const zahiruddinHazaa106 = onPage(107, m('ظہیر الدین', [
  hameeduddin106,
  f('کنیز زہرا', 'سید نورین احمد', 'بنگلہ'),
  waheeduddin106,
  azeezuddin106,
  f('مومنہ خاتون', 'سید اتحاد حسین', 'گھیر مناف حال بنگلہ'),
  f('مولنسہ خاتون', 'سید محمد احمد', 'شفاعت پوتہ'), // VERIFY: first name (مولنسہ / مولیٰ)
  muhammadTaqi107, // printed "صفحہ ۱۰۸"
]))

// ───────────────────────── chart 1 ─────────────────────────

// ہاشم رضا: six children, four on the top bar and two on the wrapped bar below
const hashimRaza106 = m('ہاشم رضا', [
  f('حسین فاطمہ'),
  m('ناظم رضا', [
    m('حیدر رضا'),
    m('کاظم رضا'),
    f('روبی جمال'), // VERIFY: drawn on a short wrapped bar from the right end of the bar; could instead be حیدر رضا's child
  ]),
  f('ہاشمہ خاتون', 'سید عاشق عباس', 'لکٹرہ', 'عرف روبی'), // VERIFY: mohalla (لکٹرہ / نگڑہ)
  m('افضال رضا'),
  f('کاظمہ خاتون', 'سید آغا حیدر', 'کٹرہ غلام علی'), // VERIFY: a tiny unreadable word printed above her name
  m('اقبال رضا', [m('صادق رضا'), f('زینب فاطمہ')]),
])

const hasanRaza106 = m('حسن رضا', [
  m('حسین رضا', [f('اسماء زہرا')]), // VERIFY: اسماء / اسمائ
  f('شہوار فاطمہ', 'سید ناصر حسین', 'دربار کلاں'),
  m('تاجدار حیدر', [
    f('مہک فاطمہ'), // VERIFY: مہک / ماہک
    m('دانش رضا'),
  ]),
])

const kazimRaza106 = m('کاظم رضا', [hasanRaza106, hashimRaza106])

const askariRaza106 = m('عسکری رضا', [
  f('ترنم عسکری', 'سید محمد آصف', 'سدو'), // VERIFY: mohalla (سدو)
  f('انشاں عسکری'),
  m('رضا'), // VERIFY: the name is only "رضا" with سید beneath; a first word may be hidden
  f('رباب فاطمہ'),
  m('عباس رضا'), // wrapped bar
  m('موسیٰ رضا'), // wrapped bar
])

const aliRaza106 = m('علی رضا', [
  f('علی زہرا', 'سید محمد مہدی', 'گذری'),
  askariRaza106,
])

const naqiRaza106 = m('نقی رضا', [
  f('معنز زہرا', 'سید معروف حسن', 'بہوکہ حال مجاپونہ'), // VERIFY: first name (معنز / معین)
  m('حسین رضا', [
    f('عظیم زہرا'),
    m('مظہر حسن'),
    f('عکس زہرا'),
  ]),
  f('نجمہ زہرا', 'سید حامد حسن', 'بنگلہ'),
  m('تقی رضا', [
    f('زینت زہرا', 'سید محمد کاظم', 'چھیوڑہ'),
    m('مظہر حسن'), // VERIFY: reads منظر / مظہر / مظفر
    m('ہمایوں رضا', [m('مہر حسن'), f('شعاع زہرا')]), // wrapped bar
    f('ماہ زہرا', 'سید محمد مہدی', 'عثمان پور'), // wrapped bar
  ]),
  m('باقر رضا'),
])

const muzaffarHasan106 = m('مظفر حسن', [
  kazimRaza106,
  aliRaza106,
  f('منتظر خاتون', 'سید محمد رضا', 'گذری'),
  naqiRaza106, // wrapped bar
])

const zafarHasan106 = m('ظفر حسن', [
  m('محمد رضا', [
    m('پیمبر رضا', [
      m('قمر رضا', [m('ظفر عظیم'), m('تالش رضا')]),
      m('تصویر رضا'),
    ]),
    f('شمیم زہرا', 'سید شہنشاہ علیخان', 'دربار کلاں'), // VERIFY: husband's name
    f('کنیز زہرا', 'سید فرزند مجتبیٰ', 'چھیوڑہ حال بہوکہ'), // VERIFY: husband's name and mohalla
  ]),
])

const qasimHusain106 = m('قاسم حسین', [
  zafarHasan106,
  f('اقتدار دولت', 'سید آل احمد', 'گذری'),
  muzaffarHasan106,
])

const abidHusain106 = m('عابد حسین', [
  f('عفیفہ خاتون', 'سید ظہیر الدین', 'گذری'),
  f('نرجس خاتون', 'سید سید اعلیٰ', 'گذری'), // VERIFY: husband's name
  f('طیبہ خاتون', 'سید ظفر حسن', 'گذری'), // VERIFY: ظفر / مظفر
  f('بنت خاتون', 'سید ریاض الحسن', 'گذری'), // wrapped bar
  f('متینہ خاتون', 'سید ظفر حسن', 'گذری'), // wrapped bar. VERIFY: ظفر / مظفر
])

const zahiruddinLeft106 = m('ظہیر الدین', [
  f('مومنہ خاتون', 'سید فضل سبطین', 'گھیر مناف'),
  f('ثمینہ خاتون', 'سید تنویر علی', 'دربار کلاں'), // VERIFY: name (ثمینہ / تمینہ), husband, and a tiny "حال" before the mohalla
  m('احسان محمد'),
  f('سلطانہ خاتون', 'سید محمد تقی خان', 'دربار کلاں'), // wrapped bar
  m('محمد', [
    m('رضا ظہیر'), // VERIFY: word order (رضا ظہیر / ظہیر رضا)
    f('نسیم فاطمہ', 'سید محمد کاظم', 'گذری'),
    f('نگار فاطمہ', 'سید باقر رضا', 'گذری'),
    m('حسین احمد', [m('علی ظہیر'), f('حسین فاطمہ')]),
    m('ظہیر حسن', [m('ظہیر عباس')]), // VERIFY: word order (ظہیر حسن / حسن ظہیر)
  ]), // wrapped bar
])

const intizamAli106 = onPage(107, m('انتظام علی', [
  m('منظہر الدین', [qasimHusain106]), // VERIFY: منظہر / مظہر
  f('دختر', 'سید سرفراز علیخان', 'گذری'),
  m('اظہر الدین', [zahiruddinHazaa106, zahiruddinLeft106]),
  abidHusain106,
]))


// ───────────────────────── photo page2 ─────────────────────────
// Khandan 24 (Guzri / Ghair Manaf), photo printed page 106. Three charts:
//  1. صفحہ 105  سید امداد حسین بن سید غلام تقی            -> imadadHusain112
//  2. صفحہ 105  سید رحیم اللہ بن سید منور علی              -> rahimullah112
//  3. صفحہ 105  سید ابو علی بن سید منور علی               -> abuAli112

// ───────── Chart 1: امداد حسین بن غلام تقی ─────────
const imadadHusain112 = onPage(106, m('امداد حسین', [
  f('ناظرہ خاتون', 'سید مبارک حسن', 'حقانی'),
  m('ناظر حسین', 'لاولد'),
  m('ممتاز حسین', [
    f('کنیز زہرا', 'سید شجاع الحسن زیدی', 'قاضی زادہ'),
    f('عالیہ خاتون', 'سید حسن علی زیدی', 'سادات بارہہ'),
  ]),
  f('عاطرہ خاتون', 'سید نجم الحسن زیدی', 'چاندپور حال قاضی زادہ'),
]))

// ───────── Chart 2: رحیم اللہ بن منور علی ─────────
const rahimullah112 = onPage(106, m('رحیم اللہ', [
  m('انور علی', [
    f('سعید النساء', 'سید عنایت علی', 'گذری'),
    m('محمد حسین', [
      f('ولی النساء', 'سید نیاز حسین', 'گھیر مناف'), // VERIFY: first name reads ولی / علی النساء
      m('اعزاز حسین', [
        m('معظم حسین', [
          m('محفوظ الحسین', [
            f('اعجاز فاطمہ', 'سید ظہیر الدین', 'سرائے کبنہ'),
            f('توحید فاطمہ', 'سید راغب علی'),
            // wrapped sibling row: bottom edge of the box under اعجاز / توحید
            f('جمال فاطمہ', 'سید محمود حسن', 'حال سرائے کبنہ'), // VERIFY: husband line is cramped at the page edge
            m('ظہور المصطفیٰ', [
              f('فاطمہ طاہرہ'),
              m('محمد ظہور حسین'),
              f('عائشہ طاہرہ'),
            ]),
            m('تلمیذ حسین', [
              m('ندیم حسین'), // VERIFY: ندیم (first letter unclear)
              f('ترنم فاطمہ'),
              m('طارق حسین'),
            ]),
            f('نیال فاطمہ', 'سید احمد خورشید', 'مراد آباد'), // VERIFY: husband's name; a pen cross is drawn above her arrow
            m('ابراہیم حسین'),
          ]),
          f('شاداب دولت', 'سید اسرار حسن خاں', 'دانشمندان'),
          f('شہاب دولت', 'سید گزار حیدر', 'سندو'), // VERIFY: گزار / گلزار حیدر
          m('احمد حسین', [
            f('ثروت فاطمہ'),
            f('نصرت فاطمہ', 'سید طفر الحسن', 'کوٹ'), // VERIFY: طفر / ظفر
          ]),
        ]),
        m('یونس حسین', 'لاولد'),
        f('آبانو دولت', 'سید علی متقی خاں', 'گھڑیال منزل'),
        m('معزز حسین', [
          f('نایاب دولت', 'سید علی قیصر خاں', 'گھڑیال منزل'),
          f('توصیفہ خاتون', 'سید اسد علی خاں', 'گھڑیال منزل'),
          m('اظہر حسین', [
            m('سہیل حسین', [
              m('اعزاز حسین'),
              f('آمنہ'),
            ]),
            f('ہما پروین', 'سید احسن علی', 'گھڑیال منزل'),
            f('سیما پروین', 'سید پرویز کمال', 'گھڑیال منزل'),
            f('رعنا پروین', 'سید سبط نجف', 'دربار کلاں'),
          ]),
          f('منتظمہ خاتون', 'سید علی کاظم سبتی', 'حال دربار کلاں'),
          // انیس الحسین: his line runs down the left of the box and along its bottom edge
          m('انیس الحسین', [
            f('صالحہ خاتون', 'سید محمد ارشد', 'کوٹ'),
            f('ثریا خاتون', 'سید سعید احمد', 'کوٹ'),
            f('نجمہ خاتون', 'سید محمد ساجد علی', 'کوٹ'),
            f('عذرا جمال', 'سید انور علی', 'گھڑیال منزل'),
            f('عائشہ جمال', 'سید سبط سرور', 'نئی نوتیہ'), // VERIFY: mohalla reads like ننر نوتیہ
            m('انور کمال', [f('ندا فاطمہ')]),
          ]), // VERIFY: whether these six hang from انیس الحسین or from the bar shared with ابراہیم حسین
        ]),
      ]),
      f('تولی', 'سید نذر حسین', 'گھیر مناف', 'سماۃ'),
    ]),
  ]),
]))
// VERIFY (chart 2): محمد حسین's children are ولی النساء, اعزاز حسین, تولی; the name تولی is printed "سماۃ تولی".

// ───────── Chart 3: ابو علی بن منور علی ─────────

const abuAli112 = onPage(106, m('ابو علی', [
  m('کبیر علی', [
    m('زبیر علی', 'لاولد'), // VERIFY: first letter cut off at the page edge (زبیر / جبیر)
    m('کریم علی', [
      f('صغیر النساء', 'سید طاہر حسین', 'گذری'),
      m('سعد علی', 'لاولد'),
    ]),
    f('لبیب النساء', 'سید علی حسین', 'گذری'),
  ]),
  m('بشیر علی', [
    f('میمونہ خاتون', 'سید صغیر حسین'),
    m('مراد علی', [
      m('مہدی حسن', [
        m('ریاض الحسن', 'لاولد'),
        m('سعید الحسن', 'لاولد'),
      ]),
      m('عنایت حسین', [m('بشیر حسن', 'لاولد')]),
    ]),
  ]),
  f('شیر بانو'),
  m('وزیر علی', [
    f('پنجتنی خاتون', 'سید نذر حسین', 'گذری'),
    intizamAli106,
  ]),
  zameerAli107,
  m('امیر علی', [
    f('عزیز النساء', 'سید محمد علی احسن خاں', 'گھڑیال منزل'), // VERIFY: husband's name
    f('محمود النساء', 'سید انور علی', 'گذری'),
    f('فرقت النساء', 'سید آل علی', 'قاضی زادہ'),
    // wrapped second bar: same sibling list
    m('مظہر علی', 'لاولد'),
    m('محمود علی', [m('ابوالحسن', 'لاولد')]),
    m('احمد علی', [m('غلام عباس', 'لاولد')]),
  ]),
]))


// ───────────────────────── photo page1 ─────────────────────────
// Khandan 24, book page 105 (guzri / aulad syed shujaat ali bin syed hizabr ali, page1)
// Chart 1: صفحہ ۱۰۱ — سید سرفراز علی بن سید عبدالہادی عرف ہادی علی   (const sarfarazAli105)
// Chart 2: صفحہ ۹۲  — سید شجاعت علی بن سید ہزبر علی                   (const shujaatAli105)
// tree.py gave usable x values for the bottom chart; on the top chart (Nawab Hasan / Mustafa Hasan area)
// it merged bars and added noise ticks, so those bars were counted from the arrows visually.

const sarfarazAli105 = m('سرفراز علی', [
  m('محمد جواد', 'لاولد'),
  m('محمد کاظم', [
    m('ارتضیٰ حسن', [
      m('نواب حسن', [
        m('محسن حسن', 'لاولد'), // VERIFY: first name hard to read (محسن / محمد)
        m('مومن حسن', [
          m('محاسن حسن', [
            m('نواب'), // VERIFY: name reads like نواب / قزواب
            f('ام ایمن'),
            m('محمد رضا'),
            m('محمد کمیل'),
          ]),
          f('کنیز زہرا', 'سید شفیق عباس'), // VERIFY: husband's name (شفیق / شقیق)
        ]),
        f('محسنہ خاتون', 'سید سرور حسن', 'قاضی زادہ'), // VERIFY: mohalla
        f('شاہدہ خاتون', 'سید محمد مرتضیٰ', 'گذری'),
        m('معاون حسن', [
          m('علی ضامن'),
          f('سیدہ زیبا', 'سید عسکری عباس', 'الہ آباد'), // VERIFY: name (a small word رضی sits beside it)
          f('امینہ خاتون'),
        ]),
      ]),
    ]),
    m('مصطفیٰ حسن', [
      m('مظفر حسن', [
        // VERIFY: name reads like مظفر / معجز
        m('مونس حسن', [f('کنیز سیدہ', 'سید نقی رضا', 'گذری')]), // VERIFY: husband (نقی / لقی)
        f('محسنہ خاتون', 'سید شفاء احمد', 'گذری'), // VERIFY: husband
      ]),
      f('مہجبہ خاتون', 'سید سعادت رسول', 'گذری'), // VERIFY: husband's name
      f('حلیمہ خاتون', 'سید اصغر حسن', 'گذری'),
      f('رشیدہ خاتون', 'سید افسر حسن', 'گذری'), // VERIFY: husband (افسر / اقضر)
      f('ماجدہ خاتون', 'سید شمال احمد', 'گذری'), // VERIFY: husband (شمال / شیال)
    ]),
    m('اجتبیٰ حسن', [
      f('عشرت بانو', 'سید نیاز حسن', 'گذری'), // VERIFY: husband's name unclear
      f('کنیز بانو', 'سید محمود حسین', 'قاضی زادہ'), // VERIFY: husband's name unclear
      f('کنیز زینب', 'سید مرتضیٰ حسن', 'گذری'), // VERIFY: husband's name unclear
      m('محمد مجتبیٰ', [
        m('محمد کاظم', [
          // Drawn inside a box whose bottom edge is a second bar: read as ONE sibling list, top row then bottom row
          f('زرین فاطمہ'),
          f('تسنین فاطمہ'),
          m('فراز کاظم'), // VERIFY: bottom row belongs to the same list (box bottom edge) rather than to a child
          f('یاسمین فاطمہ'),
        ]),
      ]),
    ]),
  ]),
  f('کنیز کبریٰ', 'سید اعظم علی', 'گذری'),
])

const shujaatAli105 = m('شجاعت علی', [
  m('ہدایت علی', 'عرف جانی', [
    m('فیض بخش', 'لاولد'),
    m('بنی بخش', [m('محمد بخش', [f('دختر'), f('دختر')])]), // VERIFY: the two daughters are printed only as "دختر"
    f('ہدایت النساء', 'سید نوروز علی', 'گذری'),
    m('علی بخش', [
      m('حیدر بخش', [
        m('آل نبی', [
          m('آل رسول', [
            // برجیس حسین's children: two rows inside one box (second row drawn on the box's bottom edge), read as one list
            m('برجیس حسین', [
              f('مکرمہ خاتون', 'سید ذوالفقار حسین', 'گذری'),
              f('معظمہ خاتون', 'سید ناطق حسین', 'حقانی'),
              f('اسلامیہ خاتون', 'سید انیس حسن', 'قاضی زادہ'), // VERIFY: name (اسلامیہ / اسلمیہ)
              f('منورہ خاتون', 'سید محمود حسن', 'سرو'), // VERIFY: mohalla
              f('مبشرہ خاتون', 'سید مبارک حسن', 'صابو نگراں'), // VERIFY: mohalla (صابو نگراں / مظفر نگر)
            ]),
          ]),
          f('فرمان النساء', 'سید سخاوت علی'),
          m('مومن حسین', [
            m('معجز حسین', 'لاولد'),
            m('غلام الحسن', [
              m('انعام حسین', [
                m('محمد شمیم', [m('کامران حیدر'), f('تہمینہ شمیم'), m('فرحان حیدر')]),
                f('لبنیٰ بانو', 'سید ذوالفقار حیدر زیدی', 'سادات بارہہ'), // VERIFY: her name (لبنیٰ / لنیل) and husband's name
              ]),
              f('بلقیس فاطمہ', 'سید مقبول احمد', 'بخشی'),
            ]),
          ]),
        ]),
        f('سلامت النساء', 'سید معصوم علی', 'گذری'),
        m('اولاد علی', [
          m('رضی الحسن', [
            m('فرقان احمد', 'لاولد'),
            f('امینہ خاتون', 'سید تنویر حسن', 'گذری'), // VERIFY: husband's name
            m('عرفان احمد', [
              m('نصر ابن احمد', [
                m('قاسم رضا'),
                f('سلمیٰ خاتون'),
                f('نجمہ خاتون', 'سید کمال حیدر', 'گذری'), // VERIFY: a second word follows the husband's name; mohalla uncertain
                f('ریحانہ خاتون', 'سید سردار علی', 'گذری'),
                m('کمال رضا', [m('احمد علی')]),
                m('آل رضا', [m('محمد نبہ')]), // VERIFY: grandchild's name (نبہ / نبی)
              ]),
              m('ظفر ابن احمد', [f('صدف فاطمہ'), f('صبا فاطمہ'), f('کرن فاطمہ'), f('عندلیب فاطمہ'), m('علی احمد')]),
            ]),
            f('سفینہ خاتون', 'سید مجیب حسن', 'دربار کلاں'), // VERIFY: husband's name (مجیب / محب)
            m('فرمان احمد', 'لاولد'),
          ]),
          f('انیسہ خاتون', 'سید اظہر حسن', 'گذری'),
        ]),
      ]),
    ]),
    f('روشن دولت', 'سید بخش علی', 'گذری'), // VERIFY: a small عرف alias is written above her name and could not be read
    f('چندن', 'سید مہدی علی', 'گذری'),
  ]),
  f('عزیز النساء', 'سید منور علی', 'گذری'), // VERIFY: husband's name (منور / منتور)
  f('منیر النساء'),
  fazlAli108, // page 110 chart; heading alias عرف مکھو used (this page drew گھسو)
  f('مبارک النساء'),
  m('فیروز علی', [
    m('نوروز علی', [
      f('حاجی بیگم', 'سید مردان علی', 'گذری'),
      f('دختر'), // VERIFY: the agent read an unnamed daughter here; her four 'children' were moved up to منور علی's sibling list (see header)
    ]),
    f('شنفی', 'سید محمدی', 'گذری', 'مسماۃ'), // VERIFY: her name and husband
  ]),
  f('نور دولت'),
  f('صاحب النساء', 'سید عطا نظام الدین'), // VERIFY: husband's name
  m('منور علی', [
    abuAli112,
    m('اسرار علی', 'لاولد'),
    // Wrapped second row of the box around منور علی's children. The photo-1 agent read these four as an
    // unnamed daughter's children, but the page-106 headings say "رحیم اللہ بن منور علی" and
    // "امداد حسین بن غلام تقی" (غلام تقی under کریم اللہ), so the headings are followed.
    f('شہر بانو', 'سید فیض بخش', 'گذری'),
    f('مہر بانو', 'سید اصغر علی', 'گذری'),
    m('کریم اللہ', [
      m('محمد تقی', 'لاولد'),
      m('غلام تقی', [
        f('نفیس فاطمہ', 'سید عابد حسین', 'گذری'), // VERIFY: her name and husband
        imadadHusain112,
        f('صاحب دولت', 'سید عابد حسین', 'گذری'), // VERIFY: husband
      ]), // heading says غلام تقی (the drawing read نقی)
      f('بانو', 'سید منتو علی', 'گذری', 'مسماۃ'), // VERIFY: husband's name unclear
    ]),
    rahimullah112,
  ]),
])

const khandan: BookKhandan = {
  serial: 24,
  mohalla: 'Guzri',
  trees: [
    { page: 105, father: 'ہزبر علی', root: shujaatAli105 },
    // Page 105's top chart, headed "صفحہ ۱۰۱": its father is drawn on page 101, outside these photos.
    { page: 105, father: 'عبدالہادی', root: sarfarazAli105 },
  ],
}

export default khandan

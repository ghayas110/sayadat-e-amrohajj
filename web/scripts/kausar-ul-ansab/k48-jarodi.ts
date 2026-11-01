// Kausar-ul-Ansab (1999), pages 302-310: محلہ جڑودی
// Khandan 48 in the book's index: اولاد سید اخوان سعید و سید حسن سعید بن سید بدرالدین
//
//   page 302  the khandan root, with no "صفحہ" heading: a chain of single names from حضرت امام زین العابدین down to
//             سید بدرالدین, then his sons اخوان سعید and رحمن سعید and their families
//   page 303  سید فضل حسین بن سید فضل امام (headed "صفحہ ۳۰۲"); a "صفحہ ہذا" sub-chart, سید ہادی حسن بن سید مہدی حسن,
//             is folded in under مہدی حسن
//   page 304  سید محمد علی بن سید نور علی (headed "صفحہ ۳۰۲")
//   page 305  four charts: سید نور الحسن بن سید رضوان حسن, a second bar under the same printed heading (read as
//             انور حسن, see below), سید حشمت علی بن سید شبیر علی (all headed "صفحہ ۳۰۴"), and
//             سید محمد اشرف بن سید عبدالقادر (headed "صفحہ ۳۰۲")
//   page 306  سید رفیع الزمان بن سید محمد ظفر (headed "صفحہ ۳۰۵")
//   page 307  سید علی امام بن سید نذر امام and سید فدا علی بن سید رفیع الزماں (both headed "صفحہ ۳۰۶"); a "صفحہ ہذا"
//             sub-chart, ذوالفقار امام بن محمد امام, is wired in under محمد امام
//   page 308  سید گل حسن بن سید شبیہ الحسن and سید ظفر حسن بن سید مبشر علی (headed "صفحہ ۳۰۷"), and
//             سید یاد علی بن سید ناد علی (headed "صفحہ ۳۰۵")
//   page 309  سید فرزان علی بن سید مجتبیٰ علی and سید مہربان علی بن سید منور علی (headed "صفحہ ۳۰۸"), and
//             سید ابو محمد بن سید محمود (headed "صفحہ ۳۰۲"), with a "صفحہ ہذا" sub-chart, ابرار حسین عرف تولا
//   page 310  سید ماجد حسین بن سید عابد حسین and سید الہی بخش بن سید محمد بخش (headed "صفحہ ۳۰۹")
//
// Every continuation is wired into the page that points to it, and each chart root is wrapped in
// onPage(<its own book page>) so its descendants carry that page. Consts run from the deepest page (310) up to the
// root page (302).
//
// FOR A HUMAN TO CHECK
//  * Headings beat drawings, conflicts found:
//      - Page 302 draws the stub "تفضل حسین" (page number hidden by a thumb, only the digit ۳ visible) under فضل امام.
//        The page-303 chart is headed فضل حسین بن فضل امام, so it is wired there; تفضل and فضل are the same man here.
//        (A different تفضل حسین appears on page 304 under عنایت علی.)
//      - Page 305 draws محمد عمر as the father of the رفیع الزمان stub, but page 306 is headed رفیع الزمان بن محمد ظفر.
//        The father is written محمد ظفر.
//      - Page 308 draws the father of the فرمان علی stub as محبان علی, but page 309 is headed فرزان علی بن مجتبیٰ علی.
//        The father is written مجتبیٰ علی and the child فرزان علی (the agent had already doubted both readings).
//  * Page 305 prints the heading "سید نور الحسن بن سید رضوان حسن" twice, over two bars of 9. Page 304 lists both
//    نور الحسن and انور حسن among رضوان حسن's sons, each pointing to page 305, and page 305 has no other انور حسن
//    chart, so the second bar is written as انور حسن (9 children). Compare the second heading with the photo.
//  * Wrapped sibling lists (a bar that turns down into a second or third bar) are one list, top bar first. Row order
//    inside the lower bars is a guess in several places: سبط رئیس (page 302), سبط عباس (302), تفضل حسین (304, the lower
//    row could be کنیز تاج's children), سبط حسین (306, 12 children), انصار مہدی and فرخ مہدی (306), اکرام علی (309),
//    اخی حسین (310; نگار فاطمہ hangs off the wrapped end).
//  * ہادی حسن (303) and ذوالفقار امام (307) and ابرار حسین (309) are "صفحہ ہذا" charts, each folded in once.
//  * Page 302: row directions of the three-row chain were read from the arrows. Chart roots on pages 303-310 appear
//    exactly once each in the tree. Two sons of حسن امام on page 307 both read اظہر امام.
//  * Two مبشر علی stand in the فدا علی family (page 307); the ظفر حسن chart is hung under the one drawn under امداد علی.
//  * Not khandan content: the captioned photos at the foot of page 310 (محفوظ علی ولد ظفر علی ...).
//  * No missing pages and no duplicate photos (nine photos, nine book pages 302-310). No bars were reported cut off.
//  * Names printed without سید are taken as female unless clearly male; many such readings are marked VERIFY below.

import { f, m, onPage, type BookKhandan } from './book'

// ═════════════════════════ book page 310 ═════════════════════════

const taqiHusain310 = m('تقی حسین', [
  f('زینب بانو'),
  f('شبنم بانو'),
  f('شہناز بانو'),
  f('فاطمہ بانو'),
  f('سلمیٰ بانو'),
  m('ناصر حسین'), // VERIFY: ناصر / ناہر
  f('عشرت آرا'),
  m('انوار حسین'),
  f('ہما بانو'),
])

// اخی حسین: five children on the bar plus نگار فاطمہ hanging off the wrapped end of the bar
const akhiHusain310 = m('اخی حسین', [
  m('سجاد حیدر'),
  m('آباد حیدر', [f('اعجاز فاطمہ')]),
  f('زمرد بانو', 'سید حسین محمد', 'شفاعت پوتہ'),
  f('معراج بانو'), // VERIFY: the name is struck out in the photo
  f('کنیز فاطمہ'),
  f('نگار فاطمہ', 'سید اسلم حسین', 'جڑودی'), // VERIFY: hangs off the wrapped end of the bar, so position in the sibling order is uncertain; husband's mohalla
]) // VERIFY: اخی حسین first name (اخی / اجی)

const naqiHusain310 = m('نقی حسین', [
  taqiHusain310,
  m('اسلم حسین', [f('اعجاز فاطمہ')]),
  m('صغیر حسن'),
  m('نبی حیدر'),
])

const wasiHusain310 = m('وصی حسین', [
  akhiHusain310,
  f('امیر بانو', 'سید سخی حسین', 'جڑودی'), // VERIFY: mohalla line is cramped (جڑودی / جڑودی مجھ پٹہ)
  m('ولی حسین', 'لاولد'),
  f('شوکت بانو', 'سید صغر حسن', 'گذری'),
  naqiHusain310,
])

const sakhiHusain310 = m('سخی حسین', [
  m('قوی حسین', [m('محمد تقی'), m('حسین رضا')]),
  f('باقرہ خاتون', 'سید عنایت حسین', 'کاکوری'), // VERIFY: mohalla (کاکوری / ککروی)
  f('عالمہ خاتون'),
]) // VERIFY: first name (سخی / سنحی)

const aliHusain310 = m('علی حسین', [
  wasiHusain310,
  m('تقی حسین', 'لاولد'),
  sakhiHusain310,
])

const zakiHusain310 = m('ذکی حسین', [
  f('مکرمہ خاتون', 'سید طاہر حسین', 'حقانی'), // VERIFY: mohalla
  m('سعید الحسن', 'لاولد'),
  f('معظمہ خاتون', 'سید انوار حسین', 'شاہی چبوترہ'),
  f('مخدومہ خاتون'),
])

const baniHusain310 = m('بنی حسین', [zakiHusain310])

const haidarBakhsh310 = m('حیدر بخش', [
  baniHusain310,
  m('جواد حسین', 'لاولد'),
  aliHusain310,
])

const baadarHusain310 = m('بادر حسین', [
  f('وسیم زہرا', 'سید علی اصغر', 'بکنالہ'), // VERIFY: mohalla (بکنالہ)
  f('قمر زہرا', 'سید حسین عباس', 'دانشمندان'),
  m('شمیم حیدر', [f('عطیہ زہرا'), m('عظیم حیدر')]), // VERIFY: an extra word "فاطمی" is written beside his name
  f('سلمیٰ پروین'),
])

const rahmanHusain310 = m('رحمن حسین', [
  f('سکینہ خاتون', 'سید محمد جعفر', 'نوگاواں'), // VERIFY: mohalla
  baadarHusain310,
  f('سجیلہ خاتون', 'سید اکبر حسین', 'حال شفاعت پوتہ'), // VERIFY: husband's name
  f('جمیلہ خاتون', 'سید ناظم حسین', 'کوٹ'), // VERIFY: husband's name (ناظم / ناز)
])

const muhammadHusain310 = m('محمد حسین', [
  rahmanHusain310,
  f('ذکیہ خاتون', 'سید اشتیاق حسین', 'قاضی گلی'),
])

const ahmadBakhsh310 = m('احمد بخش', [muhammadHusain310])

const ilahiBakhsh310 = onPage(310, m('الہی بخش', [ahmadBakhsh310, haidarBakhsh310]))

// ───────── Chart 1 ─────────

const aliAbbas310 = m('علی عباس', [
  m('حیدر عباس'),
  f('رازقہ خاتون'),
  m('رضا عباس'),
  f('نور بانو'),
  f('حسین بانو'),
  m('حیدر علی'),
])

const majidHusain310 = onPage(310, m('ماجد حسین', [
  f('راشدہ خاتون', 'سید حسن محمد', 'مجاپوتہ'),
  m('علی حیدر'),
  f('طاہرہ خاتون', 'سید ناظر حسین', 'حال قاضی زادہ'),
  aliAbbas310,
  f('جعفرہ خاتون', 'سید زین العابدین', 'شفاعت پوتہ'),
  f('شاکرہ خاتون', 'سید بندہ حسن', 'بجنور'), // VERIFY: mohalla line reads "ہیمن بجنور"
  f('صالحہ خاتون', 'سید اختر حسین', 'سرسی'),
]))

// ═════════════════════════ book page 309 ═════════════════════════

const farzanAli309 = onPage(309, m('فرزان علی', [
  f('حسن بانو'),
  f('نازیہ بانو'),
  f('مہناز بانو'),
  f('کنیز بانو'),
  m('فرحان علی'),
  m('نعمان علی'),
  m('اعجاز علی'),
  f('ثریا بانو'),
]))

// ───────── chart 2 ─────────
const sultanAli309 = m('سلطان علی', [
  m('کامران علی'),
  f('انجم فاطمہ'),
  m('عدنان علی'),
  f('لبنیٰ فاطمہ'),
])

const armanAli309 = m('ارمان علی', [
  f('ثمرین فاطمہ'), // VERIFY: ثمرین / تمرین
  m('محمد علی'),
  f('سبین فاطمہ'), // VERIFY: spelling
  f('نذرین فاطمہ'), // VERIFY: spelling
  m('احسان علی'),
  f('مہرین فاطمہ'),
])

const manawarAli309 = m('منور علی', [
  m('راغب علی'),
  m('حسین علی'),
  f('فرح فاطمہ'),
  m('شان علی'),
])

// اکرام علی: a wrapped sibling bar. Top row (4) turns down at its left end and carries on as a second bar of 7 sons.
const ikramAli309 = m('اکرام علی', [
  f('نازنین فاطمہ'), // VERIFY: نازنین / نازینین
  f('شگفتہ فاطمہ'),
  m('غضنفر علی'),
  f('شانزیہ فاطمہ'), // VERIFY: spelling
  manawarAli309,
  m('انور علی'),
  m('زوار علی'),
  m('سجاد علی'),
  m('کرار علی'),
  m('ذوالفقار علی'),
  m('عامر علی'),
]) // VERIFY: the 7 sons on the lower bar are joined to اکرام علی's top bar by its left end (wrapped bar), not to another father

const irfanAli309 = m('عرفان علی', [
  f('یاسمین فاطمہ'),
  m('رضوان علی'),
  m('سلمان علی'),
  f('قمر فاطمہ'),
])

const meharbanAli309 = onPage(309, m('مہربان علی', [
  sultanAli309,
  f('نیاز فاطمہ', 'سید زاہد حسین'),
  armanAli309,
  ikramAli309,
  f('مرجین فاطمہ', 'سید شہنشاہ زیدی', 'جونپور'), // VERIFY: name مرجین / مرجان; husband's name
  irfanAli309,
]))

// ───────── chart 3 ─────────
// Sub-chart drawn on this page ("صفحہ ہذا"): سید ابرار حسین عرف تولا بن سید مہدی علی
const ibrarHusain309 = m('ابرار حسین', 'عرف تولا', [
  f('بنت فاطمہ', 'سید علی احمد', 'قاضی زادہ'),
  f('ام سلمیٰ', 'سید ظہور الحسن', 'دربار کلاں'),
  f('بنت زہرا', 'سید فرزند حسن', 'نگردہ'), // VERIFY: mohalla (نگردہ / لکردہ)
  m('محمد', [
    f('ام رباب'),
    m('محمد مہدی'),
    f('ام لیلیٰ'),
    f('ام فروہ'), // VERIFY: ام فروہ hangs from the right end of the bar by a bent arrow; position among the siblings and whether she is ام رباب's daughter
  ]),
  m('ابن محمد'),
]) // VERIFY: the two sons محمد / ابن محمد sit on a wrapped second bar under the three daughters

const mehdiAli309 = m('مہدی علی', 'محلہ قاضی زادہ میں ساکن ہوئے', [
  ibrarHusain309,
  f('صغریٰ بانو', 'سید ذکی حسن', 'سدو'), // VERIFY: husband's mohalla
  f('تحفہ خاتون', 'سید نبی حسین', 'قاضی زادہ'), // VERIFY: mohalla reads "گولی/گوئی قاضی زادہ"
  f('تمکینہ خاتون', 'سید اعجاز حسین', 'قاضی زادہ'),
])

const safdarAli309 = m('صفدر علی', [
  mehdiAli309,
  f('بشارت النساء', 'سید ابن علی', 'کٹرہ غلام علی'),
])

const nabiBakhsh309 = m('نبی بخش', [
  // A line of arrows نبی بخش → نیاز علی → دختر
  m('نیاز علی', [f('دختر')]),
]) // VERIFY: the arrows between نبی بخش, نیاز علی and دختر are drawn as a horizontal chain, not under a bar

const pirBakhsh309 = m('پیر بخش', 'سرائے کہنہ میں ساکن ہوئے', [
  nabiBakhsh309,
  safdarAli309,
])

const sajidHusain309 = m('ساجد حسین', [f('ضامنہ خاتون', 'سید ثروت حسن')])

const abidHusain309 = m('عابد حسین', [
  majidHusain310,
  f('ساجدہ خاتون', 'سید ولایت حسین', 'نگردہ'), // VERIFY: mohalla (نگردہ / لکردہ)
  f('کبریٰ خاتون', 'سید اصغر حسین', 'مجھیر پٹی'), // VERIFY: mohalla
  f('زاہدہ خاتون', 'سید محمد ابراہیم حسین', 'جعفری'), // VERIFY: husband's place (جعفری?)
  sajidHusain309,
])

const aliHusain309 = m('علی حسین', [
  m('زاہد حسین', 'لاولد'),
  abidHusain309,
])

const muhammadHusain309 = m('محمد حسین', [
  m('خادم حسین', 'لاولد'),
  f('ظریف النساء', 'سید مقبول حسین', 'حقانی'),
  m('محمد حسنین', 'لاولد'), // VERIFY: حسین / حسنین
  m('باقر حسین', [m('اصغر حسین', [m('مبارک حسین', 'لاولد')])]),
])

// Mubarak Ali's three children
const mubarakAli309 = m('مبارک علی', [
  m('اسد علی', [f('دختر')]), // VERIFY: the daughter is unnamed in the book
  f('حسین دولت', 'سید حسن نذر', 'سنبھلی'), // VERIFY: husband's name (حسن نذر / نذر حسن)
  m('علی', [
    aliHusain309,
    m('احمد حسین', [f('دختر', 'سید اکبر حسین', 'دانشمندان')]), // VERIFY: daughter unnamed in the book
    muhammadHusain309,
  ]),
])

const abdusSalam309 = m('عبدالسلام', 'محلہ مجھیر پٹی میں ساکن ہوئے', [
  m('میر', [ // VERIFY: name reads میر (مہر / مبر)
    m('فیض بخش', [m('محمد نواز', 'لاولد')]),
    m('عالم', 'مفقود الخبر'),
    m('قطب بخش', [m('محمد وارث', [pirBakhsh309])]),
  ]),
])

const muhammadFazil309 = m('محمد فاضل', [
  abdusSalam309,
  m('عبداللہ', 'لاولد'),
  m('ماکھن', [m('منتجب', [m('محمد علی', [mubarakAli309])])]), // VERIFY: منتجب / منتخب; مبارک علی reads "نبارک"
])

const kallu309 = m('کلو', [
  m('محمد بخش', 'محلہ مجھیر پٹی کی سکونت اختیاری', [ilahiBakhsh310]),
])

const abuMuhammad309 = onPage(309, m('ابو محمد', [muhammadFazil309, kallu309])) // VERIFY: the heading's name (ابو محمد) and father (محمود)

// ═════════════════════════ book page 308 ═════════════════════════

const asgharAbbas308 = m('اصغر عباس', [
  m('ضیاء عباس'),
  m('وجیہہ حیدر'),
  m('سحر عباس'),
  m('یاسر عباس'),
])

const ghulamAbbas308 = m('غلام عباس', [
  m('حزم عباس'), // VERIFY: first letter (حزم / خزم)
  m('ذوالفقار عباس'),
  m('ذیشان عباس'),
  m('علی عباس'),
  m('قاسم عباس'),
])

const muhammadAbbas308 = m('محمد عباس', [
  m('یاور عباس'),
  m('دلاور عباس'),
  f('آمنہ خاتون'),
])

// Eight children: three daughters on the top bar, then five on the bar below joined to it (one wrapped list)
const haiderAbbas308 = m('حیدر عباس', [
  f('سلطانہ اختر', 'سید تنویر رضا'),
  f('فرخندہ اختر', 'سید محمد احسن', 'لکھنؤ'), // VERIFY: husband's name (احسن؟)
  f('دردانہ اختر', 'عاشق حسین', 'سونی پت'), // husband printed without سید
  f('گل زہرا'),
  f('ربیعہ زہرا'),
  f('علینہ گل'), // VERIFY: spelling (علینہ / علیزہ)
  f('فاطمہ اختر'),
  m('محسن عباس'),
])

const gulHasan308 = onPage(308, m('گل حسن', [
  haiderAbbas308,
  muhammadAbbas308,
  f('سلطان فاطمہ', 'سید قیصر عباس'),
  ghulamAbbas308,
  asgharAbbas308,
]))

// ───────────── Chart 2: ظفر حسن ─────────────

// محفوظ علی: five children
const mahfooz308 = m('محفوظ علی', [
  f('عشرت فاطمہ'),
  m('مبشر علی'),
  m('مسرور علی'),
  f('حسن فاطمہ'),
  f('نصرت فاطمہ'),
])

// ابو علی: seven children on one bar
const abuAli308 = m('ابو علی', [
  f('خورشید فاطمہ', 'سید مظفر عباس جعفری', 'بھر شہور'), // VERIFY: mohalla (last word hard to read)
  f('خوشنود فاطمہ', 'سید علی مہدی', 'جڑودی حال سنبھلی'),
  f('فرحت فاطمہ', 'سید حسین مسعود', 'دانشمندان'),
  m('علی عباس', [
    f('غزالہ بتول'),
    m('جواد حیدر', 'عرف باقر عظیم'),
    f('صباحت فاطمہ'),
    f('ثنا بتول'),
    m('مختار مہدی'), // VERIFY: first word printed like نخاد / مختار
    f('شمع زہرا'),
    m('علی رضا'),
  ]),
  f('راحت فاطمہ', 'سید نذیر حیدر', 'جڑودی حال سنبھلی'),
  f('انجم فاطمہ', 'سید تقلین امام', 'جڑودی حال شفاعت پورہ'),
  m('آزاد کاظم'), // VERIFY: first letters (آزاد / زاد)
])

// شجر حسن: eight children on one long bar
const shajarHasan308 = m('شجر حسن', [
  m('محمد مہدی', [
    f('رباب فاطمہ'),
    m('حسن مہدی'),
    f('شمسہ کنول'), // VERIFY: spelling
  ]),
  f('ریحانہ خاتون', 'سید ظہور حسین زیدی', 'نگینہ'), // VERIFY: husband's name
  f('مبشرہ خاتون', 'سید بادشاہ حسین', 'شفاعت پورہ'),
  m('محمد تقی', [
    m('ناصر عباس'), // VERIFY: ناصر / ناظر
    m('شاہد عباس'),
    m('ناہد عباس'),
    m('ساجد عباس'), // VERIFY: printed without سید
  ]),
  f('مشیرہ خاتون', 'سید دلبان حیدر زیدی', 'نگینہ'),
  m('علی مہدی', [
    f('ثمانہ بتول'),
    m('احسن علی'),
    m('علی حسین'),
    f('فرحانہ بتول'),
  ]),
  f('مشیرہ خاتون', 'سید ارتضیٰ حسن زیدی', 'مظفر نگر'),
  m('محمد علی', [
    m('نذر عباس', 'قمر عباس'), // VERIFY: a small line "سید قمر عباس" under his name
    m('طلوع عباس'), // VERIFY: first letter (ظلوع / طلوع)
  ]),
])

// محبوب علی: ten children, drawn in a box and wrapped onto three more bars joined to it (one list)
const mahboobAli308 = m('محبوب علی', [
  m('کاظم عباس'),
  m('رضا عباس'),
  m('عابد عباس'),
  f('قرۃ العین فاطمہ'), // VERIFY: word order (فاطمہ is printed above-left)
  m('جعفر عباس', [
    f('حرا بتول'),
    f('ردا بتول'),
  ]),
  m('ساجد علی', [f('زینب بتول')]),
  f('تقلین فاطمہ', 'سید علی عباس', 'جڑودی حال سنبھلی'),
  f('نوعین فاطمہ', 'سید اطہر عباس', 'مندی چوب'),
  m('مظفر تقی', [
    m('محمد نقی'),
    f('عطیہ زہرا'),
    m('علی نقی'),
    m('محسن نقی'),
  ]),
  m('نذیر حیدر', [
    m('وقار حیدر'),
    m('اسد حیدر'),
    m('اصغر حیدر'), // wrapped onto a second short bar
  ]),
])

const zafarHasan308 = onPage(308, m('ظفر حسن', [
  mahboobAli308,
  shajarHasan308,
  abuAli308,
  f('امامہ خاتون', 'سید محمد عسکری', 'قاضی گلی'), // VERIFY: name (امامہ / امیرہ)
  m('عزادار حسین'), // VERIFY: printed عزاداد
  mahfooz308,
]))

// ───────────── Chart 3: یاد علی ─────────────

const hamidHusain308 = m('حامد حسین', [
  // top row of the box
  m('نادر حسین'),
  m('ساجد حسین'),
  f('عجائب بانو'),
  m('ماجد حسین'),
  m('ناظم حسین'),
  // second row (box bottom edge)
  f('نزہت بانو'), // VERIFY: spelling
  f('شباب بانو', 'سید قائم رضا', 'بخشی'), // VERIFY: the husband line sits between نزہت بانو and شباب بانو
  f('نادرہ خاتون', 'معقول حسین'), // husband printed without سید
  f('ناہرہ خاتون', 'سید حاکم حسین', 'حقانی'),
  f('شہناز بانو'),
])

const qasimHusain308 = m('قاسم حسین', [
  hamidHusain308,
  f('فاطمہ خاتون', 'سید اصغر حسین', 'نگانواں سادات'),
  m('کاظم حسین', 'لاولد'),
  f('فاطمہ خاتون', 'سید شاہد حسین', 'دربار کلاں'), // VERIFY: name (printed ناطمہ / کاظمہ)
  m('ناظم حسین', 'لاولد'),
])

const imranAli308 = m('عمران علی', [
  m('قاسم علی'),
  f('بنت زہرا'),
])

const mujtabaAli308 = m('مجتبیٰ علی', [ // VERIFY: drawn محبان (read as محبان / مجتبیٰ); the page-309 heading says فرزان علی بن مجتبیٰ علی, so the heading is followed
  f('رباب بانو'),
  imranAli308,
  f('شہر بانو'),
  f('جعفرہ خاتون', 'سید حسن محمد', 'دانشمندان'),
  farzanAli309, // VERIFY: drawn فرمان/قرمان; wired to the page-309 chart headed فرزان علی بن مجتبیٰ علی
])

const munawwarAli308 = m('منور علی', [
  mujtabaAli308,
  f('فاطمہ خاتون'),
  meharbanAli309,
])

const yadAli308 = onPage(308, m('یاد علی', [
  qasimHusain308,
  f('طاہرہ خاتون', 'سید سرور حسین', 'لکڑہ'), // VERIFY: mohalla (لکڑہ / لکڑہ)
  m('عابد علی', 'لاولد'),
  munawwarAli308,
  f('دختر', 'سید آل نبی', 'لکڑہ'), // VERIFY: the book gives no name, only "دختر"
]))

// ═════════════════════════ book page 307 ═════════════════════════

const zulfiqarImam307 = onPage(307, m('ذوالفقار امام', [
  f('دعائے زہرا'),
  f('رخسانہ فاطمہ'),
  f('طوبیٰ فاطمہ'),
]))

// ───────────────────────── chart 1: علی امام بن نذر امام ─────────────────────────

// ذکی امام's children, drawn on one long bar. Eldest (rightmost) first.

// ولی امام: eight children on one bar
const waliImam307 = m('ولی امام', [
  f('پروین بانو'),
  f('نسرین بانو'),
  m('شکیل امام'),
  f('نورین بانو', 'سید طفر عباس', 'شفاعت پوتہ'), // VERIFY: husband's name (طفر / طغر / ظفر عباس)
  f('شاہین بانو', 'سید غلام عباس', 'مرشد آباد'),
  f('یاسمین بانو', 'سید جاوید رضا'),
  m('وصی امام', [
    f('ماہ رخ زہرا'),
    m('رضا امام'),
    f('کومل زہرا'),
  ]),
  f('نرگس بانو'),
])

// شبیہ امام: three children on one bar
const shabihImam307 = m('شبیہ امام', [
  f('فوزیہ بانو'),
  m('عقیل امام'),
  f('رضیہ بانو'), // VERIFY: printed رضیر بانو
])

// محمد امام: eight children on one bar
const muhammadImam307 = m('محمد امام', [
  m('علی امام', [
    m('سجاد امام'),
    m('اقبال امام', [
      f('ردا زہرا'), // VERIFY: ردا زہرا / ردائے زہرا
      m('زید امام'), // VERIFY: printed نزید / زید امام
    ]),
    f('فرزانہ امام', 'سید عادل عباس', 'سنبھلی'), // VERIFY: mohalla (سنبھلی / سنبھی)
    f('ریحانہ امام', 'سید مہتاب علی', 'حقانی'),
    m('شاہ زیب امام'),
  ]),
  f('حسن بانو', 'سید امان علی', 'جڑودی حال لکڑہ'), // VERIFY: husband's name (امان / ارمان علی) and the word لکڑہ
  m('نذر امام', [
    m('عادل امام'),
    f('اسماء امام'),
  ]),
  f('ثریا بانو', 'سید ممتاز حسین', 'حقانی'), // VERIFY: husband's first name (ممتاز / عمتاز)
  zulfiqarImam307, // "صفحہ ہذا": his family is the chart drawn at the bottom of this page
  m('سفیر امام', [
    m('ذکی امام'),
    m('رضی امام'),
    m('عامل امام'),
    m('کامل امام'),
  ]),
  f('نازنین بانو', 'سید خالد حسین', 'قاضی گلی'),
  // سکندر امام: top bar افشین / تہذیب / تنزین, then the bar wraps down at its left end and carries باہر / باقر
  m('سکندر امام', [
    f('افشین فاطمہ'),
    f('تہذیب فاطمہ'),
    f('تنزین فاطمہ'),
    m('بابر امام'), // VERIFY: printed باہر امام (بابر؟)
    m('باقر امام'),
  ]),
])

// غلام امام: seven children on one bar that steps down at its right end (تقی / اسد sit on the lower step)
const ghulamImam307 = m('غلام امام', [
  m('تقی امام', [
    f('نوشین امام'),
    f('فرحین امام'),
    f('نسرین امام'),
    m('ساجد امام'),
    m('ارتضیٰ امام'),
  ]),
  m('اسد امام'),
  m('قمر امام', [
    f('نازش زہرا'),
    f('مہوش زہرا'),
    f('حنا زہرا'),
  ]),
  f('ریحانہ جبین', 'سید انور علی', 'جڑودی حال کالی پگڑی'), // VERIFY: the word after حال (کالی پگڑی؟)
  f('رخسانہ جبیں', 'سید نذر امام', 'جڑودی شفاعت پوتہ'),
  m('ثقلین امام', [
    m('مجتبیٰ امام'),
    m('مصطفیٰ امام'),
    f('سحر امام'),
  ]), // VERIFY: ثقلین / تقلین
  m('حسن امام', [
    f('شائستہ امام'),
    m('اظہر امام'), // VERIFY: this and the second اظہر امام read the same (one may be اطہر)
    f('شگفتہ امام'),
    m('اظہر امام'), // VERIFY: see above
    f('شیریں امام'),
    m('منظر امام'),
  ]),
])

const aliImam307 = onPage(307, m('علی امام', [
  f('زرینہ خاتون', 'سید زائر حسین', 'چھیوڑہ حال دانشمندان'),
  m('ذکی امام', [
    muhammadImam307,
    shabihImam307,
    f('سیدہ خاتون', 'سید قوت علی', 'مجاپوتہ'),
    f('کنیز فاطمہ', 'سید حبیب حسن', 'شفاعت پوتہ'),
    f('علیمہ خاتون', 'سید علی کوثر کاظمی', 'دانشمندان'),
    f('فہیمہ خاتون', 'سید محمد مختار', 'قاضی گلی'), // VERIFY: name (فہیمہ / فہمیدہ)
    f('پنجتنی خاتون', 'سید قیصر حسن', 'لکھنؤ'), // VERIFY: first word (پنجتنی / بنجنی)
    f('بلقیس فاطمہ', 'سید محمد حسین آغا', 'شفاعت پوتہ'),
    waliImam307,
    ghulamImam307,
  ]),
  f('مدینہ خاتون', 'سید شبیہ الحسن', 'الڑہ'), // VERIFY: mohalla (الڑہ / لڑہ)
  f('مذیرہ خاتون', 'سید امام الدین', 'شفاعت پوتہ'), // VERIFY: name (مذیرہ / نذیرہ)
]))

// ───────────────────────── chart 3: فدا علی بن رفیع الزماں ─────────────────────────

// قمر حسن's five children: the first bar (وسیمہ, نسیم) is boxed and its left end drops to a second bar (ثمر, عمیمہ, نسیم حسن).
// Both bars are one sibling list.
const qamarHasan307 = m('قمر حسن', [
  f('وسیمہ خاتون', 'سید ابن حیدر', 'جڑودی'),
  f('نسیم خاتون', 'سید معز حسین', 'سرو'), // VERIFY: mohalla (سرو)
  m('ثمر حسن', [
    f('حسنین فاطمہ', 'سید ظہور رضا', 'پچدرہ'), // VERIFY: husband's name (ظہور / شہور) and mohalla (بچھیڑہ / پچدرہ)
    m('محمد عباس', [
      f('مرضیہ الزہرا'),
      f('رضیہ الزہرا'),
      f('ذکیہ الزہرا'),
      f('ریحانہ الزہرا'),
      m('حیدر عباس'),
      m('صفدر عباس'),
    ]),
    f('حسن فاطمہ', 'سید محبوب علی', 'جڑودی حال سنبھلی'), // VERIFY: the word after حال (سنبھلی / سنبھی)
  ]),
  f('عمیمہ خاتون', 'سید محمد مختار', 'دانشمندان'), // VERIFY: name (عمیمہ / نعیمہ)
  m('نسیم حسن', [
    f('سبطین فاطمہ', 'سید نعیم رضا', 'چھیوڑہ حال دانشمندان'), // VERIFY: husband's name (نعیم)
    m('قمر عباس', [
      m('ذیشان عباس'),
      f('کرن'),
    ]),
  ]),
])

const fidaAli307 = onPage(307, m('فدا علی', [
  m('دلشاد علی', [
    m('مبشر علی', [
      m('مسرور حسین'), // VERIFY: the three brothers read مسرور / سرور / مسرور حسین
      m('سرور حسین'),
      m('مسرور حسین'),
    ]), // VERIFY: مبشر / مشبر علی
    m('شبیر علی', [
      m('شبیہ الحسن', [
        f('حاجرہ خاتون', 'سید منصور حسین', 'شکارپور'), // VERIFY: husband's name (منصور / منصود)
        gulHasan308,
        f('سکینہ خاتون', 'سید مفتی نذر', 'سنبھلی'), // VERIFY: husband's name and mohalla
      ]),
    ]),
  ]),
  m('امداد علی', [
    m('مبشر علی', [
      zafarHasan308,
      qamarHasan307,
    ]),
    m('شبیر علی', [
      f('دختر'), // VERIFY: the book gives no name, only "دختر"
    ]),
  ]),
]))

// ═════════════════════════ book page 306 ═════════════════════════

const manaqibHusain306 = m('مناقب حسین', [
  f('شبنم فاطمہ', 'سید ضیاء باقر', 'کلڑہ'), // VERIFY: husband's name and mohalla spelling (کلڑہ / گلڑہ / کفروہ)
  f('کوثر فاطمہ', 'سید محمود رضا', 'دانشمندان'),
  m('صاحب عالم'),
  f('قیصر فاطمہ', 'سید طاہر رضا', 'دانشمندان'),
]) // VERIFY: these four hang off a bar drawn under حیدر مہدی's three daughters; its connecting line runs up to مناقب حسین's name

const manasibHusain306 = m('مناصب حسین', [
  m('حسن ضیا'),
  m('آصف ضیا'),
  f('ثناء مراد'), // VERIFY: reading (ثنا مراد / شاہ مراد) and gender; no سید printed
  m('عامر ضیا'),
])

const ajaibulHasan306 = m('عجائب الحسن', [
  manaqibHusain306,
  f('حسن زہرا', 'سید سماح محمد عابدی', 'لوگنیاں'), // VERIFY: husband's first name
  manasibHusain306,
  m('مطالب حسین'),
  m('مراتب حسین', [m('حیدر رضا')]),
])

// ── انصار مہدی (7 children: 4 on the top bar, 3 on the wrapped bar below) ──
const zawwarMehdi306 = m('زوار مہدی', [
  m('شاہکار مہدی'), // VERIFY: reading (شاہکار / شاہنکار)
  f('کنیز مہدی'),
  m('عباس مہدی'),
  f('کنیز سیدہ'),
])

const sajjadMehdi306 = m('سجاد مہدی', [
  f('کنیز زینب'),
  f('کنیز بتول'),
  m('سبط مہدی'),
  m('اصغر مہدی'),
]) // VERIFY: his four children are drawn on two joined bars; order assumed top bar first, right to left

const haidarMehdi306 = m('حیدر مہدی', [f('رضیہ زینب'), f('شاہ بانو'), f('ضیا بانو')])

const tajdarMehdi306 = m('تاجدار مہدی', [f('عنبرین فاطمہ'), f('آفرین فاطمہ')])

const ansarMehdi306 = m('انصار مہدی', [
  f('ضیا بانو'),
  f('رضیہ زینب', 'سید محسن رضا', 'گندی'), // VERIFY: mohalla (گندی / گذری)
  f('شاہ بانو', 'سید رضا علی', 'دانشمندان'),
  zawwarMehdi306,
  sajjadMehdi306,
  haidarMehdi306,
  tajdarMehdi306,
]) // VERIFY: wrap — the 4 on the top bar and the 3 on the bar below are read as ONE sibling list

// ── فرخ مہدی (6 children: 4 on the top bar, 2 on the wrapped bar below) ──
const farrukhMehdi306 = m('فرخ مہدی', [
  f('ریشمال بانو', 'سید محمد عارف', 'جرودی'), // VERIFY: name reads ریشمال/رلشمال; the mohalla line is cut ("سدو"?)
  f('نرجس بانو', 'سید سجاد مہدی', 'جرودی حال ضابو غراں'), // VERIFY: mohalla
  f('نرگس بانو', 'سید ریحان حیدر', 'مجاپوتہ'), // VERIFY: ریحان / یکان
  f('خامسہ بانو'),
  m('ظہور مہدی'),
  f('نگہت درخشاں', 'سید نوازش حسن خان', 'چھیوڑہ'),
])

// ── سبط حسین (12 children on three joined bars) ──
const sibtHusain306 = m('سبط حسین', 'عرف بنجا', [
  f('ثامنہ خاتون', 'سید عزیز الدین', 'گندی'), // VERIFY: mohalla spelling
  f('ناصرہ خاتون', 'سید مجتبیٰ حسن عابدی', 'لوگنیاں'), // VERIFY: husband's name (line reads differently from حمیدہ's)
  f('ضامنہ خاتون', 'سید حسن محمد', 'چاہ شور حال شفاعت پوتہ'), // VERIFY: where the husband's name ends and the mohalla begins
  f('ناظرہ خاتون', 'سید عماد حسین', 'دانشمندان', 'عرف دھنو'),
  f('حمیدہ خاتون', 'سید مجتبیٰ حسن عابدی', 'ڈئیاں'), // VERIFY: mohalla
  m('اشرف علی', 'عرف دھنا، لاولد'),
  f('محسنہ خاتون', 'سید ریحان حسن', 'منڈی چوب'), // VERIFY: husband's name
  f('پاکیزہ خاتون', 'سید نشان حیدر', 'مجاپوتہ'),
  f('سنجیدہ خاتون', 'سید محمد علی منتجب', 'سنبھلی'), // VERIFY: husband's name and mohalla
  farrukhMehdi306,
  ansarMehdi306,
  ajaibulHasan306,
]) // VERIFY: wrap — the six names in the drawn box, the four below it, and انصار/عجائب on the third bar are ONE list of 12

// ── علی نقی (6 children, one bar) ──
const hasanMehdi306 = m('حسن مہدی', [
  m('گلزار مہدی'),
  m('تاجدار مہدی'),
  f('گلزار فاطمہ'),
  m('شاندار مہدی'), // VERIFY: reading (شاندار / شاہزادہ)
])

const muhammadMehdi306 = m('محمد مہدی', [
  m('حسن عسکری'),
  f('حسنین فاطمہ', 'سید خلیل مجتبیٰ', 'بنگلہ'), // VERIFY: husband's name
  m('امام عسکری', [f('شہناز'), m('اقبال عسکری')]), // VERIFY: شہناز reading
  m('حسین عسکری'),
  m('محمد عسکری', [m('مہر عسکری'), f('سارہ زینب')]),
  f('حسین فاطمہ', 'سید حسین احمد جعفری', 'شفاعت پوتہ'),
  f('حسن فاطمہ', 'سید باقری', 'سید نگری'), // VERIFY: husband's first name is illegible (… باقری)
])

const aliNaqi306 = m('علی نقی', [
  muhammadMehdi306,
  m('علی مہدی'),
  hasanMehdi306,
  f('مہربان فاطمہ', 'سید ارمان مہدی', 'حقانی'),
  f('شان فاطمہ', 'سید تنویر حسین', 'سرسی', 'عرف منی'), // VERIFY: عرف منی could belong to حسین مہدی instead
  m('حسین مہدی', [m('باقر مہدی'), f('ترنم زہرا'), m('جعفر مہدی'), m('رضا مہدی')]),
])

// ── اصغر حسین (4 children) ──
const askariHusain306 = m('عسکری حسین', 'عرف کھوکھا', [
  f('عالمہ خاتون', 'سید فرخ حسن', 'مچھر ہٹہ', 'عرف عالو'), // VERIFY: mohalla (مچھر ہٹہ)
  aliNaqi306,
])

const asgharHusain306 = m('اصغر حسین', [
  f('دختر', 'سید اسلم حسین', 'منڈی چوب'),
  askariHusain306,
  f('سیدہ بانو', 'سید ظہیر الدین', 'گندی'), // VERIFY: mohalla spelling
  sibtHusain306,
])

const mehdiAli306 = m('مہدی علی', [
  f('فراست النساء', 'سید موسیٰ رضا', 'گھیر مناف'),
  asgharHusain306,
])

const basheerAli306 = m('بصیر علی', [
  f('قاسمہ خاتون', 'سید عسکری حسین', 'جرودی حال لوگنیاں'),
  f('کاظمہ خاتون', 'سید حیدر مدد', 'قاضی زادہ'), // VERIFY: husband's name
])

const hadiAli306 = m('ہادی علی', [basheerAli306, m('عظیم علی', 'لاولد')])

const ajaibAli306 = m('عجائب علی', [
  m('امید علی', 'لاولد'),
  m('محمد حسین', 'لاولد'),
  mehdiAli306,
  hadiAli306,
])

const ashrafAli306 = m('اشرف علی', [ajaibAli306, m('یاد علی', 'لاولد')])

// ── یاد علی (3 sons) ──
const yaadAli306 = m('یاد علی', [
  m('تراب علی', [m('ارشاد علی', 'لاولد')]),
  m('سردار علی', [
    m('نذر امام', [aliImam307]),
    m('نذر حسین', [m('ابن حسن', [f('دختر')])]),
  ]),
  m('اقتدار علی', [m('شمشاد علی', [m('فضل حسین', 'لاولد')])]),
])

// ── نثار علی ──
const zahoorHusain306 = m('ظہور حسین', [
  m('نثار حسین'),
  m('امیر حسن', [
    m('صغر حسن', 'لاولد'),
    m('ضمیر حسن', [
      m('فردوس حسن', [
        f('اعجاز بانو', 'سید بشارت حسین', 'دربار کلاں'),
        m('علی امام', 'لاولد'),
        f('مبارکہ خاتون', 'سید علی رہبر', 'مجاپوتہ حال دانشمندان'), // VERIFY: mohalla line
      ]),
    ]),
  ]),
  f('واجدہ خاتون', 'سید جراد حسین', 'گندی'), // VERIFY: mohalla spelling
])

const nisarAli306 = m('نثار علی', [
  m('ظہور علی', [zahoorHusain306]),
  f('تمیز النساء', 'سید پہلوان علی', 'قاضی زادہ'),
])

// ── صفحہ ۳۰۵ سید رفیع الزمان بن سید محمد ظفر ──
const rafiuzZaman306 = onPage(306, m('رفیع الزمان', [
  nisarAli306,
  fidaAli307,
  m('اکبر علی'),
  ashrafAli306,
  yaadAli306,
  f('دختر', 'سید منور علی', 'دربار کلاں'),
]))

// ═════════════════════════ book page 305 ═════════════════════════

const iqrarAli305 = m('اقرار علی', [
  m('فرحت علی'),
  f('کنول زہرا'),
  m('امانت علی'),
  f('مہناز بانو'),
  f('اعجاز بانو'),
])

const ishratAli305 = m('عشرت علی', [
  f('گلناز فاطمہ'),
  f('فرناز فاطمہ'),
  f('تمرناز بانو'),
  f('سرتاج بانو'), // VERIFY: سرتاج / سراج
  iqrarAli305, // VERIFY: name reads اقرار / افرار
])

const rahatAli305 = m('راحت علی', [
  ishratAli305,
  f('ممتاز فاطمہ', 'سید کاظم رضا', 'دربار کلاں'),
  f('دلنواز فاطمہ', 'سید محمد قمر', 'دانشمندان'),
  f('شبناز فاطمہ', 'سید محمد احمد', 'قاضی گلی'),
])

// رفعت علی: eight children on one long bar
const rafatAli305 = m('رفعت علی', [
  m('اسرار علی', [
    f('ریحانہ زہرا'),
    f('فرزانہ زہرا'),
    m('شہزاد علی'),
    f('نوشین زہرا'),
    m('امجد علی'),
    f('رخسانہ زہرا'), // VERIFY: رضانہ / رخسانہ
    m('کامران حیدر'),
  ]),
  // اقتدار علی: six children, the list wraps from the boxed top bar onto the bar below
  m('اقتدار علی', [
    f('ناہید فاطمہ'),
    f('حسین فاطمہ'),
    m('اسد علی'),
    f('تحسین فاطمہ'),
    m('برکت علی'),
    f('ثمرین فاطمہ'),
  ]),
  f('حسین فاطمہ'),
  m('عزت علی', [
    m('عنزت علی'), // VERIFY: reads عنزت علی; may be عزت / عشرت
    f('نگہت فاطمہ'),
    m('حیدر علی'),
  ]),
  m('ریاض حسن', [
    m('رضا عباس'),
    f('انیس فاطمہ'),
    m('علی رضا'),
    m('فہیم رضا'),
  ]),
  m('انتظار علی', [
    f('معراج فاطمہ'),
    m('مصطفیٰ انظار'), // VERIFY: one name or two (مصطفیٰ / انتظار)
    f('اعجاز فاطمہ'),
  ]),
  f('نایاب فاطمہ'),
  m('سجاد علی', [m('مبارک علی')]),
])

const azmatAli305 = m('عظمت علی', [
  m('جعفر رضا', [
    m('صادق رضا'),
    f('یٰسین فاطمہ'),
    m('محمد آصف'),
    m('محمد سالم'),
  ]),
  f('شاندار فاطمہ', 'سید مہتاب حسین', 'مجاپوتہ'),
  m('حسین رضا', [
    m('فیضان حسین'),
    f('نسرین فاطمہ'),
    f('شاہین فاطمہ'),
  ]),
  f('شمیم فاطمہ', 'سید اظہار حسین', 'مجاپوتہ'), // VERIFY: husband's first name (اظہار / اطہار / افتخار)
  m('مظہر عباس', [
    f('شہناز فاطمہ'),
    m('محمد سلیمان علی'),
    f('ریاب بانو'),
  ]),
  f('نرجس خاتون', 'سید شاہد حسین', 'قاضی زادہ'),
])

const hashmatAli305 = onPage(305, m('حشمت علی', [
  rahatAli305,
  rafatAli305,
  f('مطاہرہ خاتون', 'سید مطلوب حسین'),
  f('طاہرہ خاتون', 'سید ثاقب حسین', 'دانشمندان'),
  azmatAli305,
]))

// ───────────── charts 1 and 2: سید نور الحسن ─────────────

const nurulHasan305 = onPage(305, m('نور الحسن', [
  f('مروج فاطمہ', 'سید خورشید جمال', 'شفاعت پوتہ'),
  m('محمد باقر'),
  m('محمد جعفر'),
  m('عظیم حیدر'),
  m('تعظیم حیدر'),
  f('ممتاز فاطمہ'),
  m('محمد رضا'),
  m('محمد طاہر'),
  f('ریاض فاطمہ'),
]))

// Second bar: the heading is printed again over it. The page-304 list of رضوان حسن's sons has both نور الحسن and انور حسن
// pointing to page 305, and this page has no other انور حسن chart, so the second bar is read as انور حسن (VERIFY).
const anwarHasan305 = onPage(305, m('انور حسن', [
  f('مستفیض فاطمہ'),
  m('محمد ظفر'), // VERIFY: ظفر / طیر
  f('مہتاب فاطمہ'),
  f('افتخار فاطمہ'),
  m('محمد سعید'),
  f('رئیس فاطمہ'),
  f('تصویر فاطمہ'),
  f('معصوم فاطمہ'),
  f('رضوان فاطمہ', 'سید قمر عباسی', 'دانشمندان'), // VERIFY: عباسی / عباس
]))

// ───────────── chart 4: سید محمد اشرف ─────────────

const imanatAli305 = m('امانت علی', [
  m('قاسم علی', 'لاولد'),
  m('مہربان حسین', [
    m('باقر حسین', [
      m('نادر علی', [yadAli308]), // VERIFY: نادر / ناد
      m('بنیاد علی', [m('منظر حسن', 'لاولد')]),
    ]),
  ]),
])

const muhammadAshraf305 = onPage(305, m('محمد اشرف', [
  m('محمد ظفر', [ // VERIFY: drawn as محمد عمر; the page-306 heading says رفیع الزمان بن محمد ظفر, so the heading is followed
    
    m('محمد زمان', [m('یادگار علی', [f('دختر', 'سید ببر علی عرف مداری', 'گذری')])]), // VERIFY: husband's alias (مداری / ہداری)
    rafiuzZaman306,
  ]),
  m('محمود', [
    m('شیر زمان', [
      m('بدیع الزمان', [f('دختر')]),
      m('رعایت علی', [imanatAli305]),
    ]),
  ]),
]))

// ═════════════════════════ book page 304 ═════════════════════════

const manzoorHasan304 = m('منظور حسن', [
  f('شبنم زہرا'),
  f('شبیہہ زہرا'),
  m('حسن ظفر'),
  m('علی ظفر'),
  m('محمد'), // VERIFY: the lower-left name reads محمد (could be مجید)
])

const munawwarHasan304 = m('منور حسن', [
  f('خورشید فاطمہ', 'سید شان حیدر', 'حقانی'), // VERIFY: حقانی is printed under the husband, taken as his mohalla
  m('محمد طالب'),
  m('ابوطالب'),
])


// رضوان حسن: seven children on one bar
const rizwanHasan304 = m('رضوان حسن', [
  f('زہرا خاتون', 'سید نفیس احمد', 'نخشبی'), // VERIFY: mohalla spelling (نخشبی / نقشبندی)
  f('انوار فاطمہ', 'سید محمود حسنین', 'جڑودی'), // VERIFY: mohalla
  munawwarHasan304,
  f('آفتاب بانو', 'سید محمد حسین', 'نکراہ'), // VERIFY: mohalla reads نکراہ / لکھنؤ
  anwarHasan305,
  nurulHasan305,
  manzoorHasan304,
])

const muhammadHusaini304 = m('محمد حسینی', [
  m('محمد سکندر'),
  f('بلقیس فاطمہ', 'سید معطر رضا', 'دانشمندان'), // VERIFY: معطر
  m('رستم علی'),
  f('یاسمین فاطمہ'),
  m('ضعیم علی'), // VERIFY: ضعیم
])

const murtazaHasan304 = m('مرتضیٰ حسن', [muhammadHusaini304])

const farmanHasan304 = m('فرمان حسن', [f('وقار فاطمہ'), f('عرشی')]) // VERIFY: وقار

const irfanHasan304 = m('عرفان حسن', [
  f('سیدہ خاتون', 'سید منور حسن', 'جڑودی'), // VERIFY: husband's name
  farmanHasan304,
]) // VERIFY: عرفان / مرفان

const zafarHasan304 = m('ظفر حسن', [
  murtazaHasan304,
  irfanHasan304,
  f('اکبری بانو', 'سید منیر احمد', 'نخشبی'), // VERIFY: husband's first name (منیر / سمیر) and mohalla
  f('اختری بانو', 'سید جابر حسین', 'دانشمندان'),
  rizwanHasan304,
])

// ───────── امیر حسن's line ─────────

const akhtarHasan304 = m('اختر حسن', [
  m('نور علی', [m('رستم علی')]),
  m('شجاعت علی', [
    f('خمسی دولت'), // VERIFY: name reads خمسی دولت
    m('ولایت علی'),
  ]),
  f('تسکین فاطمہ', 'سید محمد حسین', 'قاضی زادہ'),
])

const amirHasan304 = m('امیر حسن', [
  m('قمر حسن', [akhtarHasan304]),
  f('شہر بانو', 'سید تقی حسن', 'جڑودی'), // VERIFY: husband's name (تقی / نقی)
])

// ───────── صغیر حسن's line ─────────

// ظہور علی: wrapped list, top row محمد علی and محمد حیدر, lower row six daughters
const zuhoorAli304 = m('ظہور علی', [
  m('محمد علی', [
    f('فرحین فاطمہ'),
    m('حسن علی'),
    m('علی'),
  ]),
  m('محمد حیدر', [m('عباس حیدر'), m('رضا حیدر')]),
  f('عروج فاطمہ'),
  f('حضور فاطمہ', 'سید نور حسن', 'جڑودی حال سنبھلی'), // VERIFY: husband text sits between her and عروج فاطمہ; read as hers
  f('ظہور فاطمہ', 'سید آل سبطین', 'چھیوڑہ'), // VERIFY: husband name
  f('ارمان فاطمہ', 'سید حیات ظہیر', 'نکراہ حال چاہ فوری'), // VERIFY: husband name and mohalla
  f('مختار فاطمہ', 'سید شماع الحسن', 'عثمان پور'), // VERIFY: husband's first name
  f('فرحت فاطمہ', 'سید کوثر عباس', 'عثمان پور'),
]) // VERIFY: the six daughters on the lower row belong to ظہور علی's list (wrapped bar), not to a separate father

const sagheerHasan304 = m('صغیر حسن', [
  m('امام علی', [
    f('نسرین فاطمہ'),
    f('مہرجبین فاطمہ', 'سید قاسم رضا', 'دانشمندان'), // VERIFY: the husband line sits between نسرین فاطمہ and مہرجبین فاطمہ; read as مہرجبین's
    m('محمد علی'),
  ]),
  zuhoorAli304,
  m('عطا علی', [m('غلام علی', [m('صادق علی')])]),
])

// ───────── ولایت علی ─────────

const wilayatAli304 = m('ولایت علی', [
  zafarHasan304,
  f('معجزہ خاتون', 'سید اصغر حسین', 'سنبھلی'), // VERIFY: mohalla
  amirHasan304,
  f('فضہ خاتون', 'سید آل محمد', 'شفاعت پوتہ'),
  sagheerHasan304,
])

// ───────── عنایت علی's line ─────────

// شباب رضا: nine children on one bar
const shababRaza304 = m('شباب رضا', [
  m('علی رضا'),
  f('انجم شباب'), // VERIFY: printed without سید; gender unclear
  f('شہلا شباب'),
  m('ندیم شباب'), // VERIFY: printed without سید but a male name
  m('مشبر رضا'), // VERIFY: مشبر / مشیر
  m('نوید شباب'), // VERIFY: printed without سید but a male name
  f('رانی شباب'),
  m('ہاشم رضا'),
  f('سلمی شباب'),
])

const zaminAbbas304 = m('ضامن عباس', [
  f('افشاں پروین'),
  m('ضمیر عباس'),
  m('خرم عباس'),
  f('اسماء زہرا'),
])

const javeedAbbas304 = m('جاوید عباس', [
  m('انتخاب حیدر'),
  m('فضل عباس'),
  m('شاداب حیدر'),
])

const tasaduqHusain304 = m('تصدق حسین', [
  m('شجاعت علی'),
  javeedAbbas304,
  m('ضیا علی'),
  zaminAbbas304,
  m('مجاہد عباس'),
  f('نگہت سلطانہ'),
  shababRaza304,
])

// عرفان عباس: nine children on one bar
const irfanAbbas304 = m('عرفان عباس', [
  m('ناصر عباس'),
  f('عابدہ سلطانہ'),
  f('قرۃ العین بانو'),
  f('حنا بانو'),
  m('طاہر عباس'),
  f('طاہرہ قیصر', 'سید جاوید عباس', 'جڑودی'),
  f('ناصرہ قیصر', 'سید غلام عباس', 'الور'), // VERIFY: الور as the husband's mohalla
  m('حسین عباس', [m('حسن عباس')]),
  m('علی بزرگ', [m('علی عادل')]),
])

// سلطان عباس: wrapped list, top row four, lower row three (a × is drawn above روبینہ سلطان's arrow)
const sultanAbbas304 = m('سلطان عباس', [
  f('زیبا سلطان'),
  f('ثنا سلطان'),
  m('سلمان عباس'),
  m('عمران عباس'),
  f('روبینہ سلطان', 'چاند مرزا'), // VERIFY: husband printed without سید
  m('ریحان عباس'),
  irfanAbbas304,
])

// تفضل حسین: wrapped list, top row four, lower row تصدق حسین and سلطان عباس
const tafazzulHusain304 = m('تفضل حسین', [
  f('کنیز تاج', 'سید یٰسین حسین', 'جڑودی'), // VERIFY: the husband's name reads like لیسین / یٰسین
  f('نواب سیدہ', 'سید سلطان احمد', 'شکارپور'),
  f('نجمہ خاتون', 'سید طالب حسین', 'چھیوڑہ'), // VERIFY: husband's name and the words after the mohalla (حال ...)
  m('قیصر عباس', 'عرف شبو'), // VERIFY: عرف شبو sits beside his name, could belong to the next daughter
  tasaduqHusain304,
  sultanAbbas304,
]) // VERIFY: the lower row (تصدق حسین, سلطان عباس) could instead be کنیز تاج's children; row order unsure

const yaseenHusain304 = m('یٰسین حسین', [
  f('نیر سلطانہ', 'سید شاہ رضا', 'شفاعت پوتہ'),
  m('حمید علی'), // VERIFY: حمید / حیدر
  f('کشور سلطانہ', 'سید جون اصغر', 'شکارپور'), // VERIFY: husband's name
]) // VERIFY: یٰسین / لیسین

const momin304 = m('مومن حسین', [
  f('عقیلہ خاتون', 'سید سیادت حسین', 'شفاعت پوتہ'),
  yaseenHusain304,
])

const inayatAli304 = m('عنایت علی', [
  momin304,
  f('آمنہ خاتون', 'سید شبیہ الحسن', 'جڑودی'), // VERIFY: husband's name (a small word is written above it)
  m('محسن حسین', 'لاولد'),
  tafazzulHusain304,
])

// ───────── root ─────────

// Page 304 (heading "صفحہ ۳۰۲"): سید محمد علی بن سید نور علی
const muhammadAliBinNoorAli304 = onPage(304, m('محمد علی', [
  wilayatAli304,
  f('کنیز کبریٰ', 'سید سعد حسن', 'پچدرہ'), // VERIFY: husband's name and mohalla
  f('عابدہ خاتون', 'سید برادر احمد', 'نخشبی'), // VERIFY: husband's name and mohalla
  m('شبیر علی', [
    f('صابرہ خاتون', 'سید اصغر حسین', 'مجاپوتہ'), // VERIFY: mohalla
    hashmatAli305,
  ]),
  m('فیض علی', 'لاولد'),
  inayatAli304,
]))

// ═════════════════════════ book page 303 ═════════════════════════

const hadiHasan303 = m('ہادی حسن', [
  f('مہ جبین خاتون', 'سید مسعود حسن', 'جڑودی شفاعت پوتہ'),
  f('نجمہ خاتون'),
  f('سنجیدہ خاتون', 'سید شمیم حیدر', 'دانشمندان'),
  m('اقبال رضا', [m('علی مہدی'), m('حسن مہدی'), m('حسین مہدی')]),
  f('نرگس فاطمہ', 'سید عزیز حسن عقیلی', 'شفاعت پوتہ'), // VERIFY: husband's first name (read like عزیز, as for نیلوفر)
  f('نازنین فاطمہ', 'سید اسرار حسن', 'کٹرہ'), // VERIFY: mohalla (کٹرہ / لکڑہ)
  f('خورشید فاطمہ', 'سید عزادار حسین', 'کٹرہ غلام علی حال دربار کلاں'),
])

// ───────── Chart 1: فضل حسین بن فضل امام ─────────

// اکبر حسین
const akbarHusain303 = m('اکبر حسین', [ // VERIFY: first name (اکبر / امر)
  m('محمد حسن', 'لاولد'),
  f('تحسین دولت', 'سید علی حسن', 'قاضی گلی'),
  m('اصطفیٰ حسن', [
    f('شہر بانو', 'سید عروج مہدی', 'گھیر مناف'),
    m('اجتبیٰ حسن', [
      m('حسن ندیم'),
      f('فرمینہ جبین', 'سید صاحبزادہ محمد حسین', 'دانشمندان'), // VERIFY: name (فرمینہ) and husband line sits between her and گلریز
      m('گلریز ندیم'), // VERIFY: name reads گلرس / گلریز
    ]),
  ]),
  // مصطفیٰ حسن: six children, drawn in a box whose bottom edge is a second bar (top row first)
  m('مصطفیٰ حسن', [
    f('امام فاطمہ'),
    m('حسین محمد', 'لاولد'),
    m('حسن محمد', 'لاولد'),
    f('حسین فاطمہ', 'سید آفاق حیدر', 'سدو'),
    m('علی محمد', [m('کمال حیدر'), m('شاندار حیدر')]), // VERIFY: شاندار
    f('حسن فاطمہ', 'سید سبط شبیر', 'کٹرہ', 'زوجہ اولیٰ'), // VERIFY: husband name and mohalla
  ]),
])

// امداد حسن -> حسن (عرف بھورے) -> تسلیمہ خاتون
const imdadHasan303 = m('امداد حسن', [
  m('حسن', 'عرف بھورے', [f('تسلیمہ خاتون', 'سید علی اختر', 'بنگلہ')]),
])

// عسکری حسن
const ibnHaidar303 = m('ابن حیدر', [
  f('خورشید فاطمہ', 'سید ظاہر حسین عابدی', 'نوگنیاں'), // VERIFY: husband's first word
  f('نہال فاطمہ', 'سید انور حسین', 'قاضی گلی'),
  f('جمال فاطمہ', 'سید پرویز کمال', 'جڑودی حال شفاعت پوتہ'),
  f('مسرت فاطمہ', 'سید قمر امام زیدی', 'جڑودی شفاعت پوتہ'),
  m('حسین حیدر', [m('ذوالفقار حیدر'), m('عسکری حیدر'), m('رضی حیدر')]), // VERIFY: ذوالفقار حیدر printed ذوالغار; pen cross under عسکری حیدر ignored
  m('سبطین حیدر', [f('شناء فاطمہ')]),
  m('عباس حیدر'), // VERIFY: drawn on a loop off the bar's right end; placed last as a wrapped sibling
])

const ibnMuhammad303 = m('ابن محمد', 'عرف مٹھا', [ // VERIFY: عرف reading
  m('جاوید کمال', [
    f('فروہ کمال'),
    m('فرحان کمال'),
    m('ریحان کمال'),
    f('سبین فاطمہ'),
  ]),
  f('نیلوفر', 'عزیز حسن عقیلی', 'حال شفاعت پوتہ'), // VERIFY: husband printed without سید
  m('وصال پرویز', [f('ثمینہ وصال'), m('ناصر وصال'), f('ثناء وصال')]),
  m('ذوالفقار کمال'),
  m('افضال پرویز', 'لاولد'),
  m('پرویز کمال', [m('آصف علی'), f('روحی کمال'), m('عارف کمال'), f('روبی کمال')]),
  m('نہال کمال', 'لاولد'),
])

const askariHasan303 = m('عسکری حسن', [
  m('نظام حسن', [
    m('عزادار حسین'),
    f('پروین فاطمہ', 'سید مظہر حسین', 'اغانپور'), // VERIFY: husband's first name (a word before مظہر unreadable)
    m('شجر حسن', [f('تسنیم زہرا'), m('سحر حسن'), f('قسیم زہرا')]),
    f('مہ جبین فاطمہ', 'سید تنویر حسن', 'دانشمندان'), // VERIFY: husband name
  ]),
  f('حسین دولت', 'سید حسن زیدی', 'جڑودی حال شفاعت پوتہ'), // VERIFY: husband's first name
  f('آفرین دولت', 'سید احسان حسن خان', 'دانشمندان'),
  f('لیسین دولت', 'سید محمد کامل', 'قاضی گلی'), // VERIFY: name (لیسین / لبیں)
  m('ابن حسن', [
    ibnHaidar303,
    f('کنیز فاطمہ', 'سید معین المصطفیٰ', 'دربار کلاں'),
    ibnMuhammad303,
  ]),
])

// مہدی حسن: six children, drawn in a box whose bottom edge is a second bar (top row first)
const mehdiHasan303 = m('مہدی حسن', [
  f('عقیل دولت', 'سید مصطفیٰ حسن', 'جڑودی شفاعت پوتہ'), // VERIFY: husband reads مصطفیٰ احسن
  m('محمد حسن', [
    m('مسعود حسن', [
      // seven children in a box (top row, then bottom row)
      f('سیما تبسم', 'سید اقبال رضا', 'چاہ شور'),
      f('لبنی تبسم'),
      m('ندیم حسین'),
      f('ہما تبسم'),
      m('عمران حسین', [f('زہرا فاطمہ')]),
      m('شہزاد رضا', [m('ذوالفقار حسین')]),
      m('پرنس مسعود', 'لاولد'),
    ]),
    m('محمود حسن', [f('مونی'), m('رضا')]),
  ]),
  f('نذر فاطمہ', 'سید ابن محمد پیارے', 'شفاعت پوتہ'), // VERIFY: husband name
  m('احمد حسن', 'لاولد'),
  hadiHasan303,
  m('آل حسن', [
    // five children in a box (top row, then bottom row)
    f('مہوش زہرا'),
    f('نغمہ جبین', 'سید نواب حسن', 'چھجوڑہ'), // VERIFY: mohalla
    m('فرقد رضا', [m('علی رضا')]),
    m('صفدر رضا'),
    m('ارشد رضا', [f('فروہ رضا'), m('صادق رضا')]),
  ]),
])

const fazlHusain303 = onPage(303, m('فضل حسین', [
  akbarHusain303,
  f('بانو سجاۃ', 'سید نذر امام', 'بنگلہ'), // VERIFY: her name is split over two lines (بانو / سجاۃ)
  imdadHasan303,
  askariHasan303,
  mehdiHasan303,
]))

// ═════════════════════════ book page 302 ═════════════════════════

const samarAbbas302 = m('ثمر عباس', [ // VERIFY: first letter (ثمر / نمر / تمر)
  m('رضا عباس'),
  f('مہک زہرا'),
])

const farazAbbas302 = m('فراز عباس', [
  f('رابیل زہرا'),
  m('احسن عباس'),
  f('اقصیٰ زہرا'),
])

const kishwarAbbas302 = m('کشور عباس', [f('اقرا زہرا')])

const qamarAbbas302 = m('قمر عباس', [m('علی عباس'), f('مریم زہرا')])

const sibtAbbas302 = m('سبط عباس', [
  samarAbbas302,
  farazAbbas302,
  kishwarAbbas302,
  qamarAbbas302,
  m('ظفر عباس', 'لاولد'),
  f('انجم زہرا', 'سید مرتضیٰ عباس'),
  f('زرین فرح', 'سید ناظم حسین رضوی', 'آگرہ'), // VERIFY: رضوی may be part of the husband's name; mohalla read as آگرہ
]) // VERIFY: the three-row wrapped bar is one sibling list; order across the wraps follows the line path

// ───────────── سبط رئیس (عرف کلی): bar wraps down the left edge ─────────────
// Row 1 (right to left): شمی بانو, ہاشمی بانو. The bar turns down the left edge and row 2 runs under it.
// Row 2 is listed from where the bar turns (ابن محمد first) to علی محمد at the right end.
const aliMuhammad302 = m('علی محمد', [
  m('وقار حیدر'),
  f('برجیس فاطمہ'),
  m('انوار حیدر'),
  m('ذہیب حیدر'), // VERIFY: ذہیب / زہیب
  m('ہمیر حیدر'), // VERIFY: ہمیر / سمیر
  f('حنا فاطمہ'), // VERIFY: printed like خنا فاطمہ, probably حنا
])

const waliMuhammad302 = m('ولی محمد', [m('طاہر رضا'), m('محمد رضا')])

const naeemHaidar302 = m('نعیم حیدر', [m('محمد حیدر'), m('علی حیدر')])

const sibtRais302 = m('سبط رئیس', 'عرف کلی', [
  f('شمی بانو', 'سید غلام مصطفیٰ', 'نخشبی'), // VERIFY: first letter of her name (شمی / سمیعہ)
  f('ہاشمی بانو', 'سید نایاب حسن', 'قاضی زادہ'),
  m('ابن محمد'),
  naeemHaidar302,
  f('عشرت بانو', 'سید قمر مصطفیٰ', 'دربار کلاں'), // VERIFY: husband's first name
  waliMuhammad302,
  aliMuhammad302,
]) // VERIFY: the two-row wrapped bar is one list; whether the second row reads left to right or right to left is a guess from the line path

const sibtAli302 = m('سبط علی', [
  sibtAbbas302,
  f('رئیسہ خاتون', 'سید فرزند حسن', 'دربار کلاں'),
  f('لئیقہ خاتون', 'سید سبط حسن', 'چاندپور'),
  sibtRais302,
])

// ───────────── ابن علی: five children on one long bar ─────────────
const aliDawar302 = m('علی داور', [
  f('عنبر فاطمہ'),
  f('مہوش فاطمہ'),
  f('اسماء فاطمہ'),
  m('احمد علی'), // VERIFY: احمد / اسد / اطہر
  m('جمیل علی'),
])

const sibtHasan302 = m('سبط حسن', [
  f('مزملہ خاتون', 'سید سبط عباس', 'جڑودی حال شفاعت پوتہ'),
  f('مدثرہ خاتون', 'سید عنایت حسین'),
  aliDawar302,
])

const ibnAli302 = m('ابن علی', [
  sibtHasan302,
  f('تحسین خاتون', 'سید اعجاز حسن', 'مجاپوتہ'), // VERIFY: اعجاز
  f('سیدہ خاتون', 'سید سردار حسین', 'حقانی'),
  f('جمیلہ خاتون', 'سید منہاج الحسن', 'حقانی حال قاضی زادہ'), // VERIFY: منہاج الحسن / منہاج الحی
  sibtAli302,
])

// ───────────── آل علی ─────────────
const armanMehdi302 = m('ارمان مہدی', [f('اسماء زہرا'), f('انجم زہرا'), f('طہ زہرا')])

const hasanMuhammad302 = m('حسن محمد', [
  armanMehdi302,
  f('معینہ خاتون', 'سید الیاس حسین', 'عتا بنور'), // VERIFY: mohalla (بجنور؟)
  m('محمد مہدی'),
])

const nafeesHasan302 = m('نفیس حسن', [
  hasanMuhammad302,
  f('حسین فاطمہ', 'سید منہاج الحی', 'چھیوڑہ'),
  f('حسن فاطمہ', 'سید ظہور حسن', 'کٹرہ غلام علی'), // VERIFY: first word of her name (حسن / حسین)
  f('اربعین فاطمہ', 'سید محمد تقی', 'سدو'), // VERIFY: mohalla (سدو)
])

const aalAli302 = m('آل علی', [
  f('نغمہ خاتون', 'سید ملازم حسین', 'قاضی زادہ حال مجاپوتہ'),
  nafeesHasan302,
])

// ───────────── محمد علی (the end of the right-hand chain) ─────────────
const muhammadAli302 = m('محمد علی', [
  f('بانو', undefined, undefined, 'سماۃ'), // VERIFY: printed "بانو" with "سماۃ" (مسماۃ) under it, no husband line
  f('فرحت النساء', 'سید مقبول حسن', 'چھیوڑہ'),
  aalAli302,
  ibnAli302,
])

// ───────────── محمود: right-hand snake of single sons ─────────────
// ابوسعید -> غلام محی الدین -> عبدالحی (left to right), ابو محمد -> سلامت علی -> محسن علی -> چراغ علی (right to left),
// then چراغ علی -> تاج علی -> روشن علی -> محمد علی (left to right).
const abuSaeed302 = m('ابوسعید', [
  m('غلام محی الدین', [
    m('عبدالحی', [
      m('ابو محمد', [
        m('سلامت علی', [
          m('محسن علی', [
            m('چراغ علی', [
              m('تاج علی', [
                m('روشن علی', [muhammadAli302]),
              ]),
            ]),
          ]),
        ]),
      ]),
    ]),
  ]),
])

const mahmood302 = m('محمود', [
  abuSaeed302,
  abuMuhammad309,
])

// ───────────── عبداللہ ─────────────
const abdullah302 = m('عبداللہ', [
  m('عبدالقادر', [
    m('علی اکبر', 'لاولد'),
    muhammadAshraf305,
    m('ولی محمد', 'لاولد'),
  ]),
])

const akhwanSaeed302 = m('اخوان سعید', [
  m('محمد اشرف', [
    mahmood302,
    abdullah302,
  ]),
])

// ───────────── رحمن سعید ─────────────
const rahmanSaeed302 = m('رحمن سعید', [
  m('محمد افضل علی', [
    m('شجاع', 'لاولد'),
    m('اسد علی', [
      m('رستم علی', [
        m('نور علی', [
          muhammadAliBinNoorAli304,
        ]),
      ]),
    ]),
    m('عبداللطیف', [
      m('عبدالرحیم', [
        m('محمد نعیم', [ // VERIFY: printed محمد لغیم, probably نعیم
          m('عنایت بخش', [
            m('فضل امام', [
              fazlHusain303, // VERIFY: printed تفضل حسین with the page number hidden under a thumb; wired to the page-303 chart headed فضل حسین بن فضل امام (heading wins)
            ]),
          ]),
        ]),
      ]),
    ]),
  ]),
])

// ───────────── the khandan root: chain of single names ─────────────
// Row 3 (right to left): مسعود -> علی -> بدرالدین
const badruddin302 = m('بدرالدین', [akhwanSaeed302, rahmanSaeed302])

// Row 2 (left to right): زید ثانی -> عمیر -> یحییٰ -> حسین -> داؤد -> ابوالفرح واسطی -> مراد -> محمد, then down to مسعود
const chainRow2302 = m('زید ثانی', [
  m('عمیر', [
    m('یحییٰ', [
      m('حسین', [
        m('داؤد', [
          m('ابوالفرح واسطی', [
            m('مراد', [
              m('محمد', [
                m('مسعود', [
                  m('علی', [badruddin302]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
    ]),
  ]),
])

// Row 1 (right to left): حضرت امام زین العابدین (boxed) -> زید شہید -> عیسیٰ موتم الاشبال -> محمد -> علی -> حسین -> علی العراقی -> حسن -> علی, then down to row 2
const imamZainulAbidin302 = m('حضرت امام زین العابدین', [
  m('حضرت زید شہید', [
    m('عیسیٰ موتم الاشبال', [
      m('محمد', [
        m('علی', [
          m('حسین', [
            m('علی العراقی', [
              m('حسن', [
                m('علی', [chainRow2302]),
              ]),
            ]),
          ]),
        ]),
      ]),
    ]),
  ]),
])

const khandan: BookKhandan = {
  serial: 48,
  mohalla: 'Jarodi',
  trees: [{ page: 302, root: imamZainulAbidin302 }],
}

export default khandan

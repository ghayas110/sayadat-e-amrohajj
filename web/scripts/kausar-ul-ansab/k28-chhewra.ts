// Kausar-ul-Ansab (1999), pages 143-151: محلہ چھیوڑہ
// Khandan 28 in the book's index: اولاد سید اسحاق بن سید راجو
//
//   p.143  صفحہ ۱۳۵  سید اسحاق بن سید راجو (the khandan's root; one chart fills the page)
//   p.144  five charts, all headed "صفحہ ۱۴۳": نبی الحسن بن فدا علی, نفیس الحسن بن شیدا علی,
//          ضیاء الحسن بن رضا حسن, عروج الحسن بن فرزند حسن, محمد نذر بن اظہر علی
//   p.145  صفحہ ۱۴۴ انظار حسین بن ابراہیم حسین; صفحہ ۱۴۳ غلام زین العابدین عرف بلاقی بن ارشاد علی
//   p.146  صفحہ ۱۴۵ معراج الحسن / منہاج الحسن / تاج الحسن, sons of سراج حسین; صفحہ ۱۴۳ نوازش علی بن غلام اشرف
//   p.147  صفحہ ۱۳۶ خلق حسن خان بن دلاور حسن خان and مہربان حسن خان بن نوازش حسن خان; صفحہ ۱۴۳ محمد واسط بن اسحاق
//          (with نجف علی بن شجاعت علی, "صفحہ ہذا")
//   p.147  second photo: a printed تتمہ (supplement) slip, اسلام حسن خان ولد عرفان حسن خان and
//          قیصر کمال ولد اکرام حسن خان
//   p.148  صفحہ ۱۴۷ اکبر علی بن امام علی; صفحہ ہذا صفدر مجتبیٰ بن امتیاز حسین; صفحہ ۱۴۷ محمد امیر بن محمد واسط
//   p.149  صفحہ ۱۴۸ امیر الدین بن یقین علی (with باقر رضا بن محمد ناطق, "صفحہ ہذا"); صفحہ ۱۴۸ بشارت حسین بن وزیر علی
//   p.150  صفحہ ۱۴۹ ناظم حسین بن کبیر حسین; صفحہ ۱۴۹ امیر حسین بن بشارت حسین (محلہ کلکڑہ میں مقیم ہوئے)
//   p.151  صفحہ ۱۴۸ عوض علی بن مبارک
//
// Every chart root is wrapped in onPage(its own printed page), and each "صفحہ N" stub from the page
// before is replaced by that chart, so the families import with the page they are drawn on. The
// consts run deepest page first (p.151) to the root page (p.143).
//
// FOR A HUMAN TO CHECK
//  - Page numbers: the printed page numbers (143 ... 151) match the photo order. The agents' notes
//    that "the task said 151 / 144 / 145 ..." refer to the task text, not to the photos; nothing is
//    missing. The headings' "صفحہ ۱۳۶" on p.147 sits oddly beside the p.146 stubs that point to 147 / 140;
//    the stubs were followed (they are the only link between the two pages).
//  - Heading conflict, p.144 / p.145: the drawing on p.144 names the father of انظار حسین "ابرار حسین",
//    but p.145's chart is headed "انظار حسین بن ابراہیم حسین". The heading was followed and the parent
//    on p.144 is written ابراہیم حسین (likely the same man; confirm).
//  - Name difference, p.143 / p.144: the p.143 leaf reads "ضیا حسن" under رضا حسن; the p.144 chart is
//    headed ضیاء الحسن بن رضا حسن. The chart's spelling is used.
//  - p.143: the leaf محمد نذر prints "صفحہ ۱۴۳" (this page) but nothing is drawn under him; the p.144
//    chart headed "بن اظہر علی" was used. The stub "صفحہ ۱۲۷" for محمد واسط was read as 147.
//  - Stubs with no chart in these photos stay as onPage stubs: سرور عباس and باقر عباس (p.146, under
//    جعفر عباس; the marker could be ۱۳۶ or ۱۴۶) and بناز الحسن (p.150, under نور الحسن). The p.146
//    stub for مہربان حسن خان reads "۱۴۰" and was wired to the p.147 chart.
//  - تتمہ slip (second p.147 photo): the main p.147 chart already draws اسلام حسن خان and قیصر کمال;
//    the slip gives fuller families, so it REPLACES the main-chart entries. قیصر کمال had one child
//    (حمید / حنید / حنیف کمال) on the main chart and three on the slip (جنید کمال, زہرہ قیصر, مرتضیٰ);
//    the slip was followed. The five sons of اسلام حسن خان are in the main chart's order; the slip
//    prints them in a different order.
//  - نجف علی (p.147) and صفدر مجتبیٰ (p.148) are "صفحہ ہذا" charts drawn inside a larger chart; each is
//    one const, used once. باقر رضا (p.149) is likewise spliced inline under محمد ناطق.
//  - Wrapped sibling bars are read as one list, top row first, each row right to left, and are all
//    marked VERIFY. The riskiest: انعام رضا's third bar of six (p.149), نبی حسن's six (p.151),
//    فصیح الحسن's box (p.150: whether منظور الحسن and عتیق الحسن belong to him or to شمیم الحسن),
//    صفدر مجتبیٰ's seven (p.148: حسن, غضنفر, شائستہ may be باقر's), the nine under عباس علی (p.147:
//    the book does not say which of two boxed brothers is the father), and the five boxes on p.143.
//  - The p.147 box holding عباس علی and حسین علی: all nine children are given to عباس علی.
//  - Every VERIFY in the body is a reading the agents could not settle (husband names, mohallas,
//    spellings, genders of daughters printed without سید).
//  - Pen crosses, printed photographs and captions (جلوس چھ محرم) were ignored. On p.144 the captions
//    call احسن رضا and آصف رضا sons of یاقوت حسین; the drawing puts them under محمد رضا, and the drawing
//    is kept.


import { f, m, onPage, type BookKhandan } from './book'

// ═════════ photo page10 ═════════
// Khandan 28 (محلہ چھیوڑہ), printed book page 151 (photo page10; the task text expected page 150).
// One chart: "صفحہ ۱۴۸" سید عوض علی بن سید مبارک  -> awazAli150
// Names printed حسن vs حسین are hard to tell apart in places; the spelling below is the best reading.

const mubarakHusain150 = m('مبارک حسین', [
  m('طالب حسین', [f('حسن زہرا')]),
  m('محفوظ حسین', [
    m('شبیہ حیدر'),
    f('ابنی'), // VERIFY: name (ابنی / انبی), no سید so taken as female
    f('شیمہ'), // VERIFY: شمیمہ / شیمہ
  ]),
  f('جمیلہ خاتون', 'سید شاکر حسین', 'عمانپور حال نئی بستی'), // VERIFY: mohalla reading
  m('محمد مطلب', [f('رحمن ندا'), f('آشی')]), // VERIFY: رحمن ندا (one name?) and آشی
  f('سلطان بانو', 'سید ولایتی نواز', 'دانشمندان'), // VERIFY: husband's name
  // محمود حسین: five children on the top bar, three more on the bar below, joined at the left edge (one sibling list)
  m('محمود حسین', [
    m('ہاشم عباس'),
    m('اسد عباس'),
    f('ریحانہ بانو'),
    f('شکیلہ بانو'),
    f('فرحانہ بانو'),
    m('حیدر عباس'), // VERIFY: lower bar taken as a wrapped continuation of the same sibling list
    m('محمد عباس'),
    m('قائم عباس'),
  ]),
])

const niyabHusain150 = m('نیاب حسین', 'نکرہ', [ // VERIFY: the word beside his name (نکرہ / تکرہ)
  m('شاداب حسین'),
  m('عزادار حسین'),
  f('کنیز فضہ'),
  m('علمدار حسین'),
])

const maashooqHasan150 = m('معشوق حسن', [
  m('معصوم حسین', [niyabHusain150]),
  f('خدیجہ خاتون', 'سید مبارک حسین', 'نکرہ'), // VERIFY: mohalla word (نکرہ / تکرہ)
  f('کنیز کلثوم', 'سید نصرت علی'),
  f('سکینہ خاتون', 'سید قربان حسین', 'چھیوڑہ'),
  mubarakHusain150,
])

const nabiHasan150 = m('نبی حسن', [
  m('قربان حسین', [
    m('فرمان حسین'), // VERIFY: first name (فرمان / مرتان)
    f('معطرہ خاتون', 'سید مرتضیٰ حسن', 'ناصی زادہ'), // VERIFY: mohalla (ناصی / نامی زادہ)
    f('سجیلہ خاتون', 'سید علی مظفر', 'اعوانپور'),
  ]),
  f('زاہدہ خاتون', 'سید زاہد حسن', 'چاہ غوری'),
  f('صابرہ خاتون', 'سید سبط مصطفیٰ', 'نزلولیہ'), // VERIFY: mohalla reading
  m('ضمیر حسن', 'لاولد'),
  // second wrapped bar, joined at the left end of the bar above (same sibling list)
  m('شبیر حسین', [ // VERIFY: first letter (شبیر / سنبیر)
    m('مظہر حسن', 'لاولد'), // VERIFY: first name (مظہر / مطہر)
    f('عزیز فاطمہ', 'سید اختر مہدی', 'ردولی (بارہ بنکی)'),
    m('طہیر حسن', [f('بینش بانو'), m('دانش رضا'), f('نازش بانو')]),
    f('بلقیس فاطمہ', 'سید محمد طٰہٰ', 'الور'), // VERIFY: husband's name
    f('حدیث فاطمہ', 'سید مہدی عباس', 'منڈی چوب'),
  ]),
  f('ساجدہ خاتون', 'سید اختر حسین', 'ناصی زادہ'),
])

const abarHusain150 = m('ابر حسین', [
  m('نصیر حسن', [
    m('مختار حسین', [
      m('دلدار عباس'), // VERIFY: reading (دلدار / ذوالفقار)
      f('مصورہ خاتون', 'سید قاسم نذر', 'سنبھلی'), // VERIFY: husband's name and mohalla (ستھنی)
      f('مدثرہ خاتون'),
      m('احمد عباس'),
      f('نازیہ خاتون'),
    ]),
  ]),
  m('مشیر حسین', [f('نازنین بانو', 'سید قاسم رضا', 'مجاپوتہ')]), // VERIFY: مشیر / شیر; husband قاسم رضا
  m('بشیر حسین', 'لاولد'),
  f('شاکرہ خاتون', 'سید طاہر حسین', 'عمانپور حال نئی بستی'), // VERIFY: mohalla reading
  f('طاہرہ خاتون', 'سید اختر علی', 'مجاپوتہ'),
  m('طہیر حسن', 'لاولد'),
])

const awazAli150 = onPage(151, m('عوض علی', 'محلہ کرمہ غلام علی میں ساکن ہوئے', [ // VERIFY: the bracketed note over him on page 148 (محلہ کرمہ غلام علی؟ میں ساکن ہوئے)
  
  m('محب حسن', [nabiHasan150, m('صغیر حسین', 'لاولد'), abarHusain150]),
  f('کنیز زہرا', 'سید امام علی', 'چھیوڑہ'),
  f('کنیز کبریٰ', 'سید فرحت علی صاحب', 'بونگراں', 'زوجہ ثانی'), // VERIFY: mohalla reading (بونگراں)
  f('گھیسی', 'سید فرحت علی صاحب', 'بونگراں', 'سماۃ؛ زوجہ اولیٰ'), // VERIFY: name and mohalla
  m('علمدار حسین', [f('دختر')]), // VERIFY: book prints only "دختر" (a daughter, unnamed)
  maashooqHasan150,
]))

// ═════════ photo page9 ═════════
// Khandan 28 (محلہ چھیوڑہ), photo page9.straight.jpg. The page prints book page 150 (the task said 149).
// Chart 1: "صفحہ ۱۴۹  سید ناظم حسین بن سید کبیر حسین" -> const nazimHusain149 (continued from page 149)
// Chart 2: "(محلہ کلکڑہ میں مقیم ہوئے) صفحہ ۱۴۹  سید امیر حسین بن سید بشارت حسین" -> const amirHusain149 (continued from page 149)
// The page's own sub-trees are all drawn in full on this page; no onPage stubs are needed.

// ───────── Chart 1 ─────────

const nazimHusain149 = onPage(150, m('ناظم حسین', [
  m('عابد حسین', [m('ذاکر حسین'), m('ناصر حسین')]),
  f('امینہ خاتون', 'سید یوسف حسن', 'عثمان پور'), // VERIFY: mohalla spelling (عثمان پور / عمان پور)
  f('ریاض فاطمہ', 'سید صابر حسین', 'سدو'),
  f('رئیسہ خاتون', 'سید آدم نذر', 'سنبھلی'), // VERIFY: mohalla (سنبھلی / سنہی)
]))

// ───────── Chart 2 ─────────

// Children of فصیح الحسن are drawn in a box whose bottom edge doubles as a second bar.
// Four children on the top bar, two more on the bottom bar. The bottom bar runs into شمیم الحسن's own bar
// (three children); both ways of splitting them are possible.
const shamimulHasan149 = m('شمیم الحسن', [m('محمد نعیم'), f('نگار فاطمہ'), m('محمد سلیم')])

const mansoorulHasan149 = m('منظور الحسن', [
  m('ندیم رضا', [f('عرفینہ ندیم')]), // VERIFY: the daughter's name (عرفینہ / عزلینہ)
  f('فرخ پروین', 'سید علی سعید', 'بخشی'), // VERIFY: husband's name and mohalla (بخشی)
  f('فرزانہ پروین', 'سید محمد نواز', 'چھیوڑہ'),
  m('عظیم رضا'),
])

const ateequlHasan149 = m('عتیق الحسن', [
  m('محمد علی'),
  f('عصمت زہرا'),
  f('نگہت زہرا'),
  f('نصرت زہرا', 'سید انعام حیدر', 'مجاپوتہ'),
  m('وسیم رضا'),
])

const faseehulHasan149 = m('فصیح الحسن', [
  // top bar of the box, right to left
  shamimulHasan149,
  f('سنجیدہ خاتون', 'سید علی حسن', 'چھیوڑہ حال دربار کلاں'),
  f('فہمیدہ خاتون', 'سید افسر حسن', 'بخشی'), // VERIFY: mohalla (بخشی)
  f('نور زہرا'),
  // bottom bar of the box (wrapped row)
  mansoorulHasan149,
  ateequlHasan149,
]) // VERIFY: whether منظور الحسن and عتیق الحسن are children of فصیح الحسن (wrapped box bar) or of شمیم الحسن (then شمیم الحسن has 5 children)

const shabeehulHasan149 = m('شبیہ الحسن', [
  m('علی عباس', [m('علی شہزاد'), f('نازیہ عباس'), m('علی شہریار')]),
  m('خورشید نقی', [f('حنا نقی')]),
  m('رضی عارف', [f('سلمیٰ عارف'), m('رضا عارف'), f('صبا عارف')]),
])

const mubarakulHasan149 = m('مبارک الحسن', [ // VERIFY: مبارک الحسن / مبارک حسن
  shabeehulHasan149,
  f('جعفرہ خاتون', 'سید ذلیشان محمد', 'سدو'), // VERIFY: husband's name (ذلیشان)
  f('طاہرہ خاتون', 'سید شجاع حسن', 'کلکڑہ'), // VERIFY: husband's name (شجاع الحسن؟)
  f('ناظرہ خاتون', 'سید معصوم احمد', 'کلکڑہ'),
  faseehulHasan149,
])

const zakiHasan149 = m('ذکی حسن', [
  m('نجم الحسن', 'لاولد'),
  m('شمس الحسن', [
    f('ہاشمہ خاتون', 'سید کوثر حسن', 'چھیوڑہ حال قاضی زادہ'), // VERIFY: a third word after قاضی زادہ is unreadable (حال ملّا ...)
    f('شمس زہرا', 'سید منظور الحسن', 'چھیوڑہ حال کلکڑہ'),
    f('انجم زہرا', 'سید ناصر حسین', 'چھیوڑہ حال کلکڑہ'),
    f('حسین زہرا', 'سید شہر یار محمد', 'چاہ شور حال کلکڑہ'),
    // second row: the box around the four daughters has its bottom edge as a second bar
    // (one sibling list, eldest first on the top row)
    m('عطا عباس', [f('فرحت بانو'), f('نگہت بانو'), f('زینب بانو')]),
    m('منظر الحسن', [m('نسیم عباس'), m('نعیم عباس')]),
    m('حسین محمد', [
      f('شمع زہرا'),
      f('شبیہ زہرا'),
      f('انجم زہرا'),
      f('سیما'),
      m('وسیم عباس'),
    ]),
    f('کاظمہ خاتون'),
  ]),
  f('مہاجرہ خاتون', 'سید محمد اصغر', 'سدو'),
])

const aalHasan149 = m('آل حسن', [
  m('سبط حسن', [
    m('غلام عباس', [m('مہدی عباس')]),
    f('قیصر بانو', 'سید علی حیدر', 'مجاپوتہ'),
    f('حسین بانو', 'سید معصوم علی عابدی', 'نگانواں سادات'),
    m('ماہر عباس', [
      f('نسرین زہرا'), // VERIFY: name reads نسمی / نسرین زہرا
      m('فیروز عباس'),
      m('زاہد عباس'),
      m('عابد عباس'),
    ]),
  ]),
  m('لطف حسن', [
    f('نسرین فاطمہ'),
    f('شاہین زہرا', 'سید محمد علی', 'لکھنؤ'),
    m('قائم رضا'),
    m('محمد رضا', [m('نور عین رضا'), f('مہناز رضا'), m('کاشف رضا')]),
  ]),
  f('مطاہرہ خاتون', 'سید انیس حسن', 'دانشمندان'),
])

const raziHasan149 = m('رضی حسن', [
  f('ناصرہ خاتون', 'سید شعیب حسن', 'بگلہ'),
  m('قمر رضی', [
    m('علی کامران'),
    f('فوزیہ قمر', 'سید ظفر نقوی', 'چھیوڑہ'),
    f('فرحین قمر', 'سید فہیم عالم', 'سدو'),
    m('علی فرحان'),
  ]),
  f('نادرہ خاتون', 'سید شبیہ الحسن', 'چھیوڑہ حال کلکڑہ'),
])

const amirHusain149 = onPage(150, m('امیر حسین', 'محلہ کلکڑہ میں مقیم ہوئے', [
  mubarakulHasan149,
  f('ستارہ خاتون', 'سید فضل حسین', 'سدو'),
  zakiHasan149,
  f('ماجدہ خاتون', 'سید زوار حسین', 'دربار کلاں'),
  aalHasan149,
  f('ساجدہ خاتون', 'سید امیر حسن عرف اللہ', 'سدو'), // VERIFY: husband's alias "عرف اللہ ..." is tiny and unclear
  raziHasan149,
]))

// ═════════ photo page8 ═════════
// Khandan 28 (محلہ چھیوڑہ), photo page8; the page number printed on the photo is 149 (workflow label: book page 148).
//
// Chart A: "صفحہ ۱۴۸ سید امیر الدین بن سید یقین علی"  -> ameerUddin148 (root امیر الدین, father یقین علی)
//   Includes, inline, the family of سید باقر رضا بن سید محمد ناطق (the top-right chart headed "صفحہ ہذا"); it is
//   spliced into محمد ناطق's children as baqirRaza148, so it is NOT a separate root.
// Chart B: "صفحہ ۱۴۸ سید بشارت حسین بن سید وزیر علی"  -> bisharatHusain148 (root بشارت حسین, father وزیر علی)
//
// Wrapped sibling lists (one list each, eldest first, row 1 then row 2 ...): مبارک حسن (9), محمد جعفر (8),
// محمد ناطق (8), انعام رضا (10), محمد جواد (5), حسین رضا (6).

// ───────────────────────── Chart B: بشارت حسین بن وزیر علی ─────────────────────────

// وزارت حسین: four daughters
const wazaratHusain148 = m('وزارت حسین', [
  f('شاہدہ خاتون', 'سید اسرار مہدی', 'حقانی'),
  f('حاجرہ خاتون', 'سید کامل حسین', 'قاضی زادہ'),
  f('حامدہ خاتون', 'سید لطف حسن', 'عثمان پور'), // VERIFY: mohalla/town printed "عثما پنور"
  f('ماجدہ خاتون', 'سید شہادت حسین', 'حقانی'),
])

// نور الحسن: بناز الحسن is continued on page 150 ("صفحہ ۱۵۰" beside his name)
const noorulHasan148 = m('نور الحسن', [
  f('کنیز فاطمہ', 'سید علی', 'پنگھور'), // VERIFY: mohalla (پنگھور / پنگہوڑ)
  f('اشتیاق فاطمہ', 'سید اختر حسن', 'سہگلنہ'), // VERIFY: husband's name (اختر / اخیر) and mohalla
  onPage(150, m('بناز الحسن')),
])

// کبیر حسین: eight children on one bar
const kabeerHusain148 = m('کبیر حسین', [
  m('وزیر حسین', 'لاولد'), // VERIFY: "لاولد" is written oddly (reads لاعلد)
  wazaratHusain148,
  m('آغا حیدر', 'لاولد'),
  f('امیر بانو', 'سید وزیر علی'),
  m('قاسم حسین', 'لاولد'),
  m('ہاشم حسین', 'لاولد'),
  noorulHasan148,
  nazimHusain149,
])

const bisharatHusain148 = onPage(149, m('بشارت حسین', [
  amirHusain149,
  m('نذیر حسین', 'لاولد'),
  m('بشیر حسین', 'لاولد'),
  kabeerHusain148,
]))

// ───────────────────────── Chart A: امیر الدین بن یقین علی ─────────────────────────

// سید باقر رضا بن سید محمد ناطق ("صفحہ ہذا", drawn top right of the page)
const baqirRaza148 = m('باقر رضا', [f('افشاں زہرا'), f('کرن زہرا')])

// محمد ناطق: eight children, drawn on two joined bars (top bar then the box's bottom bar, both right to left)
const muhammadNatiq148 = m('محمد ناطق', [
  f('پروین خاتون'),
  f('صادقہ خاتون', 'محمد الیاس'), // husband printed without سید
  m('خامس عباس'), // VERIFY: first word (خامس / خاص)
  f('نسرین خاتون', 'سید سبط عباس', 'مظفر نگر'), // VERIFY: husband's name
  baqirRaza148,
  f('پاکیزہ خاتون', 'سید محمد ثقلین زیدی', 'گولی حال قاضی زادہ'),
  f('مہ جبین خاتون', 'سید شجاع الحسن', 'دانشمندان'),
  // محمد ناصر: five children; یاور رضا hangs on a short wrapped bar under بتول فاطمہ
  m('محمد ناصر', [
    m('عارف رضا'),
    m('یاسر رضا'),
    m('ساجد رضا'),
    f('بتول فاطمہ'),
    m('یاور رضا'), // VERIFY: یاور رضا is on a wrapped bar at the left; could instead be a child of بتول فاطمہ
  ]),
])

// محمد جعفر: eight children, drawn in a box (top bar نسیم/لبیقہ/خلیقہ, then the box's bottom bar)
const muhammadJafar148 = m('محمد جعفر', [
  m('نسیم رضا', [m('عظیم رضا')]),
  f('لبیقہ خاتون', 'سید ذکی رضا', 'چیوڑہ حال شفاعت پوتہ'),
  f('خلیقہ خاتون', 'سید شجاعت علی خاں', 'دربار کلاں'),
  // اقبال رضا: five daughters (the line leaves his name and jogs left, then comes down to their bar)
  m('اقبال رضا', [f('جولی'), f('نشی'), f('نیلم'), f('نگہم'), f('بٹو')]),
  m('حسین رضا', [f('معصومہ خاتون'), f('سنہی فاطمہ'), f('محسنہ خاتون'), f('یاسمین فاطمہ')]),
  m('اکرام رضا', [f('کنیز سیدہ'), m('محمد سعید رضا'), f('عزادار فاطمہ')]),
  m('شان رضا', [f('فضل زہرا')]),
  // انعام رضا: drawn on three joined bars (سیما/حمیدہ, then کنیز/سعیدہ, then the long bar below)
  m('انعام رضا', [
    f('سیما رضا'), // VERIFY: printed without سید, so taken as female
    f('حمیدہ رضا'), // VERIFY: printed without سید, so taken as female
    f('کنیز فاطمہ', 'سید حسین رضا', 'چیوڑہ حال شفاعت پوتہ', 'عرف شبنم'),
    f('سعیدہ خاتون', 'سید قاسم حسن', 'قاضی زادہ حال مجاپوتہ'), // VERIFY: last word of the mohalla line
    // VERIFY: the long bar below hangs from the left end of the سعیدہ bar (so these six are انعام رضا's), but
    // short stubs from نیلم and نگہم also touch it; the order within this third row may also run left to right
    m('شہاب رضا'),
    f('انجم فاطمہ'),
    m('شہزاد رضا', [f('ہمنا'), f('سائرہ')]),
    m('عمران رضا'),
    m('شباب رضا', [m('یوسف رضا'), f('شیرین')]),
    f('فریدہ خاتون'),
  ]),
])

// مبارک حسن: nine children on two joined bars (the second bar hangs from the left end of the first)
const mubarakHasan148 = m('مبارک حسن', [
  // حسین رضا: his line runs down the right margin to the bottom-right bar (نرگس ... ریحانہ, then معصوم/سعدیہ)
  m('حسین رضا', [
    f('نرگس'),
    f('مریم'),
    f('یاسمین'),
    f('ریحانہ'),
    f('معصوم'), // VERIFY: read معصوم, probably معصومہ; no سید so taken as female
    f('سعدیہ'), // these last two sit on a short wrapped bar hanging from the left end of the row above
  ]), // VERIFY: that this right-margin line really belongs to حسین رضا and not to محمد جواد beside it
  f('عطیہ خاتون', 'سید سبط قاسم', 'ترپولیہ'), // VERIFY: husband's name and mohalla (ترپولیہ)
  f('ذکیہ خاتون', 'سید جعفر حسین زیدی', 'سونی پت'),
  f('منورہ خاتون', 'سید محمد سلطین', 'قاضی زادہ'), // VERIFY: husband's name (سلطین)
  m('حسن رضا'),
  // second bar (VERIFY: order within this row; it hangs from the left end of the first bar)
  m('محمد جواد', [
    m('قمر رضا'),
    f('فہمیدہ خاتون', 'سید تصور حسین', 'منڈی چوب'), // VERIFY: mohalla (منڈی چوب)
    m('منور رضا', [f('بتول زہرا'), m('مبشر رضا'), f('ثمرہ بتول')]),
    f('ساجدہ خاتون', 'سید منتصر رضا', 'گذری'),
    m('افتخار رضا', [m('حسین رضا'), f('مہوش')]),
  ]),
  m('ذکی رضا', [
    m('صبیح رضا'),
    f('نرجس خاتون', 'سید نادر حسن', 'کٹرہ غلام علی'), // VERIFY: husband's name (نادر / ناقد)
    f('نگہت فاطمہ'),
    f('شائستہ ذکی'),
  ]),
  m('محسن رضا', [
    m('ذیشان رضا'),
    f('زاہدہ خاتون'),
    m('عرفان رضا'), // VERIFY: printed عزمان / عرفان
  ]),
  m('محمد رضا', [
    m('محمد انور'),
    m('اعجاز رضا'),
    f('رباب فاطمہ', 'سید سبط قائم', 'ترپولیہ'), // VERIFY: husband's name and mohalla
    m('اطہر رضا'),
    m('سجاد رضا'),
  ]),
]) // VERIFY: محمد جواد, ذکی رضا, محسن رضا, محمد رضا are on the second bar of مبارک حسن's wrapped list

const mustafa148 = m('مصطفیٰ', [mubarakHasan148, muhammadJafar148, muhammadNatiq148])

const nisarHusain148 = m('نثار حسین', 'محلہ شفاعت پوتہ کی رہائش اختیار کی', [
  m('باقر حسین', 'لاولد'),
  m('کاظم حسین', 'لاولد'),
  mustafa148,
  f('دختر', 'سید زین الدین', 'دانشمندان'), // VERIFY: the book gives no name, only "دختر"
  m('سجاد حسین'),
])

const ameerUddin148 = onPage(149, m('امیر الدین', [
  m('شبر حسین', 'لاولد'),
  f('سعیدہ خاتون', 'سید ریحان علی', 'لکلوئی'), // VERIFY: mohalla is hard to read
  f('دولت خاتون', 'سید نذر الحسن', 'گذری'),
  f('معصومہ خاتون', 'سید شبر علی', 'شفاعت پوتہ'),
  nisarHusain148,
]))

// ═════════ photo page7 ═════════
// Khandan 28 (محلہ چھیوڑہ), book page 148 (photo page7.straight.jpg). NOT blank: three charts.
//
// Chart A: "صفحہ ۱۴۷ سید اکبر علی بن سید امام علی"  (root: akbarAli0)
// Chart B: "صفحہ ہذا سید صفدر مجتبیٰ بن سید امتیاز حسین"  (root: safdarMujtaba0; ALSO inlined under امتیاز حسین in chart A,
//          because the book marks صفدر مجتبیٰ "صفحہ ہذا". Splice only one of the two.)
// Chart C: "صفحہ ۱۴۷ سید محمد امیر بن سید محمد واسط"  (root: muhammadAmeer0)
//
// Wrapped sibling bars (a box/bracket whose bottom bar continues the list) are written as ONE list, each row read
// right to left, top row first. Every such join carries a VERIFY.

// ───────────────────────── Chart C ─────────────────────────

// the three stubs on this chart (بشارت حسین p.149, امیر الدین p.149, عوض علی p.151) are replaced by the charts themselves

const wazeerAli0 = m('وزیر علی', [
  f('سلامت النساء', 'سید ولایت علی خان', 'دربار کلاں'),
  bisharatHusain148,
])

const yaqeenAli0 = m('یقین علی', [m('محمد', 'لاولد'), ameerUddin148])

const shahabUddin0 = m('شہاب الدین', [
  wazeerAli0,
  f('صبیح النساء', 'سید بخش علی', 'چھیوڑہ'), // VERIFY: husband reads بخش علی / نجف علی
  yaqeenAli0,
])

const mubarak0 = m('مبارک', [
  f('مبارک النساء', 'سید امام علی', 'چھیوڑہ'),
  m('محمد علی', 'لاولد'),
  f('نصیب النساء', 'سید بخش علی', 'صابونگران'), // VERIFY: husband بخش علی / نجف علی; mohalla صابونگران
  awazAli150,
])

// Heading: صفحہ ۱۴۷ سید محمد امیر بن سید محمد واسط
const muhammadAmeer0 = onPage(148, m('محمد امیر', [shahabUddin0, mubarak0])) // VERIFY: father's name واسط (could be واحد)

// ───────────────────────── Chart B (also inlined in chart A) ─────────────────────────

const chaman0 = m('چمن مجتبیٰ', [
  m('تاجدار مجتبیٰ'),
  f('شاہین فاطمہ'),
  m('شاندار مجتبیٰ'),
  m('مسرت مجتبیٰ'),
])

const hasanMujtaba0 = m('حسن مجتبیٰ', [m('علی یاور'), m('علی نواز')])

// Seven children, drawn on two joined bars (the right end of the top bar turns down into the second bar).
const safdarMujtaba0 = onPage(148, m('صفدر مجتبیٰ', [
  m('باقر مجتبیٰ'), // VERIFY: the line down his right side may instead make حسن/غضنفر/شائستہ his children
  f('سنجیدہ خاتون', 'سید نذیر حسین', 'لکڑہ', 'زوجہ ثانی'), // VERIFY: husband's first name, mohalla
  f('فہمیدہ خاتون', 'سید جعفر مجتبیٰ', 'چھیوڑہ حال حجری'), // VERIFY: mohalla
  chaman0,
  hasanMujtaba0, // second bar starts here; VERIFY wrapped list
  m('غضنفر مجتبیٰ'),
  f('شائستہ خاتون', 'سید منظور نقی', 'چاہ غوری حال دربار کلاں'), // VERIFY: husband name
])) // VERIFY: heading reads صفدر/حیدر مجتبیٰ

// ───────────────────────── Chart A ─────────────────────────

// حیدر مجتبیٰ's seven children sit in a box (top row) with the box's bottom bar as the second row.
const sarwarMujtaba0 = m('سرور مجتبیٰ', [
  m('مہور مجتبیٰ'), // VERIFY: مہور / مشہور
  f('امن فاطمہ'),
  f('فرحین فاطمہ'),
])

const akbarMujtaba0 = m('اکبر مجتبیٰ', [
  m('کوین مجتبیٰ'), // VERIFY: first letters (کوین / کوئن)
  f('شمع زہرا'),
])

// انجم اقبال, شمیم اقبال: sons of انور مجتبیٰ
const anjumIqbal0 = m('انجم اقبال', 'عرف نواب', [m('فیصل عباس'), f('عندلیب')]) // VERIFY: عندلیب has no سید, so female

const shameemIqbal0 = m('شمیم اقبال', 'عرف شباب', [
  m('محمد عباس'),
  f('ماہ زہرا'),
  m('حیدر عباس'),
])

// انور مجتبیٰ: seven children on the long bar
const anwarMujtaba0 = m('انور مجتبیٰ', 'لندن کی سکونت اختیار کی', [ // VERIFY: bracketed note (لندن / ...)
  anjumIqbal0,
  m('وسیم اقبال'),
  f('عفت فاطمہ', 'سید شہاب حسین', 'دربار کلاں'),
  shameemIqbal0,
  f('نزہت فاطمہ', 'سید محمد', 'چھیوڑہ حال لکڑہ'), // VERIFY: mohalla
  f('نگہت فاطمہ', 'سید ولی', 'کنکوئی'), // VERIFY: husband reads ولی / علی
  f('طلعت فاطمہ'),
])

// افسر مجتبیٰ: four children
const afsarMujtaba0 = m('افسر مجتبیٰ', [
  f('رئیس فاطمہ', 'سید مظہر علی', 'مجاپوتہ'), // VERIFY: husband name
  f('عزیز فاطمہ', 'سید سلطان علی', 'شاہ علی سرائے'), // VERIFY: husband name and mohalla
  m('نایاب مجتبیٰ', [m('امتیاز مجتبیٰ'), f('ارمان فاطمہ')]),
  f('عارفہ خاتون', 'سید مبارک علی', 'مجاپوتہ'), // VERIFY: husband name
])

// اختر مجتبیٰ: six children, drawn in a box (top row) with the box's bottom bar as the second row
const akhtarMujtaba0 = m('اختر مجتبیٰ', 'سکونت اختیار کی', [ // VERIFY: bracketed note above him, first words unreadable
  f('نرگس خاتون', 'سید افضال محمد', 'گھیر غلام علی'), // VERIFY: mohalla
  m('ثمر مجتبیٰ'), // VERIFY: ثمر / تمر
  m('ظفر مجتبیٰ'),
  m('قمر مجتبیٰ', [f('شمیم فاطمہ'), f('کمال فاطمہ'), f('دلشاد بانو')]), // VERIFY: قمر / تمر
  f('سائرہ بانو', 'سید حسین مجتبیٰ', 'چھیوڑہ حال سنبھل'), // VERIFY: husband حسین/حسن, mohalla
  m('شان مجتبیٰ', [m('محمد رضوان عباس'), m('عامر عباس')]),
]) // VERIFY: row order of the wrapped list

// امتیاز حسین: six children, wrapped (انور and افسر are on the box's bottom bar)
const imtiazHusain0 = m('امتیاز حسین', [
  f('انیسہ خاتون', 'سید (نام پڑھا نہیں گیا)', 'بخشی'), // VERIFY: husband unreadable
  f('رئیسہ خاتون', 'سید (نام پڑھا نہیں گیا)', 'چھیوڑہ حال حجری'), // VERIFY: husband unreadable, mohalla
  safdarMujtaba0, // "صفحہ ہذا": chart B
  akhtarMujtaba0,
  anwarMujtaba0,
  afsarMujtaba0,
]) // VERIFY: wrapped list (box bottom bar holds انور and افسر)

const farzandMujtaba0 = m('فرزند مجتبیٰ', [
  m('عارف مجتبیٰ', [m('در نجف')]),
  f('شگفتہ جبیں'),
  f('غزالہ جبیں'),
  f('رخشندہ جبیں'),
  f('رعنا جبیں'),
  m('افروز مجتبیٰ'),
  f('ارم فاطمہ'),
])

const haidarMujtaba0 = m('حیدر مجتبیٰ', [
  f('ماجدہ خاتون', 'سید نذیر حسین', 'لکڑہ'), // VERIFY: husband, mohalla
  f('حسین فاطمہ', 'سید قمر مجتبیٰ', 'چھیوڑہ'),
  f('معین فاطمہ', 'سید جواد حسین', 'بخشی'), // VERIFY: mohalla
  sarwarMujtaba0,
  akbarMujtaba0,
  f('تبسم زہرا', 'سید نذر علی', 'گذری'),
  farzandMujtaba0,
]) // VERIFY: box top row (3 daughters) + bottom bar (4) read as one sibling list; second-row order

const mustafaAla0 = m('مصطفیٰ اعلیٰ', 'سید ابرار حسین و سید مصطفیٰ اعلیٰ پسران سید مرتضیٰ حسن نے محلہ حجری میں سکونت اختیار کی', [ // VERIFY: note's place name
  m('محمد مجتبیٰ', [m('علی مجتبیٰ', 'لاولد')]),
  f('عفیفہ بانو', 'سید ممتاز حسین', 'بخشی'), // VERIFY: mohalla
  f('سیدہ بانو', 'سید ابن محمد', 'دربار کلاں'), // VERIFY: husband name
  haidarMujtaba0,
])

const jafarMujtaba0 = m('جعفر مجتبیٰ', [
  f('ضمانت زہرا'), // VERIFY: ضمانت / حمانت
  f('شہامت زہرا'),
  f('فرحانہ زہرا'),
  m('کوثر مجتبیٰ'),
  m('قیصر مجتبیٰ'),
  m('ناصر مجتبیٰ'),
]) // VERIFY: three daughters in a box + three sons on its bottom bar, one sibling list

const abrarHusain0 = m('ابرار حسین', 'سید ابرار حسین و سید مصطفیٰ اعلیٰ پسران سید مرتضیٰ حسن نے محلہ حجری میں سکونت اختیار کی', [
  m('احمد مجتبیٰ', [jafarMujtaba0]),
]) // VERIFY: note's place name

const murtazaHasan0 = m('مرتضیٰ حسن', [
  abrarHusain0,
  mustafaAla0,
  f('طاہرہ خاتون', 'سید اعجاز حسین', 'بخشی'), // VERIFY: mohalla
  f('آمنہ خاتون', 'سید نور حسن', 'پچدرہ'), // VERIFY: mohalla
  imtiazHusain0,
])

// Heading: صفحہ ۱۴۷ سید اکبر علی بن سید امام علی
const akbarAli0 = onPage(148, m('اکبر علی', [
  f('سعید النساء', 'سید اصغر حسین', 'چھیوڑہ'),
  murtazaHasan0,
  m('محمد حسن', 'لاولد'),
]))

// ═════════ photo page6 ═════════
// Khandan 28 (محلہ چھیوڑہ), book page 147 (photo header "صفحہ نمبر ۱۴۷ کوثر الانساب"), two تتمہ charts:
//  1. اسلام حسن خان ولد سید عرفان حسن خان
//  2. سید قیصر کمال ولد سید اکرام حسن خان
// The task's heading ("صفحہ ۱۴۶ سید خلق حسن بن سید دلاور حسن خان") does not appear on this photo.

const aslamHasanKhan147 = onPage(147, m('اسلام حسن خان', [
  // order as on the main chart (page 5): the تتمہ slip prints the same five sons in a different left-to-right order
  m('ندیم حیدر', [m('اصغر حیدر')]),
  m('حسین حیدر', [
    f('علینہ حیدر'), // VERIFY: spelling (علینہ / علیہ)
    f('عالیہ حیدر'),
  ]),
  f('رباب'), // printed "سیدہ رباب"
  m('افضال حیدر', [
    f('ہما حیدر'),
    f('مریم حیدر'),
    m('محمد حیدر'),
  ]),
  m('سلمان حیدر', [
    m('رضا حیدر'),
    m('کاظم حیدر'),
    m('عباس حیدر'),
  ]),
])) // VERIFY: father's name is printed "سید عرفان حسن خان"; heading names him "اسلام حسن خان" without سید; child order differs between the main chart and the slip

const qaiserKamal147 = onPage(147, m('قیصر کمال', [
  m('جنید کمال'),
  f('زہرہ قیصر'),
  m('مرتضیٰ'),
])) // father: سید اکرام حسن خان

// ═════════ photo page5 ═════════
// Khandan 28 (محلہ چھیوڑہ), page5.straight.jpg. NOTE: the photo's printed page number is 147 (not 146) and its
// headings are NOT the ones the task named (معراج الحسن / منہاج الحسن). Charts actually on this photo:
//
//  1. صفحہ ۱۳۶: سید خلق حسن خان بن سید دلاور حسن خان              -> khulqHasanKhan146
//  2. صفحہ ۱۳۶: سید مہربان حسن خان بن سید نوازش حسن خان           -> mehrbanHasanKhan146
//  3. صفحہ ۱۴۳: سید محمد واسط بن سید اسحاق                         -> muhammadWasit146
//  4. صفحہ ہذا: سید نجف علی بن سید شجاعت علی (also drawn inside chart 3 as "صفحہ ہذا") -> najafAli146
//
// The whole page is wrapped by the heading "صفحہ ۱۳۶" twice (chart 1 and 2 are both continuations of page 136).

// ───────────── chart 4: نجف علی بن شجاعت علی (صفحہ ہذا) ─────────────
const najafAli146 = onPage(147, m('نجف علی', [
  f('زہرا خاتون', 'سید محمد سعید', 'شفاعت پوتہ'),
  f('مسیح النساء', 'سید حاکم حسین', 'حقانی'), // VERIFY: first name (مسیح / نسیم)
  f('حسین دولت', 'سید ضیغم الدین حیدر', 'شفاعت پوتہ'), // VERIFY: husband's name
]))

// ───────────── chart 3: محمد واسط بن اسحاق (صفحہ ۱۴۳) ─────────────
const muhammadWasit146 = onPage(147, m('محمد واسط', [
  m('محمد عجیب', [
    m('معتمد محی الدین', [
      m('علی حسن', [m('محمد حسین', 'لاولد'), m('فضل حسین', 'لاولد')]),
    ]), // VERIFY: first word (معتمد / معتقد)
    m('عطا محی الدین', 'لاولد'),
    m('مصطفیٰ اعلیٰ', [
      m('شجاعت علی', [
        najafAli146,
        m('ذوالفقار علی', 'لاولد'),
        m('آل نبی', 'لاولد'),
      ]),
      m('امام علی', [
        akbarAli0,
        m('انور علی', 'لاولد'),
        m('نصیب علی', 'لاولد'),
      ]),
    ]), // VERIFY: مصطفیٰ اعلیٰ (a small mark above the name)
  ]),
  muhammadAmeer0,
]))

// ───────────── chart 2: مہربان حسن خان بن نوازش حسن خان ─────────────
const mehrbanHasanKhan146 = onPage(147, m('مہربان حسن خان', [
  m('احسان حسن خان', [
    m('اکرام حسن خان', [
      f('فرحت بانو', 'سید یوسف جمال', 'کنڈوئی'), // VERIFY: mohalla spelling
      f('رضوان دولت', 'سید منظر حسین', 'گذری'), // VERIFY: a word "سنگاپور" sits above her line, unassigned
      // second (wrapped) bar of the same sibling list
      qaiserKamal147, // the تتمہ slip on this page gives قیصر کمال three children (see page 6); it replaces the single حمید کمال of the main chart
      f('شمشاد بانو'),
      m('سکندر عباس', [m('علی احسان'), m('حسن احسان')]),
    ]),
    m('ذیشان حسن خان', [m('آصف علی خان')]), // VERIFY: first name (ذیشان / دلیشان)
    f('اختر بانو', 'سید افتخار', 'لکھولی'), // VERIFY: husband's name and mohalla
    m('فرحان حسن خان', [
      f('مزبال سلطانہ', 'محمد یوسف داؤد', 'سنگاپور'), // VERIFY: name (مزبال / مزمل); a pen cross is drawn above her arrow
      m('فیصل علی خان', [m('محمد علی فرقان')]),
    ]),
    f('سلطان بانو', 'سید ارمان حسن خان', 'چھیوڑہ'), // VERIFY: husband's name and mohalla
  ]),
  f('علیہ خاتون', 'سید شان حسن خان', 'چھیوڑہ'),
  m('فیضان حسن خان', [
    m('مہمان حسن خان', [
      m('نایاب حسن خان'),
      m('نیاز حسن خان'),
      m('نواب حسن خان'),
    ]),
  ]),
  m('عرفان حسن خان', [
    // two joined bars: top row then the wrapped row below
    f('عطیہ زینب', 'سید آل حسن خان', 'دانشمندان'),
    f('شبیہہ زینب', 'سید محمد حبیب', 'گذری'),
    f('کنیز زینب', 'سید سبطان حیدر', 'لوگنیاں'), // VERIFY: husband's name and mohalla
    f('تصویر زینب', 'سید تمیر رضا', 'گذری'), // VERIFY: husband's name
    aslamHasanKhan147,
    f('تنویر زینب', 'سید ریاض حیدر', 'گذری'),
    m('ارمان حسن خان', [
      f('ارمان بانو', 'سید عظیم الدین', 'لکھولی'), // VERIFY: mohalla; name may be ارمان / اسماں
      m('نوازش حسن خان', [f('خدیجہ'), m('محمد عمران'), f('زہرا')]),
    ]),
  ]),
]))

// ───────────── chart 1: خلق حسن خان بن دلاور حسن خان ─────────────
const khulqHasanKhan146 = onPage(147, m('خلق حسن خان', [
  m('حمد حسن خان', [ // VERIFY: first name (حمد / احمد)
    // the two brothers sit in one drawn box; the box's bottom bar (and the long bar it feeds) carries the children
    m('عباس علی', [
      m('اصغر علی'),
      f('کنیز زہرا'),
      m('حسین علی', [m('سبطین علی'), m('صادقین علی'), m('مصطفین علی')]),
      m('قاسم علی'),
      f('نسرین زہرا', 'سید صغدر رضا', 'دربار کلاں'),
      m('حسن علی', [m('نادر علی'), f('علیہ خاتون')]),
      m('کاظم علی'),
      m('سجاد علی'),
      f('خورشید زہرا', 'سید ضیاء علی', 'دربار کلاں'),
    ]), // VERIFY: the box holds عباس علی and حسین علی together; the children under it are all given to عباس علی; (the one named حسین علی among them has the three sons)
    m('حسین علی'),
  ]),
  m('لطف حسن خان', [
    m('شباب الحسن', [m('شاہان حسن'), m('شایان حسن'), m('شیزان حسن')]), // VERIFY: شاہان / شیزان spelling
    f('ترانہ سیدہ', 'سید حسین رضا', 'بگلہ'), // VERIFY: mohalla
    f('شان سیدہ', 'سید نہال سبطین', 'گھیر مناف'),
    m('نواب الحسن', [m('ریحان حسن'), f('فربال سیدہ'), m('فرحان حسن')]), // VERIFY: فربال
    f('نگار فاطمہ', 'سید قمر رضا', 'چھیوڑہ حال شفاعت پوتہ'),
    f('زرتاج فاطمہ', 'سید عادل اختر', 'بچیدرہ حال شفاعت پوتہ'),
    m('مستجاب الحسن', [m('دانیال حسن'), f('رضانہ فاطمہ'), m('دلاور حسن')]), // VERIFY: رضانہ (رضوانہ?)
  ]),
  m('حسن خان', [
    f('خورشید زہرا', 'سید جمال حیدر', 'بخشی'),
    m('خلق مجتبیٰ', [m('خلق مصطفیٰ'), f('مریم زہرا', undefined, undefined, 'عرف ورا')]),
    f('سنجیدہ بانو', 'سید گلزار حسن', 'دربار کلاں'),
    f('نجمہ پروین', 'سید دلدار حسین', 'مجاپوتہ'), // VERIFY: husband's name (دلدار / مختار)
    m('دلاور مجتبیٰ', [m('محمد علی'), f('مہناز زہرا')]),
    f('شاہانہ پروین', 'سید غلام عباس', 'مکرہ'), // VERIFY: mohalla unreadable
    m('حسن مجتبیٰ'),
  ]),
  f('تنویر زہرا', 'سید حیدر حسن', 'دربار کلاں'), // VERIFY: husband's name
]))

// ═════════ photo page4 ═════════
// Khandan 28 (محلہ چھیوڑہ), photo page4.straight.jpg, printed page number 146 (task labels it 145).
// Charts on this page:
//   1. صفحہ ۱۴۵  سید معراج الحسن بن سید سراج حسین         -> meraajulHasan145
//   2. صفحہ ۱۴۵  سید منہاج الحسن بن سید سراج حسین         -> minhajulHasan145
//   3. صفحہ ۱۴۵  سید تاج الحسن بن سید سراج حسین           -> tajulHasan145
//   4. صفحہ ۱۴۳  سید نوازش علی بن سید غلام اشرف عرف شاہو  -> nawazishAli145
// Charts 1 and 2 share one outer box at the top of the page. In chart 2 the six children of منہاج الحسن
// are on the top bar and the box edge wraps down onto a second bar holding the last two (محمد کاظم, محمد ہاشم).

// ───────────── chart 1: معراج الحسن ─────────────

// سرفراز حسن (child of سخاء الحسین), four children
const sarfarazHasan145 = m('سرفراز حسن', [
  m('زہیر رضا'),
  m('حسن اصغر'),
  f('ترنم فاطمہ'),
  f('ایمن فاطمہ'),
])

// سخاء الحسین: six children on one bar
const sakhaulHusain145 = m('سخاء الحسین', [
  m('علمدار حسین'), // VERIFY: reads علمدار / علم الرحمن
  m('ذوالفقار حسین'),
  f('ممتاز فاطمہ', 'سید منصور حسین', 'مجاپوتہ'),
  sarfarazHasan145,
  f('فہین فاطمہ', 'سید عالم رضا', 'دانشمندان'),
  m('شاندار حسن'),
])

// ذکاء الحسین: five children on one long bar (his line comes down in the middle of it)
const zakaulHusain145 = m('ذکاء الحسین', [
  f('تسنیم فاطمہ'),
  f('تنزین زہرا'), // VERIFY: spelling (تنزین / تنزیل)
  f('کرن زہرا', 'سید فرخ حسن', 'سدو'), // VERIFY: mohalla (سدو)
  f('نازنین زہرا', 'سید کمال حسن', 'جھیوڑہ'),
  f('خمیسہ زہرا'), // VERIFY: spelling (خمیسہ / خمیس); the left three arrows sit on the same long bar as the right two, read as one sibling list
])

// شباب الحسن: four children
const shababulHasan145 = m('شباب الحسن', [
  m('فراز حسن'), // VERIFY: first letter (فراز / نواز)
  f('فرحین پروین'),
  m('شاداب حسن'),
  f('فرحانہ پروین'),
])

const meraajulHasan145 = onPage(146, m('معراج الحسن', [sakhaulHusain145, zakaulHusain145, shababulHasan145]))

// ───────────── chart 2: منہاج الحسن ─────────────

const muhammadNazim145 = m('محمد ناظم', [
  m('محمد اظہر'),
  f('نبان'), // VERIFY: name (نبان / نیان) and gender (printed without سید)
  m('محمد زہیر'),
])

const muhammadAalam145 = m('محمد عالم', [
  m('محمد عارف'),
  f('فہین فاطمہ'),
  m('محمد آصف'),
  f('جبین فاطمہ'),
])

// محمد ہاشم: five children on the bar formed by the bottom edge of the box around محمد عالم's children
const muhammadHashim145 = m('محمد ہاشم', [
  m('محمد عادل'),
  f('عظمیٰ زہرا'),
  m('محمد پرویز'),
  f('کرن فاطمہ'),
  m('محمد جاوید'),
])

const muhammadKazim145 = m('محمد کاظم', [f('عندلیب زہرا'), m('محمد سالم')])

const minhajulHasan145 = onPage(146, m('منہاج الحسن', [
  // top bar, right to left
  f('زکیہ خاتون', 'سید محمد شاہد', 'ساکنی'), // VERIFY: name (زکیہ / زلیخا) and mohalla (ساکنی)
  f('ملیکہ بانو', 'سید عشرت علی (زوجہ ثانی)', 'صالو نگراں'), // VERIFY: printed "زوجہ ثانی سید عشرت علی"; mohalla
  muhammadNazim145,
  muhammadAalam145,
  f('نازک بانو', 'سید عشرت علی', 'صالو نگراں'), // VERIFY: mohalla
  f('شمیمہ خاتون', 'سید خورشید حیدر کاظمی', 'دانشمندان'), // VERIFY: husband's name is hard to read
  // second bar (wrapped), right to left
  muhammadKazim145, // VERIFY: the wrapped bar belongs to منہاج الحسن (the box edge runs down from the first bar)
  muhammadHashim145,
]))

// ───────────── chart 3: تاج الحسن ─────────────

const tajulHasan145 = onPage(146, m('تاج الحسن', [
  m('جرار حیدر'),
  f('نگار فاطمہ', 'سید ناشر حیدر زیدی', 'چاندپور'),
  f('شان فاطمہ'),
  f('شمناز فاطمہ', 'سید شجاع حسن عابدی', 'نوگنیاں'), // VERIFY: name (شمناز / شمشاد)
  m('کرار حیدر'),
  f('نسرین فاطمہ', 'سید محمد تقی', 'شکارپور'),
]))

// ───────────── chart 4: نوازش علی ─────────────

// معروف حسن خان's children
const hasanAarif145 = m('حسن عارف خان', [
  f('شمع اعجاز'),
  f('نگہت اعجاز'),
  f('نشاط اعجاز'),
])

const abuTalib145 = m('ابوطالب خان', [m('نظار', 'لاولد'), m('وسیم عباس')]) // VERIFY: نظار (printed نظار لاولد)

const marufHasanKhan145 = m('معروف حسن خان', [
  f('تصور زہرا'),
  f('کنیز زہرا', 'سید علی مقدس', 'مجاپوتہ حال قاضی زادہ'),
  hasanAarif145,
  abuTalib145,
])

// محسن حسن خان: seven children on one long bar (his line comes down at its left-centre)
const nawazishHasan145 = m('نوازش حسن', [f('صدف زہرا'), m('علی حسن')])
const aijazHasan145 = m('اعجاز حسن', [
  f('مشعل حسن'), // VERIFY: printed without سید, taken as female
  m('فراز حسن'),
  f('سحر حسن'), // VERIFY: name (سحر / سجی); printed without سید
])
const shahidHasan145 = m('شاید حسن', [m('احمد حسن'), f('مریم حسن'), m('احسن حسن')]) // VERIFY: شاید / شاہد

const mohsinHasanKhan145 = m('محسن حسن خان', [
  nawazishHasan145,
  f('شمیم زہرا', 'سید محمد حسن', 'دانشمندان'),
  f('ریحانہ محسن', 'سید حسن خورشید', 'جونپور'),
  aijazHasan145,
  f('شربا بانو', 'سید سکندر سلطان', 'جھیوڑہ حال بچھرایوں'), // VERIFY: husband and mohalla
  f('سلمیٰ محسن', 'سید اقبال حیدر', 'گذری'),
  shahidHasan145,
])

// موصوف حسن خان: four sons, eldest first
const imamMujtaba145 = m('امام مجتبیٰ', [f('کلثوم زہرا'), f('کنیز زہرا'), f('بتول زہرا')])
const hasanMujtaba145 = m('حسن مجتبیٰ', [m('شان مجتبیٰ'), m('حسین مجتبیٰ'), m('کامران مجتبیٰ')])
const huzoorMujtaba145 = m('حضور مجتبیٰ', [m('عادل مجتبیٰ'), f('زہرا مہک'), m('حسین مجتبیٰ')])
const haidarMujtaba145 = m('حیدر مجتبیٰ', [m('سلمان مجتبیٰ'), f('عندلیب زہرا'), m('سجاد مجتبیٰ')])

const mausoofHasanKhan145 = m('موصوف حسن خان', [imamMujtaba145, hasanMujtaba145, huzoorMujtaba145, haidarMujtaba145])

const shanHasanKhan145 = m('شان حسن خان', [
  f('نیر فاطمہ', 'سید ذوالفقار حیدر', 'گذری'),
  mohsinHasanKhan145,
  f('حسین فاطمہ', 'سید مسعود الحسن خان (زوجہ ثانی)', 'دربار کلاں'), // VERIFY: printed "زوجہ ثانی سید مسعود الحسن خان"
  mausoofHasanKhan145,
])

const dilawarHasanKhan145 = m('دلاور حسن خان', [
  marufHasanKhan145,
  f('عارفہ خاتون', 'سید نور نذر', 'دانشمندان'),
  shanHasanKhan145,
  khulqHasanKhan146,
])

const nawazishHasanKhan145 = m('نوازش حسن خان', [
  dilawarHasanKhan145,
  f('ذکیہ خاتون', 'سید ضیاء الحسنین', 'گوہتاف'), // VERIFY: mohalla (گوہتاف / گوپتاف)
  mehrbanHasanKhan146, // VERIFY: page marker (۱۴۰)
])

const niazHasanKhan145 = m('نیاز حسن خان', [m('مبارک حسن خان', 'لاولد')])

const husainAliKhan145 = m('حسین علی خان', [niazHasanKhan145, nawazishHasanKhan145])

const meharbanAli145 = m('مہربان علی', [
  f('امین دولت', 'سید مسندی خان', 'گھڑیال منزل'), // VERIFY: husband's name and mohalla
  husainAliKhan145,
])

const nawazishAli145 = onPage(146, m('نوازش علی', [meharbanAli145]))

// ═════════ photo page3 ═════════
// Khandan 28, محلہ چھیوڑہ. Photo page3 = book page 145 (printed number; the task said 144).
// Chart A: صفحہ ۱۴۴ سید انظار حسین بن سید ابراہیم حسین (top of page)
// Chart B: صفحہ ۱۴۳ سید غلام زین العابدین عرف بلاقی بن سید ارشاد علی (middle of page)
//   Inside chart B, سراج حسین is marked "صفحہ ہذا" and his own family is drawn lower on this same page
//   (his heading: سید سراج حسین بن سید غلام زین العابدین), so it is nested directly, not onPage.
// Wrapped sibling bars (children listed top bar first, right to left inside each bar): جعفر طیار, حیدر کرار,
//   عمار حسین, سرور حسین, فرمان حسن, آل محمد, سراج حسین, شجاع الحسن.

// ───────────── Chart A ─────────────

// جعفر طیار: 3 on the top bar, wrapped to 2 on the bar below
const jafarTayyar144 = m('جعفر طیار', [
  m('ممتاز حسین'),
  m('مشتاق حسین'),
  m('مبشر حسین'), // VERIFY: printed مشتبر / مبشر
  m('اشفاق حسین'),
  m('مصور حسین'),
])

// حیدر کرار: 3 on the top bar, wrapped to 5 on the bar below
const haidarKarrar144 = m('حیدر کرار', [
  f('نجم السحر'),
  f('شمیم فاطمہ'),
  f('صبا فاطمہ'),
  f('مرجین فاطمہ'), // VERIFY: spelling (مرجبین / مرجین)
  f('پروین فاطمہ'),
  f('نشاط فاطمہ'),
  f('طلعت فاطمہ'),
  m('محمد علی'),
])

const mukhtarHusain144 = m('مختار حسین', [haidarKarrar144, jafarTayyar144])

// عمار حسین: 6 on the top bar, wrapped to 3 on the bar below
const ammarHusain144 = m('عمار حسین', [
  f('عاشورہ خاتون'),
  f('ممتاز فاطمہ'), // VERIFY: the husband line "زوجہ سید وقار کاظم، شفاعت پوتہ" sits between her and نرگس; taken as نرگس
  f('نرگس خاتون', 'سید وقار کاظم', 'شفاعت پوتہ'),
  f('مختار فاطمہ', 'سید شفیق المصطفیٰ', 'دربار کلاں'),
  m('منہاج اختر', [
    f('سبیکہ بتول'),
    m('نوشاد حسین'),
    f('ثمریہ بتول'),
    m('وحید ابرار حسین'),
    m('محمد نوید حسین'),
    f('وفا بتول'),
  ]), // VERIFY: all six hang off one bar whose father line is منہاج اختر
  m('ابو محمد اختر', [
    m('محمد حامد رضا'), // VERIFY: split of "محمد حامد رضا بتول" into a son and a daughter
    f('بتول'),
  ]),
  m('انصار رضا', [m('محمد')]), // VERIFY: انصار (printed الصار)
  m('اظہر عباس'),
  m('نذر عباس'),
])

const anzarHusain144 = onPage(145, m('انظار حسین', [
  ammarHusain144,
  f('کربلائی خاتون', 'سید نعیم المصطفیٰ', 'دربار کلاں'),
  mukhtarHusain144,
])) // VERIFY: first name انظار (printed الظار)

// ───────────── Chart B ─────────────

// آل محمد: 4 on the top bar, wrapped to 2 on the bar below
const aleMuhammad144 = m('آل محمد', [
  f('محسنہ خاتون', 'سید نجم الحسن', 'سرو'), // VERIFY: mohalla (سرو)
  f('شہر بانو', 'سید محبوب حسن', 'چاہ شور'),
  f('شفیق بانو', 'سید ساجد حسین', 'سرسی'),
  f('رضہ بانو', 'سید کلو', 'قاضی زادہ'), // VERIFY: husband's name (کلو / شکلو)
  m('میر محمد', [
    m('محمد', [m('سنی عباس'), m('سعید عباس')]),
    f('شیرین بانو'),
    f('کنیز فاطمہ', 'سید اقبال حیدر', 'پچدرہ'), // VERIFY: mohalla spelled بچیدرہ
    m('فخر عباس'),
  ]),
  m('آل سبطین', [
    m('آل حسنین'),
    f('سبطین فاطمہ', 'سید محمد سعید', 'بخشی'),
    m('محمد سبطین'),
    m('آل ثقلین'),
  ]),
])

const murtazaHusain144 = m('مرتضیٰ حسین', [
  aleMuhammad144,
  f('راشدہ خاتون', 'سید علی اعظم', 'پچدرہ'), // VERIFY: mohalla spelled بچیدرہ
  f('مسلمہ خاتون', 'سید نجم حسن', 'دانشمندان'),
  f('محسنہ خاتون', 'سید سبط حسن', 'چھیوڑہ'),
])

// فرمان حسن: 3 on the top bar, wrapped to 3 on the bar below
const farmanHasan144 = m('فرمان حسن', [
  m('علی عباس'),
  f('تنفیر زینب', 'سید محمد سبطین', 'بخشی'), // VERIFY: first name (تنفیر / تفسیر)
  f('توصیف زینب', 'سید لطف الحی', 'دربار کلاں'), // VERIFY: husband's name (لطف الحی)
  f('نرجس خاتون', 'سید ناظر حسین', 'شفاعت پوتہ'), // VERIFY: husband's name
  f('حسین بانو', 'سید حسن عباس', 'سرو'), // VERIFY: first name (حسین / حسنین)
  m('ظفر عباس', [
    f('عفت زہرا'),
    f('اسماء بتول'),
    f('ارم فاطمہ'),
    m('نئیر عباس'),
  ]),
])

// جعفر عباس: bar of 5
const jafarAbbas144 = m('جعفر عباس', [
  onPage(146, m('سرور عباس')), // VERIFY: marker reads "صفحہ ۱۴۶"
  m('اصغر عباس', [
    m('محمد کمیل عباس'),
    f('مرثیہ بتول'),
    m('محمد شہود عباس'),
  ]),
  onPage(146, m('باقر عباس')),
  f('ناہید فاطمہ', 'سید نصرت جاوید', 'دانشمندان'),
  m('باور عباس'), // VERIFY: first name (باور / یادر)
])

const ghazanfarAbbas144 = m('غضنفر عباس', [
  m('شبیر عباس'),
  f('رباب فاطمہ', 'سید حیدر عباس زیدی', 'انبالہ'),
  f('حجاب فاطمہ', 'سید ندیم اقبال'),
  m('شبتر عباس', [
    f('ہادیہ بتول'),
    m('ثقلین عباس'),
  ]), // VERIFY: شبتر (maybe شبیر); two-child bar drawn under his name
])

const akhtarHusain144 = m('اختر حسین', [
  ghazanfarAbbas144,
  f('بلقیس زہرا', 'سید مدبر علی', 'دربار کلاں'),
  jafarAbbas144,
])

// سرور حسین: top bar 2, wrapped bar 2, wrapped bar 3 (one sibling list of 7)
const sarwarHusain144 = m('سرور حسین', [
  f('طاہرہ خاتون', 'سید شاہد حسین', 'گذری'), // VERIFY: husband's name (شاہد / شاہ)
  m('حسن مہدی'),
  f('ماجدہ خاتون', 'سید سبط احمد', 'بخشی'),
  m('رضوان حسین', 'لاولد'),
  f('ظہیرہ خاتون', 'سید طاہر حسین جعفری'), // VERIFY: husband's name (طاہر / ظاہر)
  akhtarHusain144,
  farmanHasan144,
])

const ghulamAbbas144 = m('غلام عباس', [
  f('صغریٰ خاتون', 'سید جواد حسین', 'دانشمندان'),
  m('ابن عباس', [
    m('فرزند عباس'),
    f('سکینہ خاتون', 'سید حمید الحسن', 'شفاعت پوتہ'),
    f('دختر', 'سید نوفر حسن', 'سرو'), // VERIFY: no name, only "دختر"; husband's name
    f('مبینہ خاتون'),
  ]),
  f('ساجدہ خاتون', 'سید مبارک حسن', 'مجیر پٹی'), // VERIFY: mohalla hard to read
])

const ijazHusain144 = m('اعجاز حسین', [
  f('زاہدہ خاتون', 'سید انصار حسین', 'چھیوڑہ', 'زوجہ اول'),
  f('عابدہ خاتون', 'سید انصار حسین', 'چھیوڑہ', 'زوجہ ثانی'),
  f('خدیجہ الکبریٰ', 'سید معراج الحسن', 'چھیوڑہ'),
])

// سراج حسین ("صفحہ ہذا"): 3 daughters on the top bar, wrapped to 6 sons on the bar below
const sirajHusain144 = m('سراج حسین', [
  f('مومنہ خاتون', 'سید محمد احسن خان', 'دانشمندان'),
  f('تحسینہ خاتون', 'سید مشتاق حسین', 'بخشی'),
  f('امامیہ خاتون', 'سید جلال احمد', 'دربار کلاں'), // VERIFY: first name (امامیہ / امامہ)
  m('وہاج الحسن', [
    f('فرزانہ خاتون', 'سید انور کمال', 'دربار کلاں'),
    m('زوار مہدی'), // VERIFY: printed زوامہ مہدی
  ]),
  meraajulHasan145,
  minhajulHasan145,
  // شجاع الحسن: 4 on the top bar, wrapped to 5
  m('شجاع الحسن', [
    f('درخشاں بانو'),
    f('ناہید فاطمہ'),
    f('شاہین فاطمہ'),
    f('چاندنی بانو'),
    f('منتظم فاطمہ'),
    m('اقبال حسن'),
    m('وصال حسن'),
    m('کمال حسن'),
    m('جمال حسن'),
  ]),
  tajulHasan145,
  m('ضیاء الحسن', [
    f('ناہید فاطمہ'),
    f('ملکہ بانو'),
    m('پیارے میاں'),
    m('شاندار حسین'),
    m('تاجدار حسین'),
  ]),
])

const ghulamZainulAbidin144 = onPage(145, m('غلام زین العابدین', 'عرف بلاقی', [
  murtazaHusain144,
  m('ناظر حسین', 'لاولد'),
  sarwarHusain144,
  sirajHusain144,
  ghulamAbbas144,
  ijazHusain144,
]))

// ═════════ photo page2 ═════════
// Khandan 28 (محلہ چھیوڑہ), photo page2. The page number printed on the photo is ۱۴۴ (144), NOT 151.
// Charts on this page, top to bottom (each heading says "صفحہ ۱۴۳", the page the person is drawn on in the parent tree):
//   1. سید نبی الحسن بن سید فدا علی        -> nabiUlHasan151   (top right)
//   2. سید نفیس الحسن بن سید شیدا علی       -> nafisUlHasan151  (top left)
//   3. سید ضیاء الحسن بن سید رضا حسن        -> ziaUlHasan151
//   4. سید عروج الحسن بن سید فرزند حسن      -> uroojUlHasan151
//   5. سید محمد نذر بن سید اظہر علی         -> muhammadNazar151
// Wrapped sibling lists (top row first, then the second row, each right to left):
//   نبی الحسن (box on the right, second bar holds وجیہ الحسن and نجی الحسن),
//   مظاہر حسین (box, ten children on two bars), میر محمد آغا (twelve children, 5 + 7 joined at the left edge).

// ───────────── chart 1: نبی الحسن بن فدا علی ─────────────
const nabiUlHasan151 = onPage(144, m('نبی الحسن', [
  f('نشاط بانو', 'سید نادر حسن', 'چھیوڑہ'), // VERIFY: husband's name
  f('نگہت بانو', 'سید شوکہ عباس', 'چاہ غوری'), // VERIFY: husband reads شوکہ / شوکت
  m('تقی الحسن', [f('رضانہ زہرا')]), // VERIFY: رضانہ spelling
  m('نقی الحسن', [m('فیروز حیدر'), m('ضیاء حیدر')]),
  f('شباب بانو'),
  // Second bar (the box around the right-hand daughters continues into it): VERIFY that it is one sibling list with the row above
  m('وجیہ الحسن', [m('نفیس جمال'), m('محمد علی')]),
  m('نجی الحسن', [
    f('روح زہرا'),
    m('محمود الحسن'),
    f('صبا زہرا'),
    f('ہما زہرا'),
  ]), // VERIFY: نجی الحسن spelling (نجمی؟)
]))

// ───────────── chart 2: نفیس الحسن بن شیدا علی ─────────────
const nafisUlHasan151 = onPage(144, m('نفیس الحسن', [
  f('ثمینہ خاتون', 'سید ثمر الحسن', 'مجیر شہر حال قاضی زادہ'), // VERIFY: name (ثمینہ / تلمینہ), husband (ثمر / نمر) and mohalla
  f('فروغ بانو', 'سید عطا حسین', 'شفاعت پوتہ', 'زوجہ اولیٰ'),
  m('قمر نفیس', [
    f('سیمین زہرا', 'سید زوار حیدر عابدی', 'نوگنیاں'), // VERIFY: husband's name
    m('ظفر نفیس'),
    f('نفیس زہرا', 'سید حسین محمد', 'دربار کلاں'),
    f('گل زہرا', 'سید اعجاز حیدر عابدی', 'نوگنیاں'), // VERIFY: husband's name
    m('عسکری عبداللہ'), // VERIFY: second word is cut at the page edge (عبداللہ / عبدالنقی)
  ]),
  f('نفیس جمال', 'سید رضی اختر', 'بگلہ'),
  f('ثریا بانو', 'سید محمد باقر', 'منڈی چوب'),
]))

// ───────────── chart 3: ضیاء الحسن بن رضا حسن ─────────────
const ziaUlHasan151 = onPage(144, m('ضیاء الحسن', [
  // مظاہر حسین: ten children in a box (top bar) and the bar along its bottom edge
  m('مظاہر حسین', [
    f('یاسمین اختر'),
    m('جعفر عباس'),
    f('نسرین سیدہ', 'سید رضی حسین', 'دانشمندان'), // VERIFY: husband's name; "سیدہ" may be part of her name
    m('انور رضا'),
    f('عصمت زہرا'),
    f('تصور اختر', 'سید تقی عباس', 'شفاعت پوتہ'),
    m('اسد عباس', [f('شبانہ عباس'), f('زہرا بانو')]),
    f('شفقت زہرا', 'سید منظور عباس', 'سنبھلی'), // VERIFY: first name (شفقت / شقت); mohalla
    m('باقر رضا', [f('صبا زہرا'), m('محمد عباس'), f('مدیحہ زہرا')]), // VERIFY: مدیحہ
    f('تسلیم اختر', 'سید ناصر عباس', 'شفاعت پوتہ'),
  ]), // VERIFY: that the box (5 children) and the bar below it are one sibling list
  f('نادرہ خاتون', 'سید ولی حسین', 'دانشمندان'),
  m('زمر حسین', [f('نجمہ بانو')]), // VERIFY: زمر (زمرد؟)
  m('میر محمد آغا', [
    f('ناہید اختر'),
    m('حسین عباس'),
    f('شائستہ جبین'),
    f('شاہین اختر', 'سید نسیم اختر', 'دانشمندان'),
    f('شگفتہ جبین'),
    // second bar, joined to the first at the left edge
    m('ضیاء اختر', [m('عامر رضا'), f('رباب زہرا'), m('ناصر رضا')]),
    f('تنویر اختر', 'سید نذر عباس', 'سنبھلی'),
    m('وسیم آغا', [m('محمد ابوطالب')]), // VERIFY: printed without سید but he has a son
    m('نعیم آغا'), // VERIFY: printed without سید; آغا suggests a man
    m('محمود اختر', [m('علی رضا'), f('مہوش زہرا')]),
    m('حسن عباس'),
    m('محب اختر', [m('اظہر رضا'), m('یوسف رضا')]),
  ]), // VERIFY: that the 5 + 7 children are one sibling list (bars joined at the left edge)
  f('غدیر فاطمہ', 'سید احمد نذر', 'سنبھلی'),
  // The photo captions under the page read "احسن رضا ولد یاقوت حسین" and "آصف رضا ولد یاقوت حسین"
  m('یاقوت حسین', [
    f('فہمیدہ اختر', 'سید محمد احمد', 'آنگرہ'), // VERIFY: name (فہیدہ / فہمیدہ) and mohalla
    f('پروین اختر', 'سید حسین احمد', 'گذری'),
    f('نجمہ اختر', 'سید صغر احمد', 'گذری'),
    m('محمد رضا', [m('احسن رضا'), m('آصف رضا')]), // VERIFY: captions call احسن رضا and آصف رضا sons of یاقوت حسین
  ]),
]))

// ───────────── chart 4: عروج الحسن بن فرزند حسن ─────────────
const uroojUlHasan151 = onPage(144, m('عروج الحسن', [
  f('نسرین فاطمہ', 'سید صادق رضا', 'دانشمندان'),
  f('تسنیم فاطمہ', 'سید فردوس علی', 'مجاپوتہ'),
  m('نسیم رضا', [f('عنبرین فاطمہ'), m('عدنان رضا'), f('افشین فاطمہ')]),
  f('یاسمین فاطمہ', 'سید محمد مہدی', 'کنکوئی'), // VERIFY: mohalla (کنکوئی / کتکوئی)
  m('شمیم رضا', [f('کنول فاطمہ'), m('کمیل رضا')]), // a pen cross is drawn through his name
  f('حسین فاطمہ', 'سید ذقار عظیم', 'دانشمندان'), // VERIFY: husband's name
]))

// ───────────── chart 5: محمد نذر بن اظہر علی ─────────────
const muhammadNazar151 = onPage(144, m('محمد نذر', [
  m('ابراہیم حسین', [
    m('انصار حسین', [
      f('حاجرہ خاتون', 'سید محمد ہاشم', 'دانشمندان', 'زوجہ اولیٰ'), // VERIFY: husband's name
      f('ناصرہ خاتون', 'سید مختار حسین', 'چھیوڑہ حال دانشمندان'),
      f('باصرہ خاتون', 'سید احسان حسن', 'گذری'),
    ]),
    f('قاسمہ خاتون', 'سید متقی حسن', 'مجاپوتہ'), // VERIFY: first name
    f('مظاہرہ خاتون', 'سید عمران حسن', 'گذری', 'زوجہ اولیٰ'),
    f('اختر بانو', 'سید بشیر حسن', 'گذری'),
    f('متقیہ خاتون', 'سید زبیر حسین', 'گذری'),
    anzarHusain144,
  ]),
  f('سماۃ بدھو'), // VERIFY: printed "بدھو" with "سماۃ" below
  m('زوار حسین', [
    f('زائرہ خاتون', 'سید ضمیر حسن', 'دربار کلاں'), // VERIFY: husband's name
    f('ام لیلیٰ', 'سید ذاکر حسین', 'چھیوڑہ حال دانشمندان', 'زوجہ اولیٰ'),
  ]),
]))

// ═════════ photo page1 ═════════
// Khandan 28 (محلہ چھیوڑہ), book page 143.
// One chart: "صفحہ ۱۳۵ سید اسحاق بن سید راجو" — the khandan root (ishaq143).
// Wrapped sibling bars (a box whose second bar carries on the list) are written as ONE sibling list, top row first,
// each row right to left; every such wrap is marked VERIFY.

// ───────── left-bottom: سلطان حسن's family ─────────
const muhammadAbbas143 = m('محمد عباس', [f('رفعت سلطانہ'), f('نزہت سلطانہ')])

const javedAbbas143 = m('جاوید عباس', [m('حسن عباس'), f('افشین فاطمہ'), m('شان عباس'), m('سمیع حسن')])

const shahidAbbas143 = m('شاہد عباس', [m('حیدر عباس'), m('اسد عباس'), f('مریم زہرا')])

const rehanHasan143 = m('ریحان حسن', [
  f('پروین بانو', 'سید نور احمد', 'بگلہ', 'زوجہ ثانی'), // VERIFY: ثانی and the husband's name
  javedAbbas143,
  f('نازنین بانو'),
  f('مہ جبین بانو', 'سید جعفر رضا', 'گھیر شہر حال دانشمندان'), // VERIFY: mohalla (گھیر شہر؟)
  shahidAbbas143,
  m('زاہد عباس'),
])

const sultanHasan143 = m('سلطان حسن', [
  muhammadAbbas143,
  f('سلطان بانو', 'سید مقصود علی', 'دربار کلاں'),
  f('احسان بانو', 'سید توقیر حسن', 'کٹرہ غلام علی'), // VERIFY: mohalla (printed مرزہ/کنڑہ غلام علی)
  f('ریحان بانو', 'سید منجلی حسن', 'قاضی زادہ'), // VERIFY: husband's name (منجلی / مجتبیٰ)
  f('یوسفہ خاتون', 'سید انور علی', 'دربار کلاں'), // VERIFY: husband's name (انور / عنور)
  f('مبارکہ خاتون', 'سید قمر حسن', 'مجاپوتہ'),
  rehanHasan143,
])

// ───────── فدا علی's son شبیہ الحسن and his sons ─────────
const rabiulHasan143 = m('ربیع الحسن', [m('آصف رضا'), f('افشاں'), f('کرن'), f('بتول')])

const shameeulHasan143 = m('شمیع الحسن', [
  // box of five daughters whose bar wraps onto a second bar of five sons (one sibling list)
  f('یاسمین اختر'),
  f('نورین اختر'),
  f('ناہید اختر'),
  f('شمیم اختر'),
  f('شازیہ اختر'),
  m('حیدر علی'),
  m('روشن علی'),
  m('اصغر علی'),
  m('شفیع الحسن'),
  m('شعاع الحسن'),
]) // VERIFY: the box holds only daughters, so the bottom row (حیدر علی … شعاع الحسن) is taken as the wrapped continuation of his children

const shabihulHasanFida143 = m('شبیہ الحسن', [
  shameeulHasan143,
  f('شبیہ فاطمہ', 'سید محمد کاظم', 'ملتان'),
  f('شبیہ زہرا', 'سید مطاہر حسین', 'چھیوڑہ'), // VERIFY: husband's name (مطاہر / مظاہر)
  rabiulHasan143,
  f('گلشن زہرا'), // VERIFY: the bar's right end turns down to her, so she is taken as a wrapped second row
])

// ───────── محمد تقی's wrapped sibling list ─────────
const ibnAli143 = m('ابن علی', [
  f('زاہدہ خاتون', 'سید انصار حسین', 'چھیوڑہ حال دانشمندان'), // VERIFY: first name (زاہدہ / زایدہ) and husband
  f('شاکرہ خاتون', 'سید نجم الحسن', 'حقانی'),
  f('شہر بانو', 'سید عابد حسین', 'دانشمندان'),
])

const fidaAli143 = m('فدا علی', [
  f('سکینہ خاتون', 'سید محمد جعفر', 'چھیوڑہ'),
  nabiUlHasan151,
  f('سفینہ خاتون', 'سید ظفر حسن', 'پچدرہ'), // VERIFY: the word before پچدرہ in her mohalla line
  shabihulHasanFida143,
])

const shaidaAli143 = m('شیدا علی', [
  f('ماجدہ خاتون'),
  m('شریف الحسن', 'لاولد'),
  f('شاہدہ خاتون', 'سید معز حسین', 'شفاعت پوتہ'),
  nafisUlHasan151,
]) // VERIFY: box with a wrapped second bar, read as one sibling list

const muhammadTaqi143 = m('محمد تقی', [
  f('دختر'),
  m('حمزہ علی', 'لاولد'),
  ibnAli143,
  m('مظاہر حسن', 'لاولد'), // VERIFY: مظاہر / مطاہر
  fidaAli143,
  shaidaAli143,
]) // VERIFY: the box around دختر / حمزہ علی wraps onto a second bar; all six are taken as one sibling list

// ───────── اکبر نذر's line ─────────
const nadirHusain143 = m('نادر حسین', [
  f('فروغ بانو'),
  m('محمد اظہر'),
  f('کلثوم بانو'),
  f('فاطمہ انجم'),
  m('محمد اطہر'), // VERIFY: a pen cross is drawn under his name
  f('نزہت انجم'),
]) // VERIFY: box wraps onto a second bar; read as one sibling list (the two محمد اظہر / اطہر read as brothers)

const naseemRaza143 = m('نسیم رضا', [
  m('قسیم رضا'),
  f('صغریٰ بانو'),
  m('حیدر رضا'),
  m('صفدر رضا'),
  m('جعفر رضا'),
]) // VERIFY: the small box and the bar below it are one sibling list

const naeemRaza143 = m('نعیم رضا', [m('محمد ظفر علی'), f('مہرین رضا')])

const shabihulHasanZakir143 = m('شبیہ الحسن', 'عرف عاطم', [ // VERIFY: the small عرف word (عاطم / خاطر)
  f('ریاض بانو'),
  f('انور فاطمہ', 'محمد اشرف'),
  m('شمیم رضا'),
  naseemRaza143,
  f('اقبال بانو', 'سید ربیع الحسن', 'چھیوڑہ'),
  naeemRaza143,
]) // VERIFY: box + bar below it are one sibling list of six

const zakirHusain143 = m('ذاکر حسین', [
  nadirHusain143,
  f('ام سلمیٰ', 'سید نذر علی', 'دانشمندان'),
  shabihulHasanZakir143,
])

const mahirHusain143 = m('ماہر حسین', [
  m('ظہیر علی', 'لاولد'),
  f('شاندار فاطمہ', 'سید محمد تقی', 'دانشمندان'), // VERIFY: her name (شاندار / شائستہ)
])

const zairHusain143 = m('زائر حسین', [mahirHusain143, zakirHusain143])

const akbarNazar143 = m('اکبر نذر', [f('کنیز صغریٰ'), zairHusain143])

// ───────── اظہر علی ─────────
const azharAli143 = m('اظہر علی', [
  akbarNazar143,
  muhammadNazar151, // VERIFY: the marker reads like صفحہ ۱۴۳ (this very page) but nothing is drawn below him; taken as 144
  muhammadTaqi143,
])

// ───────── محمد علی's chain ─────────
const farzandHasan143 = m('فرزند حسن', [
  uroojUlHasan151,
  f('مناظرہ خاتون', 'سید مزمل حسین', 'چھیوڑہ حال دانشمندان'), // VERIFY: her name and the mohalla before حال دانشمندان
])

const naasirHusain143 = m('ناصر حسین', [m('ارجمند حسن', 'لاولد'), farzandHasan143])

const muhammadAli143 = m('محمد علی', [m('باقر حسین', [naasirHusain143])])

const badruddin143 = m('بدر الدین', 'عرف مکھو، محلہ دانشمندان میں ساکن تھے', [
  muhammadAli143,
  f('فہیمن', 'سید جوہر علی', 'قاضی زادہ'), // VERIFY: husband's name (جوہر / حیدر)
  azharAli143,
  m('احمد علی', 'لاولد'),
])

const qamaruddin143 = m('قمر الدین', [
  badruddin143,
  f('دختر', 'سید حکیم رضا', 'دانشمندان', 'اول'), // VERIFY: the word اول after the husband's name
])

// ───────── غلام اشرف's line (left) ─────────
const asgharHusain143 = m('اصغر حسین', [
  f('فراست النساء', 'سید حامد حسین', 'جعفری'), // VERIFY: جعفری may not be a mohalla
  f('اقبال دولت', 'سید سراج حسین', 'چھیوڑہ'),
  f('حسینہ خاتون', 'سید ضامن حسین', 'دانشمندان'),
  m('امان حسن', [
    f('مبینہ خاتون', 'سید افتخار حیدر', 'شفاعت پوتہ'),
    sultanHasan143,
    f('سفینہ خاتون', 'سید قمر الحسن', 'دربار کلاں'),
  ]),
  f('ام سلمیٰ', 'سید اولی حسن عابدی', 'نولکشان'), // VERIFY: husband's name and mohalla
  m('سبط حسن', [f('عالیہ خاتون', 'سید یٰسین حسین زیدی', 'گولی قاضی زادہ')]),
]) // VERIFY: box with a wrapped second bar; the six are read as one sibling list

const nurulHasan143 = m('نور الحسن', [m('زین حسن'), f('رباب فاطمہ')])

const ainulHasan143 = m('عین الحسن', [
  f('ایمان فاطمہ', 'سید انتخاب حیدر', 'پچدرہ'), // VERIFY: first name (ایمان / ارمان) and mohalla
  f('مہمان فاطمہ', 'سید نایاب حیدر', 'گذری'),
  nurulHasan143,
])

const husainBakhsh143 = m('حسین بخش', [
  asgharHusain143,
  m('قاسم حسین', [m('محمد کاظم', [ainulHasan143])]),
])

const amanAli143 = m('امان علی', [f('دختر', 'سید قمر الدین', 'دانشمندان'), husainBakhsh143])

const arshadAli143 = m('ارشاد علی', [
  f('افضل النساء', 'سید علی الدین', 'دانشمندان'),
  ghulamZainulAbidin144, // VERIFY: عرف word
])

const gulzarAli143 = m('گلزار علی', [
  m('احمد حسن', [m('رضا حسن', 'عرف بوریا', [ziaUlHasan151])]), // VERIFY: the small عرف word
  f('دختر', 'سید ابوالقاسم', 'دانشمندان'),
  m('ظہور حسن', [m('امیر حسن', 'لاولد')]),
])

const imdadAli143 = m('امداد علی', [
  f('دختر', 'سید غلام نبی', 'دانشمندان'),
  m('فضل حسین', [m('ہادی حسن', [m('رضا حسین', 'لاولد')]), m('آل حسن', 'لاولد')]),
  gulzarAli143,
])

const ghulamAshraf143 = m('غلام اشرف', 'عرف شابو', [
  imdadAli143,
  arshadAli143,
  nawazishAli145,
  amanAli143,
])

// ───────── Ishaq's sons ─────────
const muhammadAyat143 = m('محمد آیات', [
  qamaruddin143,
  f('دختر', 'سید غلام قادر', 'دانشمندان'),
  m('غلام علی', [f('دختر', 'سید وجیہہ الدین', 'دانشمندان')]),
  ghulamAshraf143,
])

const ishaq143 = m('اسحاق', [
  muhammadWasit146,
  m('محمد سادات', 'لاولد'),
  muhammadAyat143,
  m('محمد ثبات', 'لاولد'),
  m('محمد اثبات', [m('لکھو', [m('عبد المجید', 'لاولد')])]), // VERIFY: محمد اثبات (printed اشبات) and لکھو
])

const khandan: BookKhandan = {
  serial: 28,
  mohalla: 'Chhewra',
  trees: [{ page: 143, father: 'راجو', root: ishaq143 }],
}

export default khandan

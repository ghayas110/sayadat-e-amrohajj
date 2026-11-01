// Kausar-ul-Ansab (1999), pages 224–227: محلہ پچدرہ (the pages are headed محلہ چاہ شور ۔ پچدرہ)
// Khandan 39 in the book's index: اولاد سید محمد بن سید علی (متولیان)
//
//   page 224  سید محمد بن سید علی, itself headed "صفحہ ۲۰۶"
//   page 225  two charts: سید عسکری حسن بن سید عبداللہ خلیفہ and سید ممتاز علی بن سید نوازش علی,
//             both headed "صفحہ ۲۲۴"
//   page 226  سید یاد علی بن سید غلام علی (from 224)
//   page 227  a second family of the mohalla, سید خواجہ نذیر عرف اخوان میر بن سید ابوبکر بدرالدین
//             (headed "صفحہ ۲۰۶"), with four sub-charts marked "صفحہ ہذا"
//
// Page 228 is missing from the photos, so the families marked "صفحہ ۲۲۸" are left as stubs; so are
// "صفحہ ۲۲۹" (khandan 40's range) and the two "صفحہ ۲۲۶" leaves on page 227, which the page-226
// chart does not pick up.
//
// Photo page2 is a printed تتمہ (supplement) slip for صفحہ ۲۲۴ that redraws سید رفیق حسن's family;
// page 224 strikes two of his children out in ink, so the slip is followed for that family.
// Photos page6 and page7 are not khandan 39 at all — they are محلہ سدّو, book pages 234 and 235,
// which belong to khandan 40 (see HANDOFF.md).
//
// Drawing convention on these pages: each generation sits inside a box whose bottom edge doubles as
// the next children-bar, and long sibling lists wrap onto a second bar below the box. Names are
// legible, but many father-to-child joins have to be read from the x of the arrows rather than from
// a line that can be followed, and every one of those is marked VERIFY.

import { f, m, onPage, type BookKhandan } from './book'

// ───────────────────────── page 227 ─────────────────────────
// Page 227 carries a second family of the mohalla, headed
// "صفحہ ۲۰۶ سید خواجہ نذیر عرف اخوان میر بن سید ابوبکر بدرالدین", and four of its own sub-charts
// marked "صفحہ ہذا" (this page): سید محمد حسین بن سید محمد محسن، سید نسیم اختر بن سید رئیس محمد،
// سید حسنین اختر بن سید حسین محمد and سید حسین اختر بن سید حسین محمد.
// Those four are folded back into the main tree where the drawing shows the join — سید محمد حسین
// hangs off سید محمد محسن on this same page — and carried as their own trees where it does not.
// This is the smallest photo in the khandan (889×1183), so the readings below are the least certain.

const husainMuhammad227 = m('حسین محمد', [
  m('عین محمد'),
  f('شاہدہ خاتون', 'سید صائم رضا', 'دانشمندان'),
  m('حسین محمد', [
    m('شمس', 'عرف شیخ'), // VERIFY: the name under the عرف
    m('نفیس'), // VERIFY
    f('نسیم زہرا', 'سید صندہ رضا', 'بجنور'), // VERIFY: husband
    f('سلیم زہرا', 'سید شبیہ حیدر', 'چاہ غوثی'),
    f('شمس زہرا', 'سید حسن عسکری', 'الہ آباد'),
  ]),
]) // VERIFY: father (read from the x of the arrows, not from a line)

const akhtarHasan227 = m('اختر حسن', [husainMuhammad227])

const muhammadJawad227 = m('محمد جواد', [f('عفیفہ خاتون', 'سید شفیق حسن'), akhtarHasan227])

const muhammadBaqir227 = m('محمد باقر', [
  f('شکیلہ خاتون', 'سید احمد مرد', 'قاضی زادہ'), // VERIFY: husband
  muhammadJawad227,
  f('مومنہ خاتون', 'سید سعید حسن', 'دانشمندان'),
  f('کنیز نفیسہ', 'سید ابن حسن'),
])

// سید محمد حسین is the chart headed "صفحہ ہذا سید محمد حسین بن سید محمد محسن" at the top of the page.
const muhammadHusain227 = m('محمد حسین', [
  m('محمد متین', [f('فرحین بانو'), f('ذہین بانو'), m('محمد علی', [f('تنویر فاطمہ'), m('محمد محسن امیوں'), f('درخشاں نور')])]), // VERIFY: the joins under محمد متین
  f('محجبین بانو', 'سید ہاشم حسین', 'بھوکہ قدیم'), // VERIFY: the mohalla
  m('محمد ذہین'),
  f('زرین بانو', 'سید مظفر عباس', 'نخشبی'),
  m('محمد ساجد', 'لاولد'), // VERIFY: placement in the list
])

const qaisarMubeen227 = m('قیصر مبین', [m('شہاب قیصر'), f('عنبرین فاطمہ'), m('جمال قیصر')])

const muhammadMubeen227 = m('محمد مبین', [
  f('نشاط بانو', 'سید شان حیدر', 'گذری'),
  qaisarMubeen227,
  m('خوشتر مبین'),
  f('پروین بانو', 'سید مظفر حسین', 'سامانہ'),
  m('کوکب مبین', [f('درخشاں کوکب')]),
]) // VERIFY: father of this row

const muhammadIzzatMir227 = m('محمد عزت میر', [
  f('ریحان فاطمہ', 'سید حسین عباس', 'دانشمندان'),
  f('ذہین فاطمہ', 'سید نیاز حسن', 'چھیوڑہ'),
  f('صدف', 'رضا مسعود', 'دانشمندان'),
  f('بشریٰ', 'سید نثار حیدر', 'سامانہ ـ گذری'),
]) // VERIFY: name and father

const muhammadMohsin227 = m('محمد محسن', [
  muhammadHusain227,
  muhammadMubeen227,
  f('حسین بانو', 'سید آل حسین', 'سدہ'), // VERIFY: mohalla
  muhammadIzzatMir227,
])

const muhammadTaqi227 = m('محمد تقی', [
  f('محسنہ خاتون', 'سید محمد جواد', 'چاہ شور'),
  f('مسلمہ خاتون', 'سید ناقر حسین', 'گذری'), // VERIFY: husband
])

const nasirAli227 = m('ناصر علی', [
  muhammadTaqi227,
  f('آمنہ خاتون', 'سید عابد حسین', 'گذری'),
  m('محمد حسین', [muhammadMohsin227, f('شہر بانو', 'سید مبارک حسن', 'مجاپوتہ')]),
  muhammadBaqir227,
  f('بدھو', 'سید غلام قاسم'), // VERIFY: name and husband
  onPage(228, m('محمد صادق')),
])

const husainBakhsh227 = m('حسین بخش', [
  nasirAli227,
  f('حسین دولت', 'سید علی حسین', 'دانشمندان'),
])

const farhatAli227 = m('فرحت علی', [onPage(228, m('امید علی')), f('کنیز صغریٰ')])

const aalNabi227 = m('آل نبی', [
  farhatAli227,
  m('نصرت علی', [f('کنیز کبریٰ')]),
  f('دختر', 'سید اسد علی', 'مجاپوتہ'),
])

const fatehMurad227 = m('فتح مراد', [
  m('امانت علی', [m('قائم علی'), m('بہادر علی', 'لاولد')]),
  m('رعایت علی', [aalNabi227]),
  m('محمد پناہ', [husainBakhsh227]),
])

const masood227 = m('مسعود', [
  onPage(226, m('محمد امین')),
  m('عبدالسلام', [m('لڈھو', [f('سماۃ', 'سید عبدالعزیز', 'دربار کلاں')])]),
  m('مقصود', [m('صدرالدین', [fatehMurad227])]),
])

const khwajaNazir227 = m('خواجہ نذیر', 'عرف اخوان میر', [
  m('معظم', [
    m('سیدن شاہ', [onPage(226, m('برجے')), masood227, onPage(229, m('مصطفیٰ'))]), // VERIFY: برجے
  ]),
])

// The two charts on page 227 whose fathers are not drawn anywhere in this khandan's photos.
const naseemAkhtar227 = m('نسیم اختر', [m('حسین اختر'), m('رضا اختر')])

const hasnainAkhtar227 = m('حسنین اختر', [
  f('رضیہ خاتون', undefined, undefined, 'عرف ثانیہ'),
  m('محمد باقر'),
  f('آسیہ بانو'),
  m('محمد اسعد'),
]) // VERIFY: the عرف notes above رضیہ خاتون and آسیہ بانو
// ───────────────────────── page 226 ─────────────────────────
// "صفحہ ۲۲۴ سید یاد علی بن سید غلام علی". One chart, ten generations deep.
// Each generation is drawn inside a box whose bottom edge doubles as the next children-bar, so the
// names are clear but most father-to-child joins are read from the x of the arrows rather than from
// a line that can be followed. The chain down each column is marked VERIFY for that reason.

// ── the left column, under سید اجمل حسین ──

const ibnMuhammad226 = m('ابن محمد', [
  f('شازیہ بانو'),
  m('ابراہیم محمد'),
  f('درخشاں بانو'),
  m('یوسف محمد'),
  m('سردار محمد'),
  f('بانو'), // VERIFY: the last name of this row
]) // VERIFY: father

const habibMuhammad226 = m('حبیب محمد', [
  ibnMuhammad226,
  f('حسین بانو'),
  f('شمیم بانو'),
  m('مالک اشتر'),
]) // VERIFY: father

const suhailAsghar226 = m('سہیل اصغر', [
  habibMuhammad226,
  m('محمد مہدی'),
  m('فرخ مہدی'),
  m('سحر محمد'),
  f('حمیدہ بانو'),
]) // VERIFY: father

const shahryarMuhammad226 = m('شہریار محمد', [
  f('ام سلمیٰ'),
  f('صالحہ بانو'),
  suhailAsghar226,
  f('ام البنین'),
  f('صدرہ بانو'),
]) // VERIFY: father

const husainHaidar226 = m('حسین حیدر', [
  shahryarMuhammad226,
  f('مہتاب بانو', 'سید معقول حسین', 'مجاپوتہ'),
  f('حسین بانو', 'سید سلمان حیدر', 'لکڑہ'),
  f('نسیم بانو', 'سید حسین محمد', 'لکڑہ'),
  m('بریکہ محمد'), // VERIFY: بریکہ
]) // VERIFY: father

const shafiHaidar226 = m('شفیع حیدر', [
  m('مختار حیدر'),
  f('حسین بانو'),
  m('امتیاز حیدر'),
  husainHaidar226,
  m('ندیم حیدر'),
  m('شان حیدر'),
]) // VERIFY: father

const nihalHaidar226 = m('نہال حیدر', [
  m('جلال حیدر'),
  shafiHaidar226,
  f('انوار فاطمہ'),
  m('اعجاز حیدر'),
  m('رضی حیدر'),
]) // VERIFY: father

const asadHaidar226 = m('اسد حیدر', [
  m('جمال حیدر', [m('فیضی')]), // VERIFY: فیضی
  f('جمال فاطمہ', 'سید منظور حیدر', 'بجنور'),
  nihalHaidar226,
  f('کنیز فاطمہ', 'سید مغفور حسین', 'میمن ـ بصیرہ'), // VERIFY: the mohalla line
  m('اقبال حیدر'),
]) // VERIFY: father

const ayyubAli226 = m('ایوب علی', [
  m('نوید حیدر'),
  m('شبیہ حیدر'),
  asadHaidar226,
  f('روشن بانو'),
])

const ajmalHusain226 = m('اجمل حسین', [
  ayyubAli226,
  f('ایوب فاطمہ', 'سید شبیہ الحسن', 'دانشمندان'), // VERIFY: which of the two daughters this husband belongs to
  f('اعجاز فاطمہ', 'سید عاطر حسین', 'چھیوڑہ حال دنگور اتی'), // VERIFY: as above, and the place name
  m('محبوب علی'),
])

// ── the right column, under سید اشتیاق حسین and سید علمدار حسین ──

const hasanAshraf226 = m('حسن اشرف', [
  m('سعید قمر'),
  f('سیما قمر'),
  m('ابوذر قمر'),
  f('شبانہ قمر'),
  f('شاہ ماہ قمر', 'سید حیدر', 'نورپور'), // VERIFY: husband
]) // VERIFY: father

const ziaMuhammad226 = m('ضیا محمد', [
  m('محمد علی', [m('عباس علی'), m('شمعان علی')]),
  f('شگفتہ بانو'),
  m('اقبال محمد'),
  f('شائستہ بانو'),
  f('ارجمند بانو'),
  m('امتیاز محمد'),
  f('انجمن بانو'),
  m('ذوالفقار محمد'),
  m('آل محمد'),
  f('زیبا بانو'),
]) // VERIFY: the whole bottom row's father, and whether زیبا بانو is eldest

const husainMuhammad226 = m('حسین محمد', [
  f('آمنہ'),
  f('خدیجہ'),
  f('زہرا'),
  f('تبسم زہرا'),
  f('انجم زہرا'),
  f('عنچہ زہرا'),
  ziaMuhammad226,
  f('مریم زہرا'),
]) // VERIFY: eight children drawn as a wrapped bracket (three boxed, five on the bar below)

const zakiMuhammad226 = m('ذکی محمد', [
  f('شمائلہ بانو', 'سید نمر رضا'), // VERIFY: husband
  f('شاہانہ بانو'),
  m('حسن محمد', [husainMuhammad226]),
  f('شگفتہ بانو'),
]) // VERIFY: father, and the wrap of this bracket

const sibtMuhammad226 = m('سبط محمد', [
  f('تنویر فاطمہ'),
  m('دولت اسلام'),
  m('شہنشاہ'),
  f('توقیر فاطمہ'),
  hasanAshraf226,
  m('عالیجاہ'),
]) // VERIFY: father, and عالیجاہ's place in the list

const alamdarHusain226b = m('علمدار حسین', [
  sibtMuhammad226,
  zakiMuhammad226,
  m('اکرام محمد'),
  m('ابو محمد'),
]) // VERIFY: this is a second سید علمدار حسین, drawn on page 226 below سید شکیل محمد

const shakeelMuhammad226 = m('شکیل محمد', [
  m('عزادار حسین', [
    alamdarHusain226b,
    f('شبینہ زہرا'),
    m('یاد علی'),
    f('نگہت زہرا'),
    f('قمر زہرا'),
  ]),
]) // VERIFY: the join from عزادار حسین down to this row

const aliMuhammad226 = m('علی محمد', [
  shakeelMuhammad226,
  m('محمد اصغر'),
  m('بلال محمد'),
  f('نجم زہرا', 'سید اکرام محمد', 'پچدرہ'),
  m('عقیل محمد'),
]) // VERIFY: father

const alamdarHusain226 = m('علمدار حسین', [
  aliMuhammad226,
  f('معظمہ خاتون', 'سید شمس الحسن', 'لکڑہ'),
  m('نبی محمد'),
  m('عون محمد'),
]) // VERIFY: the bar runs on under سیدہ خاتون and کبریٰ خاتون, so the father is read from its left end

const ghulamTaskeen226 = m('غلام تسکین', [
  f('نسل بتول', 'سید حیدر حسین', 'تاج ضامن گلی'), // VERIFY: husband and place
  f('حسین زہرا', 'سید ضامن حسن', 'سدو'), // VERIFY: husband
])

const ishtiaqHusain226 = m('اشتیاق حسین', [
  f('بنت زہرا', 'سید آل محمد', 'چھیوڑہ'),
  ghulamTaskeen226,
  f('فاطمہ خاتون', 'سید ذوالفقار محمد', 'چاہ شور حال لکڑہ'),
])

const yadAli226 = onPage(
  226,
  m('یاد علی', [
    ishtiaqHusain226,
    f('کبریٰ خاتون', 'سید مرتضیٰ حسن', 'چھیوڑہ'), // VERIFY: مرتضیٰ
    f('سیدہ خاتون', 'سید ریاض حسن', 'حقانی'),
    alamdarHusain226,
    f('حاجرہ خاتون', 'سید مظاہر حسین', 'گذری'),
    ajmalHusain226,
  ])
)
// ───────────────────────── page 225 ─────────────────────────
// Two charts: "صفحہ ۲۲۴ سید عسکری حسن بن سید عبداللہ خلیفہ" and
// "صفحہ ۲۲۴ سید ممتاز علی بن سید نوازش علی".

// ── chart 1: سید عسکری حسن ──

const zafarAbbas225 = m('ظفر عباس', [
  f('ساجدہ خاتون', 'سید زائر حسین جعفری'),
  f('کاظمہ خاتون', 'سید جمال حیدر', 'اغوان پور'),
  m('وقار عباس'),
])

const muhammadIbnAskari225 = m('محمد ابن عسکری', [
  f('باصرہ خاتون', 'سید تقی حیدر', 'اغوان پور'),
  f('ناسمہ خاتون', 'سید عباس حیدر', 'لکڑہ'),
  f('ہاشمہ خاتون', 'سید مصطفیٰ احسن', 'حقانی'),
  zafarAbbas225,
])

// سجاد حسین's five children are drawn inside one box; نسیمہ and قسیمہ hang off the box's
// bottom edge, the first under شمیم فاطمہ and the second under شمیم حیدر. They are given to
// شمیم حیدر, the male of the pair.
const shamimHaidar225 = m('شمیم حیدر', [
  f('نسیمہ خاتون', 'سید احمد حسن', 'حقانی'),
  f('قسیمہ خاتون', 'سید صدوف علی خان', 'دربار کلاں'), // VERIFY: صدوف
]) // VERIFY: whether these two are شمیم حیدر's or شمیم فاطمہ's — the bar hangs from the box, not from a name

const sajjadHusain225 = m('سجاد حسین', [
  f('شمیم فاطمہ'),
  shamimHaidar225,
  f('پروین فاطمہ'),
  f('وسیمہ خاتون', 'سید شاکر حسین'), // VERIFY: whether the husband line belongs to وسیمہ or پروین
  m('شمشاد حسین'), // VERIFY: شمشاد / شمیم
])

const askariHasan225 = onPage(
  225,
  m('عسکری حسن', [muhammadIbnAskari225, f('معصومہ خاتون', 'سید رفیق حسن'), sajjadHusain225])
)

// ── chart 2: سید ممتاز علی ──
// The lower half of this chart is the least certain part of the khandan: the generations are drawn
// as stacked boxes whose bottom edge doubles as the next children-bar, and several of those bars
// are fed by a line that comes down the margin from much higher up. Every such join is marked.

// محمدی's line runs down the right-hand margin from page-level y≈51 to the bar at y≈81, past three
// other sub-trees, which is why his children sit so far below him.
const muhammadi225 = m('محمدی', [
  m('شان محمد'),
  f('کنیز فاطمہ', 'سید انوار حسن', 'بگلہ'),
  m('عون محمد', [
    f('نسیم زہرا', 'سید خوشتر حسن', 'بگلہ'),
    f('نعیم زہرا', 'سید کوثر حسن', 'بگلہ'),
    m('محمد رضی', [m('محمد ذکی'), f('کنیز صغریٰ'), m('محمد مہدی'), m('محمد ہادی')]), // VERIFY: the four below محمد رضی
    f('طیبہ خاتون', 'سید علی جون', 'حیدرآباد دکن'),
    f('سعیدہ خاتون', 'سید حسن ضامن', 'حیدرآباد دکن'),
  ]),
  f('کنیز زہرا', 'سید محبوب حیدر', 'گذری'),
  f('امیر بانو', 'سید ذاکر حسین', 'چھیوڑہ حال دانشمندان', 'زوجہ ثانی'),
]) // VERIFY: that the margin line into the y≈81 bar comes from محمدی

// عمران مہدی's eight children are drawn as a wrapped bracket: four in the box, four on the bar
// below it (the khandan-46 convention).
const imranMehdi225 = m('عمران مہدی', [
  f('صدف بانو'),
  f('صبا بانو'),
  f('عالیہ بانو'),
  f('طلعت زہرا'),
  f('نرجس خاتون'),
  m('ذوالفقار محمد'),
  m('محمد علی'),
  f('مرتضائی خاتون', 'سید سبط حسن', 'بگلہ'),
]) // VERIFY: the four on the second bar — wrapped bracket, not a separate generation

const sardarMuhammad225 = m('سردار محمد', [
  imranMehdi225,
  m('منور مہدی'),
  m('سہیل مہدی'),
  f('سکینہ'),
])

const anwarMuhammad225 = m('انوار محمد', [m('محمد مرتضیٰ'), f('ممتاز فاطمہ'), sardarMuhammad225])

const mubarakHasan225 = m('مبارک حسن', [
  m('ابرار محمد'),
  f('حسینہ خاتون', 'سید وصی نذر', 'سنبھلی'),
  anwarMuhammad225,
])

// آل مرتضیٰ's six children are a wrapped bracket too: four in the box, محمدی and مبارک حسن below it.
const aalMurtaza225 = m('آل مرتضیٰ', [
  f('ناسمہ خاتون', 'سید وحید حسن', 'لکڑہ'),
  m('عباس محمد', 'لاولد'),
  f('کاظمہ خاتون', 'سید حسین عسکری', 'گذری'),
  f('خدیجۃ الکبریٰ', 'سید رئیس حسین محمد', 'چاہ شور'), // VERIFY: the husband's name
  muhammadi225,
  mubarakHasan225,
]) // VERIFY: محمدی and مبارک حسن as آل مرتضیٰ's own sons (second bar of the bracket)

const anwarRaza225 = m('انور رضا', [
  m('فراز رضا'),
  m('علی رضا', [m('سجاد رضا')]),
  m('حسن رضا'),
])

const merajAkhtar225 = m('معراج اختر', [
  m('عادل اختر'),
  m('عارف رضا'),
  f('فاطمہ اختر', 'سید بلند اختر', 'شفاعت پوتہ'),
  f('گوہر بانو', 'سید نادر حسن', 'گذری'),
  anwarRaza225,
]) // VERIFY: the father of this bar — it hangs off the box that holds معراج، فہیم and نسیم اختر

const aliMuhammad225 = m('علی محمد', [
  f('عنبر بانو', 'سید میر محمد', 'لکڑہ'),
  m('حیدر رضا', 'لاولد'),
  f('رضیہ بانو', 'سید علی تقی خان', 'دربار کلاں'),
  merajAkhtar225,
  m('فہیم اختر'),
  m('نسیم اختر'),
]) // VERIFY: معراج/فہیم/نسیم اختر are boxed on a second row — read as the wrap of this sibling list

const husainMuhammad225 = m('حسین محمد', [
  aliMuhammad225,
  m('حسین بالو'), // VERIFY: بالو
  f('کاظمین محمد', 'سید عطا محمد عابدی', 'نوگیاں'), // VERIFY: name and which of the two carries the زوجہ line
])

const aalMuhammad225 = m('آل محمد', [
  m('سلطان محمد', [f('سلطان بانو', 'سید محمد تسکین', 'شفاعت پوتہ')]),
  f('حامدہ خاتون', 'سید آل اصطفیٰ', 'چاہ شور'),
  husainMuhammad225,
  f('زینب خاتون', 'سید ابوالجعفر جعفری'),
])

const mumtazAli225 = onPage(
  225,
  m('ممتاز علی', [
    aalMurtaza225,
    f('عابدہ خاتون', 'سید سبط حسن زیدی'),
    m('آل مصطفیٰ', [
      m('آل اصطفیٰ', [
        f('مجتبائی خاتون', 'سید علی محمد', 'چاہ شور حال شفاعت پوتہ'),
        f('بنت زہرا', 'سید محمد', 'پونہ حال شفاعت پوتہ'),
      ]),
    ]),
    m('علی احمد', 'لاولد'),
    aalMuhammad225,
  ])
)
// ───────────────────────── page 224 ─────────────────────────

// The left branch: سید مرتضیٰ → سید شرف الدین → سید علی اصغر (drawn with a horizontal arrow,
// شرف الدین pointing left to علی اصغر, because the column was already full).

// قربان علی's three sons are drawn inside a box; انتظام علی hangs off the box's bottom edge
// directly under باقر علی.
const baqirAli224 = m('باقر علی', [m('انتظام علی')])

const qurbanAli224 = m('قربان علی', [m('آل علی'), m('غفار علی'), baqirAli224])

const abdullah224 = m('عبداللہ', [
  m('محمد بخش', [m('انتظام علی', [qurbanAli224])]),
  m('علی بخش', 'لاولد'),
  m('محبوب علی', [m('امیر حسن', [m('ابوالحسن', 'مغفور والحبر')])]), // VERIFY: the note under ابوالحسن
])

const asgharAli224 = m('اصغر علی', [
  f('دختر', 'سید آل حسن', 'دانشمندان'), // the book writes دختر, not a name
  m('ابوالحسن'),
  m('سلطان محمد', 'لاولد'),
])

const nawazishAli224 = m('نوازش علی', [
  f('عنایت النساء', 'سید امان علی خان', 'گھوڑیال منزل'), // VERIFY: امان / سلمان
  mumtazAli225,
])

const inayatMohiuddin224 = m('عنایت محی الدین', [
  f('نصیب النساء', 'سید نصیب علی', 'چھیوڑہ'),
  m('ذوالفقار علی', [f('منظور النساء', 'سید اکبر علی', 'چھیوڑہ'), asgharAli224]),
  nawazishAli224,
  m('امیر علی'),
])

const sultanMuhammad224 = m('سلطان محمد', [
  m('ابوالحسنین', 'لاولد'),
  m('محی الدین', [m('مبارک محی الدین', [inayatMohiuddin224])]),
  m('غالب علی', [m('کریم علی', [m('سیادت علی', [abdullah224])])]),
])

const aliAsghar224 = m('علی اصغر', [
  m('عبداللطیف'),
  m('عبدالسلام', [m('ابوالحسین', [sultanMuhammad224])]),
  m('عبدالواحد'),
])

// The right branch: سید فتح اللہ → سید اسد اللہ → سید منعم.
// مقیم is drawn with no children; منعم's children bar runs on underneath his name.

// سید محمد تقی بن سید تقی حسن
const muhammadTaqi224 = m('محمد تقی', [
  m('حسن عباس'),
  m('ظہیر عباس'),
  f('ریحانہ زہرا'),
  m('ظفر عباس'),
  m('مظہر عباس'),
  f('فرزانہ زہرا', 'سید منور رضا', 'چاہ عوزی'), // VERIFY: چاہ عوزی (چاہ غوثی?)
  f('صدف زہرا'),
])

const muhammadHusain224 = m('محمد حسین', [
  f('عروج فاطمہ'),
  m('ثقلین عباس'),
  f('نسرین بانو'),
  m('ذوالفقار عباس'),
  f('ثنا بانو'),
  f('صائمہ بانو'),
])

const muhammadRazi224 = m('محمد رضی', [
  m('قمر عباس'),
  m('اطہر عباس'),
  m('یاور عباس'),
  m('اظہر عباس'),
  f('ارم زہرا'),
])

// نور سحر is the left-hand end of علی سمیع's bar; تبسم زہرا hangs off the box below it.
const aliSamee224 = m('علی سمیع', [
  f('نورین زہرا'),
  m('جوہر علی'),
  f('شگفتہ زہرا'),
  m('نور سحر', [f('تبسم زہرا')]), // VERIFY: نور سحر's sex — a child hangs off him but no سید is written
])

const taqiHasan224 = m('تقی حسن', [
  aliSamee224,
  f('رباب بانو'),
  muhammadTaqi224,
  muhammadHusain224,
  f('بلقیس خاتون'),
  muhammadRazi224,
])

const abdullahKhalifa224 = m('عبداللہ', 'خلیفہ', [
  askariHasan225,
  m('سیادت حسن', 'لاولد'),
  f('ارادت بانو', 'سید اعجاز حسین', 'چھیوڑہ'),
  taqiHasan224,
  m('غنی حسن', 'لاولد'),
  f('عزیز فاطمہ'),
])

// سید رفیق حسن: page 224 draws five boxes for his children and two of them are struck out in ink.
// Photo page2 is the printed تتمہ for صفحہ ۲۲۴ and redraws the family, so it is followed here.
// What survives unstruck on page 224 — نسیم حیدر، محمد زہیر قین، مختار احمد — agrees with it, and
// page 224 also hangs a daughter عزیز فاطمہ off the struck-out box at the left of the row.
const rafeeqHasan224 = m('رفیق حسن', [
  m('محمد زہیر قین', [m('وقار علی'), f('شگفتہ بانو'), m('ناصر علی')]), // VERIFY: زہیر قین
  m('نسیم حیدر'),
  f('عزیز فاطمہ'),
  m('مختار احمد'),
]) // VERIFY: from the تتمہ slip, not from page 224 itself

const muhammadIlyas224 = m('محمد الیاس', 'دربار کلاں میں ساکن ہوئے', [
  f('عجیبہ خاتون', 'وصی حسن عقیلی', 'شفاعت پوتہ', 'آگرہ حال شفاعت پوتہ'), // VERIFY: whether the book writes سید before وصی حسن
  rafeeqHasan224,
  f('حمیدہ خاتون', 'سید صغیر نذر', 'دربار کلاں', 'سکنہ حال دربار کلاں'),
])

const ghulamAli224 = m('غلام علی', [
  m('سجاد علی', [abdullahKhalifa224]),
  m('ارشاد علی', 'لاولد'),
  yadAli226,
  m('محمد صادق', [muhammadIlyas224]),
  m('شمشاد علی', 'لاولد'),
])

const muhammadSaleh224 = m('محمد صالح', [
  m('اولاد محمد'),
  m('محمد باقر'),
  m('محمد صادق', [m('فضل علی', [ghulamAli224])]),
  m('محمد رضا'),
  m('محمد اعظم'), // VERIFY: the hand writes آعظم
])

const munim224 = m('منعم', [
  m('محبوب عالم', 'لاولد'),
  m('فاروق'),
  m('کبیر', [muhammadSaleh224]),
  m('علی محمد'),
])

const muhammad224 = m('محمد', [
  m('فتح اللہ', [m('اسد اللہ', [munim224, m('مقیم')])]),
  m('جعفر'),
  m('نعمت اللہ'),
  m('مرتضیٰ', [m('شرف الدین', [aliAsghar224])]),
])

const khandan: BookKhandan = {
  serial: 39,
  mohalla: 'Pachdara',
  trees: [
    { page: 224, father: 'علی', root: muhammad224 },
    { page: 227, father: 'ابوبکر بدرالدین', root: khwajaNazir227 },
    { page: 227, father: 'رئیس محمد', root: naseemAkhtar227 },
    { page: 227, father: 'حسین محمد', root: hasnainAkhtar227 },
  ],
}

export default khandan

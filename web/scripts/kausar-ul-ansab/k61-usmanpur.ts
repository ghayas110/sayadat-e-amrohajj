// Kausar-ul-Ansab (1999), pages 340-346: محلہ عثمان پور عرف عباس نگر
// Khandan 61 in the book's index: اولاد سید حسن بن سید آل محمد (photo folder: usmanpur/aulad syed hasan bin syed aal e muhammad)
//
// Pages and charts (const names end in the book page):
//   340  one chart, no heading: chain امام علی نقی ... نظام احمد گنج روال ... آل محمد > حسن           -> imamAliNaqi340 (the only tree root)
//   341  three charts, all headed "صفحہ ۳۴۰": سبط حسن بن مظہر علی, اکبر حسین بن منظور علی, کلو بن بہتو
//   342  three charts: طاہر حسین بن مرتضیٰ حسین (head says 341), کبیر علی بن مبارک علی (340), عظیم علی بن داؤد (340)
//   343  two charts, both headed "صفحہ ۳۴۲": اکبر علی بن اصغر علی, وزیر علی بن کبیر علی
//   344  one chart headed "صفحہ ۳۴۰": بینجا بن برہان علی
//   345  two charts, both headed "صفحہ ۳۴۴": تحسین علی بن مہدی حسن, ولی محمد بن امام علی
//   346  photo page7: نثار حسین بن محمد حسین (head says 345), محمد سعید بن سجاد علی (344), plus a third chart ایزد بخش
//        photo page8: خاندان ایزد بخش بن عبد المجید ثانی (a تتمہ, label "صفحہ نمبر 346")
//
// Continuations are wired: every childless "صفحہ N" leaf was replaced by the const of the chart that continues it,
// so they are one object. Nothing is left as onPage.
//
// FOR A HUMAN TO CHECK:
//  - TWO PHOTOS FOR PAGE 346 CARRY THE SAME FAMILY (ایزد بخش). page7's third chart (no father, small scrawled hand, under a
//    prose note saying its link to the rest is unknown) and page8 (headed بن عبد المجید ثانی) are the same people read twice,
//    with conflicting details (page7: صابر حسین has nine children and ضامن حسین has two; page8: صابر حسین has six and
//    ضامن حسین has three). Only page8 is used here, as its own tree with father 'عبد المجید ثانی'. page7's chart 3 was
//    left out so as not to import the family twice. Its text is in the scratchpad fragment k61/page7.ts (from line 108)
//    if someone wants to reconcile the readings. Page7's note says the link to the main khandan is unknown, so the tree
//    is not hung under page 340 either.
//  - Headings versus drawings: page 340 attaches کبیر علی (342) under نجابت علی, but the chart on 342 is headed
//    "بن مبارک علی"; عظیم علی (342) hangs under رائے علی on 340, but the 342 heading says "بن داؤد"; سبط حسن hangs under
//    مشرف علی on 340 but 341's heading says "بن مظہر علی"; کلو hangs under ٹھو on 340 but 341's heading says "بن بہتو";
//    بنجا on 340 vs بینجا on 344 (same man, spelling differs, father برہان علی agrees). The leaf and name were matched, the
//    father in the heading was not used.
//  - Page 342's leaf اکبر علی is marked "صفحہ ۳۴۴" but his chart is on page 343 (headed "صفحہ ۳۴۲"); wired to 343.
//  - Page 343's two charts both continue 342, and طاہر حسین (342) heading says 341: wired from page 341's leaf.
//  - Page 344 root is read بینجا (could be بنیجا / ہنجا). Anwar Haidar's bar is cut off at the photo edge on 344, so
//    children may be missing there.
//  - Page 340/341/344/345 wrapped sibling bars are listed top bar first, right to left; the order inside second and
//    third bars is a guess where noted VERIFY.
//  - Page 346 (page7) women with their own children bar (ملکہ خاتون, عیور خاتون) are in the dropped chart 3 only.
//  - Names printed without "سید" are taken as females (book convention); the doubtful ones are marked VERIFY. On
//    page8 the book prints no "سید" at all, so gender there is inferred from the names.
//  - Weak readings are marked VERIFY throughout, including mohallas, husbands and the ٣٤١ / ٣٤٢ marker glyphs.

import { f, m, onPage, type BookKhandan } from './book'

// ───────────────────────── page 346 (photo page7: charts نثار حسین, محمد سعید; chart 3 dropped, see header) ─────────────────────────
// ───────────────────────── chart 1: نثار حسین ─────────────────────────

// نہال حیدر: five children on a bar that wraps down-left from his name
const nihalHaidar346 = m('نہال حیدر', [
  m('ندیم عباس'),
  f('روح زہرا'),
  m('اختر عباس'),
  f('ماہ زہرا'),
  m('رضا عباس'),
])

const nawabHaidar346 = m('نواب حیدر', [m('محمد آصف')])

// غلام حسین: five children, the list wraps from the first bar (2) onto a second bar (3)
const ghulamHusain346 = m('غلام حسین', [
  f('نجفی خاتون'),
  m('شباب حیدر'),
  nawabHaidar346,
  f('شمع زہرا', 'سید شان محبلی', 'سرسی'), // VERIFY: husband's name (شان محبلی / شان مجتبیٰ)
  nihalHaidar346,
])

const alamdarHusain346 = m('علمدار حسین', [
  f('ریحان فاطمہ'),
  m('علی نجف'),
  f('شاہین فاطمہ'),
  m('محمد مہدی'),
  f('عرفان فاطمہ'),
  m('علی رضا'),
  f('ارمان فاطمہ'), // VERIFY: leftmost name is cut by the page edge
])

const nisarHusain346 = onPage(346, m('نثار حسین', [
  ghulamHusain346,
  f('مبینہ خاتون'),
  f('کلثوم فاطمہ', 'سید سلطان حسن', 'نوگانواں'),
  m('سرور حسین', 'لاولد'),
  f('رئیسہ خاتون', 'سید حسن', 'سرسی'),
  alamdarHusain346,
]))

// ───────────────────────── chart 2: محمد سعید ─────────────────────────

const amirHaidar346 = m('امیر حیدر', [f('ثمر فاطمہ')]) // VERIFY: ثمر / نمر

const mutlubHusain346 = m('مطلوب حسین', [
  amirHaidar346,
  f('رئیسہ خاتون', 'سید ناطق حسین', 'اکروٹیہ'), // VERIFY: husband's name and mohalla (اکروٹیہ)
  f('قیصر بانو', 'سید محمد مظفر', 'منڈھن'), // VERIFY: mohalla (منڈھن / منڈی حسن)
  m('اخلاق حیدر'),
])

const haidarAbbas346 = m('حیدر عباس', [
  m('قمر عباس'),
  m('گلشن عباس'),
  m('تنویر عباس'),
  f('زرین زہرا'),
])

// امیر عباس: eight children, the bar wraps from the right row onto a lower-left row (محمد مصطفیٰ, منظر عباس, حسن عباس)
const amirAbbas346 = m('امیر عباس', [
  m('نقی عباس'),
  f('ریاض بانو', 'سید انوار حسین', 'عثمان پور'),
  haidarAbbas346,
  f('نعیم بانو', 'سید غلام عباس'),
  f('شبیہ زہرا'),
  m('محمد مصطفیٰ'),
  m('منظر عباس'),
  m('حسن عباس'),
])

const shabihHaidar346 = m('شبیہ حیدر', [
  m('حیدر'),
  m('ظہیر حیدر'),
  m('خورشید حیدر'),
  m('محمد حیدر'),
])

const tasawwurHusain346 = m('تصور حسین', [
  m('مصور حسین'),
  m('انیس حسن'),
  f('بنی فاطمہ', 'سید اشتیاق حسین', 'سرسی'),
  shabihHaidar346,
  f('متینہ خاتون', 'سید بدر الحسن', 'لکڑہ'), // VERIFY: mohalla (لکڑہ / لگڑہ)
  m('نفیس حسن'),
])

const muhammadSaeed346 = onPage(346, m('محمد سعید', [
  m('زوار حسین', 'لاولد'),
  mutlubHusain346,
  amirAbbas346,
  m('مومن حسین', 'لاولد'),
  f('مرتضائی خاتون', 'سید سرور حسین', 'نوگانواں'),
  f('کربلائی خاتون'),
  m('سرور حسین', 'لاولد'),
  tasawwurHusain346,
]))


// ───────────────────────── page 346 (photo page8: ایزد بخش) ─────────────────────────
const nasirHasan346 = m('ناصر حسن', [
  f('امام زہرا', 'سید تنویر حسن', 'سنبھل'),
  m('طاہر حسن'),
  m('یاسر حسن'),
  m('حیات حسن'),
  m('قادر حسین'), // VERIFY: reads like قادر / غازی / خادم + حسین
  m('نظار حسین'), // VERIFY: نظار / نذیر
])

// جواد حسین: six children on a bar under him
const jawadHusain346 = m('جواد حسین', [ // VERIFY: name reads like چراد / جواد احسین, with a small scribble under it
  m('وفادار حسن'), // VERIFY: وفادار / وفاد احسین
  f('شباب کوثر', 'نعیم جمال', 'دربار کلاں'), // VERIFY: husband printed without سید
  f('مہتاب کوثر', 'سید ظہیر حسن', 'قاضی زادہ'), // VERIFY: husband's name (ظہیر / ہزبر / حیدر)
  f('اقبال کوثر'), // VERIFY: sex (name could be male)
  f('رباب کوثر'),
  f('حنا کوثر'),
])

// ماجد حسن: three children drawn on the bottom edge of the box
const majidHasan346 = m('ماجد حسن', [
  // VERIFY: the line from this bar continues down (diagonally) to a bar with two children; assigned to روشن
  m('روشن', [
    m('ذوالفقار حسین'), // VERIFY: a first word above it reads like خلد / ظلد احسین; may be a different or longer name
    f('نسرین فاطمہ', 'سید عباس رضا', 'حقانی'),
  ]), // VERIFY: father of this pair (the line starts at the box side near روشن, not under a name)
  m('فرحین'), // VERIFY: فرحین / فرزین, sex
  m('ملک'), // VERIFY: ملک, sex
])

const afzalHasan346 = m('افضل حسن', [
  m('کیسار'), // VERIFY: کیسار / کیساں
  m('کمیل'),
])

// مظاہر حسن (خسر مؤلف): six children
const mazaharHasan346 = m('مظاہر حسن', 'خسر مؤلف', [
  f('نسیم فاطمہ', 'سید ذاکر حسین مؤلف', 'دربار کلاں'),
  nasirHasan346,
  jawadHusain346,
  f('حسین فاطمہ', 'سید مسعود علی', 'کمالی پگڑی'), // VERIFY: mohalla (کمالی / سمالی پگڑی)
  majidHasan346,
  afzalHasan346,
])

// منتق حسن: seven children on one bar
const muntaqHasan346 = m('منتق حسن', [ // VERIFY: name reads منتق / منفق / منتخب
  f('حسین فاطمہ', 'سید منور حسن', 'کندرک'),
  m('تقی حسن', [m('وجیہہ حسن'), m('عاشور حسن'), f('عظمیٰ زہرا')]),
  m('زکی حسن', [m('ظہیر حسن'), m('وصی حسن'), f('ذکیہ خاتون'), f('نازیہ خاتون')]), // VERIFY: ذکیہ / زکیہ
  m('سمیع حسن', [m('رضا حسن'), f('نسیم فاطمہ')]), // VERIFY: سمیع / سمی
  m('نقی حسن'),
  m('مہدی حسن', 'لاپتہ'),
  m('عسکری حسن'),
])

const sabirHusain346 = m('صابر حسین', [
  f('مقبول خاتون', 'سید احمد حسین', 'شفاعت پوتہ'), // VERIFY: name (مقبول / مقصود) and husband's first name
  f('نگینہ خاتون', 'سید بدر الحسن', 'مکڑہ'), // VERIFY: mohalla (مکڑہ / تکڑہ)
  f('مطلوب خاتون', 'سید مظفر علی', 'کمالی پگڑی'), // VERIFY: name, husband, and mohalla
  mazaharHasan346,
  m('پسر', 'لاولد، فوت'), // VERIFY: the book gives no name, only "پسر لاولد فوت"
  muntaqHasan346,
])

const zaminHusain346 = m('ضامن حسین', 'دانشمندان', [
  f('حسینہ خاتون', 'سید (نام درج نہیں)', 'شفاعت پوتہ'), // VERIFY: husband's name is printed as dots
  sabirHusain346,
  f('سکینہ خاتون', 'سید ذاکر حسین', 'چھیوڑہ'),
]) // VERIFY: ضامن / شامی حسین

// ───────── left branch: ذاکر حسین ─────────

const nayabHasan346 = m('نایاب حسن', [
  f('الماس فاطمہ'), // VERIFY: الماس / لکاس
  m('ظفر حسن'),
  m('عامر حسن'),
])

const mustajabHusain346 = m('مستجاب حسین', 'پاک', [ // VERIFY: "پاک" after the name
  f('غنیم زہرا', 'سید محمد حسین'), // VERIFY: name and husband
  nayabHasan346,
  f('عاشور زہرا'),
  f('بنت زہرا', 'سید علی ازتقی'), // VERIFY: husband's name; line may belong to عاشور زہرا
  m('انتخاب حسین'),
  f('غیور زہرا', 'سید محبوب', 'تکڑہ'), // VERIFY: name and mohalla
])

const zakirHusain346 = m('ذاکر حسین', [ // VERIFY: a word "سید حسن" is printed above his name
  f('سکینہ خاتون', 'سید ظہور حسن', 'شفاعت پوتہ'), // VERIFY: husband's name
  f('امینہ خاتون', 'سید نبی حیدر', 'چاہ غوری'),
  f('تحسینہ خاتون', 'سید مصطفیٰ حسن', 'حقانی'),
  mustajabHusain346,
])

// ───────── root ─────────

const izadBakhsh346 = m('ایزد بخش', [zaminHusain346, zakirHusain346])


// ───────────────────────── page 345 ─────────────────────────
// ───────────────────────── chart 1: تحسین علی ─────────────────────────

const zulfiqarHusain345 = m('ذوالفقار حسین', [
  m('محمد صادق'),
  f('پروین فاطمہ'),
  f('شاہین فاطمہ'),
  m('محمد عاشق'),
])

const azadarHusain345 = m('عزادار حسین', [
  m('تہذیب حسن'),
  f('نسرین بانو'),
  m('محمد جعفر'),
  m('محمد باقر'),
  f('انیس بانو'),
])

const tahseenAli345 = onPage(345, m('تحسین علی', [
  zulfiqarHusain345,
  m('شفیق الحسن', 'لاولد'),
  f('شفیق بانو'), // VERIFY: first word reads like ستنق / شفیق / مشتاق
  f('نفیس بانو', 'سید شمیم حیدر', 'عثمان پور'), // VERIFY: first letter printed ل (نفیس / لفیس)
  azadarHusain345,
]))

// ───────────────────────── chart 2: ولی محمد ─────────────────────────

// -- محمد حسن branch (far left, top)

const mushtaqHusain345 = m('مشتاق حسین', [
  f('نسیم فاطمہ', 'سید سبط عباس', 'عثمان پور'),
  f('اقبال فاطمہ', 'سید عالم حسین', 'اگروٹیہ'), // VERIFY: mohalla spelling (اگروٹیہ / اگروتیہ)
  f('شمیم فاطمہ', 'سید سبط حسن', 'نوگانواں'), // VERIFY: mohalla reads لوگماتوان / نوگانواں
  f('نہال فاطمہ', 'سید مشیر حسین', 'اگروٹیہ'), // VERIFY: husband's name (مشیر / مبشر)
  f('حسن فاطمہ', 'سید افضل علی', 'سرسی'),
])

const muhammadHasan345 = m('محمد حسن', [
  mushtaqHusain345,
  m('مسلم حسین', 'لاولد'),
])

// -- علی حسین branch

const shakirHusain345 = m('شاکر حسین', [
  // two names on the top bar, whose right end turns down into a second bar holding علی مرتضیٰ
  f('ہاشمہ خاتون'),
  f('ناظمہ خاتون'),
  m('علی مرتضیٰ'),
])

const jawadHusain345 = m('جواد حسین', [
  f('فروہ خاتون'),
  f('سلمیٰ خاتون'),
])

// وحید حسن's four sons, one bar (father line comes down at the right of it)
const rizwanHaider345 = m('رضوان حیدر', [
  f('ناہید اختر'),
  m('طلوع عباس'), // VERIFY: first word reads طلز / طلوع / ظل
])

const ikramHaider345 = m('اکرام حیدر', [
  m('ارمان حیدر'),
  f('نگہت افروز'),
  m('عمران حیدر'),
])

// نسیم حیدر: two names on his own bar, whose right end turns down into a second bar (the other five)
const naseemHaider345 = m('نسیم حیدر', [
  f('عندلیب'),
  f('کہکشاں'),
  m('فیضان حیدر'),
  f('نثرم فاطمہ'), // VERIFY: name reads نثرم / نسرین
  m('شباب حیدر'),
  m('مہتاب حیدر'),
  f('شباب فاطمہ'), // VERIFY: شباب / شتاب
])

// منور حسین: a serpentine of three bars (top bar of two, its left end drops into a second bar of two,
// whose right end drops into a third bar of five). Each bar is listed right to left.
const munawarHusain345 = m('منور حسین', [
  f('نسیم فاطمہ'),
  f('نگین فاطمہ'),
  f('پروین فاطمہ'), // VERIFY: order inside the second bar (the bar is entered from its left end)
  m('حسن نواز'),
  m('جاوید رضا'),
  f('مرجبین فاطمہ'), // VERIFY: مرجبین / مہ جبین
  m('معطر رضا'),
  f('شائستہ بانو'),
  f('نگین فاطمہ'),
])

const waheedHasan345 = m('وحید حسن', [
  munawarHusain345,
  naseemHaider345,
  ikramHaider345,
  rizwanHaider345,
])

const aliHusain345 = m('علی حسین', [
  shakirHusain345,
  waheedHasan345,
  jawadHusain345,
  m('ذاکر حسین', 'لاولد'),
])

// -- عشرت حسین branch (right side)

// سرور حسین: top bar of two, whose right end drops into a second bar of five
const sarwarHusain345 = m('سرور حسین', [
  m('عشرت مہدی'),
  f('عشرت زہرا'),
  m('ولی محمد'),
  f('شاہدہ خاتون'),
  f('گوہر بانو'),
  m('نیر مہدی'),
  f('مسرت مہدی'),
])

const haider345 = m('حیدر', [
  f('شباب فاطمہ'), // VERIFY: شباب / شتاب
  f('مہتاب فاطمہ'),
  m('محمد منظر مہدی'),
  f('نواب فاطمہ'),
])

const muhammadAli345 = m('محمد علی', [
  f('قلب زہرا'),
  m('علی'),
  f('بینظر فاطمہ'), // VERIFY: spelling (بینظر / بے نظیر)
])

// انوار حسین: a long sibling list drawn on two bars (five, then two)
const anwarHusain345 = m('انوار حسین', [
  f('غدیر فاطمہ'),
  m('رضی عباس'),
  m('نذر عباس'),
  m('شجر عباس'),
  m('قمر عباس'),
  f('عرفان فاطمہ'),
  m('معین عباس'),
])

// جراح حسین's two big families, each on its own bar
const zarghamHusain345 = m('ضرغام حسین', [
  // VERIFY: first letter of the father's name (ضرغام / فرغام)
  f('عشرت بانو'),
  m('محمد حیدر'),
  m('ذیشان حیدر'), // VERIFY: ذیشان / ذیلشان
  m('کمال حیدر'),
  f('نوقیر فاطمہ'), // VERIFY: spelling
  m('شجر حیدر'),
  f('نعیم فاطمہ'),
])

const farzandHusain345 = m('فرزند حسین', [
  f('دلشاد فاطمہ'),
  m('فرمان حیدر'),
  f('خوشحال فاطمہ'),
  m('گوہر عباس'),
  f('زینب زہرا'),
  m('محمد ولی حیدر'),
  f('عظمت زہرا'),
])

const sabihHasan345 = m('شبیہ حسن', [m('محمد علی رضا')])
const qamarHaider345 = m('قمر حیدر', [m('قمر سلطان')]) // VERIFY: قمر سلطان

// جراح حسین: one long bar that runs round a box (سجاد حیدر sits inside it) and ends at the right margin
const jarrahHusain345 = m('جراح حسین', [
  zarghamHusain345,
  farzandHusain345,
  f('اعجاز فاطمہ', 'سید اسرار حسین', 'سنبھل'), // VERIFY: mohalla printed سنبل
  f('معراج فاطمہ', 'سید امر حسن', 'سرسی'), // VERIFY: husband's name (امر / امیر) and mohalla
  f('نایاب فاطمہ', 'سید سجاد حیدر', 'عثمان پور'),
  f('سرفراز فاطمہ', 'سید خورشید حیدر', 'سرسی'), // VERIFY: husband's name (خورشید / حور)
  f('نہال فاطمہ', 'سید امیر حیدر', 'پہندری'), // VERIFY: mohalla line is hard to read
  sabihHasan345,
  qamarHaider345,
])

// کرار حسین: bar of سجاد حیدر, joined at its right end to a bar above holding the other three
const karrarHusain345 = m('کرار حسین', [
  m('سعید حیدر'),
  m('تعلین حیدر'), // VERIFY: spelling (تعلین / تعلیم)
  m('سرکار حیدر'),
  m('سجاد حیدر'),
])

const zaminHusain345 = m('ضامن حسین', [
  karrarHusain345,
  m('شاہد حسین', 'لاولد'),
  m('زوار حسین', 'لاولد'),
  jarrahHusain345,
])

// محمد حسین's long vertical comes down the middle of the page to these four brothers
const muhammadHusain345 = m('محمد حسین', [
  zaminHusain345,
  m('اعجاز حسین'),
  m('قاسم حسین'),
  nisarHusain346,
])

// علی مستحسن: top bar of two daughters, whose right end drops into a second bar of four
const aliMustahsan345 = m('علی مستحسن', [
  f('افضال فاطمہ'),
  f('اسرار فاطمہ'),
  anwarHusain345,
  sarwarHusain345,
  haider345,
  muhammadAli345,
])

// عشرت حسین: top bar of three, whose right end drops into a second bar of two
const ishratHusain345 = m('عشرت حسین', [
  m('ریاض الحسن', 'لاولد'),
  m('اظہار الحسن', 'لاولد'),
  m('سراج الحسن', 'لاولد'),
  m('معراج الحسن', 'لاولد'),
  aliMustahsan345,
])

const waliMuhammad345 = onPage(345, m('ولی محمد', [
  ishratHusain345,
  muhammadHusain345,
  f('مہتاب فاطمہ', 'سید مہدی حسن', 'عثمان پور'),
  aliHusain345,
  f('زینب'),
  muhammadHasan345,
]))


// ───────────────────────── page 344 ─────────────────────────
// Book page 344 (usmanpur/aulad syed hasan bin syed aal e muhammad/page5.straight.jpg)
// Page header: عثمان پور عرف عباس نگر (مٹی بستی)  // VERIFY: the bracketed word in the header
//
// One chart on this page:
//   "صفحہ ۳۴۰  سید بینجا بن سید برہان علی"  -> root const benja344 (continued from page 340)
//   // VERIFY: root name reads بینجا (could be بنیجا / ہنجا)
//
// Not transcribed (not among these photos): ولی محمد (صفحہ ۳۴۵), تحسین علی (صفحہ ۳۴۵), محمد سعید (صفحہ ۳۴۶).
// They are left as childless leaves below.
// Wrapped sibling lists (box bottom edge / second bar) are listed top row first, then the second row.

// ───────────── کرامت علی -> سجاد علی branch ─────────────

const yusufHusain344 = m('یوسف حسین', [
  m('عباس حیدر'),
  m('یونس حسین'),
  m('محمد حسنین'), // VERIFY: حسنین / حسین
  f('اظہر فاطمہ'), // VERIFY: one name (اظہر فاطمہ) or two
])

const mazahirHusain344 = m('مظاہر حسین', [
  f('حجاب فاطمہ', 'سید سرکار احمد'),
  f('شان فاطمہ', 'سید منتظر', 'اعوان پور'),
  m('سرکار حیدر'),
])

const shakirHusain344 = m('شاکر حسین', [
  f('انیس فاطمہ'),
  m('کاظم حسین', 'عرف منتظر ہادی', [
    m('مظہر ہادی'),
    m('ندیم حیدر'),
    f('اعجاز فاطمہ'),
  ]),
  f('کنیز فاطمہ'),
])

const shafiulHasan344 = m('شفیع الحسن', [
  // Six children on a wrapped bar: the first two on the top bar, the other four on the lower bar (right to left)
  m('ثناء الحسن'),
  m('ضیاء الحسن', [m('حسن ابراہیم'), m('حسن صالح')]),
  m('سخاء الحسن', [f('بضعت زہرا'), m('علی افضل'), f('عصمت زہرا')]), // VERIFY: سخاء (سخا / سمیع), بضعت
  m('ذکاء الحسن'),
  m('شفاء الحسن', [m('محمد اجمل'), m('محمد اقدس'), m('محمد اکمل'), f('تنویر فاطمہ')]),
  m('شجاع الحسن', [
    f('رباب فاطمہ'),
    m('حسن ہادی'),
    f('رئیس فاطمہ'), // VERIFY: رئیس / ریس
    m('سجاد علی'),
  ]),
]) // VERIFY: that the lower bar belongs to the same list as ثناء/ضیاء (wrapped bar)

const hadiHasan344 = m('ہادی حسن', [shafiulHasan344, shakirHusain344, mazahirHusain344])

const bashirHasan344 = m('بشیر حسن', [yusufHusain344])

// ───────────── حیدر حسن's seven children ─────────────

const gulHusain344 = m('گل حسین', [f('عشرت بانو'), m('اقبال حیدر'), f('نزہت بانو')])

const nasirHusain344 = m('ناصر حسین', [
  // wrapped bracket: top bar امیر / سجاد, second bar نازک / سرفراز (right to left)
  m('امیر حیدر'),
  m('سجاد حیدر'),
  f('نازک بانو', 'سید محمد حیدر', 'عثمان پور'),
  m('سرفراز حیدر', [
    f('گل زہرا'),
    f('روح زہرا'),
    m('امان حیدر'),
    m('زمان حیدر'),
  ]),
]) // VERIFY: wrapped bracket order (امیر, سجاد, نازک بانو, سرفراز حیدر)

const naseerHusain344 = m('نصیر حسین', [
  // wrapped bracket: top bar محمد کوثر / عذرا بانو, then the lower bar runs from the left corner
  m('محمد کوثر'),
  f('عذرا بانو'),
  m('محمد محفوظ'),
  f('نیاز بانو', 'سید راغب علی المرعشی'),
]) // VERIFY: wrapped bracket order of the lower two, and the husband's name

const zafarHaidar344 = m('ظریف حیدر') // VERIFY: ظریف / ظلیف / طالب

const muhammadAbbasSon344 = m('محمد عباس', [m('نعیم حیدر')])

const muhammadAbbasHaidar344 = m('محمد عباس', [
  muhammadAbbasSon344,
  f('خورشید زہرا', 'سید قمر عباس', 'نوگانواں'), // VERIFY: mohalla (نوگانواں / نوماناں)
  f('شبیہ زہرا', 'سید محمد حسین', 'نور پور'),
  zafarHaidar344,
])

const ibnHaidar344 = m('ابن حیدر', [
  m('ثمان حیدر'), // VERIFY: ثمان / ثامن / نثار
  m('محمد حیدر'),
  m('وصی حیدر'),
])

const anwarHaidar344 = m('انوار حیدر', [
  m('فہیم حیدر'),
  m('وسیم حیدر'), // VERIFY: name cut off at the left edge of the photo (reads وسیم...); more children may be cut off
])

const muhammadYusuf344 = m('محمد یوسف', [
  ibnHaidar344,
  m('قمر حیدر'),
  f('پھول بانو', 'سید پرویز حیدر', 'جلالی'), // VERIFY: جلالی is the husband's place or surname
  anwarHaidar344,
])

const haiderHasan344 = m('حیدر حسن', [
  gulHusain344,
  f('فاطمہ خاتون', 'سید ذوالفقار حسین', 'کولی'), // VERIFY: husband's name and mohalla (کولی)
  f('شمیم فاطمہ', 'سید تاجدار حسین', 'نور پور'),
  muhammadAbbasHaidar344,
  naseerHusain344,
  nasirHusain344,
  muhammadYusuf344,
])

const sajjadAli344 = m('سجاد علی', [
  muhammadSaeed346, // book: صفحہ ۳۴۶ (not among these photos)
  m('حسن', [f('کنیز زہرا', 'سید یوسف حسین', 'عثمان پور')]),
  bashirHasan344,
  hadiHasan344,
  haiderHasan344,
])

const karamatAli344 = m('کرامت علی', [sajjadAli344])

// ───────────── امام علی branch ─────────────

const aliQasim344 = m('علی قاسم', [
  // wrapped bracket drawn inside a box: top bar رباب/شباب, lower bar آل زہرا ... نیر عباس
  f('رباب زہرا'),
  f('شباب زہرا'),
  f('آل زہرا'),
  m('علی عباس'),
  m('بدر عباس'),
  m('نیر عباس'),
]) // VERIFY: that the lower bar is علی قاسم's wrapped continuation, and its order (could run right to left)

const muhammadQasim344 = m('محمد قاسم', [
  // wrapped bracket: five on the top bar, then حسن / مظہر / اسد عباس on the lower bar
  f('ریحانہ فاطمہ'),
  m('دلشاد عباس'), // VERIFY: دلشاد / دلشان
  m('قیصر عباس', [m('قیصل عباس'), m('عدیل عباس')]), // VERIFY: قیصل / فیصل
  f('پروین فاطمہ', 'سید قمر عباس'),
  f('شبانہ فاطمہ'),
  m('حسن عباس'),
  m('مظہر عباس'),
  m('اسد عباس'),
]) // VERIFY: that the lower three belong to the same wrapped list

const muhammadAbbasTamkin344 = m('محمد عباس', [
  f('مہتاب فاطمہ'),
  m('ریاض مہدی', [m('علی مہدی'), f('حنا مہدی')]),
  m('اعجاز مہدی'),
  f('رخسانہ بانو'),
])

const tamkinHusain344 = m('تمکین حسین', [
  muhammadQasim344,
  f('فیاض بانو', 'سید آل حسن', 'سنبھل'),
  muhammadAbbasTamkin344,
  m('غلام عباس', 'لاولد'),
  aliQasim344,
])

const ibnHasan344 = m('ابن حسن', [
  m('محمد زکی', 'لاولد'),
  m('نذر حسن'),
  m('سلطان حسین', [m('عارف حسین'), m('طالب حسین'), m('آصف اختر'), m('طاہر حسین')]),
  f('امینہ بانو'),
])

const mahdiHasan344 = m('مہدی حسن', [
  tamkinHusain344,
  tahseenAli345, // book: صفحہ ۳۴۵ (not among these photos)
  ibnHasan344,
  m('محمد حسین', 'لاولد'),
])

const wafadarHusain344 = m('وفادار حسین', [
  m('محب حسنین'), // VERIFY: حسنین / حسین
  m('ابن عباس'),
  m('محمد اصغر'),
  m('محب ثقلین'),
  m('علی محمد'),
  m('حسین حیدر'),
])

const mukhtarHusain344 = m('مختار حسین', [
  f('خورشید فاطمہ'),
  m('رضی عباس'),
  wafadarHusain344,
  m('وصی عباس'),
])

const murtazaHasan344 = m('مرتضیٰ حسن', [
  m('فیاض حسین', 'لاولد'),
  f('سیما خاتون', 'سید رضا حسن', 'بیلنی'), // VERIFY: first name (سیما / سمیحہ), husband and mohalla
  mukhtarHusain344,
])

const aliMuhammad344 = m('علی محمد', [murtazaHasan344, mahdiHasan344])

const imamAli344 = m('امام علی', [
  aliMuhammad344,
  waliMuhammad345, // book: صفحہ ۳۴۵ (not among these photos)
  m('معشوق علی', [f('حمیدہ خاتون', 'سید ابوالحسن', 'قاضی زادہ')]),
])

// ───────────── root ─────────────

// صفحہ ۳۴۰ سید بینجا بن سید برہان علی
const benja344 = onPage(344, m('بینجا', [imamAli344, karamatAli344]))


// ───────────────────────── page 343 ─────────────────────────
// Kausar-ul-Ansab (1999), book page 343 (printed "343"): عثمان پور عرف عباس نگر محلہ گشتیان
// Charts on this page:
//   1. صفحہ ۳۴۲  سید اکبر علی بن سید اصغر علی      (root const: akbarAli343)
//   2. صفحہ ۳۴۲  سید وزیر علی بن سید کبیر علی      (root const: wazirAli343)
// Both charts are continuations of page 342. Nothing on this page points to another page.

// ───────────────────────── chart 1: اکبر علی بن اصغر علی ─────────────────────────

const muzaffarAli343 = m('مظفر علی', [
  m('ضیاء الحسن'),
  f('سرتاج بانو'),
  m('شجاع الحسن'),
  f('ممتاز بانو'),
  m('غضنفر علی'),
  f('ناہید بانو'),
  f('عظمیٰ بانو'),
  m('حیدر علی'),
]) // VERIFY: ممتاز / عظمیٰ spellings; the bar has exactly 8 arrows

const ansarAli343 = m('انصار علی', [m('حارث'), m('جنید'), m('انس'), m('عفان')])

const qamarulHasan343 = m('قمر الحسن', [f('افشاں کمال')]) // VERIFY: افشاں کمال printed without سید, taken as a daughter

const akbarAli343 = onPage(343, m('اکبر علی', [
  m('علی حسن'),
  m('مطلوب علی'),
  muzaffarAli343,
  f('کشور جہاں', 'سید حفیظ احمد', 'بٹوال'), // VERIFY: husband's first name (حفیظ)
  ansarAli343,
  f('حجاب بانو', 'سید مشاہد علی', 'دربار کلاں'),
  m('منصور علی'), // VERIFY: منصور / مصور
  qamarulHasan343,
]))

// ───────────────────────── chart 2: وزیر علی بن کبیر علی ─────────────────────────

// غیور حسن: eight children on one long bar
const taseefHasan343 = m('توصیف حسن', [
  m('نذر توصیف'), // VERIFY: printed without سید; read نذر / نذیر
  m('اشہر توصیف'), // VERIFY: printed without سید; first word اشہر / اثیر
])

const tahawwurJamal343 = m('تہور جمال', [m('اسد جمال'), f('فرحت جمال'), m('اطہر جمال')]) // VERIFY: فرحت جمال printed without سید

const ghayoorHasan343 = m('غیور حسن', [
  f('نجمہ قمر'),
  taseefHasan343,
  m('تنویر حسن'),
  tahawwurJamal343,
  f('اسماء اختر', 'سید شان علی', 'گشتیاں'),
  f('کلثوم اختر', 'سید منظر علی', 'گشتیاں'), // VERIFY: husband's name (منظر / مظفر)
  m('معصوم اختر'), // VERIFY: printed with سید although the name sounds female
  m('توقیر حسین'),
])

const zameerAli343 = m('ضمیر علی', [ghayoorHasan343])

const jafarAli343 = m('جعفر علی', [
  f('مبشرہ خاتون', 'سید محبوب سبحانی', 'کنٹھولی'), // VERIFY: husband's name and mohalla
])

// ذاکر علی: four children
const tasawwurHasan343 = m('تصور حسن', [
  f('گلناز بانو'),
  f('سارہ خاتون'),
  f('گلستان بانو'),
  m('محمد اجمل'),
]) // VERIFY: first letter of تصور (تصور / نصور)

const zaheerHasan343 = m('ظہیر حسن', [
  f('ذہین فاطمہ', 'سید اسلم حسین', 'گشتیاں'),
  m('مہتاب اختر'),
]) // VERIFY: ظہیر / ظہر

const zafeerHasan343 = m('ظفیر حسن', [
  m('اسد جمال'),
  f('کوثر نسیم'),
  m('حسن جمال'),
  m('ارشد جمال'),
  f('جوہر نسیم'),
])

const zakirAli343 = m('ذاکر علی', [
  tasawwurHasan343,
  f('مقدسہ خاتون', 'سید مشرف حسین', 'گشتیاں'),
  zaheerHasan343,
  zafeerHasan343,
])

const mazharAli343 = m('مظہر علی', [
  f('مدثرہ خاتون', 'سید ارمان علی', 'احمد نگر'), // VERIFY: name (مدثرہ) and husband (ارمان)
  f('مزملہ خاتون', 'سید اختر حسین', 'گشتیاں'),
])

// صفدر علی: four children
const mushrifHusain343 = m('مشرف حسین', [m('علی اختر'), f('نشاط فاطمہ'), m('ماہ کامل')])

const munawwarHusain343 = m('منور حسین', [
  m('جاوید اختر'),
  f('ماہ ناز اختر'),
  m('مسعود اختر'),
  f('شہناز اختر', 'سید اختر حسین'),
  f('شہتاج اختر'),
])

const safdarAli343 = m('صفدر علی', [
  f('کنیز فاطمہ', 'سید عرفان حسن', 'گشتیاں'),
  mushrifHusain343,
  f('کنیز زہرا', 'سید نہال حسن', 'سہارنپور'), // VERIFY: mohalla (سہارنپور / سیارپور)
  munawwarHusain343,
])

// باقر علی: drawn in a box. The top bar of the box holds two children and the box's bottom edge is a second bar
// with five more; read as one sibling list, top row first (each row right to left).
const akhtarHusain343 = m('اختر حسین', [
  f('حسین فاطمہ'),
  f('نسیم اختر', 'سید طفر حسن', 'گشتیاں'), // VERIFY: husband's name (طفر)
  f('شاہین فاطمہ'),
  f('مرجین اختر'), // VERIFY: spelling
  m('منظر حسین'),
  m('عارف حسین'),
])

const anwarHusain343 = m('انور حسین', [f('شگفتہ ناز'), m('شارق حسین'), f('گل رعنا')])

const tahirHusain343 = m('طاہر حسین', [m('ماہر حسین'), f('نازیہ ارم'), m('اظہر حسین')])

const nadirHusain343 = m('نادر حسین', [
  m('شہزادہ خرم'), // VERIFY: second word (خرم / قیرم)
  m('محمد شکیب'),
  m('شہزادہ خاور'),
  m('محمد شعیب'),
])

const baqirAli343 = m('باقر علی', [
  f('مکرمہ خاتون', 'سید توقیر حسین', 'گشتیاں'), // box top bar
  m('مظاہر حسین'), // box top bar
  akhtarHusain343, // box bottom bar from here
  anwarHusain343,
  f('معظمہ خاتون', 'سید صغر احمد کاظمی'), // VERIFY: husband's name; no mohalla printed
  tahirHusain343,
  nadirHusain343,
]) // VERIFY: that the two rows of the box are one sibling list (and the right-to-left order across them)

const wazirAli343 = onPage(343, m('وزیر علی', [
  zameerAli343,
  jafarAli343,
  zakirAli343,
  mazharAli343,
  m('صابر علی'),
  f('رضیہ خاتون', 'سید امجد علی', 'حال احمد نگر'),
  safdarAli343,
  m('اظہر علی'),
  baqirAli343,
]))


// ───────────────────────── page 342 ─────────────────────────
// Book page 342 (Usmanpur alias Abbas Nagar, "nai basti"), photo usmanpur/aulad syed hasan bin syed aal e muhammad/page3
// Three charts on this page:
//   1. tahirHusain342   heading: صفحہ ۳۴۱ سید طاہر حسین بن سید مرتضیٰ حسین   (top)
//   2. kabirAli342      heading: صفحہ ۳۴۰ سید کبیر علی بن سید مبارک علی       (middle)
//   3. azeemAli342      heading: صفحہ ۳۴۰ سید عظیم علی بن سید داؤد            (bottom)
// Leaves continued on other pages: وزیر علی (صفحہ ۳۴۳), اکبر علی (صفحہ ۳۴۴).

// ───────────── chart 1: طاہر حسین بن مرتضیٰ حسین ─────────────

const zairHusain342 = m('زائر حسین', [
  m('حیدر مہدی'),
  f('قمر بانو'),
  m('حسن مہدی'),
  m('زوار مہدی'),
  m('محمد مہدی'),
  f('وقار بانو'),
  m('وقار مہدی'),
  m('عروج مہدی'),
])

const mahirHusain342 = m('ماہر حسین', [
  f('نسیم زہرا'),
  m('انور خورشید'), // VERIFY: انور / انوار
  f('رفعت زہرا'),
  m('ناضل حسین'), // VERIFY: ناضل / فاضل
  f('شمیم زہرا'),
  m('حضور مہدی'),
  f('فہیم زہرا'),
  m('کمال حیدر', [m('وسیم اصغر')]),
])

const zafarAbbas342 = m('ظفر عباس', [
  m('ظہیر عباس'),
  m('قمر عباس'),
  f('نشاط زہرا'), // VERIFY: printed لشاط زہرا, probably نشاط
])

const tahirHusain342 = onPage(342, m('طاہر حسین', [
  zairHusain342,
  mahirHusain342,
  f('جعفرہ خاتون', 'سید غلام رسول', 'بکنالہ'),
  m('علمدار حسین'),
  f('عامرہ خاتون', 'سید شبیہ الحسن', 'مجاپوتہ'),
  m('ناصر حسین'),
  f('ماہرہ خاتون', 'سید منظر الحسن', 'شفاعت پوتہ'),
  m('عزادار حسین'),
  zafarAbbas342,
  f('باہرہ خاتون'),
]))

// ───────────── chart 2: کبیر علی بن مبارک علی ─────────────

const wisalMuhammad342 = m('وصال محمد', [
  m('حسین محمد', [f('تنظیم زہرا')]),
  f('حسین فاطمہ', 'تولا'), // VERIFY: husband reads only تولا, no سید
  f('عقیل فاطمہ'),
])

const hilalMuhammad342 = m('ہلال محمد', [
  f('نعیم زہرا', 'سید منظور قمر', 'دھولڑی'), // VERIFY: mohalla (دھولڑی / دھولری)
  f('عظیم زہرا'),
  f('شاہین', 'سید منشا حیدر'), // VERIFY: husband's name (منشا / منشاء)
  m('حسن عباس'),
  m('حسین عباس'),
  m('سعید عباس'),
])

// نہال محمد: five children on a top bar, whose left end drops to a second bar with two more
const nihalMuhammad342 = m('نہال محمد', [
  f('شاداب بانو'), // VERIFY: printed شناداب / شاداب
  f('رباب بانو'),
  m('محمد جعفر'),
  f('اسماء بانو'),
  f('شباب بانو'),
  m('موسیٰ رضا'), // VERIFY: second row of the same bar (wrapped siblings), not children of شباب بانو
  m('محمد صادق'), // VERIFY: second row of the same bar (wrapped siblings)
])

const aleAhmad342 = m('آل احمد', [wisalMuhammad342, hilalMuhammad342, nihalMuhammad342])

const nasirAli342 = m('ناصر علی', [
  m('محمد حسن', [f('طیبہ خاتون', 'سید محسن حسین', 'سٹھی')]), // VERIFY: husband's name and mohalla (سٹھی / سنبھی)
  f('میمونہ خاتون', 'سید سردار حسن', 'سدو'), // VERIFY: husband's name (سردار / سرور) and mohalla (سدو)
  aleAhmad342,
])

const kabirAli342 = onPage(342, m('کبیر علی', [
  nasirAli342,
  m('محمد حسین', [m('حسین'), m('مہربان حسین')]),
]))

// ───────────── chart 3: عظیم علی بن داؤد ─────────────

const tahirAliSon342 = m('طاہر علی', [
  f('شگفتہ بانو', 'سید خورشید اختر', 'کنتولی'),
  f('نسرین ناز'),
  m('ماجد حسین'),
  f('شاذیہ ناز'),
  f('آفرین ناز'),
  m('مظاہر حسین'),
  f('گلستان ناز'),
  f('صابیہ ناز'),
]) // VERIFY: one long bar of eight under طاہر علی; the right three (شگفتہ، نسرین، ماجد) might hang from ضمیر علی's sons instead

const nasirAliSon342 = m('ناصر علی', [
  f('مبینہ خاتون', 'سید مختار حسین', 'سرائے کہنہ'), // VERIFY: mohalla (کہنہ / کھنہ)
  f('مشکورہ خاتون', 'سید محمد ایوب', 'پیلو وال گلی'),
  tahirAliSon342,
  f('مومنہ خاتون', 'سید بدر الحسن', 'افغانان'),
  m('شاکر علی', 'لاولد'),
])

const nasirAliKabirSon342 = m('نصیر علی', [m('طاہر علی', 'لاولد'), nasirAliSon342])

const azeemKabir342 = m('کبیر علی', [
  wazirAli343,
  nasirAliKabirSon342,
  m('شبیر علی'),
  m('نظیر علی', [m('تحسین علی', 'لاولد')]),
])

const zameerAli342 = m('ضمیر علی', [
  f('کنیزہ خاتون'),
  m('علی معطر'), // VERIFY: معطر / معظم
  f('سکینہ خاتون', 'سید شاکر علی', 'گشتیاں'),
  m('علی منتظر'),
])

const bashirAli342 = m('بشیر علی', [
  zameerAli342,
  f('تسلیم النساء', 'سید مظہر علی', 'گشتیاں', 'زوجہ ثانی'),
])

const afsarAli342 = m('افر علی', [
  m('اسلم حسین', [f('الماسی زہرا'), m('وسیم اکرم')]),
  f('رضیہ خاتون', 'فرحان علی', 'کنتولی'), // VERIFY: husband printed without سید
]) // VERIFY: name reads افر / افسر

const asgharAli342 = m('اصغر علی', [
  afsarAli342, // VERIFY: drawn at the right end of the bar, one step lower, so taken as the eldest
  f('شاہدہ خاتون', 'سید مظہر علی', 'گشتیاں'),
  f('سجیلہ خاتون', 'سید رئیس احمد', 'کنتولی'), // VERIFY: husband's name
  f('سیدہ خاتون', 'سید ظہیر حسن', 'گشتیاں'), // VERIFY: husband's name
  akbarAli343,
])

const ameerAli342 = m('امیر علی', [
  asgharAli342,
  m('منظور علی'),
  m('جعفر علی'),
  bashirAli342,
])

const azeemAli342 = onPage(342, m('عظیم علی', [ameerAli342, azeemKabir342]))


// ───────────────────────── page 341 ─────────────────────────
// Book page 341 (printed header "341", عثمان پور عرف عباس نگر حال نئی بستی), photo usmanpur/aulad syed hasan bin syed aal e muhammad/page2.
// Three charts, each headed "صفحہ ۳۴۰" (continued from page 340):
//   1. صفحہ ۳۴۰ سید سبط حسن بن سید مظہر علی      -> sibtHasan341      (top; heading father reads like مشرف/مظہر علی)
//   2. صفحہ ۳۴۰ سید اکبر حسین بن سید منظور علی   -> akbarHusain341
//   3. صفحہ ۳۴۰ سید کلو بن سید بہتو              -> kalloo341
// Continued elsewhere: طاہر حسین is marked "صفحہ ۳۴۲" (left childless here).

// ───────────────────────── chart 3: کلو بن بہتو ─────────────────────────

// علی حسن (son of گھیس علی): four children drawn on two joined bars (top bar right to left, then احمد حسن)
const aliHasan341 = m('علی حسن', [
  f('سکینہ خاتون', 'سید ہادی حسن', 'عثمان پور'),
  f('امتیاز النساء', 'سید مرتضیٰ حسین', 'نئی بستی'),
  m('محمد حسنین', [m('رضی حسن', 'لاولد'), m('علی جعفر')]), // VERIFY: علی جعفر has a note "(بریلی چلے گئے)" and no لاولد
  m('احمد حسن', 'لاولد'),
])

// رمضان علی: three sons
const khurshidAli341 = m('خورشید علی', [
  m('رضا حسن', [
    f('ارمان بانو', 'سید نسیم حیدر', 'مظفر نگر'),
    m('پیمبر رضا'),
    f('حسین بانو'),
    // قائم رضا: four children on one bar
    m('قائم رضا', [
      f('زیبی بانو'),
      m('شاہدار رضا'), // VERIFY: reading (شاہدار / شاذر)
      f('بے بی بانو'),
      m('باقر رضا'),
    ]),
    m('مہدی رضا'),
    m('علی رضا', [f('نغمہ بانو'), f('صبا بانو')]),
  ]),
  f('ماجدہ خاتون', 'سید صغیر حسن', 'نئی بستی'),
  f('عائدہ خاتون', 'سید طاہر حسین', 'نئی بستی'),
  m('مطیر حسن', [f('نازنین فاطمہ', 'سید نسیم'), m('عزادار حسین', [m('ضیغم رضا')])]),
])

// انوار حسین (son of مرتضیٰ حسین): seven children on two joined bars
const anwarHusain341 = m('انوار حسین', [
  m('محمد عباس', 'لاولد'),
  m('منظور عباس', 'مفقود الخبر'), // VERIFY: note reads مفقود الخبر
  f('زائرہ بانو', 'سید زائر حسین', 'نئی بستی'),
  f('سکینہ خاتون', 'سید شان علی', 'قاضی زادہ'),
  f('نعیم زہرا', 'سید تصور حسین', 'دانشمندان'), // VERIFY: تصور
  m('منور عباس', [f('رفعت زہرا')]),
  m('علی عباس', [m('محمد علی'), f('ترنم زہرا')]),
])

// مبارک حسین -> نقی حسن -> نذر عباس: five children on one long bar
const mubarakHusain341 = m('مبارک حسین', [
  m('نقی حسن', [
    m('نذر عباس', [
      f('نظمی بانو'), // VERIFY: reading
      f('تبسم بانو'),
      f('حنا بانو'),
      m('کاشف عباس'),
      f('ہما بانو'),
    ]),
  ]),
])

// مرتضیٰ حسین: four children
const murtazaHusain341 = m('مرتضیٰ حسین', [
  mubarakHusain341,
  tahirHusain342, // marked "صفحہ ۳۴۲": family continues there
  f('حسینہ خاتون', 'سید ذکی امام زیدی', 'جڑودی'), // VERIFY: mohalla (جڑودی / جٹ ودی)
  anwarHusain341,
])

const kalloo341 = onPage(341, m('کلو', [
  // منیر علی: three children
  m('منیر علی', [
    m('قاسم علی', [m('میر علی', [m('نجد حسن', 'لاولد')])]), // VERIFY: last name (نجد / لحد / نجف حسن)
    m('بنی بخش', 'لاولد'),
    m('قرب علی', [
      f('منیر النساء', 'سید رمضان علی', 'عثمان پور'),
      m('یاد علی', [
        f('ممتاز النساء', 'سید سراج حسین', 'احمد نگر'),
        murtazaHusain341,
        f('کنیز النساء', 'سید شبیر علی', 'نئی بستی'),
      ]),
      f('صغریٰ خاتون'),
    ]),
  ]),
  m('کبیر علی', [
    m('حمایت علی', [m('گلزار علی')]),
    m('امانت علی', [m('کرامت علی')]),
  ]),
  m('وزیر علی', [f('رفعت زہرا')]),
  m('اکبر علی', [
    m('دلاور علی', [
      m('رمضان علی', [
        m('شبیر علی', [
          f('حاجرہ خاتون', 'سید آل احمد', 'نئی بستی'),
          f('سائرہ خاتون', 'سید انوار احمد', 'نئی بستی'),
          m('صغیر حسن', 'لاولد'),
        ]),
        m('ارمان علی'),
        khurshidAli341,
      ]),
      m('اظہر علی'),
      m('عالم علی'),
      m('امیر علی'),
      m('گھیس علی', [aliHasan341]),
    ]),
  ]),
]))

// ───────────────────────── chart 2: اکبر حسین بن منظور علی ─────────────────────────

const akbarHusain341 = onPage(341, m('اکبر حسین', [
  m('نفیس الحسن', [
    m('محمد اکبر', [m('سکندر عباس')]),
    f('بنت فاطمہ'),
    f('قمر بانو', 'سید مہتاب حیدر', 'سرسی'),
    f('مبارک بانو'),
    f('حسین بانو'),
  ]),
  f('آمنہ خاتون', 'سید اسماعیل حسین', 'پہندیڑی'),
  m('اختر حسین', 'لاولد'),
  f('سیدہ خاتون', 'سید کرار حسین', 'پہندیڑی'),
  f('ثامنہ خاتون', 'سید منزل حسین', 'پہندیڑی'),
  m('ظفر حسین', [
    f('نایاب فاطمہ', 'سید سرکار حیدر'), // VERIFY: husband's name (سرکار / سرفراز / سرنمار حیدر)
    f('نیاز فاطمہ', 'سید آل نبی'),
  ]),
  m('شمس الحسن', [m('محمد کوثر', [f('شباب فاطمہ'), f('شوزینہ کوثر')])]), // VERIFY: شوزینہ
]))

// ───────────────────────── chart 1: سبط حسن بن مظہر علی ─────────────────────────

const sibtHasan341 = onPage(341, m('سبط حسن', [
  m('ابن حیدر', [
    m('وسیم حیدر'),
    f('بہار فاطمہ'),
    m('عظیم حیدر'),
    f('ترنم زہرا'),
  ]),
  m('بنی حیدر'),
  m('افروز حیدر'),
  f('فرحان فاطمہ', 'سید انوار حسین', 'عثمان پور'),
  m('شان حیدر', [f('تبسم زہرا')]),
  f('کاظمہ خاتون', 'سید علی مہتاب', 'اکروٹہ'), // VERIFY: husband (مہتاب) and mohalla (اکروٹہ / اکرو بٹہ)
  f('تسنیم زہرا'),
  f('نازنین زہرا'),
  m('علی حیدر', [f('عفت زہرا'), m('بضاعت عباس'), f('شاد فاطمہ')]),
]))


// ───────────────────────── page 340 ─────────────────────────
// Kausar-ul-Ansab (1999), book page 340: عثمان پور عرف عباس نگر حال لکڑہ
// Photo: usmanpur/aulad syed hasan bin syed aal e muhammad/page1.straight.jpg
//
// ONE chart on this page, no "صفحہ N" heading (khandan root):
//   - A boxed chain of single names from حضرت امام علی نقی down to ابوالفضل (row 1, right to left), continuing on
//     row 2 left to right: نظام احمد گنج روال → ... → آل محمد → حسن.  (const imamAliNaqi340 is the root.)
//   - سید حسن then has two sons, فاضل (right) and عبدالخالق (left), and the rest of the page hangs from them.
// The chain is written as nested single children. In row 2 the arrows point right, so the descent is
// نظام احمد → محمد عبداللہ → علاء الدین → نور → چاند → حسین → قران الدین → آل محمد → حسن.
//
// Continued elsewhere (onPage stubs, childless here): کلو (341), بنجا (344), عظیم علی (342), کبیر علی (342),
// سبط حسن (341), اکبر حسین (341).
// A wrapped sibling row: اشتیاق حسین's fifth child نعیم زہرا hangs from the L-shaped line below the bar;
// رمضان علی's four children sit on a box (top row) plus the bar under it.


// ───────── branch of فاضل (right) ─────────

// عاشق حسین's three sons
const bahadurAli340 = m('بہادر علی', [m('ننھا', [m('تسلیم حسین', 'لاولد')])]) // VERIFY: ننھا

const amanatAli340 = m('امانت علی', [m('نذیر حسین', [m('حسین علی', 'لاولد')])])

const ashrafAli340 = m('اشرف علی', [
  m('شبیر علی', [m('ریاض علی'), m('رضا علی')]),
  m('سراج علی', [m('قاسم حسین', 'لاولد'), m('مومن حسین'), m('حسن', 'لاولد')]),
])

const farhatAli340 = m('فرحت علی', [m('اکبر علی')])

const qadirAli340 = m('قادر علی', [
  m('نادر علی', [m('صابر حسین'), m('ناصر حسین')]),
  m('صادق علی'),
])

const yaseenHusain340 = m('یٰسین حسین', [ashrafAli340, farhatAli340, qadirAli340]) // VERIFY: یٰسین / لیسن

const ashiqHusain340 = m('عاشق حسین', [bahadurAli340, amanatAli340, yaseenHusain340])

const kallu340 = kalloo341 // VERIFY: book page marker reads 341 (could be 342)

const thoo340 = m('ٹھو', [kallu340, ashiqHusain340]) // VERIFY: ٹھو / تھو

const fazil340 = m('فاضل', [
  m('عبداللہ', [m('عنایت اللہ', [thoo340])]),
])

// ───────── branch of عبدالخالق (left) ─────────

// عثمان علی: a single line of descent ending at بنجا
const usmanAli340 = m('عثمان علی', [
  m('محسن علی', [m('اصغر علی', [m('حامد علی', [m('برہان علی', [benja344])])])]), // VERIFY: بنجا / بینجا
])

// ----- ancestors of منظور علی's family: رحمن علی → محفوظ علی → معظم علی → دائم علی -----

// افتخار حسین (منظور علی's eldest son): four children
const iftikharHusain340 = m('افتخار حسین', [
  m('اشتیاق حسین', [
    f('شمیم زہرا'),
    f('بنت زہرا', 'سید اعجاز حیدر', 'لکڑہ'), // VERIFY: husband's mohalla (لکڑہ)
    m('علی عباس'),
    f('نسرین زہرا'),
    f('نعیم زہرا'), // wrapped sibling row (L-line under the bar)
  ]),
  f('بیوہ خاتون', 'سید محبوب علی', 'چاہ شور لکڑہ', 'زوجہ ثانی'), // VERIFY: first word reads بیوہ / سیدہ
  m('انتظار حسین', [
    f('نہال فاطمہ', 'سید محمد مہدی زیدی', 'میرٹھ'), // VERIFY: mohalla printed مبرٹھ
    m('محمد', [
      f('غیور فاطمہ'), // VERIFY: غیور / عینور
      m('منظور علی'),
      f('عنبرین زہرا'),
    ]),
    m('محمد اصغر'),
    m('بضاعت علی', [f('افتخار فاطمہ')]),
  ]),
  m('علی', [
    m('رضی', [m('در منثم')]), // VERIFY: the child's name (درمنثم / درمنشم)
    f('مرجین فاطمہ'), // VERIFY: مرجین / مہ جبین
    m('تقی'),
    f('حسین فاطمہ'),
    m('محمد علی'),
    f('نجم السحر'), // VERIFY: printed without سید; may be a woman or a man
  ]),
])

const tajammulHusain340 = m('تجمل حسین', [
  m('انصار حسین', [
    m('شجاع الحسن', [
      m('شباب الحسن'),
      m('سراج الحسن', [m('انصار مہدی'), m('شاداب حیدر')]), // VERIFY: انصار مہدی
      f('معراج فاطمہ', 'سید فضل حسین', 'نوگانواں'),
      f('ارشاد فاطمہ', 'سید خورشید حیدر', 'قاضی زادہ'),
      m('وسیم حسن'),
    ]),
  ]),
  f('عقیلہ خاتون', 'سید علی مستحسن', 'عثمان پور'), // VERIFY: husband's name (علی مستحسن / متحسن)
  f('سکینہ خاتون', 'سید امیر حسن زیدی', 'نوگانواں'),
])

const manzoorAli340 = m('منظور علی', [
  iftikharHusain340,
  tajammulHusain340,
  m('علی حمزہ', 'لاولد'),
  akbarHusain341,
])

// قائم علی: کبیر علی (right, whose son منظور علی has the big family) then اولاد علی (left)
const qaimAli340 = m('قائم علی', [
  m('کبیر علی', [manzoorAli340]),
  m('اولاد علی', [
    m('آل نبی', [
      m('مشرف علی', [m('ریاض الحسن', 'لاولد'), sibtHasan341]), // VERIFY: مشرف / شرف
      m('اشرف علی'),
    ]),
  ]),
])

const mahboobAli340 = m('محبوب علی', [m('وزیر علی', [m('شبیر علی')])])

const muhammadAli340 = m('محمد علی', [
  m('جعفر علی', [m('ذاکر علی')]),
  m('عاشق علی', [
    m('تراب علی', [m('علمدار علی', [m('حسن')])]), // VERIFY: تراب / ثراب
    m('امانت علی', [m('نذر علی', [m('حسین علی')])]),
  ]),
  m('قنبر علی', [
    m('مہدی حسن', [
      m('ابن علی', [
        m('محمد سبطین', [
          f('شمیم فاطمہ', 'سید محمد محسن', 'دانشمندان'),
          f('احسان فاطمہ', 'اللہ دتہ', 'پنجاب'), // VERIFY: husband printed without سید
        ]),
      ]),
    ]),
  ]),
])

const rahmanAli340 = m('رحمن علی', [
  m('محفوظ علی', [
    m('معظم علی', [
      m('دائم علی', [mahboobAli340, qaimAli340, muhammadAli340]),
    ]),
  ]),
  // حافظ علی: three sons (L-shaped line from under his name up to the bar at the top)
  m('حافظ علی', [
    m('قاسم علی', [
      m('امان علی', [
        m('مدد علی', [
          m('فرزند علی', 'لاولد'),
          m('اسد علی', [m('ممتاز علی', 'لاولد')]),
          m('سبطین علی'),
        ]),
      ]),
    ]),
    m('محمد حیات', [
      m('خیرات علی', [
        m('رائے علی', [azeemAli342]), // VERIFY: marker beside عظیم علی reads 342
      ]),
    ]),
    m('شجاعت علی', [
      m('مبارک علی', [
        m('نجابت علی', [kabirAli342]), // VERIFY: marker under کبیر علی reads 342
        m('رمضان علی', [
          m('خورشید علی', 'لاولد'),
          m('رضا علی', 'لاولد'),
          m('ارمان علی', [m('ظہور حسین')]),
          m('مردان علی', [m('ابن علی', [m('غدیر حسن', 'لاولد')])]),
        ]),
        m('زبیر علی'),
      ]),
    ]),
  ]),
])

const abdulKhaliq340 = m('عبدالخالق', [usmanAli340, rahmanAli340])

// ───────── the root chain ─────────

const hasan340 = m('حسن', [fazil340, abdulKhaliq340])

const aalMuhammad340 = m('آل محمد', [hasan340])
const qiranUdDin340 = m('قران الدین', [aalMuhammad340])
const husain2340 = m('حسین', [qiranUdDin340])
const chand340 = m('چاند', [husain2340])
const noor340 = m('نور', [chand340])
const alaUdDin340 = m('علاء الدین', [noor340])
const muhammadAbdullah340 = m('محمد عبداللہ', [alaUdDin340])
const nizamAhmad340 = m('نظام احمد', 'گنج روال', [muhammadAbdullah340]) // VERIFY: گنج روال may be a place name or part of his name
const abulFazl340 = m('ابوالفضل', [nizamAhmad340])
const farrukh340 = m('فرح', 'فراش الدین', [abulFazl340]) // VERIFY: فراش الدین is written small above محمد / فرح
const muhammadFarrukh340 = m('محمد', [farrukh340])
const dawood340 = m('داؤد', [muhammadFarrukh340])
const husain1340 = m('حسین', [dawood340])
const ali340 = m('علی', [husain1340])
const haroon340 = m('ہارون', [ali340])
const jafar340 = m('جعفر بن علی', [haroon340])
const imamAliNaqi340 = m('حضرت امام علی نقی', [jafar340])


const khandan: BookKhandan = {
  serial: 61,
  mohalla: 'Usmanpur',
  trees: [
    { page: 340, root: imamAliNaqi340 },
    // Not drawn under page 340: the book prints no link from the Izad Bakhsh family to the rest.
    { page: 346, father: 'عبد المجید ثانی', root: izadBakhsh346 },
  ],
}

export default khandan
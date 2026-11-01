// Kausar-ul-Ansab (1999), pages 234-235: محلہ سدّو
// Khandan 40 in the book's index (page 229): اولاد سید مٹھے بن سید سیدن شاہ
//
// ONLY book pages 234 and 235 survive in the photos; pages 229-233 are missing.
//
//   page 234  four charts, every one headed "صفحہ ۲۳۳":
//     1. صفحہ ۲۳۳ سید آل حسین بن سید آل حسن
//     2. صفحہ ۲۳۳ سید آعظم حسین بن سید خادم حسین
//     3. صفحہ ۲۳۳ سید فضل حسین بن سید احمد حسین
//     4. صفحہ ۲۳۳ سید غلام سبطین بن سید اکبر حسین
//   page 235  one chart, headed "صفحہ ۲۳۴" (the fourth chart above):
//     5. صفحہ ۲۳۴ سید سبط محمد بن سید غلام سبطین
//
// Chart 5 is spliced into chart 4 where سبط محمد is drawn, so there are four trees, not five.
// The spliced root keeps onPage(235, ...) so its descendants are filed under page 235.
//
// FOR A HUMAN TO CHECK
//  * Pages 229-233 are missing. Every page-234 chart is headed "صفحہ ۲۳۳", so each tree's father
//    (آل حسن, خادم حسین, احمد حسین, اکبر حسین) is named only by the heading and is NOT linked to
//    any family. The four trees are not connected to each other or to the khandan's root, سید مٹھے بن
//    سید سیدن شاہ (khandan 39's page 227 draws سید سیدن شاہ with a son مصطفیٰ marked "صفحہ ۲۲۹").
//    How the four fathers descend from سید مٹھے is unknown until pages 229-233 are photographed.
//  * Page 235: حسن محمد's ten children. His arrow lands on the lower bar (5 daughters); the upper bar
//    (مہ جبین بانو, شان محمد, دردانہ بانو, عرفان محمد, آسیہ بانو) has no father arrow and wraps down to
//    the lower bar's left end. Read as one list, lower row first. Alternative: the upper five are
//    جہانزیب احمد's children, whose name sits above that bar.
//  * Page 234 chart 2: قمر رضا hangs from the end of ناظم حسین's lower wrapped bar (listed last).
//    The 9 children of نجمل حسین (chart 3) are in a box on two wrapped bars (6 daughters, then 3 sons).
//    The pen X above منصوبہ خاتون does not cancel her arrow. ظفر اختر is printed طفر اختر.
//  * Every "VERIFY" below: spellings, husbands' names and mohallas, بلال/ہلال, سیما حسن, ماہا سہیل,
//    تلمند/گذری, and the mohalla سدّو on ثمینہ حسن's husband.

import { f, m, onPage, type BookKhandan } from './book'

// ───────────────────────── page 235 ─────────────────────────

// حسن محمد: ten children drawn on two joined bars. His arrow lands on the LOWER bar; that bar's left end climbs to
// the upper bar's right end, so the lower row (right to left) is listed first, then the upper row (right to left).
const hasanMuhammad235 = m('حسن محمد', [
  f('رابعہ بانو'),
  f('رضانہ بانو'), // VERIFY: spelling (رضانہ / رضائہ)
  f('نسرین بانو'),
  f('نازنین بانو'),
  f('شاہین بانو'),
  f('مہ جبین بانو'), // upper bar from here; VERIFY: the upper bar has no father arrow of its own, taken as wrapped from the lower bar (not as children of جہانزیب احمد), and lower row assumed eldest
  m('شان محمد'),
  f('دردانہ بانو'),
  m('عرفان محمد'),
  f('آسیہ بانو'),
])

// محمد احمد: four children
const sohailAkhtar235 = m('سہیل اختر', [
  m('شاہ زیب'),
  f('عنبرین سہیل'),
  f('ماہا سہیل'), // VERIFY: printed ماہل / ماہا
])

const muhammadAhmad235 = m('محمد احمد', [
  m('فہیم احمد', [f('ماہ فراز')]),
  f('عظمیٰ بانو'),
  sohailAkhtar235,
  m('ریحان احمد'),
])

// احمد: four sons
const ahmad235 = m('احمد', [
  m('نوید احمد'),
  m('سبط عامر'),
  m('جاوید احمد'),
  m('سبط احمر'),
])

// حسن احمد: eight children on one long bar
const hasanAhmad235 = m('حسن احمد', [
  f('سیما حسن'), // VERIFY: printed without سید, no husband line
  m('عدنان احمد'),
  f('ثمینہ حسن', 'سید فہیم احمد', 'سدّو'), // VERIFY: mohalla (سدو)
  f('برجیس فاطمہ', 'سید محمد تقی', 'کوٹ'),
  f('زرین فاطمہ', 'سید جمال اختر', 'دربار کلاں'),
  m('فرحان احمد'),
  m('وقار احمد', [
    m('جہانزیب احمد'),
    f('ہمنہ'),
  ]),
  m('تاجدار احمد'),
])

// افضال احمد: four children
const afzalAhmad235 = m('افضال احمد', [
  m('بلال احمد'), // VERIFY: بلال / ہلال (next brother reads ہلال)
  f('رومانہ بانو'),
  m('ہلال احمد'),
  f('سمیرا بانو'),
])

// سید سبط محمد بن سید غلام سبطین (heading "صفحہ ۲۳۴")
const sibtMuhammad235 = onPage(235, m('سبط محمد', [
  hasanMuhammad235,
  muhammadAhmad235,
  f('شان فاطمہ', 'سید محمد شاہد', 'کوٹ'),
  f('احسان بانو', 'سید تلمند حسین', 'گذری'), // VERIFY: husband's name (تلمند / تلمذ) and mohalla (printed گوزی)
  ahmad235,
  hasanAhmad235,
  afzalAhmad235,
]))

// ───────────────────────── page 234 ─────────────────────────
// ───────────── chart 1: سید آل حسین بن سید آل حسن ─────────────
const aalHusain234 = m('آل حسین', [
  m('حسین', [ // VERIFY: first name may read حسنین
    f('طلعت زہرا'),
    m('محمد سبطین'),
  ]),
  f('نسرین بانو', 'سید شبیہ حسن', 'چاہ غوری'), // VERIFY: husband's first name (شبیہ / شبہ)
  m('آل ثقلین'),
  m('حسین حیدر'), // VERIFY: حسین / حسنین
  f('اقبال فاطمہ', 'سید تاج حسین', 'گذری'),
  m('اقبال حیدر'),
  m('آل سیدین', [
    m('آل مجتبیٰ'), // VERIFY: آل مجتبیٰ / آل مجتبین
    m('آل مصطفین'),
    m('آل صادقین'),
  ]),
])

// ───────────── chart 2: سید آعظم حسین بن سید خادم حسین ─────────────
const aazamHusain234 = m('آعظم حسین', [
  // ناظم حسین: nine children on two wrapped bars, the last (قمر رضا) hanging from the end of the lower bar
  m('ناظم حسین', [
    f('ریحانہ بانو'),
    f('سیما بانو'),
    f('فرزانہ بانو'),
    f('سلطانہ بانو'),
    f('حسین بانو'),
    f('رضیانہ بانو'), // VERIFY: رضیانہ / رضوانہ
    f('تبسم بانو'),
    f('نعیم بانو'),
    m('قمر رضا'),
  ]),
  // کاظم حسین: seven children on one bar
  m('کاظم حسین', [
    m('حسن اختر', [
      f('حسن زہرا'),
      m('علی حسن'),
      f('عنبرین زہرا'),
      m('محمد حسن'),
      f('ثمرین زہرا'), // VERIFY: ثمرین / نمرین
    ]),
    f('حسین فاطمہ'),
    m('ظفر اختر', [ // VERIFY: printed طفر اختر
      m('محمد رضا'),
      f('حرا'),
      m('احسن رضا'),
    ]),
    f('حسنین فاطمہ'),
    m('جاوید اختر'),
    m('پرویز اختر', [
      m('محمد حسین'),
      f('افشاں'),
    ]),
    m('قمر اختر'),
  ]),
  m('حسن عباس', [
    f('ناہید بانو', 'سید انور رضا', 'چاہ شور'),
  ]),
  m('قائم حسین', [
    f('کیکشاں بانو'), // VERIFY: first letters (کیکشاں / لیکشاں)
    f('شازیہ بانو', 'سید شکیل اختر', 'لکھنؤ'),
    m('حیدر رضا'),
    f('عالیہ بانو', 'سید حسن عباس', 'جونپور'),
    m('ضامن حسین', [m('شارق عباس')]),
  ]),
])

// ───────────── chart 3: سید فضل حسین بن سید احمد حسین ─────────────
const fazlHusain234 = m('فضل حسین', [
  m('راحت حسین', [m('سخاء الحسین', 'لاولد')]), // VERIFY: سخاء الحسین (سخاوت؟)
  f('ثروت النساء', 'سید حسین نذر', 'دانشمندان'), // VERIFY: husband's name
  // نجمل حسین: nine children drawn in a box on two wrapped bars (six daughters, then three sons)
  m('نجمل حسین', [
    f('ذہینہ خاتون', 'سید بلال احمد', 'پچدرہ'), // VERIFY: first name (ذہینہ / زبینہ)
    f('منصوبہ خاتون', 'سید عز'), // VERIFY: husband's name reads only "عز..."; a pen X sits above the bar
    f('سکینہ خاتون', 'سید محمد حسین', 'شفاعت پوتہ'),
    f('نزہینہ خاتون', 'سید بلال محمد', 'عثمان پور'), // VERIFY: first name (نزہینہ / زبینہ)
    f('حسینہ خاتون', 'سید بلال احمد', 'پچدرہ'), // VERIFY: same husband line as the first daughter
    f('ثمینہ خاتون', 'سید مضغر علی جعفری', 'چکلی'), // VERIFY: husband's name (مظفر / مضغر) and the word above it
    m('محمد زینت', [ // VERIFY: زینت / زبیت
      m('علی حیدر'),
      f('ہما زہرا'),
      m('بابر رضا'),
      f('نسرین زہرا'),
    ]),
    m('محمد ذہین', [
      f('نجمہ خاتون'),
      m('محمد حسین'),
      f('حسین زہرا'),
      m('عروج مہدی'),
      f('ذہین زہرا'),
    ]),
    // زمرد حسین: nine children drawn in a box on two wrapped bars
    m('زمرد حسین', [
      f('فوزیہ فاطمہ'),
      m('جوہر عباس'),
      m('حیدر عباس'),
      m('ناصر عباس'),
      m('عامر عباس'),
      m('گوہر عباس', [
        m('شجاعت عباس'),
        f('نکہت زہرا'),
        m('سعادت عباس'),
      ]),
      f('نسرین فاطمہ', 'سید عروج اختر', 'سنبھلی'), // VERIFY: mohalla
      f('نور فاطمہ', 'سید شہزاد رضا', 'دانشمندان'),
      f('شازیہ فاطمہ', 'سید حسین رضا', 'چاہ شور'),
    ]),
  ]),
  m('سرور حسین', 'لاولد'),
  m('شریعت حسین', [
    m('ذاکر حسین', 'لاولد'),
    f('چندو خاتون', 'سید علی', 'بخشی'),
    f('مولسہ خاتون', 'سید امیر حسن', 'قاضی زادہ'), // VERIFY: husband's name (امیر / امر)
    m('محمد صابر', [
      f('اعجاز فاطمہ', 'سید رئیس حیدر', 'شفاعت پوتہ'),
      f('ایاز فاطمہ', 'سید حسین حیدر', 'شفاعت پوتہ'),
    ]),
  ]),
])

// ───────────── chart 4: سید غلام سبطین بن سید اکبر حسین ─────────────
const ghulamSibtain234 = m('غلام سبطین', [
  sibtMuhammad235, // page 235 continues here (the heading there reads صفحہ ۲۳۴)
  f('حسین دولت', 'سید سبطین رضا', 'جعفری'), // VERIFY: جعفری may be part of the husband's name, not a mohalla
  m('سبط احمد', [
    m('سبط معطر', [m('محمد میثم'), f('بتول زہرا')]), // VERIFY: معطر
    f('باسمین فاطمہ'),
    f('تسنیم فاطمہ', 'سید نسیم حیدر', 'منڈی چوب'),
    m('منور سبطین'),
    f('شمیم فاطمہ', 'سید قیصر حسین', 'مجاپوتہ حال قاضی زادہ', 'زوجہ ثانی'),
    m('انجم عباس'),
    m('تنویر حیدر'),
    m('سبط مظفر', [ // VERIFY: مظفر
      m('ارسلان عباس'),
      f('فضہ بتول'),
      m('سلمان حیدر'),
    ]),
  ]),
])

const khandan: BookKhandan = {
  serial: 40,
  mohalla: 'Saddo',
  trees: [
    { page: 234, father: 'آل حسن', root: aalHusain234 },
    { page: 234, father: 'خادم حسین', root: aazamHusain234 },
    { page: 234, father: 'احمد حسین', root: fazlHusain234 },
    { page: 234, father: 'اکبر حسین', root: ghulamSibtain234 },
  ],
}

export default khandan

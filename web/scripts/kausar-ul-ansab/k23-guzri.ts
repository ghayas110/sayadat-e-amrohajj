// Kausar-ul-Ansab (1999), pages 95–104: محلہ گذری
// Khandan 23 in the book's index: اولاد سید اسداللہ خاں میر کلو بن سید مصطفیٰ علی
//
//   page 95   three charts: سید ذوالفقار حسین بن سید افتخار حسین and سید انتظار حسین بن سید اسرار حسین
//             (both headed "صفحہ ۹۴") and the root, سید اسد اللہ خان عرف میر کلو بن سید مصطفیٰ اعلیٰ ("صفحہ ۹۲")
//   page 96   four charts, all headed "صفحہ 95": مظاہر حسن بن ظہور حسین, مجتبیٰ حسن بن اسداللہ,
//             رضا احمد بن ابرار حسین, ابوالقاسم بن جعفر علی
//   page 97   four charts: مظاہر الحسن, (منور/شہود) حسن and حیدر حسن, all بن ابوالقاسم, and غلام مرتضیٰ بن عظیم علی
//   page 98   one chart: غضنفر حسین بن عظیم علی, plus a printed تتمہ slip redrawing جعفر رضا بن زاہر حسین
//   page 99   two charts: معصوم علی بن عنایت حسن and سعادت اللہ بن اسد اللہ خان میر کلو
//   page 100  one chart: ظہور علی بن اسد اللہ خان عرف میر کلو (ظہور علی -> نذر علی -> محمد علی)
//   page 101  four charts: حبیب حسن بن امتیاز حسن, محمد سبطین and نسیم حسن (both بن اعجاز حسن),
//             عبدالہادی عرف ہادی علی بن اسداللہ خاں عرف میر کلو
//   page 102  three charts: الطیب حسن, ابن حسن and مظہر حسن (all headed "صفحہ 101"), plus a تتمہ slip for محمد تقی
//   page 103  four charts: اختر حسن, محمد مہدی and مطہر حسن (all بن اظہر حسن), ابراہیم علی بن فرحت علی
//   page 104  four charts, all headed "صفحہ 103": محمد حسین, مسیح الحسن, ملیح الحسن, محمد احمد
//
// FOR A HUMAN TO CHECK
//
// Page numbers. The photos print their own page numbers and these differ from the numbers the task
// assigned: the photo set is 12 files for pages 95-104 because pages 98 and 102 each have a main page
// and a printed تتمہ slip. Every const is suffixed with and wrapped in onPage() for the page the photo
// prints. No page is missing and no photo is a duplicate of another.
//
// Conflicts between a drawing and a chart heading (the heading was followed):
//  - page 99 heads معصوم علی as "بن عنایت حسن"; page 95 draws his father as عنایت حسین. Written عنایت حسن.
//  - page 96's chart is headed "مظاہر حسن بن ظہور حسین"; page 95 draws the leaf as مظاہر حسین. Written مظاہر حسن.
//  - page 102's first chart is headed "الطیب حسن بن رئیس حسن"; page 101 draws only "حسن" above him
//    (and calls him اطیب حسن). Written رئیس حسن / الطیب حسن. The heading father is itself a VERIFY reading.
//  - page 103's chart is headed "مطہر حسن"; page 102 draws the leaf as مطاہر حسن. Written مطہر حسن.
//  - page 97's second chart, headed "نہتور (منور?) حسن بن ابوالقاسم", is the leaf drawn on page 96 as
//    شہود حسن (the left end of ابوالقاسم's bar). Written شہود حسن (the heading is one letter-shape
//    away from شہود; the agent's own reading, منور, was a guess). Check the heading.
//  - NOT followed: page 96's رضا احمد chart is headed "بن ابرار حسین", but page 95 draws him under
//    اسرار حسین and no ابرار حسین exists anywhere on the pages. Kept under اسرار حسین; ابرار is
//    almost certainly a misreading of the heading.
//  - NOT followed: the page-102 تتمہ slip heads محمد تقی "ولد محمد نقی", but page 102's main chart draws
//    a محمد تقی with the same children (شہاب, ناہید, سہیل, and میلا/شہلا) under علی تقی. Treated as one
//    person: the slip's fuller family (it adds grandchildren) replaces the drawn four children, in
//    the place under علی تقی. The slip's father reading is likely wrong; a human should confirm.
//  - the page-98 تتمہ slip is headed "صفحہ ۹۶ مظاہر الحسن بن ابوالقاسم" on the photo but its chart is
//    جعفر رضا ولد زاہر حسین, so it replaces the جعفر رضا family drawn on page 98 (same six children,
//    different order; the slip has the grandchildren).
//
// Charts whose father is drawn on page 94 (not in this khandan's photos; probably khandan 22) become
// their own trees with a `father` field: ذوالفقار حسین بن افتخار حسین, انتظار حسین بن اسرار حسین.
// The root, اسد اللہ خان, has father مصطفیٰ اعلیٰ ("صفحہ ۹۲").
//
// Stubs left as stubs: none inside this khandan. Page 101's سرفراز علی is marked "صفحہ ۱۰۵", outside
// the khandan's range, so he is a childless leaf here (page 105 belongs to another khandan).
//
// Wrapped sibling bars are read as one list, bar by bar, top bar first, right to left. Many of these
// orderings are VERIFY. Other hard calls: page 96 the winding bar assigned to خوشتر حسن (could be
// حیدر حسن's); page 100 ذاکر حسین / امتیاز حسن wrapped lists and محمد زہر فتین's name; page 102
// the nine children of صفی حسن and the blacked-out daughter of شبیہ کاظم; page 103 the 12 children of
// the first حسین احمد (two brothers share that name); page 104 the wrapped boxes of نوشہ حسین,
// عالیجاہ حسین, حسین محترم and سمیع الحسن. Page 98 has 36 VERIFY marks the page agent did not all
// confirm at full resolution. Circled "1" marks, pen crosses and tiny marginal words were ignored.
// Some daughters are printed only as "دختر" and are kept with that name.
//
// Readings that could not be confirmed from the photos are marked with "VERIFY".

import { f, m, onPage, type BookKhandan } from './book'

// ───────────────────────── page 104 ─────────────────────────
const farzandHusain104 = m('فرزند حسین', [
  f('ام حسین', 'سید رضی حیدر'), // VERIFY: name printed like ادم حسین
  f('رباب حسین', 'سید عامر'),
  m('محسن عباس'),
  m('قمر عباس'),
  f('صبا حسین'),
  f('کنول حسینی'),
])

const aliHusain104 = m('علی حسین', [
  m('نواز علی'), // VERIFY: first letters read like نواد / نواب
  m('جواد علی'),
])

const muhammadHusain104 = onPage(104, m('محمد حسین', [
  farzandHusain104,
  f('حسین زہرا', 'سید غلام السیدین', 'گذری'),
  f('حسین زہرا', 'سید مہر شباب سلطان', 'چھیوڑہ حال بچھدرہ'), // VERIFY: husband's name (مہر / مظہر) and mohalla
  f('نازنین زہرا', 'سید ظفر اقبال', 'گذری'),
  f('تسکین زہرا'),
  m('رضا حسین', [m('محمد تقی')]),
  m('منظر حسین', [f('ماہ رخ فاطمہ')]),
  aliHusain104,
]))

// ───────── chart 2: مسیح الحسن بن ابراہیم علی ─────────
const muhammadHaidar104 = m('محمد حیدر', [
  f('ام فاطمہ'),
  f('روحی فاطمہ', 'سید نعیم حیدر', 'دربار کلاں'),
  m('عباس حیدر', [f('زینب عباس'), m('ایمن عباس')]), // VERIFY: ایمن عباس gender (printed without سید)
  m('سلمان حیدر'),
  m('عدنان احسن'),
  m('سلیم حیدر'),
])

const karrarHaidar104 = m('کرار حیدر', [
  f('صفیہ فرحین'),
  m('محمد مرتضیٰ علی'),
])

// Six children on two joined bars (a box): top bar then lower bar
const nushaHusain104 = m('نوشہ حسین', [
  m('سردار حیدر', 'لاولد'),
  f('عذرا بتول'),
  m('اسد الحیدر', [f('ثنا زہرا')]),
  m('آغا حیدر', [m('زین حیدر'), m('حمزہ حیدر')]),
  f('سلمیٰ بتول'),
  f('نجمہ بتول', 'سید عشمت علی'), // VERIFY: husband's name (عشمت / شمت)
]) // VERIFY: order of the top and lower rows of the box; and نوشہ حسین / نوشر حسین

const masihulHasan104 = onPage(104, m('مسیح الحسن', [
  muhammadHaidar104,
  f('مسرورہ خاتون', 'سید سبط جعفر', 'تومولیہ'), // VERIFY: husband's mohalla
  m('کرار حسین', 'لاولد'),
  f('محفوظ خاتون', 'سید توفیق حسن', 'گذری'),
  m('سردار حسین', 'لاولد'),
  f('سیدہ خاتون', 'سید عزیز حسن', 'قاضی زادہ'), // VERIFY: husband's name
  karrarHaidar104,
  f('مشکورہ خاتون', 'سید عزا دار حسین', 'شفاعت پوتہ'),
  m('فرغام حیدر', 'لاولد'),
  nushaHusain104,
]))

// ───────── chart 3: ملیح الحسن بن ابراہیم علی ─────────
const hasanMuhtaram104 = m('حسن محترم', [
  f('تبسم جہاں'),
  f('مسرت جہاں'),
  f('نصرت جہاں'),
  m('شعیب رضا'),
  m('اظہر رضا'),
  m('اکبر رضا'),
])

const shahanshahHusain104 = m('شہنشاہ حسین', [
  m('علی محترم'),
  m('حسین محترم', [
    m('احمد رضا'),
    f('طاہرہ بتول'),
    hasanMuhtaram104, // drawn on the wrapped lower bar of the box
  ]),
])

// Thirteen children: eight on the top bar, five on the wrapped lower bar
const aaliJahHusain104 = m('عالیجاہ حسین', [
  f('ناضلہ خاتون'), // VERIFY: first letters read like ناصلہ / فاضلہ
  f('شہناز فاطمہ', 'سید محمد زبیر قین', 'مجھربٹہ حال دانشمندان'), // VERIFY: husband's name and whether the line belongs to her or ناضلہ
  f('امجاز فاطمہ'),
  f('ریحانہ خاتون', 'سید برنز حسن', 'گذری'), // VERIFY: husband's name
  f('مہناز فاطمہ'),
  f('معراج فاطمہ', 'سید ریاض حبیب', 'مجھربٹہ حال قاضی زادہ'), // VERIFY: husband's name and mohalla
  m('آصف جاہ'),
  f('فرزانہ خاتون', 'سید محمد فہیم رضا', 'قاضی زادہ'),
  m('عباس رضا'),
  m('علی رضا'),
  f('نگہت فاطمہ'),
  f('طلعت فاطمہ'),
  f('رفعت فاطمہ'),
])

const malihulHasan104 = onPage(104, m('ملیح الحسن', [
  aaliJahHusain104,
  f('محبوبہ خاتون', 'سید خوشتر حسن', 'گذری'),
  m('ذیجاہ حسین', 'لاولد'),
  f('ممدوحہ خاتون', undefined, 'شفاعت پوتہ'), // VERIFY: husband's name is struck out in the book
  m('ذی وقار حسین', 'لاولد'),
  f('قدسیہ خاتون', 'سید خوشتر حسن', 'گذری', 'زوجہ ثانی'),
  f('راکعہ خاتون', 'سید جعفر رضا', 'قاضی زادہ حال مجاپوتہ'),
  shahanshahHusain104,
]))

// ───────── chart 4: محمد احمد بن ابراہیم علی ─────────
const sameeulHasan104 = m('سمیع الحسن', [
  f('تسنیم فاطمہ', 'سید سجاد اصغر', 'دربار کلاں'),
  f('نعیم فاطمہ', 'سید سکندر عباس', 'چکلی'),
  m('صبیح الحسن', [
    m('خرم رضا'),
    f('جبین فاطمہ', 'سید آصف عباس', 'چکلی'),
  ]),
  m('فصیح الحسن', [f('ناہید فاطمہ'), f('فرحین فاطمہ')]), // VERIFY: drawn on the wrapped end of the same bar; may be a separate son
])

const saeedulHasan104 = m('سعید الحسن', [
  f('ادیبہ خاتون', 'سید محمد علی', 'کراچی'), // a pen cross is drawn near her name
  f('مہذبہ خاتون'),
  f('پروین بانو', 'سید شفاعت علی زیدی', 'سادات بارہہ'),
])

const baseerulHasan104 = m('بصیر الحسن', [
  f('نرگس بانو'),
  f('یاسمین بانو'),
  f('صبوحی بانو'),
  m('حسین کمال'),
  m('حسن کمال'),
  m('علی کمال', [f('سمانہ بانو'), m('ارسلان علی')]),
])

const muhammadAhmad104 = onPage(104, m('محمد احمد', [
  sameeulHasan104,
  f('مشاہدہ خاتون', 'سید اولیٰ افر حسن', 'گذری'), // VERIFY: name and husband's name
  f('مطاہرہ خاتون', 'سید نوشہ حسین', 'گذری'),
  f('مہاجرہ خاتون', 'سید حسن اختر', 'بگلہ', 'عرف منی'), // VERIFY: mohalla
  saeedulHasan104,
  baseerulHasan104,
]))

// ───────────────────────── page 103 ─────────────────────────
const akhtarHasan103 = onPage(103, m('اختر حسن', [
  m('خوشتر حسن', [
    m('زہیر حسن', [f('فریبہ بتول')]), // VERIFY: زہیر / زبیر; فریبہ / فریدہ
    f('نزہت بانو', 'سید محمد ثقلین', 'سنبھل'), // VERIFY: name (نزہت / منزلت) and the mohalla
    m('اظہر اقبال', [
      f('امیر فاطمہ'), // VERIFY: امیر / اخیر
      f('شیریں فاطمہ'),
      f('ایلینا'), // VERIFY: ایلینا / ایلیا
    ]),
    f('ندیمہ بتول', undefined, undefined, 'ایک سیاہ دھبہ نام کے نیچے ہے'), // VERIFY: a black ink blot under her name hides something
  ]),
  f('شافعہ خاتون', 'سید اقتدا اعلیٰ', 'گذری', 'زوجہ اولیٰ'), // VERIFY: husband's name (اقتدا اعلیٰ / اقتدار علی)
  f('عطائے زہرا', 'سید امیر احمد زیدی', 'سادات بارہہ'),
  m('جوہر حسن', [
    m('باقر حسن', 'لاولد'),
    f('کوثر فاطمہ', 'سید احمد سعید', 'ترلوپکیر'), // VERIFY: mohalla reading
    m('جعفر حسن'),
    f('رخشندہ بانو', undefined, 'پنجاب', 'زوجہ بھٹی'), // VERIFY: husband (بھٹی / بٹی); no arrow of her own, sits under the father's arrow
    f('بانو', undefined, undefined, 'نام کے اوپر × کا نشان'), // VERIFY: only "بانو" is printed, with an X mark above her arrow
    m('گوہر حسن', [
      m('قمر حسن', [
        m('جاوید اختر', 'لاولد'),
        m('برتر حسن', [m('عاطف رضا'), m('ہاشم رضا'), m('علی زین')]), // VERIFY: برتر / بزتر
        m('کوثر حسن', 'لاولد'),
        m('ظفر اقبال', [m('وقار مرتضیٰ'), m('کمیل مرتضیٰ'), f('اریج فاطمہ')]), // VERIFY: وقار
      ]),
      f('ام بانو'),
    ]),
  ]),
  f('جمال زہرا', 'سید رضوان حیدر', 'شفاعت پوتہ'),
  f('حسین زہرا', 'سید فرزند رضا', 'خسکار پید'), // VERIFY: mohalla reading
  m('خورشید حیدر', [
    f('ملکہ خاتون'),
    f('مقصود قمر خاتون', 'سید سرور حسین رضوی', 'زیدپور، بارہ بنکی'), // VERIFY: one name or two (مقصود / قمر خاتون)
    m('جمشید حیدر', [f('ندائے زہرا'), m('محمد عون')]),
    f('تصدیق خاتون', 'سید منظور حسین', 'گھر مناف'), // VERIFY: name (تصدیقہ / تصدیق) and mohalla
  ]),
  f('کمال زہرا'),
]))

// ───── chart 2: محمد مہدی بن اظہر حسن ─────
const muhammadMehdi103 = onPage(103, m('محمد مہدی', [
  m('جمال مہدی'),
  m('خوشنود مہدی', [m('علی امام'), f('زینب'), f('فاطمہ')]),
  m('اقبال مہدی'),
  m('سرتاج مہدی', [f('افشاں زہرا'), m('عارف علی')]), // VERIFY: سرتاج / شرتاج
  m('کمال مہدی'),
  m('مسرور مہدی'),
  m('جواہر مہدی', [m('عاطف مہدی'), f('ایلیا بتول'), m('یاسر مہدی')]),
  m('اظہر مسعود'),
]))

// ───── chart 3: مطہر حسن بن اظہر حسن ─────
// Husain Ahmad's children are drawn on two joined bars (a box): Zeenat and Tanweer on the top bar, the rest wrap onto the long bar below.
const mutaharHasan103 = onPage(103, m('مطہر حسن', [
  m('حسین احمد', [
    f('زینت فاطمہ', 'سید احسن رضا', 'مجاپوتہ'), // VERIFY: mohalla reading
    m('تنویر احمد'),
    m('مسعود احمد'),
    m('صغیر احمد', [m('خرم'), m('فہیم'), f('زہرا فاطمہ'), m('ندیم')]), // VERIFY: خرم
    f('شہناز فاطمہ'),
    f('فرحت فاطمہ'),
    f('نگہت فاطمہ'),
    m('ریحان احمد'), // VERIFY: ریحان / ریجان
    m('اعجاز احمد'),
    m('اقبال احمد'),
    m('امتیاز احمد'),
    m('سجاد احمد'),
  ]), // VERIFY: that the wrapped bar below the box belongs to this Husain Ahmad
  m('نورعین احمد', 'لاولد'),
  f('مومنہ خاتون', 'سید شرف الدین', 'گذری', 'زوجہ اولیٰ'),
  m('حسین احمد', [
    m('علی'),
    f('طاہرہ فاطمہ', 'سید صلاح الدین', 'پٹیالہ'), // VERIFY: × mark above her arrow; whether the husband is سید
    m('محمد علی', [m('اسد محسن علی'), m('بلال احسن علی')]), // VERIFY: اسد محسن / اسد مجتبیٰ
  ]), // VERIFY: two brothers both named حسین احمد
  f('زینب', 'سید معاون حسین', 'گذری'),
  m('سبطین احمد', 'لاولد'),
  m('حسن احمد', [f('فاضلہ پروین'), m('سرفراز احمد'), m('افضال احمد'), m('احتشام احمد'), f('رضیہ خاتون')]),
]))

// ───── chart 4: ابراہیم علی بن فرحت علی ─────
// Afsar Hasan's children are drawn on two joined bars: Nahid .. Qaisar on the lower bar, Iqbal and Riaz wrap onto the upper bar.
const ibrahimAli103 = onPage(103, m('ابراہیم علی', [
  m('شبیہ الحسن', [
    f('معروفہ خاتون', 'سید علی اصغر', 'گذری'),
    m('افسر حسن', [
      f('ناہید فاطمہ', 'سید جاوید احمد', 'نخشبی'), // VERIFY: mohalla reading
      f('معظمہ خاتون', 'سید محمد مبین', 'چاہ شور، بجدرہ'), // VERIFY: mohalla reading
      f('نسیم فاطمہ', 'سید ہمایوں حیدر', 'بجبر سہر'), // VERIFY: mohalla reading
      f('کنیز فاطمہ', 'سید تقی الحسن', 'حال دانشمندان', 'چھوڑ دی گئی'), // VERIFY: note reading (چھوڑ/چھوڑدہ)
      m('قیصر حسن', 'لاولد'),
      m('اقبال افسر', [m('سلیمان افسر'), f('صائمہ خاتون')]),
      m('ریاض افسر', [m('رضوان افسر'), f('فرزانہ خاتون'), m('سلمان افسر'), m('عرفان افسر')]),
    ]),
    f('موصوفہ خاتون', 'سید تجمل حسین', 'سرو'), // VERIFY: husband and mohalla reading
    f('سالمہ خاتون', 'سید سردار حسین', 'گذری'),
  ]),
  masihulHasan104,
  malihulHasan104,
  f('عالیہ خاتون', 'سید علی نقی', 'گذری'),
  m('وجیہ الحسن', [
    f('مطلوبہ خاتون', 'سید مہر الحسن', 'جھیر شہر، حال دانشمندان'), // VERIFY: mohalla reading
    muhammadHusain104,
  ]),
  muhammadAhmad104,
]))

// ───────────────────────── page 102 (supplement slip) ─────────────────────────
const sohailTaqi102 = m('سہیل تقی', [
  f('ایلیا'),
  m('ارتضیٰ'), // VERIFY: printed سید ارتضی
])
const muhammadTaqi102 = onPage(102, m('محمد تقی', [
  f('شہلا تقی', 'سید نوازش حسن', 'چھیوڑہ'),
  sohailTaqi102,
  f('ناہید تقی', 'سید محمد حسن حامد', 'دانشمندان'), // VERIFY: husband is محمد حسن حامد, mohalla دانشمندان
  m('شہاب تقی', [f('علیزہ')]),
]))

// ───────────────────────── page 102 ─────────────────────────
const taibHasan102 = onPage(102, m('الطیب حسن', [
  m('شبیہ کاظم', [
    f('نام مٹا ہوا'), // VERIFY: eldest daughter's name and husband are blacked out in the photo
    f('طلعت حسن', 'سید اشتیاق حسن', 'پنجاب'), // VERIFY: husband's name
    f('صاحت زہرا', 'سید اشفاق حسین', 'پنجاب'), // VERIFY: name (صاحبہ?) and husband
    m('وجاہت رضا'),
  ]),
  f('گل زہرا'),
  m('شمیم کاظم', [
    f('صدف زہرا'), // VERIFY: drawn at the right end of شمیم کاظم's bar, beside وجاہت رضا, not under him
    m('کرار حیدر', [
      f('وجیہہ زہرا'),
      m('وجیہہ عباس'),
      f('ردا بتول'), // VERIFY: ردا / رضا
    ]),
    m('ریاض حیدر'),
    m('اسد عباس'),
    m('اظہر عباس'),
  ]),
  f('شمیم زہرا', 'سید کاظم رضا', 'مجھیڑہ حال دالشمندان'), // VERIFY: mohalla reading
  m('ندیم اختر', [m('محمد عباس'), m('منظور حسین'), m('علی حیدر')]),
]))

// ───────── chart 2 ─────────
// ولی حسن
const waliHasan102 = m('ولی حسن', [
  f('حسین بانو', 'سید افضل علی', 'گذری'),
  m('احمد حسن', [
    f('سکینہ خاتون', 'سید ثقلین احمد', 'گذری'), // VERIFY: husband name
    m('محمد', [m('سعید اختر'), f('نجم زہرا')]),
    m('حسن محمد', [m('محمد حیدر'), f('شمع بانو'), f('ہما بانو')]),
    f('حبیب زہرا', 'سید منظر حسین', 'کنڈرہ غلام علی حال لکھنؤ'), // VERIFY: husband and mohalla
  ]),
  f('شہر بانو', 'سید ہادی حسن', 'گذری'),
])

// حسن علی: eight children on two bars joined by a box edge
const hasanAli102 = m('حسن علی', [
  m('عباس علی'),
  f('حسن زہرا', 'سید آل مصطفیٰ', 'گذری'),
  f('مہر بانو', 'سید محمد زرتین', 'چاہ شور بجیدرہ'), // VERIFY: husband name
  f('گل زہرا', 'سید ثقلین احمد', 'بجیدرہ'), // VERIFY: husband name
  m('محسن علی'),
  m('حسنین علی'),
  m('حسین علی'),
  m('سجاد علی'),
])

// حسین (child of صفی حسن's wrapped list): six children
const husainSafi102 = m('حسین', [
  m('سمی حسنین', [ // VERIFY: name reads like سمی / سنجی
    f('طاہرہ خاتون', 'سید ممتاز السلام', 'جارجہ'), // VERIFY: mohalla
    f('نسرین بانو', 'سید ابوالفضل عباس', 'گذری'),
  ]),
  m('مہدی حسنین', [f('سونیا')]), // VERIFY: سونیا is smudged
  f('مطاہرہ خاتون', 'سید وصی مرتضیٰ', 'گذری'),
  f('مشاہدہ خاتون', 'سید یوسف حسین', 'گذری'),
  m('رضی حسنین', [
    m('محمد عارف حسین'),
    f('ارمان بانو'),
    m('کاشف حسین'),
    m('کامران حسین'),
  ]),
  m('علی حسنین', 'لاولد'),
])

const aliTaqi102 = m('علی تقی', [
  muhammadTaqi102, // tatima slip (photo page10) replaces the 4 children drawn here; see header
  f('شمیمہ خاتون', 'سید تقی ہادی', 'بجیدرہ'),
  m('محمد علی', [m('محمد صمد'), m('خرم علی')]),
])

// صفی حسن: one sibling list drawn on four bars joined by box edges
const safiHasan102 = m('صفی حسن', [
  f('مبارکہ خاتون', 'سید مظہر حسن', 'گذری'),
  f('عفیفہ خاتون', 'سید مقبول احمد', 'بخشی'), // VERIFY: mohalla reading
  f('صادقہ خاتون', 'سید زائر حسین', 'گذری'),
  f('کاظمہ خاتون', 'سید علی احمد', 'بجیدرہ'),
  f('کنیزہ خاتون', 'سید رفیق حسن', 'بجیدرہ حال گذری'),
  f('ریاض بانو', 'سید اختر علی', 'چاہ غوری'),
  aliTaqi102,
  hasanAli102,
  husainSafi102,
]) // VERIFY: wrapped bars; order of the last two bars (ریاض بانو, علی تقی / حسن علی, حسین) follows the drawing

// وصی حسن
const hadiHasan102 = m('ہادی حسن', [
  m('علی زاید', [
    m('علی طاہر', [f('معصومہ بتول')]),
    m('علی ناصر'),
    f('سنبل فاطمہ'), // VERIFY: one name or two (سنبل / فاطمہ)
    f('شگفتہ ارم', 'سید معصوم حیدر', 'بنگلہ'), // VERIFY: husband line sits under شگفتہ ارم
  ]),
  f('شبیہ زہرا', 'سید محمد علی', 'گذری'),
  m('علی عابد', [
    m('علی باقر', [m('محمد علی ظہیر'), f('صدرہ بتول')]), // VERIFY: ظہیر / زہیر
    f('کنیز زینب', 'سید شمیم رضا', 'چھیوڑہ حال دالشمندان'),
    m('علی ساجد', [f('زہرا بتول'), f('طہ بتول'), f('عالیہ بتول')]), // VERIFY: second name (طہ / طلہ)
  ]),
])

// VERIFY: heading father reads "ابن حسن"
const ibnHasan102 = onPage(102, m('ابن حسن', [
  waliHasan102,
  safiHasan102,
  m('وصی حسن', [
    f('عطیہ خاتون', 'سید زائر حسین', 'گذری'),
    f('شاکرہ خاتون', 'سید محمود حسن', 'گذری'),
    hadiHasan102,
    f('نسیمہ خاتون', 'سید علی تقی', 'گذری'),
  ]),
]))

// ───────── chart 3 ─────────

const mazharHasan102 = onPage(102, m('مظہر حسن', [
  f('دختر', 'سید رضا احمد', 'گذری'), // VERIFY: daughter is printed only as "دختر", no name
  f('منتبہ خاتون', 'سید رضی الحسن', 'گذری'), // VERIFY: name reading
  m('اصغر حسن', [
    f('مرتضائی خاتون', 'سید حسنین احمد', 'گذری'),
    m('سبط حسنین', 'لاولد'),
    f('مسماۃ جمعی', 'سید مہتد علی', 'گذری'), // VERIFY: husband name
  ]),
  m('اظہر حسن', [
    m('عسکری حسن', [
      m('علی عباس', 'لاولد'),
      f('شبیہ فاطمہ', 'سید طالب حسین', 'حال خٹائی'), // VERIFY: husband and mohalla
      m('منظر عباس', [
        f('نسیم السحر'),
        f('نجم السحر', 'سید امام مجتبیٰ', 'چھیوڑہ'),
        f('زیب السحر'),
      ]),
      f('حسین فاطمہ', 'سید عزاد حسین', 'مجاپوتہ'), // VERIFY: husband name
      m('حسن عباس', [f('نازیہ بانو'), m('حسین عباس'), f('شازیہ بانو')]),
    ]),
    muhammadMehdi103,
    f('رئیسہ خاتون', 'سید ملیح الحسن', 'گذری'),
    f('ملیکہ خاتون', 'سید معز علی', 'اغوانپور حال کالی پلڑی'), // VERIFY: mohalla
    f('واجدہ خاتون', 'سید عرفان احمد', 'گذری'),
    akhtarHasan103,
    f('وحیدہ خاتون'),
  ]), // VERIFY: seven children on one bar wrapped onto a second bar; the mark (1) sits beside اظہر حسن
  m('اطہر حسن', [
    f('عقیقہ خاتون', 'سید حیدر علی', 'گذری'),
    f('سیدہ خاتون', 'سید ابوالحسین', 'گذری'),
    f('شمیمہ خاتون', 'سید یقین حسن', 'گذری'),
    mutaharHasan103,
  ]),
]))

// ───────────────────────── page 101 ─────────────────────────
const habibHasan101 = onPage(101, m('حبیب حسن', [
  m('شیر حسن', [
    m('محمد علی'),
    f('شبانہ بانو', 'سید مہدی حسن'),
    f('صدف بانو'),
    m('محمد حیدر'),
    f('کرن بانو'),
    f('کنول زہرا'),
  ]),
  f('ریحانہ بانو', 'سید مجتبیٰ حسن', 'لکھنؤ'),
  m('ابن حیدر', [
    f('ہما بانو'),
    m('احسن حسن'),
    f('صنوبر بانو'),
    m('محسن حسن'),
    f('کہکشاں بانو'),
  ]),
  f('طلعت بانو', 'سید سبط محمد'),
  f('نسیم بانو', 'سید کرار حیدر زیدی', 'مظفر نگر'),
  m('اظہر حسن', [
    f('گل زہرا'),
    m('اظہر حسن'),
    f('ام زہرا'),
  ]),
  f('تصویر بانو', 'پرویز'), // VERIFY: husband printed without سید
  m('انور حسن', [
    f('کنول زہرا'),
    m('ارسلان'), // VERIFY: long arrow to a small-script "سید ارسلان", no box around it
    f('نیلم زہرا'),
  ]), // VERIFY: انور / الور
]))

const muhammadSibtain101 = onPage(101, m('محمد سبطین', [
  m('عسکرین', [
    m('محمد کاظمین', [
      m('حسن طاہر', [
        f('اختر فاطمہ'), // VERIFY: first name (اختر / افتر)
        m('حسن ریاض'), // VERIFY: printed "ریاض حسن" over سید; order of the two words
        f('تسلیم فاطمہ'),
        f('اعجاز فاطمہ'),
      ]),
      f('تنزین فاطمہ', 'سید حیدر رضا', 'سدو'), // VERIFY: first name and mohalla (سدو)
      m('حسن جاوید', [
        f('فرجین زہرا'),
        m('حسن مہدی'),
        f('شازیہ بانو'),
        f('مریم زہرا'),
      ]),
    ]),
    m('حبیب السیدین'),
    m('حبیب الصادقین'),
    m('زین العابدین', [
      m('ضیاء اعجاز'),
      m('کلب عباس'),
    ]),
    f('ریاض فاطمہ', 'سید صابر حسین', 'گذری'),
    f('نرجس فاطمہ', 'سید مہند علی', 'گذری'), // VERIFY: husband's name (مہند / مہندی)
    m('علی حسن', [
      m('رضی حسن'),
      f('تحسین فاطمہ', 'سید ضیاء اعجاز', 'گذری'),
      m('اعجاز حسن'),
    ]),
  ]),
]))

const nasimHasan101 = onPage(101, m('نسیم حسن', [
  m('محمد ابوطالب', [
    f('جمال زہرا'),
    f('نسیم زہرا', 'سید شیان رضا', 'دانشمندان', 'زوجہ اولیٰ'), // VERIFY: husband's name and the word before it (اولی)
    f('صبیحہ خاتون', 'سید علی منتظر رضا', 'گیر مناف'), // VERIFY: husband's name
    m('اسد علی', [
      m('غیور علی'),
      f('مدحت زہرا'),
      m('مرتضیٰ علی'),
    ]),
    m('محمد علی', [
      f('مریم'),
      m('عامر عباس'),
      f('زینب'),
    ]),
    m('علی', 'عرف بلال', [
      f('ندا زہرا'),
      m('عظیم علی'),
      m('فہیم علی'),
      f('ثنا زہرا'),
      f('ولا زہرا'),
    ]),
  ]), // VERIFY: first word of his name (محمد) is written small above سید
  m('عبدالمطلب', 'لاولد'),
  f('ام لیلیٰ', 'سید حسن', 'دانشمندان'),
  f('رابعہ خاتون', 'سید علی رضا', 'گذری'),
  f('زرینہ خاتون', 'سید محمد عبادت', 'شفاعت پوتہ'), // VERIFY: husband's name (عبادت)
  f('ام البنین', 'سید قمر الحسن', 'بگلہ'),
  f('شافعہ خاتون', 'سید علی', 'دانشمندان'),
  m('محمد علی جعفر', [
    f('حسین زہرا', 'سید غلام عباس', 'گذری'),
    f('ہلال زہرا', 'سید وصال محمد', 'گذری'),
  ]),
  f('شمیم زہرا', 'سید محمد منور', 'گذری'), // VERIFY: منور / معور
  m('محمد ہاشم', [
    f('روبینہ ہاشم'), // VERIFY: name (روبینہ / روبیہ ہاشم)
    f('سکینہ بانو', 'سید تنویر الحسن', 'کوٹ'),
    f('نہمینہ خاتون'), // VERIFY: spelling
    m('اعجاز حیدر'),
    m('نسیم حیدر'),
  ]),
]))

const abdulHadi101 = onPage(101, m('عبدالہادی', 'عرف ہادی علی', [
  m('نیاز علی', [
    m('محسن علی', [
      f('دختر', 'سید عضنفر حسین', 'گذری'), // VERIFY: the book gives no name, only "دختر"
      m('محمد احسن', 'لاولد'),
    ]),
  ]),
  m('مردان علی', [
    m('محمد مہدی حسن', [
      m('رئیس حسن', [ // heading of page 102 says رئیس حسن; the drawing here says only حسن
        taibHasan102,
        m('طیب حسن', 'لاولد'),
      ]),
      f('دختر', 'سید مصطفیٰ حسن', 'گذری'), // VERIFY: the book gives no name, only "دختر"
      ibnHasan102,
    ]),
  ]),
  f('عمدۃ النساء', 'سید نجات اللہ', 'گذری'),
  onPage(105, m('سرفراز علی')),
  f('زیب النساء', 'سید محمد علی', 'گذری'),
  // فرحت علی: six children on two joined bars (top bar first, right to left, then the bottom bar)
  m('فرحت علی', [
    f('صبیح النساء', 'سید خادم علی', 'گذری'), // VERIFY: husband's name (خادم / خام)
    f('مسیح النساء', 'سید محمد عامل', 'قاضی زادہ'),
    f('راحت النساء'),
    f('رقیہ خاتون', 'سید علی عباس', 'گذری'),
    mazharHasan102,
    ibrahimAli103,
  ]),
]))

// ───────────────────────── page 100 ─────────────────────────
const shamimRaza100 = m('شمیم رضا', [
  f('زینت شمیم'),
  f('سارا شمیم'),
  m('امتیاز رضا'),
  m('رضا علی'),
])

const najmulHasan100 = m('نجم الحسن', [
  m('علی عباس'),
  f('حنا عنبرین'), // VERIFY: one name or two (حنا / عنبرین); only one arrow is drawn
  f('ثنا زہرا'),
])

// Handwritten-looking additions in lighter ink under اعجاز رسول
const ejazRasool100 = m('اعجاز رسول', [
  m('محسن محمد'), // VERIFY: handwritten, printed without سید
  f('علینہ زہرا'), // VERIFY: handwritten
])

// ذاکر حسین: seven children, drawn on two joined bars (top bar of four, then a wrapped bar of three)
const zakirHusain100 = m('ذاکر حسین', [
  najmulHasan100,
  f('تنظیم زہرا', 'سید اسد علی'), // VERIFY: name reads like تنظیم زعنا; no mohalla printed
  f('حبیبہ کوثر', 'سید محمد حسن', 'لکڑہ'), // VERIFY: mohalla
  ejazRasool100,
  f('ام سلمیٰ'),
  m('شمس الحسن'),
  m('قمر الحسن'),
])

// علی رضا: five children
const aliRaza100 = m('علی رضا', [
  f('ثریا بانو'),
  f('رفیقہ خاتون', 'سید باقر حسین', 'گذری'),
  m('کاظم رضا', 'لاولد'),
  f('صغیرہ بانو', 'سید ہاشم رضا', 'شفاعت پوتہ'),
  shamimRaza100,
])

// ───────── امتیاز حسن (eldest son of اعجاز حسن) ─────────

const sharifHasan100 = m('شریف حسن', [
  m('ابوتراب', [
    f('حنا بانو'),
    f('صدف بانو'), // VERIFY: a note "صفحہ 101" is printed to the left of her name
  ]),
  f('حسن بانو', 'سید محمد انور', 'گذری'),
])

// Seven children on two joined bars (the second bar is the bottom edge of a drawn box)
const imtiazHasan100 = m('امتیاز حسن', [
  sharifHasan100,
  f('مخدومہ خاتون', 'سید شاہد حسین', 'بگلہ'), // VERIFY: mohalla (بگلہ / بنگلہ)
  f('راضیہ خاتون', 'سید مشاہد حسین', 'بگلہ', 'زوجہ ثانی'), // VERIFY: name (راضیہ / رافعہ), husband and mohalla
  f('ذاکرہ خاتون', 'سید بنی محمد', 'چاہ شور حال لکڑہ'), // VERIFY: husband's name order and mohalla
  habibHasan101,
  zakirHusain100,
  aliRaza100,
])

// ───────── ممتاز حسن ─────────

const hasanMujtaba100 = m('حسن مجتبیٰ', [m('احمد مجتبیٰ'), f('زینب')])

const razaKamal100 = m('رضا کمال', [
  f('زہرا کمال'),
  f('فاطمہ کمال'),
  m('رضا علی'), // drawn on a stepped line from the left end of the bar
])

const haidarRaza100 = m('حیدر رضا', [
  m('حسین اختر', [
    f('سکینہ رباب'),
    m('رضا حسن'),
    f('سیدہ رباب'),
  ]),
  f('ممتاز بانو'),
  m('رضا ممتاز'),
  razaKamal100,
])

const muhammadRaza100 = m('محمد رضا', [
  m('حسن رضا', 'لاولد'),
  haidarRaza100,
  f('محمودہ خاتون', 'سید محمد خامس', 'شفاعت پوتہ'), // VERIFY: husband's name (خامس)
  f('طاہرہ خاتون', 'سید غلام الکونین', 'گذری'), // VERIFY: printed "سید غلام سید الکونین"
  hasanMujtaba100,
])

const mumtazHasan100 = m('ممتاز حسن', [
  f('طہرہ خاتون', 'سید شریف حسن', 'گذری'),
  f('سلمیٰ خاتون', 'سید زوار حسن', 'گذری'),
  muhammadRaza100,
  f('حبیبہ خاتون', 'سید شکور حسن', 'گذری'),
])

// ───────── احمد حسین ─────────

// محمد حسنین: six children
const muhammadHusnain100 = m('محمد حسنین', [
  m('توقیر اعجاز'),
  m('ابوالفضل عباس', [m('نوید عباس'), m('خرم عباس'), m('فراز عباس')]),
  f('عروس زہرا', 'سید عارف رضا', 'لکھنؤ'),
  f('عروج زہرا', 'سید ابن محمد', 'چھنگا دروازہ'), // VERIFY: husband's name (ابن محمد)
  m('افضال حیدر', [m('جمیل حیدر'), f('بہوش زہرا'), m('تاجدار حیدر')]), // VERIFY: بہوش زہرا
  m('نسیم اعجاز', [m('فرخ اعجاز'), m('شاہ رخ اعجاز'), m('عابد اعجاز')]),
])

// This son's first child طلعت زہرا is on the top bar; four sons hang from the wrapped bar below.
const muhammadZahrFatin100 = m('محمد زہر فتین', [
  f('طلعت زہرا', 'سید قیصر حسن', 'گذری'),
  m('کمال حیدر'),
  m('اقبال حیدر', [m('سرجیل حیدر'), f('کومل'), f('فاطمہ')]), // VERIFY: سرجیل (printed سرجیل / سرحیل)
  m('رضا حیدر'),
  m('نشاط حیدر', [m('راحیل اعجاز'), f('تعبیر زہرا')]),
]) // VERIFY: his name (reads محمد زہر فتین); also whether the wrapped bar is eldest-first from the right

const ezadarHusain100 = m('عزادار حسین', [
  m('احمد عباس'),
  m('حسن اعجاز', [m('طہ احسن')]),
  f('سروش زہرا', 'سید ظفر مصطفیٰ', 'کشکولی'), // VERIFY: husband's name and mohalla
])

const ahmadHusain100 = m('احمد حسین', [
  f('صالحہ خاتون', 'سید حبیب الثقلین', 'شفاعت پوتہ'), // VERIFY: husband's name (حبیب الثقلین)
  ezadarHusain100,
  f('عارفہ خاتون', 'سید محمد میر', 'چاہ شور پچدرہ'),
  muhammadZahrFatin100,
  muhammadHusnain100,
])

// ───────── اعجاز حسن and his brother/sisters (children of محمد علی حسن) ─────────

const ejazHasan100 = m('اعجاز حسن', [
  imtiazHasan100,
  mumtazHasan100,
  f('حامدہ خاتون', 'سید معصوم حسن', 'گذری'), // VERIFY: husband (same name as طیبہ's husband)
  f('حاجرہ خاتون', 'سید ظفر حسن', 'گذری'),
  muhammadSibtain101,
  f('طیبہ خاتون', 'سید معصوم حسن', 'گذری'),
  ahmadHusain100,
  m('سبط عباس', 'لاولد'),
  nasimHasan101,
])

const mustafaHasan100 = m('مصطفیٰ حسن', [
  m('الطاف حسن', 'لاولد'),
  f('ذکیہ خاتون', 'سید وصی حسن', 'گذری'),
  f('حمیدہ خاتون', 'سید سبط رسول', 'گذری'),
  f('وصیہ خاتون', 'سید محمد سبطین', 'گذری'),
  f('لغیسہ خاتون', 'سید احمد حسین', 'گذری'), // VERIFY: name (لغیسہ / نفیسہ)
  f('معصومہ خاتون', 'سید طیب حسن', 'گذری'),
  m('معصوم حسن', 'لاولد'),
  m('دل الطاف', 'لاولد'), // VERIFY: name at the far left reads دل الطاف with a small word above it
])

const muhammadAliHasan100 = m('محمد علی حسن', [
  ejazHasan100,
  f('خاتون دولت', 'سید آل حسن', 'گذری'),
  f('ام کلثوم', 'سید آل احمد', 'گذری'),
  f('صبیح النساء', 'سید ابن حسن', 'گذری'),
  f('بانو', 'سید عنایت حسین', 'گذری'),
  m('شبیر حسن', 'لاولد'),
  f('سکینہ خاتون', 'سید مہدی حسن', 'گذری'),
  mustafaHasan100,
])

// ───────── the chart: صفحہ 95, ظہور علی بن اسد اللہ خان عرف میر کلو ─────────

const muhammadAli100 = m('محمد علی', [
  f('بی بی سکینہ', 'سید محمد کاظم حسین', 'مچھر ہٹہ'), // VERIFY: mohalla (reads محچر ہٹہ)
  muhammadAliHasan100,
  f('بی بی صغری', 'سید محسن علی', 'گذری'),
  m('مہدی حسن', 'لاولد'),
])

const nazarAli100 = m('نذر علی', [muhammadAli100])

const zuhoorAli100 = onPage(100, m('ظہور علی', [nazarAli100]))

// ───────────────────────── page 99 ─────────────────────────
const muhammadNazim99 = m('محمد ناظم', [m('محمد عاصم'), f('ماہ زہرا')])

const muhammadKazim99 = m('محمد کاظم', [
  muhammadNazim99,
  m('محمد ہاشم', 'لاولد'),
  f('سیدہ خاتون', 'سید علی حیدر', 'بچیدرہ'),
  f('نزہت بانو', 'سید علی عباس', 'گذری'),
  f('ریحان فاطمہ', 'سید علی', 'گذری'),
])

const mahmoodHasan99 = m('محمود حسن', [
  muhammadKazim99,
  f('فاطمہ خاتون', 'سید علی عابد', 'گذری'),
  m('محبوب حسن', 'لاولد'),
])

const nisarHaider99 = m('نثار حیدر', [m('شمیم رضا'), f('ام فاطمہ'), m('ندیم رضا')])

const sharifMurtaza99 = m('شریف مرتضیٰ', [
  f('اعجاز فاطمہ', 'سید باقر رضا', 'دانشمندان'),
  m('زہیر مرتضیٰ', 'لاولد'),
  f('سدتی'), // VERIFY: name reads like سدتی / سدرتی; printed without سید so taken as female
])

const murtazaHasan99 = m('ارتضیٰ حسن', [
  mahmoodHasan99,
  f('کنیز کبریٰ', 'سید شریف حسن', 'گذری'), // VERIFY: husband's name (شریف حسن / شریف حسین); a tiny word sits above her name
  f('کنیز صغریٰ', 'سید شریف مرتضیٰ', 'گذری'),
  m('التقی حسن', [nisarHaider99, m('شان حیدر', 'لاولد')]),
  m('مجتبیٰ حسن', 'لاولد'),
])

const masoomAli99 = onPage(99, m('معصوم علی', [
  m('رحیم علی', [
    m('شریعت حسین', [sharifMurtaza99]),
    f('علی النساء', 'سید محمد حسن', 'ترولیہ حال گذری'), // VERIFY: mohalla (ترولیہ؟)
  ]),
  m('احمد حسین', [m('مرتضیٰ حسن', [murtazaHasan99])]), // VERIFY: ارتضیٰ حسن / مرتضیٰ حسن spelling (two generations)
]))

// ───────── chart 2 ─────────

// علمدار حسین's two sons; their own children are on the bars at the bottom of the page
const alamdarHusain99 = m('علمدار حسین', [
  m('مختار احمد', [
    m('عباس حسین'),
    m('غلام حسین'),
    m('اصغر حسین'),
    f('مہ لقا مختار'), // VERIFY: one name or two (مہ لقا / مختار)
  ]),
  m('وصال احمد', [f('گلشن زہرا'), m('اعجاز احمد'), m('جمال احمد'), m('کمال احمد')]),
])

// نہال احمد: six children drawn on three joined boxes/bars (two sons without issue, two daughters, then علمدار حسین and a daughter)
const nihalAhmad99 = m('نہال احمد', [
  m('عباس حسن', 'لاولد'),
  m('ظل حسنین', 'لاولد'),
  f('کنیز فاطمہ', 'سید علی حسن', 'گذری'),
  f('عزیز فاطمہ', 'سید ذوالفقار حیدر', 'لکڑہ'), // VERIFY: mohalla (لکڑہ / نکڑہ)
  alamdarHusain99, // VERIFY: the third row (علمدار حسین, حسنین فاطمہ) is read as the wrapped continuation of نہال احمد's list
  f('حسنین فاطمہ', 'سید موصوف حسنان', 'چھیوڑہ'), // VERIFY: husband's name
])

const aliSajjad99 = m('علی سجاد', [
  f('نرگس فاطمہ', 'سید کوثر عباس'),
  f('نگین فاطمہ', 'سید علی نیاز', 'سرو'), // VERIFY: mohalla
  f('شباب فاطمہ'),
  f('زہرا جبین', 'سید بلال احمد', 'الہ آباد'),
  f('فرحت جبین', 'سید حسنین ظہیر', 'قاضی زادہ'), // VERIFY: husband's name; (wrapped two-row list, top row read first)
])

const sibtRasool99 = m('سبط رسول', [
  aliSajjad99,
  f('عالمہ خاتون', 'سید محمد', 'گذری'),
  m('علی اکبر', [
    f('معینہ خاتون', 'سید ظفر عباس', 'دربار کلاں'),
    f('نعیمہ خاتون', 'سید شمیم حیدر', 'شفاعت پوتہ'),
  ]),
  f('ہاشمہ خاتون', 'سید صدر الحسن', 'دربار کلاں'),
])

const muhammadAbid99 = m('محمد عابد', [f('وجیہہ بتول'), m('علی محسن'), m('فرحان علی')])

const riyazatullahSon99 = m('ریاضت اللہ', [
  m('جاوید عباس', [m('حسن عباس')]),
  m('محمد عیسیٰ'),
  muhammadAbid99,
  f('فرزانہ بانو', 'سید اقبال رضا', 'گھیر مناف'),
  m('اسد عباس'),
  m('محمد حیدر'),
])

const aliHusain99 = m('علی حسین', [
  f('سبطین فاطمہ', 'سید نذر حیدر', 'گذری'), // VERIFY: husband's name
  f('حسین فاطمہ', 'سید منتخب الحسن', 'اعوان پور حال قاضی گلی'), // VERIFY: husband's name and mohalla
  f('حسنین فاطمہ', 'سید حمید حسن', 'شاہ علی سرائے'),
  m('علی حسنین', [
    f('فوزیہ بانو', 'سید مسعود مختار', 'گذری'),
    m('کاشف حسنین'),
    f('نوشین بانو', 'سید ندیم حیدر', 'چھیوڑہ'),
  ]),
  f('ثقلین فاطمہ', 'سید صاحب حسین جعفری', 'آگرہ'),
  m('محمود سعید', [f('مدیحہ فاطمہ'), m('محمد حسن')]), // VERIFY: a tiny word (الور) beside محمد حسن is not included
  f('انیس فاطمہ', 'سید علی عباس زیدی'),
  m('علی سبطین', 'لاولد'),
])

const rizaqatullahElder99 = m('ریاضت اللہ', [
  riyazatullahSon99,
  f('ام فروہ', 'سید مہاجر حسن', 'دانشمندان'),
  f('ام البنین'),
])

const saadatullahSon99 = m('سعادت اللہ', [
  m('ضیاء اللہ', 'لاولد'),
  f('حنیفہ خاتون', 'سید معمر حسن', 'گذری'), // VERIFY: husband's name (معمر / نعمت)
  f('ضامنہ خاتون', 'سید غلام مصطفیٰ', 'بچیدرہ'),
  rizaqatullahElder99,
  sibtRasool99,
  nihalAhmad99,
])

const saadatullah99 = onPage(99, m('سعادت اللہ', [
  m('رازق علی', [
    m('مصباح الحسن', [f('سکینہ خاتون', 'سید سلطان حسین', 'گذری'), aliHusain99]),
    m('سراج الحسن', 'لاولد'),
    f('ولی النساء', 'سید سبط حسین', 'گذری'),
    f('منجھو', 'سید ابراہیم علی', 'گذری', 'سماۃ'), // VERIFY: printed "سماۃ منجھو"
    f('شرافت النساء', 'سید زائر حسین', 'گذری'),
  ]),
  m('یعقوب علی', 'لاولد'),
  m('غالب علی', 'لاولد'),
  m('نجابت اللہ', [saadatullahSon99, f('سیدہ خاتون', 'سید مصطفیٰ احسن', 'گذری')]),
]))

// ───────────────────────── page 98 (supplement slip) ─────────────────────────
const jafarRaza98 = onPage(98, m('جعفر رضا', [
  m('جوہر رضا', [
    f('زینب نقوی'),
    f('سیدہ خدیجہ نقوی'),
    m('محمد علی'),
  ]),
  m('حیدر عباس'),
  f('حسنین فاطمہ'),
  m('محمد رضا'),
  f('نفیس فاطمہ'),
  m('شبیر رضا', [f('آمنہ نقوی')]),
]))

// ───────────────────────── page 98 ─────────────────────────
const hasanAbbas98 = m('حسن عباس', [
  m('ظفر عباس'),
  f('فرحین زینب'), // VERIFY: may be two names (فرحین / زینب)
  f('آفرین زینب'), // VERIFY: may be two names (آفرین / زینب)
  m('یاور عباس'),
])
const husainAbbas98 = m('حسین عباس', [m('عابد عباس'), m('غضنفر عباس'), m('محمد یوسف')])
const mubahirHusain98 = m('مباہر حسین', [
  f('شمیم بانو'),
  f('نسیم بانو', 'سید حسنین شہنشاہ', 'لکڑہ'), // VERIFY: this husband line sits between شمیم and نسیم; husband name and mohalla
  f('نازنین بانو'),
  hasanAbbas98,
  husainAbbas98,
]) // VERIFY: box, 3 daughters on top and 2 sons on the bottom edge counted as one sibling list
const sajjadKamal98 = m('سجاد کمال', [m('محمد فراز علی')])
const munazirHusain98 = m('مناظر حسین', [
  sajjadKamal98,
  f('ہلال زہرا', 'سید فخر عالم', 'اعوان پور'), // VERIFY: husband name and mohalla
  m('ناصر حسین', 'لاولد'),
  f('جمال فاطمہ', 'سید منور رضا', 'دانشمندان'),
  f('نسیم فاطمہ', 'سید نجم وقار', 'سرسی'), // VERIFY: husband name and mohalla
  f('نعیم فاطمہ'),
])
const baqirHusain98 = m('باقر حسین', [
  f('ریحاب فاطمہ', 'سید لقی حیدر', 'حقانی حال دربار کلاں'), // VERIFY: لقی / تقی
  m('محمد صادق', [f('کنیز فاطمہ'), m('رضا صادق')]),
  f('فردوس فاطمہ', 'سید حسین احمد', 'گذری'),
  f('نشاط فاطمہ', 'سید ناظم حسین', 'قاضی زادہ'),
  m('علی صادق', [m('حسین صادق'), f('مبشرہ خاتون')]),
  f('شہناز فاطمہ', 'سید علی حیدر', 'مندن چوب حال خطائی'), // VERIFY: mohalla reading
])
const zafarHasan98 = m('ظفر حسن', [
  f('حسینہ خاتون', 'سید نصور حسین', 'پیلی بھیت'), // VERIFY: first word (حسینہ), husband name (نصور)
  f('جعفرہ خاتون', 'سید محمد رضا', 'گذری', 'زوجہ اولیٰ'), // VERIFY: the word اولی before the husband name
  f('باقرہ خاتون', 'سید ہاشم حسین', 'محمد شاہ حال قاضی زادہ'), // VERIFY: mohalla
  f('عامرہ خاتون', 'سید سبط طاہر', 'نتر بولیہ'), // VERIFY: mohalla
  f('حلیمہ خاتون', 'سید جو حسن', 'قاضی زادہ حال گذری'), // VERIFY: husband name
  baqirHusain98,
  munazirHusain98,
  mubahirHusain98,
]) // VERIFY: 5 daughters then 3 sons, drawn on two joined bars; the order between the two rows is assumed

// ── زوار حسین line ──
const ghulamHusain98 = m('غلام الحسین', [
  f('سلمیٰ طاہرہ'), // VERIFY: one arrow, so one name
  m('غضنفر ممتاز'), // VERIFY: printed without سید but a male name; one name or two
  m('عظیم علی'),
  f('فاطمہ رفعت'),
])
const ghulamSaqalain98 = m('غلام الثقلین', [
  f('زہرا جبین', 'سید نصف حیدر', 'شفاعت پوتہ'), // VERIFY: husband name
  ghulamHusain98,
  f('شریا جبین', 'سید حسن بن خامس', 'شفاعت پوتہ'), // VERIFY: husband name
  f('فرحانہ جبین', 'سید رحیم جیب', 'گذری'), // VERIFY: husband name
  m('غلام سبطین', 'لاولد'),
])
const ghulamKaunain98 = m('غلام الکونین', [m('رضا عباس'), f('سلمیٰ', 'سید غروج الحسن', 'کوٹ'), m('ضیا عباس')]) // VERIFY: husband name
const zawarHusain98 = m('زوار حسین', [
  ghulamSaqalain98,
  f('صفت زہرا', 'سید غلام حیدر', 'گذری'),
  f('ام کلثوم', 'سید ذوالفقار حیدر', 'پچدرہ'),
  f('سکینہ خاتون', 'سید حیدر حسن', 'گذری'), // VERIFY: husband name
  f('زینب خاتون', 'سید شفیع الحسینی', 'گھیر مناف'), // VERIFY: husband name
  f('ام فروہ', 'سید سمیع الحسن', 'گذری'),
  ghulamKaunain98,
])

// ── آل احمد line ──
const aliAthar98 = m('علی اطہر', [
  f('ام زہرا'),
  m('علی بشیر'),
  m('علی صفدر'),
  f('تبسم زہرا'),
  m('علی نوید'),
  m('محمد آصف'),
]) // VERIFY: drawn as a snake (top bar, box wall, bottom bar); the order along it is assumed
const aliRaza98 = m('علی رضا', [f('کرن فاطمہ'), m('سجاد قمر رضا')])
const akhtarHasan98 = m('اختر حسن', [m('علی افسر'), f('شاہین فاطمہ'), aliRaza98, aliAthar98])
const shanHasan98 = m('شان حسن', [m('محمد نقی'), m('محمد تقی')])
const muhammadHasan98 = m('محمد حسن', [m('محمد نور نظر')]) // VERIFY: child name
const shabihJawed98 = m('محمد شبیہ جاوید', [m('رضا عباس'), m('ضیا عباس')])
const muhammadMuttaqi98 = m('محمد متقی', [
  muhammadHasan98,
  shanHasan98,
  f('رفیق فاطمہ'),
  shabihJawed98,
]) // VERIFY: the bar wraps and bends; محمد شبیہ جاوید is taken as the last child on it
const zareefHasan98 = m('ظریف حسن', [
  f('وحیدہ خاتون', 'سید ذو الحسن', 'مجاپورہ حال شفاعت پوتہ'), // VERIFY: husband name and mohalla
  f('فہمیدہ خاتون', 'سید امر رضا', 'محمد شاہ حال دانشمندان'), // VERIFY: mohalla
  m('محمد مہدی', 'لاولد'),
  muhammadMuttaqi98,
  akhtarHasan98,
])
const aliMuhammad98 = m('علی محمد', [m('علی غالب'), f('رضوانہ فاطمہ'), m('محمد آصف'), f('ام فروہ')])
const sabirHusain98 = m('صابر حسین', [
  aliMuhammad98,
  f('رضیہ خاتون', 'سید تصور رضا', 'سامانہ حال گذری'),
  f('ذکیہ خاتون', 'سید حسین محمد', 'عثمان پور'), // VERIFY: ذکیہ / ذاکرہ
  f('شباب زہرا', 'سید شمیم رضا', 'گذری'),
  f('ام رباب'),
])
const zahirHusain98 = m('زاہر حسین', [sabirHusain98, jafarRaza98])
const latifHasan98 = m('لطیف حسن', [
  f('بانو', 'شیخ', 'مراد آباد', 'مسماۃ'), // VERIFY: husband full name
  f('اختر بانو', 'سید محمد متقی', 'گذری', 'زوجہ اولیٰ'),
])
const jaleesHasan98 = m('جلیس حسن', [
  f('شمیم فاطمہ', 'سید سلطان حسن خان', 'دانشمندان'),
  f('نسیم فاطمہ', 'سید ظفر حسن', 'سدو'), // VERIFY: husband name and mohalla
  f('فردوس فاطمہ', 'سید قائم رضا', 'ستھی'), // VERIFY: mohalla
  m('شان رضا', [
    f('طاہرہ خاتون'),
    f('فرحت فاطمہ'),
    f('شاہین فاطمہ'),
    f('طلعت فاطمہ'),
    m('علی عباس'),
    f('سیدہ خاتون', 'سید کاظم رضا', 'سرائے کھنہ'), // VERIFY: mohalla
  ]), // VERIFY: box, 4 on top and 2 on the bottom edge counted as one list
])
const aalAhmad98 = m('آل احمد', [
  zareefHasan98,
  f('میمونہ خاتون', 'سید محمود حسن', 'دانشمندان'),
  latifHasan98,
  f('مصنفہ خاتون', 'سید آل یٰسین', 'گذری', 'عرف دھنو'),
  zahirHusain98,
  f('فاطمہ خاتون', 'سید کاظم رضا', 'گذری'),
  m('انیس حسن', [f('ثامنہ خاتون', 'سید یٰسین حسن', 'گذری')]),
  m('ریاض حسن', [f('مدنیہ خاتون', 'سید محمد عسکری', 'گذری')]),
  jaleesHasan98,
  m('امر حسن', 'لاولد'),
])

// ── Page 96 root ──
// سید غضنفر حسین بن سید عظیم علی (صفحہ 95); seven children on the top bar.
const ghazanfarHusain98 = onPage(98, m('غضنفر حسین', [
  zafarHasan98,
  f('زائرہ خاتون', 'سید حسن', 'گذری'), // VERIFY: husband name (a loop before حسن)
  f('بتول', 'سید سعادت علی', 'گذری', 'مسماۃ'),
  zawarHusain98,
  f('زہرا', 'سید سلیم حسن', 'گذری', 'مسماۃ'), // VERIFY: husband name
  m('نہال احمد', 'لاولد'),
  aalAhmad98,
]))

// ───────────────────────── page 97 ─────────────────────────
const haidarHasan97 = onPage(97, m('حیدر حسن', [
  m('جوہر حسن', [m('حسنین رضا')]),
  m('کوثر حسن', [f('شازیہ حسن'), m('سلمان حسن')]),
  f('فرزانہ خاتون', 'سید شمیم حیدر', 'گذری'),
  m('قیصر حسن', [f('ثنا زہرا'), m('تالش حیدر')]), // VERIFY: ثنا / ثنائ زہرا
  m('گوہر حسن'),
]))

// ───────────── chart 2 ─────────────
const manawarHasan97 = onPage(97, m('منور حسن', [ // VERIFY: father's name (read نہتور / منور)
  m('تصور حسن', [
    // box = one wrapped sibling list: top row عارف حسن, تسلیم زہرا, مہر فاطمہ; bottom row نیر حسن, طیب حسن, نرجس فاطمہ
    m('عارف حسن'),
    f('تسلیم زہرا', 'سید یوسف رضا', 'لکھنؤ'),
    f('مہر فاطمہ', 'اسد سلمان'), // VERIFY: husband printed without سید
    m('نیر حسن', [f('نا بتول')]), // VERIFY: first letter of نیر / شیر; daughter's name (نا بتول / ذا بتول)
    m('طیب حسن', [f('مصباح'), m('نادر حسن')]), // VERIFY: مصباح printed without سید
    f('نرجس فاطمہ', 'سید تنویر حسن', 'گذری'), // VERIFY: نرجس
  ]),
  m('علی تصدیق', [
    m('علی فواد'),
    f('صبحی فاطمہ', 'سید توفیر حسن', 'گذری'),
    f('ام سلمیٰ'),
    m('علی آصف'),
  ]),
  f('ام الحسنین', 'سید محمد رضا', 'گذری'),
  f('سبط بنی'), // VERIFY: printed without سید, male-sounding name
  m('مصور حسن', 'لاولد'), // VERIFY: name (a small word نجم sits above it)
  m('تصویر حسن', [
    // box = one wrapped sibling list: فاطمہ, نسیم فاطمہ, زہرا, then تطہیر حسن, توفیر حسن, تنویر حسن
    f('فاطمہ'),
    f('نسیم فاطمہ', 'سید علی جعفر', 'بگلہ'),
    f('زہرا'),
    m('تطہیر حسن'),
    m('توفیر حسن', [m('حسن'), m('اصغر حسن')]),
    m('تنویر حسن', [
      m('عباس'),
      f('بتول زہرا'),
      m('اسد'),
      m('عابد'),
      m('علی'),
    ]),
  ]),
]))

// ───────────── chart 4 (with the "صفحہ ہذا" ذوالفقار حیدر family) ─────────────
// ذوالفقار حیدر بن سید حسن عسکری: heading "صفحہ ہذا", drawn at the bottom of this same page
const zulfiqarHaidar97 = m('ذوالفقار حیدر', [
  f('نجم زہرا'),
  m('محمد حیدر'),
  f('شمیم زہرا', 'سید میزاد حیدر'), // VERIFY: husband's name (میزاد / میراد)
  f('شان زہرا'),
])

// شمیم حیدر: seven children on one long bar whose left end runs down the page and hooks under his name
const shamimHaidar97 = m('شمیم حیدر', [
  m('ضیا حیدر'), // hangs from the bar's right end
  f('حسنین زہرا'),
  f('سبطین زہرا'),
  m('سجاد حیدر'),
  m('حسن حیدر'),
  m('حسین حیدر'),
  m('رضا حیدر'),
])

const hasanAskari97 = m('حسن عسکری', [
  // wrapped sibling list: top row حبیب حیدر, عفیفہ خاتون; second row محبوب حیدر, ذوالفقار حیدر, حسن فاطمہ
  m('حبیب حیدر', 'لاولد'),
  f('عفیفہ خاتون', 'سید محمد تورین', 'حقانی حال گذری'), // VERIFY: husband's name (تورین)
  m('محبوب حیدر', [shamimHaidar97, m('نسیم حیدر', 'لاولد')]),
  zulfiqarHaidar97,
  f('حسن فاطمہ', 'سید اخی حسین زیدی', 'جڑودی حال بھمر شہر'), // VERIFY: husband's name and mohalla (جڑودی / بھمر شہر)
])

const ghulamMurtaza97 = onPage(97, m('غلام مرتضیٰ', [
  m('فدا احمد', [
    f('امین دولت', 'سید طاہر الحسنی', 'دربار کلاں'), // VERIFY: her name (امین / ثمین) and husband's name
    m('فضا احمد', 'لاولد'),
  ]),
  f('طہ خاتون', 'سید عظیم حیدر', 'سامانہ حال گذری'),
  m('ضیا احمد', [
    f('مبینہ خاتون', 'سید یاسر حسین', 'گذری'),
    f('رقیہ خاتون', 'سید زبیر حسن', 'حقانی'),
  ]),
  f('صابرہ خاتون', 'سید نجم الحسن', 'بگلہ'),
  m('صغیر احمد', [
    f('محبوبہ خاتون', 'سید اختر بنی', 'حقانی'),
    f('فروہ خاتون', 'سید ماجد حسین', 'سامانہ حال گذری'), // VERIFY: husband's name (ماجد / محامد)
  ]),
  f('عاطرہ خاتون', 'سید مطیع الحسن', 'دانشمندان'),
  m('لقا احمد', [
    m('عباس حیدر', 'عرف چاند', [
      m('شباب حیدر', 'لاولد'),
      f('منورہ خاتون', 'سید ماہر حسین', 'عثمان پور حال نئی بستی'), // VERIFY: husband's name and mohalla
      m('آفتاب حیدر', 'لاولد'),
    ]),
  ]),
  hasanAskari97,
]))

// ───────────── chart 1 ─────────────
const mazaharUlHasan97 = onPage(97, m('مظاہر الحسن', [
  m('محمد عباس', [
    // box chain = one wrapped sibling list: عابد, حسن / شمیم, نسیم / علی عباس, امتیاز
    m('عابد عباس', 'لاولد'),
    m('حسن عباس'),
    f('شمیم بانو', 'سید شباب الحسن', 'شفاعت پوتہ'), // VERIFY: husband's name
    f('نسیم بانو', 'سید حسن طہیر', 'گذری'), // VERIFY: husband's name (طہیر)
    m('علی عباس', [m('باقر عباس'), f('رباب بانو'), m('صادق عباس')]),
    f('امتیاز بانو'),
  ]),
  m('محمد اقدس', [
    f('ذوالفقار بانو'),
    f('باوقار بانو'),
    f('نگار بانو'),
    m('محمد تقدیس'), // VERIFY: name (تقدیس / قدوس)
    m('محمد مقدس'),
  ]),
  m('محمد انور', [
    m('حسن انور'),
    f('بتول انور', 'سید علی زہیر', 'قاضی زادہ'),
    m('علی انور', [m('عدیل انور'), f('فریال انور'), f('خدیجہ انور')]),
    m('حسین انور'),
  ]),
  m('محمد جعفر', [
    m('حسن جعفر', [f('ٹیڈی')]), // VERIFY: daughter's name is hard to read (ٹیڈی / مہندی)
    m('حسین جعفر'),
  ]),
  m('محمد منور', 'عرف منو', [
    m('علی حیدر'),
    f('ممتاز بانو', 'سید رضا حیدر جلالی'),
    m('علی منور', [f('ام البنین'), f('شہر بانو')]),
  ]),
  m('محمد سلم', 'لاولد'), // VERIFY: name (سلم / سلیم)
  f('مختار بانو', 'سید اعجاز حسین', 'بگلہ'),
  m('محمد حبیب', [
    // box = wrapped sibling list: top row مہ جبین بانو, نازنین بانو; bottom row حسن حبیب, نعیم بانو, حسین بانو, علی حبیب
    f('مہ جبین بانو', 'سید حیدر رضا', 'گذری'),
    f('نازنین بانو', 'سید لطف محمد', 'للکوی'), // VERIFY: husband's name and mohalla
    m('حسن حبیب', [m('فراز حبیب'), f('عالیہ حبیب'), m('فواد حبیب')]),
    f('نعیم بانو', 'سید فصیح الحسن', 'گذری'),
    f('حسین بانو', 'سید علی حسین', 'گذری'), // VERIFY: husband's name (علی حسین / علی حسنین)
    m('علی حبیب', [
      m('عاصم حبیب'),
      m('شاید حبیب'),
      f('شائستہ خاتون', 'سید کاشف حسین', 'گذری'),
      m('سجاد حبیب'),
    ]),
  ]),
]))

// ───────────────────────── page 96 ─────────────────────────
const mazaharHasan96 = onPage(96, m('مظاہر حسن', [
  f('کاظمہ خاتون', 'سید فرمان احمد', 'گذری'), // VERIFY: first name (کاظمہ / فاطمہ)
  f('حب زہرا', 'سید احمد', 'گذری'),
  m('محب حسین', [
    // Two joined bars: both ends of the long bar drop to one extra child (انور حسین at the right end, شبر حسین at the left end)
    m('حب حسین', [
      m('انور حسین'), // VERIFY: drawn at the right end of the long bar, listed first
      m('حب ثقلین', 'لاولد'),
      f('منزلہ خاتون', 'سید ثمر مجتبیٰ', 'چھیوڑہ حال گذری'), // VERIFY: husband's name (ثمر / تمیز)
      f('منورہ خاتون', 'سید حیدر رضا', 'دانشمندان'),
      m('معنبر حسین', [m('فیض عباس'), m('سیف عباس')]),
      f('مبشرہ خاتون'),
      m('منور حسین', [f('تنظیم فاطمہ'), m('فراز عباس')]), // VERIFY: تنظیم / نظیم
      f('شگفتہ پروین', 'سید جاوید کمال', 'مجاپوتہ حال دانشمندان'),
      m('مظفر حسین'),
      m('حب سبطین', 'لاولد'),
      m('شبر حسین'), // VERIFY: drawn at the left end of the long bar, listed last
    ]),
  ]),
  f('محب زہرا', 'سید فردوس حسن', 'مچھرہٹہ'), // VERIFY: mohalla (مچھرہٹہ)
  m('حبیب ابن مظاہر', 'لاولد'),
]))

// Chart 2: سید مجتبیٰ حسن بن سید اسداللہ (صفحہ 95)
const mujtabaHasan96 = onPage(96, m('مجتبیٰ حسن', [
  m('اجتبیٰ حسن', [
    m('محمد', [
      f('مبارکہ خاتون'),
      f('شاہین فاطمہ'),
      m('محمد جوہر'),
      f('عابدہ خاتون'),
    ]),
    // نایاب حسن: seven children on two joined bars (top bar first)
    m('نایاب حسن', [
      f('نایاب زہرا'),
      f('گل زہرا'),
      m('علی امام'),
      m('حسن امام'),
      f('یعقوب زہرا', 'سید شریف علیخان', 'دربار کلاں'), // VERIFY: husband's name (شریف / مصروف)
      m('علی نایاب', 'لاولد'),
      f('ایوب زہرا', 'سید اسد علی', 'گذری'),
    ]), // VERIFY: order of the two bars
    m('حسن مجتبیٰ', [
      f('انجم زہرا', 'سید محمد مختار', 'چاہ غوری'),
      m('شان مجتبیٰ'),
      f('نعیم زہرا', 'سید مظہر حسین', 'شفاعت پورہ'), // VERIFY: husband's name (مظہر / منظر)
    ]),
    f('نایاب دولت', 'سید مظاہر حسین', 'بنگلہ'),
  ]),
  m('ارتضیٰ حسن', 'لاولد'),
]))

// Chart 3: سید رضا احمد بن سید ابرار حسین (صفحہ 95)
const razaAhmad96 = onPage(96, m('رضا احمد', [
  m('انوار حسین', [
    f('متمنیہ خاتون', 'سید حسن احمد', 'گذری'), // VERIFY: name (متمنیہ / ممتنہ)
    // غلام شبر: seven children on two joined bars (top bar first)
    m('غلام شبر', [
      f('لیلیٰ شہناز'),
      m('فرہاد حیدر'),
      f('حنا شہناز'),
      m('عامر حیدر'), // VERIFY: عامر
      f('ماہ رخ'),
      m('عظیم الشان حیدر'),
      m('سربلند حیدر'),
    ]), // VERIFY: غلام شبر (could be شبیر)
    m('غلام حیدر', 'لاولد'),
  ]),
  m('شفا احمد', [
    m('علی خاصف', [f('دینا خاصف')]),
    f('مقدسہ خاتون', 'سید خورشید حیدر', 'گذری'),
    m('علی عارف', [f('صبا زہرا'), f('صہبا زہرا'), f('زیبا زہرا')]), // VERIFY: spelling of the first two daughters
    f('مسیحہ خاتون', 'سید خفی حسینی', 'گذری'), // VERIFY: husband's name and first name (مسیحہ)
    m('علی صادق', [m('عظیم صادق'), m('ندیم صادق')]),
    m('علی فاروق'), // VERIFY: name reads like علی فاروق / علی تارق
  ]),
]))

// Chart 4: سید ابوالقاسم بن سید جعفر علی (صفحہ 95)
// One long bar whose two ends each drop to an extra child (حیدر حسن at the right, شہود حسن at the left).
const abulQasim96 = onPage(96, m('ابوالقاسم', [
  haidarHasan97, // VERIFY: drawn at the right end of the long bar, listed first
  m('سرور حسن', 'لاولد'),
  f('خدیجہ خاتون', 'سید محمد احمد', 'گذری'),
  f('شہر بانو', 'سید شفا احمد', 'گذری'),
  f('کنیز خاتون', 'سید محمد مجتبیٰ حسن', 'نوگنیاں'), // VERIFY: husband's name (a word like عابدی follows مجتبیٰ حسن)
  m('صفدر حسن', [
    m('علی رضا', [
      m('سلمان رضا'),
      m('عمران رضا'),
      m('عدنان رضا'),
    ]),
    f('ہاشمہ خاتون', 'سید سفیر رضا', 'شفاعت پورہ'), // VERIFY: husband's name (سفیر / سیر)
    m('خوشتر حسن', [
      // One winding bar (box edge, wrapped bar) ends at خوشتر حسن's name; the sons carry "خوشتر" so are taken as his
      m('کامران خوشتر', [f('مریم فاطمہ')]),
      m('شمس الحسن'),
      f('افشاں زہرا'),
      m('فراز خوشتر'),
      m('شہباز خوشتر', [f('صائمہ')]),
    ]), // VERIFY: that this winding bar is خوشتر حسن's (it could be حیدر حسن's, whose "صفحہ 97" sits at its start)
    f('عالمہ خاتون', 'سید محمد تقی', 'گذری'),
    m('نقی رضا', [
      f('نور زہرا'),
      m('محمد فرحان رضا', [m('محمد احسان رضا')]),
      f('عنبرین زہرا', 'سید اعجاز زاہد', 'شفاعت پورہ'),
      f('فہیم زہرا', 'سید کوثر علی', 'دربار کلاں'),
      m('محمد عرفان رضا'),
    ]), // VERIFY: محمد عرفان رضا hangs off the wrapped second bar
  ]),
  f('قاسمہ خاتون', 'سید محمد مجتبیٰ علی', 'گذری'), // VERIFY: first name (قاسمہ / ناسمہ)
  f('ذکیہ خاتون', 'سید سبط رسول', 'ترنولیہ'), // VERIFY: mohalla
  f('قیصر خاتون', 'سید سبط مصطفیٰ', 'ترنولیہ'), // VERIFY: mohalla
  mazaharUlHasan97,
  manawarHasan97, // VERIFY: drawn at the left end of the long bar, listed last
]))

// ───────────────────────── page 95 ─────────────────────────
const zulfiqarHusain95 = m('ذوالفقار حسین', [
  f('نرگس فاطمہ', 'سید سمیع حسن', 'دانشمندان'), // VERIFY: husband's name (سمیع / سیمی)
  m('افضال مہدی'),
  f('عزیز فاطمہ', 'سید عاشق حسین', 'گذری'),
  // حسن مہدی: nine children on one long bar
  m('حسن مہدی', [
    f('امیر زہرا'), // VERIFY: first letters (امیر / ایر)
    m('مختار مہدی', [f('رازقہ زہرا'), f('چمن زہرا')]),
    f('رئیس زہرا', 'سید محمد ظفر', 'نگلی'), // VERIFY: mohalla (نگلی)
    f('شمیم زہرا'),
    f('پروین زہرا'),
    m('عروج مہدی'),
    m('حسنین مہدی'),
    f('فہیم زہرا'),
    m('امیر مہدی'),
  ]),
  f('نثار فاطمہ', 'سید غلام مہدی', 'سندو'), // VERIFY: mohalla (سندو)
  m('حسین مہدی', [f('سرتاج فاطمہ'), m('نوید مہدی'), f('حسین فاطمہ')]),
])

// ───────────── chart 2: انتظار حسین بن اسرار حسین (from page 94) ─────────────
// حسین رضا: nine children on one bar (the bar is fed from his line at the far right)
const husainRaza95 = m('حسین رضا', [
  f('ناصرہ بتول'), // VERIFY: first word (ناصرہ / ناہرہ)
  f('ناظرہ بتول'),
  f('صائمہ بتول'),
  f('عارفہ بتول'),
  m('محسن علی'),
  m('احسن علی'),
  f('عروج فاطمہ'),
  f('نذیر فاطمہ'),
  m('غفران علی'),
])

// نصیر رضا: nine children on the bar below, fed by his long line down the left margin
const naseerRaza95 = m('نصیر رضا', [
  m('محمود علی'),
  m('محمد علی', [m('محمد فواد'), m('زیب علی'), f('کلثوم علی')]), // VERIFY: کلثوم علی (printed ملثوم / کلثوم) and its gender
  f('محمودہ نصیر'),
  f('صالحہ نصیر', 'سید تنویر عباسی', 'شفاعت پوتہ'), // VERIFY: husband's name (تنویر / توصیر)
  f('یٰسین زہرا', 'سید کاظم مہدی', 'قاضی گلی'), // VERIFY: her name (یٰسین / یاسین) and husband's last word (مہدی / مدد)
  f('نصرت زہرا', 'سید آصف عباس', 'قاضی زادہ'), // VERIFY: a small extra word (گولی) sits before the mohalla
  f('انجم زہرا', 'سید نقی رضا', 'قاضی زادہ'),
  f('تسنیم زہرا', 'سید عاشق عباسی', 'بلند شہر'),
  m('احمد علی', [m('محمد شبیر علی')]),
])

const intizarHusain95 = m('انتظار حسین', [
  husainRaza95,
  // منتظر رضا: three bars joined in a snake, top bar first, right to left inside each
  m('منتظر رضا', [
    f('حنا زہرا'),
    f('کوثر زہرا'),
    f('شمع زہرا'),
    f('صبا زہرا'),
    f('ثنا زہرا'),
    f('کنیز زہرا'),
    m('علی رضوان'),
    m('علی عمران'),
  ]),
  f('خورشید جہاں', 'سید اختر بجنوری', 'چھیوڑہ حال سنبھلی'), // VERIFY: where the husband's name ends and the mohalla begins
  f('نسیم فاطمہ', 'سید سیادت حسین', 'قاضی زادہ حال بخشی'),
  m('مغرب رضا', [
    m('حسن رضا', [f('نازش بتول'), m('محمد دانیال رضا'), m('غازی رضا'), f('اسما فاطمہ')]),
    m('علی رضا', [
      m('محمد رضا'),
      f('عروج فاطمہ'),
      m('عمار رضا'),
      f('سمعیہ فاطمہ'),
      f('محترم فاطمہ'), // VERIFY: محترم / مخترم
    ]),
    m('صغدر رضا'),
  ]),
  m('محمد مرغوب', 'لاولد'),
  f('حسین فاطمہ', 'سید حسین رضا', 'بخشی'), // VERIFY: mohalla (بخشی / نخشی)
  // بلند اختر: four children on the top bar, two more on the box row below
  m('بلند اختر', [
    f('کنول فاطمہ'), // VERIFY: printed کول / کنول
    f('صبوحی فاطمہ'),
    f('سبین فاطمہ'),
    f('شیریں فاطمہ'),
    m('مہدی رضا'),
    m('ہادی رضا'),
  ]),
  naseerRaza95,
])

// ───────────── chart 3: اسد اللہ خان عرف میر کلو بن مصطفیٰ اعلیٰ (from page 92) ─────────────
const asadullahKhan95 = m('اسد اللہ خان', 'عرف میر کلو', [
  m('بدر الدین علی خان', 'عرف میر لباون', [ // VERIFY: the small "عرف ..." note above his name
    f('عظمت النساء', 'سید شجاعت علی', 'گذری'),
    m('فضل اللہ', [
      f('غیور النساء', 'سید مراد علی', 'گذری'),
      m('محمد حسنین', [
        m('ظہور حسین', [
          f('فراست النساء', 'سید اعظم حسین', 'سرائے کبنہ'), // VERIFY: mohalla (سرائے کبیرہ؟)
          mazaharHasan96,
        ]),
        f('حسین بانو', 'سید غلام زین العابدین', 'چھیوڑہ'), // VERIFY: mohalla spelling
        m('اسد اللہ', [mujtabaHasan96]),
      ]),
    ]),
    f('عزت النساء', 'سید حسین بخش'), // VERIFY: husband's name (حسین بخش); no mohalla printed
    m('علی محمد خان', [
      f('فیض النساء', 'سید عظیم علی', 'گذری'),
      f('فضل النساء', 'سید کبیر علی', 'گذری'),
      f('زینب', 'سید قربان علی', 'گذری'), // VERIFY: a small word (مساۃ?) is written above the husband's name
    ]),
  ]),
  abdulHadi101,
  zuhoorAli100,
  m('مہدی علی', 'لاولد'),
  m('فتح علی', [
    m('نجیب علی', 'لاولد'),
    // عظیم علی: four children on the top bar, two on the bar wrapped below
    m('عظیم علی', [
      m('جعفر علی', [
        m('محمد زکریا', 'لاولد'),
        abulQasim96,
        m('اسرار حسین', [razaAhmad96]),
        m('ضیاء الحسن', [m('محمد', 'لاولد')]),
      ]),
      f('سعد النساء', 'سید علی حسن', 'گذری'),
      f('کرامت النساء', 'سید محمد کاظم', 'گذری'),
      m('احسن علی', 'لاولد'),
      ghazanfarHusain98,
      ghulamMurtaza97,
    ]), // VERIFY: order of the two wrapped sons (غضنفر حسین / غلام مرتضیٰ علی) against the bar above
  ]),
  saadatullah99,
  m('نعیم اللہ', [
    f('فراست النساء', 'سید فضل اللہ', 'گذری'),
    f('کفایت النساء', 'سید نذر علی', 'گذری'),
  ]),
  m('عنایت حسن', [masoomAli99]) // heading of page 99 says عنایت حسن; page 95 drawing said عنایت حسین,
])

const khandan: BookKhandan = {
  serial: 23,
  mohalla: 'Guzri',
  trees: [
    { page: 95, father: 'مصطفیٰ اعلیٰ', root: asadullahKhan95 },
    { page: 95, father: 'افتخار حسین', root: zulfiqarHusain95 },
    { page: 95, father: 'اسرار حسین', root: intizarHusain95 },
  ],
}

export default khandan

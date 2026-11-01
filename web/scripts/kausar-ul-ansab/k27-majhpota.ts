// Kausar-ul-Ansab (1999), pages 131-142: محلہ مجاپوتہ
// Khandan 27 in the book's index: اولاد سید عبدالمجید مجا بن سید مبارک
//
//   page 131  root chart "صفحہ ۸۶ سید عبدالمجید عرف مجا بن سید مبارک" (photo page1)
//   page 132  "صفحہ ۱۳۱ سید بنیاد علی بن سید قدرت علی", plus two "صفحہ ہذا" charts: اکبر علی and اصغر علی, sons of قوت علی
//   page 133  "صفحہ ۱۳۱ سید عبدالرحیم بن سید عبدالمجید عرف مجا"
//   page 134  four charts headed "صفحہ ۱۳۳": حیدر حسن بن لیاقت حسین, قیوم حسین and یعقوب حسین (both بن محمد حسین),
//             غلام غوث بن غلام مرتضیٰ (with the inner "صفحہ ہذا" chart فرزند حسن بن ظفر حسین)
//   page 135  "صفحہ ۱۳۴ سید اعجاز حسین بن سید منظور حسین" and "صفحہ ۱۳۱ سید محمد صادق بن سید عبدالمجید عرف مجا"
//   page 136  four charts headed "صفحہ ۱۳۵": علی حامد بن علی احمد, حسین محمد بن سادات حسین, ضامن حسین بن قربان علی,
//             معجز حسن بن ابن علی
//   page 137  "صفحہ ۱۳۵" عسکری حسن بن ابن علی and ولایت علی بن رحیم بخش
//   page 138  four charts headed "صفحہ ۱۳۷": تصور حسین, اختر حسین بن اجمل حسن, فضل حسین بن ولایت علی, انتظار علی بن ولایت علی
//   page 139  "صفحہ ۱۳۸ سید باقر حسین بن سید انتظار علی"
//   page 140  "صفحہ ۱۳۵ سید مجتبیٰ حسن بن سید احمد رضا" and "صفحہ ۱۳۷ سید مہربان علی بن سید ولایت علی"
//   page 141  two charts headed "صفحہ ۱۳۵": سعادت علی بن فتح علی and مہر علی بن فیض علی
//   page 142  three charts headed "صفحہ ۱۴۱": علی اکبر, علی حیدر, علی صغدر, all بن آفتاب علی
//
// Every chart root is wrapped in onPage(its own book page, ...) so its descendants carry that page.
// Consts are in dependency order: page 142 first, the root page 131 last. Const suffixes are the book page
// the chart is drawn on (or, for the "صفحہ ہذا" sub-charts, the page they sit on).
//
// ───────────────────────── FOR A HUMAN TO CHECK ─────────────────────────
//
// PAGE NUMBERS. The page-to-photo mapping in the brief was wrong for most photos; the page numbers PRINTED on the
//   photos were used (page1..page12 = 131..142 in order). Photo page7 was reported as 134 by its agent, which
//   cannot be right: page4 prints 134, page6 prints 136 and page8 prints 138, page5 stubs send عسکری حسن and
//   ولایت علی to 137, and page8's headings say صفحہ ۱۳۷. It is book page 137, so its consts are suffixed 137 and
//   its roots wrapped in onPage(137, ...). Its marker "صفحہ ۱۳۵" could be ۱۳۳ (digit uncertain).
//
// HEADINGS WON over drawings and over the stub names:
//   - Stub "تصور حسن" (page 137 chart, going to 138) became the chart headed "تصور حسین"; its father in the heading is
//     unreadable (ends in حسن), drawn under صغیر حسن.
//   - Stub "حیدر حسین" on page 133 became the chart headed "حیدر حسن بن لیاقت حسین".
//   - Stub "مجتبیٰ احسن" (child of احمد رضا, page 135) became the chart headed "مجتبیٰ حسن بن احمد رضا" (page 140).
//     Page 135 ALSO notes a "مجتبیٰ حسن (صفحہ ۱۳۶)" hanging from اشرف النساء, a woman; that unattachable stub was
//     dropped, since the page 140 heading puts the chart under احمد رضا. If they are two men, add the second by hand.
//   - Stub "علی صفدر" became the chart headed "علی صغدر" (page 142); spelling is VERIFY.
//   - Stub "اعجاز حسین" under منور حسین (page 134) is wired to the chart headed "بن منظور حسین" (page 135);
//     منور/منظور is a spelling conflict between drawing and heading.
//   - Stubs for مہربان علی, فضل حسین, انتظار علی, اختر حسین, باقر حسین: wired to the charts headed with those names.
//     page 138's stub said باقر حسین is on 136; the chart is on 139 (heading "صفحہ ۱۳۸").
//   - علی حیدر was stubbed as page 143 on page 141; the chart is on 142.
//   - معجز حسن بن ابن علی (page 136) is drawn under no line on page 135; it was added as the last child of ابن علی
//     (after عسکری حسن) on the strength of its heading. The position among his siblings is a guess.
//   - Page 137 has a separate plain ابن علی, son of ابن محمد, who is NOT the tree father.
//
// STILL A STUB: اسحاق (page 143, son of راجو) has no photo in this folder.
//
// LAYOUT RISKS (details are in the VERIFY marks):
//   - Wrapped sibling bars are read as one list, top row first, each row right to left. The order between the
//     rows is unconfirmed on page 131 (مکرم حسین, معظم حسین), 133 (لیاقت حسین, لطافت حسین, ذاکر حسین join at the
//     left edge), 134, 135, 136, 138, 139 (معقول حسن wraps at both ends), 140, 141, 142.
//   - Page 131: کرم علی is drawn under غلام محی الدین but hangs on عبدالصمد's bar and is placed there. The long
//     bar of seven under شوکت حسین runs to the right frame. سراج دولت is taken as a daughter.
//   - Page 132: the long vertical lines at the page edges are read as a decorative frame. If one is a wrap
//     connector, امانت علی's fifteen children could belong to شجاعت علی or راحت علی. اکبر علی and اصغر علی are
//     embedded in the main tree and are also the page's own "صفحہ ہذا" charts (defined once, not twice).
//   - Page 133: "دختران" under تصدق حسین is kept as one unnamed female.
//   - Page 134: ظفر حسین's children are on two bars; مظہر/اظہر are read as the lower bar.
//   - Page 135: the bracketed note under علی احمد is hard to read.
//   - Page 141: the six-child bar assigned to مسیب مہدی may belong to the children of شیم مہدی above it; the
//     bars of علی اختر and علی انور are assigned by position.
//   - Page 142: the علی اکبر snake of wrapped bars (علی اطہر / علی رہبر) is a reading, not a followed line.
//   - Page 138: تصور حسین and اختر حسین share one top bar; جعفرہ and تسنیم are اختر حسین's daughters.
//   - Page 136: a pasted photograph and a pen mark on the page were ignored.
//   - Photos are not edge-cut anywhere reported; no pages are missing between 131 and 142.

import { f, m, onPage, type BookKhandan } from './book'

// ═════════════════════════ book page 142 ═════════════════════════

const aliAkbar142 = onPage(142, m('علی اکبر', [
  // علی اظہر hangs off the right end of the top bar (eldest, rightmost)
  m('علی اظہر', [
    m('نعیم اختر'),
    f('نگہت فاطمہ'),
    f('شائستہ اظہر', 'سید احمد علی رضوی', 'بریلی'),
    m('فہیم اختر'),
    f('ناہید اختر', 'سید سجاد محمد', 'چاہ غوری'),
    f('جبین اختر', 'سید انور عباس', 'الہ آباد'),
    f('عنبرین اختر'),
  ]),
  m('علی عباس'),
  f('حسن فاطمہ', 'سید محمد رضا', 'قاضی گلی'),
  f('حسین فاطمہ', 'سید حسن مہدی', 'کٹرہ غلام علی'),
  m('علی داور', [
    f('تنویر زہرا'),
    f('قدسیہ بانو', 'سید باقر رضا', 'قاضی گلی'), // VERIFY: the husband line sits between تنویر زہرا and قدسیہ بانو; same husband name as نازنین فاطمہ
    f('نازنین فاطمہ', 'سید باقر رضا', 'گھیر مناف'), // VERIFY: mohalla (گھیر / کھیر مناف)
    m('ندیم حیدر'),
  ]),
  f('حسنین فاطمہ', 'مشرف حسین'), // VERIFY: husband printed without سید; مشرف / شرف; a pen cross is drawn above her
  m('علی اطہر', [
    // two bars joined by a box edge on the left: top bar then second bar, one sibling list
    f('نورین فاطمہ'),
    f('نوشین فاطمہ'),
    f('نادیہ فاطمہ'),
    m('کاشف اظہر'),
    f('ارم فاطمہ'),
    f('شازیہ فاطمہ'),
    f('افشین فاطمہ'),
  ]), // VERIFY: that the second bar (نادیہ ... افشین) belongs to علی اطہر together with نورین/نوشین
  f('نور عین فاطمہ', 'سید نایاب حسن', 'دانشمندان'),
  m('علی رہبر', [
    // top bar: جاوید کمال; box bottom bar (left to right in the drawing): حسین رضا, جمشید کمال; then a third bar
    // joined at the right: یاسمین ... اعجاز. Listed right to left inside each bar.
    m('جاوید کمال', [
      f('حنا کمال'),
      f('فرین کمال'),
      f('ندا کمال'),
      f('حب کمال'), // VERIFY: second bar of the box (حب کمال, روبی کمال) is one list with the three above
      f('روبی کمال'),
    ]),
    m('جمشید کمال'),
    m('حسین رضا', [m('آصف رضا'), f('عامرہ فاطمہ')]),
    f('اعجاز فاطمہ', 'سید حسن عارف', 'چھیوڑہ'), // VERIFY: husband name and mohalla
    f('یٰسین فاطمہ', 'سید افتخار حسن', 'گذری'), // VERIFY: a word "اولی" before the husband; افتخار حسن
    f('برجیس فاطمہ', 'سید شماد حسن', 'حقانی'), // VERIFY: husband's name
    f('یاسمین فاطمہ', 'سید شفیع حیدر', 'نگرہ'), // VERIFY: mohalla
  ]), // VERIFY: that the two wrapped bars (حسین رضا, جمشید کمال and the four daughters) belong to علی رہبر
  m('علی نقی'),
  // ذوالفقار حیدر hangs off the left end of the top bar; his children are on the long bar across the page
  m('ذوالفقار حیدر', [
    m('شان حیدر', [f('معصومہ زہرا')]),
    m('سرور حیدر'),
    f('نسیم فاطمہ', 'سید شمیم حیدر', 'سدو'), // VERIFY: mohalla
    m('کمال حیدر', [m('مسعود حیدر'), m('نبیل حیدر'), m('دانش حیدر')]),
    f('حسرت جبین', 'سید بیلقی مدد', 'قاضی زادہ'), // VERIFY: husband's name
    f('شاہانہ جبین', 'سید یاور عباسی'),
    f('ستارہ جبین', 'سید علی حیدر شاہ', 'فیصل آباد'),
    f('سکندر فاطمہ', 'سید محمد علی زیدی'),
    f('فرزانہ جبین', 'سید اختر علی زیدی'),
    f('اقبال فاطمہ', 'سید عباس افتخر', 'چھیوڑہ'), // VERIFY: husband's name
  ]),
])) // VERIFY: علی اظہر (right-end drop) vs علی نقی/ذوالفقار حیدر (left-end drop) order among the siblings

// ───────────── Chart 2: علی حیدر ─────────────
const aliHaidar142 = onPage(142, m('علی حیدر', [
  m('شبیہ حیدر', [
    m('عادل عباس'),
    m('یاور عباس'),
    f('کمال فاطمہ'),
    f('شاہانہ فاطمہ'),
    f('رخسانہ فاطمہ'),
    f('ترانہ فاطمہ'),
  ]),
  m('تقی حیدر', [
    f('اقبال فاطمہ'),
    m('دلاور عباس'),
    f('شبانہ زہرا'),
    m('خاور عباس'),
    f('دردانہ زہرا'),
    m('ندیم عباس'),
    f('فوزیہ زہرا'),
    m('وسیم عباس'),
    f('حنا زہرا'),
  ]),
]))

// ───────────── Chart 3: علی صغدر ─────────────
const aliSaghdar142 = onPage(142, m('علی صغدر', [
  m('علی افسر', [
    f('کمال زہرا', 'سید نایاب حسن', 'مجاپوتہ'),
    f('جمال زہرا', 'سید حسین عباس', 'گذری'),
    m('علی خوشتر'),
    f('ہلال زہرا', 'سید شہزاد ظہیر', 'کٹرہ غلام علی'),
    f('نہال زہرا', 'سید مسعود', 'شفاعت پورہ'), // VERIFY: husband's name
  ]),
  f('نایاب بانو', 'سید غلام التقلین', 'گھیر مناف'), // VERIFY: mohalla
  f('تہذیب فاطمہ', 'سید علی لخت رضا', 'گھیر مناف'), // VERIFY: husband's name and mohalla
  f('قائمہ خاتون'),
  m('علی مقدس'),
  m('علی اقدس', [
    f('رباب اختر'),
    m('جاوید اختر', [m('دانش عباس'), f('دیبا ناز'), f('کسا ناز')]), // VERIFY: کسا ناز
    f('روح افدس', 'سید علی خوشتر', 'مجاپوتہ'), // VERIFY: name (افدس / افزا)
    m('سعید اختر'),
  ]),
]))

// ═════════════════════════ book page 141 ═════════════════════════

const mahdiAli141 = m('مہدی علی', 'ارتحال (محلہ بچھدرہ کی دہلیز اختیاری)', [ // VERIFY: the parenthetical note beside his name is hard to read
  m('حسین مہدی', [
    // top bar of two, then a wrapped bar of four below it
    f('حسن بانو', 'سید فراز حسین', 'دانشمندان'),
    f('خورشید بانو', 'سید سجاد حیدر', 'آگرہ'), // VERIFY: husband's name
    m('تعظیم مہدی', [
      m('کمال حیدر'),
      m('عرفان حیدر'),
      f('معراج بانو'),
      f('کنول بانو'),
    ]),
    m('قسیم مہدی', [m('عارف مہدی'), f('برجیس بانو')]), // VERIFY: first name reads قیم / قسیم
    m('خوشتران مہدی'),
    // شیم مہدی's long drop feeds the bar of six below
    m('شیم مہدی', [
      m('محمد ندیم'),
      m('عمران مسعود'),
      f('سبیکہ خاتون'),
      m('ظہیر عالم'),
      m('صفدر عباس'),
      f('اعجاز بانو'),
    ]), // VERIFY: the wrapped bar under حسین مہدی (تعظیم .. شیم) is read as his sons; the order of the two rows is unconfirmed
  ]),
  f('شمیمہ خاتون', 'سید اختر حسین', 'مجاپوتہ'),
  f('نقیہ خاتون', 'سید قرار مہدی', 'حقانی'),
  f('رئیسہ خاتون', 'سید زائر حسین', 'مجاپوتہ'),
  m('انیس مہدی', 'لاولد'),
  // wrapped bar
  m('امیر مہدی', [
    // top bar of four daughters, then a wrapped bar of three sons
    f('ابر بانو', 'سید محمد مہدی', 'حقانی'), // VERIFY: first name (ابر / امیر)
    f('نفیس بانو', 'سید ذوالفقار حیدر', 'گذری'), // VERIFY: husband's name
    f('اربعین بانو', 'سید حیدر مہدی', 'مجاپوتہ'),
    f('حسین بانو', 'سید محمود تقی', 'نگرہ'), // VERIFY: تقی / لقی
    m('ذوالفقار مہدی', [
      m('محمد علی'),
      f('شیرزہ بتول'),
      m('حسن فراز'), // VERIFY: word order (حسن فراز / فراز حسن)
    ]),
    // مسیب مہدی's drop lands on the long bar at the left end of the row; the six children below it are one bar,
    // but four of the arrows sit exactly under شیم مہدی's children above, so they may instead belong to those men
    m('مسیب مہدی', [
      f('نفیس زہرا', 'سید اختر مہدی'),
      m('شاداب مہدی'), // VERIFY: father (مسیب مہدی, or ظہیر عالم directly above)
      f('رئیس زہرا'), // VERIFY: father (مسیب مہدی, or صفدر عباس directly above)
      f('نگہت زہرا'), // VERIFY: father (مسیب مہدی, or اعجاز بانو directly above)
      f('نازنین زہرا'),
      f('امیر زہرا', 'سید حسن مہدی', 'دربار کلاں'),
    ]), // VERIFY: whether نفیس زہرا hangs from this bar or from سبیکہ خاتون above her
    m('مطاہر مہدی', [
      m('شہنشاہ مہدی'),
      m('تاجدار مہدی'),
      m('کمال مہدی'),
      f('کمال فاطمہ'),
    ]),
  ]),
  m('ثروت حسین', [
    m('حیدر مہدی', [
      // top bar of three daughters, then a wrapped bar of two sons
      f('گوہر بانو'),
      f('اقبال فاطمہ'),
      f('فیروز بانو'),
      m('گوہر مہدی'),
      m('جوہر مہدی'),
    ]),
  ]),
  m('اختر حسین', [m('علام عباس')]),
])

const saadatAli141 = onPage(141, m('سعادت علی', [ // VERIFY: heading reads like معادت علی; سعادت علی assumed
  f('افضل النساء', 'سید علی نذیر'), // VERIFY: husband's name
  f('اسد النساء', 'سید نذر حسین', 'مجاپوتہ'),
  m('محمد امین', [
    m('نیاز علی', [
      f('سلیمن', 'سید ابوالحسن', 'بخشی', 'مساۃ'), // VERIFY: mohalla (بخشی)
      m('بشیر علی', [m('نصیر علی'), m('صغیر علی')]),
      m('آل علی', [
        m('آل نبی'),
        f('جمیلہ خاتون', 'سید مطاہر حسین', 'دانشمندان'),
        f('سکینہ خاتون', 'سید فرزند حسن', 'دانشمندان'),
        m('آل شبیہ'), // VERIFY: reads آل شنبیہ / آل شبیہ
      ]),
    ]),
    m('نبی بخش', [
      m('ابجد حسین', [m('واحد حسین', 'عرف بیکا')]), // VERIFY: ابجد
      m('نذر حسین', 'لاولد'),
    ]),
    m('محمد علی', [mahdiAli141]),
    m('احمد علی', 'لاولد'),
  ]),
  f('کنیز کبریٰ', 'سید نذر علی'),
  f('کنیز سکینہ', 'سید ولایت بخش', 'مجاپوتہ'),
]))

// ───────────────────────── chart B ─────────────────────────

const aliAnwar141 = m('علی انور', [
  // top bar of two, then a wrapped bar of four
  f('پروین فاطمہ', 'سید آباد حسن'), // VERIFY: a tiny mohalla line under the husband is unreadable
  f('اربعین فاطمہ', 'سید معبود حسین', 'نگرہ'), // VERIFY: معبود / مقبول
  m('محمد اقبال', [f('نازیہ اقبال')]),
  f('نسرین فاطمہ', 'سید مرغوب حسن', 'گذری'), // VERIFY: مرغوب
  f('نگین فاطمہ'), // VERIFY: the husband line is illegible (reads like تورحسنی / سنبھلی)
  f('یاسمین فاطمہ'), // VERIFY: no husband line seen
])

const aliAkhtar141 = m('علی اختر', [
  f('مہ جبین فاطمہ', 'سید ظہیر الحسن', 'نگرہ', 'زوجہ اول'),
  f('حسین فاطمہ', 'سید ظہیر الحسن', 'نگرہ', 'زوجہ ثانی'),
  f('متین فاطمہ', 'سید علی سبط رضا', 'گھیر مناف'), // VERIFY: husband's name
  f('امین فاطمہ', 'سید علی اکبر', 'مجاپوتہ'),
  f('مکین فاطمہ', 'سید حسن محمد', 'چاہ غوری'),
  m('عطا حیدر', 'لاولد'),
])

const aftabAli141 = m('آفتاب علی', '(محلہ دانشمندان میں سکونت پذیر)', [
  aliAkbar142,
  aliAnwar141,
  f('سیدہ خاتون', 'سید ضمیر حسن', 'دانشمندان'), // VERIFY: husband's name (ضمیر / ضمر)
  f('دختر', 'سید شرافت حسین', 'بخشی'), // VERIFY: the book gives no name, only "دختر"; mohalla
  m('علی اصغر', 'لاولد'),
  // wrapped bar (علی حیدر, علی صفدر, علی اختر)
  aliHaidar142,
  aliSaghdar142,
  aliAkhtar141,
])

const hasan141 = m('حسن', [ // VERIFY: reads حسن / حسین
  m('حیدر حسن', 'لاولد'),
  m('حمید حسن', [
    m('حبیب حسن'), // VERIFY: a small parenthetical note beside his name is unreadable
    f('باصرہ خاتون', 'سید انتظار علی زیدی'),
    m('وحید حسن', 'لاولد'),
    f('انوار فاطمہ', 'سید واحد حسین', 'حقانی'),
  ]),
  f('صادقہ خاتون', 'سید اصغر حسین', 'چھبوڑہ'), // VERIFY: mohalla
  m('سعید حسن', 'لاولد'),
])

const mehrAli141 = onPage(141, m('مہر علی', [
  m('بہادر علی', '(محلہ کٹرہ میں سکونت پذیر)', [ // VERIFY: the note's first words
    m('معصوم علی', [aftabAli141]),
    m('حسین بخش', 'لاولد'),
  ]),
  m('صفدر علی', [
    f('متینہ خاتون', 'سید اصغر حسن'),
    f('شرافت النساء', 'سید محمد علی'),
  ]),
  m('صادق علی', '(محلہ حقانی میں آباد ہو گئے)', [
    m('فضل حسین', [
      f('لازقہ خاتون'),
      hasan141,
      f('طہیرہ خاتون'),
    ]),
    m('علی حسین', [
      m('زوار حسین'),
      m('علمدار حسین', [m('کرار حسین')]),
    ]),
  ]),
]))

// ═════════════════════════ book page 140 ═════════════════════════

const alqaHasan135 = m('القی حسن', [
  f('زاہدہ خاتون', 'سید محمد حسنین', 'گذری'),
  f('سجیلہ خاتون', 'سید محمد', 'شفاعت پوتہ'),
  f('شاہدہ خاتون', 'سید حیدر رضا جعفری'), // VERIFY: جعفری may be a mohalla
  m('محمد تقی', 'لاولد'),
])

const ijtabaHasan135 = m('اجتبیٰ حسن', [
  m('محمد رضا', [
    m('حسین رضا'),
    m('اقبال رضا'),
    f('شمیم زہرا', 'سید شیر سبطین زیدی', 'بلند شہر'), // VERIFY: husband's name
    m('محسن رضا', [f('عنبرین زہرا')]),
    m('امام رضا', [f('خدیجہ')]),
  ]),
])

const muqtadaHasan135 = m('مقتدیٰ حسن', [
  m('شباب حیدر', [m('نایاب حیدر'), f('گل زہرا'), f('روح زہرا'), f('فردوس زہرا')]),
  f('رافعہ خاتون', 'سید ناظر عسکری جعفری'), // VERIFY: جعفری may be a mohalla
  f('شافعہ خاتون', 'سید محمد شبیہ الحسن', 'بچھدہ'), // VERIFY: mohalla (بچدہ / بچھدہ)
  f('اسلامیہ خاتون', 'سید تمر رضا جعفری'), // VERIFY: husband's name (تمر / ثمر) and جعفری
  m('انتخاب حیدر', [
    m('شہاب حیدر'),
    f('شبیہہ زہرا'),
    m('استجاب حیدر'),
    f('عارفین زہرا'), // VERIFY: عارفین / عارفہ
  ]),
])

const mujtabaHasan135 = onPage(140, m('مجتبیٰ حسن', [
  alqaHasan135,
  ijtabaHasan135,
  f('فاطمہ خاتون', 'سید رضا حیدر', 'لکھنؤ'),
  muqtadaHasan135,
]))

// ───────────────────────── chart 2 (صفحہ 137) ─────────────────────────

// آل احمد: top bar of six, wrapped onto a second bar of five (one sibling list, eldest first)
const aalAhmad137 = m('آل احمد', [
  m('سرفراز احمد', [
    f('فرح جبین'),
    f('عظمیٰ جبین'),
    f('اسماء جبین'),
    f('صائمہ جبین'),
    f('ماہین جبین'),
    m('عمران احمد', [f('نقاشہ احمد')]), // VERIFY: nakashah ahmad, gender and spelling
  ]),
  m('علی اصغر', [m('نوید احمد'), m('شجاع احمد'), m('ضیاء احمد')]),
  f('ممتاز بیگم', 'سید شہید اعلیٰ'), // VERIFY: husband's name
  f('فیروزہ بیگم', 'قمر حسن', 'ختانی'), // VERIFY: husband line and mohalla
  m('عابد حسین', [f('عروج فاطمہ'), f('عنبرین فاطمہ'), f('بشریٰ بانو')]),
  m('رضوان احمد', 'لاولد'),
  // second (wrapped) bar
  m('اعجاز احمد', [
    f('نگہت بانو'),
    f('حنا بانو'),
    m('وقار احمد'),
    f('علینا بانو'),
    m('زوار احمد'),
    f('ندا بانو'),
  ]), // VERIFY: the 6 children are drawn on a box that wraps to a second bar; assumed all اعجاز احمد's
  m('مختار احمد', [m('سہیل احمد'), m('شباب احمد'), m('شعیب احمد'), m('شاہد احمد')]),
  m('شہزاد احمد', [f('ثمرین بانو'), m('سجاد احمد'), f('سعدیہ بانو')]), // VERIFY: سجاد / ستجاد
  m('مزمل حسین'),
  m('سردار احمد', [f('سمیرا بیگم')]),
])

const murtazaHasan137 = m('مرتضیٰ حسن', [
  m('نثار حسین', [
    f('نثار فاطمہ', 'سید نصر امت حسین', 'دہلی'), // VERIFY: husband's name
    f('طہیرہ خاتون', 'سید راحت حسین', 'شاہجہاں جونپور'), // VERIFY: mohalla
    f('ظہیر فاطمہ', 'سید نذر حسن', 'لکھنؤ'),
    m('انوار حسین', [f('انعم زہرا')]),
    m('انصار حسین', [m('افتدار حسین'), f('رباب فاطمہ'), m('افتخار حسین')]), // VERIFY: افتدار / افتقار
    m('ابن حسن', [
      m('فرزند حسن'),
      f('صائمہ خاتون'),
      m('سجاد حسین'), // VERIFY: ستجاد / سجاد
      m('شیریں حسن'), // VERIFY: reading (شیش حسن / شیریں)
    ]),
  ]),
  m('مصطفیٰ احسن', [m('التجا احسن'), f('تسلیمہ خاتون'), m('التقی احسن')]),
  f('صادقہ خاتون', 'سید افسر حسن', 'دانشمندان'),
  f('فہمیدہ خاتون'),
  // second (wrapped) bar of the same list
  m('اصطفیٰ احسن', [
    m('نواب حسن', [m('کمال حیدر'), f('روبی زہرا'), m('اقبال حیدر')]),
    f('بادرہ خاتون', 'سید تاج الحسن', 'جیبوڑہ'), // VERIFY: name (بادرہ / باہرہ) and mohalla
  ]),
  m('اجتبیٰ احسن', [
    f('خورشید فاطمہ'),
    f('سجیلہ خاتون'),
    m('قمر الحسن', [m('فرخ حسن'), f('قرۃ العین')]),
  ]),
  m('ارتضیٰ احسن', [
    m('شمیم حیدر'),
    f('مہ جبین فاطمہ', 'سید شمشاد حسین', 'گوڑ گانواں'),
    m('اقبال حیدر', [
      f('حنا بانو'),
      m('سلیم حیدر'),
      m('وسیم حیدر'),
      m('عمران حیدر'),
      f('رانی بانو'),
      f('گلناز بانو'),
      // second (wrapped) bar
      m('کامران حیدر'),
      m('شہزاد حیدر'),
      m('فرحان حیدر'),
    ]),
    m('افتخار حیدر'),
  ]),
])

const mehrbanAli137 = onPage(140, m('مہربان علی', [
  m('محمد حسن', [
    murtazaHasan137,
    m('امیر حسن', 'لاولد'), // VERIFY: امیر / امر
    f('صابرہ خاتون', 'سید ظل اللہ', 'دربار کلاں'),
    f('خدیجہ خاتون', 'سید سراج الحی', 'دربار کلاں'),
    m('سلطان حسین', 'لاولد'),
    m('احمد حسین', 'لاولد'),
    aalAhmad137,
    m('مشتاق حسین', 'لاولد'),
    m('چھٹا', 'لاولد'), // VERIFY: چھٹا / چھوٹا
  ]),
  m('عبداللہ', 'لاولد'),
]))

// ═════════════════════════ book page 139 ═════════════════════════

const aijazHusain139 = m('اعجاز حسن', [
  f('عروس فاطمہ'), // VERIFY: first letters of the name (عروس / نروس)
  m('شہنشاہ حسین', 'لاولد'),
  m('ممتاز حسین', 'عرف راجا', [
    f('کمال فاطمہ'),
    f('فصال فاطمہ'),
    m('انعام حسین', [f('سمونہ امام'), f('شمائلہ امام'), f('فاطمہ امام')]),
    m('انتظام حسین'),
  ]),
  f('اسلام فاطمہ', 'سید عاشق عباس', 'لکڑہ', 'زوجہ اولی'),
  m('زوار حسین', [m('باقر حسین'), m('اقبال حسین')]),
  f('ممتاز فاطمہ', 'سید محمد تقی', 'مجاپوتہ'),
])

const maqboolHusain139 = m('مقبول حسین', [m('عظیم رضا'), f('ایلیا بانو'), m('علی رضا')])

// معقول حسن's children are drawn on one long bar that wraps at both ends: the right-hand row
// (شائستہ, شہناز), the main bar (نرگس .. شاہین), then the left-hand row (نشاط, شگفتہ).
const maqoolHusain139 = m('معقول حسن', [
  f('شائستہ خاتون', 'سید فرزند علی', 'مجاپوتہ'),
  f('شہناز بانو', 'سید مظاہر حسین', 'سرگودھا'), // VERIFY: husband's name (مظاہر / مظاہر)
  f('نرگس بانو', 'سید اشرف حسین', 'سادات بارہہ'),
  maqboolHusain139,
  m('منصور حسین'),
  f('شاہین فاطمہ', 'سید سلیم حسن'),
  f('نشاط فاطمہ', 'سید تنویر شاہد'), // VERIFY: husband's name
  f('شگفتہ بانو', 'سید ندیم احمد', 'دربار کلاں'),
]) // VERIFY: the wrapped rows at both ends are read as one sibling list, eldest on the right

const masoodHasan139 = m('مسعود حسن', [
  m('لیاقت حسین'),
  m('مقصود حسین', [
    f('خوشحال فاطمہ'),
    m('محمد جاوید'),
    f('جمال فاطمہ', 'سید جوہر عباس', 'گذری'), // VERIFY: husband's name (جوہر)
  ]),
  m('عمران حسن', [m('علی حسین'), f('زہرا عمران')]),
])

const nadirHasan139 = m('نادر حسن', [
  aijazHusain139,
  f('اعجاز فاطمہ', 'سید محبوب حسن', 'مجاپوتہ'),
  maqoolHusain139,
  f('فرمین فاطمہ', 'سید نواب حسن', 'سدو'), // VERIFY: mohalla (سدو / سردو)
  f('امان فاطمہ', 'سید لشان حیدر', 'مجاپوتہ'), // VERIFY: husband's name (لشان / نشان)
  masoodHasan139,
])

// Mahmood Husain's children: box (top row) and its wrapped second row
const mahboobHusain139 = m('محبوب حسن', [
  m('معصوم احمد', [f('ثروت زہرا'), m('وسیم احمد'), m('فہیم احمد'), m('ظفر مہدی')]),
  m('فرزند علی', [
    m('محمد رضوان'),
    f('عنبرین فاطمہ'),
    m('محمد نذراب'), // VERIFY: spelling (نذراب / نثار)
    f('مہرین فاطمہ'),
  ]),
  m('فردوس علی', [
    f('سعدیہ ناز'),
    m('محمد ارشد'),
    f('فرح ناز'),
    m('سلمان رضا'),
    f('فوزیہ ناز'),
    m('محمد مرتضیٰ'), // wrapped onto a second row of the bar
  ]),
  f('عمران فاطمہ', 'سید سبط حیدر', 'لکڑہ'),
  f('نسرین فاطمہ', 'سید محسن رضا', 'شفاعت پوتہ'),
])

const mansoobHasan139 = m('منصوب حسن', [
  f('سیما منصوب'),
  f('روحانہ منصوب'),
  f('ربینہ منصوب'),
  f('لوینہ منصوب'),
  m('منصف حسین'),
])

const mahmoodHusain139 = m('محمود حسن', [
  f('نازک بانو'),
  m('محب حسن', [m('مصور حسن'), f('ثمینہ حسن')]), // VERIFY: مصور (منصور؟)
  m('حیدر علی'),
  mansoobHasan139,
  mahboobHusain139,
]) // VERIFY: the box's left edge wraps down to the second row (منصوب حسن, محبوب حسن); read as Mahmood's children

const shakirHusain139 = m('شاکر حسین', [
  f('اربعین فاطمہ'),
  m('محمد تقی', [
    f('شہناز فاطمہ', 'سید اقبال حسین', 'لکڑہ'),
    m('شاندار حسین', 'لاولد'),
    m('مراد حسین'),
  ]),
  f('خورشید فاطمہ', 'سید ظہور علی زیدی', 'جروڈی'), // VERIFY: mohalla
  f('پروین فاطمہ'),
  f('خوشنود فاطمہ', 'سید جعفر حسین', 'مجاپوتہ'),
  f('اللہ رکھی', 'سید علی محمد', 'لکڑہ'),
  f('امر فاطمہ', 'سید میر محمد', 'پچدرہ'), // VERIFY: mohalla spelled بچدرہ
])

const zakirHusain139 = m('ذاکر حسین', [
  m('جعفر حسین', [
    m('آفتاب حسین', [f('انعم بانو')]), // VERIFY: انعم / الم
    m('مہتاب حسین'),
    m('سراج حسین'),
    f('سراج فاطمہ'),
    m('شاہد حسین'),
    f('حسین بانو'),
  ]),
])

const baqirHusain139 = onPage(139, m('باقر حسین', [
  f('آمنہ خاتون'),
  zakirHusain139,
  f('تحسینہ خاتون', 'سید مومن حسین', 'بخشی'),
  shakirHusain139,
  mahmoodHusain139,
  nadirHasan139,
]))

// ═════════════════════════ book page 138 ═════════════════════════

const muhammadNabi138 = m('محمد نبی', [
  // children are drawn in a box; its bottom edge wraps (شاہ زیب, حسن) as a second row of the same sibling list
  f('کرن فاطمہ'),
  f('ارم فاطمہ'),
  f('ادیس اختر'), // VERIFY: printed without سید (female?), spelling ادیس / ادریس / اویس
  m('نوید اختر'),
  m('شاہ زیب اختر'),
  m('حسن اختر', [m('محمد رضا')]),
])

const aliMuhammad138 = m('علی محمد', [
  m('زاہد علی'),
  m('جاوید اختر', [m('فراز مہدی'), f('بدا زہرا')]), // VERIFY: بدا زہرا (second child's first word unclear), printed without سید
  f('فرحت بانو', 'سید مشتاق حسین', 'بلگرامی'), // VERIFY: بلگرامی is a place/clan, not a mohalla
  m('شاہد علی'),
  m('عابد علی'),
  m('حامد علی'),
  m('ساجد علی'),
])

const akhtarHusain138 = onPage(138, m('اختر حسین', [
  f('جعفرہ خاتون', 'سید محمد راجا', 'بھنڈو'), // VERIFY: husband's name and mohalla (بھنڈو / منڈو)
  f('تسنیم خاتون', 'سید حسین محمد', 'مجاپوتہ'),
  aliMuhammad138,
  f('رفیعہ خاتون', 'سید شان احمد', 'دربار کلاں'),
  f('بنت زہرا', 'سید غلام الثقلین', 'بہور حال مجاپوتہ'), // VERIFY: mohalla بہور
  muhammadNabi138,
  m('محمد علی', [m('بصیر رضا')]), // VERIFY: بصیر رضا
]))

// ───────────── chart 1: تصور حسین ─────────────

const tasawwurHusain138 = onPage(138, m('تصور حسین', [
  f('منورہ خاتون', 'سید ممتاز حسین', 'کٹرہ غلام علی'),
  m('محمد احمد', [
    // the bar wraps: the second row (محمد ارشد, گوہر عباس) continues the same list
    m('دلاور عباس', [f('خرد')]), // VERIFY: خرد printed without سید, may be a boy's name
    m('محمد راشد'),
    f('شہناز فاطمہ'),
    m('یاور عباس'),
    f('الغام فاطمہ'),
    m('محمد ارشد'),
    m('گوہر عباس'),
  ]),
])) // VERIFY: the father's name in the heading (بن سید ... حسن) is unreadable

// ───────────── chart 3: فضل حسین ─────────────

const nishanHaidar138 = m('نشان حیدر', [
  m('سلمان حیدر'),
  m('عمران حیدر'),
  f('شمع پروین', 'سید علی شہید', 'لکڑہ'), // VERIFY: husband's name and mohalla
  m('ذیشان حیدر', [
    m('اصغر رضا'),
    f('شازیہ ذیشان'),
    f('نازیہ ذیشان'), // VERIFY: نازیہ / نذیر
    m('انتخاب حیدر'),
    f('راضیہ ذیشان'),
  ]), // VERIFY: printed ذلیشان
  f('شمع تسنیم', 'سید شبیر یار حسن', 'لکھنؤ'), // VERIFY: husband's name and mohalla
  m('کامران حیدر'),
  m('عرفان حیدر', [f('بتول فاطمہ'), f('رباب فاطمہ')]),
  f('زرین فاطمہ', 'سید سکندر مسعود', 'کٹرہ حال لشکری'), // VERIFY: mohalla
  m('ریحان حیدر', [m('عون محمد'), f('سحر فاطمہ'), f('اربعین فاطمہ')]), // VERIFY: سحر
  m('سلطان حیدر'),
])

const fazlHusain138 = onPage(138, m('فضل حسین', [
  m('علی حسن', [
    f('مصطفائی خاتون', 'سید آل احمد', 'دربار کلاں'),
    f('ارتضائی خاتون', 'سید احسن عابد', 'دربار کلاں'), // VERIFY: husband's name
    m('وصی حسن', [
      f('شان فاطمہ', 'سید علی اکبر', 'دانشمندان'),
      f('ایمان فاطمہ'),
      f('احسان فاطمہ', 'سید تاج حسین', 'چھیوڑہ'), // VERIFY: mohalla
    ]),
    f('مرتضائی خاتون', 'سید مبارک حسن', 'گذری'),
  ]),
  m('مندہ حسن', [
    f('منگو سیماہ', 'سید ثروت حسن', 'مجاپوتہ'), // VERIFY: name (منگو / سیماہ, one name or two?) and husband
    f('شمیمہ خاتون', 'سید اذلقی حسن', 'قاضی زادہ'), // VERIFY: husband's name
  ]), // VERIFY: مندہ / بندہ
  m('حیدر حسن', [
    f('رئیسہ خاتون', 'سید وصی حسن', 'مجاپوتہ'), // VERIFY: husband's name
    m('ابن حیدر', [nishanHaidar138]),
  ]),
]))

// ───────────── chart 4: انتظار علی ─────────────

const hamidHusain138 = m('حامد حسین', [
  m('محمد حسین', [
    f('تنویر زہرا', 'سید تنویر حسن', 'کٹرہ'), // VERIFY: name, husband and mohalla
    f('شبیہ زہرا', 'سید نسیم حسن', 'سدد'), // VERIFY: husband and mohalla
    f('مبارکہ خاتون', 'سید مبین حسن', 'محمد پورہ'), // VERIFY: mohalla
    f('نسیمہ خاتون', 'سید محی حسن', 'قاضی زادہ'), // VERIFY: husband's name
    m('قائم رضا'),
    // حسین محمد's children are drawn on a looped bar (محمد عباس, then the box top row, then the box bottom row)
    m('حسین محمد', [
      m('محمد عباس'),
      f('رضیہ خاتون', 'سید نفیس حسین', 'قاضی زادہ'),
      f('رعنا پروین', 'سید علی غالب'), // VERIFY: husband's name
      f('شاہین زہرا', 'سید مصطفیٰ انتظار', 'جراولی'), // VERIFY: husband and mohalla
      m('حیدر عباس'),
      f('بشریٰ بتول'),
      f('صبا سلطانہ', 'سید علی حیدر'),
    ]), // VERIFY: order of the children drawn on the looped box bars
  ]),
  f('محسنہ خاتون', 'سید اسرار حسین', 'مجاپوتہ'),
  f('مدینہ خاتون', 'سید اجمل حسین', 'مجاپوتہ'),
  m('آل محمد', 'لاولد'),
  m('عون محمد', [
    m('حسن رضا', [m('علی رضا'), f('رباب زہرا')]),
    f('شان فاطمہ'),
    m('محمد رضا', [m('محمد بشیر حسین'), f('نور زہرا')]),
    m('شان رضا', 'لاولد'),
    m('تنویر حیدر', [m('محمد عباس'), f('عروج فاطمہ')]),
    m('پرویز حیدر'),
  ]),
  f('سلطان فاطمہ', 'سید محمود حسن', 'مجاپوتہ'),
])

const intizarAli138 = onPage(138, m('انتظار علی', [
  hamidHusain138,
  f('سکینہ خاتون'),
  baqirHusain139, // VERIFY: the "صفحہ ۱۳۶" mark under him
  m('جعفر حسین', 'لاولد'),
  m('ابرار حسین', [
    f('صابرہ خاتون', 'سید منظور حسن', 'شفاعت پوتہ'),
    m('اسرار حسین', [
      f('بنی فاطمہ', 'سید اعجاز حسن', 'مجاپوتہ'),
      f('حسین فاطمہ', 'سید علی اکبر', 'جعفری'),
    ]),
    f('علینہ خاتون', 'سید نادر حسین', 'مجاپوتہ'),
    f('مکینہ خاتون', 'سید علی عابد', 'کٹلوئی'), // VERIFY: mohalla
  ]),
]))

// ═════════════════════════ book page 137 ═════════════════════════

const qamarulHasan137 = m('قمر الحسن', [
  m('عزادار حسین', [m('تاجدار حسین'), m('وقار حسین'), m('علمدار حسین'), m('افتخار حسین'), m('انوار حسین')]),
  f('آل فاطمہ', 'سید ظہیر حیدر', 'مجاپوتہ'),
  f('شان فاطمہ', 'سید علی ہادی', 'لکڑہ'),
  f('حسن فاطمہ', 'سید شمیم حیدر', 'جعفری'), // VERIFY: "جعفری" may be a surname rather than a mohalla
  m('سردار حسین', [
    f('انعام فاطمہ'),
    m('حسنین صادق'),
    m('سبطین صادق'),
    f('اقبال فاطمہ'),
    f('اسلام فاطمہ'),
  ]),
  m('شاندار حسین', [
    f('مقربہ خاتون'),
    f('مہر نظیر'), // VERIFY: printed without سید, taken as female
  ]),
  f('فردوس فاطمہ', 'سید لشان اکبر', 'دانشمندان'), // VERIFY: husband's first name (لشان / نشان)
  m('شفاعت حسین', [f('فرحین فاطمہ')]),
  f('شافعہ خاتون', 'سید مارالحسین خان', 'دانشمندان'), // VERIFY: husband's name is only half legible (..ارالحسین خان)
  // اظہار حسین: the bar below him is joined to his line on the left
  m('اظہار حسین', [m('انصار حسین'), m('کرار حسین'), f('یاسمین فاطمہ'), m('جرار حسین')]),
])

// بدر الحسن: children drawn on a serpentine of bars (boxes whose bottom edge is the next bar), read as one list
const badrulHasan137 = m('بدر الحسن', [
  m('ذیشان حیدر', [f('نازیہ حسن')]),
  f('تقی زہرا', 'سید سلمان علی', 'کنگولی'), // VERIFY: mohalla spelling (کنگولی / کنکولی)
  m('سلطان حیدر', [m('سہیل عباس')]),
  f('نقی زہرا', 'سید فیضان حسن', 'دربار کلاں'),
  m('فرقان حیدر', [m('عابد نواز'), f('زینت بانو')]),
  m('عرفان حیدر', [f('اقبال زہرا'), m('جمال مصطفیٰ')]),
  m('امان حیدر', [m('شہباز عالم'), m('شہناز عالم')]), // VERIFY: second name (شہناز / شہباز)
  m('رضوان حیدر', [
    m('زاہد عباس'),
    m('آصف عباس'),
    m('ناصر عباس'),
    m('عابد عباس'),
    f('ناہید زہرا', 'سید حسن جمال عابدی', 'نوگنیاں'), // VERIFY: husband's name
  ]),
])

// عین محمد: nine children on one bar
const aynMuhammad137 = m('عین محمد', [
  m('محمد حر غازی'), // VERIFY: middle word (حر)
  f('انور جہاں', 'سید ادیب حیدر', 'گذری'),
  f('معراج فاطمہ', 'سید ہادی رضا', 'دانشمندان'),
  f('کامران خاتون', 'سید جعفر رضا', 'دانشمندان'), // VERIFY: name (کامران / کاملان)
  f('عاشورہ خاتون', 'سید نقی ہادی', 'مجاپوتہ'), // VERIFY: husband's first name (نقی / لقی)
  f('مختار فاطمہ', 'سید حسن حیدر', 'شفاعت پوتہ'),
  m('محمد زبیر غازی'),
  f('صالحہ خاتون', 'سید عباس غازی'),
  m('محمد سربیر غازی'), // VERIFY: سربیر / سرفراز
])

// نبارک حسن (the right-hand one of the two brothers of that name)
const nabarakHasan137 = m('نبارک حسن', [
  // VERIFY: first letter of the name (نبارک / مبارک)
  m('محمد عباس', [m('علی عباس'), f('زہرا عباس'), m('اسد عباس'), f('خدیجہ عباس')]),
  m('حیدر عباس', [f('صبیحہ خاتون'), m('حسن عباس')]),
  m('صفدر عباس', [f('صوفیہ عباس'), m('اختر عباس')]),
])

// حسین محمد: seven children on one bar
const husainMuhammad137 = m('حسین محمد', [
  // VERIFY: name (حسین / حسنین)
  m('آل محمد'),
  f('شبیہہ فاطمہ', 'سید منظر عباس'),
  f('معراج فاطمہ'),
  f('وجیہہ فاطمہ', 'سید خلق حیدر', 'گذری'),
  m('حسن محمد'),
  f('بنت فاطمہ', 'سید عرفان حیدر', 'مجاپوتہ'),
  m('ابن محمد', [m('ابن علی')]), // VERIFY: ابن علی is also the name of this tree's father; not continued on another page
])

// مبارک حسن (the left-hand one)
const mubarakHasan137 = m('مبارک حسن', [
  m('نایاب حسن', [m('بابر عباس'), f('آسیہ کمال')]),
  f('کاظمین فاطمہ', 'سید شبیہ محمد', 'چاہ غوری'),
  f('شمیم فاطمہ', 'سید امام خان', 'سرسی'),
  m('مہتاب حسن', [m('زہیب حسن'), f('تبسم مہتاب')]), // VERIFY: زہیب
])

// حسنین محمد (leftmost son)
const husnainMuhammad137 = m('حسنین محمد', [
  m('حسن کامل'),
  m('حسن فاضل'),
  m('حسن عاقل'), // VERIFY: عاقل / عامل
  f('فضہ خاتون', 'سید سعید اختر', 'گذری'),
  m('حسن عادل'),
])

// Root: سید عسکری حسن بن سید ابن علی (marker "صفحہ ۱۳۵"), eight children on one sloping bar
const askariHasan137 = onPage(137, m('عسکری حسن', [
  qamarulHasan137,
  badrulHasan137,
  aynMuhammad137,
  nabarakHasan137,
  husainMuhammad137,
  mubarakHasan137,
  f('کنیز زہرا', 'سید افتدا حسن', 'گذری'), // VERIFY: husband's name (افتدا / اقتدار / افتخار)
  husnainMuhammad137,
]))

// ───────────── chart 2: ولایت علی ─────────────

// نذر حسین: five children on one bar
const nazarHusain137 = m('نذر حسین', [
  m('نذیر حسن', [f('مساۃ دھنو', 'سید قاسم حسین', 'شفاعت پوتہ', 'زوجہ اولی')]), // VERIFY: her name (دھنو?) is hard to read
  f('عابدہ خاتون', 'سید غنی حسن', 'لکڑہ'), // VERIFY: husband's name (غنی / عنی)
  m('صغیر حسن', [
    f('حبیبہ خاتون', 'سید نجم الحسن', 'چھیوڑہ حال پچدرہ'),
    tasawwurHusain138,
    f('سعیدہ خاتون', 'سید ذاکر حسین', 'مجاپوتہ'),
  ]), // VERIFY: first letter (صغیر / سغیر)
  f('ظریف النساء', 'سید حیدر حسن', 'مجاپوتہ'),
  f('فصاحت النساء', 'سید ابرار حسین', 'مجاپوتہ'),
])

// تجمل حسین: five children on one bar
const tajammulHusain137 = m('تجمل حسین', [
  m('نجم الحسن', 'عرف کلو', [f('ناطقہ خاتون', 'سید وحید حسن', 'چھیوڑہ'), m('افسر حسین', 'لاولد')]), // VERIFY: ناطقہ
  f('ریاست خاتون', 'سید نذیر حسن', 'مجاپوتہ'),
  f('ساجدہ خاتون', 'سید سراج حسین', 'چھیوڑہ', 'زوجہ اولی'),
  f('زایدہ خاتون', 'سید سراج حسین', 'چھیوڑہ', 'زوجہ ثانی'),
  m('اجمل حسین', [
    f('کنیز بانو', 'سید ابن حیدر', 'مجاپوتہ'),
    akhtarHusain138,
    f('اختری خاتون', 'سید شاکر حسین', 'مجاپوتہ'),
    f('منت فاطمہ', 'سید انتصار حسین', 'حقانی'), // VERIFY: name (منت / بنت) and husband's name
  ]),
])

// Root: سید ولایت علی بن سید رحیم بخش (marker "صفحہ ۱۳۵")
const wilayatAli137 = onPage(137, m('ولایت علی', [
  nazarHusain137,
  mehrbanAli137,
  fazlHusain138,
  intizarAli138,
  tajammulHusain137,
]))

// ═════════════════════════ book page 136 ═════════════════════════

const aliHamid136 = onPage(136, m('علی حامد', [
  f('جیوتی', 'سید علی ضامن', 'سرپٹرہ'), // VERIFY: name (printed with "مسماۃ" above it) and mohalla (سرپٹرہ / سرپیڑہ)
  m('محمد شفیع', [
    m('کامل حسن'),
    f('سراج فاطمہ'), // VERIFY: first word (سراج / ستاج)
    m('قاسم حسن'),
    f('بھوری'), // VERIFY: spelling
  ]),
  f('نفیسہ خاتون', 'سید حسن', 'کمالہ'), // VERIFY: mohalla (کمالہ / گمالہ)
  m('محمد حسن'),
]))

// ───────────── chart 2: سید حسین محمد بن سید سادات حسین ─────────────
// Five sons on the top bar, then three daughters on the box bar below (wrapped sibling list).
const husainMuhammad136 = onPage(136, m('حسین محمد', [
  m('اقبال مہدی'),
  m('طاہر مہدی'),
  m('ساجد مہدی'),
  m('آصف مہدی', [
    m('حسن مہدی'),
    m('جعفر مہدی'),
    f('وجیہہ بانو'), // wrapped onto a second bar below حسن مہدی / جعفر مہدی
  ]),
  m('ناصر مہدی'), // VERIFY: first letter (ناصر / نامر)
  f('مقدسہ خاتون', 'سید حسن ظہیر', 'قاضی زادہ'), // VERIFY: name (مقدسہ / معدسہ)
  f('مدثرہ خاتون', 'سید نعیم اختر', 'مجاپوتہ'),
  f('منزلہ بانو'), // VERIFY: name (منزلہ / منزلۃ)
]))

// ───────────── chart 3: سید ضامن حسین بن سید قربان علی ─────────────
const zaminHusain136 = onPage(136, m('ضامن حسین', [
  f('عزیز فاطمہ', 'سید محمود رضا', 'چھیوڑہ حال شفاعت پوتہ'), // VERIFY: mohalla first word (چھیوڑہ)
  f('کنیز فاطمہ', 'سید اولاد حیدر', 'قاضی زادہ'), // VERIFY: husband's name (اولاد حیدر / اولاد حسین)
  m('معاون حسین', [
    f('قدم زہرا', 'سید محمد حیدر', 'کھنڈو'), // VERIFY: name (قدم / مقدم / ندیم) and mohalla (کھنڈو)
    f('صباح آرا', 'سید معصوم حیدر', 'بھوکر حال مجاپوتہ'), // VERIFY: first mohalla word (بھوکر)
    f('جبین زہرا', 'سید افتخار حسین', 'نقوی گراث'), // VERIFY: husband's name and mohalla (hard to read)
    m('محمد علی حسین', [
      f('رخشی حسین'),
      f('فرحی حسین'),
      f('جوہی حسین'),
      f('روحی حسین'),
      f('صبوحی حسین'), // wrapped onto the bar below
      m('فیضیاب حسین'),
      m('ظفریاب حسین'),
    ]),
    m('محمد ثقلین'),
    f('اسماء زہرا', 'سید عارف حسن زیدی', 'لکھنؤ'), // VERIFY: husband's surname (زیدی) and mohalla (لکھنؤ); wrapped onto the bar below
  ]),
  m('آمن حسین', [
    m('نعیم حیدر'),
    f('ملکہ خاتون', 'سید مصور حسین', 'حقانی'), // VERIFY: husband's name (مصور / منصور)
    m('منور حسین', [m('فرخ رضا'), f('حنا بانو'), f('ہما بانو')]),
    m('نسیم حیدر', [
      m('مصطفیٰ حیدر'),
      f('نازش زہرا'),
      m('مرتضیٰ حیدر'),
      f('سکینہ نقوی'),
    ]),
    m('وسیم حیدر', [f('نرجس بانو'), m('شہریار'), f('نادیہ بانو')]),
    // طاہر حسین: three sons on the top bar of a box, four more on the bar below (wrapped)
    m('طاہر حسین', [
      m('طالب حسین'),
      m('ثاقب حسین'),
      m('عاقب حسین'),
      m('عاطف حسین'),
      f('ثنا طاہر'), // VERIFY: first letter (ثنا / تنا)
      f('صوۃ الزہرا'),
      f('عمرانہ خاتون'),
    ]),
  ]),
  m('ثامن حسین', [
    f('خورشید حیدری', 'سید باقر حسین نقوی', 'سوئی پت'), // VERIFY: husband's surname and mohalla
    f('جمشید حیدری', 'سید محمد علی', 'شفاعت پوتہ'),
    f('انجم حیدری', 'سید رضا حسین', 'دانشمندان'),
  ]),
  // ظہیر حیدر: two on the top bar of a box, six more on the long bar below (wrapped)
  m('ظہیر حیدر', [
    f('رخسانہ بانو', 'سید انور رضا', 'شفاعت پوتہ'),
    m('تنویر حیدر'),
    m('بصیر حیدر', [m('علی بصیر'), f('ندا البصیر')]),
    f('ریحانہ بانو', 'سید طاہر حسین', 'مجاپوتہ'),
    f('فرزانہ بانو', 'سید محمد ثقلین', 'مجاپوتہ'),
    m('نصیر حیدر', [m('شاہ زیب حیدر'), f('چاندنی')]),
    f('سلطانہ بانو', 'سید اکرم حسین', 'نوگانواں'), // VERIFY: husband's first name (اکرم) and mohalla (نوگانواں)
    f('شانہ بانو', 'سید ساجد رضا', 'چھیوڑہ حال شفاعت پوتہ'), // VERIFY: husband's name (ساجد رضا)
  ]),
]))

// ───────────── chart 4: سید معجز حسن بن سید ابن علی ─────────────
const mujizHasan136 = onPage(136, m('معجز حسن', [
  m('زوار حسین', [
    f('ظہور زہرا'),
    f('شان زہرا'),
    f('مہدی زہرا'),
    f('شوبی'), // VERIFY: spelling
    f('بشری'),
  ]),
  f('حیدری خاتون', 'سید دلا الحسن', 'مجاپوتہ'), // VERIFY: husband's name (دلا الحسن / دلال الحسن)
  m('مسرور الحسن', [
    f('تنویر زہرا'),
    f('مشکور زہرا', 'سید سلطین احمد', 'نگینہ'),
    m('مشکور الحسن', [m('ارمان حسن'), f('فوزیہ خاتون')]),
    f('منظور زہرا', 'سید ہمایوں اختر', 'راجستھان'), // VERIFY: husband's name and mohalla (راجستھان)
    m('منظور الحسن', [m('ظہیر عباس'), f('تفسیر زہرا')]), // VERIFY: second child's name (تفسیر / تفمیر)
    f('شمع زہرا'),
  ]),
  // فخر الحسن: وفور and نظور on the box bar, طیور on the bar below, then five more on a third bar (all one list)
  m('فخر الحسن', [
    m('وفور الحسن'),
    m('نظور الحسن'), // VERIFY: printed نظور (منظور?)
    m('طیور الحسن', [m('رضا عباس'), m('فخر عباس')]),
    m('غیور الحسن', [m('حسن زماں'), f('پروین سیدہ')]), // VERIFY: غیور الحسن (printed غیور الحی)
    f('نازنین بانو', 'سید حسین عباس', 'گذری'),
    m('حضور الحسن', [m('حضور عادل'), f('حضور زہرا'), m('حضور کامل')]),
    f('پروین بانو', 'سید نعیم حیدر', 'مجاپوتہ'),
    m('شعور الحسن', [
      f('نغمہ شعور'),
      m('مہدی شعور'),
      f('ترنم شعور'),
      m('نیاز عباس'),
    ]),
  ]),
  // نور الحسن: twelve children on four stacked boxes (three per row, top row first)
  m('نور الحسن', [
    f('ربیع زہرا'),
    f('رفیع زہرا'),
    f('اکرام زہرا'),
    m('وسیم حیدر'),
    f('انوار زہرا'),
    m('سلیم حیدر'),
    f('نور زہرا', 'سید قائم علی خان', 'سرسی'),
    f('نصیب زہرا', 'سید حسن حیدر عابد', 'نوگنیاں'), // VERIFY: husband's name (حسن حیدر عابد؟)
    m('قسیم حیدر'), // VERIFY: first letter (قسیم / قاسم)
    m('عظیم حیدر', [m('محمد مہران'), f('زعیم فاطمہ'), m('محمد افغان')]),
    m('نعیم حیدر', [m('محمد معجز حیدر'), f('رباب حیدر'), f('خدیجہ حیدر')]),
    m('فہیم حیدر', [f('سلطنت آرا'), m('فراز حیدر')]),
  ]),
]))

// ═════════════════════════ book page 135 ═════════════════════════

const ishaq135 = onPage(143, m('اسحاق')) // VERIFY: page number 143 (printed ۱۴۳)

// ───────────── chart 1: سید اعجاز حسین بن سید منظور حسین ─────────────

// VERIFY: the box's two rows are one sibling list of eight (wrapped), not two generations
const muhammadBaqir135 = m('محمد باقر', [
  m('عالم حسین'),
  f('سیما باقر'),
  m('عاصم حسین'),
  f('کرن باقر'),
  // second bar of the same box (wrapped sibling list)
  m('عادل حسین'),
  m('عدیل حسین'),
  m('نادر حسین'),
  f('صفیہ باقر'),
])

// VERIFY: first name could be محمد یاسین
const muhammadYasin135 = m('محمد یٰسین', [
  f('ساجدہ خاتون', 'سید نسیم حیدر', 'مجاپوتہ'),
  f('باقرہ خاتون'),
  muhammadBaqir135,
  f('قدیر فاطمہ'),
  f('سنجیدہ خاتون'),
])

const muhammadHusain135 = m('محمد حسین', [
  m('محمد مہدی', [m('اعجاز مہدی'), f('چمن زہرا'), m('گوہر مہدی')]),
  f('نازنین فاطمہ', 'سید ظفر حیدر زیدی', 'مظفر نگر'), // VERIFY: husband's first name (ظفر / ظہیر)
])

const muhammadZahin135 = m('محمد ذہین', [
  f('فاضلہ خاتون', 'سید فرمان حسن', 'دانشمندان'),
  m('محمد جعفر', [m('علی عباس'), f('زہرا')]),
  f('پروین فاطمہ', 'سید انیس حیدر', 'شفاعت پوتہ'),
  f('شمیناز فاطمہ', 'سید ولی محمد', 'کٹرہ غلام علی'),
])

const aijazHusain135 = onPage(135, m('اعجاز حسین', [
  muhammadYasin135,
  f('یٰسینہ خاتون', 'سید محمد حسین', 'مجاپوتہ'), // VERIFY: first letters (یٰسینہ / یاسینہ)
  f('حسینہ خاتون', 'سید آمین حسن', 'مجاپوتہ'), // VERIFY: husband's name (آمین / امین)
  muhammadHusain135,
  f('تمکینہ خاتون', 'سید فرزند حسن', 'مجاپوتہ حال شفاعت پوتہ'),
  f('متینہ خاتون', 'سید وصال احمد', 'گولی حال قاضی زادہ'), // VERIFY: mohalla (گولی / گوری)
  muhammadZahin135,
]))

// ───────────── chart 2: سید محمد صادق بن سید عبدالمجید عرف مجا ─────────────

const daimAli135 = m('دائم علی', [
  m('رحمت علی', [
    m('احسن علی', [f('مومنہ خاتون', 'سید محمود حسن', 'مجاپوتہ')]),
    f('معصومہ خاتون', 'سید سبط حسن', 'شفاعت پوتہ'),
    m('قربان علی', [
      m('سیادت حسین', [
        husainMuhammad136,
        // VERIFY: five children as one wrapped list (3 on the top bar, 2 on the lower)
        m('دانش رضا', [
          m('عالم رضا'),
          f('سیدہ جبین'),
          f('سیدہ یاسمین'),
          // wrapped second bar of the same sibling list
          m('عاصم رضا'),
          m('سالم رضا'),
        ]),
      ]),
      zaminHusain136,
    ]),
    m('ممتاز حسین', 'لاولد'),
  ]),
  m('احمد علی', [
    // VERIFY: the box's two rows are one sibling list of six (wrapped); the bracketed note is hard to read (printed بیران?)
    m('علی احمد', 'سید علی احمد کے تینوں بیٹے شاہ پور میں رہتے ہیں', [
      f('احفہ خاتون', 'سید یوسف علیجان', 'سرسی'), // VERIFY: her name (احفہ / اصفہ) and the husband line, which also seems to read "با محمود دلپد"
      f('کنیز فاطمہ', 'سید علی حسن زیدی', 'بکنالہ'), // VERIFY: زیدی is printed in brackets beside her name
      f('عنیفہ خاتون', 'سید ارتضیٰ حسن', 'بکنالہ'), // VERIFY: her name (عنیفہ / عفیفہ)
      // wrapped second bar of the box
      m('حامد حسین', [
        m('صغیر حسن', [
          m('محمد رضا'),
          m('حسن رضا'),
          f('سلمیٰ خاتون', 'سید انتصار حسین', 'بکنالہ'),
          m('علی رضا', [f('معصوم زہرا')]), // VERIFY: علی رضا sits under بنی حسن but his arrow comes from صغیر حسن کی bar
        ]),
      ]),
      aliHamid136,
      m('علی حسین', [m('بنی حسن'), f('لغیم فاطمہ', 'سید یوسف حسن', 'سرسی')]), // VERIFY: لغیم (نعیم?)
    ]),
  ]),
  m('احمد رضا', [mujtabaHasan135]),
  m('محمد حسین', 'لاولد'),
  m('نیاز علی', [
    f('اشرف النساء', 'سید سعید حسن', 'سدو', 'زوجہ اولیٰ; اس کا بیٹا مجتبیٰ حسن (صفحہ ۱۳۶)'), // VERIFY: "اولی" and the husband's name; her son is drawn from her own line, see mujtabaHasan135
    m('ابن علی', [
      f('طاہرہ خاتون', 'سید اجتبیٰ حسن', 'مجاپوتہ'), // VERIFY: husband's name (اجتبیٰ / مجتبیٰ)
      m('اولاد حسن', [
        f('حدیث فاطمہ', 'سید علی حیدر', 'مجاپوتہ'),
        m('اسناد حسن', 'لاولد'),
      ]),
      askariHasan137,
      mujizHasan136, // wired by its heading (صفحہ ۱۳۵ سید معجز حسن بن سید ابن علی); page 135 draws no line to him
    ]),
    f('بتول زہرا', 'سید مجتبیٰ احسن', 'مجاپوتہ'),
    f('بتول عذرا', 'سید صغر حسن', 'منڈی چوب'), // VERIFY: husband's name and mohalla (مندی چوب)
  ]),
])

// VERIFY: the bracketed note (محلہ بچھرہ / پچدرہ میں ساکن ہوئے)
const fatahAli135 = m('فتح علی', 'محلہ بچھرہ میں ساکن ہوئے', [
  saadatAli141,
  f('عجائب النساء', 'سید خیرات علی'),
])

const faizAli135 = m('فیض علی', [
  f('امین دولت', 'سید شاکر علی'),
  m('کرم علی', [
    m('مہدی علی', [f('سکینہ', 'سید امیر علی')]),
    m('نیاز علی', 'لاولد'),
  ]),
  mehrAli141,
  f('فیاض النساء', 'سید محمد احسن'), // VERIFY: drawn on a lower bar joined down the right side, taken as the 4th (youngest) sibling
])

const muhammad135 = m('محمد', 'عرف غلام بخشو', [
  m('غلام شرف الدین', [
    // VERIFY: دائم علی hangs on the wrapped lower bar, taken as the third sibling (not a son of شرافت النساء)
    m('الہی بخش', [
      f('شرافت النساء', 'سید نجف علی'),
      m('صادق علی', 'دختر'),
      daimAli135,
    ]),
    m('کریم بخش', 'لاولد'),
    m('رحیم بخش', [m('ہدایت علی', 'دختران'), wilayatAli137]),
  ]),
  m('نجم الدین', [
    m('میاں موتی', 'لاولد'),
    m('شمس الدین', [
      m('مدد علی', [
        m('اکبر حسین', '(امروہہ سے باہر کہیں چلے گئے)'), // VERIFY: name (اکبر / ابر); the bracketed note sits under both brothers
        m('صادق حسین', '(امروہہ سے باہر کہیں چلے گئے)'),
      ]),
    ]),
  ]),
])

// VERIFY: چھجو name (چھجو / چہجو)
const muhammadSadiq135 = onPage(135, m('محمد صادق', [
  m('چھجو', [
    m('حامد', [
      m('احمد رضا', [faizAli135, fatahAli135]),
    ]),
  ]),
  f('نصیر النساء'),
  m('راجو', [ishaq135]),
  m('ابو محمد', 'لاولد'),
  m('عبدالرشید', [muhammad135]),
]))

// ═════════════════════════ book page 134 ═════════════════════════

const farzandHasan134 = m('فرزند حسن', [
  m('زوار حسین', [f('فروہ زہرا'), m('محمد رضا')]),
  f('نگہت پروین', 'سید محمد عباس', 'شفاعت پوتہ'),
  f('کشور پروین', 'سید علی', 'شفاعت پوتہ'), // VERIFY: husband's name is just "علی"
  f('کوثر پروین'),
  m('ممتاز حسین'),
  // second bar (the first bar's left end drops onto it)
  m('انتخاب حسین', [
    f('صدف زہرا'),
    f('زینت زہرا'),
    m('شہزاد مہدی'),
    f('مہوش زہرا'),
    f('کنول زہرا'),
  ]), // VERIFY: the long bar's right end also runs up toward اظہر حسن's bar; taken as انتخاب's own children
  m('ذوالفقار حسین', [f('مہک زہرا'), m('محمد صادقین')]),
]) // VERIFY: order of the two rows

// ───────── chart 4: غلام غوث بن غلام مرتضیٰ ─────────
const ghulamGhaus134 = onPage(134, m('غلام غوث', [
  m('اشرف علی', [m('بندہ علی', [m('محمد الیاس', 'لاولد')])]),
  m('عارف علی', [
    m('نیاز علی', 'محلہ لکڑہ میں منتقل ہوئے', [ // VERIFY: محلہ لکڑہ (could be کٹرہ)
      m('مقبول حسین', [
        m('مسرور حسین', [
          f('طہیرہ خاتون', 'سید افسر علی', 'حقانی'), // VERIFY: her name and husband's name (افسر علی / آفتاب علی)
          f('سرورہ خاتون', 'سید شاہد حسین', 'شفاعت پوتہ'),
          m('سرور حسین', [
            f('امیر فاطمہ'), // VERIFY: امیر / اثیر
            f('غیور فاطمہ'),
            f('فردوس فاطمہ'),
            m('مشکور حسن'),
            // second bar (right end of the first drops onto it)
            m('منصور حسن'),
            m('رضی عباس'),
            f('سرور فاطمہ'),
          ]), // VERIFY: order of the two rows
          f('تطہیر خاتون', 'سید حسن'), // VERIFY: her name and the husband's name; no mohalla printed
        ]),
        f('جمعی', 'سید اعجاز حسین', 'مجاپوتہ', 'سماۃ'),
        m('چھیدا ما', 'لاولد'), // VERIFY: name reads like چھیدا ما / جمید ما
      ]),
      m('ظہور حسین', 'لاولد'),
    ]),
  ]),
  m('وارث علی', [
    m('گھسیٹا', 'لاولد'),
    m('منور حسین', [
      m('انوار حسین', [
        f('طاہرہ خاتون', 'سید عتیق حسن', 'گذری'),
        f('طیبہ خاتون'),
      ]),
      m('ریاض حسین', 'لاولد'),
      m('ظفر حسین', 'عرف بلو', [
        m('حسین محمد', [
          f('ریحانہ پروین'),
          f('فرحانہ پروین'),
          f('فرزانہ پروین', 'سید نعیم حیدر', 'قاضی زادہ'),
          f('رضوانہ پروین'),
          // second bar (right end of the first drops onto it)
          f('رضیانہ پروین', 'سید عشرت علی زیدی', 'جبرا ودی'), // VERIFY: mohalla is hard to read
          m('مہتاب حسین'),
          f('روبینہ پروین', 'سید محمد افضال', 'گذری'), // VERIFY: mohalla (گذری / گذرہا)
        ]), // VERIFY: order of the two rows
        farzandHasan134,
        m('قمر حسن', [
          m('عارف اقبال'),
          m('عامر حسین'),
          f('زرین زہرا'),
          f('نگین زہرا'),
          // second bar (left end of the first drops onto it)
          m('عاطف حسین'),
          m('آصف اقبال'),
          m('کاشف حسین'),
          m('ہاشم رضا'),
        ]), // VERIFY: order of the two rows
        // second bar below the first (the first bar's right end drops onto its left end)
        m('مظہر حسن', [
          f('نازک بانو', 'سید علی محمد', 'مجاپوتہ'),
          m('صفدر عباس'),
          m('مظاہر حسن', [m('جواد حسن'), f('رابعہ بانو'), f('شافعہ بانو'), m('فواد حسن')]),
          f('جبین فاطمہ', 'سید قمر حسن', 'جعفری'), // VERIFY: جعفری may be a mohalla or a surname
          m('حیدر عباس'),
        ]),
        m('اظہر حسن', [
          m('ثمر رضا', [m('علی رضا'), m('محمد عباس')]),
          // second bar (the first bar's right end drops onto its left end)
          m('حسن رضا'),
          f('تبسم پروین'),
          f('افشاں پروین'),
          f('نزہت پروین', 'سید اظہر مہدی'),
        ]), // VERIFY: order of the two rows
      ]), // VERIFY: ظفر حسین's children are on two bars; مظہر / اظہر are the second bar (could be انوار's, but they hang off ظفر's bar end)
      aijazHusain135,
    ]),
  ]),
]))

// ───────── chart 3: یعقوب حسین بن محمد حسین ─────────
const yaqubHusain134 = onPage(134, m('یعقوب حسین', [
  f('امینہ خاتون', 'سید مطلوب حسین', 'مجاپوتہ'),
  m('مشتاق حسین', [
    f('ناظمہ خاتون', 'سید سجاد حسین', 'حقانی'),
    f('فاطمہ خاتون', 'سید حامد حسین', 'حقانی'),
    f('ضامنہ خاتون', 'سید علی مہدی', 'پچدرہ'), // VERIFY: husband's name (مہدی / ہادی); mohalla spelled بچدرہ
    f('حسن فاطمہ', 'سید نصرت حسین', 'دانشمندان'),
    // second bar (right end of the first drops onto it)
    m('حسن مہدی'),
    m('حسن امام', [
      f('نفیس فاطمہ'),
      f('کنیز فاطمہ'),
      f('ریاض فاطمہ'),
      m('شاداب علی'),
      m('غلام محمد'),
    ]),
  ]), // VERIFY: the two sons are on a second bar below the daughters' bar; order of rows
  f('تمکینہ خاتون', 'سید مطاہر حسین', 'حقانی'), // VERIFY: husband's name (مطاہر / مظاہر)
  m('فیاض حسین', [f('ریاست النساء')]),
]))

// ───────── chart 2: قیوم حسین بن محمد حسین ─────────
const qayyumHusain134 = onPage(134, m('قیوم حسین', [
  m('محبوب حسن'),
  f('شاکرہ خاتون', 'سید شباد احسن', 'اغوانپور'), // VERIFY: husband's name (شباد / شاد)
  m('زمرد حسین', [
    f('مشاہدہ خاتون'),
    f('نجمہ خاتون'),
    m('اقبال حسین', [f('اقرا فاطمہ'), m('شاہ زیب'), f('سحر فاطمہ'), f('صدرہ فاطمہ')]),
    f('یاسمین زہرا'),
    f('ربینہ خاتون'),
    m('جاوید حسین'),
  ]),
  f('شاہدہ خاتون', 'سید اصغر حسین', 'اغوانپور'),
  f('طاہرہ خاتون', 'سید معزز حسین', 'شفاعت پوتہ', 'زوجہ اولی'), // VERIFY: "اولی" (first wife) printed before the husband's name
]))

// ───────── chart 1: حیدر حسن بن لیاقت حسین ─────────
const haidarHasan134 = onPage(134, m('حیدر حسن', [
  m('شان حیدر'),
  f('حسین فاطمہ'), // VERIFY: two arrows hang over her name; counted as one daughter
  m('شبہیر حیدر'), // VERIFY: شبہیر / شبیہ
  m('طاہر حسین', [m('کاوش علی'), f('فضہ طاہر'), m('تابش علی')]),
  m('کمال حیدر'),
  m('شمیم حیدر'),
  f('شمیم فاطمہ'),
  m('حسین حیدر'),
]))

// ═════════════════════════ book page 133 ═════════════════════════

const kabirAli133 = m('کبیر علی', [
  m('اکبر علی', 'لاولد'),
  m('محمد علی', [m('تصدق حسین', [f('دختران')])]), // VERIFY: "دختران" is printed instead of names (daughters, unnamed)
])
const rustamAli133 = m('رستم علی', [
  m('غلام علی', 'لاولد'),
  m('قطب علی', [m('روشن علی', [m('منور علی', 'لاولد'), m('نور علی', [kabirAli133])])]),
])

// ───────── ولایت بخش → حسین بخش → مردان علی ─────────
const latafatHusain133 = m('لطافت حسین', [
  // box under him: two on the top row, six on the lower bar
  f('شبانہ خاتون'),
  f('نجمہ خاتون'),
  m('ذوالفقار حسین'), // VERIFY: reads دالفقار / ذوالفقار
  m('تاجدار حسین'), // VERIFY: first letter (تاجدار / ماجدار)
  f('فرزانہ خاتون'),
  m('اقتدار حسین'),
  m('ارشاد حسین'),
  m('عمران حسن'),
])

const ibrarHusain133 = m('ابرار حسین', [m('جرار حسین'), m('اخلاق حسین'), m('کرار حسین')])

// لیاقت حسین: ten children drawn through three joined boxes/bars
const liaqatHusain133 = m('لیاقت حسین', [
  f('اربعین خاتون', 'سید صادق علی', 'حقانی'),
  f('حدیثہ خاتون', 'سید نہال حسن', 'مجھیر پٹی'), // VERIFY: husband (نہال / بنال) and mohalla (مجھیر پٹی / مجھیر ہٹی)
  f('حنیفہ خاتون', 'سید انیس الحسن', 'حقانی'),
  f('حسین بانو'),
  f('حسین دولت', 'سید ابرار حسین', 'بریلی'), // VERIFY: name word order (printed حسین دولت) and husband ابرار / ابراہیم
  m('زوار حسین', [m('محمد میاں'), m('حسین میاں')]),
  latafatHusain133,
  ibrarHusain133,
  m('نایاب حسین'),
  haidarHasan134,
])

const asrarHusain133 = m('اسرار حسین', [m('شبیر حسن', 'لاولد'), m('ابوالقاسم')]) // VERIFY: printed الوالقاسم

const mumtazHusain133 = m('ممتاز حسین', [
  f('صابرہ خاتون', 'سید نور الحسن', 'مجاپوتہ'),
  f('فاطمہ خاتون', 'سید عابد حسین', 'مجاپوتہ'),
  asrarHusain133,
  liaqatHusain133,
])

// امیر حسن: six children in a box (3 on the top bar, 3 on the lower bar)
const badrulHasan133 = m('بدر الحسن', [
  f('صفیہ خاتون', 'سید حسن', 'سرائے کہنہ'), // VERIFY: name (صفیہ / ضعیفہ)
  f('ماجدہ خاتون', 'سید لطافت حسین', 'مجاپوتہ'), // VERIFY: ماجدہ / ساجدہ
  f('ساجدہ خاتون', 'سید فیاض حسین', 'بیلی بھیت'), // VERIFY: ماجدہ / ساجدہ
  m('شاذر حسین', [m('مونس الحسین')]), // VERIFY: شاذر (شاکر؟)
  m('ماجد حسین', [f('انجم زہرا')]),
  // second bar below, joined at the right edge
  m('ساجد حسین', [
    m('وقار حسین'), // VERIFY: first letters (وقار / وتار / ستار)
    m('شاندار حسین'),
    f('قائمہ خاتون'), // VERIFY: first letter (قائمہ / تائمہ)
    m('علمدار حسین'),
  ]),
  m('شمس الحسن'),
  m('ساغر حسین', [m('مسرور الحسن'), m('مستفیض الحسن')]), // VERIFY: ساغر / ساحر / ساعر; مسرور
])

const amirHasan133 = m('امیر حسن', [
  f('حسینہ خاتون', 'سید یعقوب حسین', 'سرائے کہنہ'),
  f('زاہدہ خاتون', 'سید فضل حسین', 'مجاپوتہ'),
  m('ضمیر حسن', 'لاولد'),
  badrulHasan133,
  m('عابد حسین', [f('ذاکرہ خاتون', 'سید ابرار حسین', 'سرائے کہنہ')]),
  f('شاکرہ خاتون', 'سید ابوالقاسم', 'سرائے کہنہ'),
])

const niyazHusain133 = m('نیاز حسین', 'عرف ہو', [ // VERIFY: the small word above his name (عرف ہو)
  m('ولایت حسین', [f('جمیلہ خاتون', 'سید خیدتما', 'مجاپوتہ')]), // VERIFY: husband's name (خیدتما)
  amirHasan133,
  f('زہرا خاتون', 'سید ریاض الحسن', 'مجاپوتہ'),
  mumtazHusain133,
  f('خاتون دولت', 'سید منظور حسین', 'مجاپوتہ'), // VERIFY: printed خاتون دولت (دولت خاتون?)
])

const mardanAli133 = m('مردان علی', [niyazHusain133, m('نثار حسین', [m('مجتبیٰ حسین', 'لاولد')])])

// حیدر علی's children: the sixth (منظور حسین) is drawn in a hook under بلو
const shafiqHasan133 = m('شفیق حسن', [
  m('حسین', [
    f('پروین فاطمہ'),
    m('مہتاب حسن', [m('ظفریاب حسن'), m('ذوالفقار حسن')]),
    f('نعیم فاطمہ', 'سید منظور حسن', 'شفاعت پوتہ'), // VERIFY: husband's name (منظور / منصور)
    m('نایاب حسن', [f('نسرین زہرا'), f('یاسمین زہرا')]),
    m('شاندار حسین'),
  ]),
  f('نازک خاتون', 'سید سفا', 'بخشی حال حولی'), // VERIFY: husband's name (سفا / ثنا) and mohalla (حال حولی / حال جولی)
  m('علی جعفر', 'مفقود الخبر'),
])

const riazulHasan133 = m('ریاض الحسن', [
  m('بنی حیدر', 'لاولد'),
  f('جیولی', 'سید سلم حسین زیدی', 'گذری', 'مساۃ'), // VERIFY: name (جیولی / حیوتی) and husband (سلم / سلیم)
  shafiqHasan133,
  f('شمیمہ خاتون', 'سید ضمیر الدین', 'شفاعت پوتہ'),
])

const haidarAli133 = m('حیدر علی', [
  f('دختر', 'سید خیرات علی', 'گذری'),
  riazulHasan133,
  f('شہر بانو', 'سید طالب حسین', 'شفاعت پوتہ'),
  f('ام سلمیٰ', 'سید اجمل حسین', 'دانشمندان'),
  f('بلو', 'سید الصادق حسین', 'گذری'), // VERIFY: husband's name (الصادق / الصار)
  m('منظور حسین', 'لاولد'),
])

// حسین بخش: six children, three in a box and three on the bar below it
const husainBakhsh133 = m('حسین بخش', [
  m('احمد بخش', 'لاولد'),
  m('خادم علی', 'لاولد'),
  m('یوسف علی', 'لاولد'),
  haidarAli133,
  f('دختر', 'سید قادر بخش', 'دانشمندان'),
  mardanAli133,
])

// ───────── علی بخش ─────────
const zakirHusain133 = m('ذاکر حسین', [
  // box: three on the top bar, three on the lower bar
  f('فرحانہ ذہین'), // VERIFY: ذہین (the three daughters' second word)
  f('فیضانہ ذہین'),
  f('ریحانہ ذہین'),
  m('ناظر حسین'),
  m('مناظر حسین'),
  m('ناصر حسین'), // VERIFY: ناصر / ناظم
])

const ayyubHusain133 = m('ایوب حسین', [m('مطلوب حسین', [zakirHusain133])])

const aliBakhsh133 = m('علی بخش', [
  m('محمد حسین', [
    ayyubHusain133,
    qayyumHusain134,
    yaqubHusain134,
    f('راحت النساء', 'سید ضیاء الحسن', 'دانشمندان'),
    f('ذکیہ خاتون', 'سید اصغر حسین', 'مجاپوتہ'),
  ]),
  f('دختر', 'سید حیدر علی', 'مجاپوتہ'),
  m('علی حسین', 'لاولد'),
  m('ولی حسین', 'لاولد'),
  m('جعفر حسین', 'لاولد'),
])

const walayatBakhsh133 = m('ولایت بخش', [
  aliBakhsh133,
  m('شرف الدین', 'لاولد'),
  m('محمد بخش', 'لاولد'),
  husainBakhsh133,
])

// ───────── root: صفحہ ۱۳۱ سید عبدالرحیم بن سید عبدالمجید عرف مجا ─────────
const abdurRahim133 = onPage(133, m('عبدالرحیم', [
  m('چاند', 'لاولد'),
  m('عبدالرحمن', [
    m('غلام مرتضیٰ', [ghulamGhaus134, f('کنیز فاطمہ')]),
    m('ابوالحسن', [m('مبارک', [walayatBakhsh133])]),
    rustamAli133,
  ]),
]))

// ═════════════════════════ book page 132 ═════════════════════════

const asgharAli132 = onPage(132, m('اصغر علی', [
  m('افسر علی', [
    f('نگار بانو'),
    m('اطہر علی'),
    m('اظہر علی'),
    f('ریاض بانو'),
    f('ندیم بانو'),
    m('افتخار علی'),
    f('نازک بانو'),
    m('انتظار علی'), // VERIFY: drawn on a short wrapped second bar under نگار بانو; taken as the last sibling
  ]),
  f('نسیم فاطمہ'),
  f('امام فاطمہ', 'سید حسن محمد', 'کٹرہ غلام علی'),
  f('حسین فاطمہ', 'سید حسن', 'جھنگا دروازہ', 'زوجہ ثانی'), // VERIFY: mohalla (جھنگا دروازہ / چنگا دروازہ), "ثانی"
  f('شمیم فاطمہ', 'سید شجر الحسن زیدی', 'جزدوی حال نگردہ'), // VERIFY: mohalla (جزدوی؟)
  m('غضنفر علی', [m('انتخاب علی')]),
  f('تسکین فاطمہ'),
  m('مظفر علی', [
    m('افضل علی'),
    f('رئیس فاطمہ'),
    f('انیس فاطمہ'),
    m('اسد علی'), // VERIFY: drawn on a wrapped second bar under the first row; taken as a fourth sibling of افضل علی
  ]),
]))

// ───────────── chart 2: سید اکبر علی بن سید قوت علی ─────────────
const akbarAli132 = onPage(132, m('اکبر علی', [
  f('شبیہ زہرا', 'سید محمد عباس', 'دانشمندان'), // VERIFY: name (شبیہہ / شبیہ)
  f('کنیز زہرا', 'سید مہدی رضا', 'پچدرہ'), // VERIFY: mohalla spelled بچیدرہ
  f('رئیس زہرا', 'سید شفاعت علی', 'مجاپوتہ'),
  m('محمد علی'),
  f('ماہ زہرا', 'سید علی عباس', 'نگردہ'), // VERIFY: mohalla (نگردہ)
]))

// ───────────── chart 1: سید بنیاد علی بن سید قدرت علی ─────────────
const bunyadAli132 = onPage(132, m('بنیاد علی', [
  // قوت علی: nine children, five on the top bar and four on the wrapped bar below
  m('قوت علی', [
    f('بنت فاطمہ', 'سید معظم حسین', 'مجاپوتہ'), // VERIFY: name (بنت فاطمہ) and husband (معظم / معلم)
    f('جعفرہ خاتون', 'سید دانش رضا', 'شفاعت پوتہ'), // VERIFY: husband's name
    f('مہاجرہ خاتون', 'سید محمد مہدی', 'سدر'), // VERIFY: mohalla (سدر / سدو)
    f('حاجرہ خاتون', 'سید محمد کامل', 'گذری'),
    asgharAli132,
    m('جعفر علی', [m('شجاعت علی'), m('راحت علی')]),
    m('اختر علی', [
      f('زاہرہ خاتون', 'سید زین العباد', 'پچدرہ حال نگردہ', 'زوجہ ثانی'), // VERIFY: "ثانی"; mohalla spelled بچیدرہ
      f('مطاہرہ خاتون', 'سید شان رضا', 'بخشی حال دانشمندان'), // VERIFY: name (مطاہرہ / مظاہرہ)
      f('ناظرہ خاتون', 'سید مشاہد حسین', 'گذری'), // VERIFY: husband's name
      // امانت علی: fifteen children, ten on the top bar and five on the wrapped bar below
      m('امانت علی', [
        f('نسیم اختر'),
        f('فرح اختر'),
        m('محمد کمال اختر'),
        f('معصوم اختر'), // VERIFY: printed without سید
        m('محمد ناج اختر'),
        f('صبا اختر', 'سید جعفر حسین', 'گذری'),
        m('محمد سعید اختر'),
        m('محمد ناز اختر', [m('نوازش اختر'), f('رضیہ اختر')]),
        m('محمد جمال اختر', [m('سال اختر')]), // VERIFY: name (سال / منال اختر)
        m('جلال اختر'), // VERIFY: name (جلال / جمال)
        m('باقر علی'),
        m('مہدی علی', [m('عباس مہدی'), f('صبا مہدی'), f('درخشاں مہدی')]),
        f('نوفیر بانو'), // VERIFY: name (نوفیر / نوفخر)
        m('کاظم علی', 'لاولد'),
        m('لیاقت علی', [
          m('سعادت علی'),
          m('فصاحت علی'),
          f('تطہیر فاطمہ', 'سید محمد عباس', 'سدر'), // VERIFY: mohalla (سدر / سدو)
        ]),
      ]),
      // لائق علی is drawn on the wrapped bar of the box under اختر علی, beside امانت علی
      m('لائق علی', [
        f('عزیزی زہرا'), // VERIFY: name
        m('عمران علی'),
        m('اکرام عباس'),
        f('نرجس فاطمہ'),
        m('انتظار عباس'),
        f('سحر فاطمہ'),
      ]),
    ]),
    // انور علی: six children, three in the box and three on its bottom bar
    m('انور علی', [
      f('ذہین فاطمہ'), // VERIFY: name (ذہین / دہین)
      m('حیدر علی'),
      f('عزیز فاطمہ'),
      m('ظہور علی', 'لاولد'), // VERIFY: name (ظہور / تہور)
      f('امیر فاطمہ', 'سید ولی حسین', 'جلالی'), // VERIFY: husband's name (ولی / دلی) and mohalla
      m('مظہر علی'), // VERIFY: name (مظہر / منظر)
    ]),
    akbarAli132,
  ]),
  f('راضیہ خاتون', 'سید نور حسن', 'کٹرہ غلام علی'),
  f('وحید النسا', 'سید ابوالحسن', 'کٹرہ غلام علی'),
  f('صغیر النسا', 'سید احمد علی', 'حقانی'),
  // شیدا علی: his children are drawn on one bar, حمزہ علی eldest on the right
  m('شیدا علی', [
    m('حمزہ علی', 'لاولد'),
    m('رضا علی', [m('محب علی', [m('محبوب علی'), f('نرگس فاطمہ'), m('محمد حیدر')])]),
    m('ارتضیٰ علی', [
      m('مبارک علی', [
        m('احسان حیدر'),
        f('سعید فاطمہ'),
        f('یمن فاطمہ'),
        m('الغام حیدر'),
        m('عظیم حیدر'),
        f('امن فاطمہ'),
      ]),
      f('مرتضائی فاطمہ', 'سید مقبول حسین', 'نہٹور'), // VERIFY: one name or two (مرتضائی / فاطمہ)
      f('حیات زہرا', 'سید کمال حیدر', 'بگلہ'),
      f('شبیہ فاطمہ', 'سید اکبر علی', 'مجاپوتہ'),
      m('مرتضیٰ علی', [
        f('بہار فاطمہ'),
        f('ریشماں بانو'),
        f('شمع بانو'),
        m('ارمان حیدر'),
        m('فرمان حیدر'),
        m('دلشان حیدر'), // VERIFY: name (دلشان / ذیشان)
        m('سلمان حیدر'),
      ]), // VERIFY: his own name (مرتضیٰ / ارتضیٰ)
    ]),
  ]),
  m('آل علی', 'لاولد'),
  m('اسرار علی', 'لاولد'),
  m('شار علی', [
    m('انصار علی', [
      f('چاندنی بی'),
      m('نورعین علی'),
      m('عابدین علی'),
      m('محمد تقلین علی'),
      m('محمد سبطین علی'),
      m('محمد صادقین علی'), // VERIFY: name (صادق / صادقین)
      m('محمد ہلال علی'),
    ]),
  ]),
]))

// ═════════════════════════ book page 131 ═════════════════════════


// ───────────── عبدالعلیم -> علی اصغر -> غلام محی الدین -> ... (right column) ─────────────
const imamBakhsh131 = m('امام بخش', [
  m('محمد علی', [f('دختر')]),
  m('غلام حسین', [
    m('تصدق حسین', [f('دختر')]),
    m('نوازش حسین', [f('دختر')]),
    m('نثار حسین', 'لاولد'),
  ]),
  f('کفایت النساء', 'سید احمد علی', 'مجاپوتہ'),
])

const ghulamMuhiuddin131 = m('غلام محی الدین', [
  f('سراج دولت'), // VERIFY: printed without سید and with no arrow below, so taken as a daughter (name may be a man's)
  m('محمد', [m('عبدالمبارک', [imamBakhsh131])]),
  f('نجم النساء'),
])

const abdulAlim131 = m('عبدالعلیم', [m('علی اصغر', [ghulamMuhiuddin131])])

// ───────────── مجیب -> محمد سعید خان -> ... ─────────────

// کرم علی's children bar
const karamAli131 = m('کرم علی', [
  m('امام علی', [m('شہور علی', 'لاولد')]),
  f('بھنکی', 'سید افضل علی', 'مجاپوتہ', 'مسماۃ'), // VERIFY: name بھنکی
  f('عمدۃ النساء', 'سید مہدی علی'),
])

const ghulamNabi131 = m('غلام نبی', [m('محبوب علی', [f('دختر')]), m('مقصود علی', [f('دختر')])])

// علی حسین's line (under قائم علی -> محمد حسین)
const aliHusain131 = m('علی حسین', [
  // مکرم حسین: four children on the top bar, five more on the wrapped bar below
  m('مکرم حسین', [
    f('رئیسہ خاتون'),
    m('عاقل حسین'),
    m('الیاس حسین'),
    f('کہکشاں بانو'),
    // wrapped row (right to left)
    m('شمیم حسین', [f('نادیہ بانو')]),
    f('نعیمہ خاتون', 'سید عطا حسین', 'قاضی زادہ'),
    f('شمیمہ خاتون', 'سید افسر علی', 'مجاپوتہ'), // VERIFY: husband's name (افسر / اطہر)
    f('عتیقہ خاتون', 'سید نیروز حیدر', 'شفاعت پوتہ'), // VERIFY: husband's name (نیروز / فیروز)
    m('خورشید حیدر', [m('شاداب حسین'), f('شبیہہ فاطمہ'), f('شازیہ بانو')]),
  ]), // VERIFY: the second bar's right end joins the first bar (wrap), so these nine are one sibling list
  // معظم حسین: his line joins the right end of a bar that wraps at the left edge, so the six children on
  // the top bar come first (right to left), then the six on the lower bar
  m('معظم حسین', [
    f('حسن بانو', 'سید سلطان علی', 'بگلہ'),
    f('نور بانو', 'سید ازہر علی', 'مجاپوتہ'), // VERIFY: husband's name (ازہر)
    f('ظہور بانو', 'سید اقبال حیدر', 'بگلہ'),
    f('سیرین بانو', 'سید تصور حیدر', 'حقانی'), // VERIFY: first name (سیرین / بیرین)
    f('عاشورہ بانو'),
    f('دولت بانو'),
    m('شمیم حسن', [m('محمد جاوید')]),
    f('اربعین بانو', 'سید ظہور مہدی', 'کٹرہ غلام علی'), // VERIFY: husband's name
    m('ذوالفقار حسین', [f('کنول'), f('شاندار فاطمہ'), f('مونا')]), // VERIFY: شاندار فاطمہ
    // شوکت حسین's bar runs from his line at the left to the right frame: seven children
    m('شوکت حسین', [
      f('دہیا فاطمہ'), // VERIFY: first name (دہیا / زہرا)
      f('نگین فاطمہ'),
      f('عروج فاطمہ'),
      f('نورین فاطمہ'),
      m('دانیال حسین'),
      m('وقار حسین'), // VERIFY: وقار
      m('ذیشان حسین'),
    ]), // VERIFY: the long bar under شوکت حسین might be a wrap of شبیہ الحسن's bar instead
    m('شبیہ الحسن', [
      m('تہذیب الحسن'),
      f('تنظیم بانو'), // VERIFY: تنظیم / منظیم
      m('عظیم حسین'),
      m('ولی حسین'),
      m('مہدی حسین'),
      m('محمد اصغر'),
    ]), // VERIFY: father's arrow sits in the left half of the bar
    f('شہناز بانو'),
  ]), // VERIFY: the lower bar's order after the wrap at the left (read left to right here)
])

const qaimAli131 = m('قائم علی', [
  m('ولی حسین', [m('قدرت علی', [bunyadAli132])]),
  m('محمد حسین', [
    f('منجیو', 'سید محمد نصیر', 'بگلہ'), // VERIFY: name (منجیو / منجبو)
    f('سعید النساء', 'سید بنیاد علی', 'مجاپوتہ'),
    f('ام سلمیٰ', 'سید رضا علی', 'حقانی'),
    f('ظریف النساء', 'سید منظور حسن', 'کٹرہ غلام علی'),
    aliHusain131,
  ]),
  m('معصوم علی', 'لاولد'),
  m('امید علی', 'لاولد'),
])

const afzalAli131 = m('افضل علی', [
  qaimAli131,
  m('انور علی', [m('بدھا', 'لاولد')]),
  f('سعید النساء', 'سید سبز حسن'), // VERIFY: husband's name (سبز / سیر)
])

// رمضان علی: three children on the top bar, نجیب النساء on the wrapped bar
const ramzanAli131 = m('رمضان علی', [
  f('صبیح النساء', 'سید نظیر علی'), // VERIFY: name (صبیح / مبیح) and husband (نظیر / نصیر)
  f('آفتاب دولت', 'سید محمد عوض'), // VERIFY: husband's name (عوض / غوث)
  m('منظور علی', 'لاولد'),
  f('نجیب النساء', 'سید گلزار علی'),
])

// فضل علی: نصیب النساء and حسین علی on the top bar, ذوالفقار علی on the wrapped bar
const fazlAli131 = m('فضل علی', [
  f('نصیب النساء', 'سید امداد علی'),
  m('حسین علی', [m('اصغر علی', [f('منور النساء', 'سید محمد باقر', 'بگلہ')])]),
  m('ذوالفقار علی', [f('رحیم النساء', 'سید سجاد علی', 'بگلہ')]),
])

const ghulamRasool131 = m('غلام رسول', [afzalAli131, ramzanAli131, fazlAli131])

// محمد بخش خان's line down to مبارک سعید
const mubarakSaeed131 = m('مبارک سعید', [
  m('مبارک سعید'),
  m('نقی سعید', [
    f('شاہانہ بانو'),
    f('شبانہ بانو'),
    m('اعظم سعید', [m('ناصر سعید')]),
    // wrapped row
    m('ذوالفقار سعید'),
    m('کاظم سعید'),
    m('ذکی سعید'),
  ]), // VERIFY: first letter of نقی (نقی / لقی)
  f('کنیز صغریٰ', 'سید محمد عاقل'),
  m('تقی سعید', [m('باقر سعید')]),
  m('علی سعید', [m('ولی سعید', [f('رشتو بیگم')])]), // VERIFY: رشتو بیگم
])

const muhammadBakhsh131 = m('محمد بخش خان', [
  m('محمد سعید خان', 'ثانی', [
    m('منور علی خان', [
      m('رشید علی', 'لاولد'),
      m('خیرات علی', [f('راؤ', 'سید مہربان علی', undefined, 'مسماۃ')]), // VERIFY: name راؤ
    ]),
    m('نور بخش خان', 'لاولد'),
    m('دلاور علی خان', [m('ناد علی', [m('علمدار علی', [mubarakSaeed131])])]),
  ]),
  f('فاطمہ', 'سید آل نبی'),
])

// عبدالصمد: seven children on one long bar
const abdulSamad131 = m('عبدالصمد', 'عرف مبارک سعید خان', [
  karamAli131, // VERIFY: کرم علی's arrow stands under غلام محی الدین's line but hangs on this bar
  m('فیض', 'لاولد'),
  m('غلام حسن', 'لاولد'),
  ghulamNabi131,
  ghulamRasool131,
  muhammadBakhsh131,
  m('غلام مصطفیٰ', 'لاولد'),
])

const mujeeb131 = m('مجیب', [
  m('محمد سعید خان', [
    m('خالصہ', 'لاولد'),
    f('دختر', 'سید عبدالہادی', 'شفاعت پوتہ'),
    abdulSamad131,
  ]),
])

// ───────────── root ─────────────
const abdulMajeedMajja131 = m('عبدالمجید', 'عرف مجا', [abdulAlim131, mujeeb131, abdurRahim133, muhammadSadiq135])

const khandan: BookKhandan = {
  serial: 27,
  mohalla: 'Majhpota',
  trees: [{ page: 131, father: 'مبارک', root: abdulMajeedMajja131 }],
}

export default khandan

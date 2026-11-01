// Kausar-ul-Ansab (1999), pages 117–130: محلہ شفاعت پوتہ
// Khandan 26 in the book's index: اولاد سید عبدالجلیل بن سید مبارک
// Photos: web/public/shafaat pota/aulad syed abdul jaleel bin syed mubarak/page1 ... page13 (page N = book page 116+N, except page13 = 130)
//
//   page 117  (photo 1)  سید عبدالجلیل بن سید مبارک (headed "صفحہ ۸۶"), the khandan root; the one tree
//   page 118  (photo 2)  سید عبدالہادی خان بن سید محمد شفاعت (headed "صفحہ ۱۱۷")
//   page 119  (photo 3)  سید ابوالحسن فرقتی بن سید نیاز علی (headed "صفحہ ۱۱۸"), with سید نادر حسن "صفحہ ہذا" nested in it
//   page 120  (photo 4)  سید حسین علی ثانی بن سید مہربان علی (headed "صفحہ ۱۱۸")
//   page 121  (photo 5)  سید ظفر حسن بن سید مظفر علی (headed "صفحہ ۱۲۰"); سید رحمت علی بن سید حسن علی (headed "صفحہ ۱۱۸")
//   page 122  (photo 6)  سید محمد التقی بن سید مرتضیٰ حسن and سید حیدر رضا بن سید مرتضیٰ حسن (both headed "صفحہ ۱۲۱");
//                        سید محمد اصالت خان بن سید عبدالہادی خان (headed "صفحہ ۱۱۸")
//   page 123  (photo 7)  سید عنایت حسین بن سید ہادی حسن, سید ناظر علی بن سید ظہور علی, سید مقبول حسین بن سید خادم علی (all headed "صفحہ ۱۲۲")
//   page 124  (photo 8)  سید نجم الحسن بن سید مقبول حسین (headed "صفحہ ۱۲۳"); سید اصغر علی بن سید محمد یقین (headed "صفحہ ۱۲۲")
//   page 125  (photo 9)  سید فرزند حسن بن سید ابوالحسن and سید محمد بن سید حسن (both headed "صفحہ ۱۲۴")
//   page 126  (photo 10) سید محمد امین بن سید محمد امانت (headed "صفحہ ۱۲۲"), with سید وجیہہ الدین "صفحہ ہذا" nested in it
//   page 127  (photo 11) سید منور حسین بن سید ابو علی (headed "صفحہ ۱۲۶"); سید محمد درایت بن سید محمد اصالت خان (headed "صفحہ ۱۲۲")
//   page 128  (photo 12) سید ابوجعفر بن سید احمد حسن, سید عباس علی بن سید رحم علی, سید عظمت اللہ بن سید محمد شفاعت (all headed "صفحہ ۱۲۷")
//   page 129  NOT PHOTOGRAPHED
//   page 130  (photo 13) سید علی بن سید ببر علی (headed "صفحہ ۱۲۸"), with سید محمد سعید "صفحہ ہذا" nested in it
//
// Each continuation is wired in place of the leaf that page N marks "صفحہ M": the chart's root const is defined first and
// wrapped in onPage(its own book page, ...), so every descendant carries the right page number. The consts below run
// from the deepest continuation page (130) to the root page (117).
//
// FOR A HUMAN TO CHECK
//  - Page 129 is missing. These leaves on page 128 point to it and stay childless stubs: آل احمد, اعجاز حسین, محمد, احمد.
//  - The task's page metadata did not match the photos for most pages (printed page numbers and headings differ from
//    the brief), so the transcribers followed what is printed on each photo. If a different photo was meant for
//    some book page, the mapping above is wrong, not the data.
//  - Headings beat drawings. Page 119 "بن نیاز علی", 120 "بن مہربان علی", 124 "بن مقبول حسین" etc. agree with the drawings.
//    Conflicts that were looked at and resolved:
//      * رحمت علی (page 121): an agent read the heading as "بن حسن علی", but the heading reads "بن سید حسین علی", which
//        matches the drawing under حسین علی عرف بیچا on page 118. Kept under حسین علی.
//      * علی (page 130): an agent read the heading as "بن میر علی"; it reads "بن ببر علی", which matches page 128.
//      * محمد (page 125, headed "بن حسن"): page 124 shows the stub under حسن as حمید / محمد (hard to tell). The chart
//        is wired with the heading's name محمد.
//      * ظفر حسن (page 121, headed "بن مظفر علی"): page 120 prints the stub as ظفر احسن. Wired as ظفر حسن, the heading.
//      * عباس علی (page 128) is headed "بن رحم علی" while page 127 draws him under رحیم علی. Wired to the drawing; check.
//  - عظمت اللہ (page 128): the chart is headed "عظمت اللہ بن محمد شفاعت", but its first drawn person is کریم اللہ
//    عرف میرکلو, so it is wired as عظمت اللہ -> کریم اللہ. Check that عظمت اللہ is not the same man as کریم اللہ.
//  - Page 117: the "عرف خالق داد" note sits on غلام محی الدین but may belong to کھڈو. The three daughters under
//    مقصود علی hang from a bar with no visible father line; he is assumed to be their father.
//  - Page 118: the number in the heading is hard to read (۱۱۷ read). The upper-right and left chains of the page were
//    not re-checked line by line. The staircase pair معراج الحسن / شجاع الحسن is written eldest first (VERIFY).
//  - Page 119: the 8 children of رضوان حیدر are the least certain call (افضال حیدر's 5 children sit on a separate bar in
//    the same box); the lower six names were given to رضوان because that bar hangs from the box's left edge.
//  - Page 122 / 123: some sub-chart placements were read by eye; a lower row of four under مہتاب حسن (123) may be
//    children of آفتاب حسن instead; مشیت حسن under نفیس الحسن may be the eldest.
//  - Page 124: the photo is only 989px wide, so many husbands and mohallas on the top chart are faint or left out.
//    The wrap order of نجم الحسن's children is by convention, not confirmed.
//  - Page 125: روشن آرا sits at the far right edge, beyond the arrow tool's box; added by eye as eldest child of محمد حسین.
//  - Page 126: the continuation page of منور حسین is printed "۱۲۷" but could be ۱۲۶. تاج الدین حیدر is read as six
//    children on one bar; امیر الدین's seven children as one wrapped list that repeats two names across the rows.
//  - Page 127: the long bottom bar under حبیب النقلین (five daughters) is filed under فرحان حیدر, but a father arrow from
//    حبیب النقلین also lands on it, so they may be his. The heading of محمد درایت may read ۱۳۲ rather than ۱۲۲.
//  - Page 128: دلشان حیدر's three boxed daughters plus the bar below are read as nine children of one father.
//    "بزبر علی" under ببر علی may be the same name as the father's.
//  - Page 130: the bars for سجاد حسین (7 children) and سردار حسین (9) were read from crops without tick labels.
//  - Wrapped sibling bars everywhere are written as ONE list, eldest first (top row first, each row right to left).
//    Names printed without سید are taken as female; the exceptions are marked VERIFY.

import { f, m, onPage, type BookKhandan } from './book'

// ═════════════════════════ book page 130 ═════════════════════════
// Khandan 26, محلہ شفاعت پوتہ. Photo page13 = book page 130 (printed "130" in the header; the heading cites "صفحہ 128").
//
// Chart 1: "صفحہ 128 سید علی بن سید میر علی" (main chart, continued from page 128)
// Chart 2: "صفحہ ہذا سید محمد سعید بن سید علی" (the sub-family of chart 1's youngest son محمد سعید, drawn lower on this same page)
//
// Chart 2 is defined first and nested into chart 1 at محمد سعید (the book marks him "صفحہ ہذا").
// Bar-by-bar notes: بشیر حسن has 8 children on one long bar; the bar's left end drops into سجاد حسین's line, whose
// 7 children hang on the lower long bar. انتظار حسین's 8 children share one bar that wraps (علی عباس ... کاظم عباس).
// سردار حسین's 9 children hang on one long rising bar at the bottom of the page.

// ───────── chart 2: محمد سعید بن علی ─────────

const mustafa130 = m('مصطفیٰ', [
  f('زہرا'),
  f('طاہرہ'),
  m('محمد زین'),
  f('سکینہ'),
  m('محمد مہدی'),
])

const azadar130 = m('عزادار حسین', [
  f('مہ جبین سیدہ'),
  m('ارتضیٰ'), // VERIFY: could read مرتضیٰ
  mustafa130,
  f('ثریا بانو', 'سید طاہر حسین', 'گذری'),
  f('سیدہ زہرا', 'سید مرتضیٰ', 'شفاعت پوتہ'),
  f('سیدہ بانو', 'سید صفدر زبود', 'قاضی زادہ'), // VERIFY: husband's name (صفدر / صغدر, زبود / زمود)
])

const karrar130 = m('کرار حسین', [
  f('سیدہ فاطمہ', 'سید آباد محمد زائر', 'قاضی زادہ'), // VERIFY: husband's name
  azadar130,
  f('صغریٰ فاطمہ', 'سید حیدر رضا', 'گذری'), // VERIFY: printed صغیر فاطمہ
  m('علی حیدر', [
    f('تسکین زہرا'),
    m('حیدر'), // VERIFY: printed "سید حیدر", may be a longer name
    m('مرتضیٰ', [m('ایلیا'), m('محمد علی')]),
  ]),
  m('سردار حسین', [
    f('عارفہ خاتون', 'سید ابن جعفر', 'کٹرہ غلام علی'), // VERIFY: husband's name
    m('باقر'),
    m('جعفر', [
      m('اقبال'),
      m('مہدی'),
      f('سکینہ خاتون'),
      m('ذوالفقار'), // VERIFY: printed ذفار, read as ذوالفقار
      m('شہباز'), // VERIFY: شہباز / شہراز
    ]),
    m('کاظم'),
    f('آصفہ خاتون', 'سید شان حسن', 'سدو'),
    f('طاہرہ خاتون', 'سید عیوض الحسن', 'مجاپوتہ'), // VERIFY: husband's name
    f('سامرہ خاتون', 'سید واصف رضا', 'منڈی چوب'),
    m('رضا', [m('عباس'), f('عرشی زہرا'), m('راحیل')]),
    f('خامسہ خاتون', 'سید سبط حیدر', 'سدو'), // VERIFY: name (خامسہ)
  ]),
])

const intizar130 = m('انتظار حسین', [
  m('علی عباس', [m('مہدی عباس')]),
  f('شاہانہ عباس', 'سید شاہد عباس', 'الٰہ آباد'),
  f('سلطانہ عباس'),
  f('شہزادی عباس'),
  m('تحسین عباس'), // VERIFY: printed like لحسین عباس
  m('جعفر عباس'),
  m('محمد رضا عباس'),
  m('کاظم عباس'),
])

const asrar130 = m('اسرار حسین', [
  f('ریحان فاطمہ', 'سید سراج الحسن', 'شفاعت پوتہ'),
  intizar130,
  f('سراج فاطمہ', 'سید ناظر حسین', 'چاہ غوری'),
])

const muhammadSaeed130 = m('محمد سعید', [
  asrar130,
  m('جبار حسین', 'لاولد'),
  f('معظمہ خاتون', 'سید ہادی حسن', 'قاضی زادہ'),
  m('زوار حسین', 'لاولد'),
  karrar130,
  m('انوار حسین', 'لاولد'),
])

// ───────── chart 1: علی بن میر علی ─────────

// سجاد حسین: 7 children on the long lower bar
const sajjad130 = m('سجاد حسین', [
  m('قمر رضا', [m('صفدر عباس'), f('مہوش فاطمہ')]),
  f('صالحہ شمیم', 'سید رضی عارف', 'چھیوڑہ'),
  m('امیر رضا'),
  f('باقیہ یاسمین'),
  m('اقبال رضا'),
  f('صبیحہ سجاد'), // VERIFY: printed without سید; name could be two words
  m('حیدر رضا'),
])

const bashir130 = m('بشیر حسن', [
  m('علی'),
  f('محمودہ خاتون', 'سید محمد متقی', 'دربار کلاں'), // VERIFY: husband's name (متقی / منتق)
  m('محمود حسن', [
    f('فرحت بانو'),
    f('نزہت بانو', 'سید محمد حسین جعفر', 'سرائے کہنہ حال مجاپوتہ'), // VERIFY: husband's name
    f('نگہت بانو'),
    f('عفت بانو', 'سید علی مختشم', 'سرائے کہنہ حال مجاپوتہ'), // VERIFY: husband's name (مختشم / مختتم)
    m('نخبت حسن', 'لاولد'), // VERIFY: first name hard to read
  ]),
  m('مسعود حسن', [
    f('آمنہ نصیر', 'سید حسین اکبر جعفری'),
    f('عابدہ نصیر', 'سید شکیل احمد', 'دانشمندان'),
  ]),
  m('ناظم عسکری', [
    f('ذکیہ خاتون', 'سید گوہر عباس', 'سدو'),
    f('رباب زہرا'),
    f('خورشید زہرا', 'سید نسیم حیدر', 'دانشمندان'),
    f('رقیہ بانو'),
    f('نرجس خاتون', 'کاظم نذر', 'سنبھلی'), // VERIFY: husband printed without سید; mohalla/place unclear
    f('فہمیدہ خاتون'),
    m('ظفر عباس'),
  ]),
  f('بنت فاطمہ', 'سید محمد ہاشم', 'دانشمندان'), // VERIFY: printed بنت ناظمہ (likely بنت فاطمہ)
  m('قائم مہدی', [
    m('سلمان مہدی'),
    m('اسلم مہدی', [m('عامر مہدی')]),
    m('حسن مہدی', [m('سمیع مہدی')]),
    m('رضوان مہدی'),
  ]),
  sajjad130,
])

const ali130 = onPage(130, m('علی', [
  m('غلام حسنین', [
    m('حبیب الحسنین', [f('انیس فاطمہ', 'سید تحسین حسن', 'قاضی زادہ')]), // VERIFY: husband's name (printed لحسین حسن)
    m('غلام سبطین', 'لاولد، مصنف شجرات سادات امروہہ'),
  ]),
  f('نعیم النساء', 'سید محمد تقی جعفری'), // VERIFY: printed لعیم النساء
  m('امیر حسن', [bashir130, m('نصیر حسن', 'لاولد')]),
  f('ذکیہ خاتون', 'سید امراء حسین', 'چھیوڑہ'), // VERIFY: husband's name
  muhammadSaeed130,
]))

// ═════════════════════════ book page 128 ═════════════════════════
// Khandan 26 (محلہ شفاعت پوتہ), photo page12, printed book page 128 (the task brief said 124 / heading
// "صفحہ ۱۲۳ سید کاظم الحسن"; that heading is NOT on this photo).
// Charts on this page:
//   1. صفحہ ۱۲۷ سید ابوجعفر بن سید احمد حسن  (top chart)
//   2. صفحہ ۱۲۷ سید عباس علی بن سید رحم علی  (middle chart)
//   3. صفحہ ۱۲۷ (printed like 117) سید عظمت اللہ بن سید محمد شفاعت  (bottom chart, via کریم اللہ عرف میرکلو)

// ───── Chart 3 stubs (continued on other pages) ─────
const aalAhmad129 = onPage(129, m('آل احمد'))
const ejazHusain129 = onPage(129, m('اعجاز حسین'))
const muhammad129 = onPage(129, m('محمد'))
const ahmad129 = onPage(129, m('احمد'))

// ───── Chart 1: سید ابوجعفر بن سید احمد حسن ─────
// Eight children on the top bar, eldest (right) first.
const abuJafar128 = onPage(128, m('ابوجعفر', [
  m('بادشاہ حسین', [
    m('نسیم جعفر', [m('معین مصطفیٰ'), f('سحر فاطمہ')]), // VERIFY: first name نسیم / سلیم
    f('فہمیدہ بانو'),
    f('حدیث خاتون'),
    m('ندیم جعفر'),
    f('انیس بانو'),
    f('نیاز بانو'),
    m('نعیم جعفر', [f('عنبر رباب'), f('فرحین رباب'), m('محمد حیدر'), f('مہرین رباب')]),
  ]),
  m('محمد جعفر', 'لاولد'),
  m('ناصر حسین', [m('ناظر حسین'), m('ذوالفقار حسین'), m('نادر حسین')]),
  f('جعفرہ خاتون', 'سید سبط انور', 'تنزولیہ'), // VERIFY: husband سبط انور and mohalla (reads تنزولیہ / منزولیہ)
  m('حامد حسین', [m('ساجد حسین'), m('صباح حسین'), m('محمد علی')]),
  f('کنیز فاطمہ', 'سید انور رضا', 'دربار کلاں'), // VERIFY: first name کنیز فاطمہ / کنیز فضہ
  m('وزیر حسین', [
    m('سفیر حسین'),
    f('حنا نسیم', 'سید قائم رضا', 'حال کلڑہ', 'چھوڑہ'), // VERIFY: name حنا نسیم, mohalla حال کلڑہ
    m('نذیر حسین'),
    f('گوہر بانو', 'سید تنویر حسین', 'سنبھلی'), // VERIFY: husband's name and mohalla
    f('تنویر بانو', 'سید نعیم جعفر', 'شفاعت پوتہ'),
    f('نسیم بانو'),
  ]),
  m('شہنشاہ حسین', [
    f('عنبرین فاطمہ', 'سید محمود رضا', 'دربار کلاں'),
    m('محمد اقبال', [f('شفیق زہرا'), m('جواہر اقبال'), f('صدف زہرا')]),
    f('شاہین فاطمہ'), // VERIFY: reads شاہین فاطمہ (edge of page, name partly clipped)
  ]),
]))

// ───── Chart 2: سید عباس علی بن سید رحم علی ─────
// آل رسول's six children on the top bar; دلشان حیدر's nine children are drawn as a box (three daughters)
// whose bottom edge is a second bar (six more) = one sibling list.
const abbasAli128 = onPage(128, m('عباس علی', [
  m('جیو', 'لاولد'),
  m('آل احمد', [
    f('مومنہ خاتون', 'سید کرار حسین', 'شفاعت پوتہ'),
    m('آل رسول', [
      m('غلام حیدر', [m('نعیم حیدر'), m('وسیم حیدر'), f('منی'), m('علی حیدر')]),
      f('حبیبہ خاتون', 'سید ابن حسن زیدی', 'سادات بارہہ'),
      f('لطیفہ خاتون', 'سید شبر حسن زیدی', 'سادات بارہہ'), // VERIFY: husband شبر حسن
      f('مبینہ خاتون', 'سید فرزند حسن', 'شفاعت پوتہ'),
      f('شمیمہ خاتون', 'سید لطیف حسن زیدی', 'سادات بارہہ'), // VERIFY: husband's first name
      m('دلشان حیدر', [
        f('عرشی بانو'),
        f('نگہت بانو'),
        f('زینت بانو'),
        f('کاملہ خاتون'),
        m('اقبال حیدر'),
        f('شہلا بانو'),
        m('سرفراز حیدر'),
        m('شباب حیدر'),
        f('شبانہ خاتون', 'سید محمد تقی خاں', 'دانشمندان'),
      ]), // VERIFY: the six lower children hang off the box's bottom bar, taken as دلشان حیدر's (wrapped list)
    ]),
  ]),
  m('فیاض حسین', 'لاولد'),
  m('اعجاز حسین', 'لاولد'),
]))

// ───── Chart 3: سید عظمت اللہ بن سید محمد شفاعت (via کریم اللہ عرف میرکلو) ─────
const azmatullah128 = onPage(128, m('کریم اللہ', 'عرف میرکلو', [
  m('محمد بخش', 'لاولد'),
  m('ببر علی', [
    ali130,
    f('نصیب النسا', 'سید خادم علی', 'گذری'),
    m('بزبر علی', [
      aalAhmad129,
      f('سعید دولت', 'سید منظر علی', 'کٹرہ غلام علی'), // VERIFY: name سعید دولت
      f('مومنہ خاتون', 'سید ابوالمحمد', 'کلڑہ'), // VERIFY: husband's name and mohalla
      f('تحسینہ خاتون', 'سید جعفر حسین جعفری', 'جعفری'),
      m('ابوالواحد', [
        muhammad129,
        f('کنیز فاطمہ', 'سید محمد دین', 'دانشمندان', 'زوجہ اولی'), // VERIFY: name کنیز فضہ / فاطمہ
        f('ناظمہ خاتون', 'سید گل حسن عابدی', 'لوگنیاں'), // VERIFY: mohalla reading
        f('حسینی خاتون', 'سید معجز حسین', 'مجاپوتہ'), // VERIFY: husband and mohalla
        m('جمیل احمد', 'لاولد'),
        f('لقیہ خاتون', 'سید سلمان حسن', 'دربار کلاں', 'زوجہ ثانی'),
        f('مشرفہ خاتون', 'سید کرار حسین', 'دانشمندان'),
        ahmad129,
      ]),
    ]), // VERIFY: بزبر علی (same name as father ببر علی?) and whether ببر علی's list has 4 children
    m('اسد علی', [
      m('نیاز حسین', 'لاولد'),
      f('خدیجہ خاتون', 'سید اولاد حسن', undefined, 'زوجہ اولی'),
      ejazHusain129,
    ]),
  ]),
  m('امام بخش', 'لاولد'),
]))

// ═════════════════════════ book page 127 ═════════════════════════
// Khandan 26, محلہ شفاعت پوتہ. Photo page11.straight.jpg, book page 127 (printed on the photo).
// NOTE: the brief expected book page 123 with charts "عنایت حسین بن ہادی حسن" and "ظاہر علی بن ظہور علی";
// this photo actually carries the two charts below, so those two names do NOT appear here.
//
// Chart 1: صفحہ ۱۲۶ — سید منور حسین بن سید ابو علی   (const munawarHusain127)
// Chart 2: صفحہ ۱۲۲ (VERIFY: may be ۱۳۲) — سید محمد درایت بن سید محمد اصالت خان   (const muhammadDirayat127)
//
// Wrapped sibling bars: سبط حیدر (11 children, top box row then bottom row), حسین رضا (6, box top then bottom),
// شرافت علی (5), محمد (5), فرحان حیدر (3 + 5). Rows are listed top row first, each right to left.

const munawarHusain127 = onPage(127, m('منور حسین', [
  f('دختر', 'سید شیدا علی', 'چھیوڑہ'), // VERIFY: husband's name (شیدا علی / سید علی)
  m('سبط حسن', [
    m('حمید حسین', 'لاولد'),
    f('قدسیہ خاتون', 'سید محمد', 'شفاعت پوتہ'),
    m('قاسم حسین', [
      m('سبط حیدر', [
        // top row (inside the box)
        m('کامران حیدر'), // VERIFY: کامران / تامران
        m('افضال حیدر'),
        m('اخشام حیدر'), // VERIFY: اخشام
        m('شبیہ حیدر'),
        // bottom row (same bar, wrapped)
        f('یاسمین زہرا'),
        m('اقبال حیدر', [m('مراد حیدر'), m('مہک حیدر')]),
        f('نرگس زہرا'),
        f('نجمہ زہرا', 'اقبال احمد'), // husband printed without سید
        f('طلعت زہرا', 'محمد احمد'), // husband printed without سید
        f('نسرین زہرا'),
        f('انجم زہرا', 'باقر رضا'), // husband printed without سید
      ]),
      f('مستیبہ خاتون', 'سید معافی حسین', 'مجاپوتہ'), // VERIFY: first name (مستیبہ) and husband (معافی / معاقن)
      f('مسرورہ خاتون', 'سید نقی الحسن خاں', 'دربار کلاں'), // VERIFY: نقی / لقی
      m('سبط احمد', [
        m('ظفریاب حیدر'),
        f('جمال فاطمہ'),
        f('شہناز فاطمہ'),
        m('کمال حیدر'),
      ]),
    ]),
    f('طیبہ خاتون', 'سید حسین', 'بگلہ'),
    f('مشکورہ خاتون', 'سید امیر باقر', 'نگردہ'), // VERIFY: mohalla (printed لگڑہ / نگردہ)
  ]),
  f('کنیز سلمیٰ', 'سید محمد صادق', 'پچدرہ'), // VERIFY: mohalla spelled بچیدرہ
]))

const muhammadDirayat127 = onPage(127, m('محمد درایت', [
  m('حسین علی', [
    m('کریم علی', [
      m('علی رضا', [
        m('حسین رضا', [
          // top row (inside the box)
          m('رضوان رضا', 'لاولد'),
          m('موسیٰ رضا', 'لاولد'),
          m('محمد رضا', 'لاولد'),
          // bottom row (box edge, same bar)
          f('زائرہ خاتون', 'سید مستقیم حسن', 'دربار کلاں'),
          m('سرور حسین', [
            f('تاج فاطمہ', 'سید سمیع حسن', 'قاضی زادہ'), // VERIFY: husband's name
            m('گوہر حسین', [
              m('فرحان حیدر', [
                m('ثامر مجتبیٰ'), // VERIFY: ثامر / نامر
                m('حبیب المصطفین', [
                  f('ثمرہ بانو'), // VERIFY: ثمرہ / تمنا
                  f('سائرہ مصطفین'), // VERIFY: may be two names (سائرہ, مصطفین)
                  f('ثنا مریم'),
                ]),
                f('تطہیر زہرا', 'سید افضال حیدر', 'گذری'),
                // wrapped to the bottom bar (left of the page). VERIFY: a father arrow from حبیب النقلین also lands on this
                // bar, so these five daughters could instead be his
                f('ملکہ سلیم', 'سید قاسم علی', 'اعوانپور حال کالی پگڑی'), // VERIFY: mohalla
                f('راحیل عالیہ', 'سید ندیم حیدر', 'قاضی زادہ'), // VERIFY: may be two names
                f('وقار زہرا', 'سید ظہور مہدی', 'قاضی گلی'),
                f('تنویر زہرا', 'سید شباب الحسن', 'چھیوڑہ'),
                f('کاملہ خاتون', 'سید افسر مہدی', 'قاضی زادہ'), // VERIFY: husband's name
              ]),
              f('صدرہ حسین'), // VERIFY: printed without سید; gender and spelling unclear
            ]),
            f('عزادار فاطمہ'), // VERIFY: one name or two
          ]),
          f('مطاہرہ خاتون', 'سید اظہر حسن', 'گذری'),
        ]),
      ]),
    ]),
    m('رحیم علی', [
      m('ابراہیم علی', [m('ریاض حسین', 'لاولد')]),
      m('احمد حسن', [
        abuJafar128, // VERIFY: printed الوجعفر
        f('کنیز فاطمہ', 'سید علی نذر', 'سنبھلی'), // VERIFY: husband's name and mohalla
        m('محمد', [
          // top row
          m('حبیب النقلین'), // VERIFY: a father arrow from him lands on the long bottom bar (see فرحان حیدر)
          f('سیدہ خاتون', 'سید عنایت الحق', 'نوگنیاں'),
          f('حمیدہ خاتون', 'سید فخر الحسن', 'مجاپوتہ'), // VERIFY: husband's name
          // bottom row (wrapped)
          f('عالمہ خاتون', 'سید عزادار حسین', 'دربار کلاں'),
          f('علوی خاتون', 'سید حسین محمد', 'مجاپوتہ'),
        ]),
      ]),
      abbasAli128,
    ]),
  ]),
  m('عمار علی', 'لاولد'),
  m('خیرات علی', [m('نذر علی', 'لاولد')]),
  m('تولا', 'لاولد'),
  m('نوازش علی', [
    m('ارشاد علی', [
      m('فرحت علی', [
        // VERIFY: first name (فرحت / نزحت)
        m('شرافت علی', [
          f('ذکیہ خاتون', 'سید غلام اکبر', 'دانشمندان'),
          f('جعفرہ خاتون', 'سید امیر المعظم', 'شفاعت پوتہ'), // VERIFY: husband's name
          m('نواب علی', [f('نایاب بانو')]),
          f('امینہ خاتون', 'سید سیادت حسین', 'مجاپوتہ'),
          f('وہبیہ خاتون', 'قاضی سید علی حسن', 'قاضی زادہ'), // VERIFY: first name (وہبیہ / ذہینہ)
        ]),
        f('سیارہ خاتون', 'سید ابو الواحد', 'شفاعت پوتہ'), // VERIFY: first name and husband's name
        m('راحت علی'),
      ]),
      f('فرحت النسا', 'سید رحیم بخش', 'صابو نگراں'),
      m('مہدی علی', [
        m('صفدر علی', 'لاولد'),
        f('منو', 'سید حسن', 'نگردہ'), // VERIFY: mohalla (printed لکڑہ / نگردہ)
        m('مظہر علی', [
          m('زین العابدین', [
            m('باقر مہدی'),
            m('کاظم مہدی'),
            m('محمد مہدی'),
            m('حسن مہدی'),
            f('فردوس فاطمہ', 'سید حسین رضا', 'پچدرہ'), // VERIFY: mohalla spelled بچیدرہ
            m('جعفر مہدی', [f('نسرین زہرا')]),
          ]),
          f('کنیز بانو', 'سید غلام سبطین', 'شفاعت پوتہ'),
        ]),
        f('بلو', 'سید راحت علی', 'شفاعت پوتہ'),
        m('تنویر علی', 'لاولد'),
      ]),
    ]),
    m('ناد علی', [
      m('باد علی', [
        f('دختر', 'سید مرتضیٰ حسن', 'سنبھلی'), // VERIFY: husband's name and mohalla
        m('تفضل حسین', 'لاولد'),
        f('دختر', 'سید فیاض حسین', 'سنبھلی'), // VERIFY: mohalla
      ]),
    ]),
  ]),
]))

// ═════════════════════════ book page 126 ═════════════════════════
// Khandan 26, محلہ شفاعت پوتہ, photo page10 (printed page number 126 on the photo; the tree heading says "صفحہ ۱۲۲").
//
// Chart 1: "صفحہ ۱۲۲ سید محمد امین بن سید محمد امانت" (root const: muhammadAmin126)
// Chart 2: "صفحہ ہذا سید وجیہہ الدین بن سید حسین الدین" (const: wajihuddin122). It is drawn lower on the same page and is
//          nested here under حسین الدین (son of رضی الدین) in chart 1, so there is no separate root for it.
//
// Notes on layout:
//  - امیر الدین's seven children sit on two wrapped bars (top: 3, bottom: 4) joined by a connector, taken as ONE sibling list.
//    Names repeat between the rows (مدثرہ خاتون, محمد شہباز), see VERIFY.
//  - تاج الدین حیدر's six children are on one bar that runs left from his arrow.

// ───────────── chart 2: وجیہہ الدین بن حسین الدین ─────────────

const wajihuddin122 = m('وجیہہ الدین', [
  f('حسین بانو', 'سید حامد حسن', 'قاضی زادہ'),
  m('احمد الدین', [
    m('ظہیر الدین', 'لاولد'),
    f('متینہ خاتون', 'سید سخی حسین', 'جڑودی حال مچھرٹہ'), // VERIFY: mohalla (جڑودی حال مچھرٹہ)
    m('ضمیر الدین', [
      // امیر الدین: seven children on two wrapped bars, one sibling list
      m('امیر الدین', [
        f('مدثرہ خاتون'),
        m('محمد دلنواز'),
        m('محمد شہباز'), // VERIFY: a second محمد شہباز and a second مدثرہ خاتون appear on the lower bar (wrap, or a separate generation?)
        m('محمد شاداب', [f('بہار زہرا'), m('تاج الدین حیدر'), f('شمس زہرا')]),
        m('محمد شاہنواز'),
        f('مدثرہ خاتون', 'سید ناظم حسین', 'چاہ غوری'), // VERIFY: husband's name (ناظم / ناظر)
        m('محمد شہباز', [
          f('امیر زہرا'),
          f('آل زہرا'),
          f('ملثوم فاطمہ'),
          f('عصمت زہرا'),
          m('سراج الدین حیدر'),
        ]),
      ]),
      m('رئیس الدین', [
        m('تنویر حسین'),
        f('رضیہ خاتون'),
        f('رئیس فاطمہ'),
        f('اعجاز فاطمہ'),
        m('سلیم حسین'),
      ]),
      f('منصورہ خاتون', 'سید باقر حسین', 'شاہ علی سرائے'), // VERIFY: husband's name and mohalla
      m('قیم الدین', [
        m('نعیم حسین'),
        m('انور حسین'),
        f('سلمیٰ زہرا'),
        m('ندیم حسین'),
        m('کلیم حسین'),
      ]), // VERIFY: name reads قیم الدین (قسیم / قیم)
      f('منورہ خاتون', 'سید مہدی', 'گذری'),
      m('حسین الدین', [
        m('مطاہر حسین'),
        m('ظاہر حسین', 'لاولد'),
        m('طاہر حسین', [m('ماہر حسین')]),
      ]),
    ]),
    f('آمنہ خاتون', 'سید محمد اصغر', 'قاضی گلی'),
    m('نفیس الدین', 'لاولد'),
    f('عاطرہ خاتون', 'سید قمر الدین', 'دانشمندان'), // VERIFY: name (عاطرہ / عاطفہ)
  ]),
  f('طہیرہ خاتون', 'سید زین العابدین', 'پچدرہ'), // VERIFY: name (طہیرہ / طاہرہ); mohalla spelled بچیدرہ
  m('وحید الدین', 'لاولد'),
])

// ───────────── chart 1: محمد امین بن محمد امانت (صفحہ ۱۲۲) ─────────────

// منور حسین continues on another page

const sirajuddin122 = m('سراج الدین حیدر', [
  m('وہاج الدین حیدر', [
    m('ذوالفقار حیدر', 'لاولد'),
    m('وصی حیدر', [
      m('شبیہ حیدر', 'لاولد'),
      f('رضیہ خاتون', 'سید رئیس حسن', 'چاہ غوری'),
      m('ضمیر حیدر', [
        f('ماہ زہرا', 'سید حیدر مہدی', 'لکھڑہ'), // VERIFY: mohalla (لکھڑہ / لکردہ)
        m('علی عباس'),
        f('شان زہرا'),
      ]),
      f('جمیلہ خاتون', 'سید محمد افسر', 'قاضی گلی حال شفاعت پوتہ'),
      f('نازک بانو', 'سید اعجاز حسن', 'دانشمندان'),
      f('امیر بانو', 'سید علی رضا خاں', 'دانشمندان'),
    ]),
    f('ام لیلیٰ', 'سید فرزند حسن', 'شفاعت پوتہ'),
    m('ضرغام حیدر', 'لاولد'),
  ]),
  f('آمنہ خاتون', 'سید ریاض حسن', 'دانشمندان'),
  m('معراج الدین حیدر', 'لاولد'),
  m('تاج الدین حیدر', [
    f('منجھو', undefined, undefined, 'سماۃ'), // VERIFY: name reads "منجھو" with "سماۃ" printed under it
    f('رقیہ خاتون', 'سید سبط احمد', 'چاہ غوری'),
    m('عباس حیدر', 'لاولد'),
    m('افتخار حیدر', [
      m('فرزند حیدر', [
        m('شمیم عباس', [
          m('افتخار حیدر'),
          m('ذوالفقار حیدر'),
          m('انتخاب حیدر'),
          m('وقار حیدر'), // VERIFY: وقار (printed وثمار)
          m('عباس حیدر'),
          m('تاج حیدر'),
        ]),
        m('ذاکر عباس'),
        m('ناصر عباس', [
          m('حضور حیدر', [f('نسیم فاطمہ'), m('غیور حیدر')]),
          f('تمثیل فاطمہ'),
        ]),
        f('نسرین فاطمہ', 'سید غلام حیدر', 'آنگرہ'), // VERIFY: mohalla (آنگرہ / آکھرہ)
        m('نقی عباس'), // VERIFY: نقی / ثقی
      ]),
    ]),
    m('سردار حیدر', [f('معراج فاطمہ'), f('سردار فاطمہ', 'سید حسن رضا', 'گذری')]),
    f('کاظمہ خاتون', 'سید عیاش حسن', 'چھیوڑہ'), // VERIFY: husband's name (عیاش / عیاض)
  ]),
  f('دختر', 'سید نایاب حسین'), // VERIFY: the book gives no name, only "دختر"
])

const najibuddin122 = m('نجیب الدین', 'عرف منور', [ // VERIFY: small word beside the name (منور / مندر)
  m('غازی الدین حیدر', [f('کنیز فاطمہ', 'سید معراج الدین', 'شفاعت پوتہ')]),
  f('خاتون دولت', 'سید ناصر علی', 'چھیوڑہ'), // VERIFY: husband's name (ناصر / نام)
  sirajuddin122,
])

const raziuddin122 = m('رضی الدین', [
  m('امام الدین', [m('جعفر حسین', 'لاولد')]),
  m('شمس الدین', 'لاولد'),
  m('حسین الدین', [m('سعید الدین', 'لاولد'), wajihuddin122]), // VERIFY: سعید الدین printed معید / سعید
  m('علی الدین', 'لاولد'),
])

const muhammadAmin126 = onPage(126, m('محمد امین', [
  m('فصیح الدین', [najibuddin122]),
  m('کریم الدین', [m('انور علی', [munawarHusain127])]),
  raziuddin122,
]))

// ═════════════════════════ book page 125 ═════════════════════════
// Khandan 26, محلہ شفاعت پوتہ, book page 125 (photo page9)
// Chart 1: "صفحہ 124 سید فرزند حسن بن سید ابوالحسن" -> farzandHasan125
// Chart 2: "صفحہ 124 سید محمد بن سید حسن" -> muhammad125
// Note: the printed page number is 125 (the task text said 121).

const aliRaza125 = m('علی رضا', [f('نمرہ')]) // VERIFY: نمرہ / نزہ

const muhammadShafaat125 = m('محمد شفاعت', [
  m('میثم حسین'),
  m('انسب حسین'), // VERIFY: انسب / انسب
])

const ahmadHasan125 = m('احمد حسن', 'عرف منے آغا', [
  muhammadShafaat125,
  f('نگار بانو'),
  f('ملکہ بیگم', 'سید عرفان الحسین', 'سادات بارہہ'), // VERIFY: husband's name (عرفان الحسن / عرفان الحسین)
  f('رانی بیگم'),
  m('محمد عبادت'),
  m('محمد علی'),
  aliRaza125,
])

const farzandHasan125 = onPage(125, m('فرزند حسن', [
  m('محمد حسین', [
    f('روشن آرا'),
    m('علی حسن'),
    f('کنول زہرا'),
    f('نادیہ بانو'),
    m('فہیم حسن'),
    m('سلیم حسن'),
  ]),
  f('عالیہ خاتون', 'سید ولی امام زیدی', 'شفاعت پوتہ'),
  m('قیصر حسن'), // VERIFY: first letter (قیصر / فیصر)
  f('صالحہ خاتون', 'سید خوشنود احمد', 'قاضی زادہ'),
  m('محمود حسین', [m('مہدی حسین'), m('مسعود حسین')]),
  ahmadHasan125,
]))

// chart 2
const tahirAbbas125 = m('طاہر عباس', [
  m('کمیل عباس'),
  f('کنیز طاہر'),
  f('فضہ بتول'),
])

const ghulamSaqalain125 = m('غلام الثقلین', [
  tahirAbbas125,
  m('تنویر عباس', [m('فصیح عباس')]),
  f('شائستہ ناز', 'سید نوید عباس', 'دربار کلاں'),
  m('توصیف عباس'),
  m('توفیر عباس'), // VERIFY: توفیر / توقیر
  f('شگفتہ ناز', 'سید فرح حیدر', 'دربار کلاں'),
  m('سفیر عباس'),
  m('تصویر عباس'),
])

const aliBinMuhammad125 = m('علی بن محمد', 'عرف پیارے', [
  m('فضل حسین', [
    m('محمد سبطین', [m('قیصر عباس'), f('صدف'), f('سحر')]),
    m('محمد کاظمین', [f('آرزو'), f('افشیں'), f('بشریٰ')]),
    m('محمد زہیر قرین', [m('قمر عباس')]), // VERIFY: زہیر قرین may be one name
    m('محمد نورعین', [
      f('فوزیہ', 'سید طاہر عباس', 'شفاعت پوتہ'),
      m('ظہیر عباس'),
      f('شازیہ'),
      f('صائمہ'),
      f('نگار زہرا'),
      f('نورین'),
    ]),
  ]),
  f('نور جہاں', 'سید اظہر حسین زیدی', 'سادات بارہہ'),
  f('سبیکہ بانو', 'سید نظر حسین جعفری', 'الہ آباد'),
  f('پروین اختر', 'سید قاسم علی', 'الہ آباد'),
  ghulamSaqalain125,
])

const muhammad125 = onPage(125, m('محمد', [
  m('سبط محمد', 'عرف اچھے', [ // VERIFY: nickname (اچھے / ایچے)
    m('سبط النور', [m('ظہیر الحسن')]), // VERIFY: سبط النور
    m('سبط ہاشم', [m('عامر حسن')]),
    f('عطیہ عباس', 'سید ظل سبطین', 'دانشمندان'), // VERIFY: printed without سید; read as female
    m('کاظم رضا', [m('عاصم رضا')]),
    m('ناظم رضا', [f('ندا فاطمہ')]),
  ]),
  f('ریحسہ خاتون', 'سید معنیب حسن', 'دربار کلاں', 'زوجہ ثانی'), // VERIFY: her name and the husband's name
  f('امیر بانو', 'سید رحیم محمد', 'مجاپوتہ'), // VERIFY: husband's name
  aliBinMuhammad125,
]))

// ═════════════════════════ book page 124 ═════════════════════════
// Kausar-ul-Ansab (1999), printed page 124 (photo page8): محلہ شفاعت پوتہ, khandan 26
// NOTE: the task heading "صفحہ ۱۱۸ سید حسین علی ثانی بن سید مہربان علی" is NOT on this photo.
// Charts on this page:
//  1. Top chart: "صفحہ ۱۲۳ سید نجم الحسن بن سید مقبول حسین"  -> najmulHasan124
//  2. Bottom chart: "صفحہ ۱۲۲ سید اصغر علی بن سید محمد یقین"  -> asgharAli124
// Where a box's bottom edge is the next bar, or a sibling bar wraps around, the children are listed bar by bar,
// top bar first (right to left inside each bar).

// ───────────────────── Chart 1: سید نجم الحسن بن سید مقبول حسین ─────────────────────

// معطر حسین: six children on one bar
const moatarHusain124 = m('معطر حسین', [
  f('عطیہ زہرا'),
  f('جبین زہرا'),
  m('فیضان حیدر'),
  m('عمران حیدر'),
  m('کامران حیدر'),
  m('سلمان حیدر'),
])

// زبیر حسین: five children on one bar
const zubairHusain124 = m('زبیر حسین', [
  m('منیر حسین'), // VERIFY: منیر / مبین
  m('مروج حسین'), // VERIFY: مروج / موج
  m('نوشین حسین'), // VERIFY: نوشین / لوشین
  m('فریاد حسین'), // VERIFY: فریاد / فرہاد
  m('نوین حسین'), // VERIFY: نوین / نوبین
]) // VERIFY: father's name (زبیر / زہیر / زمر) is blurred in the photo

// گل حسن: seven children in a drawn box (the box's bottom bar is کوثر حسین's children)
const gulHasan124 = m('گل حسن', [
  m('وسیم کاظم'), // VERIFY: first name (وسیم / دبیر)
  f('سائرہ خاتون', 'سید ماق حسین', 'دربار کلاں'), // VERIFY: husband's name unclear
  f('فیروزہ خاتون', 'سید محمد سبطین', 'لکھنؤ'),
  f('شمع خاتون', 'سید باقر حسین', 'لکھنؤ'), // VERIFY: husband's name
  f('حورا خاتون', 'سید اختر حسین', 'حیدرآباد دکن'), // VERIFY: mohalla
  f('شائلہ خاتون', 'سید شجاع حیدر', 'جونپور'),
  m('طارق حسین'),
])

// قیصر حسین: four children on one bar
const qaisarHusain124 = m('قیصر حسین', [
  f('صبوحی'),
  m('فیصل حسین'),
  m('شیراز حسین'),
  m('فراز حسین'),
]) // VERIFY: father's name (قیصر / تیمور)

// کوثر حسین: seven children, the bottom bar of the box that holds گل حسن's children
const kausarHusain124 = m('کوثر حسین', [
  f('زرین فاطمہ', 'سید نیر امام', 'مظفر نگر'), // VERIFY: husband's name
  f('نسرین بانو', 'سید افسر علی زیدی', 'قاضی زادہ'),
  f('ثروت بانو', 'سید سعید'), // VERIFY: husband "سعید" with or without سید
  f('یاسمین گوہر', 'سید افضال مہدی', 'لکڑہ'), // VERIFY: husband's name
  m('عالم حسین'),
  qaisarHusain124,
  m('گوہر حسین'),
])

// شباب الحسن: three children
const shababulHasan124 = m('شباب الحسن', [
  f('ام فاطمہ'),
  m('سکندر رضا'), // VERIFY: reads like صندر / سکندر رضا
  f('حسین فاطمہ'),
])

// حسین محمد: six children on one wide bar
const husainMuhammad124 = m('حسین محمد', [
  m('حسین محمد'), // VERIFY: same name as his father; one of the two may be محمد حسین
  m('شجاع الرضا'),
  f('شان زہرا'),
  m('مسعود اختر'),
  f('گلشن زہرا', 'سید نصرت علی', 'اعوان پور'), // VERIFY: husband and mohalla (a "حال کالی بگڑی" line is printed too)
  shababulHasan124,
])

// نسیم حسن: nine children on four wrapped bars (each bar's end runs down into the next); one list, top bar first
const naseemHasan124 = m('نسیم حسن', [
  f('طلعت بانو'),
  f('شاہین انجم'),
  m('نسیم حسن'), // VERIFY: same name as his father
  m('وسیم حسن'),
  m('نوید حسن'),
  m('جاوید حسن'),
  f('نسیم بانو', 'سید حسن حیدر', 'لکڑہ'),
  f('یاسمین بانو', 'سید الفتین کاظمی', 'چکوال'), // VERIFY: husband's name
  f('مہورا نجم'), // VERIFY: مہورا / مہر
]) // VERIFY: whether the four wrapped bars are one sibling list or separate generations

// سید نجم الحسن بن سید مقبول حسین. The book prints "صفحہ ۱۲۳" over him. Children are on a long bar that wraps at both ends:
// top bar first (9 arrows), then the right wrap bar (نسیم حسن, حسین محمد), then the left wrap bar (گل حسن, کوثر حسین).
const najmulHasan124 = onPage(124, m('نجم الحسن', [
  f('شجاعت فاطمہ', 'سید نہال حسن', 'سدو'), // VERIFY: husband and mohalla are very faint
  f('ہدایت فاطمہ', 'سید شوق محمد', 'دالشمندان'), // VERIFY: husband's name and mohalla are faint
  zubairHusain124,
  f('تسلیمہ خاتون', 'سید زین العابدین'), // VERIFY: husband's name; mohalla line illegible
  m('قمر الحسن', 'لاولد'), // VERIFY: first word (قمر / تمر)
  f('ثمینہ خاتون', undefined, 'چکلی'), // VERIFY: husband's name unreadable; mohalla چکلی
  moatarHusain124,
  f('وسیمہ خاتون'), // VERIFY: husband and mohalla lines unreadable
  f('شفاعت فاطمہ', undefined, 'لکڑہ'), // VERIFY: husband's line unreadable; mohalla
  naseemHasan124,
  husainMuhammad124,
  gulHasan124,
  kausarHusain124,
])) // VERIFY: order of the wrapped right/left bars relative to the top bar

// ───────────────────── Chart 2: سید اصغر علی بن سید محمد یقین ─────────────────────

// ابوالحسن: five children (two on the first bar, three wrapped below)
const abrarHusain124 = m('ابرار حسین', [f('نجمہ خاتون')]) // VERIFY: ابرار / ابراز
const abulHasan124 = m('ابوالحسن', [
  m('مبارک', 'لاولد'),
  m('سردار حسین', 'لاولد'),
  abrarHusain124,
  f('کاظمی خاتون', 'سید ارشاد حسین'),
  farzandHasan125,
])

// حسن: two children
const hasan124 = m('حسن', [muhammad125, f('طاہرہ خاتون', 'سید مختار احمد', 'بگلہ')])

// محمد احمد: one daughter
const muhammadAhmad124 = m('محمد احمد', [f('حامدہ خاتون', 'سید احسان محمد', 'گذری')])

// آل احمد: three children
const aleAhmad124 = m('آل احمد', [
  f('عقیلہ خاتون', 'سید علی اظہر', 'بگلہ'),
  f('خدیجہ خاتون', 'سید ناصر حسین عابدی', 'نوگانیاں'), // VERIFY: "حال بخشی" is printed after the mohalla
  muhammadAhmad124,
])

// احمد: two daughters
const ahmad124 = m('احمد', [
  f('منگلو حسن', 'سید فرزند علی', 'شفاعت پوتہ'), // VERIFY: first name (منگلو حسن / منگلو جان)
  f('کنیز فاطمہ', 'سید ضامن حسین', 'مجاپوتہ'),
])

// انتظام علی: four children
const intizamAli124 = m('انتظام علی', [abulHasan124, hasan124, aleAhmad124, ahmad124])

// جوہر علی: two children
const jauharAli124 = m('جوہر علی', [m('قمر علی'), m('نعمان علی')])

// گوہر علی: nine children, a top bar of five and a wrapped bar of four below it
const gauharAli124 = m('گوہر علی', [
  f('مہ جبین'),
  f('مہ لقا پروین', 'سید حسن عالم رضوی', 'لکھنؤ'), // VERIFY: husband's name
  f('شبانہ پروین'),
  f('انجم پروین', 'سید علی ظاہر', 'لکھنؤ'), // VERIFY: a pen cross is drawn over her arrow
  jauharAli124,
  m('منظر علی'),
  m('ظفر حسن'),
  m('شمیم رضا'),
  m('عمران علی'),
]) // VERIFY: the wrapped bar belongs to the same list as the top bar

// آفتاب حسین: two children
const aftabHusain124 = m('آفتاب حسین', [
  gauharAli124,
  f('سروری خاتون', 'سید محمد رضا', 'بگلہ حال شفاعت پوتہ'),
])

// خورشید جمال: three children
const khurshidJamal124 = m('خورشید جمال', [m('فرحان حسن'), f('زہرا'), m('فیضان حسن')])

// امان حسن: five children
const amanHasan124 = m('امان حسن', [
  khurshidJamal124,
  f('نازلی امان', 'سید حسین محمد', 'شفاعت پوتہ'),
  m('فرمان حسن'),
  f('عرشی امان', 'سید عمر رضا', 'دالشمندان'),
  f('عرفی امان'),
])

// برہان حسن: four children (two in the box, two on its bottom bar)
const burhanHasan124 = m('برہان حسن', [
  f('نعمہ بانو'),
  f('شیبا زہرا'),
  m('عرفان حسن'),
  f('لکی بانو'), // VERIFY: لکی / لقی
])

// سلطان حسن: five children (two on the first bar, three wrapped below)
const sultanHasan124 = m('سلطان حسن', [
  f('سلطان فاطمہ', 'سید زین حسن', 'دالشمندان'),
  f('شاندار فاطمہ', 'سید محمد احمد', 'سدو'),
  burhanHasan124,
  f('حسن فاطمہ', 'سید سرور مسعود', 'قاضی گلی'), // VERIFY: husband's name
  amanHasan124,
])

// ارمان حسن: three children
const armanHasan124 = m('ارمان حسن', [
  f('ریحان فاطمہ'),
  m('سلمان حسن'),
  m('عرفان حسن'),
])

// ریحان حسن: three children
const raihanHasan124 = m('ریحان حسن', [
  f('اربعین فاطمہ', 'سید محمد انوار', 'سدو'),
  armanHasan124,
  f('تاجدار فاطمہ', 'سید امانت علی', 'مجاپوتہ'),
])

// خورشید حسن: five children (three on the box's top bar, two wrapped below)
const khurshidHasan124 = m('خورشید حسن', [
  raihanHasan124,
  f('سکینہ خاتون', 'سید عماد الحسن', 'شفاعت پوتہ'),
  m('مہدی حسن', 'لاولد'),
  f('انیسہ خاتون', 'سید انوار حسین', 'حقانی'),
  sultanHasan124,
])

// مظہر علی: four children
const mazharAli124 = m('مظہر علی', [
  aftabHusain124,
  f('دختر', 'سید نجف علی', 'حقانی'), // VERIFY: she is named only "دختر" (daughter) in the book
  m('ظہور حسن', 'لاولد'),
  khurshidHasan124,
])

// سید اصغر علی بن سید محمد یقین
const asgharAli124 = onPage(124, m('اصغر علی', [intizamAli124, mazharAli124]))

// ═════════════════════════ book page 123 ═════════════════════════
// Khandan 26 (محلہ شفاعت پوتہ), book page 123 (the printed number; the task listed 119). Photo: page7.straight.jpg
// Three charts, each headed "صفحہ 122" (continued from page 122):
//   1. سید عنایت حسین بن سید ہادی حسن  (top right)  -> inayatHusain123
//   2. سید ناظر علی بن سید ظہور علی     (top left)   -> nazirAli123
//   3. سید مقبول حسین بن سید خادم علی   (bottom)     -> maqbulHusain123
// Wrapped sibling bars (box walls) are read as one list, top row first (right to left), then the lower row.
// Page 124 continuation: نجم الحسن (stub inside maqbulHusain123).

// ───────────── chart 1: عنایت حسین بن ہادی حسن ─────────────
const inayatHusain123 = onPage(123, m('عنایت حسین', [
  m('غلام سبطین', [
    m('محمد سبطین', [
      f('سبطین سیدہ'),
      f('سبطین زہرا'),
      m('احمد سبطین'),
      f('سبطین فاطمہ', 'سید بلال مہدی', 'نکڑہ حال شفاعت پوتہ'), // VERIFY: mohalla (نکڑہ / لکڑہ / لکھڑہ)
      f('کنیز سبطین', 'سید سبط اسد', 'شریولیہ'), // VERIFY: husband's name and the mohalla below it (hard to read)
    ]),
    f('ام عامرہ', 'سید عطا حسن', 'شفاعت پوتہ', 'زوجہ ثانی'), // VERIFY: husband's name (عطا حسن / عطا حسین)
    m('ظل سبطین', [
      f('تصویر فاطمہ'),
      m('قمر سبطین'),
      f('تطہیر فاطمہ'),
    ]),
  ]),
  f('فضہ خاتون', 'سید فرزند سبطین', 'گھیر مناف'), // VERIFY: husband's name
  f('صغریٰ خاتون', 'سید سلطان محمد', 'پچدرہ'), // VERIFY: mohalla spelled بچیدرہ
]))

// ───────────── chart 2: ناظر علی بن ظہور علی ─────────────
// Seven children: three on the top bar, four on the wrapped bar below (box wall on the left).
const nazirAli123 = onPage(123, m('ناظر علی', [
  m('چاند', 'لاولد'),
  f('شہر بانو', 'سید مومن حسین', 'گذری'),
  m('رئیس الحسن', 'لاولد'),
  // عبادالحسن: five children on the bar that runs right from his line
  m('عبادالحسن', [
    // تصور حسن: six children on a wrapped box bar (تہور حسن and ناہید فاطمہ on the top row, the other four below)
    m('تصور حسن', [
      m('تہور حسن'), // VERIFY: reading (تہور / تنویر)
      f('ناہید فاطمہ'),
      m('منور حسن', [m('محمد مہدی'), f('شمیم زہرا')]), // VERIFY: منور / متور
      f('کاملہ خاتون', 'سید شاہد عالم رضوی', 'لکھنؤ'),
      f('مہ جبین فاطمہ', 'سید جعفر رضا', 'سرو'), // VERIFY: mohalla (سرو)
      m('جمال حیدر'),
    ]),
    f('امیر فاطمہ', 'سید محمد یوسف', 'شفاعت پوتہ'),
    f('حسن فاطمہ', 'سید شفیع حسین', 'گذری', 'عرف چھنو'), // VERIFY: husband's name (شفیع / شنقیع)
    f('عاشورہ خاتون', 'سید در حسن', 'نکڑہ'), // VERIFY: husband's name and mohalla
    m('فرزند حسن', 'عرف پیرا', [
      m('پرویز حیدر', [
        f('عنبرین فاطمہ'),
        m('عامر حیدر'),
        f('زبیدہ'),
      ]),
      f('شہناز فاطمہ', 'سید امام رضا', 'گذری'),
      f('شان فاطمہ', 'سید عباد اصغر', 'دربار کلاں'), // VERIFY: husband's name (عباد اصغر)
      m('جاوید حیدر', [
        // wrapped bar: فرحین فاطمہ and ناز فاطمہ on the top row, then the three below
        f('فرحین فاطمہ'),
        f('ناز فاطمہ'),
        m('گلریز حیدر'),
        m('افروز حیدر'),
        f('مہرین فاطمہ'),
      ]),
      m('ندیم حیدر'),
    ]),
  ]),
  // نفیس الحسن: four children on the top bar plus مشیت حسن on the wrapped right end of the bar
  m('نفیس الحسن', [
    f('خورشید فاطمہ', 'سید طاہر حسین', 'چاہ غوری'), // VERIFY: husband's name (طاہر / مطاہر)
    m('نبیر حسن', [
      f('عارفہ خاتون', 'سید صدر رضا', 'قاضی زادہ'), // VERIFY: husband's name
      m('انتخاب حیدر'),
    ]),
    // مہتاب حسن: wrapped bars, سردار بانو and آفتاب حسن on the top row, four daughters on the lower row
    m('مہتاب حسن', [
      f('سردار بانو'),
      m('آفتاب حسن'), // VERIFY: the lower row of four may be آفتاب حسن's own children rather than wrapped siblings
      f('فیروزہ خاتون', 'سید شمیم حیدر', 'مجھیرہ'), // VERIFY: mohalla (مجھیرہ)
      f('ملکہ بانو', 'سید امانت علی', 'سرسی'),
      f('مبارکہ خاتون', 'سید ہادی حسن', 'لکھنؤ'), // VERIFY: husband's name
      f('مسرت بانو', 'سید مصباح حسن', 'مجاپوتہ'), // VERIFY: husband's name
    ]),
    f('اختر فاطمہ', 'سید مظفر حسین', 'سرسی'),
    // VERIFY: مشیت حسن hangs from the wrapped right end of this bar; placed last (5th) following the wrapped-bar convention, could be the eldest
    m('مشیت حسن', [
      m('منتجب حیدر', [
        m('نفیس حیدر'),
        f('نجم السحر'), // VERIFY: printed without سید, taken as female
        m('محمد حیدر'),
        f('عرشی'), // VERIFY: printed without سید, taken as female
      ]),
      f('معراج بانو', 'سید حسین مہدی', 'دربار کلاں'),
      f('آصفہ خاتون', 'سید تاج زیدی', 'میرٹھ'), // VERIFY: husband's name (تاج / ناج)
      f('شمیم بانو'),
      m('اقبال حیدر', [
        f('صبا زہرا'),
        m('زین'), // VERIFY: printed "سید زین" on one line, no سید beneath; male or female unclear
      ]),
    ]),
  ]),
  f('طاہرہ خاتون', 'سید محمود حسن', 'مجھیرہ'), // VERIFY: mohalla (مجھیرہ)
  m('ضیا علی', [
    m('فدا علی', [
      f('نرجس خاتون', 'سید غلام الثقلین', 'گذری'), // VERIFY: husband's name (printed "ولی سید غلام الثقلین")
    ]),
  ]),
]))

// ───────────── chart 3: مقبول حسین بن خادم علی ─────────────
const maqbulHusain123 = onPage(123, m('مقبول حسین', [
  m('عترت حسین', [
    m('سیادت حسین', [
      m('غلام عباس', [m('احسن رضا')]),
      m('آصف عباس'),
      f('کنیز فاطمہ', 'سید اصغر عباس', 'مجھیرہ'), // VERIFY: mohalla
      m('شاہ رضا', [
        f('صدف رضا'), // VERIFY: printed without سید, taken as female
        f('در نجف'), // VERIFY: printed without سید, taken as female
        m('احمد رضا'),
        m('علی باقر'),
        m('محمد رضا'),
      ]),
      f('اعجاز فاطمہ', 'سید اشرف حسین', 'شفاعت پوتہ'),
    ]),
    f('امینہ خاتون', 'سید سبط علی زیدی', 'گولی قاضی زادہ'), // VERIFY: mohalla (گولی / قاضی زادہ may be two places)
    m('شروت حسین', 'عرف کلو، لاولد'),
    m('ممتاز حسین', 'لاولد'),
    f('ماجدہ خاتون', 'سید یٰسین علی', 'حال نو گنیاں'),
    m('ساجد حسین', [f('افشاں زہرا', 'سید جمال حسن', 'دانشمندان')]), // VERIFY: husband's name
    // مسرت حسین: six children, the sixth on the wrapped bar below
    m('مسرت حسین', [
      m('اشرف حسین'),
      m('مشرف حسین', [m('عباس حسین')]),
      f('شاہین حسین', 'سید عرفان حیدر', 'مجاپوتہ'),
      m('طلعت حسین'),
      m('ارشد حسین'),
      f('شہناز فاطمہ'),
    ]),
  ]),
  m('ابوالحسن', 'لاولد'),
  f('ذاکرہ خاتون', 'سید ہشیر حسن', 'گذری'), // VERIFY: husband's name (ہشیر / مبشر)
  najmulHasan124,
]))

// ═════════════════════════ book page 122 ═════════════════════════
// Khandan 26, محلہ شفاعت پوتہ, book page 122 (photo page6). Three charts on this page, top to bottom:
//   1. muhammadTaqi122  - heading "صفحہ ۱۲۱ سید محمد التقی بن سید مرتضی حسن"
//   2. haidarRaza122    - heading "صفحہ ۱۲۱ سید حیدر رضا بن سید مرتضی حسن"
//   3. asalatKhan122    - heading "صفحہ ۱۱۸ سید محمد اصالت خان بن سید عبدالہادی خان"
// Families continued on other pages are onPage stubs: 123 (inayatHusain123, nazirAli123, maqbulHusain123),
// 124 (asgharAli124), 126 (muhammadAmin126), 127 (muhammadDirayat127).

// ───────────── Chart 1: سید محمد التقی بن سید مرتضی حسن (page 121) ─────────────

const muhammadMujtaba122 = m('محمد مجتبیٰ', [
  m('محمد حسن'),
  m('محمد جعفر'),
  m('علی حیدر'),
])

const muhammadMuqtadi122 = m('محمد مقتدی', [
  m('محمد عدیل'), // VERIFY: عدیل / جدیل / کدیل
  f('ام فاطمہ'),
])

const muhammadTaqi122 = onPage(122, m('محمد التقی', [
  f('شمیم بانو'),
  f('شاہانہ بانو'),
  muhammadMuqtadi122,
  m('باقر عباس'), // VERIFY: باقر / باور
  f('کنیز فاطمہ', 'سید ذوالبر علی', 'منڈی چوب'), // VERIFY: husband's name (ذوالبر / ذوالفقار) and whether the husband line sits under her or under باقر عباس
  m('محمد منظور'),
  muhammadMujtaba122,
  m('محمد عباس'),
  m('محمد افندی'), // VERIFY: افندی
  m('عابد عباس'),
]))

// ───────────── Chart 2: سید حیدر رضا بن سید مرتضی حسن (page 121) ─────────────

const muhammadQaisar122 = m('محمد قیصر', [
  f('طاہرہ'),
  m('محمد ضیغم'),
  f('سعدیہ'),
])

const haidarRaza122 = onPage(122, m('حیدر رضا', [
  muhammadQaisar122,
  f('قیصر بانو', 'سید محمد سلیم', 'پچدرہ'),
  f('شہر بانو', 'سید کبیر رضا', 'شفاعت پوتہ'), // VERIFY: husband's name (کبیر رضا / کمیر رضا)
  m('محمد حیدر'),
  m('محمد صفدر'), // VERIFY: صفدر
]))

// ───────────── Chart 3: سید محمد اصالت خان بن سید عبدالہادی خان (page 118) ─────────────

// Stubs: families the book continues on other pages

// محمد حمایت
const muhammadHimayat122 = m('محمد حمایت', [
  f('صاحب النساء', 'سید ایر علی', 'شفاعت پوتہ'), // VERIFY: her name (صاحب / صاف) and husband's name (ایر علی = امیر علی?)
]) // VERIFY: حمایت

// محمد قناعت → ملیح الدین → ظہور علی / صدر الدین
const ghulamMahdi122 = m('غلام مہدی', [
  f('صابرہ خاتون', 'سید آل احمد', 'پچدرہ'),
  f('کنیز فاطمہ', 'سید عنایت حسین', 'شفاعت پوتہ'), // VERIFY: husband's name (حسین / حسن)
  f('ساجدہ خاتون', 'سید حسن', 'شفاعت پوتہ', 'زوجہ ثانی'), // VERIFY: husband's name, only "... حسن" is legible
])

// ظہور علی's children are drawn in a box: three on the top bar, two on the bar along its bottom edge,
// then three more on a third bar. One sibling list, eldest first.
const zahoorAli122 = m('ظہور علی', [
  m('محب علی', 'لاولد'),
  m('کریم رضا', 'لاولد'),
  m('عزیز علی', 'لاولد'),
  nazirAli123,
  f('جمیلہ خاتون'),
  m('ہادی حسن', [
    inayatHusain123,
    f('آمنہ خاتون', 'سید ضیا علی', 'شفاعت پوتہ'), // VERIFY: husband's name, same as شریعت النساء's?
  ]),
  m('احمد حسن', [f('شریعت النساء', 'سید ضیا علی', 'شفاعت پوتہ')]),
  ghulamMahdi122,
])

const sadruddin122 = m('صدر الدین', [
  m('حیدر حسن', [f('دختر', 'سید ضیا علی', 'گذری')]),
  m('احمد حسن', [f('دختر', 'سید ابوالحسن', 'بھوکہ')]), // VERIFY: husband's name (ابوالحسن)
  m('سردار علی', 'لاولد'),
])

const maleehuddin122 = m('ملیح الدین', [zahoorAli122, sadruddin122]) // VERIFY: ملیح الدین
const muhammadQanaat122 = m('محمد قناعت', [maleehuddin122])

// محمد ارادت
const muhammadIradat122 = m('محمد ارادت', [
  m('قطب علی', 'لاولد'),
  m('ایر علی', 'لاولد'),
])

// محمد عنایت
const muhammadInayat122 = m('محمد عنایت', [f('دختران', undefined, undefined, 'بیٹیاں، نام نہیں دیے')])

// محمد اعانت
const muhammadIanat122 = m('محمد اعانت', [
  m('غلام امام', 'لاولد'),
  m('فضل امام', [f('دختر', 'سید محمد علی', 'گذری')]), // VERIFY: husband's name
  m('کرم امام', 'لاولد'),
])

// محمد ولایت
const muhammadWilayat122 = m('محمد ولایت', [f('دختران', undefined, undefined, 'بیٹیاں، نام نہیں دیے')])

// محمد ہدایت
const muhammadHidayat122 = m('محمد ہدایت', 'لاولد')

// محمد امانت → محمد یقین / محمد حیات / محمد امین
// محمد احسن's children are on a box: three on the top bar, two on the bar along its bottom edge.
// محمد یوسف's ten children hang off the long bar across the foot of the page.
const muhammadAhsan122 = m('محمد احسن', [
  m('ہاشم رضا', [f('صدف بانو', undefined, undefined, 'VERIFY: an ✕ is drawn beside her arrow')]),
  f('ہاشمہ خاتون', 'سید علی محمد زیدی', 'سامانہ حال گذری'), // VERIFY: husband's name
  f('زہرا خاتون', 'سید ابو حسین', 'اعوان پور'), // VERIFY: husband's name
  m('محمد جعفر حیات', 'لاولد'), // VERIFY: a circled ۱ is drawn beside the arrow
  m('محمد یوسف', [
    m('معنیر رضا'), // VERIFY: معنیر / معتبر
    m('شباب رضا', [
      m('اسد رضا'),
      f('مریم فاطمہ'),
      m('حسن رضا'),
      m('محمد فہد رضا'),
      m('محمد نوید رضا'),
      m('جمشید رضا'),
      f('ظفر زہرا', 'سید کامران خوشتر', 'گذری', 'عرف نوشین'),
    ]),
    f('اقبال زہرا', 'مجاہد', undefined, 'VERIFY: husband reads مجابد / مجاہد; an ✕ is drawn beside her arrow'),
    f('مجیب صفرا', 'سید شاہد حسنی', 'کالی پگڑی'), // VERIFY: husband's name and mohalla (مالی / کالی پگڑی)
    f('رومانیہ خاتون', 'سید مرتضیٰ حسین', 'سنبھل'), // VERIFY: رومانیہ
    m('سغیر رضا', [
      m('شاہ رضا', [m('شاہ زین رضا'), f('فاطمہ زہرا')]),
      m('شاہ زیب رضا'),
    ]),
    f('نجمہ خاتون', 'سید فضل بشیر', 'نگرہ'), // VERIFY: husband's name (بشیر / بہیر)
    m('وقار رضا'), // VERIFY: reads like ونار / وقار
    m('انور رضا', [
      f('بشریٰ فاطمہ'),
      f('سورت صدرا'), // VERIFY: name
      f('حرا فاطمہ'),
      m('عامر رضا'),
      f('کرن فاطمہ'),
      m('طاہر رضا'),
    ]),
    m('سکندر رضا'),
  ]),
])

const muhammadMustahsan122 = m('محمد مستحسن', [muhammadAhsan122])

const muhammadYaqeen122 = m('محمد یقین', [
  asgharAli124,
  m('امداد علی', [
    m('سجاد علی', [
      m('نور حسن', [
        f('امامیہ خاتون', 'سید برجیس حسن', 'گذری'),
        f('حسینی خاتون', 'سید محمد یاسین', 'مجاپوتہ حال شفاعت پوتہ'), // VERIFY: husband's name (یاسین / لیمین)
      ]),
      m('ابن علی', [f('فراست النساء', 'سید غیاض حسین', 'مجاپوتہ')]),
      m('آل حسن', [
        f('نفیسہ خاتون', 'سید محمد احسن', 'شفاعت پوتہ'), // VERIFY: نفیسہ
        f('کبریٰ خاتون', 'سید ریاض حسین', 'چھیوڑہ'),
        f('شریف النساء', 'سید اجل حسین', 'مجاپوتہ'), // VERIFY: husband's name
      ]),
      muhammadMustahsan122,
    ]),
    f('دختر', 'سید نجف علی', 'دانشمندان'),
  ]),
])

// محمد حیات → موجود علی; his children are drawn in a box (two on the top bar, علی حسین on the bar along the bottom edge)
const muhammadHayat122 = m('محمد حیات', [
  m('موجود علی', [
    f('دختر', 'سید واسع علی', 'بگلہ'), // VERIFY: husband's name
    m('ولی حسین', [f('دختر', 'سید رضا علی', 'بگلہ')]),
    m('علی حسین', [m('علی حسین', 'لاولد')]),
  ]),
])

const muhammadAmanat122 = m('محمد امانت', [
  muhammadYaqeen122,
  muhammadHayat122,
  muhammadAmin126,
])

// محمد کرامت → غلام شرف الدین
const muhammadKaramat122 = m('محمد کرامت', [
  m('غلام شرف الدین', [
    f('دولت خاتون', 'سید بنی بخش', 'شفاعت پوتہ'), // VERIFY: husband's name
    m('نفیس بخش', [ // VERIFY: name
      f('شہر بانو', 'سید مہدی علی', 'شفاعت پوتہ'),
      m('خادم علی', [
        m('نظر حسین', [
          f('حمیدہ خاتون', 'سید محمد رضا', 'نگرہ'),
          m('ظفر حسن', 'لاولد'),
        ]),
        maqbulHusain123,
      ]),
    ]),
  ]),
])

const asalatKhan122 = onPage(122, m('محمد اصالت خان', [
  muhammadHimayat122,
  muhammadQanaat122,
  muhammadIradat122,
  muhammadInayat122,
  muhammadIanat122,
  muhammadWilayat122,
  muhammadHidayat122,
  muhammadAmanat122,
  muhammadKaramat122,
  muhammadDirayat127,
]))

// ═════════════════════════ book page 121 ═════════════════════════
// Khandan 26, mohalla شفاعت پوتہ, book page 121 (the task labelled it 130; the number printed on the photo is ۱۲۱).
// Charts on this page:
//   1. zafarHasan121: "صفحہ ۱۲۰ سید ظفر حسن بن سید مظفر علی" (top chart, continued from page 120)
//   2. rahmatAli121: "صفحہ ۱۱۸ سید رحمت علی بن سید حسن علی" (the rest of the page)
// Where children are drawn in a box whose bottom edge is a second bar, the two rows are ONE sibling list (top row first,
// each row right to left). Continued on page 122: حیدر رضا and محمد التقی (both marked "صفحہ ۱۲۲").

// ───────── chart 1: ظفر حسن ─────────

const zafarHasan121 = onPage(121, m('ظفر حسن', [
  m('شجر حسن', 'لاولد'),
  m('خورشید حیدر', [
    // Drawn in a box: four daughters on the top bar, the bottom edge is a second bar of six more (one list of ten)
    f('شیریں فاطمہ', 'سید نعیم حیدر', 'مجاپوتہ'),
    f('ارم'),
    f('حجاب فاطمہ', 'سید خورشید مطاہر', 'دربار کلاں'),
    f('آصفہ خاتون', 'سید عباس ہادی', 'بنگلہ'), // VERIFY: husband's name (عباس ہادی / عباس ماہدی)
    m('شرف اللہ حیدر'),
    f('عالیہ زینب'),
    m('فضل اللہ حیدر', [
      f('شہر بانو'),
      m('طغرا حسن'), // VERIFY: reads طغرا حسن (ظفر حسن?)
      f('رباب فاطمہ'),
    ]),
    m('علی بہادر'),
    f('شبانہ خورشید'),
    m('اسد اللہ حیدر', [
      f('نور فاطمہ'),
      f('سارا'),
      f('سیما بتول'),
      f('نوازش علی'), // VERIFY: printed without سید, so taken as female, but the name reads like a man's (نوارش علی)
    ]),
  ]),
  f('وصال زہرا'),
  f('ہلال زہرا', 'سید جعفر رضا', 'گذری'),
  f('خصال زہرا', 'سید معظم حسن', 'شفاعت پوتہ'), // VERIFY: husband's name (معظم / معطر)
  m('حیدر شاہ', [
    m('شجاعت حیدر'),
    m('عظیم حیدر'),
    m('مصور حیدر'),
    f('شاہانہ'),
    f('شبنم فاطمہ', 'سید جوہر رضا', 'گذری'), // VERIFY: husband's name (جوہر / جعفر رضا)
    m('عقیل حیدر'),
  ]),
  m('توصیف حیدر', 'لاولد'),
]))

// ───────── chart 2: رحمت علی ─────────

// Continued on page 122

const rahmatAli121 = onPage(121, m('رحمت علی', [
  m('صاحب علی', [
    m('باسط علی', '(سنبھل چلے گئے)'),
    m('اولاد علی', 'لاولد'),
  ]),
  f('دختر', 'سید ظہور حسن', 'چھیوڑہ'),
  m('مصاحب علی', [
    f('دختر'),
    f('چاندنی', 'سید کرم حسین', 'صابو نگراں'), // VERIFY: mohalla (صابو نگر؟)
    f('دختر'),
  ]),
  m('علی نذر', [
    f('دختر', 'سید اصغر حسین', 'دانشمندان'),
    m('طالب حسن', [
      m('حمزہ حسن', [
        m('سمیع احمد', 'لاولد'),
        f('ممتاز بانو', 'سید شکور حسن', 'دانشمندان'),
        m('علی', [
          f('بنت سیدہ'), // VERIFY: بنت سیدہ may be a single name
          m('محمد علی'),
          m('اسد علی', [
            f('رضا زہرا'),
            m('دانیال علی'),
            f('نگار زہرا'),
          ]),
          m('منور علی'),
        ]),
        f('نازک بانو', 'سید محمد حسین', 'بھوکر'), // VERIFY: mohalla (بھوکر؟)
        f('شمیم بانو', 'سید الطاف حسین', 'مراد آباد'),
      ]),
      f('مسیح النساء', 'سید ضامن حسین', 'منڈی چوب'),
      f('سعید النساء', 'سید مہدی نذر', 'سنبھلی'), // VERIFY: husband's name and mohalla
      m('مہدی حسن', [
        m('شبیہ احمد', [
          // Box: two on the top bar, the bottom edge is a second bar of two more (one list of four)
          f('حسن فاطمہ'),
          m('محمد احمد', [
            // Box with the bottom bar continued on a third bar: thirteen children in all
            f('قمر فاطمہ', 'سید محمد قیصر', 'شفاعت پوتہ'),
            f('شاہنواز فاطمہ', 'سید ناصر عباس', 'شفاعت پوتہ'),
            f('شہناز فاطمہ', 'سید صابر حسین', 'چھیوڑہ'), // VERIFY: husband's name (صابر / ضامن)
            m('قمر عباس', [m('محمد تابش')]),
            m('شہزاد رضا', [m('محمد صبیح')]),
            m('احمد عباس'),
            m('فرخ عباس'),
            f('ارم فاطمہ'),
            m('حیدر عباس'),
            f('سکرن فاطمہ'), // VERIFY: spelling (سکرن / سرگن)
            m('کمال عباس'),
            m('نعیم عباس'),
            f('طلعت فاطمہ'),
          ]),
          m('پیمبر رضا', [
            f('باقرہ خاتون'),
            m('علی مہدی'),
            m('ضیا مہدی'),
            m('زوار مہدی'),
          ]),
          m('حسن احمد', [
            f('احسان فاطمہ'),
            m('وسیم حسن'),
            m('ندیم حسن', [
              m('ممتاز حسن'), // VERIFY: first letters of the name are cut off in the photo
              m('محمد آصف'),
              f('حسین بانو'), // VERIFY: حسین / معین بانو
            ]),
            m('حسن جاوید', [
              m('وجاہت حسین'),
              f('انجم زہرا'),
            ]),
          ]),
        ]),
        m('رضی احمد', 'لاولد'),
      ]),
      f('مجید النساء', 'سید ضیاء الحسن', 'مجھیر پٹی'), // VERIFY: mohalla is hard to read
      f('وحید النساء', 'سید اعجاز حسین', 'شفاعت پوتہ'),
      m('مرتضیٰ حسن', [
        // Box: four on the top bar, the bottom edge is a second bar of two more (one list of six)
        m('علی رضا', [
          // Box again: two on the top bar, two more on the bottom bar (one list of four)
          m('منیر رضا'),
          f('توقیر فاطمہ'),
          m('تنویر رضا', [f('کنول زہرا')]),
          f('تصور فاطمہ', 'سید قمر عباس', 'شفاعت پوتہ'), // VERIFY: husband may be printed without سید
        ]),
        haidarRaza122,
        f('زرینہ خاتون', 'سید عبد الحسن', 'دربار کلاں', 'زوجہ ثانی'), // VERIFY: husband's name (عبد الحسن / عبد اللہ حسن)
        f('صغریٰ خاتون', 'سید محمد احمد', 'شفاعت پوتہ'),
        m('علی مصطفیٰ', [
          // Box on the right: three on the top bar, three more on the bottom bar (one list of six)
          m('ناصر عباس'),
          f('شاہین بانو', 'سید بہتر رضا', 'دربار کلاں'), // VERIFY: husband's name (بہتر / بہنر)
          f('پروین بانو'), // VERIFY: reads like بردیں / پردین / پروین
          f('حسین بانو', 'سید ثقلین نذر', 'سنبھلی'), // VERIFY: husband's name and mohalla
          f('مرجبین بانو', 'سید اصغر رضا', 'دربار کلاں'), // VERIFY: name (مرجبین / مرجین)
          f('تنویر بانو', 'سید ذوالفقار حسین', 'چھیوڑہ'), // VERIFY: husband's name
        ]),
        muhammadTaqi122,
      ]),
    ]),
  ]),
]))

// ═════════════════════════ book page 120 ═════════════════════════
// Khandan 26, محلہ شفاعت پوتہ. Photo: shafaat pota/aulad syed abdul jaleel bin syed mubarak/page4.straight.jpg
// NOTE: the page number printed on this photo is 120 (not 128), and its heading is
// "صفحہ ۱۱۸ سید حسین علی ثانی بن سید مہربان علی" (not the ابوجعفر heading the task named).
// One chart on the page:
//   husainAliSani120: سید حسین علی ثانی بن سید مہربان علی (headed "صفحہ ۱۱۸"); sons محمد طفیل and مظفر علی.
// Continued elsewhere: ظفر احسن (son of مظفر علی) is marked "صفحہ ۱۲۱" (stub below).
// Wrapped sibling bars (boxes whose bottom edge is the next bar) are ONE sibling list, eldest first:
//   معز حسین 13 children (2 bars), ابن محمد 5, محمد حیدر 6, مناظر الحسن 8, انیس حیدر 8,
//   ذاکر حسین 10 (4 bars), رئیس حیدر 9 (2 bars), نسیم حیدر 5, حسین حیدر 5.
// The faint writing along the bottom edge of the photo is bleed-through from the reverse page; ignored.

// ---- محمد (son of آل محمد) ----
const ghulamHaidar120 = m('غلام حیدر', [
  f('نگین فضہ'),
  m('عمران حیدر'),
  f('جبین فضہ'),
  m('عمار حیدر'),
  f('فرحین فضہ'),
])

const zulfiqarAli120 = m('ذوالفقار علی', [
  f('شبنم زہرا'),
  m('ذیشان حیدر'), // VERIFY: ذیشان / دیشان
  m('کامران حیدر'),
  f('شائستہ زہرا'),
  f('تسبیح زہرا'),
])

const muhammadSon120 = m('محمد', [
  ghulamHaidar120,
  zulfiqarAli120,
  m('میزان حیدر'),
  m('علی حیدر', 'لاولد'),
])

// ---- محمد حیدر (wrapped bar of 6) ----
const muhammadHaidar120 = m('محمد حیدر', [
  f('تابندہ ایلیا'), // VERIFY: name reads like تابندہ ایلیا
  m('سلمان حیدر'),
  m('کامران حیدر'),
  f('صدف زہرا'),
  f('عدیلہ زہرا'), // VERIFY: عدیلہ / عدیلہ
  m('عدنان حیدر'),
])

// ---- ابن محمد (wrapped bar of 5; مہربان علی is the wrapped last sibling) ----
const ibnMuhammad120 = m('ابن محمد', [
  m('انعام علی'), // VERIFY: printed like العام علی
  f('بنت زہرا', 'سید اولاد حسین', 'شفاعت پوتہ'),
  f('شاہین زہرا'),
  f('شان زہرا'),
  m('مہربان علی'),
])

const aalMuhammad120 = m('آل محمد', [
  muhammadSon120,
  muhammadHaidar120,
  f('حبیبہ خاتون', 'سید نادر حسین', 'شفاعت پوتہ'), // VERIFY: first letter (حبیبہ / جبیہ)
  ibnMuhammad120,
])

const muzaffarAli120 = m('مظفر علی', [
  f('جمعی', 'سید ظریف حسین', 'گذری'), // VERIFY: name (جمعی / جمعہ) and husband's name (ظریف حسن / ظریف حسین)
  zafarHasan121,
])

// ---- ابوالمعظم ----
const abulMuazzam120 = m('ابوالمعظم', [
  m('شمیم حیدر', [
    m('عباس حیدر'),
    m('فہیم حیدر'), // VERIFY: first letter (فہیم / نہیم)
    m('ندیم حیدر'),
    m('نعیم حیدر'), // wrapped last sibling
  ]),
  f('شمیم زہرا', 'سید دانش رضا', 'مجاپوتہ'), // VERIFY: husband's name
  f('حسن زہرا', 'سید مضطر رضا', 'دانشمندان'), // VERIFY: husband's name (printed مصیطر / مضطر رضا); "زوجہ ثانی"
  m('حسن حیدر', [m('شان حیدر'), f('مہوش')]),
])

// ---- معز حسین (13 children, two bars wrapped: 5 daughters first, then 8) ----
const zakirHusain120 = m('ذاکر حسین', [
  f('عطیہ زہرا'),
  f('بنت زہرا', 'سید ابن ہانی', 'بخشی'), // VERIFY: husband's name
  m('کرار حیدر'),
  f('یاسمین زہرا', 'سید زاہد حسین'),
  f('تسکین زہرا', 'سید ستار حیدر', 'بگلہ'), // VERIFY: husband's name (ستار / دلدار)
  f('شفیع زہرا', 'سید شمیم حیدر', 'سرسی'),
  f('شان زہرا'),
  m('ارمان حیدر'),
  f('عنبرین زہرا'),
  m('انوار حیدر'),
])

const raeesHaidar120 = m('رئیس حیدر', [
  m('جمال حیدر'),
  m('نعیم حیدر'),
  f('نایاب فاطمہ'),
  f('شباب زہرا'),
  f('شمیم زہرا'),
  m('سلیم حیدر'),
  m('تسلیم حیدر'), // VERIFY: name reads تسلیم / نسلیم
  f('خوش نصیب زہرا'),
  m('رمیز حیدر'), // VERIFY: partly cut at the edge of the photo
])

const manzarulHasan120 = m('منظر الحسن', [
  f('ہادہ زہرا', 'سید ذوالفقار حیدر', 'شفاعت پوتہ'), // VERIFY: name (ہادہ / ماہ)
  m('خصال مہدی'),
  m('اقبال مہدی', [m('حیدر مہدی'), f('گل زہرا'), m('علی مہدی')]),
  m('وصال مہدی'),
  m('مثال مہدی'),
  m('جمال مہدی', [f('فاطمہ مہدی'), f('مریم مہدی')]),
  f('مظہر زہرا'),
])

const anisHaidar120 = m('انیس حیدر', [
  f('کنول فاطمہ'),
  m('آل حیدر'),
  m('عمران حیدر'),
  m('کامران حیدر'),
  f('شاہین زہرا'),
  f('مرجبین فاطمہ'), // VERIFY: spelling
  m('علی حیدر'),
  f('شمیم فاطمہ'),
])

const manazirulHasan120 = m('مناظر الحسن', [
  m('افضال حیدر'),
  f('ریس فاطمہ'), // VERIFY: ریس / رئیس
  m('اختر عباس'),
  m('ہمایوں حیدر'),
  f('حدیث فاطمہ'),
  m('امر حیدر'), // VERIFY: امر / ابر
  f('سیدہ خاتون'),
  m('محمد حیدر'),
])

const naseemHaidar120 = m('نسیم حیدر', [
  m('تنویر حیدر'),
  f('افشین زہرا'),
  m('شباب حیدر'),
  m('شاہد حسین'),
  f('سمین زہرا'), // VERIFY: سمین / یاسمین
])

const husainHaidar120 = m('حسین حیدر', [
  m('قسیم حیدر'),
  f('نرجس فاطمہ'),
  m('شمیم حیدر'),
  f('برجیس فاطمہ'), // VERIFY: spelling
  f('رباب فاطمہ'),
])

const muizzHusain120 = m('معز حسین', [
  f('حسین زہرا'),
  f('مطیع زہرا', 'سید ممنون حیدر', 'بھوکر حال مجاپوتہ'), // VERIFY: husband's name (ممنون / مامون) and first mohalla word
  f('محب زہرا', 'سید انتظار حیدر', 'سرسی'),
  f('نور زہرا', 'سید علاء حسین', 'حقانی'), // VERIFY: husband's name
  f('نسیم زہرا'),
  zakirHusain120,
  raeesHaidar120,
  manzarulHasan120,
  anisHaidar120,
  manazirulHasan120,
  naseemHaidar120,
  f('کنیز زہرا', 'سید سبط علی', 'بخشی'),
  husainHaidar120,
])

const salamHusain120 = m('سلم حسین', [
  muizzHusain120,
  f('معظمہ خاتون', 'سید میر محمد', 'نگردہ', 'زوجہ ثانی'), // VERIFY: mohalla (نگردہ / لگرہ)
  abulMuazzam120,
]) // VERIFY: first name reads سلم حسین (سلیم?)

const muhammadTufail120 = m('محمد طفیل', [
  salamHusain120,
  f('سلمہ خاتون', 'سید واجد علی', 'چکلی'),
  f('ذاکرہ خاتون', 'سید صغیر حسن', 'پچدرہ'), // VERIFY: mohalla spelled بچیدرہ
  f('طیبہ خاتون', 'سید اشتیاق حسین', 'حقانی'),
  f('حنیفہ خاتون', 'سید حامد حسین', 'قاضی زادہ'), // VERIFY: first letter (حنیفہ / جنیفہ)
  aalMuhammad120,
])

// Chart root: heading "صفحہ ۱۱۸ سید حسین علی ثانی بن سید مہربان علی"
const husainAliSani120 = onPage(120, m('حسین علی ثانی', [muhammadTufail120, muzaffarAli120]))

// ═════════════════════════ book page 119 ═════════════════════════
// Khandan 26, محلہ شفاعت پوتہ. Photo page3 of "aulad syed abdul jaleel bin syed mubarak".
// NOTE: the page number printed on the photo is 119 (the task text said 127 / heading "صفحہ ۱۲۶ سید منظور حسین بن سید ابوعلی"; neither is on this photo).
//
// Chart 1: "صفحہ ۱۱۸  سید ابوالحسن فرقتی بن سید نیاز علی" (the whole page, one big tree; continued FROM page 118, so the root is not a stub)
// Chart 2: "صفحہ ہذا  سید نادر حسن بن سید ابوالحسن فرقتی" (bottom of the page; nested into chart 1 as the youngest son naderHusain119)
//
// Wrapped sibling lists (a drawn box whose left edge runs down to a second bar): زائر حسین (8 children),
// رضوان حیدر (8 children), ظفر حسین (5 children). Each is written as ONE list, top row first.

// ───────── chart 2: نادر حسن ─────────
const naderHusain119 = m('نادر حسن', [
  m('اولاد حسن', [
    m('ضیاء حسن'), // VERIFY: first letters (ضیاء / عنایت)
    m('زاہد حسن'),
    m('فیاض حسن'),
    m('علی حسن'),
    f('فروہ زہرا'),
  ]),
  f('تسکین فاطمہ', 'محمد زمان'), // husband printed without سید
  m('محمد تسکین', [
    f('بلقیس زہرا', 'سید قائم رضا'),
    m('تحسین احمد'),
    m('مبین احمد'),
    m('محمد نادر', [f('بتول نادر'), f('فریحہ نادر'), f('مدیحہ نادر'), f('فاطمہ نادر')]),
  ]),
])

// ───────── chart 1: ابوالحسن فرقتی ─────────

// محمد حسن (bar of 5 children)
const muhammadHasan119 = m('محمد حسن', [
  f('سیدہ خاتون', 'سید حسین محمد', 'پچدرہ'), // VERIFY: mohalla spelled بچدرہ
  f('اقبال زہرا', 'سید امتیاز علی'),
  m('احمد', 'عرف دین احمد', [
    m('علی ناصر', [f('ثمرین'), f('فرحین')]), // VERIFY: ثمرین / فرحین spelling
    f('نسرین زہرا', 'سید محمد عباس زیدی', 'سادات بارہہ'),
    f('یاسمین زہرا', 'سید امتیاز احمد'),
  ]),
  m('افضال حیدر', [
    m('رضا حیدر'),
    f('صائمہ بتول'),
    m('نقی حیدر'),
    m('محمد حیدر'),
    f('سائرہ بتول'),
  ]),
  // رضوان حیدر: a box. Top bar has 2 children; the box left edge runs down to a second bar with 6 more (wrapped sibling list).
  m('رضوان حیدر', [
    m('ہلال حیدر'),
    m('خصال حیدر'),
    m('نہال حیدر'), // VERIFY: the second bar hangs from the box's left edge; taken as the wrap of رضوان حیدر's list (not افضال حیدر's)
    m('کمال حیدر'),
    m('جمال حیدر'),
    m('بابر حسنین'), // VERIFY: بابر حسین / حسنین
    m('تقی حیدر'),
    f('شباب زہرا'),
  ]),
])

// ابن حسن (bar of 7 children)
const ibnHasan119 = m('ابن حسن', [
  m('علی بزرگ', [
    f('تہذیبہ خاتون', 'سید سعید الحسن', 'گذری', 'عرف پیاری'), // VERIFY: first name (تہذیبہ / بہذیبہ)
    m('ضیاء عارفین'),
  ]),
  m('مسیب حسن', [ // VERIFY: name reads like متیب / مسیب حسن
    m('جاوید کمال', [m('اختر عباس'), m('طاہر عباس')]),
    f('فریدہ جمال', 'سید مہدی', 'شفاعت پوتہ'),
    m('اثر حسن', [f('نماز زینب'), f('آسیہ زینب')]), // VERIFY: اثر حسن (may read حسن اثر); نماز زینب (may be ندا زینب)
  ]),
  m('زوار حسین', [
    f('قمر زہرا', 'سید محمد سبطین', 'سنبھلی'), // VERIFY: mohalla
    m('محمد شفاعت', [
      f('حنا زہرا', 'سید حضور مجتبیٰ', 'چھیوڑہ'), // VERIFY: first name (حنا / ثنا)
      f('زہری', 'سید مسعود زیدی', 'لکھنؤ'),
      f('فصیحہ', 'سید منظور احمد', 'منڈی چوب'),
      f('نعمہ زہرا', 'سید جاوید حسن زیدی', 'نور پور'), // VERIFY: first name (نعمہ / لعمہ) and mohalla
      f('ہما شفاعت', 'سید جمال حسن', 'دانشمندان'),
    ]),
    f('ثریا زوار', 'سید مظفر حسین', 'کٹرہ غلام علی'), // VERIFY: husband's name (مظفر / منظر)
  ]),
  m('محمد خامس', [
    m('حسین بن خامس'),
    m('حسن بن خامس'), // VERIFY: حسن / محسن
    f('شہر بانو', 'سید کاظم رضا', 'گذری'),
    m('محسن بن خامس'),
    m('حسین بن خامس', [m('محمد احسن'), f('نتاشہ'), m('علی رضا')]),
  ]),
  m('ظہور مہدی', [
    f('شمیم زہرا', 'سید ذوالقرنین حیدر', 'گذری'),
    f('جمال زہرا', 'سید حسین', 'لکردہ', 'عرف جمالی'), // VERIFY: husband's name (حسین / حسنین); mohalla لکردہ
    f('نعیم زہرا', 'سید جاوید کمال', 'شفاعت پوتہ'),
    f('حسن زہرا', 'سید حسن مہدی زیدی', 'جرودی حال نوگنیاں', 'عرف نازی'), // VERIFY: mohalla first word
    m('مہدی', [m('حسن ضیاء'), m('حسین ضیاء')]),
  ]),
  f('اربعین فاطمہ', 'سید افضال احمد', 'کشکوئی'), // VERIFY: mohalla
  m('محمد سادس', [
    m('علی صارم'),
    f('صبیحہ کلثوم'),
    f('عشرت زہرا'), // VERIFY: عشرت / عنترت
    f('سارا بتول', 'سید معصوم مصطفیٰ', 'بنگلہ'),
    f('صدف زہرا'),
  ]),
])

// زائر حسین: box with 4 children on the top bar, wrapped to a second bar with 4 more
const zaerHusain119 = m('زائر حسین', [
  m('غلام سیدین'), // VERIFY: غلام سیدین / سبطین
  f('ناصعہ خاتون', 'سید مظاہر حسن', 'نوگنیاں'), // VERIFY: first name (ناصعہ / ناجعہ / نامعتہ), husband's name
  f('نرجس خاتون', 'سید حسین محترم', 'گذری'), // VERIFY: husband's name
  m('مظہر حسنی'), // VERIFY: حسنی / حسینی
  m('محمد سبطین', [f('صائمہ بتول'), m('حسن عباس'), m('صغدر عباس'), f('عظمیٰ بتول')]),
  m('حبیب الثقلین', [m('علی عباس'), f('زہرا بتول', 'سید نشاط حیدر جعفری')]),
  m('ضیاء حسن', [m('زائر عباس')]),
  // ظفر حسین: 3 children on one bar, wrapped to a second bar with 2 more
  m('ظفر حسین', [
    f('برجیس فاطمہ'), // VERIFY: برجیس / نرجس
    f('نسیم فاطمہ'),
    f('ارم فاطمہ'),
    m('رضا عباس'),
    m('محمد عباس', 'لاولد'),
  ]),
])

// حسن ضیاء: 6 children on one bar
const hasanZiya119 = m('حسن ضیاء', [
  f('فاطمہ خاتون', 'سید نفیس الحسن', 'چھیوڑہ حال دانشمندان'), // VERIFY: mohalla
  f('عاشورہ خاتون', 'سید محمد حسن', 'بنگلہ'),
  m('زہیر قین', [
    f('منورہ خاتون', 'سید ابن احمد', 'شفاعت پوتہ'),
    m('ابن قین'),
    f('مبارکہ خاتون', 'سید محمد سادس', 'شفاعت پوتہ'),
    f('عطیہ زہرا'),
    f('اعجاز فاطمہ', 'سید حسن ارشد زیدی', 'سلطان پور'), // VERIFY: husband's name (حسن / حسین)
  ]),
  muhammadHasan119,
  ibnHasan119,
  zaerHusain119,
])

// Root: سید ابوالحسن فرقتی بن سید نیاز علی (7 children)
const abulHasanFarqati119 = onPage(119, m('ابوالحسن فرقتی', [
  m('ابوالمعالی', 'لاولد'),
  f('ام فروہ', 'سید ابوالقاسم', 'گذری'),
  f('بنت زہرا', 'سید علی زین العابدین', 'لکردہ', 'زوجہ ثانی'), // VERIFY: mohalla
  hasanZiya119,
  f('اطہر فاطمہ', 'سید علی زین العابدین', undefined, 'زوجہ اولیٰ'),
  f('انوار النساء', 'سید مہدی رضا', 'دانشمندان'),
  naderHusain119,
]))

// ═════════════════════════ book page 118 ═════════════════════════
// Khandan 26, محلہ شفاعت پوتہ: اولاد سید عبدالجلیل بن سید مبارک. Photo page2, book page 118 (printed ۱۱۸).
// One chart: heading "صفحہ ۱۱۷ سید عبدالہادی خان بن سید محمد شفاعت" (the page number in the heading is hard to read).
// Four sons drawn under it; محمد اصالت خان is continued on page 122 (stub only).
// Stubs for other pages: حسین علی ثانی (p.120), رحمت علی (p.121), ابوالحسن (p.119).
// Wrapped sibling lists are written eldest first: U-turn boxes top row then bottom row (each right to left);
// "staircase" bars whose second row sits lower and to the right are read right to left from the lower row.

// ── شمس الحسن's children (two joined bars, 9 children)
const shamsulHasan118 = m('شمس الحسن', [
  // VERIFY: the father of this bar is شمس الحسن (his line ends in an arrow on the bar's left end); ظفر عباس above it only touches the bar
  f('تسلم زہرا'),
  m('محمد صادق'),
  f('طلعت زہرا'),
  f('حسین زہرا'), // VERIFY: spelling (حسبن / حسین)
  m('ذوالقرنین'), // VERIFY: ذوالقرنین / ذوالنورین
  f('نعیم زہرا', 'سید علی سجاد', 'بگلہ'),
  f('نسیم زہرا', 'محمد حسن اعوان'), // VERIFY: husband printed without سید
  f('شمیم زہرا', 'سید سکندر عباس', 'حقانی'),
  m('علی رضا'),
])

const ziaulHayi118 = m('ضیاء الحی', [
  m('ظفر عباس'),
  f('پروین زہرا'),
  m('ناصر عباس'), // a pen cross is drawn beside him
  f('یاسمین زہرا'),
])

const meraajulHasan118 = m('معراج الحسن', [m('غلام عباس')])

// ── اعجاز حسین's children: a bar of five with a second bar to its lower right (staircase)
const ejazHusain118 = m('اعجاز حسین', [
  // VERIFY: order of the two rows (the lower-right pair معراج الحسن / شجاع الحسن may be the youngest instead)
  meraajulHasan118,
  m('شجاع الحسن', 'لاولد'),
  ziaulHayi118,
  f('پاکیزہ خاتون', 'سید حیدر رضا', 'لکھنؤ'), // VERIFY: پاکیزہ (printed یاکیزہ)
  m('عین الحسن', 'لاولد'),
  f('مہاجرہ خاتون', 'سید ناطق حسین', 'حقانی'),
  shamsulHasan118,
])

const ghulamSadiq118 = m('غلام صادق', [
  m('غلام مصطفیٰ', 'لاولد'),
  ejazHusain118,
])

// ── دانش رضا's nine children (box: top row of five, bottom row of four)
const danishRaza118 = m('دانش رضا', [
  f('سیدہ خاتون'), // VERIFY: first word reads سیدہ (may be a name like سعیدہ)
  f('راضیہ خاتون'),
  f('شافیعہ خاتون'),
  f('وادیہ خاتون'),
  m('علی رضا'),
  m('شان رضا'),
  m('معصوم رضا'), // a pen cross is drawn under his name
  m('آزاد رضا'),
  m('محمد رضا'),
])

const firozHaidar118 = m('فیروز حیدر', [
  m('شان حیدر'),
  f('ناہید بانو'),
  m('علی حیدر'),
])

// مہاجر حسین: box of five (top three, bottom two)
const muhajirHusain118 = m('مہاجر حسین', [
  m('ارمان حیدر'),
  f('اقبال فاطمہ'),
  m('محمد علی'),
  m('شہزاد اختر'),
  f('ارمان فاطمہ', 'سید نہال احمد', 'بجنور'),
])

const moajizHasan118 = m('معجز حسن', [
  firozHaidar118,
  muhajirHusain118,
  danishRaza118,
])

const masoomHasan118 = m('معصوم حسن', [moajizHasan118])

// ── کریم بخش: box of seven (top row of four, bottom row of three)
const karimBakhsh118 = m('کریم بخش', [
  m('ناطق حسین', 'لاولد'),
  f('وصی النساء', 'سید ابراہیم علی', 'چھیوڑہ'),
  f('زکی النساء', 'سید علی حسین', 'حقانی'),
  m('نور حسن', 'لاولد'), // VERIFY: first word (نور / لحد)
  f('کلثوم دولت', 'سید ابوالحسن', 'حقانی'),
  masoomHasan118,
  ghulamSadiq118,
])

const rahimBakhsh118 = m('رحیم بخش', [
  f('ساجدہ خاتون', 'سید ملازم حسین', 'گذری'),
  f('آفتاب دولت', 'سید تحسین علی', 'شاہ علی سرائے'), // VERIFY: husband's name
  f('ماجدہ خاتون', 'سید احمد', 'شفاعت پوتہ', 'زوجہ اولیٰ'),
  m('گل حسن', 'لاولد'),
])

const akbarAli118 = m('اکبر علی', [
  m('طہور حسن', 'لاولد'), // VERIFY: first name
  f('معصومہ خاتون', 'سید معصوم حسن', 'شفاعت پوتہ'),
  m('اصغر حسن', 'لاولد'),
])

// ساجد حسین (son of ماجد حسن خان)
const sajidHusain118 = m('ساجد حسین', [
  f('شہناز بانو'),
  f('شبنم بانو'),
  m('ذاکر حسین'),
  f('شبانہ بانو'),
])

const majidHasanKhan118 = m('ماجد حسن خان', [
  sajidHusain118,
  m('راشد حسین', [f('سعیدہ خاتون')]),
])

const waridHasanKhan118 = m('واجد حسن خان', [
  f('نوشین فاطمہ'),
  m('کاشف رضا'),
  m('ثاقب رضا'),
  m('آصف رضا'),
  m('عاطف رضا'),
])

const hamidHasanKhan118 = m('حامد حسن خان', [
  waridHasanKhan118,
  f('فہمیدہ خاتون', 'سید بشیر الحسن', 'منڈی چوب'),
  majidHasanKhan118,
  f('سنجیدہ خاتون', 'سید ابرار حسن', 'جلالی'), // VERIFY: husband's name (ابرار / البرار)
])

// سفیر حسن خان: box of eight (top row of five, bottom row of three)
const safeerHasanKhan118 = m('سفیر حسن خان', [
  m('سعید اختر'),
  f('معراج فاطمہ', 'سید محمد اقبال', 'بخشی'),
  f('شبیہ فاطمہ', 'سید حامد علی', 'سرسی'), // VERIFY: mohalla (سرسی)
  f('نعیم فاطمہ', 'سید گوہر عباس', 'بجنور'),
  m('عبدالوالی', [f('جوہی')]), // VERIFY: his child's name (جوہی / حوہی)
  m('محمد شفاعت', [f('فرح روبی')]), // VERIFY: second word (روبی / رومی)
  f('ادریس فاطمہ', 'سید محمد حسنی', 'گذری'), // VERIFY: husband's name (حسنی / سنی)
  m('فرزند حسن', [f('جمیل فاطمہ')]),
])

// ضمیر حسن خان: six children (box: top row of two, bottom row of four)
const zameerHasanKhan118 = m('ضمیر حسن خان', [
  f('خدیجہ خاتون', 'سید برکت حسین', 'نگردہ'), // VERIFY: first name (خدیجہ / حدیجہ)
  f('کنیز فاطمہ', 'سید محمد باقر'),
  f('صحیفہ خاتون', 'سید شاکر حسین', 'دربار کلاں'), // VERIFY: صحیفہ
  f('عزیز فاطمہ', 'سید مطاہر حسین', 'بخشی'),
  safeerHasanKhan118,
  f('مرجین فاطمہ', 'سید علی احمد', 'شاہ علی سرائے'), // VERIFY: مرجین
])

// محسن علی خان: six children on one bar
const mohsinAliKhan118 = m('محسن علی خان', [
  zameerHasanKhan118,
  f('وحیدہ خاتون', 'سید عباس علی', 'بخشی'),
  f('سعیدہ خاتون', 'سید آل احمد', 'کشکوئی', 'زوجہ ثانی'), // VERIFY: mohalla (کشکوئی)
  f('نفیسہ خاتون', 'سید انوار حسن', 'چھیوڑہ'),
  f('رئیسہ خاتون', 'سید نصرت حسین', 'بنگلہ'), // VERIFY: husband's name (سرت / نصرت)
  hamidHasanKhan118,
])

const baniBakhshKhan118 = m('بنی بخش خان', [
  f('حسینہ خاتون', 'سید عوض علی', 'دربار کلاں'), // VERIFY: first word (حسینہ / حبیبہ)
  f('شریف النساء', 'سید سعید الدین', 'نگردہ'), // VERIFY: husband's name and mohalla
  f('صغیر النساء', 'سید باقر حسین عابدی', 'نوگنیاں حال بخشی'), // VERIFY: husband's name
  mohsinAliKhan118,
])

const rasoolBakhsh118 = m('رسول بخش', [
  baniBakhshKhan118,
  m('بہادر علی', 'لاولد'),
  akbarAli118,
  rahimBakhsh118,
  karimBakhsh118,
])

// ── محمد سعادت خان's line (to the left of the main trunk)
const hussainAli118 = m('حسین علی', 'عرف بیچا', [
  rahmatAli121,
  m('منظر علی', [m('مہربان علی', [husainAliSani120])]),
  m('وزیر علی', 'لاولد'),
  m('امیر علی', [m('نیاز علی', [abulHasanFarqati119])]), // VERIFY: the note beside his name (فرقتی)
])

// ── root
const abdulHadiKhan118 = onPage(118, m('عبدالہادی خان', [
  m('محمد شہادت خان', [
    m('محمد شجاعت', [m('ہمت علی', [m('ابوعلی', [m('نیاز علی', 'لاولد')])])]),
    m('محمد فصاحت', [m('نثار احمد', 'لاولد')]),
  ]),
  m('محمد صلابت خان', [
    m('علی قوام خان', [
      m('فرزند علی خان', [
        m('قائم علی خان', 'لاولد'), // VERIFY: first word (قائم / قاسم)
        m('نور علی خان', [rasoolBakhsh118]),
      ]),
    ]),
  ]),
  m('محمد سعادت خان', [
    m('ظفر علی', 'لاولد'),
    hussainAli118,
  ]),
  asalatKhan122,
]))

// ═════════════════════════ book page 117 ═════════════════════════
// Khandan 26, محلہ شفاعت پوتہ, book page 117 (photo: shafaat pota/aulad syed abdul jaleel bin syed mubarak/page1)
//
// Chart 1 (the only chart on the page): "صفحہ ۸۶ سید عبدالجلیل بن سید مبارک", the khandan root.
//   عبدالجلیل -> عبدالجبار -> six children (اچھا ... عبداللطیف) -> عبدالوالی خاں -> محمد شفاعت -> محمد نجابت -> ...
//   Continued elsewhere: عبدالہادی خاں (صفحہ 118) and عظمت اللہ (صفحہ 128), both children of محمد شفاعت.
// Boxes: the boxed row under عابد حسین (زاہد حسین, رضی حسین, صغر حسین) wraps onto a second bar (اکبر حسین, سیدہ خاتون,
// زاہدہ خاتون) and then a tail to اصغر حسین: one sibling list, eldest first. اصغر حسین's children also wrap
// (top bar: اصلیہ, قسیمہ, ظفر حسن; second bar: شاہدہ, قاسم حسین, شاکرہ, راشدہ).

// ---- right-hand branch: رعایت -> منظور علی -> احمد علی -> عابد حسین ----

const zafarHasan117 = m('ظفر حسن', [
  f('ممتاز فاطمہ', 'سید قائم علی', 'سرسی'),
  m('حسن مہدی', [m('عروج مہدی'), f('نازنین فاطمہ')]),
  f('برجیس فاطمہ', 'سید سبط رضا', 'تریولیہ حال گذری'), // VERIFY: husband's name and mohalla (تریولیہ / ترپولیہ)
  m('حسین مہدی', [m('ظفر مہدی')]),
])

const nayabHaidar117 = m('نایاب حیدر', [
  m('عابد حسین'),
  m('اصغر حسین'),
  f('ثناء الماس'), // VERIFY: spelling (ثنا / شنا) and gender
  f('عدیل صغریٰ'), // VERIFY: spelling and gender
])

const qasimHusain117 = m('قاسم حسین', [
  f('اسلامیہ خاتون', 'سید نہال حسن', 'قاضی زادہ'), // VERIFY: her name (اسلامیہ / اسلامیر)
  f('مشاہدہ خاتون', 'سید ولی الحسن', 'قاضی زادہ'), // VERIFY: husband's name (ولی الحسن / دلہاج الحسن)
  f('مجاہدہ خاتون', 'سید مہتاب حسن', 'شفاعت پوتہ'),
  f('حاجرہ خاتون', 'سید نواب حسن', 'سرو'),
  f('تنویر فاطمہ', 'سید ظل سبطین', 'شفاعت پوتہ'), // VERIFY: husband's name
  nayabHaidar117,
])

const asgharHusain117 = m('اصغر حسین', [
  f('اصلیہ خاتون', 'سید علی تمکین', 'شاہ علی سرائے'), // VERIFY: her name (اصلوبہ?), husband (تمکین / نمکین) and which line is the mohalla
  f('قسیمہ خاتون', 'سید معظم علی', 'دانشمندان'), // VERIFY: husband's name
  zafarHasan117,
  f('شاہدہ خاتون', 'سید وسعت حسن', 'ٹکردہ'), // VERIFY: mohalla (ٹکردہ / لکڑہ) and husband's name (حسن / حسین)
  qasimHusain117,
  f('شاکرہ خاتون', 'سید سلطان حسین', 'شفاعت پوتہ'),
  f('راشدہ خاتون', 'سید علی جعفری', 'چکلی'), // VERIFY: mohalla (چکلی / چنکلی)
])

const hasanAbbas117 = m('حسن عباس', [
  f('برجیس فاطمہ'), // VERIFY: first name reads برجیس
  m('نایاب حسن', [m('روبن عباس'), f('نیلوفر')]),
  f('نسرین فاطمہ', 'سید آل سبطین زیدی', 'اجمیر'),
])

const akbarHusain117 = m('اکبر حسین', [hasanAbbas117, f('صادقہ خاتون', 'سید شکور حسن', 'دربار کلاں')])

const abidHusain117 = m('عابد حسین', [
  m('زاہد حسین', 'لاولد'),
  m('رضی حسین', 'لاولد'),
  m('صغر حسین', 'لاولد'),
  akbarHusain117,
  f('سیدہ خاتون', 'سید نذر حسن', 'سدو'), // VERIFY: mohalla (سدو / سرو)
  f('زاہدہ خاتون', 'سید محمد', 'دربار کلاں'),
  asgharHusain117,
])

const ahmadAli117 = m('احمد علی', [
  abidHusain117,
  m('علی عباس', [m('سرور حسین', 'لاولد')]),
  m('احسان علی', [f('دختر')]),
])

const manzoorAli117 = m('منظور علی', [m('سہراب علی', 'لاولد'), m('ذوالفقار علی', 'لاولد'), ahmadAli117])

// ---- محمد رعایت and his brothers ----

const riayat117 = m('محمد رعایت', [
  manzoorAli117,
  m('غلام نجف', [f('قتی', 'سید محمد حیات', 'شفاعت پوتہ')]),
  m('مقصود علی', [
    // VERIFY: the three daughters hang from a bar directly under مقصود علی with no visible father line
    f('کبیر دولت', 'سید تاج محمود ثالث', 'دانشمندان'),
    f('معصوم دولت', 'سید حیدر نذر', 'سنبھلی'), // VERIFY: husband's name and mohalla
    f('دولت النساء', 'سید شمس علی خاں اول', 'دربار کلاں'),
  ]), // VERIFY: father's name reads رعایت / عابت
])

const kifayat117 = m('محمد کفایت', [f('بندی', 'سید غلام علی', 'دانشمندان')])

// ---- محمد عبادت (اول) ----

const siyadat2 = m('محمد سیادت', 'ثانی', [
  m('احسن اختر'),
  m('حسنین اختر'),
  f('سلیم زہرا'),
  f('فوزیہ سیادت'),
  f('کنیز سیادت'),
])

const shafaat2 = m('محمد شفاعت', 'ثانی', [
  m('علی شفاعت'),
  f('مہر خشاں'),
  m('محمد'),
  f('مارسہ خاتون'), // VERIFY: first letter (مارسہ / فارسہ / نارسہ)
  m('احمد'),
])

const ibadat2 = m('محمد عبادت', 'ثانی', [
  f('کنیز سیدہ', 'سید مناظر حسن خاں', 'دربار کلاں'),
  shafaat2,
  f('نور سیدہ', 'سید فاضل حسین', 'ہوڑہ حال شفاعت پوتہ'), // VERIFY: mohalla (ہوڑہ / ہوکرہ)
  m('مبارک', [m('حسن مبارک'), f('بتول عذرا'), m('محسن مبارک')]),
  f('نور افشاں', 'سید سبط غلام', 'تریولیہ'), // VERIFY: husband's name (غلام / فرغام) and mohalla
  m('حسنین اختر', [m('شارق احمد'), m('عالم اختر')]),
  siyadat2,
])

const hasanChain117 = m('محمد حسن', [
  m('حسن', 'اولاد حسن', [
    f('تحفہ خاتون', 'سید صغر حسین', 'گذری'), // VERIFY: name (تحفہ / تحیہ) and husband (صغر / صمد)
    ibadat2,
    f('کنیز فاطمہ', 'سید مباحر حسین', 'بگلہ', 'زوجہ اولیٰ'), // VERIFY: husband's name (مباحر / مظاہر / مبارک)
  ]),
])

const askariChain117 = m('محمد عسکری', [
  m('حسن', [m('روح الحسن', 'لاولد'), m('علی ابن الحسن', [m('محمد باقر', 'لاولد')])]),
])

const siyadat1 = m('محمد سیادت', 'اول', [
  hasanChain117,
  f('ظہور النساء', 'سید نذر حسین', 'مجھیر پٹی'), // VERIFY: mohalla
  askariChain117,
])

const ibadat1 = m('محمد عبادت', 'اول', [
  f('دختر', 'سید امام علی', 'دربار کلاں'), // VERIFY: a stray word is written beside her husband's name
  f('پیر دولت', 'سید مہر علی', 'مجھیر پٹی'), // VERIFY: mohalla
  f('دختر', 'سید امین الدین', 'دانشمندان'),
  siyadat1,
])

const najabat117 = m('محمد نجابت', [f('کریم النساء'), riayat117, kifayat117, ibadat1, f('حیات النساء')])

const shafaat1 = m('محمد شفاعت', [
  abdulHadiKhan118,
  onPage(128, m('عظمت اللہ', [azmatullah128])),
  najabat117,
])

const abdulWali117 = m('عبدالوالی خاں', [
  m('محمد یوسف', 'لاولد'),
  shafaat1,
  f('بی بی کھڑولی', 'سید عبدالرزاق'), // VERIFY: a second line "گیر عبدالرزاق" is printed under her husband
  m('غلام محی الدین', 'عرف خالق داد', [ // VERIFY: the "عرف" line sits beside the father's arrow; it may belong to کھڈو
    f('کھڈو', 'سید عبدالخالق', 'دربار کلاں'),
    m('فقیر عالم', 'لاولد'),
    f('دختر', 'سید عظمت اللہ', 'شفاعت پوتہ'),
  ]),
])

const abdulJabbar117 = m('عبدالجبار', [
  m('اچھا', 'لاولد، شہید'),
  f('جمعی'),
  f('بنی'), // VERIFY: spelling (بنی / بہنی)
  abdulWali117,
  f('چھوٹی'),
  m('عبداللطیف', 'لاولد'),
])

const abdulJaleel117 = m('عبدالجلیل', [abdulJabbar117]) // father سید مبارک; chart headed "صفحہ ۸۶"

const khandan: BookKhandan = {
  serial: 26,
  mohalla: 'Shafat Pota',
  trees: [{ page: 117, father: 'مبارک', root: abdulJaleel117 }],
}

export default khandan

// Kausar-ul-Ansab (1999), pages 92-93: محلہ گذری
// Khandan 21 in the book's index: اولاد سید ہزبر علی بن سید غضنفر علی
//
// Two photos: page 92 (the khandan starts in the lower half, "صفحہ 86 سید ہزبر علی بن سید غضنفر علی";
// the upper half of page 92 is the tail of khandan 20, "صفحہ 91 سید اولاد علی بن سید عبداللہ", and is
// NOT transcribed here) and page 93 (continuation trees, all headed "صفحہ 92 ...").
//
// Children are listed row by row (each row right to left); where the book wraps a bar onto a
// second or third row the later rows follow. Birth order inside wrapped bars is therefore uncertain.
// Pen crosses and circled reader's marks are ignored.
//
// Families continued on pages that are not in the photos (stubs):
//  - شجاعت علی (صفحہ 105)              khandan 24
//  - علی مرتضیٰ خاں (صفحہ 114)          khandan 25
//  - اسداللہ خان میر کلو (صفحہ 95)       khandan 23
//  - مہدی (صفحہ 94 as the book prints it; the index lists khandan 22 at page 93)

import { f, m, onPage, type BookKhandan } from './book'

// ---- Page 92: ہزبر علی بن غضنفر علی ----

// Sons of صابر حسین
const zairHusain = m('زائر حسین', [
  f('فردوس بانو', 'سید سخاوت حسین', 'بکنالہ'),
  m('محمد عبداللہ', [
    m('محمد جعفر', 'عرف چاند میاں'), // VERIFY: drawn as a small arrow under محمد عبداللہ; may be a note rather than a son
  ]),
]) // VERIFY: name reads زائر / ظاہر / ذاکر

const manazirHusain = m('منظاہر حسین', [
  onPage(93, m('مناظر حسین')), // VERIFY: box reads مناظر / ناظر; page 93 heading says "مناظر حسین بن سید طاہر حسین"
  f('حسن فاطمہ', 'سید سبط رضا', 'پچدرہ'),
]) // VERIFY: name reads منظاہر / مظاہر / طاہر

const sabirHusain = m('صابر حسین', [
  zairHusain,
  onPage(93, m('علی حسین')),
  m('مصطفیٰ علی', 'لاولد'),
  manazirHusain,
])

const umeedAli = m('امید علی', [
  f('دختر', 'سید مہدی علی', 'دانشمندان'),
  sabirHusain,
  m('عابد حسن', 'لاولد'),
])

const naseebAli = m('نصیب علی', [
  m('باسط علی', [
    m('بشیر علی', [f('دختران', undefined, undefined, 'نام درج نہیں')]),
  ]),
])

const ghazanfarAli = m('غضنفر علی', [
  naseebAli,
  m('عباس علی', 'لاولد'),
  f('دختر', 'سید وزیر علی', 'دانشمندان'),
  umeedAli,
])

// ---- Branch of ہزبر علی ثانی ----
const dadAli = m('داد علی', [
  m('دراج حسن', 'لاولد'), // VERIFY: دراج / جراح
  f('نجم زہرا', 'سید مبارک حسین', 'کولیہ'), // VERIFY: husband "مبارک حسین" and the small mohalla word are hard to read
  f('ہلال زہرا', 'سید مبارک حسین', 'چھیوڑہ'), // VERIFY: husband name (same as نجم زہرا?)
  m('جراح حسین', [onPage(93, m('اقتدار حسین'))]),
  // second row
  f('خورشید زہرا', 'سید طاہر حسین', 'لنگوئی حال دربار کلاں'),
  m('در حسن', 'لاولد'),
])

const qurbanAli = m('قربان علی', [
  m('ممتاز علی', 'لاولد'),
  dadAli,
  m('امتیاز علی', 'لاولد'),
  m('اعجاز علی', 'لاولد'),
])

const mehrbanAli = m('مہربان علی', [
  f('کنیز کبریٰ', 'سید محمد حسین', 'گذری'),
  m('اشفاق علی', [
    f('معصوم دولت', 'سید علی اکبر', 'شاہ علی سرائے'),
    f('خدیجۃ الکبریٰ', 'سید کرار حسین', 'گذری'),
  ]),
])

const hizabrAliSani = m('ہزبر علی ثانی', [
  mehrbanAli,
  onPage(93, m('انتظام علی')),
  qurbanAli,
])

const ahmadi = m('احمدی', [ghazanfarAli, hizabrAliSani])

// ---- Branch of غلام قطب الدین ----
const ghulamQutbudDin = m('غلام قطب الدین', 'عرف بینگا', [ // VERIFY: "عرف بینگا" over his name
  m('رمضان علی', [
    f('ریبو', 'سید امید علی', 'گذری'),
    f('دختر'),
  ]),
  m('قاسم علی', [
    m('دلاور علی', 'لاولد'),
    f('رحیم النساء', 'سید نثار علی', 'صابو نگراں'),
  ]),
  m('غلام محی الدین', [f('دختر')]),
])

const ataMohiuddin = m('عطا محی الدین', 'عرف بھیکا', [
  ahmadi,
  onPage(94, m('مہدی')), // VERIFY: name reads محمدی / مہدی (index: خاندان 22 مہدی بن عطا محی الدین); page printed as 94 under it while the index lists 93
])

// ---- Branch of تہور علی ----
const tahawwurAli = m('تہور علی', 'عرف بہادر', [
  m('اکبر علی', [
    f('ولیس النساء', 'سید علی الدین', 'گذری', 'عرف بجنگلی'), // VERIFY: first name and the "عرف" word above it
    f('بندی', 'سید جعفر علی', 'گذری گھیر مناف'), // VERIFY: husband name and mohalla
  ]),
  m('اصغر علی', [
    f('عجائب النساء', 'سید بنیاد علی خاں', 'گھڑیال منزل'),
    m('علی الدین', 'لاولد'),
  ]),
])

const muradAli = m('مراد علی', [
  m('ظفر علی', 'عرف دولہا، لاولد'),
  m('انور علی', 'عرف بولا', [m('حسین علی', 'لاولد')]),
  tahawwurAli, // VERIFY: drawn on the bar's far end (below), so he may be the eldest rather than the youngest
])

const mustafaAli = m('مصطفیٰ علی', [
  f('رحمت النساء', 'سید فیروز علی', 'گذری'),
  m('زین العابدین', 'عرف امامی', [m('امامت علی', [m('امداد علی', 'لاولد')])]),
  ataMohiuddin,
  m('غلام معین الدین', 'عرف گمان، لاولد'),
  m('عطا نظام الدین', 'عرف غلامی', [
    f('فاطمہ', 'سید امانت علی', 'گذری'),
    f('زینب', 'سید افضل علی', 'گذری'),
  ]),
  ghulamQutbudDin,
  f('زہرا خاتون', 'سید مبین علی', 'گذری', 'عرف نذران'), // VERIFY: husband "مبین علی" and the "عرف" word above her
  onPage(95, m('اسداللہ خان', 'عرف میر کلو')),
])

// ---- Page 93 (heading "صفحہ 92 ...") ----
// انتظام علی بن ہزبر علی ثانی: خادم علی and his line
const mukhtarAli = m('محمد مختار', 'عرف اختر حسن', [
  m('منتظر مہدی'),
  m('علی جبار'),
  m('عسکری مہدی'),
  m('علی سرکار'), // VERIFY: سرکار / سرگار
  m('علی اظہر'),
  // second bar
  f('پروین سکینہ'),
  f('فلین سکینہ', 'سید شہزاد حسین عابدی', 'حلالی'), // VERIFY: name reads فلین / قدین
  f('نسرین سکینہ', 'سید قمر حیدر عابدی', 'نوگانواں'),
  f('شیریں سکینہ', 'سید پرویز حیدر', 'سرسی'), // VERIFY: husband name and mohalla
  f('مرجبین سکینہ'), // VERIFY: مرجبین / مرحبین
  // third bar
  m('علی سردار', [m('محمد حامد')]),
  f('تحسین سکینہ'),
  m('علی کرار', [m('شاہ رخ'), m('زین'), f('رضا فاطمہ')]),
])

const hamidHasan = m('حامد حسن', [
  m('محمود حسن', 'لاولد'),
  m('مطلوب حسن', 'لاولد'),
  m('خورشید حسن', 'لاولد'),
  mukhtarAli,
])

const majidHasan = m('ماجد حسن', [
  m('محمد احمد', [m('محمد جاوید')]),
  f('بنت زینب', 'سید محمد مہدی', 'کٹرہ'), // VERIFY: husband and mohalla
  m('محمد عابد'),
  f('ذہینہ خاتون'),
  m('محمد حسنین'),
])

const kirarHasan = m('کرار حسن', [
  // first bar
  m('محامد حسن', 'لاولد'),
  f('زہرا خاتون', 'سید سعید حسن', 'سنبھل'), // VERIFY: husband name and mohalla
  f('مظاہرہ خاتون', 'سید ذکی حسن', 'گذری'), // VERIFY: husband name
  // on the wrap connector
  m('حاجی حسن', [m('علی مہدی', [m('ضیغم')])]), // VERIFY: drawn on the connector under محامد حسن (who is لاولد); ضیغم reading
  // second bar
  f('ناطقہ خاتون', 'سید نفیس حسن', 'کٹرہ'),
  f('فاطمہ خاتون', 'سید شفیق حسن', 'کٹرہ', 'زوجہ اولیٰ'),
  f('نرگس خاتون', 'سید شفیق حسن', 'کٹرہ', 'زوجہ ثانی'),
  f('راحیہ خاتون', 'سید منظور حسن', 'گذری'),
  hamidHasan,
  majidHasan, // VERIFY: wrap order
])

const muhammadKazim = m('محمد کاظم', [
  m('محمد دلشاد'),
  m('محمد اقبال'),
  m('محمد شہزاد'),
  m('محمد اسلم'),
  // second bar
  f('زرین فاطمہ'),
  f('نزہت پروین', 'سید حیدر رضا', 'سندو', 'زوجہ ثانی'), // VERIFY: mohalla
  f('نسرین فاطمہ', 'سید عظیم حیدر', 'دانشمندان'),
  m('سعید اختر'),
]) // VERIFY: the second bar of four may belong to a different parent

const muhammadYusuf = m('محمد یوسف', [
  m('جاوید اختر'),
  f('کنیز فاطمہ', 'سید سبط حیدر', 'گذری'),
  f('شاہین فاطمہ', 'سید سعید باقر', 'شفاعت پوتہ'),
  m('شاداب اختر'),
])

const manzoorHusain = m('منظور حسین', [
  muhammadKazim,
  f('مرضیہ خاتون', 'سید حسن مہدی', 'چھیوڑہ'),
  muhammadYusuf,
])

const muhammadMehdi = m('محمد مہدی', [
  f('ذہین فاطمہ', 'سید مختار احمد', 'گذری'),
  f('تسلیم فاطمہ'),
  f('نعیم فاطمہ', 'سید اقبال مہدی', 'شفاعت پوتہ'),
  // second bar
  m('رضا مختار'),
  m('شباب رضا'),
])

const sibtHaidar = m('سبط حیدر', [
  m('محمد حیدر'),
  f('شیریں تبسم'),
  m('علی حیدر'),
  m('حسن حیدر'),
])

const ghulamHaidar = m('غلام حیدر', [
  m('مسعود مختار', [f('فقنہ مسعود')]), // VERIFY: name فقنہ and gender
  // second bar
  f('شمع زہرا', 'سید کمال نفیس', 'دربار کلاں'),
  m('محسن مختار'),
  f('دردانہ نرجس'),
  f('ندا حیدر'), // VERIFY: gender (no سید under the name)
])

const ghulamAbbas = m('غلام عباس', [
  f('نگہت نرجس', 'سید اصف حسن خاں', 'چھیوڑہ'), // VERIFY: husband name
  m('محمد عباس'),
  m('حیدر عباس'),
  f('فرحت نرجس'),
  m('عابد عباس'),
  f('طلعت نرجس'),
  f('زینت نرجس'),
  f('انور بانو'),
])

const mushkoorHusain = m('مشکور حسین', [
  sibtHaidar,
  f('شمیم فاطمہ', 'سید شان رضا', 'بگلہ'),
  ghulamHaidar,
  ghulamAbbas,
])

const mukhtarHasan = m('مختار حسن', [
  manzoorHusain,
  f('صحیفہ خاتون', 'سید زیرک حسین', 'گذری'), // VERIFY: husband name
  f('مشکورہ خاتون', 'سید زین الحسن', 'بگلہ'),
  muhammadMehdi,
  mushkoorHusain,
])

const jararHasan = m('جرار حسن', [
  f('صابرہ خاتون', 'سید ولی حسن', 'گذری'),
  mukhtarHasan,
  f('طیبہ خاتون', 'سید حاجی حسن', 'گذری'),
])

const khadimAli = m('خادم علی', [
  kirarHasan,
  f('صغریٰ خاتون', 'سید محمد احسن', 'پچدرہ'),
  jararHasan,
])

const khandan: BookKhandan = {
  serial: 21,
  mohalla: 'Guzri',
  trees: [
    {
      page: 92,
      father: 'غضنفر علی',
      root: m('ہزبر علی', [
        onPage(105, m('شجاعت علی')),
        muradAli,
        onPage(114, m('علی مرتضیٰ خاں')),
        mustafaAli,
      ]),
    },
    // انتظام علی بن ہزبر علی ثانی
    { page: 93, father: 'ہزبر علی ثانی', root: m('انتظام علی', [khadimAli]) },
    // مناظر حسین بن منظاہر حسین
    {
      page: 93,
      father: 'منظاہر حسین', // VERIFY: heading reads "طاہر حسین"
      root: m('مناظر حسین', [
        f('ہلال فاطمہ'),
        m('محمد حسنین'),
        f('کمال فاطمہ'),
        m('قمر حسنین'),
        m('فہیم حیدر'),
      ]),
    },
    // علی حسین بن صابر حسین
    {
      page: 93,
      father: 'صابر حسین',
      root: m('علی حسین', [
        f('ممتاز بانو'),
        m('ریاض حیدر'),
        f('شوکت بانو'),
        f('شاہین زہرا'),
      ]),
    },
    // اقتدار حسین بن جراح حسین
    {
      page: 93,
      father: 'جراح حسین',
      root: m('اقتدار حسین', [
        f('عفت نواز فاطمہ'),
        f('رفعت نواز فاطمہ'),
        f('نزہت نواز فاطمہ'),
        f('طلعت نواز فاطمہ'),
      ]),
    },
  ],
}

export default khandan

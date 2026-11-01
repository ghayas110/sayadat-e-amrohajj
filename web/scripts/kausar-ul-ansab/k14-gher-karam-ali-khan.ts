// Kausar-ul-Ansab (1999), page 80: محلہ گھیر کرم علی خاں
// Khandan 14 in the book's index: اولاد سید محمد حسین بن سید محمد شاہ
//
// Page 80 is headed "صفحہ 79 سید محمد حسین بن سید محمد ماہ [شاہ]"; the family comes over from page 79,
// which is not among the photos. From سید محمد حسین two arrows run down: to کرم علی خاں (whose
// descendants fill this page) and to his daughter شاہ گسائیں, زوجہ سید زین العابدین، دربار کلاں.
// A ① beside کرم علی خاں and ones beside نبی ہادی and محمد تقی ہادی are reader's marks and are not included.

import { f, m, type BookKhandan } from './book'


// His children are drawn as one wide row under the line from علی ہادی
const aliHadi = m('علی ہادی', [
  f('طلعت سیدہ'),
  m('ضیاء ہادی'),
  // VERIFY: the line from the right end of علی ہادی's row runs down to the next five, read as his children
  m('مرتضیٰ ہادی'),
  f('نگہت سیدہ', 'سید گوہر حسن', 'گذری'), // VERIFY: husband's name
  m('رضا ہادی', [f('نگین سیدہ'), f('صحرا بانو'), f('سائرہ بانو'), m('زین رضا ہادی')]),
  f('عظمت سیدہ', 'سید اعجاز حسن خاں', 'چھیوڑہ'), // VERIFY: husband's name
  f('نزہت سیدہ'),
])

const muhammadTaqiHadi = m('محمد تقی ہادی', [
  f('صدیقہ خاتون', 'سید عنفوان علی', 'گذری'), // VERIFY: husband's name
  f('سکینہ خاتون', 'سید لقی حسن', 'گذری'), // VERIFY: both names
  f('حاجرہ خاتون', 'سید گلزار احمد', 'کنکوئی'),
  f('سعیدہ خاتون', 'سید محمد متین', 'بچھدرہ'), // VERIFY: first name and place
  aliHadi,
  m('امام ہادی', [f('رباب بانو'), f('کلثوم بانو'), f('حنا زہرا')]),
  m('حسین ہادی', [f('سکینہ سیدہ'), f('عرسلہ سیدہ'), f('شہلا سیدہ'), f('اسماء سیدہ')]),
  m('حسن ہادی', [m('محمد ہادی'), f('نسرین سیدہ'), f('یاسمین سیدہ', 'سید سجاد حیدر', 'کنکوئی')]),
])

const nabiHadi = m('نبی ہادی', [
  f('نادرہ خاتون', 'سید فیضان حسنین', 'چھیوڑہ'), // VERIFY: husband's name
  f('آمنہ خاتون', 'سید ملا حسن', 'بگلہ'), // VERIFY: husband's name
  muhammadTaqiHadi,
  m('عسکری ہادی', 'لاولد'),
  m('علی تقی ہادی', 'لاولد'),
])

const hadiAli = m('ہادی علی', [
  f('ملیحہ خاتون', 'سید مہربان حسن خاں', 'چھیوڑہ'),
  f('معصومہ خاتون', 'سید ارتضیٰ علی', 'گذری'),
  f('صغریٰ خاتون', 'سید وصی حیدر', 'گھیر کرم علی خاں'),
  nabiHadi,
])

// VERIFY: صغی حیدر's children are the long bottom row, read as one generation
const saghiHaidar = m('صغی حیدر', [
  m('سبط حیدر'),
  f('ناہید فاطمہ'),
  m('نہال حیدر', [m('افضال حیدر'), m('عباس حیدر')]),
  f('صغیرہ زینب', 'سید ذکی حیدر', 'گھیر کرم علی خاں', 'عرف ننا'),
  m('ابن حیدر', [m('محمد علی حیدر'), f('فرح بانو')]),
  f('ذکیہ خاتون', 'سید فضاء الحسین', 'گھیر مناف'),
])

const zakiHaidar = m('ذکی حیدر', [
  m('ضیاء حیدر', [m('ثنا حیدر'), f('نشاط انجم'), m('محمد ارشد')]), // VERIFY: ثنا حیدر
  f('رضیہ زینب', 'سید جراز حیدر عابدی', 'نوگنیاں'), // VERIFY: husband's name
  f('شافعہ زینب', 'سید حضور الحسن', 'مجاپوتہ'),
  f('کنیز زینب', 'سید امان حیدر', 'مجاپوتہ'),
  f('ساجدہ زینب', 'سید حسین علی', 'بگلہ'),
  m('ولی حیدر', [m('عظیم حیدر'), f('نگار فاطمہ'), m('عزادار حیدر'), f('مدحت فاطمہ')]),
  m('شبیہ حیدر', [m('ہلال حیدر'), f('نگہت فاطمہ'), m('علی حیدر')]),
])

const wasiHaidar = m('وصی حیدر', [
  f('نادرہ خاتون', 'سید ثقہ علی', 'گذری'), // VERIFY: husband's name
  zakiHaidar,
  f('شاکرہ خاتون', 'سید علی زین', 'دانشمندان'), // VERIFY: husband's name
])

const aliHaidar = m('علی حیدر', [
  wasiHaidar,
  f('قاسمہ خاتون', 'سید دکاء الحسین', 'گھیر مناف'), // VERIFY: husband's name
  f('ناظمہ خاتون', 'سید شفیق الحسن خاں', 'دربار کلاں'),
  m('ابن حیدر', 'لاولد'),
  f('شاہدہ خاتون', 'سید مسعود حسن', 'سدو'),
  saghiHaidar,
])

const baniyadAli = m('بنیاد علی', [
  m('مہدی علی', [f('صابرہ زینب', 'سید ابن حیدر', 'گھیر کرم علی خاں')]),
  f('ظریف النساء', 'سید باقر حسن خاں', 'دربار کلاں'),
  hadiAli,
  f('کلثوم', 'سید ذوالفقار علی', 'منڈی چوب'),
  aliHaidar,
])

const siyadatAli = m('سیادت علی', [
  baniyadAli,
  f('چھنگی', 'سید لخت', 'کنکوئی'), // VERIFY: husband's name
  m('کرم علی', [
    f('گوہر النساء', 'سید دلدار حسین', 'بگلہ'),
    f('عمدۃ النساء', 'سید مہدی علی', 'گھیر کرم علی خاں'),
  ]),
])

const karamAliKhan = m('کرم علی خاں', 'ہمشیرہ: شاہ گسائیں، زوجہ سید زین العابدین، دربار کلاں', [
  m('ظفر علی', [m('کرامت علی', 'لاولد'), f('وزیر النساء', undefined, undefined, 'عرف وزیرن')]), // VERIFY: عرف وزیرن
  m('عارف علی', 'لاولد'),
  m('دلدار علی', 'لاولد'),
  f('فتح دولت', 'سید مظفر علی', 'گذری'),
  m('شمشیر علی', [siyadatAli]),
  m('مصاحب علی', 'لاولد'),
])

const khandan: BookKhandan = {
  serial: 14,
  mohalla: 'Gher Karam Ali Khan',
  trees: [{ page: 80, father: 'محمد حسین', root: karamAliKhan }],
}

export default khandan

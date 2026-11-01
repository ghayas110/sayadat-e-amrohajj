// Kausar-ul-Ansab (1999), page 339: محلہ بارہ پوتی (حال قاضی زادہ)
// Khandan 60 in the book's index: اولاد سید مہدی حسن بن مبارک حسن
//
// Only one photo (page1.jpeg). Its upper tree (سید معشوق حسین بن سید امداد علی, محلہ شاہی چبوترہ) belongs to
// khandan 59 and is not included. The note at the foot of the page says the family came from
// محلہ شفاعت پورہ (مؤذن of مسجد اشرف المساجد) and moved to بارہ پوتی; not transcribed as a person.

import { f, m, type BookKhandan } from './book'

const khandan: BookKhandan = {
  serial: 60,
  mohalla: 'Bara Poti',
  trees: [
    {
      page: 339,
      root: m('مبارک حسن', [
        m('مہدی حسن', [
          f('حاجرہ خاتون', 'سید ممتاز حسین', undefined, 'بجدہ'), // VERIFY: husband's place word under her name (read as بجدہ)
          f('فاطمہ خاتون', 'سید عاشق حسین', undefined, 'کشمی'), // VERIFY: place word under husband (read as کشمی/خشبی)
          m('ہادی حسن', [
            m('عابد حسن', [
              m('علمدار حسن', [
                m('زیدار حسین'), // VERIFY: first letter (زیدار / زدار)
                m('حسنین رضا'),
                f('نسیم زہرا'),
                m('آصف رضا'),
                m('حسن رضا'),
              ]),
              f('معینہ خاتون', 'سید غلام حسین', 'مجا پوتہ'),
              f('پروین خاتون', 'سید شمیم رضا', 'خانقاہی'), // VERIFY: mohalla خانقاہی
            ]),
            f('راشدہ خاتون', 'سید ابرار حسین', 'قاضی زادہ'),
            m('سعید حسن', 'لاولد'),
            f('عابدہ خاتون', 'سید سرور حسین', 'شفاعت پورہ'),
            m('حامد حسن', [
              m('شبر حسن', 'لاولد'),
              m('جعفر حسین'),
              m('کوثر حسن', [m('صفدر عباس'), m('حیدر عباس')]),
              f('باہرہ خاتون', 'سید علی رضا', 'مچھرہٹہ'), // VERIFY: mohalla spelling
              f('یاسرہ خاتون', 'سید باقر حسین', 'مجا پوتہ'),
              m('شان رضا', [m('اقبال رضا'), f('رضیہ بانو'), m('عارف رضا')]),
              m('یاور حسین'),
              m('ثمر حسن'),
            ]),
          ]),
          f('آمنہ خاتون', 'سید محمد حسین', 'قاضی زادہ حال سرائے کہنہ'),
          m('عسکری حسن'),
          m('ظہر حسن', [m('آفتاب حسن'), m('مہتاب حسن')]), // VERIFY: مہتاب
        ]),
        f('دختر', 'سید مبارک حسین', 'مجا پوتہ'),
      ]),
    },
  ],
}
export default khandan

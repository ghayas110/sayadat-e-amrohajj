// Kausar-ul-Ansab (1999), page 334: محلہ کالی پگڑی (سادات حسنی)
// Khandan 56 in the book's index: اولاد سید عبداللہ شیرازی بن سید محمد
//
// The whole khandan is one dense page. Where a father's children do not fit on one line the book
// draws a second (and third) row hooked to the first; those rows are read as the same father's
// further children, in row order (each row right to left).
// The ancestry chain above عبداللہ شیرازی (back to حضرت امام حسن) is not transcribed.

import { f, m, type BookKhandan } from './book'

// منظور حسن بن مسعود حسن
const manzoor = m('منظور حسن', [
  m('مشرف حسن'),
  m('مسرت حسن', [
    m('بشر علی'), // VERIFY: reading of the first name (بشر / مبشر علی)
    f('مہوش'),
    f('مریم'),
    f('ندا'),
  ]),
  m('مطاہر حسن', [
    m('فیصل مطاہر'),
    m('فاروق مطاہر'),
    m('فرائز مطاہر'), // VERIFY: فرائز
    f('سمیرہ'),
  ]),
]) // VERIFY: the line of these three sons passes under منظور حسن and is hooked to منور حسن's row; read as منظور's sons

const mahmood = m('محمود حسن', [
  m('ریاض قیصر'),
  f('تنویر فاطمہ', 'سید مستجاب حیدر', 'شناعت پورہ'), // VERIFY: mohalla spelling
  m('رضی حسین', [m('جمشید رضی')]),
  f('بمن فاطمہ'), // VERIFY: second row of the book, read as further children of محمود حسن
  f('تصویر فاطمہ'),
])

const mushood = m('مشہود حسن', [
  m('مطلوب حسن'),
  m('اختر حسن'),
  m('سرور حسن', [
    m('حمید اختر'),
    m('محمد سہیل اختر'),
    m('زعیم اختر'),
  ]),
  f('صنیبہ خاتون', 'سید شاہد حسین', 'سرائے کہنہ'),
  m('مسعود حسن', [m('محمد حسن طارق'), manzoor]),
  m('مشکور حسن'),
  m('منظور حسن', [m('مکرم حسن')]), // VERIFY: name looks like امنظور / منظور
])

const mahboob = m('محبوب حسن', [
  f('پروین جمال'),
  f('خورشید فاطمہ'),
  m('ظفر حسین'), // VERIFY: ظفر / طفر
  m('نسیم حسن'), // VERIFY: نسیم / زیم
  f('زاہدہ خاتون', 'سید ابن محمد'),
  f('نزہت کمال'),
])

const shahid = m('شاہد حسن', [
  m('پرویز حسن'),
  f('نگہت صغریٰ'),
  m('تنویر حسن', [f('عریضہ بتول')]),
  f('نجمہ بانو'), // VERIFY: نجمہ / بچمہ
  m('توقیر حسن'),
  m('سہیل حسن', [m('محسن مرتضیٰ'), f('سبیکہ')]),
  f('رخشندہ خاتون', 'سید فرمان کاظم', 'کنکوئی'), // VERIFY: رخشندہ / راشدہ; husband's mohalla (کنکوئی / لنکوئی)
  m('جاوید حسن', [m('نازش حسن'), m('احسن حسن')]),
])

const tahir = m('طاہر حسن', [
  f('فرزانہ بانو'),
  f('رضانہ بانو', 'محمد جاوید', 'اجمیر'),
  f('ریحانہ بانو', 'محمد نسیم خان', 'آنکرہ'), // VERIFY: wife's first name, husband's mohalla (آنکرہ)
  f('شمیم بانو', 'محمد صابر'),
  m('منور حسن', [
    m('خالد حسین'),
    m('اکبر'),
    m('ایاز حسن'),
    m('طارق حسن'),
    m('انیس حسن'),
  ]),
]) // VERIFY: rows 2 and 3 of طاہر حسن's children are read as his further children

const maqbool = m('مقبول حسن', [
  f('کلثوم', 'سید سیف', 'دربار کلاں'),
  m('عارف حسن'),
  mahboob,
  mushood,
  f('حاجرہ خاتون', 'سید آل نبی جعفری', 'بخشی'), // VERIFY: mohalla بخشی
  mahmood,
  m('معروف حسن', [f('حاجرہ خاتون')]),
  tahir,
  shahid,
]) // VERIFY: طاہر and شاہد are on a second row hooked to مقبول's row, read as his further sons

const muhibAli = m('محب علی', [
  maqbool,
  m('احمد حسن', [
    f('دختر'),
    m('عضنفر حسن'),
    m('ظفر حسن'), // VERIFY: ظفر / طفر
    m('منور حسن'),
  ]),
  m('مرتضیٰ حسن', [
    m('محمد طیب'),
    f('شاہدہ خاتون', 'سید محبوب حسن', 'کالی پگڑی'),
  ]),
  f('حسینہ خاتون', 'سید علی احمد کاظمی', 'کنکوئی'),
  f('رقیہ خاتون', 'سید علی حسن زیدی', 'قاضی زادہ'),
  m('محمد حسن', [
    m('منظور حسن', [m('مظہر حسن')]),
    m('منصور حسن', [m('کامران حسن')]),
    m('انور حسن', [m('عامر حسن')]),
  ]),
])

const wilayatAli = m('ولایت علی', [
  f('نجم النساء', 'سید یاد علی', 'چاہ شور'), // VERIFY: husband's name (یاد / یار علی)
  m('مظہر علی', [
    m('ابن علی'),
    f('صغریٰ خاتون', 'سید مہدی حسن', 'کالی پگڑی حال سنبھل'),
    muhibAli,
  ]),
  m('ظہور علی', [
    m('اظہر علی', 'لاولد'),
    m('عاشق علی', 'مفقود الخبر'),
  ]),
  m('طالب علی', 'لاولد'),
])

const hafeezullah = m('حفیظ اللہ', [
  m('بخش علی', [
    f('عمدۃ النساء', 'سید مظہر علی', 'کالی پگڑی'),
    m('شمس علی', [
      m('ارشاد علی', [
        m('حامد علی', 'لاولد'),
        m('احمد علی', [
          f('بانو', 'سید منور حسن', 'کالی پگڑی'),
          m('حسن', [
            m('ذلیشان حسن', [
              f('سیما بانو'),
              f('فرزانہ بیگم'),
              f('تسلیم بانو'),
              f('اسما بانو'),
              f('مہ جبین بانو'), // VERIFY: second row of the book, read as further children of ذلیشان حسن
              m('منور علی'),
              f('یاسمین بانو'),
              m('ظفر حسن'),
            ]),
            m('شان حسن'),
          ]), // VERIFY: name حسن (could be حسین)
          f('تحسینہ خاتون'),
        ]),
        m('محمد علی', 'مفقود الخبر'),
      ]),
    ]),
  ]),
  m('امداد علی', [f('کوڑی', 'سید شمس علی', 'کالی پگڑی')]), // VERIFY: name کوڑی
])

const amanatAli = m('امانت علی', [wilayatAli, hafeezullah])

const shahNasrullah = m('شاہ نصر اللہ', [
  m('شاہ شکر اللہ', [
    m('افضل', [
      m('قطب', [
        m('غوث علی', [amanatAli]),
      ]),
    ]),
  ]),
]) // VERIFY: شاہ نصر اللہ (نیر اللہ?)

const alam = m('عالم', 'سنبھل چلے گئے', [
  m('اللہ بخش', [
    m('عبدالباری', [
      m('پیر بخش', [
        m('غلام حسین', [
          m('شاد حسین', [
            m('مہدی حسن', [
              f('فاطمہ', 'سید قدرت علی', 'قاضی زادہ حال چاہ شور'),
            ]),
          ]),
        ]),
      ]),
    ]),
  ]),
])

const khandan: BookKhandan = {
  serial: 56,
  mohalla: 'Kali Pagri',
  trees: [
    {
      page: 334,
      father: 'محمد',
      root: m('عبداللہ شیرازی', [alam, shahNasrullah]),
    },
  ],
}

export default khandan

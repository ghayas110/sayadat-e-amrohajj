// Kausar-ul-Ansab (1999), page 82: محلہ ستھی حال نیاریاں (روشن سرائے) و گھیر بدر علی گستیاں
// Khandan 16 in the book's index: اولاد سید روشن علی بن سید محمد چاند
//
// Only this one page was photographed. A "صفحہ ۹" note beside سید روشن علی and a ① mark beside
// منیر علی and بدر علی are reader's marks and are not included.
// The page's lower tree (سید نیاز علی بن سید امان علی) is headed "صفحہ ۸۱" in the book; it is kept
// as its own tree here. Its bottom rows run to the foot of the photo; nothing is known to be cut off.

import { f, m, type BookKhandan } from './book'

// Page 82: سید ناصر حسین, drawn as two chained rows (four, then three children)
const naasirHusain = m('ناصر حسین', [
  f('گل فاطمہ', 'سید گوہر حسن', 'منڈی چوب'), // VERIFY: husband's name
  m('اظہر اقبال'), // VERIFY: اظہر vs اطہر (a different man from the اطہر اقبال in the second row)
  f('نرگس فاطمہ', 'سید تاج مہدی', 'گذری'),
  f('شاز فاطمہ'),
  m('اطہر اقبال', [
    // VERIFY: the three names in this row are hard to read
    m('سحر'),
    m('وسیم اقبال'),
    m('افشاں'),
  ]),
  m('مظہر اقبال', [
    m('کنول'), // VERIFY: کنول
    f('ثنا'), // VERIFY: name, hard to read
  ]),
  m('ظفر اقبال', [
    m('عمران اقبال'),
    f('افشین فاطمہ'),
    m('رضا اقبال'),
    m('محمد اقبال'),
    m('مونا'), // VERIFY: مونا
  ]),
])

// Page 82: سید علی متقی. His children are drawn as a chain: a box of two, then کنیز فاطمہ, then a row of three.
const aliMuttaqi = m('علی متقی', [
  f('رئیس فاطمہ'), // VERIFY: رئیس
  f('حسن فاطمہ'), // VERIFY: حسن
  f('کنیز فاطمہ', 'سید جعفر حسین', 'آگرہ'),
  // VERIFY: the row of three is read as continuing the chain; the line also ends under مراد علی's name (nowhere else)
  m('حسن متقی', [
    m('محبان متقی'), // VERIFY: محبان
    m('عمران متقی'),
    f('کہکشاں فاطمہ'),
    m('کامران متقی'),
  ]),
  m('حیدر متقی'),
  m('وقار متقی', [f('حنا فاطمہ'), m('وجاہت متقی'), f('ثنا فاطمہ')]),
])

const tree1 = m('روشن علی', [
  m('دلیر علی', [m('شیر علی', 'لاولد')]),
  m('منیر علی', [
    m('شمشیر علی', [
      m('بدر علی', [
        m('صاحب علی', [
          f('عظیم النساء'), // VERIFY: عظیم
          f('سکینہ'),
          // VERIFY: the next three are drawn on a line that continues from this box, so read as his children
          m('انور علی', [f('دختران', undefined, undefined, 'بیٹیاں، نام نہیں دیے')]),
          m('امان علی', [
            f('شرف النساء'),
            f('فرحت النساء'),
            // VERIFY: the rows below are a chain from the box above; شرافت النساء appears twice
            f('شرافت النساء'),
            f('شرافت النساء'),
            m('فرحت علی', [m('حسین', [f('حاجرہ خاتون')]), f('آمنہ خاتون', 'سید مبارک حسن', 'سلہی')]), // VERIFY: mohalla
            f('شبیہ النساء'),
            f('صبا ناز'),
            m('علی عباس'),
            f('شگفتہ پروین', 'سید ممتاز حسین'),
          ]),
          m('سخاوت علی', [
            m('مرتضیٰ احسن', [
              m('مشتاق حسین', 'لاولد'),
              f('دختر', 'سید محمد علی', 'دربار کلاں'),
              f('رفیع النساء', 'سید محمد علی', 'دربار کلاں', 'زوجہ ثانی'),
              m('اصطفیٰ احسن', [
                m('محمد جعفر', [
                  f('شمع پروین', 'سید علی'), // VERIFY: the long row this line joins may also include her
                  m('محمد غازی', [f('صدف بانو')]),
                  m('محمد جمال'),
                ]),
                f('ذاکرہ خاتون'),
                m('محمد باقر', [f('نرگس بانو'), f('ملکہ بانو')]),
              ]),
            ]),
          ]),
        ]),
        f('کنیز زہرا', 'سید یوسف علیان', 'دربار کلاں'), // VERIFY: husband's name
        m('نجف علی', [m('راحت علی', [f('دختر')])]),
      ]),
      m('غلام علی', [
        m('حفیظ علی', [
          m('بندہ علی', [f('بدھو', 'سید مہدی حسن', 'حقانی')]), // VERIFY: mohalla
          f('عمدۃ النساء', 'سید فرزند علی', 'لکڑہ'),
        ]),
        m('محفوظ علی', [
          f('رحیم دولت', 'سید ظہور علی', 'شفاعت پورہ', 'عرف رحیمن'),
          f('شبیہ النساء', 'سید نذیر علی', 'دانشمندان'), // VERIFY: husband's name
          f('ذکی النساء', 'سید بنی حسین', 'مجھیرہٹہ'), // VERIFY: mohalla
          f('سلمیٰ', 'سید صولت علی', 'چھنگا دروازہ'),
        ]),
      ]),
      m('الطاف علی', [
        m('مہربان علی', [
          f('رفیع النساء', 'سید شرافت علی', 'بگلہ'),
          f('شہر بانو', 'سید سجاد علی', 'لکڑہ'),
        ]),
      ]),
    ]),
  ]),
  m('جعفر صادق', [
    m('غلام حسین', [
      m('ایر علی', 'لاولد'), // VERIFY: ایر
      f('فضل النساء', 'سید امتیاز علی', 'دانشمندان'),
    ]),
  ]),
  f('جیئو', 'سید عنایت اللہ', 'صابو نگراں'), // VERIFY: name and mohalla
])

// Page 82 (lower tree, headed "صفحہ ۸۱"): سید نیاز علی بن سید امان علی
const tree2 = m('نیاز علی', [
  m('صابر حسین', 'لاولد'),
  m('ذاکر حسین', 'محلہ حقانی کی سکونت اختیار کی', [
    f('سیدانی بانو', 'سید معصوم حسین', 'کٹرہ غلام علی'),
    m('علی سخی', [
      m('تنویر محمد', [f('ارمان بانو')]),
      m('نوروز محمد', [
        m('سخی محمد'),
        f('سیدہ فاطمہ'),
        m('مراد علی'),
        f('گل فاطمہ'),
        f('نور فاطمہ'),
      ]),
      f('امیر بانو', 'سید پیمبر رضا', 'بگلہ حال شفاعت پورہ'),
      f('حسن آرا', 'سید شاہد حسین', 'بگلہ'),
    ]),
    m('علی تقی', 'لاولد'),
  ]),
  m('باقر حسین', [m('علی مجتبیٰ', 'عرف اچن')]), // VERIFY: عرف اچن may belong to باقر حسین
  m('شاکر حسین', [
    m('اجتبیٰ احسن', [
      f('رانی فاطمہ'),
      m('جعفر حسین', [m('انیل رضا'), f('انعم زہرا')]), // VERIFY: انعم
      f('ممتاز فاطمہ'),
    ]),
    f('فردوس فاطمہ', 'سید سبط حسن', 'نور پور'),
    f('سلطان فاطمہ', 'سید مصطفیٰ حسین', 'منڈی چوب'), // VERIFY: first word
    f('اعجاز فاطمہ', 'سید حسن عباس', 'شفاعت پورہ'),
    // The line from the row above wraps down to these two sons
    aliMuttaqi,
    naasirHusain,
  ]),
])

const khandan: BookKhandan = {
  serial: 16,
  mohalla: 'Sathi',
  trees: [
    { page: 82, father: 'محمد چاند', root: tree1 },
    { page: 82, father: 'امان علی', root: tree2 },
  ],
}

export default khandan

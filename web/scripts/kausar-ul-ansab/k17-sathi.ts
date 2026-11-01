// Kausar-ul-Ansab (1999), pages 83–84: محلہ ستھی و سرائے کہنہ
// Khandan 17 in the book's index: اولاد سید محمد منور بن سید محمد چاند
//
// Page 83 is the first page; the heading refers to "صفحہ ۶۹" (the father's family, khandan 13).
// Page 84 carries the continued trees of سید ابوالقاسم بن سید سخاوت حسین and سید آعظم حسین بن سید احمد حسین.
// Families continued on page 85 (اسلم حسین, شمس الحسن) are stubs: page 85 was not photographed.
// Photo captions under the portraits at the bottom of page 83 are ignored.

import { f, m, onPage, type BookKhandan } from './book'

// ---------- Page 84: سید ابوالقاسم بن سید سخاوت حسین (continued from page 83) ----------

// Children of محمود الحسن
const mahmoodulHasan = m('محمود الحسن', [
  m('شکور الحسن'),
  m('منظور الحسن'),
  f('قرۃ العین'),
])

const maghroobulHasan = m('مرغوب الحسن', [
  m('مقصود الحسن'),
  m('منصور الحسن'),
  m('مظفر الحسن'),
  mahmoodulHasan,
]) // VERIFY: مرغوب الحسن spelling; the four sons are drawn in two chained brackets and read as one set

const mahboobulHasan = m('محبوب الحسن', [
  m('عبداللہ قدیر'),
  maghroobulHasan,
  m('جمیل'),
])

const muhammadNaseer = m('محمد نصیر', [
  m('محمد سعید'),
  f('حور بانو'),
  m('محمد رشید', [m('شہزاد'), m('دلشان'), m('شاد')]),
  m('محمد وحید', [m('شاداب')]),
])

const rafeeqAhmad = m('رفیق احمد', [
  f('نکہت زاہدہ'), // VERIFY: could be two names (نکہت / زاہدہ)
  f('ناجیہ زہرا'),
  f('سائمہ ارم'),
  f('فرزانہ زہرا'),
  m('اعجاز سعید'),
  m('طاہر سعید'),
])

// The long chain of brackets under عتیق احمد is read as all his children
const ateeqAhmad = m('عتیق احمد', [
  f('صالحہ بانو', 'سید محمد ظفر', 'سرائے کہنہ'),
  f('حمیدہ بانو', 'سید احمد علی', 'گشتیاں'), // VERIFY: name (حمیدہ / سعیدہ) and parentage of the chained brackets below
  f('عالیہ بانو'),
  m('خالد محمود'),
  m('طارق مسعود'),
  m('سراج الحق'),
  m('منیر الحق'),
  m('ضیاء الحق'),
  m('احمد کریم'),
])

const labeeqAhmad = m('لبیق احمد', [
  m('ابن الحسن', [f('نوشین بانو'), m('محمد علی'), m('محمد عمران'), m('محمد عمر')]),
  m('رشین احمد', [
    f('شانزیہ'), // VERIFY: name unclear (شانزیہ / شاہ نمیہ)
    f('فرحین'),
    f('حمیرا'),
    m('فراز احمد'),
    f('صوفیہ رشین'),
  ]),
  rafeeqAhmad,
  f('فہمیدہ خاتون', 'سید نور احمد', 'حیدرآباد دکن'),
  ateeqAhmad,
])

// Chained brackets under شفیق احمد: two daughters, then six more children from a long line on the left
const shafeeqAhmad = m('شفیق احمد', [
  f('کنیزہ خاتون'),
  f('رقیہ خاتون'),
  f('رشیدہ خاتون'), // VERIFY: the bottom row of six hangs from a long line on the left edge; read as شفیق احمد's children
  f('حسینہ خاتون'), // VERIFY: حسینہ / حسنہ
  m('آل احمد'),
  m('احمد'),
  m('حبیب احمد'),
  m('خورشید احمد'),
])

// Long chain of brackets under مشہود النبی, read as all his children
const mashhoodunNabi = m('مشہود النبی', [
  f('مسعودہ خاتون'),
  f('معززہ خاتون'),
  f('محمودہ خاتون'),
  f('زبیدہ خاتون'),
  f('عزیزہ خاتون'),
  f('شاہدہ خاتون'),
  m('مسعود النبی', [m('تنویر النبی'), f('نزہت بانو')]), // VERIFY: نزہت بانو
  f('راشدہ خاتون'),
  m('محمد احمد', [m('محمد ارشد'), f('عشرت بانو')]),
  m('سرور النبی', [m('اسرار النبی'), f('انجم بانو')]),
  m('توقیر النبی', [f('عظمیٰ بانو'), f('شائستہ بانو'), m('ضیاء النبی'), f('فرح بانو')]),
])

const aalHasan = m('آل حسن', [
  f('مجاہدہ خاتون'),
  m('محمد حسین'),
  f('مشاہدہ خاتون'),
  f('حاجرہ خاتون'),
  m('آل حسنین', [f('مجاہدہ خاتون')]), // VERIFY: the granddaughter reads like مجاہدہ again
])

const abulQasim = onPage(
  84,
  m('ابوالقاسم', [
    f('شفیقہ خاتون', 'سید آفاق حیدر', 'سدو'), // VERIFY: mohalla سدو
    m('احمد', 'لاولد'),
    mahboobulHasan,
    f('دختر', 'سید علی متقی خاں', 'گھڑیال منزل'),
    muhammadNaseer,
    f('محبوبہ خاتون', 'سید فیاض الحسن', 'کوٹ'),
    f('قاسمہ خاتون', 'سید مظہر الحسن', 'گشتیان'),
    f('حمیدہ خاتون', 'سید ماجد حسین', 'سرائے کہنہ'),
    m('خلیق احمد', 'لاولد'),
    // VERIFY: the next four hang from brackets at the two ends of the main line, so their order among the siblings is uncertain
    labeeqAhmad,
    shafeeqAhmad,
    mashhoodunNabi,
    aalHasan,
  ])
)

// ---------- Page 84: سید آعظم حسین بن سید احمد حسین (continued from page 83) ----------

const qutbulHasan = m('قطب الحسن', [
  m('آفتاب الحسن', [
    m('اختر حسین', 'لاولد'),
    m('انوار الحسن', [m('منظر حسن'), m('منصور حسن')]),
    f('خورشید فاطمہ', 'سید وسیم الحسن', 'سرائے کہنہ'),
  ]),
  f('جعفرہ خاتون', 'سید علی صابر خاں', 'گھڑیال منزل'),
  f('طاہرہ خاتون', 'سید محمد یوسف', 'شاہ علی سرائے'),
  m('تواب الحسن', [
    m('اظہر حسن', [m('نواز حسن')]), // VERIFY: نواز
    m('اسد حسن'),
    m('آصف حسن'),
    f('رعنا پروین'),
  ]),
  f('ظہیرہ خاتون', 'سید ابن عباس', 'دربار کلاں'),
  m('انتخاب الحسن', [
    m('جنید حسن'),
    m('ساجد حسن'),
    f('سارا خاتون'),
    m('احمد علی'),
    m('نجم حسن'),
  ]),
])

const azamHusain = onPage(
  84,
  m('آعظم حسین', [
    qutbulHasan,
    f('عقیلہ خاتون'),
    f('عابدہ خاتون', 'سید کاظم حسین', 'چھیوڑہ'),
    onPage(85, m('اسلم حسین')),
    f('فضہ خاتون'),
    onPage(85, m('شمس الحسن')),
  ])
)

// ---------- Page 83 ----------

const tilmeezuddin = m('تلمیذ الدین', [
  f('زمانو خاتون', 'سید مظاہر حسین', 'سرائے کہنہ'), // VERIFY: name and husband
  f('نعیمہ خاتون'),
  m('امید الغفار', 'عرف نعیم الدین', [m('عظیم عزمان'), m('کلیم اختر')]), // VERIFY: the "عرف" note sits between this name and the next
  f('المغیث زماں خاتون'), // VERIFY: name unclear; no سید under it, read as a daughter
  m('ضمانت باللہ', 'عرف نسیم احمد'),
  m('راغب الدین احمد', [m('سلمان اختر'), m('آصف مصطفیٰ')]),
  m('فہیم الدین'), // VERIFY: possibly فہیم الدین احمد
  m('محمد ظہیر الدین', [m('سلیمان اختر')]),
  m('مظفر الدین احمد'),
])

const fazlSattar = m('فضل ستار', [
  m('افضال حفیظ', 'لاولد'),
  m('حفیظ القدیر', 'لاولد'),
  m('منصور الغنی', 'لاولد'),
  m('صدیق الغنی', 'لاولد'),
  tilmeezuddin,
  f('وحیدہ خاتون', 'سید علی محتشم خاں', 'گھڑیال منزل'),
  m('حضور الرحمن', 'لاولد'),
  m('معصوم الغنی', [
    m('توفیق احمد'),
    m('خورشید احمد', [m('نوید حسن'), m('جنید حسن'), f('عظمیٰ خاتون')]),
    m('توصیف احمد'),
  ]),
]) // VERIFY: the second row of Fazl Sattar's sons/daughters hangs from a chained line and is read as his children

const sakhawatHusain = m('سخاوت حسین', [
  fazlSattar,
  m('جواد الغفار', [m('حبیب غفار', 'لاولد'), m('عزیز غفار', 'لاولد')]),
  abulQasim,
])

const qasimNazr = m('قاسم نذر', [
  m('احمد حسین', [
    m('خادم حسین', [
      m('عالم حسین', [m('محمود حسین', 'لاولد')]),
      f('سارا خاتون', 'سید اسلم حسین', 'سرائے کہنہ'),
      f('عابدہ خاتون', 'سید باقر حسین', 'سرائے کہنہ'),
      f('برکت النساء', 'سید ابوالقاسم', 'سرائے کہنہ'),
      m('سالم حسین', 'لاولد'),
    ]),
    f('لطافت النساء'),
    m('کاظم حسین', [
      m('طالب حسین', [
        f('سلمہ خاتون'),
        f('ماجدہ خاتون', 'سید قاسم نذر', 'ستھی'),
        m('ماجد حسین', [
          m('عابد حسین', 'حیدرآباد دکن کی سکونت اختیار کی'), // VERIFY: last word of the note
          m('ماجد حسین'), // VERIFY: name
          f('واجدہ خاتون', 'سید شوکت حسین', 'سرائے کہنہ'),
        ]),
      ]),
      f('نبی النساء', 'سید عالم حسین', 'سرائے کہنہ'),
    ]),
    f('کنیز زہرا'),
    m('ناظم حسین', [
      m('نور الحسن', [
        m('ظہور الحسن', [
          f('راضیہ خاتون', 'سید خیر لعیت حسین', 'گذری'), // VERIFY: husband name
          f('ساجدہ خاتون', 'سید عنایت علی', 'جرفودی'), // VERIFY: mohalla
          f('زاہدہ خاتون', 'سید شفیع الحسن', 'گذری'),
        ]),
        m('منظور الحسن', 'لاولد'),
      ]),
      f('مختار دولت', 'سید محمد کامل', 'قاضی گلی'), // VERIFY: husband and mohalla
    ]),
    azamHusain,
  ]),
  m('محمد حسین', 'لاولد'),
  m('منور حسین', [
    m('مظفر حسین', 'لاولد'), // VERIFY: مظفر / منظر
    f('فخر النساء', 'سید محمد نذر', 'ستھی'),
    sakhawatHusain,
    f('سعید النساء'),
  ]),
  m('عنایت حسین', 'لاولد'),
])

const qutbAli = m('قطب علی', [
  m('محمد غوث', [
    m('مبارک نذر', [
      m('قطب علی', 'لاولد'),
      m('نصیر علی', 'لاولد'),
      qasimNazr,
      f('مسماۃ زہرا', 'سید حفیظ اللہ', 'دربار کلاں'),
      m('ثابت علی', 'لاولد'),
    ]),
    m('ولی اللہ', 'لاولد'),
  ]),
  f('مسماۃ رکھی', 'سید محمد فاضل', 'دربار کلاں'),
])

const munawwar = m('محمد منور', [
  m('محمد', 'لاولد'),
  m('مبارک علی', [
    m('حسین رضا', 'لاولد'),
    m('علی مراد', [
      m('سلطان علی', [f('مسماۃ بدھی', 'سید ناد علی')]), // VERIFY: husband's name
      m('علی اکبر', [
        m('حشمت علی', [
          m('عشرت علی', [
            m('شجاعت علی'),
            f('مسماۃ زینب', 'سید ابرار حسین'), // VERIFY: husband's name
            m('سجاد علی', [f('زاہدہ خاتون', 'سید سبط احمد', 'بنگلہ')]), // VERIFY: mohalla
          ]),
        ]),
      ]),
    ]),
  ]),
  m('فرزند علی', 'لاولد'),
  f('مسماۃ صاحب جہاں'),
  m('سیف علی', 'لاولد'), // VERIFY: سیف / صیف
  m('روشن گسائیں'), // VERIFY: name; no سید printed beneath
  qutbAli,
  m('ذوالفقار علی', 'لاولد'),
])

const khandan: BookKhandan = {
  serial: 17,
  mohalla: 'Sathi',
  trees: [{ page: 83, father: 'محمد چاند', root: munawwar }],
}

export default khandan

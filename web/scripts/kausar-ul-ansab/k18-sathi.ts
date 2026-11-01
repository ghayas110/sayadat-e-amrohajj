// Kausar-ul-Ansab (1999), page 85: محلہ ستھی و گھیر عبدالرزاق و پچدرہ
// Khandan 18 in the book's index: اولاد سید عبدالباری بن سید ابوالحسن
//
// Only page1.jpeg was available. The two trees at the top of page 85 (سید اسلم حسین and
// سید شمس الحسن, both sons of سید اعظم حسین, "صفحہ 84") belong to khandan 17 and are not included.
// The tree header carries the reference "صفحہ ۳۰" (read as 30, VERIFY).
// Daughters drawn as just "دختر" with no name are written as f('دختر').

import { f, m, type BookKhandan } from './book'

const khandan: BookKhandan = {
  serial: 18,
  mohalla: 'Sathi',
  trees: [
    {
      page: 85,
      father: 'ابوالحسن', // VERIFY: header "عبدالباری بن سید ابوالحسن" (a small "اول" mark sits above عبدالباری)
      root: m('عبدالباری', [
        m('عبدالرزاق', [
          f('سارا خاتون', 'سید احیا', 'شفاعت پوتنہ'), // VERIFY: husband's name (احیا / احھا)
          m('فیض اللہ', [
            m('خیر اللہ', [
              f('دختر', 'سید حمایت علی', 'ترپولیہ'),
              m('امان اللہ', [
                m('حفیظ اللہ', [
                  m('ارشاد علی', 'لاولد'),
                  m('دائم علی', 'لاولد'),
                ]),
              ]),
            ]),
          ]),
        ]),
        m('عبدالواحد', [f('دختر')]),
        m('محمد فاضل', [
          m('محمد', [
            m('احمد', [m('احسن اللہ', 'لاولد')]),
            m('میر', [
              m('منیر', [f('دختر')]),
              f('امان دولت', 'سید فتح داد', 'صابونگراں'), // VERIFY: husband's name (فتح داد)
              m('پیر', [f('دختر')]),
            ]),
          ]),
          m('مبارک', 'لاولد'),
          m('حیا', [
            m('عظمت اللہ', [
              m('صیف اللہ', [
                f('ہدایت النساء'),
                m('غلام امامین'),
                m('غلام حسین', [
                  f('رحیم النساء'), // VERIFY: drawn without "سید", read as a daughter
                  m('احسان علی', [
                    m('فدا حسین', [
                      // The long bar under فدا حسین's box carries all of these (the line loops from his box up to the bar)
                      f('کنیز زہرا', 'سید تقی لند', 'ستھی'), // VERIFY: husband's name (تقی لند?)
                      m('مہدی حسین', [f('خدیجہ خاتون', 'سید غضنفر حسن', 'جڑودی نوگانیاں')]), // VERIFY: husband's name (غضنفر / عسکری حسن?)
                      f('شہر بانو', 'سید سعادت اللہ', 'سرائے کہنہ'),
                      f('حسین دولت', 'سید طالب علی', 'کنکوئی'), // VERIFY: husband's name and mohalla
                      f('معصوم دولت', 'سید اصغر حسین', 'جڑودی نوگانیاں'),
                      f('صغریٰ', 'سید موسیٰ علی', undefined, 'سماۃ'),
                      m('محمد حسین', 'لاولد'),
                    ]),
                    m('علی', 'لاولد'),
                    m('صادق حسین', [f('کبریٰ', 'سید خادم علی', 'گذری')]),
                  ]),
                ]),
                f('سخاوت النساء'), // VERIFY: no husband line; gender assumed from the name
                f('عظیم النساء', 'سید سعادت علی', 'حقانی'),
              ]),
              m('ہدایت اللہ', [f('دختر')]),
            ]),
          ]),
          m('ابوالفتح', [
            f('پیاری', 'سید سعادت اللہ', 'صابونگراں'), // VERIFY: her name (پیاری / پیارے علی)
            m('کریم اللہ', [f('دختر')]),
          ]),
          f('دولت', undefined, undefined, 'سماۃ'),
        ]),
      ]),
    },
  ],
}

export default khandan

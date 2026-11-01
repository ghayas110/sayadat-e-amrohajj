// Mohalla and khandan list transcribed from the index (فہرست) of Kausar-ul-Ansab (1999).
// The same file lives at studio/schemaTypes/amrohaIndex.ts and web/src/data/amrohaIndex.ts —
// keep both copies identical when editing.
//
// The lists follow the book's own order: mohallas in the order they first appear in the index,
// khandans by their serial number (نمبر شمار). Readings still worth checking against the book:
// 22 (مہدی or مجدی), 28/30 (چھیوڑہ), 45 (نوگنیاں), 48 (جڑودی), 54 (ساہمدانی), 60 (بارہ پوتی).
// Corrected from the photos: khandan 12 starts on page 72 and khandan 13 on page 79 (the index was
// read as 62 and 69 — in this book's hand ۶ and ۷ look alike; khandan 11 runs 59–71 and 14 starts on 80).
//
// Entries 1–3 of the index (شجرہ طیبہ, from Hazrat Adam to Syed Hussain Sharafuddin Shah Wilayat)
// are the common ancestry of every family, so they are not offered as a khandan choice.

export interface Mohalla {
  value: string // stored in Sanity
  en: string
  ur: string
}

export interface Khandan {
  serial: number // نمبر شمار in the book's index
  name: string // نام خاندان
  residence: string // محلہ و مقام سکونت, as printed
  page: number // صفحہ where the khandan's section starts
  mohallas: string[] // Mohalla values this khandan is listed under
}

export const MOHALLAS: Mohalla[] = [
  { value: 'Sambhal', en: 'Sambhal', ur: 'سنبھل' },
  { value: 'Darbar Kalan', en: 'Darbar Kalan', ur: 'محلہ دربار کلاں' },
  { value: 'Mandi Chob', en: 'Mandi Chob', ur: 'محلہ منڈی چوب' },
  { value: 'Kankoi', en: 'Kankoi', ur: 'محلہ کنکوئی' },
  { value: 'Sathi', en: 'Sathi', ur: 'محلہ ستھی' },
  { value: 'Sarai Kohna', en: 'Sarai Kohna', ur: 'سرائے کہنہ' },
  { value: 'Gher Karam Ali Khan', en: 'Gher Karam Ali Khan', ur: 'محلہ گھیر کرم علی خاں' },
  { value: 'Niyariyan', en: 'Niyariyan (Roshan Sarai)', ur: 'محلہ نیاریاں (روشن سرائے)' },
  { value: 'Pachdara', en: 'Pachdara', ur: 'محلہ پچدرہ' },
  { value: 'Guzri', en: 'Guzri', ur: 'محلہ گذری' },
  { value: 'Gher Manaf', en: 'Gher Manaf', ur: 'محلہ گھیر مناف' },
  { value: 'Shafat Pota', en: 'Shafaat Pota', ur: 'محلہ شفاعت پوتہ' },
  { value: 'Majhpota', en: 'Majhpota', ur: 'محلہ مجاپوتہ' },
  { value: 'Chhewra', en: 'Chhewra', ur: 'محلہ چھیوڑہ' },
  { value: 'Bagla', en: 'Bagla (Arzani Pota)', ur: 'محلہ بگلہ (ارزانی پوتہ)' },
  { value: 'Machhar Hatta', en: 'Machhar Hatta', ur: 'محلہ مچھر ہٹہ' },
  { value: 'Sabungran', en: 'Sabungran', ur: 'محلہ صابونگراں' },
  { value: 'Tripolia', en: 'Tripolia', ur: 'محلہ ترپولیہ' },
  { value: 'Bhooka', en: 'Bhooka', ur: 'محلہ بھوکہ' },
  { value: 'Qazi Zada', en: 'Qazi Zada', ur: 'محلہ قاضی زادہ' },
  { value: 'Haqqani', en: 'Haqqani', ur: 'محلہ حقانی' },
  { value: 'Lakra', en: 'Lakra', ur: 'محلہ لکڑہ' },
  { value: 'Saddo', en: 'Saddo', ur: 'محلہ سدّو' },
  { value: 'Gori Kunwan', en: 'Gori Kunwan (Gondni Tala)', ur: 'محلہ گوری کنواں (گوندنی تلا)' },
  { value: 'Aghwanpur', en: 'Aghwan Pur', ur: 'اغوان پور' },
  { value: 'Danishmandan', en: 'Danishmandan', ur: 'محلہ دانشمندان' },
  { value: 'Bakhshi', en: 'Nakhshbi', ur: 'محلہ نخشبی' }, // every page of khandan 46 is headed محلہ نخشبی; the stored value is left as 'Bakhshi'
  { value: 'Kot', en: 'Kot', ur: 'محلہ کوٹ' },
  { value: 'Jarodi', en: 'Jarodi', ur: 'محلہ جڑودی' },
  { value: 'Chakli', en: 'Chakli', ur: 'محلہ چکلی' },
  { value: 'Kali Pagri', en: 'Kali Pagri', ur: 'محلہ کالی پگڑی' },
  { value: 'Shahi Chabutra', en: 'Shahi Chabutra', ur: 'محلہ شاہی چبوترہ' },
  { value: 'Bara Poti', en: 'Bara Poti', ur: 'محلہ بارہ پوتی' },
  { value: 'Usmanpur', en: 'Usmanpur (Abbas Nagar)', ur: 'عثمان پور عرف عباس نگر' },
  { value: 'Other', en: 'Other', ur: 'دیگر محلہ' },
]

export const KHANDANS: Khandan[] = [
  { serial: 4, name: 'شجرات سید احمد علی و سید علی نقی', residence: 'سنبھل', page: 23, mohallas: ['Sambhal'] },
  { serial: 5, name: 'اولاد سید عاقل بن سید عادل و سید اسمٰعیل بن سید ابراہیم', residence: 'کٹرہ غلام علی و سرائے اسمٰعیل حال دربار کلاں', page: 24, mohallas: ['Darbar Kalan'] },
  { serial: 6, name: 'اولاد سید عبدالخالق بن سید ابوالحسن بن سید محمد میر عدلی', residence: 'محلہ دربار کلاں', page: 30, mohallas: ['Darbar Kalan'] },
  { serial: 7, name: 'اولاد سید غلام مرتضیٰ بن دیوان سید محمود', residence: 'محلہ دربار کلاں', page: 43, mohallas: ['Darbar Kalan'] },
  { serial: 8, name: 'اولاد سید عبدالباری ثانی بن دیوان سید محمود', residence: 'محلہ دربار کلاں چھنگا دروازہ و منڈی چوب', page: 48, mohallas: ['Darbar Kalan', 'Mandi Chob'] },
  { serial: 9, name: 'اولاد سید مردان علی بن سید محمد علی', residence: 'محلہ دربار کلاں حال سید واڑہ، بدایوں', page: 49, mohallas: ['Darbar Kalan'] },
  { serial: 10, name: 'اولاد سید ابوالواجد بن سید عبدالباری ثانی', residence: 'محلہ دربار کلاں چھنگا دروازہ منڈی چوب', page: 50, mohallas: ['Darbar Kalan', 'Mandi Chob'] },
  { serial: 11, name: 'اولاد سید غلام شرف الدین بن سید عبدالباری ثانی', residence: 'محلہ دربار کلاں کنکوئی، منڈی چوب', page: 59, mohallas: ['Darbar Kalan', 'Kankoi', 'Mandi Chob'] },
  { serial: 12, name: 'اولاد سید عبدالواسع بن شاہ سید ابوالحسن', residence: 'ستھی گھیر عبدالرزاق حقانی و بانباڑی', page: 72, mohallas: ['Sathi'] },
  { serial: 13, name: 'اولاد سید محمد چاند بن سید عبدالواسع', residence: 'محلہ دربار شاہ ابوالحسن ستھی و سرائے کہنہ', page: 79, mohallas: ['Sathi', 'Sarai Kohna'] },
  { serial: 14, name: 'اولاد سید محمد حسین بن سید محمد شاہ', residence: 'محلہ گھیر کرم علی خاں', page: 80, mohallas: ['Gher Karam Ali Khan'] },
  { serial: 15, name: 'اولاد سید محمد اجیالے بن سید محمد چاند', residence: 'محلہ ستھی حال چھنگاہ دروازہ دربار کلاں', page: 81, mohallas: ['Sathi', 'Darbar Kalan'] },
  { serial: 16, name: 'اولاد سید روشن علی بن سید محمد چاند', residence: 'محلہ ستھی حال نیاریاں (روشن سرائے) و گھیر بدر علی گستیاں', page: 82, mohallas: ['Sathi', 'Niyariyan'] },
  { serial: 17, name: 'اولاد سید محمد منور بن سید محمد چاند', residence: 'محلہ ستھی، سرائے کہنہ', page: 83, mohallas: ['Sathi', 'Sarai Kohna'] },
  { serial: 18, name: 'اولاد سید عبدالباری بن سید ابوالحسن', residence: 'محلہ ستھی گھیر عبدالرزاق و پچدرہ', page: 85, mohallas: ['Sathi', 'Pachdara'] },
  { serial: 19, name: 'اولاد سید عبدالغفار بن سید مبارک، عبدالواحد بن وارث علی', residence: 'محلہ گذری', page: 86, mohallas: ['Guzri'] },
  { serial: 20, name: 'اولاد سید عبدالماجد بن سید نفیس محی الدین', residence: 'محلہ گذری', page: 91, mohallas: ['Guzri'] },
  { serial: 21, name: 'اولاد سید ہزبر علی بن سید غضنفر علی', residence: 'محلہ گذری', page: 92, mohallas: ['Guzri'] },
  { serial: 22, name: 'اولاد سید مہدی بن سید عطا محی الدین عرف بھیکا', residence: 'محلہ گذری', page: 93, mohallas: ['Guzri'] },
  { serial: 23, name: 'اولاد سید اسداللہ خان میر کلو بن سید مصطفیٰ علی', residence: 'محلہ گذری', page: 95, mohallas: ['Guzri'] },
  { serial: 24, name: 'اولاد سید شجاعت علی بن سید ہزبر علی', residence: 'محلہ گذری گھیر مناف', page: 105, mohallas: ['Guzri', 'Gher Manaf'] },
  { serial: 25, name: 'اولاد سید علی مرتضیٰ خاں بن سید ہزبر علی', residence: 'محلہ گذری گھڑیال منزل', page: 114, mohallas: ['Guzri'] },
  { serial: 26, name: 'اولاد سید عبدالجلیل بن سید مبارک', residence: 'محلہ شفاعت پوتہ', page: 117, mohallas: ['Shafat Pota'] },
  { serial: 27, name: 'اولاد سید عبدالمجید مجا بن سید مبارک', residence: 'محلہ مجاپوتہ', page: 131, mohallas: ['Majhpota'] },
  { serial: 28, name: 'اولاد سید اسحاق بن سید راجو', residence: 'محلہ چھیوڑہ', page: 143, mohallas: ['Chhewra'] },
  { serial: 29, name: 'اولاد سید محمد باقر اول بن سید عبدالرحیم', residence: 'محلہ بگلہ (ارزانی پوتہ)', page: 152, mohallas: ['Bagla'] },
  { serial: 30, name: 'اولاد سید حاتم بن سید عبدالرحیم', residence: 'محلہ چھیوڑہ (گھیر سید حاتم)', page: 161, mohallas: ['Chhewra'] },
  { serial: 31, name: 'اولاد سید علی اکبر بن سید بہاء الدین', residence: 'محلہ مچھر ہٹہ', page: 164, mohallas: ['Machhar Hatta'] },
  { serial: 32, name: 'اولاد سید سعادت اللہ بن سید فتح مراد', residence: 'محلہ صابونگراں', page: 167, mohallas: ['Sabungran'] },
  { serial: 33, name: 'اولاد سید محمد ہاشم بن سید علی اکبر', residence: 'محلہ ترپولیہ (پھوے والا)', page: 168, mohallas: ['Tripolia'] },
  { serial: 34, name: 'اولاد سید ہادی بن سید بہاء الدین', residence: 'محلہ بھوکہ (جعفری)', page: 171, mohallas: ['Bhooka'] },
  { serial: 35, name: 'اولاد سید ابراہیم بن سید بہاء الدین', residence: 'محلہ پچدرہ', page: 175, mohallas: ['Pachdara'] },
  { serial: 36, name: 'اولاد سید علاء الدین بن سید ابراہیم', residence: 'محلہ قاضی زادہ (قاضی گلی)', page: 179, mohallas: ['Qazi Zada'] },
  { serial: 37, name: 'اولاد سید محمد علی بن سید میر علی', residence: 'محلہ حقانی', page: 199, mohallas: ['Haqqani'] },
  { serial: 38, name: 'اولاد سید محمد منور بن سید سلطان محمد', residence: 'محلہ لکڑہ (دربار شاہ ولایت)', page: 213, mohallas: ['Lakra'] },
  { serial: 39, name: 'اولاد سید محمد بن سید علی (متولیان)', residence: 'محلہ چاہ شور پچدرہ', page: 224, mohallas: ['Pachdara'] },
  { serial: 40, name: 'اولاد سید مٹھے بن سید سیدن شاہ', residence: 'محلہ سدّو', page: 229, mohallas: ['Saddo'] },
  { serial: 41, name: 'اولاد سید بڑے بن سید سیدن شاہ', residence: 'محلہ گوری کنواں (گوندنی تلا)', page: 236, mohallas: ['Gori Kunwan'] },
  { serial: 42, name: 'اولاد سید چاند بن سید ابوبکر بدرالدین', residence: 'محلہ بھوکا قدیم (سرائے عبدالحفیظ)', page: 239, mohallas: ['Bhooka'] },
  { serial: 43, name: 'اولاد سید جان بن سید وجیہ الدین بن سید ابوبکر بدرالدین', residence: 'اغوان پور', page: 242, mohallas: ['Aghwanpur'] },
  { serial: 44, name: 'اولاد سید محمد اشرف دانشمند بن سید محمد سعید خاں (خاندان نقوی سادات)', residence: 'محلہ دانشمندان', page: 258, mohallas: ['Danishmandan'] },
  { serial: 45, name: 'اولاد سید عبدالرحیم و سید محمد بن سید خواجہ و سید سرفراز علی بن سید نجابت علی و سید عاشق علی بن سید شبیر علی', residence: 'محلہ نوگنیاں (دربار میر انخاں) نوبت خانہ (دربار کلاں)', page: 283, mohallas: ['Darbar Kalan'] },
  { serial: 46, name: 'اولاد سید خواجہ بزرگ بن خواجہ سید خطیر ثانی', residence: 'محلہ نخشبی', page: 287, mohallas: ['Bakhshi'] },
  { serial: 47, name: 'اولاد سید سراج الدین اول بن سید محمد بغدادی', residence: 'محلہ کوٹ (سادات حسنی)', page: 296, mohallas: ['Kot'] },
  { serial: 48, name: 'اولاد سید اخوان سعید و سید حسن سعید بن سید بدرالدین', residence: 'محلہ جڑودی زیدی', page: 302, mohallas: ['Jarodi'] },
  { serial: 49, name: 'اولاد شاہ سید عبدالغنی بن سید محمد طاہر', residence: 'محلہ قاضی زادہ (زیدی چاندپوری) گولی', page: 311, mohallas: ['Qazi Zada'] },
  { serial: 50, name: 'اولاد سید ابوالخیر بن سید محمد', residence: 'محلہ صابونگراں چاہ بقا سامانہ (زیدی)', page: 318, mohallas: ['Sabungran'] },
  { serial: 51, name: 'اولاد سید عبدالعزیز خان بن سید بلاقی', residence: 'محلہ قاضی زادہ، دربار کلاں و گذری (زیدی)', page: 319, mohallas: ['Qazi Zada', 'Darbar Kalan', 'Guzri'] },
  { serial: 52, name: 'اولاد سید ببر علی بن سید باقر علی جعفری', residence: 'محلہ چکلی و دانشمندان (سادات جعفری)', page: 321, mohallas: ['Chakli', 'Danishmandan'] },
  { serial: 53, name: 'اولاد سید خواجہ ولی جعفری بن سید احمد علی جعفری', residence: 'محلہ دربار کلاں (سادات جعفری)', page: 324, mohallas: ['Darbar Kalan'] },
  { serial: 54, name: 'اولاد سید احمد شاہ بن سید محمد یار ساہمدانی', residence: 'محلہ دانشمندان (سادات کاظمی)', page: 327, mohallas: ['Danishmandan'] },
  { serial: 55, name: 'اولاد سید محمد اشرف دہلوی ثم امروہی سید محمد احسن دہلوی', residence: 'محلہ کنکوئی (سادات کاظمی)', page: 329, mohallas: ['Kankoi'] },
  { serial: 56, name: 'اولاد سید عبداللہ شیرازی بن سید محمد', residence: 'محلہ کالی پگڑی (سادات حسنی)', page: 334, mohallas: ['Kali Pagri'] },
  { serial: 57, name: 'اولاد سید سیف اللہ بن سید ابو محمد', residence: 'محلہ دربار کلاں (دکھنی سادات)', page: 335, mohallas: ['Darbar Kalan'] },
  { serial: 58, name: 'اولاد سید رستم علی بن سید بشارت علی', residence: 'محلہ دربار کلاں (دکھنی سادات)', page: 337, mohallas: ['Darbar Kalan'] },
  { serial: 59, name: 'اولاد سید جلال الدین سرخ بخاری (سید احمد علی و سید محمد علی)', residence: 'محلہ شاہی چبوترہ بخاری نقوی', page: 338, mohallas: ['Shahi Chabutra'] },
  { serial: 60, name: 'اولاد سید مہدی حسن بن مبارک حسن', residence: 'محلہ بارہ پوتی', page: 339, mohallas: ['Bara Poti'] },
  { serial: 61, name: 'اولاد سید حسن بن سید آل محمد', residence: 'عثمان پور عرف عباس نگر لکڑہ نئی بستی', page: 340, mohallas: ['Usmanpur', 'Lakra'] },
]

export const khandansForMohalla = (mohalla: string) =>
  KHANDANS.filter((k) => k.mohallas.includes(mohalla))

export const findKhandan = (serial: string | number | undefined) =>
  KHANDANS.find((k) => String(k.serial) === String(serial))

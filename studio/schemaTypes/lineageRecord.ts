import { defineType, defineField } from 'sanity'
import { KHANDANS, MOHALLAS, findKhandan } from './amrohaIndex'
import { SearchableStringInput } from '../components/SearchableStringInput'

// Families typed in from the 1999 book rather than submitted through the website form
export const BOOK_SOURCE = 'kausar-ul-ansab-1999'

const isFromBook = (document: unknown) => (document as { source?: string } | undefined)?.source === BOOK_SOURCE

// Contact details are required for form submissions, but the book has none for its families
const requiredUnlessFromBook = (value: unknown, context: { document?: unknown }) =>
  isFromBook(context.document) || (typeof value === 'string' && value.trim()) ? true : 'Required'

const birthOrderField = defineField({
  name: 'birthOrder',
  title: 'Position among brothers & sisters / ترتیب',
  type: 'number',
  description: 'Optional. 1 = eldest. Used to order sons and daughters together in the family tree, as in the book.',
})

export const lineageRecord = defineType({
  name: 'lineageRecord',
  title: 'Nasab Nama (نسب نامہ)',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: "Name (Syed) / نام مع سید",
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'fatherName',
      title: "Father's Name (سید) / والد کا نام",
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'source',
      title: 'Source / ماخذ',
      type: 'string',
      options: {
        list: [
          { title: 'Website form', value: 'form' },
          { title: 'Kausar-ul-Ansab (1999) book', value: BOOK_SOURCE },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'form',
    }),
    defineField({
      name: 'mohalla',
      title: 'Mohalla in Amroha / امروہہ کا محلہ',
      type: 'string',
      options: {
        list: MOHALLAS.map((m) => ({ title: `${m.ur} / ${m.en}`, value: m.value })),
      },
      components: { input: SearchableStringInput },
    }),
    defineField({
      name: 'customMohalla',
      title: 'Custom Mohalla (if Other selected) / دیگر محلہ کی تفصیل',
      type: 'string',
      hidden: ({ parent }) => parent?.mohalla !== 'Other',
    }),
    defineField({
      name: 'khandan',
      title: 'Khandan (Kausar-ul-Ansab index) / خاندان',
      type: 'string',
      description: 'Family branch from the index of Kausar-ul-Ansab (1999), with the page its section starts on',
      options: {
        list: [
          ...KHANDANS.map((k) => ({
            title: `${k.serial}۔ ${k.name} — ${k.residence} (صفحہ ${k.page})`,
            value: String(k.serial),
          })),
          { title: 'Not listed / دیگر خاندان', value: 'other' },
        ],
      },
      components: { input: SearchableStringInput },
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const mohalla = (context.parent as { mohalla?: string } | undefined)?.mohalla
          const khandan = findKhandan(value as string | undefined)
          if (!khandan || !mohalla || mohalla === 'Other') return true
          return khandan.mohallas.includes(mohalla)
            ? true
            : { message: 'This khandan is not listed under the selected mohalla', level: 'warning' }
        }),
    }),
    defineField({
      name: 'parentRecord',
      title: "Father's Record (for family tree) / والد کا ریکارڈ",
      type: 'reference',
      to: [{ type: 'lineageRecord' }],
      weak: true,
      description:
        "Optional. Links this family under the father's own record in the family tree. Without it, records are joined when the father's name matches a son in another record.",
    }),
    defineField({
      name: 'fatherInRecord',
      title: "Father listed as a son in / والد بطور بیٹا درج",
      type: 'object',
      description:
        'Set by the website form when the father was picked from the ledger but has no record of his own: the record that lists him among its sons.',
      fields: [
        defineField({ name: 'record', title: 'Record', type: 'reference', to: [{ type: 'lineageRecord' }], weak: true }),
        defineField({ name: 'sonName', title: "Father's name as listed", type: 'string' }),
      ],
    }),
    defineField({
      name: 'updatesRecord',
      title: 'Corrects record / اس ریکارڈ کی تصحیح',
      type: 'reference',
      to: [{ type: 'lineageRecord' }],
      weak: true,
      description:
        'Set by the website form when the person picked himself from the ledger. In the family tree this record replaces that one; delete this record to undo.',
    }),
    defineField({
      name: 'customKhandan',
      title: 'Khandan details (if not listed) / خاندان کی تفصیل',
      type: 'string',
      hidden: ({ parent }) => parent?.khandan !== 'other' && parent?.mohalla !== 'Other',
    }),
    defineField({
      name: 'referencePageNumber',
      title: 'Reference Page in Kausar-ul-Ansab (1999) / کوثر الانساب کا حوالہ صفحہ نمبر',
      type: 'string',
      description: 'Page number in the 1999 edition by Syed Nazar-e-Hasnain Naqvi (if known)',
    }),
    defineField({
      name: 'profileImage',
      title: 'Profile Photo (Optional) / تصویر (اختیاری)',
      type: 'image',
      options: { hotspot: true },
      description: 'Optional photo of the family head. Photos of wife and daughters are not collected.',
    }),
    defineField({
      name: 'wifeDetails',
      title: "Wife's Details / زوجہ کی تفصیلات",
      type: 'object',
      fields: [
        defineField({
          name: 'name',
          title: "Wife's Name / زوجہ کا نام",
          type: 'string',
        }),
        defineField({
          name: 'fatherName',
          title: "Father's Name & Lineage / والد کا نام و خاندان",
          type: 'string',
        }),
        defineField({
          name: 'mohalla',
          title: "Wife's Native Mohalla / زوجہ کا آبائی محلہ",
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'sons',
      title: "Sons (Syed) / بیٹے (سید)",
      type: 'array',
      description: 'Add each son and their details',
      of: [
        {
          type: 'object',
          name: 'son',
          title: 'Son',
          fields: [
            defineField({
              name: 'name',
              title: "Son's Name / نام مع سید",
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'occupationOrNotes',
              title: 'Profession / Residence / Notes (اختیاری)',
              type: 'string',
            }),
            defineField({
              name: 'isDeceased',
              title: 'Is Deceased? / مرحوم',
              type: 'boolean',
              initialValue: false,
            }),
            defineField({
              name: 'photo',
              title: "Son's Photo (Optional) / تصویر (اختیاری)",
              type: 'image',
              options: { hotspot: true },
            }),
            birthOrderField,
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'occupationOrNotes',
              media: 'photo',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'daughters',
      title: "Daughters (Syeda) / بیٹیاں (سیدہ)",
      type: 'array',
      description: 'Add each daughter and her husband details',
      of: [
        {
          type: 'object',
          name: 'daughter',
          title: 'Daughter',
          fields: [
            defineField({
              name: 'name',
              title: "Daughter's Name / نام مع سیدہ",
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'maritalStatus',
              title: 'Marital Status / ازدواجی حیثیت',
              type: 'string',
              options: {
                list: [
                  { title: 'Married / شادی شدہ', value: 'married' },
                  { title: 'Unmarried / غیر شادی شدہ', value: 'unmarried' },
                ],
                layout: 'radio',
              },
              initialValue: 'married',
            }),
            defineField({
              name: 'husbandName',
              title: "Husband's Name / داماد کا نام (سید)",
              type: 'string',
              hidden: ({ parent }) => parent?.maritalStatus === 'unmarried',
            }),
            defineField({
              name: 'husbandFatherName',
              title: "Husband's Father's Name / داماد کے والد کا نام",
              type: 'string',
              hidden: ({ parent }) => parent?.maritalStatus === 'unmarried',
            }),
            defineField({
              name: 'husbandMohalla',
              title: "Husband's Mohalla / داماد کا محلہ یا خاندان",
              type: 'string',
              hidden: ({ parent }) => parent?.maritalStatus === 'unmarried',
            }),
            defineField({
              name: 'notes',
              title: 'Notes (اختیاری)',
              type: 'string',
              description: 'e.g. عرف (nickname), زوجہ ثانی',
            }),
            birthOrderField,
          ],
          preview: {
            select: {
              title: 'name',
              husband: 'husbandName',
              status: 'maritalStatus',
            },
            prepare({ title, husband, status }) {
              return {
                title: title || 'Daughter',
                subtitle: status === 'married' ? `Husband: ${husband || 'N/A'}` : 'Unmarried',
              }
            },
          },
        },
      ],
    }),
    defineField({
      name: 'contactDetails',
      title: 'Private Contact Details / رازداری (Not for book print)',
      type: 'object',
      description: 'Phone numbers and home addresses will NOT be published in the book.',
      fields: [
        defineField({
          name: 'phone',
          title: 'WhatsApp / Phone Number',
          type: 'string',
          validation: (Rule) => Rule.custom(requiredUnlessFromBook),
        }),
        defineField({
          name: 'address',
          title: 'Courier Delivery Address',
          type: 'text',
          rows: 3,
          validation: (Rule) => Rule.custom(requiredUnlessFromBook),
        }),
      ],
    }),
    defineField({
      name: 'advanceBooking',
      title: 'Advance Booking & Payment Details / پیشگی بکنگ',
      type: 'object',
      fields: [
        defineField({
          name: 'bookingType',
          title: 'Booking Choice',
          type: 'string',
          options: {
            list: [
              { title: 'Standard Book (Rs. 6,000)', value: 'standard_5000' },
              { title: 'Book with Color Photo (Rs. 8,000)', value: 'with_photo_7000' },
              { title: 'Only Submitting Lineage (No book order)', value: 'submission_only' },
            ],
            layout: 'radio',
          },
        }),
        defineField({
          name: 'transactionId',
          title: 'Bank Transaction ID / Slip No.',
          type: 'string',
        }),
        defineField({
          name: 'paymentSlipImage',
          title: 'Deposit Slip / Receipt Photo',
          type: 'image',
          options: { hotspot: true },
        }),
        defineField({
          name: 'paymentSlipFile',
          title: 'Deposit Slip / Receipt (PDF)',
          type: 'file',
          description: 'Used when the slip was sent as a PDF instead of a photo',
        }),
        defineField({
          name: 'verifiedAt',
          title: 'Payment Marked Paid At',
          type: 'datetime',
          readOnly: true,
        }),
        defineField({
          name: 'colorPhoto',
          title: 'Passport-Size Color Photo for Book',
          type: 'image',
          options: { hotspot: true },
          description: 'Applicable if Rs. 2,000 photo inclusion option is paid',
        }),
        defineField({
          name: 'paymentStatus',
          title: 'Payment Status',
          type: 'string',
          options: {
            list: [
              { title: 'Pending Verification', value: 'pending' },
              { title: 'Payment Verified', value: 'verified' },
              { title: 'Book Dispatched', value: 'dispatched' },
              { title: 'Not Applicable', value: 'na' },
            ],
          },
          initialValue: 'pending',
        }),
      ],
    }),
    defineField({
      name: 'submissionMeta',
      title: 'Submission Information',
      type: 'object',
      fields: [
        defineField({
          name: 'submitterName',
          title: 'Name of Person Filling Form',
          type: 'string',
        }),
        defineField({
          name: 'submittedAt',
          title: 'Submitted At',
          type: 'datetime',
          initialValue: () => new Date().toISOString(),
        }),
        defineField({
          name: 'isApprovedForBook',
          title: 'Approved for Book Printing',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({
          name: 'originalSpellings',
          title: 'Names Typed in English',
          description: 'The form turned these into Urdu before saving. Check the Urdu against what the family typed.',
          type: 'array',
          readOnly: true,
          of: [
            {
              type: 'object',
              fields: [
                { name: 'english', title: 'Typed', type: 'string' },
                { name: 'urdu', title: 'Saved as', type: 'string' },
                { name: 'guessed', title: 'Not in the book (spelling guessed)', type: 'boolean' },
              ],
              preview: { select: { title: 'urdu', subtitle: 'english' } },
            },
          ],
        }),
        defineField({
          name: 'editorialNotes',
          title: 'Editorial / Nasab Nama Notes',
          type: 'text',
          rows: 3,
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      father: 'fatherName',
      mohalla: 'mohalla',
      booking: 'advanceBooking.bookingType',
      media: 'profileImage',
    },
    prepare({ title, father, mohalla, booking, media }) {
      return {
        title: `${title || 'Unnamed'} s/o ${father || 'Unknown'}`,
        subtitle: `${mohalla || ''} • Booking: ${booking || 'None'}`,
        media,
      }
    },
  },
})

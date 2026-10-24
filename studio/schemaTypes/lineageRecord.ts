import { defineType, defineField } from 'sanity'

export const lineageRecord = defineType({
  name: 'lineageRecord',
  title: 'Lineage Record (شجرۂ نسب)',
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
      name: 'mohalla',
      title: 'Mohalla in Amroha / امروحہ کا محلہ',
      type: 'string',
      options: {
        list: [
          { title: 'Mohalla Tripolia / محلہ ترپولیا', value: 'Tripolia' },
          { title: 'Mohalla Gher Manaf / محلہ گھیر مناف', value: 'Gher Manaf' },
          { title: 'Mohalla Chhappah / محلہ چھپاہ', value: 'Chhappah' },
          { title: 'Mohalla Sadat / محلہ سادات', value: 'Sadat' },
          { title: 'Mohalla Shafat Pota / محلہ شفاعت پوتا', value: 'Shafat Pota' },
          { title: 'Mohalla Danishmandan / محلہ دانشمندان', value: 'Danishmandan' },
          { title: 'Mohalla Kot / محلہ کوٹ', value: 'Kot' },
          { title: 'Mohalla Qazi Zada / محلہ قاضی زادہ', value: 'Qazi Zada' },
          { title: 'Other Mohalla / دیگر محلہ', value: 'Other' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'customMohalla',
      title: 'Custom Mohalla (if Other selected) / دیگر محلہ کی تفصیل',
      type: 'string',
      hidden: ({ parent }) => parent?.mohalla !== 'Other',
    }),
    defineField({
      name: 'referencePageNumber',
      title: 'Reference Page in Kausar-ul-Ansab (1999) / کوثر الانساب کا حوالہ صفحہ نمبر',
      type: 'string',
      description: 'Page number in the 1999 edition by Syed Nazar-e-Hasnain Naqvi (if known)',
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
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'occupationOrNotes',
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
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'address',
          title: 'Courier Delivery Address',
          type: 'text',
          rows: 3,
          validation: (Rule) => Rule.required(),
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
              { title: 'Standard Book (Rs. 5,000)', value: 'standard_5000' },
              { title: 'Book with Color Photo (Rs. 7,000)', value: 'with_photo_7000' },
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
          name: 'editorialNotes',
          title: 'Editorial / Shijra Notes',
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
    },
    prepare({ title, father, mohalla, booking }) {
      return {
        title: `${title || 'Unnamed'} s/o ${father || 'Unknown'}`,
        subtitle: `${mohalla || ''} • Booking: ${booking || 'None'}`,
      }
    },
  },
})

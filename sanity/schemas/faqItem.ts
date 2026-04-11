import { defineType, defineField } from 'sanity'

export const faqItemSchema = defineType({
  name: 'faqItem',
  title: 'FAQ - Pytania i odpowiedzi',
  type: 'document',
  fields: [
    defineField({ name: 'question', title: 'Pytanie', type: 'string', validation: r => r.required() }),
    defineField({ name: 'answer', title: 'Odpowiedź', type: 'text', rows: 5, validation: r => r.required() }),
    defineField({ name: 'order', title: 'Kolejność', type: 'number' }),
  ],
})

import { defineType, defineField } from 'sanity'

export const testimonialSchema = defineType({
  name: 'testimonial',
  title: 'Opinie klientów',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Imię i nazwisko', type: 'string', validation: r => r.required() }),
    defineField({ name: 'role', title: 'Kim jest (np. Właściciel nieruchomości)', type: 'string' }),
    defineField({ name: 'content', title: 'Treść opinii', type: 'text', rows: 4, validation: r => r.required() }),
    defineField({ name: 'rating', title: 'Ocena (1-5)', type: 'number', validation: r => r.required().min(1).max(5) }),
    defineField({ name: 'order', title: 'Kolejność', type: 'number' }),
  ],
})

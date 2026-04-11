import { defineType, defineField } from 'sanity'

export const navigationSchema = defineType({
  name: 'navigation',
  title: 'Nawigacja i Stopka',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'navLinks',
      title: 'Linki nawigacji',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'label', title: 'Tekst', type: 'string' }),
          defineField({ name: 'sectionId', title: 'ID sekcji (np. uslugi)', type: 'string' }),
        ]
      }]
    }),
    defineField({ name: 'footerDescription', title: 'Opis w stopce', type: 'text', rows: 3 }),
    defineField({
      name: 'footerServiceLinks',
      title: 'Usługi w stopce',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({ name: 'facebookUrl', title: 'URL Facebook', type: 'url' }),
    defineField({ name: 'copyrightName', title: 'Nazwa firmy w copyright', type: 'string' }),
  ],
})

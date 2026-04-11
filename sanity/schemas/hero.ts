import { defineType, defineField } from 'sanity'

export const heroSchema = defineType({
  name: 'hero',
  title: 'Sekcja Hero',
  type: 'document',
  fields: [
    defineField({ name: 'headline', title: 'Nagłówek główny', type: 'string', validation: r => r.required() }),
    defineField({ name: 'subheading', title: 'Podtytuł', type: 'text', rows: 3 }),
    defineField({ name: 'locationLabel', title: 'Etykieta lokalizacji', type: 'string' }),
    defineField({
      name: 'stats',
      title: 'Statystyki',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'value', title: 'Wartość', type: 'string' }),
          defineField({ name: 'label', title: 'Opis', type: 'string' }),
        ]
      }]
    }),
  ]
})

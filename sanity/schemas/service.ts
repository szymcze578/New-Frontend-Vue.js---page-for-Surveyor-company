import { defineType, defineField } from 'sanity'

const iconOptions = [
  { title: 'Mapa projektowa', value: 'Map' },
  { title: 'Budynek (Deweloper)', value: 'Building2' },
  { title: 'Podział nieruchomości', value: 'Scissors' },
  { title: 'Ewidencja gruntów', value: 'FileText' },
  { title: 'Pomiary (Linijka)', value: 'Ruler' },
  { title: 'Obsługa inwestycji', value: 'TrendingUp' },
  { title: 'Dom', value: 'Home' },
  { title: 'Cel / Tarczy', value: 'Target' },
  { title: 'Blask / Nowy', value: 'Sparkles' },
]

export const serviceSchema = defineType({
  name: 'service',
  title: 'Usługi',
  type: 'document',
  fields: [
    defineField({
      name: 'iconName',
      title: 'Ikona',
      type: 'string',
      options: { list: iconOptions, layout: 'dropdown' },
      validation: r => r.required(),
    }),
    defineField({ name: 'title', title: 'Nazwa usługi', type: 'string', validation: r => r.required() }),
    defineField({ name: 'description', title: 'Opis', type: 'text', rows: 3 }),
    defineField({
      name: 'features',
      title: 'Cechy / Zakres',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({ name: 'order', title: 'Kolejność', type: 'number' }),
  ],
  orderings: [{ title: 'Kolejność', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
})

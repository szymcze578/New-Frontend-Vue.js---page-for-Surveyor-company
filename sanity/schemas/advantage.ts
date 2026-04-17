import { defineType, defineField } from 'sanity'
import { iconOptions } from './shared/iconOptions'

export const advantageSchema = defineType({
  name: 'advantage',
  title: 'Atuty',
  type: 'document',
  fields: [
    defineField({ name: 'iconName', title: 'Ikona', type: 'string', options: { list: iconOptions, layout: 'dropdown' } }),
    defineField({ name: 'title', title: 'Tytuł', type: 'string', validation: r => r.required() }),
    defineField({ name: 'description', title: 'Opis', type: 'text', rows: 3 }),
    defineField({ name: 'order', title: 'Kolejność', type: 'number' }),
  ],
})

import { defineType, defineField } from 'sanity'
import { iconOptions } from './shared/iconOptions'

export const trustStatSchema = defineType({
  name: 'trustStat',
  title: 'Zaufanie - Statystyki',
  type: 'document',
  fields: [
    defineField({ name: 'iconName', title: 'Ikona', type: 'string', options: { list: iconOptions, layout: 'dropdown' } }),
    defineField({ name: 'value', title: 'Wartość (np. ±2mm)', type: 'string', validation: r => r.required() }),
    defineField({ name: 'label', title: 'Etykieta (np. Dokładność)', type: 'string', validation: r => r.required() }),
    defineField({ name: 'description', title: 'Opis', type: 'text', rows: 2 }),
    defineField({ name: 'order', title: 'Kolejność', type: 'number' }),
  ],
})

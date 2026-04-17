import { defineType, defineField } from 'sanity'
import { iconOptions } from './shared/iconOptions'

export const processStepSchema = defineType({
  name: 'processStep',
  title: 'Kroki procesu',
  type: 'document',
  fields: [
    defineField({ name: 'number', title: 'Numer (np. 01)', type: 'string', validation: r => r.required() }),
    defineField({ name: 'iconName', title: 'Ikona', type: 'string', options: { list: iconOptions, layout: 'dropdown' } }),
    defineField({ name: 'title', title: 'Tytuł kroku', type: 'string', validation: r => r.required() }),
    defineField({ name: 'description', title: 'Opis', type: 'text', rows: 3 }),
    defineField({ name: 'order', title: 'Kolejność', type: 'number' }),
  ],
})

import { defineType, defineField } from 'sanity'

const iconOptions = [
  { title: 'Cel (Dokładność)', value: 'Target' },
  { title: 'Kalendarz (Dostępność)', value: 'Calendar' },
  { title: 'Trofeum (Projekty)', value: 'Trophy' },
  { title: 'Zegar (Doświadczenie)', value: 'Clock' },
  { title: 'Gwiazda', value: 'Star' },
  { title: 'Odznaka', value: 'BadgeCheck' },
]

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

import { defineType, defineField } from 'sanity'

const iconOptions = [
  { title: 'Technologia (Błyskawica)', value: 'Zap' },
  { title: 'Obsługa (Słuchawki)', value: 'Headphones' },
  { title: 'Certyfikaty (Odznaka)', value: 'BadgeCheck' },
  { title: 'Szybkość (Zegar)', value: 'Clock' },
  { title: 'Zespół (Użytkownicy)', value: 'Users' },
  { title: 'Lokalizacja (Glob)', value: 'Globe' },
  { title: 'Tarcza (Bezpieczeństwo)', value: 'Shield' },
  { title: 'Nagroda (Trofeum)', value: 'Award' },
]

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

import { defineType, defineField } from 'sanity'

const iconOptions = [
  { title: 'Telefon (Kontakt)', value: 'Phone' },
  { title: 'Plik z checkmarkiem (Dokumentacja)', value: 'FileCheck' },
  { title: 'Pinezka mapy (Pomiary)', value: 'MapPinned' },
  { title: 'Zaznaczony okrąg (Odbiór)', value: 'CheckCircle2' },
  { title: 'Mapa', value: 'Map' },
  { title: 'Linijka (Pomiary)', value: 'Ruler' },
  { title: 'Plik tekstowy', value: 'FileText' },
  { title: 'Lokalizacja (Pin)', value: 'MapPin' },
  { title: 'Klucz (Serwis)', value: 'Wrench' },
  { title: 'Kalendarz', value: 'Calendar' },
  { title: 'Zegar', value: 'Clock' },
  { title: 'Tarcza (Bezpieczeństwo)', value: 'Shield' },
]

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

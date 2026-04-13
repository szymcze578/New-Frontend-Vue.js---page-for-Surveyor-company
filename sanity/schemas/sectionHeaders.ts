import { defineType, defineField } from 'sanity'

const sectionField = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: 'object',
    fields: [
      defineField({ name: 'badge', title: 'Badge', type: 'string' }),
      defineField({ name: 'title', title: 'Tytuł', type: 'string' }),
      defineField({ name: 'description', title: 'Opis', type: 'text', rows: 2 }),
    ],
  })

export const sectionHeadersSchema = defineType({
  name: 'sectionHeaders',
  title: 'Nagłówki sekcji',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    sectionField('services', 'Usługi'),
    sectionField('process', 'Proces'),
    sectionField('advantages', 'Atuty'),
    sectionField('projects', 'Projekty'),
    sectionField('opinions', 'Opinie'),
    sectionField('faq', 'FAQ'),
  ],
})

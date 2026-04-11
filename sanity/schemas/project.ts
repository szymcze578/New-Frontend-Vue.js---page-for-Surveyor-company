import { defineType, defineField } from 'sanity'

export const projectSchema = defineType({
  name: 'project',
  title: 'Realizacje (Portfolio)',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Tytuł projektu', type: 'string', validation: r => r.required() }),
    defineField({
      name: 'image',
      title: 'Zdjęcie projektu',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'category',
      title: 'Kategoria',
      type: 'string',
      options: {
        list: [
          { title: 'Komercyjna', value: 'Komercyjna' },
          { title: 'Infrastruktura', value: 'Infrastruktura' },
          { title: 'Budownictwo', value: 'Budownictwo' },
          { title: 'Przemysłowa', value: 'Przemysłowa' },
        ],
        layout: 'dropdown',
      },
      validation: r => r.required(),
    }),
    defineField({ name: 'description', title: 'Opis', type: 'text', rows: 3 }),
    defineField({ name: 'order', title: 'Kolejność', type: 'number' }),
  ],
})

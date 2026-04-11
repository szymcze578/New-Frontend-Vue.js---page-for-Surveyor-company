import { defineType, defineField } from 'sanity'

export const contactInfoSchema = defineType({
  name: 'contactInfo',
  title: 'Dane kontaktowe',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({ name: 'phone', title: 'Telefon (np. +48 602 319 486)', type: 'string', validation: r => r.required() }),
    defineField({ name: 'email', title: 'Email', type: 'string', validation: r => r.required().email() }),
    defineField({ name: 'addressLine1', title: 'Adres linia 1 (np. ul. Sienkiewicza 36)', type: 'string' }),
    defineField({ name: 'addressLine2', title: 'Adres linia 2 (np. Zawiercie, woj. śląskie)', type: 'string' }),
  ],
})

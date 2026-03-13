import { defineType, defineField, defineArrayMember } from 'sanity';

export const heroSection = defineType({
  name: 'heroSection',
  title: 'Hero',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Texto',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Imagen de fondo',
      type: 'image',
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'buttons',
      title: 'Botones',
      type: 'array',
      of: [defineArrayMember({ type: 'button' })],
      validation: (rule) => rule.max(2),
    }),
  ],
});

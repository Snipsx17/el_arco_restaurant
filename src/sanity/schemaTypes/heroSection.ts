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
      of: [
        defineArrayMember({
          type: 'object',
          name: 'button',
          title: 'Botón',
          fields: [
            defineField({
              name: 'label',
              title: 'Texto del botón',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'Enlace',
              type: 'url',
              validation: (rule) =>
                rule.uri({
                  allowRelative: true,
                  scheme: ['http', 'https', 'tel', 'mailto'],
                }),
            }),
            defineField({
              name: 'isPrimary',
              title: '¿Es botón primario?',
              type: 'boolean',
              initialValue: false,
            }),
          ],
        }),
      ],
      validation: (rule) => rule.max(2),
    }),
  ],
});

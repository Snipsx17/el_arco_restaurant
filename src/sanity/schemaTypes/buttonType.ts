import { defineField, defineType } from 'sanity';

export const buttonType = defineType({
  name: 'button',
  title: 'Botón',
  type: 'object',
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
});
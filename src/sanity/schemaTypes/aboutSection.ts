import { defineType, defineField } from 'sanity';

export const aboutSection = defineType({
  name: "aboutSection",
  title: "Sobre Nosotros",
  type: "object",
  fields: [
    defineField({
      name: "pretitle",
      title: "Pretítulo",
      type: "string",
      description: "Texto pequeño arriba del título (ej: SOBRE NOSOTROS)",
    }),
    defineField({
      name: "title",
      title: "Título principal",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Descripción principal",
      type: "text",
      rows: 4,
      description: "Párrafo principal de la sección",
    }),
    defineField({
      name: "highlightText",
      title: "Texto destacado",
      type: "string",
      description: "Texto que aparecerá en color dorado (ej: Somos parte de la familia...)",
    }),
    defineField({
      name: "additionalText",
      title: "Texto adicional",
      type: "text",
      rows: 3,
      description: "Texto que aparece debajo del texto destacado",
    }),
    defineField({
      name: "image",
      title: "Imagen",
      type: "image",
      options: { hotspot: true },
      description: "Imagen que acompañará la sección",
    }),
    defineField({
      name: "button",
      title: "Botón",
      type: "button",
    }),
  ],
});
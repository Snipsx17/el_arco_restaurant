import { defineField, defineType } from "sanity";

export const historySection = defineType({
  name: "historySection",
  title: "History Section",
  type: "object",
  fields: [
    defineField({
      name: "pretitle",
      title: "Pretítulo",
      type: "string",
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
      name: "images",
      title: "Imágenes del carrusel",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Texto alternativo",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "caption",
              title: "Pie de foto",
              type: "string",
            }),
          ],
        },
      ],
      validation: (rule) =>
        rule.max(6).error("Maximo 6 imagenes"),
    }),
  ],
});

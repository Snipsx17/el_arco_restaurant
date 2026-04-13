import { defineField, defineType } from "sanity";

export const gallerySection = defineType({
  name: "gallerySection",
  title: "Gallery Section",
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
      title: "Galeria",
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
          ],
        },
      ],
      validation: (rule) => rule.max(9).error("Maximo 9 imagenes"),
    }),
  ],
});
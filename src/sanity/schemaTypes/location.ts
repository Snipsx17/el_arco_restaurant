import { defineField, defineType } from "sanity";

export const locationSection = defineType({
  name: "locationSection",
  title: "Location Section",
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
      title: "Imagenes",
      type: "object",
      fields: [
        defineField({
          name: "image1",
          title: "Imagen 1",
          type: "image",
          options: { hotspot: true },
          description: "Imagen 1",
        }),
        defineField({
          name: "image2",
          title: "Imagen 2",
          type: "image",
          options: { hotspot: true },
          description: "Imagen 2",
        }),
        defineField({
          name: "image3",
          title: "Imagen 3",
          type: "image",
          options: { hotspot: true },
          description: "Imagen 3",
        }),
      ],
    }),
  ],
});
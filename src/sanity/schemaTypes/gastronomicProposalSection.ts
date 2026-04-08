import { defineField, defineType } from "sanity";

export const gastronomicProposal = defineType({
  name: "gastronomicProposalSection",
  title: "Gastronomic Porposal",
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
      name: "proposals",
      title: "propuestas gastronomicas",
      type: "object",
      fields: [
        defineField({
          name: "mainProposal",
          title: "Propuesta Principal",
          type: "object",
          fields: [
            defineField({
              name: "proposalTitle",
              title: "Título de propuesta principal",
              type: "string",
            }),
            defineField({
              name: "proposalDescription",
              title: "Texto de la propuesta",
              type: "text",
              rows: 4,
            }),
            defineField({
              name: "image",
              title: "Imagen",
              type: "image",
              options: { hotspot: true },
              description: "Imagen de la propuesta",
            }),
          ],
        }),
        defineField({
          name: "firstProposal",
          title: "Propuesta 1",
          type: "object",
          fields: [
            defineField({
              name: "proposalTitle",
              title: "Título de propuesta",
              type: "string",
            }),
            defineField({
              name: "proposalDescription",
              title: "Texto de la propuesta",
              type: "text",
              rows: 4,
            }),
            defineField({
              name: "image",
              title: "Imagen",
              type: "image",
              options: { hotspot: true },
              description: "Imagen de la propuesta",
            }),
          ],
        }),
        defineField({
          name: "secondProposal",
          title: "Propuesta 2",
          type: "object",
          fields: [
            defineField({
              name: "proposalTitle",
              title: "Título de propuesta",
              type: "string",
            }),
            defineField({
              name: "proposalDescription",
              title: "Texto de la propuesta",
              type: "text",
              rows: 4,
            }),
            defineField({
              name: "image",
              title: "Imagen",
              type: "image",
              options: { hotspot: true },
              description: "Imagen de la propuesta",
            }),
          ],
        }),
        defineField({
          name: "thirdProposal",
          title: "Propuesta 3",
          type: "object",
          fields: [
            defineField({
              name: "proposalTitle",
              title: "Título de propuesta",
              type: "string",
            }),
            defineField({
              name: "proposalDescription",
              title: "Texto de la propuesta",
              type: "text",
              rows: 4,
            }),
            defineField({
              name: "image",
              title: "Imagen",
              type: "image",
              options: { hotspot: true },
              description: "Imagen de la propuesta",
            }),
          ],
        }),
      ],
    }),
  ],
});

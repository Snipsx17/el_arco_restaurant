import { defineType, defineField, defineArrayMember } from "sanity";

export const navbarType = defineType({
  name: "navbar",
  title: "Navbar",
  type: "document",
  preview: {
    prepare() {
      return { title: "Navbar" };
    },
  },
  fields: [
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "links",
      title: "Links",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "navLink",
          title: "Link",
          fields: [
            defineField({
              name: "label",
              title: "Etiqueta",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "url",
              title: "Enlace",
              type: "url",
              validation: (rule) =>
                rule.uri({
                  allowRelative: true,
                  scheme: ["http", "https", "tel", "mailto"],
                }),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "button",
      title: "Botón (opcional)",
      type: "object",
      fields: [
        defineField({
          name: "label",
          title: "Etiqueta",
          type: "string",
        }),
        defineField({
          name: "url",
          title: "Enlace",
          type: "url",
          validation: (rule) =>
            rule.uri({
              allowRelative: true,
              scheme: ["http", "https", "tel", "mailto"],
            }),
        }),
      ],
    }),
  ],
});

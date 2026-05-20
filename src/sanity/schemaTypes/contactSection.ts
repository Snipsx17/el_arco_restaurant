import { defineField, defineType } from "sanity";

export const contactSection = defineType({
  name: "contactSection",
  title: "Contacto",
  type: "object",
  fields: [
    defineField({
      name: "pretitle",
      title: "Pretítulo",
      type: "string",
      description: "Texto pequeño arriba del título",
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
      name: "information",
      title: "Informacion de contacto",
      type: "object",
      fields: [
        defineField({
          name: "address",
          title: "Direccion",
          type: "string",
        }),
        defineField({
          name: "telephone",
          title: "Telefono",
          type: "string",
          validation: (Rule) =>
            Rule.custom((value) => {
              if (!value) return true;

              const spainPhoneRegex =
                /^(?:(?:\+?34|0034|34)?[ -]?)?([6789]\d{8})$/;

              if (spainPhoneRegex.test(value)) {
                return true;
              }

              return "Debe ser un número de España válido (9 dígitos, ej: 600123456)";
            }),
        }),
        defineField({
          name: "email",
          title: "Email",
          type: "email",
        }),
      ],
    }),
  ],
});
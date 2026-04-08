import { defineArrayMember, defineField, defineType } from "sanity";

export const homePageType = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  preview: {
    prepare() {
      return {
        title: "Home Page",
      };
    },
  },
  fields: [
    defineField({
      name: "sections",
      title: "Sections",
      type: "array",
      of: [
        defineArrayMember({ type: "heroSection" }),
        defineArrayMember({ type: "aboutSection" }),
        defineArrayMember({ type: "gastronomicProposalSection" }),
      ],
    }),
  ],
});
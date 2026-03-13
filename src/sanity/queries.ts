import { defineQuery } from "next-sanity";

export const HOME_PAGE_QUERY = defineQuery(`
  *[_type == "homePage"][0]{
    sections[]{
      _type,
      _key,
      _type == "heroSection" => {
        title,
        subtitle,
        text,
        image,
        buttons[]{
          label,
          url,
          isPrimary
        }
      },
      _type == "aboutSection" => {
        pretitle,
        title,
        description,
        highlightText,
        additionalText,
        image,
        button{
          label,
          url,
          isPrimary
        }
      }
    }
  }
`);

export const NAVBAR_QUERY = defineQuery(`
  *[_type == "navbar"][0]{
    logo,
    links[]{
      label,
      url
    },
    button{
      label,
      url
    }
  }
`);

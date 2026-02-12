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
      }
    }
  }
`);

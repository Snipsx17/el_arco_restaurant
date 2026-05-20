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
      },
      _type == "gastronomicProposalSection" => {
        pretitle,
        title,
        description,
        proposals{
          mainProposal {
            proposalTitle,
            proposalDescription,
            image{
              asset->,
              hotspot,
              crop
            }
          },
          firstProposal {
            proposalTitle,
            proposalDescription,
            image{
              asset->,
              hotspot,
              crop
            }
          },
          secondProposal {
            proposalTitle,
            proposalDescription,
            image{
              asset->,
              hotspot,
              crop
            }
          },
          thirdProposal {
            proposalTitle,
            proposalDescription,
            image{
              asset->,
              hotspot,
              crop
            }
          }
        }
      },
       _type == "terraceSection" => {
          pretitle,
          title,
          description,
          image
       },
       _type == "locationSection" => {
          pretitle,
          title,
          description,
          images {
            image1 {
              asset->,
              hotspot,
              crop
            },
            image2 {
              asset->,
              hotspot,
              crop
            },
            image3 {
              asset->,
              hotspot,
              crop
            }
          }
       },
       _type == "historySection" => {
          pretitle,
          title,
          description,
          images[]{
            asset->,
            alt,
            caption
          }
       },
       _type == "gallerySection" => {
          pretitle,
          title,
          description,
          images[]{
            asset->,
            alt
          }
       },
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

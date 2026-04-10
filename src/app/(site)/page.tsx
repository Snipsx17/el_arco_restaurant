
import About from "@/components/sections/About";
import GastronomicProposalSe from "@/components/sections/gastronomy/GastronomicProposal";
import Hero from "@/components/sections/Hero";
import History from "@/components/sections/history/History";
import Location from "@/components/sections/Location";
import Terrace from "@/components/sections/Terrace";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { HOME_PAGE_QUERY } from "@/sanity/queries";
import { HomePage } from "@/sanity/types";

export default async function Home() {

  const page = await client.fetch<HomePage>(
    HOME_PAGE_QUERY,
    {},
    { next: { revalidate: 0 } }
  )

  if (!page?.sections) return null

  return (page.sections.map(section => {
    switch (section._type) {
      case "heroSection":
        const imageUrl = urlFor(section.image);

        return (
          <Hero
            key={section._key}
            data={{ ...section, image: imageUrl }}
          />
        )

      case "aboutSection":
        const aboutImageUrl = urlFor(section.image!);
        return (
          <About
            key={section._key}
            data={{ ...section, image: aboutImageUrl }}
          />
        )

      case "gastronomicProposalSection":

        return (
          <GastronomicProposalSe
            key={section._key}
            data={{ ...section }}
          />
        );

      case "terraceSection":
        return (
          <Terrace
            key={section._key}
            data={section}
          />
        );

      case "locationSection":
        return (
          <Location
            key={section._key}
            data={section}
          />
        );

      case "historySection":
        return (
          <History
            key={section._key}
            data={section}
          />
        );

      default:
        return null
    }
  }))
}

import Hero from "@/components/sections/Hero";
import { urlFor } from "@/helpers/imageUrlBuilder";
import { client } from "@/sanity/lib/client";
import { HOME_PAGE_QUERY } from "@/sanity/queries";
import { HomePage } from "@/sanity/types";

export default async function Home() {

  const page = await client.fetch<HomePage>(
    HOME_PAGE_QUERY,
    {},
    { next: { revalidate: 60 } }
  )

  if (!page?.sections) return null

  return (page.sections.map(section => {
    switch (section._type) {
      case "heroSection":
        const imageUrl = section.image
          ? urlFor(section.image)?.width(1920).quality(80).url()
          : null
        return (
          <Hero
            key={section._key}
            data={{ ...section, image :imageUrl }}
          />
        )
      default:
        return null
    }
  }
  
)
)
}

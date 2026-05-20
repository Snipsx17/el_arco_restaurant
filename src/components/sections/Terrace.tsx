import { TerraceSection } from "@/sanity/types"
import Separator from "../ui/Separator"
import Image from "next/image"
import { urlFor } from "@/sanity/lib/image"
import SectionHeader from "../SectionHeader"

interface Props {
    data: TerraceSection
}

export default function Terrace({ data }: Props) {
    const { pretitle, title, description, image } = data
    return (
        <section className="flex flex-col md:flex-row gap-10 px-5 py-24 md:p-28 items-stretch">

            <div className="flex flex-col items-center md:w-2/3 gap-8">
                <SectionHeader pretitle={pretitle!} title={title} description={description!} alignment="center" />
            </div>

            <div className="relative md:w-1/2 min-h-120 md:min-h-140">
                {image && <Image loading="lazy" src={urlFor(image, 100)} className="object-cover" alt={title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />}
            </div>
        </section>
    )
}

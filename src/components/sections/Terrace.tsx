import { TerraceSection } from "@/sanity/types"
import Separator from "../ui/Separator"
import Image from "next/image"
import { urlFor } from "@/sanity/lib/image"

interface Props {
    data: TerraceSection
}

export default function Terrace({ data }: Props) {
    const { pretitle, title, description, image } = data
    return (
        <section className="flex flex-col md:flex-row gap-10 px-5 py-24 md:p-28 items-stretch">

            <div className="flex flex-col items-center md:w-2/3 gap-8">
                {pretitle && <h3 className="text-gold uppercase font-fraunces" data-aos="fade-in" >{pretitle}</h3>}
                {title && <h2 className="text-4xl text-center" data-aos="fade-in" >{title}</h2>}
                <Separator />
                {description ? description?.split('\n\n').map(
                    (paragraph, index) => (<p key={index} data-aos="fade-in" >{paragraph.trim()}</p>)
                ) : null
                }
                <div>
                    
                </div>
            </div>

            <div className="relative md:w-1/2 min-h-120 md:min-h-140">
                            {image && <Image src={urlFor(image, 100)} className="object-cover" alt={title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />}
                        </div>
        </section>
    )
}

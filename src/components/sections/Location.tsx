import { LocationSection } from "@/sanity/types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import SectionHeader from "../SectionHeader";

interface Props {
    data: LocationSection
}

export default function Location({ data }: Props) {
    const { pretitle, title, description, images } = data;
    return (
        <section className="flex flex-col justify-center items-center gap-5 px-5 py-10 md:py-24 md:p-28">

            <SectionHeader pretitle={pretitle!} title={title} alignment="center" />

            {description ? description?.split('\n\n').map(
                (paragraph, index) => (<p key={index} className='text-left self-center' data-aos="fade-in" >{paragraph.trim()}</p>)
            ) : null
            }

            <div className="flex flex-col md:flex-row gap-6 w-full">

                <div className="relative md:w-1/3 h-140">
                    {images.image1 && <Image loading="lazy" src={urlFor(images.image1)} className="object-cover" alt={title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />}
                </div>

                <div className="relative md:w-1/3 h-140">
                    {images.image2 && <Image loading="lazy" src={urlFor(images.image2)} className="object-cover" alt={title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />}
                </div>

                <div className="relative md:w-1/3 h-140">
                    {images.image3 && <Image loading="lazy" src={urlFor(images.image3)} className="object-cover" alt={title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />}
                </div>

            </div>
        </section>
    )
}

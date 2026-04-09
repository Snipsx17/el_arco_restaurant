import { LocationSection } from "@/sanity/types";
import Separator from "../ui/Separator";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface Props {
    data: LocationSection
}

export default function Location({ data }: Props) {
    const { pretitle, title, description, images } = data;
    console.log(pretitle)
    return (
        <section className="flex flex-col justify-center items-center gap-10 px-5 py-10 md:py-24 md:p-28">
            <div className='text-center'>
                {pretitle && <h3 className="text-gold uppercase font-fraunces m-3" data-aos="fade-in" >{pretitle}</h3>}
                {title && <h2 className="text-4xl" data-aos="fade-in" >{title}</h2>}
            </div>
            <Separator />
            {description && <p className="description" data-aos="fade-in">{description}</p>}

            <div className="flex flex-col md:flex-row gap-6 w-full">
                
                <div className="relative md:w-1/3 h-140">
                    {images.image1 && <Image src={urlFor(images.image1)} className="object-cover" alt={title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />}
                </div>

                <div className="relative md:w-1/3 h-140">
                    {images.image2 && <Image src={urlFor(images.image2)} className="object-cover" alt={title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />}
                </div>

                <div className="relative md:w-1/3 h-140">
                    {images.image3 && <Image src={urlFor(images.image3)} className="object-cover" alt={title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />}
                </div>

            </div>
        </section>
    )
}

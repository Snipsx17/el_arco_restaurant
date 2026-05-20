import { urlFor } from "@/sanity/lib/image"
import { GalleryImage } from "@/sanity/types"
import Image from "next/image"

interface Props {
    images: GalleryImage[]
    openGallery: (imageIndex: number) => void
}
export default function ImageGrid({ images, openGallery }: Props) {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {
                images.map((image, i) => (
                    <div key={i} className="relative md:w-full min-h-120 md:min-h-100">
                        {
                            image
                            &&
                            <Image
                                loading="lazy"
                                src={urlFor(image, 100)}
                                className="object-cover cursor-pointer"
                                alt={image.alt}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                onClick={() => openGallery(i)}
                            />
                        }
                    </div>
                ))
            }
        </div>
    )
}

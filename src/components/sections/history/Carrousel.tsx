"use client"

import { urlFor } from '@/sanity/lib/image'
import { carrouselImage } from '@/sanity/types'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

interface Props {
    images: carrouselImage[]
}

export default function Carousel({ images }: Props) {
    const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 3000, stopOnInteraction: false })])

    return (
        <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
                {images.map((img, i) => (
                    <div
                        key={i}
                        style={{ flex: '0 0 33.333%' }}
                        className="min-w-0 px-2"
                    >
                        <div className="aspect-[4/3] w-full overflow-hidden rounded-lg">
                            <img
                                src={urlFor(img)}
                                alt={img.alt || ''}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
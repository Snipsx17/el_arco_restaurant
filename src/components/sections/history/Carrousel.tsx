"use client"

import { urlFor } from '@/sanity/lib/image'
import { carrouselImage } from '@/sanity/types'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

interface Props {
    images: carrouselImage[]
}

export default function Carousel({ images }: Props) {
    const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 3000, stopOnInteraction: false })])

    return (
        <div className="overflow-hidden w-full" ref={emblaRef}>
            <div className="flex">
                {images.map((img, i) => (
                    <div
                        key={i}
                        style={{ flex: '0 0 33.333%' }}
                        className="min-w-0 px-2"
                    >
                        <div className="relative aspect-4/3 w-full min-h-40 overflow-hidden rounded-lg">
                            <Image
                                src={urlFor(img)}
                                alt={img.alt || ''}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
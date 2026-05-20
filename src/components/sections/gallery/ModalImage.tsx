import Overlay from './Overlay'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { GalleryImage } from '@/sanity/types'

interface Props { 
    images: GalleryImage[], 
    handleCloseGallery: () => void, 
    currentImageIndex: number 
}

export default function ModalImage({ images, handleCloseGallery, currentImageIndex }: Props) {
    return (
        <Overlay handleCloseOverlay={handleCloseGallery}>
            <div className="relative w-90 min-h-120 md:min-h-140" >
                <button className="fixed top-5 right-5 text-white text-5xl cursor-pointer" onClick={handleCloseGallery}>X</button>
                <Image src={urlFor(images[currentImageIndex!], 80)} alt={images[currentImageIndex!].alt} fill />
            </div>
        </Overlay>
    )
}

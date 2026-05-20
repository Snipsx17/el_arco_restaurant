"use client"

import { GallerySection } from "@/sanity/types"
import SectionHeader from "../../SectionHeader"
import ImageGrid from "./ImageGrid";
import { useState } from "react";
import ModalImage from "./ModalImage";

interface Props {
  data: GallerySection
}

export default function Gallery({ data }: Props) {
  const [isOverlayOpen, setIsOverlayOpen] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<null | number>(null);

  const openGallery = (imageIndex: number) => {
    setIsOverlayOpen(true);
    setCurrentImageIndex(imageIndex)
  };

  const closeGallery = () => {
    setIsOverlayOpen(false);
    setCurrentImageIndex(null)
  };

  const { title, pretitle, description, images } = data;

  return (
    <section className="gap-10 px-5 py-24 md:p-28">
      <SectionHeader pretitle={pretitle!} title={title} description={description!} alignment="center" />

      <ImageGrid images={images} openGallery={openGallery} />

      {
        isOverlayOpen
        && <ModalImage images={images} handleCloseGallery={closeGallery} currentImageIndex={currentImageIndex!} />
      }

    </section>
  )
}

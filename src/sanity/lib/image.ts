import { createImageUrlBuilder } from '@sanity/image-url'
import { SanityImageSource } from "@sanity/image-url";
import { dataset, projectId } from '../env'

const builder = createImageUrlBuilder({ projectId, dataset })

export const urlFor = (source: SanityImageSource, quality = 80) => {
  return builder
    .image(source)
    .image(source)
    ?.quality(quality)
    .format("webp")
    .url();
}

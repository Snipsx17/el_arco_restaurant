import { HistorySection } from "@/sanity/types"
import Carousel from "./Carrousel";
import SectionHeader from "@/components/SectionHeader";

interface Props {
    data: HistorySection
}

export default function History({ data }: Props) {
    const { pretitle, title, description, images } = data;
    return (
        <section className="flex flex-col justify-center items-center gap-10 px-5 py-10 md:py-24 md:p-28">
            <SectionHeader pretitle={pretitle!} title={title} description={description!} alignment="center" />
            <Carousel images={images} />
        </section>
    )
}

import { HistorySection } from "@/sanity/types"
import Separator from "../../ui/Separator";
import Carousel from "./Carrousel";

interface Props {
    data: HistorySection
}

export default function History({ data }: Props) {
    const { pretitle, title, description, images } = data;
    return (
        <section className="flex flex-col justify-center items-center gap-10 px-5 py-10 md:py-24 md:p-28">
            <div className='text-center'>
                {pretitle && <h3 className="text-gold uppercase font-fraunces m-3" data-aos="fade-in" >{pretitle}</h3>}
                {title && <h2 className="text-4xl" data-aos="fade-in" >{title}</h2>}
            </div>
            <Separator />
            {description ? description?.split('\n\n').map(
                (paragraph, index) => (<p key={index} data-aos="fade-in" >{paragraph.trim()}</p>)
            ) : null
            }

            <Carousel images={images}/>

        </section>
    )
}

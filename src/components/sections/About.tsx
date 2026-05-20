import { AboutSection } from "@/sanity/types";
import Separator from "../ui/Separator";
import { Button } from "../ui/button";
import SectionHeader from "../SectionHeader";

interface Props {
    data: AboutSection;
}

export default function About({ data }: Props) {
    const { pretitle, title, description, highlightText, additionalText, image, button } = data

    return (
        <section className="flex flex-col md:flex-row gap-10 px-5 py-24 md:p-28 items-stretch">

            <div className="md:w-1/3 min-h-120 md:min-h-100">
                <div className="bg-no-repeat bg-cover min-h-[inherit] md:h-full" style={{ backgroundImage: image ? `url(${image})` : undefined }}></div>
            </div>
            <div className="flex flex-col items-center md:w-2/3 gap-8">
                <SectionHeader pretitle={pretitle!} title={title} description={description!} alignment="center" />

                {highlightText && <h3 data-aos="fade-in" >{highlightText}</h3>}
                {additionalText && <p data-aos="fade-in" >{additionalText}</p>}
                <div>
                    <Button key={button?.label} size={'lg'} asChild variant={button?.isPrimary ? 'customPrimary' : 'customSecondary'} data-aos="fade-in" data-aos-delay="200">
                        <a href={button?.url} target="_blank">{button?.label}</a>
                    </Button>
                </div>
            </div>
        </section>
    )
}

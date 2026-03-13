import { HeroSection } from "@/sanity/types";
import Separator from "../ui/Separator";
import { Button } from "../ui/button";

interface Props {
  data: HeroSection;
}

export default function Hero({ data }: Props) {
  const { title, subtitle, text, image, buttons } = data
  return (
    <section className={`h-screen flex justify-center content-center items-center flex-col gap-9 bg-no-repeat bg-cover px-6 md:px-0`} style={{ backgroundImage: image ? `url(${image})` : undefined }}>

      {/* Vignette overlay */}
      <div
        className="absolute inset-0 pointer-events-none bg-linear-to-t from-stone via-black/40 to-transparent" />

      <Separator />
      <div className="text-center z-10">
        <h1 className="text-5xl md:text-7xl capitalize mb-4" data-aos="fade-in" >{title}</h1>
        <p className="text-2xl md:text-3xl mb-4" data-aos="fade-in" >{subtitle}</p>
        {text && <p className="text-xl" data-aos="fade-in" >{text}</p>}
      </div>
      <Separator />
      <div className="z-10 flex gap-4 w-80">
        {
          buttons?.map(button => (

            <Button key={button.label} size={'lg'} asChild variant={button.isPrimary ? 'customPrimary' : 'customSecondary'}>
              <a href={button.url} target="_blank">{button.label}</a>
            </Button>

          ))
        }
      </div>
    </section>
  )
}

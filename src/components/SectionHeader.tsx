import Separator from './ui/Separator'

interface Props {
    pretitle?: string;
    title?: string;
    description?: string;
    alignment?: "right" | "center" | "left"
}

export default function SectionHeader({ pretitle, title, description, alignment = "center" }: Props) {
    return (
        <div className='flex flex-col gap-5 items-center' style={{ "justifyItems": alignment, "alignItems": alignment }}>
            {pretitle && <h3 className="text-gold uppercase font-fraunces" data-aos="fade-in" >{pretitle}</h3>}
            {title && <h2 className="text-4xl" style={{ "textAlign": alignment }} data-aos="fade-in" >{title}</h2>}

            <Separator />

            {description ? description?.split('\n\n').map(
                (paragraph, index) => (<p key={index} className='text-left self-start' data-aos="fade-in" >{paragraph.trim()}</p>)
            ) : null
            }
        </div>
    )
}

import Separator from "@/components/ui/Separator";
import { urlFor } from "@/sanity/lib/image";
import { Proposal } from "@/sanity/types";
import Image from "next/image";

interface Props {
    data: Proposal
}

export default function MainProposal({ data }: Props) {
    const { proposalTitle, proposalDescription, image } = data;
    return (
        <div className="flex flex-col md:flex-row gap-10">
            <div className="relative md:w-1/2 min-h-120 md:min-h-140">
                {image && <Image src={urlFor(image)} className="object-cover" alt={proposalTitle} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />}
            </div>

            <div className='flex flex-col justify-center md:w-1/2 gap-8 md:min-h-150'>
                {proposalTitle && <h3 className="text-white! uppercase font-fraunces" data-aos="fade-in" >{proposalTitle}</h3>}
                <Separator />
                {proposalDescription && <p data-aos="fade-in" >{proposalDescription}</p>}
            </div>
        </div>
    )
}

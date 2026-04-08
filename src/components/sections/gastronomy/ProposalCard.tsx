import { urlFor } from "@/sanity/lib/image";
import { Proposal } from "@/sanity/types"
import Image from "next/image";

interface Props {
    data: Proposal
}

export default function ProposalCard({ data }: Props) {
    const { proposalTitle, proposalDescription, image } = data;
    return (
        <div className='flex flex-col gap-6' >
            <div className="relative w-full h-140">
                {image && <Image src={urlFor(image)} className="object-cover" alt={proposalTitle} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />}
            </div>
            {proposalTitle && <h3 className="text-white! uppercase font-fraunces" data-aos="fade-in" >{proposalTitle}</h3>}
            {proposalDescription && <p data-aos="fade-in" >{proposalDescription}</p>}
        </div>
    )
}

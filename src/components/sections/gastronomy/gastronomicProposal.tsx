import { GastronomicProposal } from '@/sanity/types';
import Separator from '../../ui/Separator';
import MainProposal from './MainProposal';
import ProposalCard from './ProposalCard';

interface Props {
  data: GastronomicProposal;
}

export default function GastronomicProposalSe({ data }: Props) {
  const { title, pretitle, description, proposals } = data;
  const {mainProposal, firstProposal, secondProposal, thirdProposal} = proposals;

  return (
    <section className="flex flex-col justify-center items-center gap-10 px-5 py-24 md:p-28">
      <div className='text-center'>
        {pretitle && <h3 className="text-gold uppercase font-fraunces m-3" data-aos="fade-in" >{pretitle}</h3>}
        {title && <h2 className="text-4xl" data-aos="fade-in" >{title}</h2>}
      </div>
      <Separator />
      {description && <p className="description">{description}</p>}

      <MainProposal data={mainProposal} />

      <div className='flex gap-10'>  
        <ProposalCard data={firstProposal} />
        <ProposalCard data={secondProposal} />
        <ProposalCard data={thirdProposal} />
      </div>
    </section>
  )
}

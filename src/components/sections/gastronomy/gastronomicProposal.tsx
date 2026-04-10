import { GastronomicProposal } from '@/sanity/types';
import Separator from '../../ui/Separator';
import MainProposal from './MainProposal';
import ProposalCard from './ProposalCard';
import SectionHeader from '@/components/SectionHeader';

interface Props {
  data: GastronomicProposal;
}

export default function GastronomicProposalSe({ data }: Props) {
  const { title, pretitle, description, proposals } = data;
  const { mainProposal, firstProposal, secondProposal, thirdProposal } = proposals;

  return (
    <section className="flex flex-col justify-center items-center gap-10 px-5 py-10 md:py-24 md:p-28">

      <SectionHeader pretitle={pretitle!} title={title} description={description!} alignment="center" />

      <MainProposal data={mainProposal} />

      <div className='flex flex-col md:flex-row gap-10'>
        <ProposalCard data={firstProposal} />
        <ProposalCard data={secondProposal} />
        <ProposalCard data={thirdProposal} />
      </div>
    </section>
  )
}

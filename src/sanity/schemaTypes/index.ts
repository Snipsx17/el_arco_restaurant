import { type SchemaTypeDefinition } from 'sanity'
import { homePageType } from './homePageType';
import { navbarType } from "./navbarType";
import { heroSection } from './heroSection';
import { aboutSection } from './aboutSection';
import { buttonType } from './buttonType';
import { gastronomicProposal } from './gastronomicProposalSection';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homePageType, heroSection, aboutSection, navbarType, buttonType, gastronomicProposal],
};

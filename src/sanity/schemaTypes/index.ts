import { type SchemaTypeDefinition } from 'sanity'
import { homePageType } from './homePageType';
import { navbarType } from "./navbarType";
import { heroSection } from './heroSection';
import { aboutSection } from './aboutSection';
import { buttonType } from './buttonType';
import { gastronomicProposal } from './gastronomicProposalSection';
import { terraceSection } from './terraceSection';
import { locationSection } from './location';
import { historySection } from './history';
import { gallerySection } from './gallery';
import { contactSection } from './contactSection';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homePageType,
    heroSection,
    aboutSection,
    navbarType,
    buttonType,
    gastronomicProposal,
    terraceSection,
    locationSection,
    historySection,
    gallerySection,
    contactSection
  ],
};

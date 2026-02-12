import { type SchemaTypeDefinition } from 'sanity'
import { homePageType } from './homePageType';
import { navbarType } from "./navbarType";
import { heroSection } from './heroSection';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homePageType, heroSection, navbarType],
};

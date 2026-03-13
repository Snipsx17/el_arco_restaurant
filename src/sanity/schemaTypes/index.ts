import { type SchemaTypeDefinition } from 'sanity'
import { homePageType } from './homePageType';
import { navbarType } from "./navbarType";
import { heroSection } from './heroSection';
import { aboutSection } from './aboutSection';
import { buttonType } from './buttonType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homePageType, heroSection, aboutSection, navbarType, buttonType],
};

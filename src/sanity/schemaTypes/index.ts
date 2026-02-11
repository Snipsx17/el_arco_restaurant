import { type SchemaTypeDefinition } from 'sanity'
import { homePageType } from './homePageType';
import { heroSection } from './heroSection';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homePageType, heroSection],
};

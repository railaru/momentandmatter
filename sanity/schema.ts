import { type SchemaTypeDefinition } from 'sanity';

import blockContent from './schemas/blockContent';
import category from './schemas/category';
import post from './schemas/post';
import author from './schemas/author';
import page from './schemas/page';
import link from './schemas/link';
import hero from './schemas/hero';

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [
        page,
        post,
        author,
        category,
        blockContent,
        link,
        hero
    ],
};

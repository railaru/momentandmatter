import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'link',
    title: 'Link',
    type: 'object',
    fields: [
        defineField({
            name: 'text',
            title: 'Text',
            type: 'string',
        }),
        defineField({
            name: 'url',
            title: 'Url',
            type: 'string',
        }),
    ],
});

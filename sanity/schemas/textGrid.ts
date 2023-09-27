import { defineType } from 'sanity';

export default defineType({
    title: 'Text grid',
    name: 'textGrid',
    type: 'object',
    fields: [
        {
            title: 'Items',
            name: 'items',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            title: 'Title',
                            name: 'title',
                            type: 'string',
                            validation: Rule => Rule.required(),
                        },
                        {
                            title: 'Rich text',
                            name: 'richText',
                            type: 'blockContent',
                            validation: Rule => Rule.required(),
                        }
                    ]
                }
            ]
        },
        {
            name: 'backgroundColor',
            title: 'Background color',
            type: 'color',
            options: {
                colorList: [
                    '#646F60',
                    '#855932',
                    '#D08770',
                    '#E8A87C',
                    '#FFB14E',
                    '#FFEAC9'
                ]
            }
        },
        {
            name: 'textColor',
            title: 'Text color',
            type: 'color',
            options: {
                colorList: [
                    '#000000',
                    '#ffffff',
                ]
            }
        }
    ],
    preview: {
        select: {
            blocks: 'items'
        },
        prepare(value) {
            return {
                title: value?.blocks?.[0]?.title ? value.blocks[0].title : 'No title',
                icon: () => '📝'
            };
        }
    }
});

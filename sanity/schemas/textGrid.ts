import { defineType } from 'sanity';
import { truncateString } from '@/lib/utils';

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
                        },
                        {
                            title: 'Description',
                            name: 'description',
                            type: 'text',
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
                subtitle:
                    value?.blocks?.[0].description ?
                        truncateString(value?.blocks?.[0]?.description, 50) :
                        'No description',
                icon: () => '📝'
            };
        }
    }
});

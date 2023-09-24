export default {
    name: 'hero',
    type: 'object',
    title: 'Hero',
    fields: [
        {
            name: 'image',
            type: 'image',
            title: 'Image',
            description: 'Upload an image here',
        },
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'subtitle',
            type: 'string',
            title: 'Subtitle',
        },
        {
            name: 'link',
            type: 'link',
            title: 'Link',
        },
    ]
};
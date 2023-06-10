export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
    },
    {
      name: 'label',
      title: 'Label',
      type: 'string',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'content',
      of: [{type: 'block'}],
      title: 'Content',
      type: 'array',
    },
    {
      name: 'datePublised',
      type: 'date',
      title: 'Date Published',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
  ],
}

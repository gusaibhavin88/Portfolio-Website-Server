export default {
  name: 'profile',
  title: 'Profile',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'company',
      type: 'string',
      title: 'Company',
    },
    {
      name: 'message',
      title: 'Message',
      type: 'text',
    },
  ],
}

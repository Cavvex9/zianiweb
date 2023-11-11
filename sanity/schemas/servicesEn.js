export default {
  name: 'servicesEnglish',
  title: 'servicesEnglish',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },

    {
      name: 'desc',
      title: 'Service Description',
      type: 'string',
    },
  ],
}

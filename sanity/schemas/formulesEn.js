export default {
    name: 'formulesEnglish',
    title: 'formulesEnglish',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
  
      {
        name: 'formuleDesc',
        title: 'Formule Description',
        type: 'array',
        of: [
          {
            type: 'string',
          },
        ],
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      {
        name: 'color',
        title: 'Card Color',
        type: 'string',
      },
    ],
  }
  
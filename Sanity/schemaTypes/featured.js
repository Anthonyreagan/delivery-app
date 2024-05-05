//import {defineField, defineType} from 'sanity'

export default {
    name: 'featured',
    title: 'Featured menu categories',
    type: 'document',
    fields: [ 
      {
      name: "name",
      type: "string",
      title: "Featured Category name",
      validation : (Rule)=> Rule.required(),
  
     },
     {
      name: "short_description",
      type: "string",
      title: "Short description",
      validation : (Rule)=> Rule.max(200),
     },
    {
      name: "shops",
      type: "array",
      title: "Shops Available",
      of: [{type:"reference", to: [{type:"shop"}]}],
    },
   
   ],
  }
  
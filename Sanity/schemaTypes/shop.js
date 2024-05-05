//import {defineField, defineType} from 'sanity'

export default {
  name: 'shop',
  title: 'Shop',
  type: 'document',
  fields: [
    {
      name: "name",
      type: "string",
      title: "Shop name",
      validation : (Rule)=> Rule.required(),

    },
    {
      name: "Short_description",
      type: "string",
      title: "Short description",
      validation : (Rule)=> Rule.max(200),

    },
    {
      name: "image",
      type: "image",
      title: "Image of the shop",
      source: 'title'
    },
    {
      name: "longitude",
      type: "number",
      title: "Longitude of the Shop",
    },
    {
      name: "latitude",
      type: "number",
      title: "Latitude of the shop",
    }, 
    {
      name: "address",
      type: "string",
      title: "Shop address",
      validation : (Rule)=> Rule.required(),

    },
    {
      name: "rating",
      type: "number",
      title: "Enter a number from (1-5 stars)",
      validation : (Rule)=> 
                    Rule.required()
                    .min(1)
                    .max(5)
                    .error("Enter a value between 1 & 5"),

    },
    {
      name: "type",
      title: "category",
      validation : (Rule)=> Rule.required(),
      type:"reference",
      to:[{ type: "category"}],

    },
    {
      name: "items",
      title: "Items",
      validation : (Rule)=> Rule.required(),
      type:"array",
      of:[{ type: "reference", to:[{type: "item"}]}],

    },

  ],


  
  
}

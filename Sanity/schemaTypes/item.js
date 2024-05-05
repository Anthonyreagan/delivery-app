//import {defineField, defineType} from 'sanity'

export default {
  name: 'item',
  title: 'Item',
  type: 'document',
  fields: [ 
    {
    name: "item",
    type: "string",
    title: "Name of the Item",
    validation : (Rule)=> Rule.required(),

   },
   {
    name: "short_description",
    type: "string",
    title: "Short description",
    validation : (Rule)=> Rule.max(200),
   },
  {
    name: "price",
    type: "number",
    title: "Price of the item",
  },
  {
    name: "image",
    type: "image",
    title: "Image of the Item",
  },
 ],
}

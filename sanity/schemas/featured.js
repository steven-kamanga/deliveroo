import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featured',
  type: 'document',
  title: 'Featured Menu categories',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Featured Category name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shprt_description',
      type: 'string',
      title: 'Short description',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'restaurants',
      type: 'array',
      title: 'Restaurants',
      of: [{type: 'reference', to: [{type: 'restaurant'}]}],
    }),
  ],
})

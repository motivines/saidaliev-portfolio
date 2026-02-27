import { defineType } from 'sanity';

export const testimonialsType = defineType({
  name: 'testimonials',
  type: 'document',
  fields: [
    { name: 'name', type: 'string' },
    { name: 'title', type: 'string' },
    { name: 'quote', type: 'text' }
  ]
});

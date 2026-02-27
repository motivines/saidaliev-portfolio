import { defineType } from 'sanity';

export const educationType = defineType({
  name: 'education',
  type: 'document',
  fields: [
    { name: 'school', type: 'string' },
    { name: 'degree', type: 'string' },
    { name: 'dates', type: 'string' },
    { name: 'description', type: 'text' }
  ]
});

import { defineType } from 'sanity';

export const experienceType = defineType({
  name: 'experience',
  type: 'document',
  fields: [
    { name: 'role', type: 'string' },
    { name: 'org', type: 'string' },
    { name: 'dates', type: 'string' },
    { name: 'bullets', type: 'array', of: [{ type: 'string' }] }
  ]
});

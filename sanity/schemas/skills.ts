import { defineType } from 'sanity';

export const skillsType = defineType({
  name: 'skills',
  type: 'document',
  fields: [
    { name: 'category', type: 'string' },
    { name: 'skillTags', type: 'array', of: [{ type: 'string' }] },
    { name: 'level', type: 'number' }
  ]
});

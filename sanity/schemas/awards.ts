import { defineType } from 'sanity';

export const awardsType = defineType({
  name: 'awards',
  type: 'document',
  fields: [
    { name: 'awardName', type: 'string' },
    { name: 'org', type: 'string' },
    { name: 'year', type: 'number' },
    { name: 'description', type: 'text' }
  ]
});

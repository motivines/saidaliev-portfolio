import { defineField, defineType } from 'sanity';

export const profileType = defineType({
  name: 'profile',
  title: 'Profile',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string' }),
    defineField({ name: 'role', type: 'string' }),
    defineField({ name: 'location', type: 'string' }),
    defineField({ name: 'shortBio', type: 'text' }),
    defineField({ name: 'longBio', type: 'text' }),
    defineField({ name: 'profilePhoto', type: 'image' }),
    defineField({ name: 'cvPdf', type: 'file' }),
    defineField({ name: 'socialLinks', type: 'array', of: [{ type: 'object', fields: [defineField({ name: 'label', type: 'string' }), defineField({ name: 'url', type: 'url' })] }] })
  ]
});

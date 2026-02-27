import { defineField, defineType } from 'sanity';

export const projectType = defineType({
  name: 'project',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string' }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'year', type: 'number' }),
    defineField({ name: 'category', type: 'string', options: { list: ['architecture', '3d', 'vfx', 'graphic'] } }),
    defineField({ name: 'tools', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'role', type: 'string' }),
    defineField({ name: 'overview', type: 'text' }),
    defineField({ name: 'problem', type: 'text' }),
    defineField({ name: 'process', type: 'text' }),
    defineField({ name: 'outcome', type: 'text' }),
    defineField({ name: 'learnings', type: 'text' }),
    defineField({ name: 'tags', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'featured', type: 'boolean', initialValue: false }),
    defineField({ name: 'coverImage', type: 'image' }),
    defineField({ name: 'galleryImages', type: 'array', of: [{ type: 'image', fields: [{ name: 'alt', type: 'string' }] }] }),
    defineField({ name: 'videoLink', type: 'url' }),
    defineField({ name: 'caseStudyPdf', type: 'file' })
  ]
});

import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'demo';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: '2024-10-01',
  useCdn: true
});

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source: unknown) => builder.image(source);

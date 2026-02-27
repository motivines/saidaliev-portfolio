import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://saidaliev-portfolio.vercel.app';
  return ['', '/projects', '/about', '/contact', '/admin', '/studio'].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date()
  }));
}

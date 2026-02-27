export type GalleryImage = { url: string; alt: string };

export type Project = {
  title: string;
  slug: string;
  year: number;
  category: 'architecture' | '3d' | 'vfx' | 'graphic';
  tools: string[];
  role: string;
  overview: string;
  problem: string;
  process: string;
  outcome: string;
  learnings: string;
  tags: string[];
  featured: boolean;
  coverImage: string;
  gallery: GalleryImage[];
};

export type Profile = {
  name: string;
  role: string;
  location: string;
  shortBio: string;
  longBio: string;
  profilePhoto: string;
  cvUrl: string;
  socials: { label: string; url: string }[];
};

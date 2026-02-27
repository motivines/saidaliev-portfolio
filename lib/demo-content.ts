import { Profile, Project } from './types';

export const demoProfile: Profile = {
  name: 'Saydaliyev Sadirov',
  role: 'Architecture & Spatial Design Student',
  location: 'Tashkent, Uzbekistan',
  shortBio: 'Designing human-centered spaces with digital craft and narrative-driven visuals.',
  longBio:
    'I am an architecture student blending research, visual storytelling, and technical modeling. My work explores how context, materials, and movement can produce meaningful spatial experiences.',
  profilePhoto: 'https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&w=800&q=80',
  cvUrl: '#',
  socials: [
    { label: 'Behance', url: 'https://behance.net' },
    { label: 'LinkedIn', url: 'https://linkedin.com' },
    { label: 'Instagram', url: 'https://instagram.com' }
  ]
};

export const demoProjects: Project[] = [
  {
    title: 'Riverside Cultural Hub',
    slug: 'riverside-cultural-hub',
    year: 2025,
    category: 'architecture',
    tools: ['Revit', 'Rhino', 'Lumion'],
    role: 'Lead Student Designer',
    overview: 'A mixed-use cultural center balancing public gathering, exhibition zones, and adaptive climate strategies.',
    problem: 'The site had flood-risk edges and disconnected pedestrian circulation.',
    process: 'Mapped movement paths, elevated public terraces, and integrated passive cooling courtyards.',
    outcome: 'Created a resilient social destination that re-stitches waterfront access with inclusive civic programming.',
    learnings: 'Refined my approach to environmental analysis and phased presentation workflows.',
    tags: ['urban design', 'culture', 'resilience'],
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80', alt: 'Exterior render' },
      { url: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80', alt: 'Massing studies' }
    ]
  },
  {
    title: 'Atmosphere Lab',
    slug: 'atmosphere-lab',
    year: 2024,
    category: '3d',
    tools: ['Blender', 'Substance 3D', 'Photoshop'],
    role: 'Visualizer',
    overview: 'Series of interior studies focused on light gradients and tactile materiality.',
    problem: 'Needed a clear system to communicate mood variations to non-design audiences.',
    process: 'Built modular lighting scenarios and tested camera compositions through scripted storyboards.',
    outcome: 'Delivered a concise visual catalog used in studio critiques and client concept alignment.',
    learnings: 'Strengthened pacing between concept diagrams and photorealistic scenes.',
    tags: ['rendering', 'materials'],
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1616594039964-3f3b5309f3dc?auto=format&fit=crop&w=1200&q=80',
    gallery: [{ url: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80', alt: 'Interior material study' }]
  }
];

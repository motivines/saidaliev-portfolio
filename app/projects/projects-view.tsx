'use client';

import { useMemo, useState } from 'react';
import { Project } from '@/lib/types';
import { Input } from '@/components/ui/input';
import { ProjectCard } from '@/components/project-card';

export function ProjectsView({ projects }: { projects: Project[] }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [sort, setSort] = useState<'newest' | 'featured'>('newest');

  const filtered = useMemo(() => {
    return projects
      .filter((p) => category === 'all' || p.category === category)
      .filter((p) => p.title.toLowerCase().includes(query.toLowerCase()) || p.tags.some((tag) => tag.includes(query.toLowerCase())))
      .sort((a, b) => (sort === 'featured' ? Number(b.featured) - Number(a.featured) : b.year - a.year));
  }, [projects, query, category, sort]);

  return (
    <div className="container space-y-6 py-10">
      <h1 className="section-title">Projects</h1>
      <div className="grid gap-3 md:grid-cols-4">
        <Input placeholder="Search by title or tag" value={query} onChange={(e) => setQuery(e.target.value)} />
        <select className="rounded-md border px-3" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All categories</option><option value="architecture">Architecture</option><option value="3d">3D</option><option value="vfx">VFX</option><option value="graphic">Graphic</option>
        </select>
        <select className="rounded-md border px-3" value={sort} onChange={(e) => setSort(e.target.value as 'newest' | 'featured')}>
          <option value="newest">Newest</option><option value="featured">Featured</option>
        </select>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{filtered.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
    </div>
  );
}

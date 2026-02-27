'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/lib/types';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article whileHover={{ y: -4 }} className="overflow-hidden rounded-xl border">
      <Link href={`/projects/${project.slug}`} aria-label={`Open ${project.title} case study`}>
        <div className="relative h-56 w-full">
          <Image src={project.coverImage} alt={project.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
        </div>
        <div className="p-4">
          <p className="text-xs uppercase text-muted-foreground">{project.category} • {project.year}</p>
          <h3 className="mt-1 text-lg font-semibold">{project.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{project.overview}</p>
        </div>
      </Link>
    </motion.article>
  );
}

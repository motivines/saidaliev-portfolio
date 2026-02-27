import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProjects } from '@/lib/content';

export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const projects = await getProjects();
  const index = projects.findIndex((project) => project.slug === params.slug);
  const project = projects[index];
  if (!project) notFound();

  const prev = projects[index - 1];
  const next = projects[index + 1];

  return (
    <div className="container space-y-8 py-10">
      <div className="relative h-[50vh] w-full overflow-hidden rounded-xl">
        <Image src={project.coverImage} alt={project.title} fill className="object-cover" />
      </div>
      <h1 className="text-4xl font-semibold">{project.title}</h1>
      <p>{project.overview}</p>
      <div className="grid gap-4 rounded-lg border p-4 md:grid-cols-4">
        <p><span className="font-medium">Role:</span> {project.role}</p>
        <p><span className="font-medium">Tools:</span> {project.tools.join(', ')}</p>
        <p><span className="font-medium">Year:</span> {project.year}</p>
        <p><span className="font-medium">Category:</span> {project.category}</p>
      </div>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Gallery</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {project.gallery.map((item) => (
            <div key={item.url} className="relative h-72 overflow-hidden rounded-lg border">
              <Image src={item.url} alt={item.alt} fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Case Study</h2>
        <p><strong>Problem:</strong> {project.problem}</p>
        <p><strong>Process:</strong> {project.process}</p>
        <p><strong>Outcome:</strong> {project.outcome}</p>
        <p><strong>Learnings:</strong> {project.learnings}</p>
      </section>
      <div className="flex justify-between">
        {prev ? <Link href={`/projects/${prev.slug}`}>← Previous</Link> : <span />}
        {next ? <Link href={`/projects/${next.slug}`}>Next →</Link> : <span />}
      </div>
    </div>
  );
}

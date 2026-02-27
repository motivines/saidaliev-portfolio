import Link from 'next/link';
import { getProfile, getProjects } from '@/lib/content';
import { ProjectCard } from '@/components/project-card';
import { ContactForm } from '@/components/forms/contact-form';
import { Button } from '@/components/ui/button';

export default async function HomePage() {
  const [profile, projects] = await Promise.all([getProfile(), getProjects()]);
  const featured = projects.filter((project) => project.featured);

  return (
    <div className="container space-y-20 py-10">
      <section className="grid gap-6 md:grid-cols-2" id="hero">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-wide text-muted-foreground">{profile.location}</p>
          <h1 className="text-4xl font-semibold md:text-6xl">{profile.name}</h1>
          <p className="text-xl text-muted-foreground">{profile.shortBio}</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/projects"><Button>View Projects</Button></Link>
            <Link href={profile.cvUrl}><Button variant="outline">Download CV</Button></Link>
            <Link href="/contact"><Button variant="outline">Contact</Button></Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 rounded-xl border p-6">
          <div><p className="text-3xl font-semibold">{projects.length}+</p><p className="text-sm text-muted-foreground">Projects</p></div>
          <div><p className="text-3xl font-semibold">14</p><p className="text-sm text-muted-foreground">Tools</p></div>
          <div><p className="text-3xl font-semibold">4</p><p className="text-sm text-muted-foreground">Years learning</p></div>
          <div><p className="text-3xl font-semibold">3</p><p className="text-sm text-muted-foreground">Awards</p></div>
        </div>
      </section>

      <section id="featured" className="space-y-6">
        <h2 className="section-title">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{featured.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
      </section>

      <section id="skills" className="space-y-4">
        <h2 className="section-title">Skills</h2>
        <div className="flex flex-wrap gap-2">{['Revit', 'Rhino', 'AutoCAD', 'Blender', 'Photoshop', 'After Effects'].map((skill) => <span className="rounded-full border px-3 py-1 text-sm" key={skill}>{skill}</span>)}</div>
      </section>

      <section id="timeline" className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="section-title mb-3">Education</h2>
          <p className="rounded-lg border p-4">B.Arch Candidate, Tashkent Architecture & Construction University (2022–2027)</p>
        </div>
        <div>
          <h2 className="section-title mb-3">Experience</h2>
          <p className="rounded-lg border p-4">Design Intern at Studio Axis — produced concept diagrams, 3D models, and presentation boards.</p>
        </div>
      </section>

      <section id="contact" className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="section-title">Let&apos;s Collaborate</h2>
          <p className="mt-2 text-muted-foreground">I&apos;m open to internships, student collaborations, and freelance visualization work.</p>
        </div>
        <ContactForm />
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: profile.name,
            jobTitle: profile.role,
            address: profile.location,
            url: 'https://saidaliev-portfolio.vercel.app'
          })
        }}
      />
    </div>
  );
}

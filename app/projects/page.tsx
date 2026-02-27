import { getProjects } from '@/lib/content';
import { ProjectsView } from './projects-view';

export default async function ProjectsPage() {
  const projects = await getProjects();
  return <ProjectsView projects={projects} />;
}

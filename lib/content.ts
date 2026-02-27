import { demoProfile, demoProjects } from './demo-content';
import { sanityClient } from './sanity';
import { profileQuery, projectsQuery } from './queries';
import { Profile, Project } from './types';

export async function getProfile(): Promise<Profile> {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return demoProfile;
  return (await sanityClient.fetch(profileQuery)) || demoProfile;
}

export async function getProjects(): Promise<Project[]> {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return demoProjects;
  const data = (await sanityClient.fetch(projectsQuery)) as Project[];
  return data.length ? data : demoProjects;
}

export const profileQuery = `*[_type == "profile"][0]`;
export const projectsQuery = `*[_type == "project"] | order(year desc){
  title,
  "slug": slug.current,
  year,
  category,
  tools,
  role,
  overview,
  problem,
  process,
  outcome,
  learnings,
  tags,
  featured,
  "coverImage": coverImage.asset->url,
  "gallery": galleryImages[]{"url": asset->url, alt}
}`;

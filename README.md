# saidaliev-portfolio

Production-ready portfolio website for an architecture/design student using Next.js App Router, TypeScript, Tailwind, shadcn-style UI primitives, Framer Motion, Sanity Studio, and Cloudinary uploads.

## Features
- Premium agency-inspired layout: hero, stats, featured projects, skills, timeline, contact.
- Projects index with search/filter/sort.
- Project case-study pages.
- `/studio` Sanity Studio for structured content editing.
- `/admin` helper with Cloudinary drag-and-drop uploader, progress bar, previews, reordering, and per-image alt text.
- SEO essentials: metadata, OpenGraph, JSON-LD, `sitemap.xml`, `robots.txt`.
- Dark mode toggle and accessible controls.

## Local setup
```bash
npm install
cp .env.example .env.local
npm run dev
```
Open `http://localhost:3000`.

## Sanity setup
1. Create a Sanity project at https://www.sanity.io/manage.
2. Copy `projectId` and dataset name into `.env.local`:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
3. Start app and visit `/studio`.
4. Add content for profile, projects, education, skills, experience, testimonials, and awards.

## Cloudinary setup
1. Create a Cloudinary account and unsigned upload preset.
2. Configure preset restrictions:
   - Allowed formats (jpg/png/webp)
   - Fixed folder (e.g. `portfolio/projects`)
   - Max file size
   - Optional moderation/auto-tagging
3. Add to `.env.local`:
   - `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`
   - `NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET`

### Security note for unsigned uploads
Unsigned uploads are public by design. Restrict them using strict preset rules (folder, formats, max size, overwrite disabled) and rotate presets if abused. For stronger controls, move to signed uploads via server route and keep API secret server-side.

## Deployment (Vercel default)
1. Push repo to Git provider.
2. Import to Vercel and deploy.
3. Add env vars in Vercel project settings.
4. Production URL target:
   - `https://saidaliev-portfolio.vercel.app`

### Custom domain
In Vercel: Project → Settings → Domains → add your domain and follow DNS instructions.

## Alternative hosts
- Netlify (good Next.js support)
- Cloudflare Pages (best for static export flows)

import Link from 'next/link';
import { CloudinaryUpload } from '@/components/admin/cloudinary-upload';

export default function AdminPage() {
  return (
    <div className="container space-y-8 py-10">
      <h1 className="section-title">Admin Helper</h1>
      <p className="text-muted-foreground">Use this page as a lightweight helper for uploading project gallery assets and managing content flow.</p>
      <ol className="list-decimal space-y-2 pl-4 text-sm">
        <li>Open <Link className="underline" href="/studio">Sanity Studio</Link>.</li>
        <li>Create or edit Project entries and paste uploaded image URLs.</li>
        <li>Set the Featured checkbox to pin projects on the homepage.</li>
      </ol>
      <CloudinaryUpload />
    </div>
  );
}

import Image from 'next/image';
import { getProfile } from '@/lib/content';

export default async function AboutPage() {
  const profile = await getProfile();
  return (
    <div className="container grid gap-8 py-10 md:grid-cols-2">
      <div className="relative h-96 overflow-hidden rounded-xl border">
        <Image src={profile.profilePhoto} alt={profile.name} fill className="object-cover" />
      </div>
      <div className="space-y-4">
        <h1 className="section-title">About</h1>
        <p className="text-muted-foreground">{profile.longBio}</p>
      </div>
    </div>
  );
}

import Link from 'next/link';

export default function NotFound() {
  return <div className="container py-20 text-center">Page not found. <Link href="/" className="underline">Go home</Link></div>;
}

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ModeToggle } from './mode-toggle';

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/admin', label: 'Admin' }
];

export function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur">
      <nav className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold">saidaliev-portfolio</Link>
        <div className="flex items-center gap-4">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={cn('text-sm hover:text-primary', pathname === link.href && 'font-semibold')}>
              {link.label}
            </Link>
          ))}
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}

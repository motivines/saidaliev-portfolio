import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { ThemeProvider } from '@/components/providers/theme-provider';

export const metadata: Metadata = {
  metadataBase: new URL('https://saidaliev-portfolio.vercel.app'),
  title: 'Saidaliev Portfolio',
  description: 'Architecture and design student portfolio with case-study storytelling.',
  openGraph: {
    title: 'Saidaliev Portfolio',
    description: 'Architecture and design student portfolio with case-study storytelling.',
    url: 'https://saidaliev-portfolio.vercel.app',
    siteName: 'Saidaliev Portfolio',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}

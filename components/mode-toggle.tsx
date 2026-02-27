'use client';

import { useTheme } from 'next-themes';
import { Button } from './ui/button';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <Button variant="outline" size="default" aria-label="Toggle dark mode" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? 'Light' : 'Dark'}
    </Button>
  );
}

'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeLine() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <p className="text-muted-foreground text-center text-sm">
        Current theme: <span className="text-foreground font-medium">…</span>
      </p>
    );
  }

  return (
    <p className="text-muted-foreground text-center text-sm">
      Current theme: <span className="text-foreground font-medium">{theme}</span>
    </p>
  );
}

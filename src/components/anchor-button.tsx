'use client';

import { Button } from '@/components/ui/button';
import { handleSmoothScroll } from '@/lib/smooth-scroll';
import { ComponentProps } from 'react';

export function AnchorButton({
  href,
  children,
  onClick,
  ...props
}: Omit<ComponentProps<typeof Button>, 'asChild'> & {
  href: `#${string}`;
}) {
  return (
    <Button
      {...props}
      onClick={(e) => {
        e.preventDefault();
        handleSmoothScroll(e as unknown as React.MouseEvent<HTMLAnchorElement>);
        onClick?.(e);
      }}
      asChild
    >
      <a href={href}>{children}</a>
    </Button>
  );
}

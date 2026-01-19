'use client';

import { Link } from '@/i18n/navigation';
import { handleSmoothScroll } from '@/lib/smooth-scroll';
import { ComponentProps } from 'react';

export function AnchorButton({
  href,
  children,
  onClick,
  ...props
}: Omit<ComponentProps<'a'>, 'href'> & {
  href: `#${string}`;
}) {
  return (
    <Link
      {...props}
      href={href}
      onClick={(e) => {
        e.preventDefault();
        handleSmoothScroll(e as unknown as React.MouseEvent<HTMLAnchorElement>);
        onClick?.(e);
      }}
    >
      {children}
    </Link>
  );
}

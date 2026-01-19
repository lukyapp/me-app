import { Github, Linkedin, Mail } from 'lucide-react';

export const sections = [
  {
    id: 'hero',
    href: '#hero',
    label: 'section.hero',
  },
  {
    id: 'skills',
    href: '#skills',
    label: 'section.skills',
    labelledby: 'skills-title',
  },
  {
    id: 'projects',
    href: '#projects',
    label: 'section.projects',
  },
  {
    id: 'about',
    href: '#about',
    label: 'section.about',
  },
  {
    id: 'contact',
    href: '#contact',
    label: 'section.contact',
  },
] as const satisfies { id: string; href: `#${string}`; label: string; labelledby?: string }[];

export const socialMediaLinks = [
  {
    id: 'github',
    enable: false,
    href: 'https://github.com',
    icon: Github,
  },
  {
    id: 'linkedin',
    enable: false,
    href: 'https://linkedin.com',
    icon: Linkedin,
  },
  {
    id: 'email',
    enable: true,
    href: 'mailto:llucas.proo@gmail.com',
    icon: Mail,
  },
];

import { Github, Linkedin, Mail } from 'lucide-react';

export const sections = [
  {
    href: '#hero',
    label: 'section.hero',
  },
  {
    href: '#skills',
    label: 'section.skills',
  },
  {
    href: '#projects',
    label: 'section.projects',
  },
  {
    href: '#about',
    label: 'section.about',
  },
  {
    href: '#contact',
    label: 'section.contact',
  },
];

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

import { getTranslations } from 'next-intl/server';
import type { Person, WebSite, WithContext } from 'schema-dts';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

interface JsonLdProps {
  locale: string;
}

export async function PersonJsonLd({ locale }: JsonLdProps) {
  const t = await getTranslations({ locale, namespace: 'seo.jsonld' });

  const jsonLd: WithContext<Person> = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Lucas Landru',
    url: `${siteUrl}/${locale}`,
    jobTitle: t('jobTitle'),
    description: t('description'),
    sameAs: [
      // 'https://github.com/lucaslandru',
      // 'https://linkedin.com/in/lucaslandru',
    ],
    knowsAbout: [
      'React',
      'Next.js',
      'Node.js',
      'TypeScript',
      'JavaScript',
      'Vue.js',
      'Python',
      'PostgreSQL',
      'MongoDB',
      'Docker',
      'AWS',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export async function WebsiteJsonLd({ locale }: JsonLdProps) {
  const t = await getTranslations({ locale, namespace: 'seo.jsonld' });

  const jsonLd: WithContext<WebSite> = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: t('jobTitle'),
    url: `${siteUrl}/${locale}`,
    description: t('description'),
    author: {
      '@type': 'Person',
      name: 'Lucas Landru',
    },
    inLanguage: locale,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

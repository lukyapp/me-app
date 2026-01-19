import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

const socialMediaLinks = [
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
    href: 'mailto:your.email@example.com',
    icon: Mail,
  },
];

export async function HeroSection() {
  const t = await getTranslations();
  return (
    <section
      className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4"
      role="banner"
      aria-label={'hero.label'}
    >
      <div className="w-full max-w-4xl text-center">
        <header className="mb-8">
          <h1 className="mb-4">
            {t.rich('hero.title', {
              name: (chunk) => <span className="text-blue-600">{chunk}</span>,
            })}
          </h1>
          <h2 className="mb-6 text-slate-600">{t('hero.subtitle')}</h2>
          <p className="mx-auto max-w-2xl text-slate-500">{t('hero.paragraph')}</p>
        </header>

        <nav
          className="mb-8 flex justify-center gap-4"
          aria-label={t('hero.main-actions.nav-label')}
        >
          <Button size="lg" aria-label="View portfolio work">
            {t('hero.main-actions.view-my-work-label')}
          </Button>
          <Button size="lg" variant="outline" aria-label="Contact information">
            {t('hero.main-actions.contact-me-label')}
          </Button>
        </nav>

        <nav
          className="flex justify-center gap-4"
          aria-label={t('hero.social-media-links.nav-label')}
        >
          {socialMediaLinks.map(({ id, enable, href, icon: Icon }) => {
            if (!enable) return null;
            return (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 transition-colors hover:text-blue-600"
                aria-label={t(`hero.social-media-links.${id}-label`)}
              >
                <Icon className="h-6 w-6" />
              </a>
            );
          })}
        </nav>
      </div>
    </section>
  );
}

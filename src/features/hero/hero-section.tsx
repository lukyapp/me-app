import { AnchorButton } from '@/components/anchor-button';
import { Button } from '@/components/ui/button';
import { socialMediaLinks } from '@/features/links';
import { cn } from '@/lib/utils';
import { getTranslations } from 'next-intl/server';
import { ComponentProps } from 'react';

export async function HeroSection({ className }: ComponentProps<'section'>) {
  const t = await getTranslations();

  return (
    <section
      id="hero"
      className={cn('flex min-h-screen items-center justify-center px-4', className)}
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
          <h2 className="mb-6 text-muted-foreground">{t('hero.subtitle')}</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">{t('hero.paragraph')}</p>
        </header>

        <nav
          className="mb-8 flex justify-center gap-4"
          aria-label={t('hero.main-actions.nav-label')}
        >
          <Button asChild size="lg" aria-label={t('hero.main-actions.view-my-work-aria-label')}>
            <AnchorButton href="#skills">{t('hero.main-actions.view-my-work-label')}</AnchorButton>
          </Button>
          <Button
            size="lg"
            variant="outline"
            aria-label={t('hero.main-actions.contact-me-aria-label')}
          >
            <AnchorButton href="#contact">{t('hero.main-actions.contact-me-label')}</AnchorButton>
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
                className="text-muted-foreground transition-colors hover:text-primary"
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

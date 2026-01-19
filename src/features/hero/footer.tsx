import { AnchorButton } from '@/components/anchor-button';
import { sections, socialMediaLinks } from '@/features/links';
import { getTranslations } from 'next-intl/server';

export async function Footer() {
  const t = await getTranslations();

  return (
    <footer className="bg-slate-900 px-4 py-12 text-white" role="contentinfo">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold">{t('footer.about-section-label')}</h3>
            <p className="text-sm text-slate-400">{t('footer.about-section-paragraph')}</p>
          </div>

          <nav aria-label={t('footer.quick-links-section-nav-label')}>
            <h3 className="mb-4 text-lg font-semibold">{t('footer.quick-links-section-label')}</h3>
            <ul className="space-y-2 text-sm">
              {sections.map((section) => (
                <li key={section.href}>
                  <AnchorButton href={section.href}>{t(section.label)}</AnchorButton>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="mb-4 text-lg font-semibold">{t('footer.connect-section-label')}</h3>
            <nav className="flex gap-4" aria-label={t('footer.connect-section-nav-label')}>
              {socialMediaLinks.map(({ enable, id, icon: Icon, href }) => {
                if (!enable) return null;
                return (
                  <a
                    key={id}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 transition-colors hover:text-white"
                    aria-label={t(`hero.social-media-links.${id}-label`)}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </nav>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

import { cn } from '@/lib/utils';
import { Coffee } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { ComponentProps } from 'react';

const stats = [
  // { icon: Coffee, impactNumber: '500+', label: 'Projects Completed' },
  // { icon: Users, impactNumber: '50+', label: 'Happy Clients' },
  // { icon: Award, impactNumber: '5+', label: 'Years Experience' },
  // { icon: BookOpen, impactNumber: '∞', label: 'Learning Every Day' },
] satisfies { icon: typeof Coffee; impactNumber: string; label: string }[];

export async function AboutSection({ className }: ComponentProps<'section'>) {
  const t = await getTranslations();

  return (
    <section id="about" className={cn('px-4 py-20', className)} aria-labelledby="about-heading">
      <div className="mx-auto max-w-6xl">
        <div
          className={cn(
            stats.length > 0 && 'lg:grid-cols-2',
            'grid grid-cols-1 items-center gap-12',
          )}
        >
          <article>
            <h2 id="about-heading" className="mb-6">
              {t('about.title')}
            </h2>
            <p className="mb-4 text-slate-600">
              {t.rich('about.intro.fullstack', {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>

            <p className="mb-4 text-slate-600">
              {t.rich('about.intro.approach', {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>

            <h3 className="mb-2">{t('about.what_i_bring.title')}</h3>
            <ul className="mb-4 text-slate-600">
              <li>
                {' '}
                -{' '}
                {t.rich('about.what_i_bring.frontend', {
                  strong: (chunks) => <strong>{chunks}</strong>,
                })}
              </li>
              <li>
                {' '}
                -{' '}
                {t.rich('about.what_i_bring.backend', {
                  strong: (chunks) => <strong>{chunks}</strong>,
                })}
              </li>
              <li>
                {' '}
                -{' '}
                {t.rich('about.what_i_bring.solutions', {
                  strong: (chunks) => <strong>{chunks}</strong>,
                })}
              </li>
              <li> - {t('about.what_i_bring.improvements')}</li>
            </ul>

            <h3 className="mb-2">{t('about.work_style.title')}</h3>
            <p className="mb-4 text-slate-600">
              {t.rich('about.work_style.description', {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>

            <p className="mb-4 text-slate-600">{t('about.work_style.process')}</p>

            <h3 className="mb-2">{t('about.why_trust_me.title')}</h3>
            <ul className="mb-4 text-slate-600">
              <li> - {t('about.why_trust_me.serious')}</li>
              <li> - {t('about.why_trust_me.honest')}</li>
              <li> - {t('about.why_trust_me.support')}</li>
            </ul>

            <p className="mb-4 text-slate-600">
              {t.rich('about.outro', {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
          </article>

          {stats.length > 0 && (
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="rounded-lg border border-slate-100 bg-gradient-to-br from-blue-50 to-slate-50 p-6 text-center"
                  >
                    <div className="bg-primary mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                      <Icon className="text-primary-foreground h-6 w-6" />
                    </div>
                    <div className="mb-1 text-3xl font-bold text-slate-900">
                      {stat.impactNumber}
                    </div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

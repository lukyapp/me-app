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
              Je suis <strong>développeur Fullstack</strong>, passionné par le développement web et
              la création d’applications modernes.
            </p>

            <p className="mb-4 text-slate-600">
              Je conçois des <strong>sites web et applications </strong> dont le but premier est de
              répondre à vos besoin, tout en mettant l’accent sur la clarté, la performance et la
              bonne compréhension des besoins client.
            </p>

            <h3 className="mb-2">Ce que je peux vous apporter</h3>
            <ul className="mb-4 text-slate-600">
              <li>
                {' '}
                - Développement <strong>front-end</strong> (interfaces propres, responsive et
                modernes)
              </li>
              <li>
                {' '}
                - Développement <strong>back-end</strong> (logique applicative, API, bases de
                données)
              </li>
              <li>
                {' '}
                - Création de <strong>sites vitrines</strong>, <strong>applications web</strong> et
                outils sur mesure
              </li>
              <li> - Intégration, corrections de bugs et améliorations de projets existants</li>
            </ul>

            <h3 className="mb-2">Ma manière de travailler</h3>
            <p className="mb-4 text-slate-600">
              En tant que jeune développeur, je mise sur une <strong>communication claire</strong>,
              une <strong>grande rigueur</strong>, et une forte envie de{' '}
              <strong>bien faire et d’apprendre</strong>.
            </p>

            <p className="mb-4 text-slate-600">
              Je prends le temps de bien comprendre votre projet afin de proposer des solutions
              adaptées, propres et maintenables, tout en respectant les délais convenus.
            </p>

            <h3 className="mb-2">Pourquoi me faire confiance ?</h3>
            <ul className="mb-4 text-slate-600">
              <li> - Sérieux et impliqué</li>
              <li> - Approche honnête et transparente</li>
              <li> - Tarifs adaptés</li>
              <li> - Suivi et accompagnement</li>
            </ul>

            <p className="mb-4 text-slate-600">
              Si vous cherchez un développeur <strong>motivé, disponible et impliqué</strong> dans
              votre projet, je serais ravi d’échanger avec vous.
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
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                      <Icon className="h-6 w-6 text-white" />
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

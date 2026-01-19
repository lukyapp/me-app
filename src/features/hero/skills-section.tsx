import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Code2, Database, Layout, Server, Smartphone, Zap } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { ComponentProps } from 'react';

const skills = [
  {
    icon: Layout,
    title: 'skills.frontend.title',
    description: 'skills.frontend.description',
  },
  {
    icon: Server,
    title: 'skills.backend.title',
    description: 'skills.backend.description',
  },
  {
    icon: Database,
    title: 'skills.database.title',
    description: 'skills.database.description',
  },
  {
    icon: Code2,
    title: 'skills.devops.title',
    description: 'skills.devops.description',
  },
  {
    icon: Smartphone,
    title: 'skills.responsive.title',
    description: 'skills.responsive.description',
  },
  {
    icon: Zap,
    title: 'skills.performance.title',
    description: 'skills.performance.description',
  },
];

export async function SkillsSection({ className }: ComponentProps<'section'>) {
  const t = await getTranslations();

  return (
    <section id="skills" className={cn(className, 'px-4 py-20')} aria-labelledby="skills-title">
      <div className="mx-auto max-w-6xl">
        <header className="mb-16 text-center">
          <h2 id="skills-title" className="mb-4">
            {t('skills.title')}
          </h2>
          <p className="mx-auto max-w-2xl text-slate-600">{t('skills.subtitle')}</p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ title, description, icon: Icon }, index) => {
            return (
              <Card
                key={index}
                className="border-slate-200 transition-colors hover:border-blue-300"
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="mb-2">{t(title)}</h3>
                  <p className="text-sm text-slate-600">{t(description)}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

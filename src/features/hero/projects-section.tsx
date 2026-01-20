import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { getTranslations } from 'next-intl/server';
import { ComponentProps } from 'react';

const projects = [
  {
    title: 'projects.0.title',
    description: 'projects.0.description',
    image: '/projects0.png',
    tags: [
      'Ory Kratos',
      'Ory Hydra',
      'OAuth2',
      'OIDC',
      'Microservices',
      'projects.0.tags.progressive_migration',
    ],
  },
  {
    title: 'projects.1.title',
    description: 'projects.1.description',
    image: '/projects1.png',
    tags: ['Vue 3', 'React', 'Frontend Migration', 'Chatbot IA', 'E2E Tests'],
  },
  {
    title: 'projects.2.title',
    description: 'projects.2.description',
    image: '/projects2.png',
    tags: [
      'E-commerce',
      'Backend',
      'Java',
      'Legacy Monolith',
      'Microservices',
      'Production Support',
      'JWT',
      'JWKS',
      'OpenID Connect',
    ],
  },
  {
    title: 'projects.3.title',
    description: 'projects.3.description',
    image: '/projects3.png',
    tags: [
      'Fullstack',
      'B2B',
      'B2C',
      'Frontend',
      'UX',
      'Backend',
      'Java 17',
      'Spring Boot',
      'Docker',
    ],
  },
];

export async function ProjectsSection({ className }: ComponentProps<'section'>) {
  const t = await getTranslations();

  return (
    <section
      className={cn('bg-secondary px-4 py-20', className)}
      id="projects"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-8xl mx-auto">
        <header className="mb-16 text-center">
          <h2 id="projects-heading" className="mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl">{t('projects.subtitle')}</p>
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border-border overflow-hidden transition-shadow hover:shadow-lg"
            >
              <div className="bg-muted relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-2">{t(project.title)}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{t(project.description)}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag.startsWith('projects.') ? t(tag) : tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              {/*<CardFooter className="p-6 pt-0 flex gap-2">*/}
              {/*    <Button variant="outline" size="sm" className="flex-1" asChild>*/}
              {/*        <a href={project.github} target="_blank" rel="noopener noreferrer">*/}
              {/*            <Github className="w-4 h-4 mr-2"/>*/}
              {/*            Code*/}
              {/*        </a>*/}
              {/*    </Button>*/}
              {/*    <Button size="sm" className="flex-1" asChild>*/}
              {/*        <a href={project.live} target="_blank" rel="noopener noreferrer">*/}
              {/*            <ExternalLink className="w-4 h-4 mr-2"/>*/}
              {/*            Live Demo*/}
              {/*        </a>*/}
              {/*    </Button>*/}
              {/*</CardFooter>*/}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

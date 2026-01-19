import { Card, CardContent } from '@/components/ui/card';
import { ContactForm } from '@/features/contact/components/contact-form';
import { socialMediaLinks } from '@/features/links';
import { cn } from '@/lib/utils';
import { Mail, MapPin, Phone } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { ComponentProps } from 'react';

const email = socialMediaLinks.find((s) => s.id === 'email')!;

const informationCards = [
  {
    ...email,
    value: email.href.replace('mailto:', ''),
  },
  {
    enable: false,
    id: 'phone',
    icon: Phone,
    value: '+1 (234) 567-890',
    href: 'tel:+1234567890',
  },
  {
    enable: false,
    id: 'location',
    icon: MapPin,
    value: 'Your City, Your Country',
    href: undefined,
  },
] as const satisfies {
  enable: boolean;
  id: string;
  icon: typeof Mail;
  value: string;
  href?: string;
}[];

export async function ContactSection({ className }: ComponentProps<'section'>) {
  const t = await getTranslations();

  return (
    <section id="contact" className={cn('px-4 py-20', className)} aria-labelledby="contact-heading">
      <div className="mx-auto max-w-6xl">
        <header className="mb-16 text-center">
          <h2 id="contact-heading" className="mb-4">
            {t('contact.title')}
          </h2>
          <p className="mx-auto max-w-2xl text-slate-600">{t('contact.subtitle')}</p>
        </header>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-8">
                <ContactForm
                  labels={{
                    name: t('contact.name-input-label'),
                    namePlaceholder: t('contact.name-input-placeholder'),
                    email: t('contact.email-input-label'),
                    emailPlaceholder: t('contact.email-input-placeholder'),
                    message: t('contact.message-input-label'),
                    messagePlaceholder: t('contact.message-input-placeholder'),
                    submit: t('contact.form-submit-button-label'),
                  }}
                />
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {informationCards.map(({ enable, id, icon: Icon, value, href }) => {
              if (!enable) return null;
              return (
                <Card key={id}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
                        <Icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="mb-1 font-medium">{t(`contact.${id}-card-label`)}</div>
                        {href && (
                          <a href={href} className="text-sm text-slate-600 hover:text-blue-600">
                            {value}
                          </a>
                        )}
                        {!href && <p className="text-sm text-slate-600">{value}</p>}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

import { getTranslations } from 'next-intl/server';
import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  email: z.email('Please enter a valid email address').min(1, 'Email is required'),
  message: z
    .string()
    .min(1, 'Message is required')
    .min(10, 'Message must be at least 10 characters')
    .max(5000, 'Message must be less than 5000 characters'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export async function getContactFormSchema() {
  const t = await getTranslations();

  return z.object({
    name: z
      .string()
      .min(1, t('contact.errors.name.required'))
      .min(2, t('contact.errors.name.min'))
      .max(100, t('contact.errors.name.max')),
    email: z.email(t('contact.errors.email.invalid')).min(1, t('contact.errors.email.required')),
    message: z
      .string()
      .min(1, t('contact.errors.message.required'))
      .min(10, t('contact.errors.message.min'))
      .max(5000, t('contact.errors.message.max')),
  });
}

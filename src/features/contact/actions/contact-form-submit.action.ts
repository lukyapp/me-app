'use server';

import { ContactEmail } from '@/features/contact/emails/contact-email';
import { getContactFormSchema } from '@/features/contact/schemas/contact-form.schema';
import { rateLimit } from '@/lib/rate-limit';
import { getTranslations } from 'next-intl/server';
import { headers } from 'next/headers';
import { Resend } from 'resend';
import z from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactFormState = {
  success: boolean;
  message: string;
  errors?: {
    name?:
      | {
          errors: string[];
        }
      | undefined;
    email?:
      | {
          errors: string[];
        }
      | undefined;
    message?:
      | {
          errors: string[];
        }
      | undefined;
  };
};

export async function contactFormSubmitAction(
  _prevState: ContactFormState | null,
  formData: FormData,
): Promise<ContactFormState> {
  const t = await getTranslations();

  if (process.env.NODE_ENV === 'production') {
    const headersList = await headers();
    const ip = headersList.get('x-forwarded-for')?.split(',')[0] ?? 'unknown';
    const rateLimitResult = rateLimit(`contact-form:${ip}`, {
      maxRequests: 3,
      windowMs: 60 * 1000, // 3 requests per minute
    });

    if (!rateLimitResult.success) {
      const resetInSeconds = Math.ceil(rateLimitResult.resetIn / 1000);
      return {
        success: false,
        message: t('contact.error.rate-limit', { seconds: resetInSeconds }),
      };
    }
  }

  const rawFormData = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  };

  const schema = await getContactFormSchema();
  const validatedFields = schema.safeParse(rawFormData);

  if (!validatedFields.success) {
    return {
      success: false,
      message: t('contact.error.validation'),
      errors: z.treeifyError(validatedFields.error).properties,
    };
  }

  const { name, email, message } = validatedFields.data;

  try {
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `New contact form submission from ${name}`,
      react: ContactEmail({ name, email, message }),
    });

    if (error) {
      console.error('Resend error:', error);
      return {
        success: false,
        message: t('contact.error.email-failed'),
      };
    }

    return {
      success: true,
      message: t('contact.success.message'),
    };
  } catch (error) {
    console.error('Contact form error:', error);
    return {
      success: false,
      message: t('contact.error.unexpected'),
    };
  }
}

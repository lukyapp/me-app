'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  ContactFormState,
  contactFormSubmitAction,
} from '@/features/contact/actions/contact-form-submit.action';
import { useActionState, useEffect, useRef } from 'react';
import { toast } from 'sonner';

interface ContactFormProps {
  labels: {
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
  };
}

export function ContactForm({ labels }: ContactFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState<ContactFormState | null, FormData>(
    contactFormSubmitAction,
    null,
  );

  useEffect(() => {
    if (state?.success) {
      toast.success(state.message);
      formRef.current?.reset();
    } else if (state && !state.success && state.message !== 'Validation failed') {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction} className="space-y-6">
      <div>
        <Label htmlFor="name">{labels.name}</Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder={labels.namePlaceholder}
          required
          className="mt-2"
          disabled={isPending}
        />
        {state?.errors?.name && (
          <p className="mt-1 text-sm text-red-500">{state.errors.name.errors[0]}</p>
        )}
      </div>

      <div>
        <Label htmlFor="email">{labels.email}</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder={labels.emailPlaceholder}
          required
          className="mt-2"
          disabled={isPending}
        />
        {state?.errors?.email && (
          <p className="mt-1 text-sm text-red-500">{state.errors.email.errors[0]}</p>
        )}
      </div>

      <div>
        <Label htmlFor="message">{labels.message}</Label>
        <Textarea
          id="message"
          name="message"
          placeholder={labels.messagePlaceholder}
          required
          className="mt-2 min-h-[150px]"
          disabled={isPending}
        />
        {state?.errors?.message && (
          <p className="mt-1 text-sm text-red-500">{state.errors.message.errors[0]}</p>
        )}
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={isPending}>
        {isPending ? 'Sending...' : labels.submit}
      </Button>
    </form>
  );
}

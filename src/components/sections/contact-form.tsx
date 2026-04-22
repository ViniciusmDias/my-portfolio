'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const schemas = {
  en: z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
    'bot-field': z.string().max(0).optional(),
  }),
  pt: z.object({
    name: z.string().min(2, 'O nome precisa ter pelo menos 2 caracteres'),
    email: z.string().email('E-mail inválido'),
    message: z.string().min(10, 'A mensagem precisa ter pelo menos 10 caracteres'),
    'bot-field': z.string().max(0).optional(),
  }),
} as const;

type FormValues = z.infer<(typeof schemas)['en']>;

const copy = {
  en: {
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send',
    sending: 'Sending…',
    success: 'Message sent. I will reply soon.',
    error: 'Something went wrong. Try again.',
  },
  pt: {
    name: 'Nome',
    email: 'E-mail',
    message: 'Mensagem',
    send: 'Enviar',
    sending: 'Enviando…',
    success: 'Mensagem enviada. Retornarei em breve.',
    error: 'Algo deu errado. Tente novamente.',
  },
} as const;

export function ContactForm({ locale }: { locale: string }) {
  const l = locale === 'pt' ? 'pt' : 'en';
  const t = copy[l];
  const [status, setStatus] = useState<'idle' | 'submitting' | 'ok' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schemas[l]),
    defaultValues: { name: '', email: '', message: '', 'bot-field': '' },
  });

  const onSubmit = async (values: FormValues) => {
    setStatus('submitting');
    try {
      const body = new URLSearchParams();
      body.append('form-name', 'contact');
      Object.entries(values).forEach(([k, v]) => body.append(k, v ?? ''));
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      if (!res.ok) throw new Error('submit failed');
      setStatus('ok');
      reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          {'honeypot: '}
          <input type="text" {...register('bot-field')} tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <Field
        label={t.name}
        error={errors.name?.message}
        input={
          <input
            type="text"
            autoComplete="name"
            {...register('name')}
            className="w-full rounded-md border border-[color:var(--color-border)] bg-[color:var(--color-background)] px-3 py-2 text-sm outline-none focus:border-[color:var(--color-primary)]"
          />
        }
      />
      <Field
        label={t.email}
        error={errors.email?.message}
        input={
          <input
            type="email"
            autoComplete="email"
            {...register('email')}
            className="w-full rounded-md border border-[color:var(--color-border)] bg-[color:var(--color-background)] px-3 py-2 text-sm outline-none focus:border-[color:var(--color-primary)]"
          />
        }
      />
      <Field
        label={t.message}
        error={errors.message?.message}
        input={
          <textarea
            rows={6}
            {...register('message')}
            className="w-full resize-y rounded-md border border-[color:var(--color-border)] bg-[color:var(--color-background)] px-3 py-2 text-sm outline-none focus:border-[color:var(--color-primary)]"
          />
        }
      />

      <div className="flex items-center justify-between gap-3">
        <Button type="submit" disabled={status === 'submitting'}>
          {status === 'submitting' ? t.sending : t.send}
        </Button>
        {status === 'ok' && (
          <span role="status" className="font-mono text-xs text-[color:var(--color-primary)]">
            {t.success}
          </span>
        )}
        {status === 'error' && (
          <span role="status" className="font-mono text-xs text-[color:var(--color-destructive)]">
            {t.error}
          </span>
        )}
      </div>
    </form>
  );
}

function Field({ label, error, input }: { label: string; error?: string; input: React.ReactNode }) {
  return (
    <label className="block space-y-1">
      <span className="font-mono text-xs text-[color:var(--color-muted-foreground)]">{label}</span>
      {input}
      {error && (
        <span className="block font-mono text-[10px] text-[color:var(--color-destructive)]">
          {error}
        </span>
      )}
    </label>
  );
}

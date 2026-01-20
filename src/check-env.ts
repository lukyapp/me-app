import { z } from 'zod';

const resendFromEmailSchema = z
  .string()
  .min(1, 'RESEND_FROM_EMAIL is required')
  .refine(
    (v) => /^[^<>]+\s*<[^<>]+>$/.test(v),
    'RESEND_FROM_EMAIL must look like: "Name <email@domain.com>"',
  )
  .superRefine((v, ctx) => {
    const match = v.match(/^\s*([^<>]+?)\s*<\s*([^<>]+)\s*>\s*$/);
    if (!match) return;

    const displayName = match[1]?.trim();
    const email = match[2]?.trim();

    if (!displayName) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'RESEND_FROM_EMAIL display name is missing',
      });
    }

    const emailCheck = z.string().email().safeParse(email);
    if (!emailCheck.success) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'RESEND_FROM_EMAIL must contain a valid email inside < >',
      });
    }
  });

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']),
  RESEND_API_KEY: z
    .string()
    .min(1, 'RESEND_API_KEY is required')
    .regex(/^re_[A-Za-z0-9_]+$/, "RESEND_API_KEY must start with 're_'"),
  CONTACT_EMAIL: z.email('CONTACT_EMAIL must be a valid email').min(1, 'CONTACT_EMAIL is required'),
  RESEND_FROM_EMAIL: resendFromEmailSchema,
  NEXT_PUBLIC_SITE_URL: z.string().min(1, 'NEXT_PUBLIC_SITE_URL is required'),
});

const envValues = {
  NODE_ENV: process.env.NODE_ENV,
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  CONTACT_EMAIL: process.env.CONTACT_EMAIL,
  RESEND_FROM_EMAIL: process.env.RESEND_FROM_EMAIL,
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
};

export const parsed = envSchema.safeParse(envValues);

logEnvSnapshot(Object.keys(envValues));

if (!parsed.success) {
  console.error('❌ Invalid environment variables:');

  const tree = z.treeifyError(parsed.error);
  const issues = collectTreeErrors(tree);

  for (const issue of issues) {
    const topKey = issue.key.split('.')[0]; // in case you add nested objects later
    const rawValue = process.env[topKey as keyof NodeJS.ProcessEnv];

    console.error(`• ${topKey}`);
    console.error(`  value: ${redact(rawValue)}`);
    console.error(`  error: ${issue.messages.join(', ')}`);
    console.error('');
  }

  throw new Error('Invalid environment variables');
}

console.log('✅ Environment variables loaded\n');

function redact(v: unknown) {
  if (typeof v !== 'string' || v.length === 0) return '❌ MISSING';
  return `${v.slice(0, 5)}*****`;
}

function logEnvSnapshot(keys: readonly string[]) {
  console.log('🔐 Environment snapshot (redacted):');
  for (const key of keys) {
    const value = process.env[key as keyof NodeJS.ProcessEnv];
    console.log(`• ${key}: ${redact(value)}`);
  }
  console.log('');
}

function collectTreeErrors(
  node: any,
  path: string[] = [],
  out: Array<{ key: string; messages: string[] }> = [],
) {
  // node.errors is typically string[]
  if (Array.isArray(node?.errors) && node.errors.length > 0) {
    out.push({ key: path.join('.') || '(root)', messages: node.errors });
  }

  // node.properties is a map of child nodes
  const props = node?.properties;
  if (props && typeof props === 'object') {
    for (const [k, child] of Object.entries(props)) {
      collectTreeErrors(child, [...path, k], out);
    }
  }

  return out;
}

import { z } from 'zod';

const serverSchema = z.object({
  ANTHROPIC_API_KEY: z.string().min(1).optional(),
  UPSTASH_REDIS_REST_URL: z.string().url().optional(),
  UPSTASH_REDIS_REST_TOKEN: z.string().min(1).optional(),
  CHAT_ENABLED: z
    .enum(['true', 'false'])
    .default('false')
    .transform((v) => v === 'true'),
  GITHUB_USERNAME: z.string().default('ViniciusmDias'),
});

const clientSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url().default('http://localhost:3000'),
  NEXT_PUBLIC_GA_ID: z
    .string()
    .regex(/^G-[A-Z0-9]+$/)
    .optional(),
});

const parsedServer = serverSchema.safeParse({
  ANTHROPIC_API_KEY: process.env.ANTHROPIC_API_KEY,
  UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL,
  UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN,
  CHAT_ENABLED: process.env.CHAT_ENABLED,
  GITHUB_USERNAME: process.env.GITHUB_USERNAME,
});

if (!parsedServer.success) {
  console.error('Invalid server env:', parsedServer.error.flatten().fieldErrors);
  throw new Error('Invalid server environment variables');
}

const parsedClient = clientSchema.safeParse({
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
});

if (!parsedClient.success) {
  console.error('Invalid client env:', parsedClient.error.flatten().fieldErrors);
  throw new Error('Invalid client environment variables');
}

export const serverEnv = parsedServer.data;
export const clientEnv = parsedClient.data;

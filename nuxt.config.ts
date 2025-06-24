// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  runtimeConfig: {
    databaseUrl: process.env.DATABASE_URL,
    directUrl: process.env.DIRECT_URL,
    public: {
      supabaseUrl: process.env.NUXT_PUBLIC_SUPABASE_URL,
      supabaseAnonKey: process.env.NUXT_PUBLIC_SUPABASE_ANON_KEY,
    }
  },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@prisma/nuxt',
  ],

  nitro: {
    externals: {
      external: [
        '@prisma/client',
        'prisma',
      ],
      // Ensure 'trace' is NOT present here if it was causing a type error.
      // If it was not causing a type error for you, and you want to ensure tracing,
      // you could try including specific paths like 'prisma/libquery_engine-*'.
      // But for now, let's remove it to eliminate the TypeScript error you specifically showed.
    },
    preset: 'vercel', // Even for local build, this sets the serverless output structure
  },

  vite: {
    build: {
      rollupOptions: {
        external: [
          '@prisma/client', // This is the key line to prevent client-side bundling of Prisma
        ],
      },
    },
  },

  build: {
    transpile: ['trpc-nuxt', '@prisma/client'],
  },

  experimental: {
    componentIslands: true
  },
});
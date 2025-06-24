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
    },
    esbuild: {
      options: {
        target: 'node18',
      },
    },
  },

  vite: {
    build: {
      rollupOptions: {
        external: [
          '@prisma/client',
        ],
      },
    },
  },

  build: {
    transpile: ['trpc-nuxt', '@prisma/client'],
  },

  experimental: {
    componentIslands: true,
  },
});
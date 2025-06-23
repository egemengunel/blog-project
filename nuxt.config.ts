// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
   runtimeConfig: {
    // Private keys (only available server-side) - not needed for your current Supabase client setup
    // apiSecret: process.env.API_SECRET,
    public: {
      // Public keys (available client-side)
      supabaseUrl: process.env.NUXT_PUBLIC_SUPABASE_URL,
      supabaseAnonKey: process.env.NUXT_PUBLIC_SUPABASE_ANON_KEY,
    }
  },
  modules: ['@nuxt/content', '@nuxt/eslint', '@nuxtjs/tailwindcss', '@prisma/nuxt'],
  experimental: {
    componentIslands: true
  },
})

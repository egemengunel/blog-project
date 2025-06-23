// plugins/supabase.client.ts
// This file will run on the client-side and expose the Supabase client instance.

import { createClient } from '@supabase/supabase-js';
import { defineNuxtPlugin, useRuntimeConfig } from '#app'; // Import necessary Nuxt 3 composables

export default defineNuxtPlugin(() => {
  // Access the runtime configuration, which includes public environment variables
  const config = useRuntimeConfig();

  // Get the Supabase URL and Anon Key from the public runtime config
  // These variables are configured in your nuxt.config.ts
  const supabaseUrl = config.public.supabaseUrl as string; // Assert as string
  const supabaseAnonKey = config.public.supabaseAnonKey as string; // Assert as string

  // Basic validation (highly recommended)
  if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Supabase client initialization failed: Missing SUPABASE_URL or SUPABASE_ANON_KEY in Nuxt public runtime config.');
    // In a real application, you might want to display a user-friendly error
    // or prevent the app from loading further if this is critical.
    throw new Error('Supabase configuration missing.');
  }

  // Create the Supabase client instance
  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  // Provide the Supabase client to the Nuxt app context
  // This makes it accessible via `useNuxtApp().$supabase` in your components
  return {
    provide: {
      supabase,
    },
  };
});
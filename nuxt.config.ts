import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/supabase'],
  vite: {
    plugins: [
      tailwindcss()
    ],
    optimizeDeps: {
      include: [
        'gsap',
        'gsap/ScrollTrigger',
        'lenis'
      ]
    }
  },
  supabase: {
    url: process.env.SUPABASE_URL || 'https://placeholder-project.supabase.co',
    key: process.env.SUPABASE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.placeholder-key',
    redirect: false
  }
})

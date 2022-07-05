import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  css: ['the-new-css-reset/css/reset.css', '@/global.scss', '@/font.css'],
  vite: {
    server: {
      watch: {
        usePolling: true
      }
    }
  }
})

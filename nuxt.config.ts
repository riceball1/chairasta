// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],

  css: ['~/assets/css/main.css'],

  content: {
    highlight: {
      theme: 'github-light',
    },
  },

  // Static site generation for GitHub Pages
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },

  // Set base URL if deploying to a GitHub Pages project repo (not username.github.io)
  // Change '/chairasta/' to match your repo name
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
  },
})

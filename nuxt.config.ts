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
      // crawlLinks follows <a href> links found in each rendered page.
      // Starting from '/' and '/about' is enough because the homepage
      // renders NuxtLinks to every blog post, so all /blog/* routes
      // are discovered automatically.
      crawlLinks: true,
      routes: ['/', '/about'],
    },
  },

  // Set base URL if deploying to a GitHub Pages project repo (not username.github.io)
  // The NUXT_APP_BASE_URL env var is set in the GitHub Actions workflow.
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
  },
})

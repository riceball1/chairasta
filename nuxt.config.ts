// https://nuxt.com/docs/api/configuration/nuxt-config
const baseURL = process.env.NUXT_APP_BASE_URL || (process.env.NODE_ENV === 'production' ? '/chairasta/' : '/')

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

  // Default production builds to the GitHub Pages project subpath.
  // NUXT_APP_BASE_URL can still override this when needed.
  app: {
    baseURL,
  },
})

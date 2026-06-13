// https://nuxt.com/docs/api/configuration/nuxt-config
// This site deploys to https://riceball1.github.io/ (a <username>.github.io
// repo), which serves from the domain root, so the base path is '/'.
// NUXT_APP_BASE_URL can still override this if the repo is ever renamed
// to a project page (e.g. github.com/riceball1/chairasta -> '/chairasta/').
const baseURL = process.env.NUXT_APP_BASE_URL || '/'

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
      // Starting from '/', '/about', and '/blog' is enough because every
      // page links to the other routes, so all /blog/* post pages are
      // discovered automatically.
      crawlLinks: true,
      routes: ['/', '/about', '/blog'],
    },
  },

  // Default production builds to the GitHub Pages site root.
  // NUXT_APP_BASE_URL can still override this when needed.
  app: {
    baseURL,
  },
})

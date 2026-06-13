# Chairasta ☕

*Chairasta* — from *chai* (tea) and *rasta* (path, road) — is a small blog about chai: recipes, ritual, and the
stories that travel with a warm cup. Built with [Nuxt 3](https://nuxt.com), [Nuxt Content](https://content.nuxt.com),
and [Tailwind CSS](https://tailwindcss.com), and statically generated for GitHub Pages.

## Tech stack

- **Nuxt 3** — Vue framework, statically generated via `nuxt generate`
- **@nuxt/content** — Markdown-based blog posts under `content/blog/`
- **@nuxtjs/tailwindcss** — styling

## Project structure

```
content/blog/        Markdown posts (frontmatter: title, description, date, tags)
pages/index.vue       Home page — lists all posts
pages/blog/index.vue  Blog index — lists all posts
pages/blog/[...slug]  Individual post page
pages/about.vue       About page
layouts/default.vue   Shared header, nav, and footer
assets/css/main.css   Global styles (Tailwind entry point)
```

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:3000`.

## Adding a blog post

Create a new Markdown file under `content/blog/`, e.g. `content/blog/my-post.md`:

```md
---
title: My Post Title
description: A short summary shown in post listings.
date: 2026-06-13
tags: [recipe, chai]
---

Post content goes here, written in Markdown.
```

The post will automatically appear on the home page and `/blog`, sorted by date (newest first), and be reachable at
`/blog/my-post`.

## Building

```bash
npm run build      # server build
npm run generate   # static site for deployment
npm run preview    # preview a generated build locally
```

`npm run generate` outputs the static site to `.output/public`.

## Deployment (GitHub Pages)

This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that runs `npm run generate` and
deploys `.output/public` to GitHub Pages on every push to `main`.

### Base path

The site is deployed as a project page at `https://riceball1.github.io/chairasta/`, so `nuxt.config.ts` sets the
app's base path to `/chairasta/` in production. All `NuxtLink` routes, scripts, and assets are automatically
prefixed with this path at build time.

If you fork this repo or rename it, the base path can be overridden without touching the config by setting a
`NUXT_APP_BASE_URL` repository variable (Settings → Secrets and variables → Actions → Variables) — e.g. `/my-repo/`,
or `/` if deploying to a `<username>.github.io` repo that serves from the domain root.

> **Note:** if the `NUXT_APP_BASE_URL` repository variable is left unset, GitHub Actions passes it through as an
> empty string. `nuxt.config.ts` explicitly handles this case (treating empty as unset) so the build still falls
> back to `/chairasta/` correctly — without this handling, Nitro's prerenderer and crawler disagree on the base path
> and every route fails to prerender with 404 errors.

### Enabling Pages for this repo

In the repo settings, under **Pages**, set the source to **GitHub Actions**. After the workflow runs successfully,
the site will be available at `https://riceball1.github.io/chairasta/`.

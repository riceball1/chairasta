<script setup lang="ts">
const { path } = useRoute()
const { data: post } = await useAsyncData(`content-${path}`, () =>
  queryContent(path).findOne()
)

if (!post.value) {
  throw createError({ statusCode: 404, message: 'Post not found' })
}

useSeoMeta({
  title: () => `${post.value?.title} · Chairasta`,
  description: () => post.value?.description,
})
</script>

<template>
  <article v-if="post">
    <NuxtLink to="/" class="inline-flex items-center gap-1 text-sm text-chai-500 hover:text-chai-700 mb-8 transition-colors">
      ← Back to all posts
    </NuxtLink>

    <header class="mb-8">
      <h1 class="text-4xl font-serif font-bold text-chai-900 mb-3 leading-tight">{{ post.title }}</h1>
      <p v-if="post.description" class="text-gray-500 text-lg mb-4">{{ post.description }}</p>
      <div class="flex items-center gap-3 text-sm text-chai-400">
        <span v-if="post.date">
          {{ new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}
        </span>
        <span v-if="post.tags" class="flex gap-1">
          <span
            v-for="tag in post.tags"
            :key="tag"
            class="bg-chai-100 text-chai-700 rounded-full px-2 py-0.5 text-xs"
          >{{ tag }}</span>
        </span>
      </div>
    </header>

    <div class="prose prose-chai max-w-none
      prose-headings:font-serif prose-headings:text-chai-900
      prose-a:text-chai-600 prose-a:no-underline hover:prose-a:underline
      prose-blockquote:border-chai-400 prose-blockquote:text-chai-700
      prose-strong:text-chai-800
    ">
      <ContentRenderer :value="post" />
    </div>
  </article>
</template>

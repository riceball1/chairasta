<script setup lang="ts">
const { data: posts } = await useAsyncData('posts', () =>
  queryContent('/blog')
    .sort({ date: -1 })
    .find()
)
</script>

<template>
  <div>
    <div class="mb-10 text-center">
      <h2 class="text-3xl font-serif font-bold text-chai-800 mb-2">Welcome to Chairasta</h2>
      <p class="text-chai-600 text-lg">A warm corner of the web for chai lovers and curious minds.</p>
    </div>

    <div v-if="posts && posts.length > 0" class="space-y-6">
      <article
        v-for="post in posts"
        :key="post._path"
        class="bg-white rounded-2xl shadow-sm border border-chai-100 p-6 hover:shadow-md transition-shadow"
      >
        <NuxtLink :to="post._path" class="group">
          <div class="flex items-start justify-between gap-4">
            <div>
              <h3 class="text-xl font-serif font-semibold text-chai-900 group-hover:text-chai-600 transition-colors mb-1">
                {{ post.title }}
              </h3>
              <p v-if="post.description" class="text-gray-500 text-sm mb-3">{{ post.description }}</p>
              <div class="flex items-center gap-3 text-xs text-chai-400">
                <span v-if="post.date">{{ new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}</span>
                <span v-if="post.tags" class="flex gap-1">
                  <span
                    v-for="tag in post.tags"
                    :key="tag"
                    class="bg-chai-100 text-chai-700 rounded-full px-2 py-0.5"
                  >{{ tag }}</span>
                </span>
              </div>
            </div>
            <span class="text-chai-300 group-hover:text-chai-500 transition-colors text-xl mt-1">→</span>
          </div>
        </NuxtLink>
      </article>
    </div>

    <div v-else class="text-center py-16 text-chai-400">
      <p class="text-5xl mb-4">☕</p>
      <p class="text-lg">No posts yet. The kettle is just warming up.</p>
    </div>
  </div>
</template>

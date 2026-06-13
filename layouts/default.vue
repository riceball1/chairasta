<template>
  <div class="min-h-screen bg-chai-50 text-gray-800">
    <header class="bg-chai-800 text-chai-50 shadow-md">
      <div class="max-w-3xl mx-auto px-4 py-5 flex items-center justify-between">
        <NuxtLink to="/" class="flex items-center gap-3 group">
          <span class="text-2xl">☕</span>
          <div>
            <h1 class="text-2xl font-serif font-bold tracking-wide group-hover:text-chai-200 transition-colors">
              Chairasta
            </h1>
            <p class="text-xs text-chai-300 font-light">tales steeped in chai</p>
          </div>
        </NuxtLink>
        <nav class="flex gap-5 text-sm font-medium">
          <NuxtLink to="/" class="hover:text-chai-300 transition-colors" active-class="text-chai-300 underline underline-offset-4">Home</NuxtLink>
          <NuxtLink to="/blog" class="hover:text-chai-300 transition-colors" active-class="text-chai-300 underline underline-offset-4">Blog</NuxtLink>
          <NuxtLink to="/about" class="hover:text-chai-300 transition-colors" active-class="text-chai-300 underline underline-offset-4">About</NuxtLink>
        </nav>
      </div>
    </header>

    <main class="max-w-3xl mx-auto px-4 py-10">
      <slot />
    </main>

    <footer class="border-t border-chai-200 bg-chai-100 mt-16">
      <div class="max-w-3xl mx-auto px-4 py-6 text-center text-sm text-chai-600">
        &copy; {{ new Date().getFullYear() }} Chairasta · Brewed with love
      </div>
    </footer>
  </div>
</template>

<template>
  <div>
    <section
      class="absolute top-0 z-0 w-full bg-slate-200 overflow-hidden py-16"
    >
      <div class="max-w-screen-xl mx-auto px-8">
        <h2 class="text-black text-3xl font-bold font['Inter'] mb-8 mt-8">
          Discover Latest Blogs
        </h2>
        <div
          v-if="posts"
          class="grid grid-cols-2 sm:grid-cols2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          <cardView
            v-for="post in posts"
            :key="post.id"
            :title-text="post.title ?? ''"
            :subtitle="post.content ?? ''"
            :image-url="post.imgUrl ?? ''"
            :blog-id="post.id"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useNuxtApp } from "#app";
const { $trpcClient } = useNuxtApp();
const { data: posts } = $trpcClient.post.getAll.useQuery();

watchEffect(() => {
  console.log("Fetched posts", posts.value);
});
</script>

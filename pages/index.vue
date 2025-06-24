<template>
  <div>
    <section
      class="absolute top-0 z-0 w-full h-80 bg-slate-700 overflow-hidden flex flex-col items-center justify-center text-center"
    >
      <h1 class="text-white text-4xl font-semibold font['Inter'] mb-8">
        Weclome To Blogie!
      </h1>
      <p class="text-white text-2xl font-normal font['Inter'] max-w-xl px-4">
        Discover, write and learn from the latest blogs
      </p>
    </section>

    <div class="mt-60">
      <section class="w-full bg-slate-200 overflow-hidden py-16">
        <div class="max-w-screen-xl mx-auto px-8">
          <h2 class="text-black text-3xl font-bold font['Inter'] mb-8">
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
  </div>
</template>

<script setup lang="ts">
import { useNuxtApp } from "#app";
const { $trpcClient } = useNuxtApp();
const { data: posts } = $trpcClient.post.getAll.useQuery({ limit: 8 });

watchEffect(() => {
  console.log("Fetched posts", posts.value);
});
</script>

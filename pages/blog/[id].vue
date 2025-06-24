<template>
  <div class="absolute top-0 z-0 w-full bg-slate-200 overflow-hidden py-16">
    <div class="max-w-screen-xl mx-auto px-8">
      <h1 class="text-black text-4xl font-bold mb-8 pt-8">
        {{ blogPost?.title || "Loading..." }}
      </h1>

      <div
        class="w-full aspect-[5/2] max-h-96 rounded-3xl overflow-hidden mb-8"
      >
        <img
          v-if="blogPost?.imgUrl"
          :src="blogPost.imgUrl"
          :alt="blogPost.title || 'Blog Post Image'"
          class="object-cover w-full h-full"
        />
        <div
          v-else
          class="w-full h-full bg-gray-300 flex items-center justify-center text-gray-600"
        >
          Image Not Available
        </div>
      </div>

      <div
        class="w-full min-h-[256px] bg-slate-700 rounded-3xl p-6 text-white text-center font-normal overflow-hidden"
      >
        <p v-if="pending" class="text-gray-400">Loading blog post content...</p>
        <p
          v-else-if="blogPost && formattedContent"
          v-html="formattedContent"
        ></p>
        <p v-else-if="!blogPost && !pending && error" class="text-red-400">
          Error fetching blog post: {{ error.message }}
        </p>
        <p v-else-if="!blogPost && !pending" class="text-gray-400">
          Blog post not found.
        </p>
        <p v-else class="text-gray-400">No content to display.</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface BlogPost {
  id: number;
  title: string;
  content: string | null;
  imgUrl: string | null;
  createdAt: string;
}

const route = useRoute();
const { $trpcClient } = useNuxtApp();

const blogIdParam = route.params.id;

const blogId = computed(() => {
  if (Array.isArray(blogIdParam)) {
    return parseInt(blogIdParam[0], 10);
  }
  return parseInt(blogIdParam as string, 10);
});

const {
  data: blogPost,
  pending,
  error,
} = $trpcClient.post.getById.useQuery(blogId.value, {
  watch: [blogId],
  server: true,
});

const formattedContent = computed(() => {
  if (blogPost.value && blogPost.value.content) {
    return blogPost.value.content
      .replace(/\n\n/g, "<br><br>")
      .replace(/\n/g, "<br>");
  }
  return "";
});
</script>

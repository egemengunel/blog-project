<template>
  <div class="absolute top-0 -z-10 w-full bg-slate-200 overflow-hidden py-16">
    <div class="max-w-screen-xl mx-auto px-8">
      <h1 class="text-black text-4xl font-bold mb-8 pt-8">
        {{ blogPost?.title || "Loading" }}
      </h1>
      <div
        class="w-full aspect-[5/2] max-h-96 rounded-3xl overflow-hidden mb-8"
      >
        <img
          v-if="blogPost?.imageUrl"
          :src="blogPost.imageUrl"
          :alt="blogPost.title"
          class="bbject-cover w-full h-full"
        />
        <div
          v-else
          class="w-full h-full bg-gray-300 flex items-center justify-center text-gray-600"
        >
          Image Not Avaliable
        </div>
      </div>

      <div
        class="w-full aspect-[5/2] max-h-96 rounded-3xl overflow-hidden mb-8"
      >
        <div
          class="w-full min-h-[256px] bg-slate-700 rounded-3xl p-6 text-black text-center font-normal overflow-hidden"
        >
          <p v-html="formattedContent || 'Loading Content...'"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
//import { useRoute } from "vue-router";

//interface for the page
interface BlogPost {
  id: string;
  title: string;
  imageUrl: string;
  content: string;
}

//const route = useRoute();
//const blogId = route.params.id as string;

const blogPost = ref<BlogPost | null>(null);
const formattedContent = computed(() => {
  if (blogPost.value && blogPost.value.content) {
    return blogPost.value.content.replace(/\n/g, "<br><br>");
  }
  return "";
});

//TODO
// const fetchBlogPost = async () => {

// }
</script>

<template>
  <div>
    <section
      class="absolute top-0 -z-10 w-full bg-slate-200 overflow-hidden py-16"
    >
      <div class="max-w-screen-xl mx-auto px-8">
        <div class="flex items-center justify-between">
          <h1 class="text-black text-3xl font-bold mb-8 pt-8">Add an Entry</h1>

          <button
            class="w-44 h-14 rounded-full bg-slate-500 text-white text-xl font-medium hover:bg-slate-600"
          >
            Add
          </button>
        </div>

        <label
          for="cover"
          class="w-full aspect-[5/2] max-h-80 rounded-3xl bg-slate-800 flex flex-col items-center justify-center text-white cursor-pointer relative overflow-hidden"
        >
          <template v-if="preview">
            <img
              :src="preview"
              alt="preview"
              class="object-cover w-full h-full"
            />
          </template>

          <template v-else>
            <div
              class="w-20 h-20 border-4 border-white rounded-full flex items-center justify-center text-4xl mb-4"
            >
              +
            </div>
            <p class="text-center px-6">Add an image for your entry</p>
          </template>

          <input
            id="cover"
            type="file"
            accept="image/*"
            class="hidden"
            @change="onFileChange"
          />
        </label>
        <!-- text input areaa -->

        <div
          class="w-full h-64 bg-slate-600 rounded-3xl overflow-hidden mt-8"
          @click="focusTextarea"
        >
          <textarea
            ref="blogContent"
            class="w-full h-full p-4 bg-transparent text-white placeholder-gray-400 focus:outline-none resize-none"
            placeholder="Enter Your Text Here"
            v-model="entryText"
          ></textarea>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const entryText = ref("");
const preview = ref<string | null>(null);
const blogContent = ref<HTMLTextAreaElement | null>(null);

const onFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      preview.value = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  } else {
    preview.value = null;
  }
};

const focusTextarea = () => {
  if (blogContent.value) {
    blogContent.value.focus();
  }
};

// const addEntry = () => {
//   console.log("Blog Entry Text:", entryText.value);
//   console.log("Image Preview Data URL:", preview.value);
//   //send this data to supabase / api here
// };
</script>

<template>
  <div>
    <section
      class="absolute top-0 z-0 w-full bg-slate-200 overflow-hidden py-16"
    >
      <div class="max-w-screen-xl mx-auto px-8">
        <div class="flex items-center justify-between">
          <h1 class="text-black text-3xl font-bold mb-8 pt-8">Add an Entry</h1>

          <button
            class="w-44 h-14 rounded-full bg-slate-500 text-white text-xl font-medium hover:bg-slate-600"
            @click="addEntry"
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

        <!-- title -->
        <div class="w-full h-32 bg-slate-400 rounded-3xl overflow-hidden mt-8">
          <textarea
            ref="titleContent"
            v-model="titleText"
            class="w-full h-full p-2 bg-transparent text=white placeholder-gray-600 focus:outline-none resize-none"
            placeholder="Enter Title"
          />
        </div>

        <!-- content -->
        <div class="w-full h-64 bg-slate-600 rounded-3xl overflow-hidden mt-8">
          <textarea
            ref="blogContent"
            v-model="entryText"
            class="w-full h-full p-4 bg-transparent text-white placeholder-gray-400 focus:outline-none resize-none"
            placeholder="Enter Your Text Here"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { useNuxtApp } from "#app";

const entryText = ref("");
const titleText = ref("");
const preview = ref<string | null>(null);
const blogContent = ref<HTMLTextAreaElement | null>(null);
const titleContent = ref<HTMLTextAreaElement | null>(null);

const { $trpcClient } = useNuxtApp();

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

const addEntry = async () => {
  if (!entryText.value) return;
  await $trpcClient.post.create.mutate({
    content: entryText.value,
    imgUrl: preview.value ?? null,
    title: titleText.value,
  });
  //reset the fields
  entryText.value = "";
  preview.value = null;
};
</script>

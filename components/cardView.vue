<template>
  <div class="relative w-64 h-72 rounded-2xl overflow-hidden shadow-lg">
    <div
      class="absolute inset-0 bg-cover bg-center"
      :style="{ backgroundImage: 'url(\'' + 'imageUrl' + '\')' }"
    />

    <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent">
      <div class="relative z-10 flex flex-col justify-end h-full p-4">
        <h3
          class="text-white text-base font-bold font['Inter'] line-clamp-2 mb-2"
        >
          Title Text Will be Placed Here
        </h3>
        <p class="text-white text-xs font-normal font['Inter'] line-clamp-2">
          Paragraph text will appear here and have text
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// const props = defineProps({
//   imageUrl: {
//     type: String,
//     required: true,
//   },
// });
</script>

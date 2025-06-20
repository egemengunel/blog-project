<template>
  <header
    class="mt-4 pt-4 px-8 pb-4 bg-slate-700 rounded-[50px] ml-4 mr-4 relative z-10"
  >
    <nav>
      <ul class="flex flex-wrap gap-6 justify-between">
        <div class="flex gap-6">
          <li
            v-for="link in links"
            :key="link.to"
            class="text-lg text-white font-semibold tracking-tight"
          >
            <NuxtLink
              :to="link.to"
              class="hover:text-gray-600 transition-colors"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </div>

        <li>
          <NuxtLink
            to="/create"
            class="text-lg text-white font-semibold tracking-tight"
          >
            Create
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
interface Link {
  label: string;
  to: string;
}

const { links } = withDefaults(defineProps<{ links?: Link[] }>(), {
  links: () => [
    { label: "Home", to: "/" },
    { label: "All Blogs", to: "/allBlogs" },
  ],
});
</script>

<script setup lang="ts">
defineProps<{ title: string; description?: string; eyebrow?: string }>();
</script>
<template>
  <section class="page-intro border-b border-blue-100/50 py-14 md:py-20">
    <div class="container-main">
      <NuxtLink
        to="/"
        class="relative z-10 mb-8 inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-blue-600"
        >Beranda <span class="text-blue-300">/</span> Arah Juara</NuxtLink
      >
      <p class="eyebrow">{{ eyebrow || "BELAJAR BERSAMA ARAH JUARA" }}</p>
      <h1 class="max-w-4xl">{{ title }}</h1>
      <p v-if="description" class="mt-5 max-w-2xl">{{ description }}</p>
    </div>
  </section>
</template>

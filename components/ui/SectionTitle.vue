<script setup lang="ts">
defineProps<{
  title: string;
  eyebrow?: string;
  description?: string;
  to?: string;
}>();
</script>
<template>
  <div class="mb-9 flex flex-wrap items-end justify-between gap-5">
    <div>
      <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
      <h2>{{ title }}</h2>
      <p v-if="description" class="mt-3 max-w-2xl text-sm">{{ description }}</p>
    </div>
    <NuxtLink v-if="to" :to="to" class="text-sm font-bold text-blue-600"
      >Lihat semua ↗</NuxtLink
    >
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string; description?: string; eyebrow?: string }>();
</script>
<template>
  <section class="hero-grid border-b border-blue-100/50 py-14 md:py-20">
    <div class="container-main">
      <p class="eyebrow">{{ eyebrow || "BELAJAR BERSAMA ARAH JUARA" }}</p>
      <h1 class="max-w-4xl">{{ title }}</h1>
      <p v-if="description" class="mt-5 max-w-2xl">{{ description }}</p>
    </div>
  </section>
</template>

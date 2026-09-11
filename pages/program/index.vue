<script setup lang="ts">
import { programs } from "~/data/programs";
import { levels } from "~/data/site";
usePageSeo("Program Bimbingan Belajar");
const route = useRoute();
const level = ref(
  levels.includes(route.query.level as (typeof levels)[number])
    ? String(route.query.level)
    : "",
);
const search = ref("");
const filtered = computed(() =>
  programs.filter(
    (p) =>
      (!level.value || p.level === level.value) &&
      `${p.name} ${p.subject}`
        .toLowerCase()
        .includes(search.value.toLowerCase().trim()),
  ),
);
</script>
<template>
  <ProgramHero />
  <section class="section container-main">
    <ProgramFilter v-model:level="level" v-model:search="search" />
    <p class="mb-5 text-sm" aria-live="polite">
      {{ filtered.length }} program ditemukan
    </p>
    <ProgramGrid :programs="filtered" />
  </section>
</template>

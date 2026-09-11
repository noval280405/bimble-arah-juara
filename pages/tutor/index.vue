<script setup lang="ts">
import { tutors } from "~/data/tutors";
usePageSeo("Tutor Bimbel");
const f = ref({ level: "", subject: "" });
const filtered = computed(() =>
  tutors.filter(
    (t) =>
      (!f.value.level ||
        (f.value.level === "SMA/SMK"
          ? t.levels.some((l) => ["SMA", "SMK"].includes(l))
          : t.levels.includes(f.value.level))) &&
      (!f.value.subject || t.subjects.includes(f.value.subject)),
  ),
);
</script>
<template>
  <TutorHero />
  <section class="section container-main">
    <TutorFilter v-model="f" /><TutorGrid :tutors="filtered" />
    <p class="mt-6 text-xs">Profil dan ilustrasi tutor merupakan data demo.</p>
  </section>
</template>

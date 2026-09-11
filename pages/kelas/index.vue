<script setup lang="ts">
import { classes } from "~/data/classes";
import { schedules } from "~/data/schedules";
usePageSeo("Katalog Kelas Bimbel");
const f = ref({ level: "", subject: "", mode: "", day: "", price: "" });
const filtered = computed(() =>
  classes.filter(
    (c) =>
      (!f.value.level || c.level === f.value.level) &&
      (!f.value.subject || c.subject === f.value.subject) &&
      (!f.value.mode ||
        c.mode === f.value.mode ||
        (f.value.mode === "Private" && c.type === "Private") ||
        (f.value.mode === "Kelompok" && c.type !== "Private")) &&
      (!f.value.day ||
        schedules.some((s) => s.classId === c.id && s.day === f.value.day)) &&
      (!f.value.price ||
        (f.value.price === "≤ Rp400.000"
          ? c.price <= 400000
          : f.value.price === "Rp400.001–500.000"
            ? c.price > 400000 && c.price <= 500000
            : c.price > 500000)),
  ),
);
</script>
<template>
  <ClassHero />
  <section class="section container-main">
    <ClassFilter v-model="f" />
    <p class="mb-5 text-sm" aria-live="polite">
      {{ filtered.length }} kelas tersedia • Jadwal dan kuota merupakan data
      demo
    </p>
    <ClassGrid :items="filtered" />
  </section>
</template>

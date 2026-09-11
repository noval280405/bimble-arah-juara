<script setup lang="ts">
import { schedules } from "~/data/schedules";
import { classes } from "~/data/classes";
import { tutors } from "~/data/tutors";
usePageSeo("Jadwal Kelas Bimbel");
const f = ref({ level: "", day: "", tutor: "", mode: "" });
const filtered = computed(() =>
  schedules.filter((s) => {
    const c = classes.find((c) => c.id === s.classId)!;
    return (
      (!f.value.level || c.level === f.value.level) &&
      (!f.value.day || s.day === f.value.day) &&
      (!f.value.mode || s.mode === f.value.mode) &&
      (!f.value.tutor ||
        tutors.find((t) => t.id === c.tutorId)?.name === f.value.tutor)
    );
  }),
);
</script>
<template>
  <UiPageHero
    title="Atur Waktu, Wujudkan Tujuan."
    description="Temukan jadwal belajar yang cocok dengan aktivitasmu. Seluruh waktu ditampilkan dalam WIB."
  />
  <section class="section container-main">
    <ScheduleFilter v-model="f" /><ScheduleTable :items="filtered" />
    <p class="mt-5 text-xs">
      Jadwal contoh mingguan. Konfirmasikan jadwal dan ketersediaan kepada
      admin.
    </p>
  </section>
</template>

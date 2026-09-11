<script setup lang="ts">
import { programs, subjects } from "~/data/programs";
import { levels } from "~/data/site";
import { classes } from "~/data/classes";
const route = useRoute();
const level = levels.find((l) => l.toLowerCase() === route.params.slug);
const program = programs.find((p) => p.slug === route.params.slug);
if (!level && !program)
  throw createError({
    statusCode: 404,
    statusMessage: "Program tidak ditemukan",
  });
const title = program ? `Bimbel ${program.name}` : `Program ${level}`;
usePageSeo(title);
const selectedLevel = program?.level || level!;
const related = classes.filter(
  (c) =>
    c.level === selectedLevel && (!program || c.subject === program.subject),
);
</script>
<template>
  <UiPageHero
    :title="title"
    :description="
      program?.description ||
      'Pendampingan belajar sesuai jenjang, dengan materi terstruktur dan tutor yang mendukung perkembanganmu.'
    "
  />
  <section class="section container-main">
    <div class="detail-grid">
      <div>
        <h2 class="!text-2xl">
          {{
            program
              ? "Belajar dengan arah yang jelas"
              : "Pilihan mata pelajaran"
          }}
        </h2>
        <p class="my-5">
          {{
            selectedLevel === "SD"
              ? "Untuk kelas 1–3 dan 4–6."
              : selectedLevel === "SMP"
                ? "Untuk kelas 7, 8, dan 9."
                : selectedLevel === "SMA" || selectedLevel === "SMK"
                  ? "Untuk kelas 10, 11, dan 12."
                  : "Untuk mengembangkan pemahaman materi dan keterampilan praktis."
          }}
        </p>
        <ul v-if="program" class="checklist">
          <li v-for="feature in program.features" :key="feature">
            {{ feature }}
          </li>
        </ul>
        <div v-else class="grid gap-3 sm:grid-cols-2">
          <NuxtLink
            v-for="subject in subjects[selectedLevel]"
            :key="subject"
            :to="
              '/program/' +
              `${selectedLevel}-${subject}`.toLowerCase().replaceAll(' ', '-')
            "
            class="rounded-xl border p-4 text-sm font-semibold text-blue-950 hover:bg-blue-50"
            >{{ subject }} ↗</NuxtLink
          >
        </div>
        <p
          v-if="selectedLevel === 'Mahasiswa'"
          class="mt-6 rounded-xl bg-amber-50 p-5 text-sm"
        >
          Program mahasiswa merupakan pendampingan pembelajaran dan pemahaman
          materi. Kami tidak menyediakan jasa mengerjakan tugas, skripsi, atau
          ujian atas nama peserta.
        </p>
      </div>
      <aside class="card h-fit !bg-blue-50">
        <h3>Temukan cara belajarmu.</h3>
        <p class="my-4 text-sm">
          Konsultasikan tujuan, jadwal, dan pilihan online, offline, private
          atau kelompok.
        </p>
        <NuxtLink
          :to="{
            path: '/kontak',
            query: { level: selectedLevel, program: program?.subject },
          }"
          class="btn w-full"
          >Konsultasi Program ↗</NuxtLink
        >
      </aside>
    </div>
    <div class="mt-16">
      <UiSectionTitle title="Kelas yang sesuai" to="/kelas" /><ClassGrid
        :items="related"
      />
    </div>
  </section>
</template>

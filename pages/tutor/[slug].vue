<script setup lang="ts">
import { tutors } from "~/data/tutors";
import { classes } from "~/data/classes";
import { schedules } from "~/data/schedules";
import { whatsappUrl } from "~/data/site";
const route = useRoute();
const tutor = tutors.find((t) => t.slug === route.params.slug);
if (!tutor)
  throw createError({
    statusCode: 404,
    statusMessage: "Tutor tidak ditemukan",
  });
const items = classes.filter((c) => c.tutorId === tutor.id);
const slots = schedules.filter((s) => items.some((c) => c.id === s.classId));
usePageSeo(tutor.name + " — " + tutor.title, tutor.bio);
</script>
<template>
  <UiPageHero
    :title="tutor.name"
    :description="tutor.title"
    eyebrow="KENALI TUTOR KAMI"
  />
  <section class="section container-main">
    <div class="grid gap-10 md:grid-cols-[300px_1fr]">
      <img
        :src="tutor.image"
        :alt="'Ilustrasi ' + tutor.name"
        width="400"
        height="300"
        class="w-full rounded-2xl"
      />
      <div>
        <h2 class="!text-2xl">Belajar bersama {{ tutor.name }}</h2>
        <p class="mt-4">{{ tutor.bio }}</p>
        <p class="mt-4 font-semibold">
          {{ tutor.education }} • {{ tutor.experience }} pengalaman
        </p>
        <p class="mt-4 text-sm">Jenjang: {{ tutor.levels.join(" • ") }}</p>
        <div class="mt-4 flex flex-wrap gap-2">
          <span
            v-for="subject in tutor.subjects"
            :key="subject"
            class="badge"
            >{{ subject }}</span
          >
        </div>
        <a
          :href="
            whatsappUrl(
              `Halo, saya ingin belajar bersama tutor ${tutor.name}. Mohon informasi kelas yang tersedia.`,
            )
          "
          target="_blank"
          rel="noopener noreferrer"
          class="btn mt-6"
          >Belajar Bersama Tutor Ini ↗</a
        >
      </div>
    </div>
    <div class="mt-16">
      <UiSectionTitle title="Kelas yang diampu" /><ClassGrid :items="items" />
    </div>
    <div class="mt-16">
      <UiSectionTitle title="Jadwal tutor" /><ScheduleTable :items="slots" />
    </div>
  </section>
</template>

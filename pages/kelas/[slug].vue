<script setup lang="ts">
import { classes } from "~/data/classes";
import { tutors } from "~/data/tutors";
import { rupiah, whatsappUrl } from "~/data/site";
const route = useRoute();
const item = classes.find((c) => c.slug === route.params.slug);
if (!item)
  throw createError({
    statusCode: 404,
    statusMessage: "Kelas tidak ditemukan",
  });
const tutor = tutors.find((t) => t.id === item.tutorId)!;
usePageSeo(item.name, item.description);
</script>
<template>
  <UiPageHero
    :title="item.name"
    :description="item.description"
    :eyebrow="`${item.level} • ${item.subject} • ${item.mode}`"
  />
  <section class="section container-main detail-grid">
    <div>
      <h2 class="!text-2xl">Tentang Kelas</h2>
      <p class="my-5">
        {{ item.description }} Kelas {{ item.type }} dengan
        {{ item.meetingsPerMonth }} pertemuan per bulan, masing-masing
        {{ item.durationMinutes }} menit. Kapasitas maksimal
        {{ item.capacity }} siswa.
      </p>
      <h3 class="mb-4 mt-8">Materi yang dipelajari</h3>
      <ul class="checklist">
        <li v-for="topic in item.topics" :key="topic">{{ topic }}</li>
      </ul>
      <h3 class="mb-4 mt-8">Fasilitas belajar</h3>
      <ul class="checklist">
        <li>Modul dan materi latihan</li>
        <li>Diskusi bersama tutor</li>
        <li>Evaluasi pemahaman materi</li>
      </ul>
      <h3 class="mb-3 mt-8">Tutor pendamping</h3>
      <NuxtLink :to="'/tutor/' + tutor.slug" class="font-semibold text-blue-600"
        >{{ tutor.name }} — {{ tutor.title }} ↗</NuxtLink
      >
    </div>
    <aside class="card h-fit">
      <span class="badge">{{ item.mode }}</span>
      <p class="mt-5 text-3xl font-extrabold text-blue-950">
        {{ rupiah(item.price) }}
      </p>
      <p class="mt-2 text-sm">
        per bulan • {{ item.meetingsPerMonth }} pertemuan
      </p>
      <h3 class="mb-2 mt-7">Jadwal belajar</h3>
      <p class="text-sm">{{ item.schedule }} WIB</p>
      <a
        :href="
          whatsappUrl(
            `Halo Bimbel Arah Juara, saya ingin mendaftar kelas ${item.name}, mode ${item.mode}. Mohon informasi jadwal dan biaya.`,
          )
        "
        target="_blank"
        rel="noopener noreferrer"
        class="btn mt-7 w-full"
        >Daftar via WhatsApp ↗</a
      >
      <p class="mt-4 text-xs">
        Data kelas demo. Konfirmasikan jadwal, harga dan kuota kepada admin.
      </p>
    </aside>
  </section>
</template>

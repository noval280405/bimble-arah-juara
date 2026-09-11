<script setup lang="ts">
import { testimonials } from "~/data/testimonials";
</script>
<template>
  <section class="section bg-slate-50">
    <div class="container-main">
      <UiSectionTitle
        eyebrow="CERITA PERJALANAN BELAJAR"
        title="Langkah kecil, perubahan berarti"
        description="Contoh pengalaman belajar siswa dan orang tua — testimoni ilustratif."
      />
      <div class="grid-cards">
        <figure v-for="t in testimonials" :key="t.name" class="card">
          <p
            class="mb-4 tracking-widest text-yellow-500"
            aria-label="Ilustrasi penilaian lima bintang"
          >
            ★★★★★
          </p>
          <blockquote class="text-sm leading-7 text-slate-700">
            “{{ t.quote }}”
          </blockquote>
          <figcaption class="mt-6 flex items-center gap-3">
            <span
              class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700"
              >{{ t.name[0] }}</span
            >
            <div>
              <p class="text-sm font-bold text-blue-950">{{ t.name }}</p>
              <p class="text-xs">{{ t.role }}</p>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

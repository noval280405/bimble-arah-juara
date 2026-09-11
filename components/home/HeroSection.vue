<script setup lang="ts">
import { whatsappUrl } from "~/data/site";
</script>
<template>
  <section class="hero-grid overflow-hidden">
    <div
      class="container-main grid items-center gap-10 pb-14 pt-14 lg:grid-cols-2 lg:py-20"
    >
      <div>
        <div
          class="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-2 text-[10px] font-bold text-blue-700 sm:text-xs"
        >
          <span class="h-2 w-2 rounded-full bg-blue-600" /> SD • SMP • SMA/SMK •
          Mahasiswa • Umum
        </div>
        <h1 class="!text-[39px] !leading-[1.22] sm:!text-5xl xl:!text-[56px]">
          Belajar Lebih<br />Terarah.<br /><span class="text-blue-600"
            >Raih Prestasi<br />Lebih Tinggi.</span
          >
        </h1>
        <p class="mt-6 max-w-lg text-sm leading-7 md:text-base">
          Program belajar untuk SD, SMP, SMA/SMK, mahasiswa dan umum bersama
          tutor berpengalaman dan metode belajar yang mudah dipahami.
        </p>
        <div class="mt-8 flex flex-wrap gap-3">
          <NuxtLink to="/program" class="btn">Lihat Program ↗</NuxtLink
          ><a
            :href="whatsappUrl()"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-light"
            >Konsultasi Gratis</a
          >
        </div>
        <div class="mt-7 flex flex-wrap gap-5 text-xs font-medium">
          <span><b class="mr-1 text-emerald-600">✓</b> Tutor sesuai bidang</span
          ><span><b class="mr-1 text-emerald-600">✓</b> Online & offline</span>
        </div>
      </div>
      <div class="hero-art relative mx-auto w-full max-w-xl">
        <img
          src="/images/hero/learning.svg"
          width="600"
          height="520"
          alt="Ilustrasi dua pelajar belajar bersama dengan laptop dan buku"
          fetchpriority="high"
          class="w-full"
        />
        <div
          class="absolute left-0 top-4 flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-3 shadow-lg sm:top-12 sm:p-4"
        >
          <span class="rounded-lg bg-yellow-100 p-2 text-xl">✦</span>
          <div>
            <p class="text-xs font-bold text-blue-950">
              Setiap langkah berarti
            </p>
            <p class="mt-1 text-[10px]">Mulai dari potensi, menuju prestasi</p>
          </div>
        </div>
        <div
          class="absolute bottom-3 right-0 rounded-xl border border-slate-100 bg-white px-5 py-4 shadow-lg sm:bottom-8"
        >
          <p class="text-sm font-bold text-blue-950">
            <span class="mr-2 text-blue-600">↗</span> Belajar sesuai tujuanmu
          </p>
          <p class="mt-1 text-xs">Lebih fokus. Lebih percaya diri.</p>
        </div>
      </div>
    </div>
    <div class="border-t border-blue-100 bg-white/70">
      <div
        class="container-main grid grid-cols-2 gap-6 py-6 text-center md:grid-cols-4"
      >
        <div
          v-for="[n, t] in [
            ['6', 'Jenjang pendidikan'],
            ['48', 'Pilihan program'],
            ['2', 'Mode belajar'],
            ['1', 'Tujuan: berkembang'],
          ]"
          :key="t"
        >
          <span class="text-2xl font-extrabold text-blue-950">{{ n }}</span>
          <p class="mt-1 text-xs">{{ t }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

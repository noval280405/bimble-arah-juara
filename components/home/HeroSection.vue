<script setup lang="ts">
import { levels, whatsappUrl } from "~/data/site";
import { programs } from "~/data/programs";
const selectedLevel = ref("SMP");
</script>

<template>
  <section class="hero-modern relative overflow-hidden">
    <div class="hero-orb hero-orb-one" aria-hidden="true" />
    <div class="hero-orb hero-orb-two" aria-hidden="true" />
    <div
      class="container-main relative grid items-center gap-12 py-14 lg:grid-cols-[1.05fr_1fr] lg:py-24"
    >
      <div class="hero-art">
        <div class="hero-pill">
          <span class="status-dot" /> RUANG BELAJAR, PELUANG TANPA BATAS
          <span class="text-blue-300">↗</span>
        </div>
        <h1
          class="mt-7 !text-[43px] !leading-[1.12] !tracking-[-.055em] !text-white sm:!text-6xl xl:!text-[72px]"
        >
          Belajar terarah.<br />Buka <span class="hero-gradient">potensi</span
          ><br /><span class="hero-gradient">terbaikmu.</span>
        </h1>
        <p class="mt-7 max-w-lg text-sm leading-7 text-slate-300 md:text-base">
          Dari memahami pelajaran hingga menguasai keterampilan baru. Temukan
          cara belajar yang cocok untukmu, bersama tutor yang mendukung setiap
          langkah.
        </p>
        <div class="mt-9 flex flex-wrap gap-3">
          <NuxtLink to="/program" class="btn hero-primary"
            >Temukan Program <span>↗</span></NuxtLink
          ><a
            :href="whatsappUrl()"
            target="_blank"
            rel="noopener noreferrer"
            class="btn hero-secondary"
            >Konsultasi Gratis <span>→</span></a
          >
        </div>
        <div class="mt-9 flex items-center gap-4">
          <div class="flex -space-x-2">
            <img
              v-for="name in ['ahmad', 'nadia', 'bima']"
              :key="name"
              :src="`/images/tutors/${name}.svg`"
              width="36"
              height="36"
              alt=""
              class="h-9 w-9 rounded-full border-2 border-[#101d3f] object-cover"
            />
          </div>
          <div class="text-xs text-slate-300">
            <p class="font-semibold text-white">
              Belajar bersama, tumbuh bersama.
            </p>
            <p class="mt-1 text-slate-400">
              Tutor sesuai bidang · Online & offline
            </p>
          </div>
        </div>
      </div>
      <div class="learning-composition hero-art">
        <div class="learning-window">
          <div
            class="flex items-center justify-between border-b border-slate-200/70 px-5 py-4"
          >
            <div class="flex items-center gap-2">
              <span class="h-2 w-2 rounded-full bg-blue-600" /><span
                class="text-xs font-extrabold text-blue-950"
                >Your next chapter.</span
              >
            </div>
            <span class="text-[10px] font-semibold text-slate-400"
              >ARAH JUARA / 01</span
            >
          </div>
          <div class="p-5 sm:p-7">
            <div class="flex items-start justify-between">
              <div>
                <span
                  class="text-[10px] font-bold uppercase tracking-widest text-blue-600"
                  >SATU LANGKAH LEBIH DEKAT</span
                >
                <h2 class="mt-2 !text-2xl">
                  Masa depan dimulai<br />dari rasa ingin tahu.
                </h2>
              </div>
              <span class="spark-symbol" aria-hidden="true">✳</span>
            </div>
            <div class="relative mt-4 overflow-hidden rounded-2xl bg-[#eaf0ff]">
              <div
                class="absolute left-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold text-blue-700"
              >
                ✦ Learn. Practice. Grow.
              </div>
              <img
                src="/images/hero/learning.svg"
                width="600"
                height="520"
                alt="Ilustrasi pelajar berkolaborasi dan belajar bersama"
                fetchpriority="high"
                class="mx-auto h-[230px] w-full object-contain sm:h-[270px]"
              />
            </div>
            <div class="mt-5 grid grid-cols-3 gap-3">
              <div
                v-for="[icon, title, desc] in [
                  ['◎', 'Pahami', 'Konsep yang jelas'],
                  ['↗', 'Latih', 'Langkah bertahap'],
                  ['✦', 'Kuasai', 'Lebih percaya diri'],
                ]"
                :key="title"
                class="rounded-xl border border-slate-100 bg-slate-50/70 p-3"
              >
                <span class="text-lg text-blue-600">{{ icon }}</span>
                <p class="mt-1 text-xs font-extrabold text-blue-950">
                  {{ title }}
                </p>
                <p class="mt-1 text-[9px] text-slate-500">{{ desc }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="floating-note">
          <span
            class="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-100 text-xl text-lime-800"
            >✓</span
          >
          <div>
            <p class="text-xs font-extrabold text-blue-950">
              Langkah kecil. Potensi besar.
            </p>
            <p class="mt-1 text-[10px] text-slate-500">
              Belajar dengan ritmemu sendiri
            </p>
          </div>
          <span class="ml-2 text-xl text-blue-600">↗</span>
        </div>
      </div>
    </div>
    <div class="container-main relative pb-8">
      <div class="hero-finder">
        <div class="shrink-0">
          <p
            class="text-[10px] font-bold uppercase tracking-widest text-blue-300"
          >
            MULAI DARI DIRIMU
          </p>
          <p class="mt-1 text-sm font-semibold text-white">
            Mau belajar apa hari ini?
          </p>
        </div>
        <div class="flex flex-wrap gap-2" aria-label="Pilih jenjang program">
          <button
            v-for="level in levels"
            :key="level"
            :aria-pressed="selectedLevel === level"
            :class="[
              'level-chip',
              selectedLevel === level ? 'is-selected' : '',
            ]"
            @click="selectedLevel = level"
          >
            {{ level }}
          </button>
        </div>
        <NuxtLink
          :to="{ path: '/program', query: { level: selectedLevel } }"
          class="flex shrink-0 items-center gap-3 text-sm font-bold text-white"
          >Jelajahi
          <span
            class="flex h-9 w-9 items-center justify-center rounded-full bg-white/10"
            >↗</span
          ></NuxtLink
        >
      </div>
    </div>
  </section>
  <section class="border-b border-slate-200/70 bg-white">
    <div class="container-main grid grid-cols-2 gap-6 py-8 md:grid-cols-4">
      <div
        v-for="[n, t, detail] in [
          [
            String(levels.length),
            'Jenjang pendidikan',
            'Dari sekolah hingga profesional',
          ],
          [
            String(programs.length),
            'Pilihan program',
            'Temukan yang sesuai tujuanmu',
          ],
          [
            'Online + offline',
            'Cara belajar fleksibel',
            'Belajar di tempat ternyaman',
          ],
          ['Personal', 'Pendampingan belajar', 'Setiap potensi punya arahnya'],
        ]"
        :key="t"
        class="border-l-2 border-blue-100 pl-5"
      >
        <p
          class="text-xl font-extrabold tracking-tight text-blue-950 sm:text-2xl"
        >
          {{ n }}
        </p>
        <p class="mt-1 text-xs font-semibold text-slate-700">{{ t }}</p>
        <p class="mt-1 text-[10px] text-slate-400">{{ detail }}</p>
      </div>
    </div>
  </section>
</template>

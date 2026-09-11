<script setup lang="ts">
import type { LearningClass } from "~/data/classes";
import { rupiah } from "~/data/site";
defineProps<{ item: LearningClass }>();
</script>
<template>
  <article class="card flex flex-col">
    <div class="mb-4 flex flex-wrap gap-2">
      <span class="badge">{{ item.level }}</span
      ><span class="badge !bg-emerald-50 !text-emerald-700">{{
        item.mode
      }}</span>
    </div>
    <p class="text-xs font-semibold text-slate-400">
      {{ item.subject }} • {{ item.type === "Group" ? "Kelompok" : item.type }}
    </p>
    <h3 class="mt-2">{{ item.name }}</h3>
    <div class="my-5 grid grid-cols-3 gap-2 text-xs">
      <span>{{ item.meetingsPerMonth }} pertemuan</span
      ><span>{{ item.durationMinutes }} menit</span
      ><span>{{ item.capacity }} siswa</span>
    </div>
    <p class="mb-4 text-xs">{{ item.schedule }}</p>
    <div class="mt-auto border-t pt-4">
      <p class="mb-4 text-xl font-extrabold text-blue-950">
        {{ rupiah(item.price)
        }}<span class="text-xs font-normal text-slate-500"> / bulan</span>
      </p>
      <NuxtLink :to="'/kelas/' + item.slug" class="btn w-full"
        >Lihat Detail ↗</NuxtLink
      >
    </div>
  </article>
</template>

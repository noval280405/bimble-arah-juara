<script setup lang="ts">
import { rupiah } from "~/data/site";
import type { pricing } from "~/data/pricing";
defineProps<{ plan: (typeof pricing)[number] }>();
</script>
<template>
  <article
    :class="[
      'card relative flex flex-col',
      plan.name === 'Intensive' ? '!border-blue-500 ring-1 ring-blue-500' : '',
    ]"
  >
    <span
      v-if="plan.name === 'Intensive'"
      class="absolute -top-3 left-5 rounded-full bg-blue-600 px-3 py-1 text-[10px] font-bold text-white"
      >PILIHAN POPULER</span
    >
    <h3>{{ plan.name }}</h3>
    <p class="mt-5 text-xs">Mulai dari</p>
    <p class="mt-1 text-2xl font-extrabold text-blue-950">
      {{ rupiah(plan.price) }}
    </p>
    <p class="mt-1 text-xs">{{ plan.unit }}</p>
    <ul class="checklist mb-7 mt-6 text-sm">
      <li v-for="f in plan.features" :key="f">{{ f }}</li>
    </ul>
    <NuxtLink
      :to="{
        path: '/kontak',
        query: { mode: plan.name.includes('Private') ? 'Private' : 'Kelompok' },
      }"
      class="btn btn-light mt-auto"
      >Pilih Paket ↗</NuxtLink
    >
  </article>
</template>

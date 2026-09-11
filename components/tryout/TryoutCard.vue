<script setup lang="ts">
import type { Tryout } from "~/data/tryouts";
defineProps<{ tryout: Tryout }>();
</script>
<template>
  <article class="card">
    <div class="mb-6 flex justify-between">
      <span class="text-3xl text-blue-600">▤</span
      ><span class="badge !bg-emerald-50 !text-emerald-700">Gratis</span>
    </div>
    <h3>{{ tryout.title }}</h3>
    <p class="mb-6 mt-3 text-sm">
      Demo {{ tryout.questions.length }} soal • {{ tryout.duration }} menit
    </p>
    <NuxtLink :to="'/tryout/' + tryout.slug" class="btn btn-light w-full"
      >Mulai Tryout ↗</NuxtLink
    >
  </article>
</template>

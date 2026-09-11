<script setup lang="ts">
import type { Tutor } from "~/data/tutors";
defineProps<{ tutor: Tutor }>();
</script>
<template>
  <article
    class="overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
  >
    <NuxtLink :to="'/tutor/' + tutor.slug"
      ><div class="overflow-hidden bg-blue-50">
        <img
          :src="tutor.image"
          :alt="'Ilustrasi profil ' + tutor.name"
          loading="lazy"
          width="400"
          height="300"
          class="aspect-[4/3] w-full object-cover transition duration-500 hover:scale-105"
        />
      </div>
      <div class="p-5">
        <p class="mb-2 text-xs font-semibold text-blue-600">
          {{ tutor.title }}
        </p>
        <h3>{{ tutor.name }}</h3>
        <p class="mt-2 text-xs">{{ tutor.education }}</p>
        <p class="mt-3 text-xs font-semibold">
          {{ tutor.experience }} pengalaman
          <span class="float-right text-blue-600">↗</span>
        </p>
      </div></NuxtLink
    >
  </article>
</template>

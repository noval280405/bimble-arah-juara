<script setup lang="ts">
import type { Program } from "~/data/programs";
defineProps<{ program: Program }>();
</script>
<template>
  <article class="card flex h-full flex-col">
    <div class="mb-6 flex items-center justify-between">
      <span
        class="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl font-extrabold text-blue-600"
        >{{
          program.subject.includes("Matematika")
            ? "∑"
            : program.subject.includes("Inggris")
              ? "Aa"
              : "↗"
        }}</span
      ><span class="badge">{{ program.level }}</span>
    </div>
    <p
      class="mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-400"
    >
      {{ program.subject }}
    </p>
    <h3>{{ program.name }}</h3>
    <p class="mb-6 mt-3 text-sm">{{ program.description }}</p>
    <NuxtLink
      :to="'/program/' + program.slug"
      class="mt-auto border-t border-slate-100 pt-4 text-sm font-bold text-blue-600"
      >Lihat Program <span class="float-right">↗</span></NuxtLink
    >
  </article>
</template>

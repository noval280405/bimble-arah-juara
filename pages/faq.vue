<script setup lang="ts">
import { faq } from "~/data/faq";
usePageSeo("Pertanyaan yang Sering Diajukan");
</script>
<template>
  <UiPageHero
    title="Ada Pertanyaan? Kami Bantu."
    description="Informasi seputar program, metode belajar, dan pendaftaran Arah Juara."
  />
  <section class="section container-main !max-w-3xl">
    <details
      v-for="[q, a] in faq"
      :key="q"
      class="mb-4 rounded-xl border border-slate-200 p-6"
    >
      <summary>{{ q }}</summary>
      <p class="text-sm">{{ a }}</p>
    </details>
    <NuxtLink to="/kontak" class="btn mt-6">Konsultasi Lebih Lanjut ↗</NuxtLink>
  </section>
</template>

<script setup lang="ts">
import { tryouts } from "~/data/tryouts";
usePageSeo("Tryout Online Gratis");
</script>
<template>
  <UiPageHero
    title="Uji Kemampuan. Kenali Potensimu."
    description="Coba soal singkat, lihat hasilnya langsung, dan pelajari pembahasannya. Gratis tanpa akun."
  />
  <section class="section container-main">
    <div class="grid-cards">
      <TryoutCard v-for="t in tryouts" :key="t.id" :tryout="t" />
    </div>
    <p class="mt-6 text-sm">
      Tryout demo untuk latihan mandiri, bukan penilaian akademik resmi. Jawaban
      tidak disimpan setelah halaman ditutup.
    </p>
  </section>
</template>

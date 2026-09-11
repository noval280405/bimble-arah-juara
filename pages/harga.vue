<script setup lang="ts">
import { pricing } from "~/data/pricing";
usePageSeo("Harga Bimbel & Kelas Private");
</script>
<template>
  <UiPageHero
    title="Investasi Belajar, untuk Masa Depan."
    description="Pilih paket yang sesuai kebutuhanmu. Biaya transparan, langkah belajar lebih terencana."
  />
  <section class="section container-main">
    <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <PricingCard v-for="p in pricing" :key="p.name" :plan="p" />
    </div>
    <p class="mt-6 text-xs">
      Harga mulai merupakan data demo. Harga kelas spesifik dapat berbeda; lihat
      detail kelas atau konsultasi admin.
    </p>
    <div class="mt-16"><PricingCalculator /></div>
  </section>
</template>

<script setup lang="ts">
import { pricing } from "~/data/pricing";
</script>
<template>
  <section class="section bg-slate-50">
    <div class="container-main">
      <UiSectionTitle
        eyebrow="PILIH SESUAI KEBUTUHAN"
        title="Langkah besar, pilihan fleksibel"
        to="/harga"
      />
      <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <PricingCard v-for="p in pricing" :key="p.name" :plan="p" />
      </div>
    </div>
  </section>
</template>

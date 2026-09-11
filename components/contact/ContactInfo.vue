<script setup lang="ts">
import { siteConfig, whatsappUrl } from "~/data/site";
</script>
<template>
  <aside class="rounded-2xl bg-blue-950 p-8 text-blue-100">
    <p class="eyebrow !text-yellow-300">MARI TERHUBUNG</p>
    <h2 class="!text-2xl text-white">
      Satu langkah menuju<br />belajar lebih terarah.
    </h2>
    <p class="mb-8 mt-5 text-sm">
      Ceritakan kebutuhanmu. Kami bantu menemukan program dan jadwal yang tepat.
    </p>
    <p class="text-xs uppercase tracking-widest">Lokasi</p>
    <p class="mb-6 mt-2 text-white">{{ siteConfig.address }}</p>
    <p class="text-xs uppercase tracking-widest">Email</p>
    <a
      :href="'mailto:' + siteConfig.email"
      class="mb-6 mt-2 block break-all text-white"
      >{{ siteConfig.email }}</a
    >
    <p class="text-xs uppercase tracking-widest">WhatsApp</p>
    <a
      :href="whatsappUrl()"
      class="mt-2 block text-white"
      target="_blank"
      rel="noopener noreferrer"
      >+{{ siteConfig.whatsapp }} ↗</a
    >
    <p class="mt-10 text-xs">
      Informasi kontak masih placeholder untuk website demo.
    </p>
  </aside>
</template>

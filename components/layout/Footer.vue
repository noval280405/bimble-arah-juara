<script setup lang="ts">
import { nav, levels, siteConfig, whatsappUrl } from "~/data/site";
</script>
<template>
  <footer class="bg-blue-950 pt-16 text-blue-100">
    <div class="container-main grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
      <div>
        <NuxtLink
          to="/"
          class="flex items-center gap-3 text-xl font-extrabold text-white"
          ><img src="/favicon.svg" width="40" height="40" alt="" />ARAH
          JUARA</NuxtLink
        >
        <p class="mt-5 text-sm">Belajar Terarah,<br />Prestasi Meningkat.</p>
        <p class="mt-4 text-xs text-blue-200">
          Teman belajar di setiap langkahmu.
        </p>
      </div>
      <div>
        <h3 class="mb-5 text-sm text-white">Jelajahi</h3>
        <div class="grid grid-cols-2 gap-3">
          <NuxtLink
            v-for="[name, path] in nav.slice(1)"
            :key="path"
            :to="path!"
            class="text-sm hover:text-white"
            >{{ name }}</NuxtLink
          >
        </div>
      </div>
      <div>
        <h3 class="mb-5 text-sm text-white">Program Belajar</h3>
        <NuxtLink
          v-for="level in levels"
          :key="level"
          :to="'/program/' + level.toLowerCase()"
          class="mb-3 block text-sm"
          >{{ level }}</NuxtLink
        >
      </div>
      <div>
        <h3 class="mb-5 text-sm text-white">Mari Terhubung</h3>
        <p class="text-sm">{{ siteConfig.address }}</p>
        <a :href="'mailto:' + siteConfig.email" class="mt-3 block text-sm">{{
          siteConfig.email
        }}</a>
        <div class="mt-5 flex flex-wrap gap-4 text-sm">
          <a
            :href="'https://instagram.com/' + siteConfig.instagram.slice(1)"
            target="_blank"
            rel="noopener noreferrer"
            >Instagram ↗</a
          ><a
            :href="'https://tiktok.com/' + siteConfig.tiktok"
            target="_blank"
            rel="noopener noreferrer"
            >TikTok ↗</a
          ><a :href="whatsappUrl()" target="_blank" rel="noopener noreferrer"
            >WhatsApp ↗</a
          >
        </div>
      </div>
    </div>
    <div
      class="container-main border-t border-white/10 py-6 text-xs text-blue-200"
    >
      © 2026 Bimbel Arah Juara. Seluruh hak dilindungi.
      <span class="mt-2 block sm:float-right sm:mt-0"
        >Website demo • Data ilustratif</span
      >
    </div>
  </footer>
</template>

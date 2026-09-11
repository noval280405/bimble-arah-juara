<script setup lang="ts">
import { nav } from "~/data/site";
const open = ref(false);
const route = useRoute();
watch(
  () => route.fullPath,
  () => (open.value = false),
);
</script>
<template>
  <header
    class="site-header sticky top-0 z-40 border-b border-slate-100 backdrop-blur-xl"
  >
    <nav
      class="container-main flex h-20 items-center justify-between gap-4"
      aria-label="Navigasi utama"
    >
      <NuxtLink to="/" class="flex shrink-0 items-center gap-2.5"
        ><img src="/favicon.svg" width="38" height="38" alt="" /><span
          class="text-lg font-extrabold leading-tight text-blue-950"
          >ARAH JUARA<span
            class="block text-[9px] font-semibold tracking-[.24em] text-slate-500"
            >BIMBINGAN BELAJAR</span
          ></span
        ></NuxtLink
      >
      <div class="hidden items-center gap-4 xl:flex">
        <NuxtLink
          v-for="[name, path] in nav"
          :key="path"
          :to="path!"
          :class="[
            'desktop-nav-link text-xs font-semibold transition hover:text-blue-600',
            (path === '/' ? route.path === '/' : route.path.startsWith(path!))
              ? 'nav-selected text-blue-600'
              : 'text-slate-600',
          ]"
          >{{ name }}</NuxtLink
        >
      </div>
      <NuxtLink to="/kontak" class="btn hidden text-xs sm:inline-flex"
        >Daftar Sekarang ↗</NuxtLink
      ><button
        class="rounded-lg border p-2.5 xl:hidden"
        aria-label="Buka menu navigasi"
        :aria-expanded="open"
        aria-controls="mobile-menu"
        @click="open = !open"
      >
        {{ open ? "✕" : "☰" }}
      </button>
    </nav>
    <div
      v-if="open"
      id="mobile-menu"
      class="container-main max-h-[75vh] overflow-y-auto pb-5 xl:hidden"
    >
      <NuxtLink
        v-for="[name, path] in nav"
        :key="path"
        :to="path!"
        class="block rounded-lg p-3 text-sm font-semibold"
        active-class="bg-blue-50 text-blue-600"
        >{{ name }}</NuxtLink
      ><NuxtLink to="/kontak" class="btn mt-3">Daftar Sekarang</NuxtLink>
    </div>
  </header>
</template>

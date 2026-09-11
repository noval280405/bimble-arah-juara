<script setup lang="ts">
import { whatsappUrl } from "~/data/site";
</script>
<template>
  <a
    :href="whatsappUrl()"
    target="_blank"
    rel="noopener noreferrer"
    class="fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg transition hover:bg-emerald-700"
    aria-label="Konsultasi melalui WhatsApp"
    ><svg
      width="27"
      height="27"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.7"
      aria-hidden="true"
    >
      <path d="M21 11.5a9 9 0 0 1-13.4 7.8L3 21l1.7-4.6A9 9 0 1 1 21 11.5Z" />
      <path d="M8 7c-2 4 3 9 7 8l1-2-3-1-1 1-2-2 1-1-1-3Z" /></svg
  ></a>
</template>

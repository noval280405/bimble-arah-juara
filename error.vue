<script setup lang="ts">
defineProps<{ error: { statusCode: number; statusMessage?: string } }>();
</script>
<template>
  <main class="container-main py-24 text-center">
    <p class="eyebrow">{{ error.statusCode }}</p>
    <h1>{{ error.statusMessage || "Terjadi kesalahan" }}</h1>
    <p class="my-6">
      Silakan kembali dan temukan program belajar yang kamu cari.
    </p>
    <a href="/" class="btn">Kembali ke Beranda</a>
  </main>
</template>

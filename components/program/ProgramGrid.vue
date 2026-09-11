<script setup lang="ts">
import type { Program } from "~/data/programs";
defineProps<{ programs: Program[] }>();
</script>
<template>
  <div v-if="programs.length" class="grid-cards">
    <ProgramCard v-for="entry in programs" :key="entry.id" :program="entry" />
  </div>
  <p v-else class="empty">Belum ada program yang sesuai dengan pilihan Anda.</p>
</template>

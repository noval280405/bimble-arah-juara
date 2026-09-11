<script setup lang="ts">
import type { LearningClass } from "~/data/classes";
defineProps<{ items: LearningClass[] }>();
</script>
<template>
  <div v-if="items.length" class="grid-cards">
    <ClassCard v-for="entry in items" :key="entry.id" :item="entry" />
  </div>
  <p v-else class="empty">Belum ada kelas yang sesuai dengan pilihan Anda.</p>
</template>

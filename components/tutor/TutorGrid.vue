<script setup lang="ts">
import type { Tutor } from "~/data/tutors";
defineProps<{ tutors: Tutor[] }>();
</script>
<template>
  <div v-if="tutors.length" class="grid-cards">
    <TutorCard v-for="entry in tutors" :key="entry.id" :tutor="entry" />
  </div>
  <p v-else class="empty">Belum ada tutor yang sesuai dengan pilihan Anda.</p>
</template>

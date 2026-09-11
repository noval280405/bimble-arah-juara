<script setup lang="ts">
import { schedules } from "~/data/schedules";
</script>
<template>
  <section class="section container-main">
    <UiSectionTitle
      eyebrow="WAKTU UNTUK BERKEMBANG"
      title="Temukan jadwal belajarmu"
      to="/jadwal"
    /><ScheduleTable :items="[schedules[0]!, schedules[2]!, schedules[4]!]" />
  </section>
</template>

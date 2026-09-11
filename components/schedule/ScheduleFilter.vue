<script setup lang="ts">
import { levels } from "~/data/site";
import { days } from "~/data/schedules";
import { tutors } from "~/data/tutors";
const model = defineModel<{
  level: string;
  day: string;
  tutor: string;
  mode: string;
}>({ required: true });
</script>
<template>
  <div class="filters lg:grid-cols-4">
    <UiFilterSelect
      v-model="model.level"
      label="Jenjang"
      :options="levels"
    /><UiFilterSelect
      v-model="model.day"
      label="Hari"
      :options="days"
    /><UiFilterSelect
      v-model="model.tutor"
      label="Tutor"
      :options="tutors.map((t) => t.name)"
    /><UiFilterSelect
      v-model="model.mode"
      label="Mode"
      :options="['Online', 'Offline']"
    />
  </div>
</template>

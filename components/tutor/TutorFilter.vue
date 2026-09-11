<script setup lang="ts">
import { tutors } from "~/data/tutors";
const model = defineModel<{ level: string; subject: string }>({
  required: true,
});
const subjects = [...new Set(tutors.flatMap((t) => t.subjects))];
</script>
<template>
  <div class="filters">
    <UiFilterSelect
      v-model="model.level"
      label="Jenjang"
      :options="['SD', 'SMP', 'SMA/SMK', 'Mahasiswa', 'Umum']"
    /><UiFilterSelect
      v-model="model.subject"
      label="Mata Pelajaran"
      :options="subjects"
    />
  </div>
</template>

<script setup lang="ts">
import { levels } from "~/data/site";
import { classes } from "~/data/classes";
import { days } from "~/data/schedules";
const model = defineModel<{
  level: string;
  subject: string;
  mode: string;
  day: string;
  price: string;
}>({ required: true });
const subjects = [...new Set(classes.map((c) => c.subject))];
</script>
<template>
  <div class="filters lg:grid-cols-5">
    <UiFilterSelect
      v-model="model.level"
      label="Jenjang"
      :options="levels"
    /><UiFilterSelect
      v-model="model.subject"
      label="Mata Pelajaran"
      :options="subjects"
    /><UiFilterSelect
      v-model="model.mode"
      label="Mode Belajar"
      :options="['Online', 'Offline', 'Private', 'Kelompok']"
    /><UiFilterSelect
      v-model="model.day"
      label="Hari"
      :options="days"
    /><UiFilterSelect
      v-model="model.price"
      label="Harga"
      :options="['≤ Rp400.000', 'Rp400.001–500.000', '> Rp500.000']"
    />
  </div>
</template>

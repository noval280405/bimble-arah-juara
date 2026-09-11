<script setup lang="ts">
import type { Schedule } from "~/data/schedules";
import { classes } from "~/data/classes";
import { tutors } from "~/data/tutors";
defineProps<{ items: Schedule[] }>();
const getClass = (id: number) => classes.find((c) => c.id === id)!;
const tutorName = (id: number) =>
  tutors.find((t) => t.id === getClass(id).tutorId)?.name;
</script>
<template>
  <div
    v-if="items.length"
    class="overflow-hidden rounded-2xl border border-slate-200"
  >
    <div
      class="hidden grid-cols-[.7fr_2fr_1fr_1fr_.7fr] gap-4 bg-slate-50 px-6 py-4 text-xs font-bold uppercase tracking-wide md:grid"
    >
      <span>Hari</span><span>Kelas</span><span>Waktu WIB</span><span>Tutor</span
      ><span>Mode</span>
    </div>
    <div
      v-for="s in items"
      :key="s.id"
      class="grid gap-3 border-t border-slate-100 bg-white px-6 py-5 text-sm md:grid-cols-[.7fr_2fr_1fr_1fr_.7fr] md:items-center"
    >
      <span class="font-bold text-blue-600">{{ s.day }}</span>
      <div>
        <NuxtLink
          :to="'/kelas/' + getClass(s.classId).slug"
          class="font-bold text-blue-950"
          >{{ getClass(s.classId).name }} ↗</NuxtLink
        >
        <p v-if="s.room" class="mt-1 text-xs">{{ s.room }}</p>
      </div>
      <span
        >{{ s.startTime }}–{{ s.endTime
        }}<span class="md:hidden"> WIB</span></span
      ><span>{{ tutorName(s.classId) }}</span
      ><span class="badge w-fit">{{ s.mode }}</span>
    </div>
  </div>
  <p v-else class="empty">Belum ada kelas yang sesuai dengan pilihan Anda.</p>
</template>

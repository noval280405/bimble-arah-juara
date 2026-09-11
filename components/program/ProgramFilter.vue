<script setup lang="ts">
import { levels } from "~/data/site";
defineProps<{ level: string; search: string }>();
defineEmits<{
  "update:level": [value: string];
  "update:search": [value: string];
}>();
</script>
<template>
  <div class="mb-8 space-y-5">
    <label class="block max-w-xl"
      >Cari mata pelajaran<input
        :value="search"
        type="search"
        placeholder="Cari mata pelajaran..."
        class="mt-2"
        @input="
          $emit('update:search', ($event.target as HTMLInputElement).value)
        "
    /></label>
    <div class="flex flex-wrap gap-2" aria-label="Filter jenjang">
      <button
        v-for="l in ['', ...levels]"
        :key="l"
        :aria-pressed="level === l"
        :class="[
          'rounded-lg px-5 py-2.5 text-sm font-semibold transition',
          level === l
            ? 'bg-blue-600 text-white'
            : 'bg-slate-100 hover:bg-blue-50',
        ]"
        @click="$emit('update:level', l)"
      >
        {{ l || "Semua" }}
      </button>
    </div>
  </div>
</template>

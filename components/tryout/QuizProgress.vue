<script setup lang="ts">
defineProps<{ current: number; total: number; answered: number }>();
</script>
<template>
  <div class="mb-6">
    <div class="mb-3 flex justify-between text-sm">
      <span>Soal {{ current }} / {{ total }}</span
      ><span>{{ answered }} terjawab</span>
    </div>
    <progress
      :value="answered"
      :max="total"
      class="h-2 w-full accent-blue-600"
      aria-label="Jumlah soal terjawab"
    />
  </div>
</template>

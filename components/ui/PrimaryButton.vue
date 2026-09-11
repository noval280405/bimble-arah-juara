<script setup lang="ts">
defineProps<{ to: string }>();
</script>
<template>
  <NuxtLink :to="to" class="btn"><slot /></NuxtLink>
</template>

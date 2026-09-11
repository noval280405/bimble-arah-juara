<script setup lang="ts">
defineProps<{
  label: string;
  modelValue: string;
  options: readonly string[];
}>();
defineEmits<{ "update:modelValue": [value: string] }>();
</script>
<template>
  <label class="block"
    >{{ label
    }}<select
      class="mt-2"
      :value="modelValue"
      @change="
        $emit('update:modelValue', ($event.target as HTMLSelectElement).value)
      "
    >
      <option value="">Semua {{ label }}</option>
      <option v-for="option in options" :key="option">{{ option }}</option>
    </select></label
  >
</template>

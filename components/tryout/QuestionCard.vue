<script setup lang="ts">
import type { TryoutQuestion } from "~/data/tryouts";
defineProps<{ question: TryoutQuestion; modelValue: number | null }>();
defineEmits<{ "update:modelValue": [value: number] }>();
</script>
<template>
  <fieldset>
    <legend class="mb-6 text-xl font-bold text-blue-950">
      {{ question.question }}
    </legend>
    <label
      v-for="(option, i) in question.options"
      :key="i"
      :class="[
        'mb-3 flex cursor-pointer items-center gap-4 rounded-xl border p-4',
        modelValue === i ? 'border-blue-600 bg-blue-50' : 'border-slate-200',
      ]"
      ><input
        type="radio"
        :name="'question-' + question.id"
        :value="i"
        :checked="modelValue === i"
        class="h-4 w-4 accent-blue-600"
        @change="$emit('update:modelValue', i)"
      /><span>{{ option }}</span></label
    >
  </fieldset>
</template>

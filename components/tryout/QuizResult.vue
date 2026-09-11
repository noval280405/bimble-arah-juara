<script setup lang="ts">
import type { Tryout } from "~/data/tryouts";
const props = defineProps<{ tryout: Tryout; answers: (number | null)[] }>();
defineEmits<{ retry: [] }>();
const show = ref(false);
const correct = computed(
  () =>
    props.tryout.questions.filter(
      (q, i) => props.answers[i] === q.correctAnswer,
    ).length,
);
const score = computed(() =>
  Math.round((correct.value / props.tryout.questions.length) * 100),
);
</script>
<template>
  <div>
    <div class="rounded-2xl bg-blue-50 p-8 text-center">
      <p class="eyebrow">HASIL TRYOUT</p>
      <h2>
        {{
          score >= 80
            ? "Bagus! Terus tingkatkan."
            : "Terus berlatih, kamu bisa!"
        }}
      </h2>
      <p class="my-6 text-6xl font-extrabold text-blue-600">{{ score }}%</p>
      <p>{{ correct }} / {{ tryout.questions.length }} benar</p>
      <div class="mt-6 flex flex-wrap justify-center gap-6 text-sm">
        <span>Benar: {{ correct }}</span
        ><span>Salah / kosong: {{ tryout.questions.length - correct }}</span>
      </div>
    </div>
    <div class="my-6 flex flex-wrap gap-3">
      <button class="btn" @click="show = !show">
        {{ show ? "Tutup" : "Lihat" }} Pembahasan</button
      ><button class="btn btn-light" @click="$emit('retry')">Coba Lagi</button
      ><NuxtLink to="/kelas" class="btn btn-light"
        >Cari Kelas yang Cocok</NuxtLink
      >
    </div>
    <div v-if="show">
      <article
        v-for="(q, i) in tryout.questions"
        :key="q.id"
        class="mb-4 rounded-xl border p-5"
      >
        <h3>{{ i + 1 }}. {{ q.question }}</h3>
        <p
          :class="[
            'mt-3 text-sm',
            answers[i] === q.correctAnswer
              ? 'text-emerald-700'
              : 'text-red-700',
          ]"
        >
          Jawabanmu:
          {{
            answers[i] !== null && answers[i] !== undefined
              ? q.options[answers[i]!]
              : "Tidak dijawab"
          }}
        </p>
        <p class="mt-2 text-sm font-bold">
          Jawaban benar: {{ q.options[q.correctAnswer] }}
        </p>
        <p class="mt-2 text-sm">{{ q.explanation }}</p>
      </article>
    </div>
  </div>
</template>

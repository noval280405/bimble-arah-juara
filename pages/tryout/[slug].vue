<script setup lang="ts">
import { tryouts } from "~/data/tryouts";
const route = useRoute();
const quiz = tryouts.find((t) => t.slug === route.params.slug);
if (!quiz)
  throw createError({
    statusCode: 404,
    statusMessage: "Tryout tidak ditemukan",
  });
usePageSeo(quiz.title);
const started = ref(false),
  finished = ref(false),
  index = ref(0),
  answers = ref<(number | null)[]>(quiz.questions.map(() => null)),
  remaining = ref(quiz.duration * 60);
let timer: ReturnType<typeof setInterval> | undefined;
let deadline = 0;
const current = computed(() => quiz.questions[index.value]!);
const answered = computed(() => answers.value.filter((a) => a !== null).length);
const clock = computed(
  () =>
    `${Math.floor(remaining.value / 60)}:${String(remaining.value % 60).padStart(2, "0")}`,
);
function finish() {
  finished.value = true;
  clearInterval(timer);
}
function start() {
  clearInterval(timer);
  answers.value = quiz!.questions.map(() => null);
  index.value = 0;
  remaining.value = quiz!.duration * 60;
  finished.value = false;
  started.value = true;
  deadline = Date.now() + remaining.value * 1000;
  timer = setInterval(() => {
    remaining.value = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
    if (!remaining.value) finish();
  }, 1000);
}
onBeforeUnmount(() => clearInterval(timer));
</script>
<template>
  <UiPageHero
    :title="quiz.title"
    description="Latihan kecil hari ini, langkah besar untuk esok."
  />
  <section class="section container-main !max-w-3xl">
    <div v-if="!started" class="card text-center">
      <h2 class="!text-2xl">Siap mencoba?</h2>
      <p class="my-5">
        {{ quiz.questions.length }} soal pilihan ganda •
        {{ quiz.duration }} menit. Timer dimulai saat tombol ditekan. Anda dapat
        berpindah soal; soal kosong dihitung salah. Hasil otomatis tampil ketika
        waktu habis.
      </p>
      <button class="btn" @click="start">Mulai Sekarang →</button>
    </div>
    <TryoutQuizResult
      v-else-if="finished"
      :tryout="quiz"
      :answers="answers"
      @retry="start"
    />
    <div v-else class="card !transform-none">
      <div class="mb-5 flex justify-between">
        <span class="badge">{{ quiz.level }}</span
        ><span class="text-sm font-bold text-blue-950" role="timer"
          >Sisa waktu {{ clock }}</span
        >
      </div>
      <TryoutQuizProgress
        :current="index + 1"
        :total="quiz.questions.length"
        :answered="answered"
      /><TryoutQuestionCard
        :question="current"
        :model-value="answers[index] ?? null"
        @update:model-value="answers[index] = $event"
      />
      <div class="mt-6 flex flex-wrap justify-between gap-3">
        <button
          class="btn btn-light disabled:opacity-40"
          :disabled="index === 0"
          @click="index--"
        >
          Sebelumnya</button
        ><button
          v-if="index < quiz.questions.length - 1"
          class="btn"
          @click="index++"
        >
          Selanjutnya →</button
        ><button v-else class="btn" @click="finish">
          Selesai & Lihat Nilai
        </button>
      </div>
    </div>
  </section>
</template>

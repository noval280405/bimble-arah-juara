<script setup lang="ts">
import { tutors } from "~/data/tutors";
</script>
<template>
  <section class="section bg-slate-50">
    <div class="container-main">
      <UiSectionTitle
        eyebrow="TEMAN BELAJAR TERBAIKMU"
        title="Kenali tutor pilihan kami"
        description="Pendamping yang sabar, suportif, dan siap membantu kamu memahami materi."
        to="/tutor"
      />
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <TutorCard v-for="t in tutors" :key="t.id" :tutor="t" />
      </div>
    </div>
  </section>
</template>

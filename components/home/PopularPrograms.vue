<script setup lang="ts">
import { programs } from "~/data/programs";
const featured = [
  programs.find((p) => p.slug === "smp-matematika")!,
  programs.find((p) => p.slug === "sma-bahasa-inggris")!,
  programs.find((p) => p.slug === "mahasiswa-microsoft-excel")!,
];
</script>
<template>
  <section class="section bg-slate-50">
    <div class="container-main">
      <UiSectionTitle
        eyebrow="TEMUKAN MINATMU"
        title="Program pilihan untukmu"
        description="Mulai dari pelajaran sekolah hingga keterampilan yang relevan."
        to="/program"
      /><ProgramGrid :programs="featured" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { tryouts } from "~/data/tryouts";
</script>
<template>
  <section class="section container-main">
    <UiSectionTitle
      eyebrow="TANTANG DIRIMU"
      title="Sejauh mana kemampuanmu?"
      description="Coba tryout gratis dan kenali materi yang bisa kamu tingkatkan."
      to="/tryout"
    />
    <div class="grid-cards">
      <TryoutCard v-for="t in tryouts" :key="t.id" :tryout="t" />
    </div>
  </section>
</template>

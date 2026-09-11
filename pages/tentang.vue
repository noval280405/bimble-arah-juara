<script setup lang="ts">
usePageSeo("Tentang Arah Juara");
</script>
<template>
  <UiPageHero
    title="Belajar Bukan Sekadar Menghafal."
    description="Kami percaya setiap orang dapat berkembang ketika menemukan cara belajar yang tepat."
  />
  <section class="section container-main">
    <div class="grid items-center gap-10 md:grid-cols-2">
      <img
        src="/images/hero/learning.svg"
        alt="Ilustrasi suasana belajar bersama Arah Juara"
        width="600"
        height="520"
        loading="lazy"
      />
      <div>
        <p class="eyebrow">TENTANG ARAH JUARA</p>
        <h2>Teman di setiap<br />langkah belajarmu.</h2>
        <p class="mt-5">
          Bimbel Arah Juara hadir untuk membantu siswa memahami materi dengan
          metode belajar yang lebih terarah, nyaman dan sesuai kebutuhan.
        </p>
        <p class="mt-4">
          Kami mendampingi siswa SD, SMP, SMA, SMK, mahasiswa, dan masyarakat
          umum melalui kelas online, offline, private, dan kelompok.
        </p>
      </div>
    </div>
    <div class="mt-12 grid gap-6 md:grid-cols-2">
      <div class="card">
        <h3>Visi</h3>
        <p class="mt-4">
          Menjadi teman belajar yang membantu setiap peserta mengembangkan
          potensi dan melangkah dengan percaya diri.
        </p>
      </div>
      <div class="card">
        <h3>Misi</h3>
        <ul class="checklist mt-4 text-sm">
          <li>Menyediakan materi sesuai jenjang dan kebutuhan.</li>
          <li>Membangun lingkungan belajar yang nyaman.</li>
          <li>Mendampingi perkembangan dengan evaluasi berkala.</li>
        </ul>
      </div>
    </div>
    <div class="mt-16">
      <UiSectionTitle title="Metode belajar yang terarah" />
      <div class="grid gap-5 md:grid-cols-4">
        <div
          v-for="(s, i) in [
            'Kenali kemampuan awal',
            'Pahami konsep bersama tutor',
            'Praktik dan latihan bertahap',
            'Evaluasi dan kembangkan',
          ]"
          :key="s"
          class="card"
        >
          <p class="mb-5 text-3xl font-extrabold text-blue-200">0{{ i + 1 }}</p>
          <h3>{{ s }}</h3>
        </div>
      </div>
    </div>
  </section>
  <HomeLevelSection /><HomeTutorPreview /><HomeCTASection />
</template>

<template>
  <section class="section container-main">
    <div class="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
      <div>
        <p class="eyebrow">KENAPA ARAH JUARA?</p>
        <h2>
          Belajar nyaman.<br />Berkembang<br /><span class="text-blue-600"
            >lebih maksimal.</span
          >
        </h2>
        <p class="mt-5 text-sm">
          Setiap orang punya cara belajar yang berbeda. Kami hadir untuk
          membantu menemukan langkah yang tepat.
        </p>
        <NuxtLink
          to="/tentang"
          class="mt-6 inline-block text-sm font-bold text-blue-600"
          >Kenali Arah Juara ↗</NuxtLink
        >
      </div>
      <div class="grid gap-7 sm:grid-cols-2">
        <div
          v-for="[icon, title, desc] in [
            [
              '✦',
              'Tutor Berpengalaman',
              'Pendamping belajar sesuai bidangnya.',
            ],
            ['▤', 'Kelas Terarah', 'Materi disusun berdasarkan jenjang.'],
            ['♧', 'Kelas Kecil', 'Ruang bertanya dan belajar lebih fokus.'],
            ['◷', 'Jadwal Fleksibel', 'Berbagai pilihan waktu belajar.'],
            ['▣', 'Online & Offline', 'Pilih metode yang nyaman untukmu.'],
            ['↗', 'Program Lengkap', 'Dari SD sampai mahasiswa dan umum.'],
          ]"
          :key="title"
        >
          <span
            class="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-xl text-blue-600"
            >{{ icon }}</span
          >
          <h3 class="!text-base">{{ title }}</h3>
          <p class="mt-2 text-sm">{{ desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

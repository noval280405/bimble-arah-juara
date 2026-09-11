<template>
  <section class="section container-main">
    <UiSectionTitle
      eyebrow="UNTUK SETIAP TAHAP BELAJAR"
      title="Kamu di jenjang mana?"
      description="Dari fondasi pertama hingga keterampilan masa depan, ada program untukmu."
    />
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
      <NuxtLink
        v-for="[name, slug, icon, desc, range] in [
          ['SD', 'sd', '✎', 'Bangun fondasi belajar yang kuat.', 'Kelas 1–6'],
          [
            'SMP',
            'smp',
            '∑',
            'Pahami konsep, tambah percaya diri.',
            'Kelas 7–9',
          ],
          [
            'SMA / SMK',
            'sma',
            '⚗',
            'Siapkan langkah menuju masa depan.',
            'Kelas 10–12',
          ],
          [
            'Mahasiswa',
            'mahasiswa',
            '⌘',
            'Kuasai materi dan skill perkuliahan.',
            'Kuliah & pengembangan diri',
          ],
          [
            'Umum',
            'umum',
            '↗',
            'Skill baru, peluang lebih luas.',
            'Untuk semua pembelajar',
          ],
        ]"
        :key="slug"
        :to="'/program/' + slug"
        class="card !p-5"
        ><span
          class="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600"
          >{{ icon }}</span
        >
        <h3>{{ name }}</h3>
        <p class="mb-4 mt-2 text-xs">{{ desc }}</p>
        <p class="text-[10px] font-semibold text-slate-400">{{ range }}</p>
        <p class="mt-5 text-xs font-bold text-blue-600">
          Lihat Program ↗
        </p></NuxtLink
      >
    </div>
    <NuxtLink
      to="/program/smk"
      class="mt-5 inline-block text-xs font-semibold text-blue-600"
      >Cari program khusus SMK? Lihat di sini ↗</NuxtLink
    >
  </section>
</template>

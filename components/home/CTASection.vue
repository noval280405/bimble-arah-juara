<template>
  <section class="container-main py-16">
    <div
      class="relative overflow-hidden rounded-3xl bg-blue-600 px-6 py-12 text-center md:p-16"
    >
      <div
        class="pointer-events-none absolute -right-12 -top-20 h-64 w-64 rounded-full border-[40px] border-white/10"
      />
      <p class="eyebrow !text-blue-100">LANGKAH PERTAMAMU DIMULAI DI SINI</p>
      <h2 class="relative text-white">Mulai Perjalanan Belajarmu.</h2>
      <p class="relative mx-auto mb-7 mt-4 max-w-xl text-sm text-blue-100">
        Temukan program yang tepat, belajar dengan lebih terarah,<br
          class="hidden sm:block"
        />
        dan melangkah lebih dekat menuju tujuanmu.
      </p>
      <NuxtLink
        to="/kontak"
        class="btn relative !bg-yellow-400 !text-blue-950 hover:!bg-yellow-300"
        >Daftar Sekarang ↗</NuxtLink
      >
    </div>
  </section>
</template>

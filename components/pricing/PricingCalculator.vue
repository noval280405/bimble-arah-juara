<script setup lang="ts">
import { levels, rupiah, whatsappUrl } from "~/data/site";
import { estimateRate } from "~/data/pricing";
const level = ref("SMA"),
  mode = ref("Online"),
  type = ref("Private"),
  meetings = ref(8);
const count = computed(() =>
  Math.min(32, Math.max(1, Math.floor(Number(meetings.value) || 1))),
);
const rate = computed(() => estimateRate(level.value, mode.value, type.value));
const total = computed(() => rate.value * count.value);
</script>
<template>
  <div
    class="grid overflow-hidden rounded-3xl border border-slate-200 lg:grid-cols-[1.3fr_1fr]"
  >
    <div class="p-6 md:p-10">
      <p class="eyebrow">SESUAIKAN KEBUTUHANMU</p>
      <h2 class="!text-2xl">Kalkulator Harga</h2>
      <div class="mt-7 grid gap-5 sm:grid-cols-2">
        <label
          >Jenjang<select v-model="level" class="mt-2">
            <option v-for="l in levels" :key="l">{{ l }}</option>
          </select></label
        ><label
          >Mode<select v-model="mode" class="mt-2">
            <option>Online</option>
            <option>Offline</option>
          </select></label
        ><label
          >Jenis Kelas<select v-model="type" class="mt-2">
            <option>Regular</option>
            <option>Intensive</option>
            <option>Private</option>
            <option>Group Private</option>
          </select></label
        ><label
          >Jumlah Pertemuan<input
            v-model="meetings"
            class="mt-2"
            type="number"
            min="1"
            max="32"
            @blur="meetings = count"
        /></label>
      </div>
    </div>
    <div class="flex flex-col justify-center bg-blue-950 p-8 text-blue-100">
      <p class="text-sm">Estimasi biaya • {{ count }} pertemuan</p>
      <p class="my-4 text-4xl font-extrabold text-white" aria-live="polite">
        {{ rupiah(total) }}
      </p>
      <p class="text-sm">
        {{ rupiah(rate) }} / pertemuan{{
          type === "Group Private" ? " / siswa" : ""
        }}
      </p>
      <a
        :href="
          whatsappUrl(
            `Halo, saya ingin konsultasi ${type} ${level}, mode ${mode}, ${count} pertemuan. Estimasi ${rupiah(total)}.`,
          )
        "
        target="_blank"
        rel="noopener noreferrer"
        class="btn mt-7 !bg-yellow-400 !text-blue-950"
        >Konsultasikan Estimasi ↗</a
      >
      <p class="mt-5 text-xs leading-relaxed">
        Harga merupakan estimasi dan dapat berbeda berdasarkan program, tutor,
        lokasi dan kebutuhan siswa. Tarif menggunakan data demo.
      </p>
    </div>
  </div>
</template>

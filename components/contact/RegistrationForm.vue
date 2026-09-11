<script setup lang="ts">
import { levels, whatsappUrl } from "~/data/site";
import { subjects } from "~/data/programs";
const route = useRoute();
const form = reactive({
  name: "",
  phone: "",
  level: levels.includes(route.query.level as (typeof levels)[number])
    ? String(route.query.level)
    : "SD",
  program: String(route.query.program || ""),
  mode: ["Online", "Offline", "Private", "Kelompok"].includes(
    String(route.query.mode),
  )
    ? String(route.query.mode)
    : "Belum Tahu",
  notes: "",
});
const options = computed(() => subjects[form.level as (typeof levels)[number]]);
watch(
  () => form.level,
  () => (form.program = ""),
);
const url = ref("");
const error = ref("");
function submit() {
  error.value = "";
  if (
    !form.name.trim() ||
    !/^\+?[\d\s()-]{9,18}$/.test(form.phone) ||
    form.phone.replace(/\D/g, "").length < 9
  ) {
    error.value = "Isi nama dan nomor WhatsApp yang valid (9–15 digit).";
    return;
  }
  if (form.phone.replace(/\D/g, "").length > 15) {
    error.value = "Nomor WhatsApp maksimal 15 digit.";
    return;
  }
  url.value = whatsappUrl(`Halo Bimbel Arah Juara,

Saya ingin berkonsultasi mengenai program belajar.

Nama: ${form.name.trim()}
Nomor WhatsApp: ${form.phone}
Jenjang: ${form.level}
Program: ${form.program || "Butuh rekomendasi"}
Mode: ${form.mode}
Catatan: ${form.notes.trim() || "-"}

Mohon informasi jadwal dan biayanya.`);
  window.open(url.value, "_blank", "noopener,noreferrer");
}
</script>
<template>
  <form class="card !transform-none" @submit.prevent="submit">
    <h2 class="mb-2 !text-2xl">Konsultasi & Pendaftaran</h2>
    <p class="mb-7 text-sm">
      Isi formulir berikut untuk menyiapkan pesan WhatsApp.
    </p>
    <div class="grid gap-5 sm:grid-cols-2">
      <label
        >Nama<input
          v-model="form.name"
          required
          maxlength="100"
          autocomplete="name"
          class="mt-2"
          placeholder="Nama lengkap" /></label
      ><label
        >Nomor WhatsApp<input
          v-model="form.phone"
          required
          type="tel"
          autocomplete="tel"
          maxlength="18"
          class="mt-2"
          placeholder="08xxxxxxxxxx" /></label
      ><label
        >Jenjang<select v-model="form.level" class="mt-2">
          <option v-for="l in levels" :key="l">{{ l }}</option>
        </select></label
      ><label
        >Program<select v-model="form.program" class="mt-2">
          <option value="">Butuh rekomendasi</option>
          <option v-for="s in options" :key="s">{{ s }}</option>
        </select></label
      ><label class="sm:col-span-2"
        >Mode Belajar<select v-model="form.mode" class="mt-2">
          <option
            v-for="m in [
              'Online',
              'Offline',
              'Private',
              'Kelompok',
              'Belum Tahu',
            ]"
            :key="m"
          >
            {{ m }}
          </option>
        </select></label
      ><label class="sm:col-span-2"
        >Catatan <span class="font-normal">(opsional)</span
        ><textarea
          v-model="form.notes"
          rows="4"
          maxlength="1500"
          class="mt-2"
          placeholder="Ceritakan tujuan belajar atau jadwal yang diinginkan"
        />
      </label>
    </div>
    <p v-if="error" role="alert" class="mt-4 text-sm text-red-700">
      {{ error }}
    </p>
    <button type="submit" class="btn mt-6 w-full">
      Lanjutkan ke WhatsApp ↗
    </button>
    <p class="mt-4 text-xs">
      Data tidak disimpan di website. Pesan akan dibuka di WhatsApp untuk Anda
      periksa dan kirim.
    </p>
    <a
      v-if="url"
      :href="url"
      target="_blank"
      rel="noopener noreferrer"
      class="mt-4 block text-sm font-bold text-blue-600"
      >Pesan siap. Klik di sini jika WhatsApp belum terbuka ↗</a
    >
  </form>
</template>

# Bimbel Arah Juara

Website company profile dan katalog bimbingan belajar berbasis Nuxt 3, Vue 3, TypeScript, dan Tailwind CSS. Requirement lengkap tersedia di [PRD.md](PRD.md).

## Menjalankan

```bash
npm install
npm run dev
npm run typecheck
npm run build
npm run preview
```

## Struktur

- `pages/`: beranda, tentang, katalog program/kelas/tutor, jadwal, harga, tryout, FAQ, kontak, dan empat jenis dynamic route. Halaman indeks katalog berada di folder `index.vue` agar halaman detail tidak menjadi nested child tanpa outlet.
- `components/`: layout, section beranda, katalog dan filter, jadwal, kalkulator, quiz, formulir, dan UI bersama.
- `data/`: 48 program untuk enam jenjang, tujuh kelas, empat tutor, jadwal mingguan, empat paket, tiga tryout berisi lima soal per tryout, FAQ, testimoni, dan konfigurasi kontak.
- `composables/usePageSeo.ts`: metadata halaman.
- `assets/css/main.css`: tema, responsive layout, animasi ringan, focus state, dan reduced motion.
- `public/images/`: ilustrasi SVG lokal; folder kelas, testimoni, dan general disiapkan untuk foto produksi.
- `tests/website.spec.ts`: pengujian browser route, SEO, Vue warnings, filter, kalkulator, tryout, WhatsApp, FAQ, dan responsive layout.

## Pengujian browser

Jalankan aplikasi pada `http://127.0.0.1:3001` (`npm run dev -- --port 3001`), lalu:

```bash
npx playwright install chromium
npm run test:e2e
```

Pengujian WhatsApp hanya memeriksa URL/pesan; tidak mengirim pesan kepada siapa pun. Screenshot desktop dan mobile disimpan di `tests/artifacts/`.

## Data demo yang perlu diganti

Semua nomor WhatsApp, email, alamat, akun sosial (`data/site.ts`), profil tutor, ilustrasi, harga, kapasitas, jadwal, dan testimoni adalah placeholder. Ganti dengan data bisnis terverifikasi sebelum digunakan untuk menerima pendaftaran. Lokasi offline masih sebatas Tangerang, Banten. Font menggunakan Google Fonts dengan fallback sans-serif.

Harga paket adalah harga mulai. Harga kelas mengikuti detail kelas. Kalkulator menghitung tarif dasar per pertemuan × jumlah pertemuan (1–32), dengan tambahan demo Rp15.000 untuk Mahasiswa/Umum dan Rp10.000 untuk Offline. Group Private dihitung per siswa. Semua estimasi harus dikonfirmasi ke admin.

Tryout menggunakan timer 10 menit berdasarkan waktu aktual dan menampilkan hasil otomatis ketika habis. Jawaban kosong dihitung salah. Jawaban hanya berada di memori halaman dan dapat diulang tanpa akun.

Formulir menyiapkan pesan WhatsApp dengan `encodeURIComponent()` dan menyediakan tautan cadangan bila popup diblokir. Tidak ada penyimpanan atau pengiriman data ke backend. Program mahasiswa adalah pendampingan pemahaman materi, bukan jasa mengerjakan tugas atau ujian.

Tidak ada backend bisnis, database, autentikasi, pembayaran, atau LMS. Server hasil build Nuxt hanya digunakan untuk rendering website. Domain produksi belum ditentukan; canonical URL dan sitemap berbasis domain dapat ditambahkan ketika domain tersedia.

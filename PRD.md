# PRODUCT REQUIREMENTS DOCUMENT
# BIMBEL ARAH JUARA

## Website Bimbingan Belajar Multi-Jenjang

---

## 1. INSTRUKSI UNTUK CODEX

Bangun website **BIMBEL ARAH JUARA** berdasarkan seluruh requirement dalam dokumen ini.

Kerjakan langsung pada source code project Nuxt 3 yang sedang dibuka.

Gunakan:

- Nuxt 3
- Vue 3
- TypeScript
- Tailwind CSS
- Composition API
- `<script setup lang="ts">`
- NuxtLink untuk navigasi internal
- Data lokal TypeScript
- Responsive design
- Mobile-first approach

Jangan membuat:

- Backend
- Firebase
- Supabase
- Database
- Login
- Register
- Dashboard admin
- Dashboard siswa
- Payment gateway
- Midtrans
- QRIS
- Sistem kelas online realtime
- Video conference
- LMS penuh

Semua data sementara disimpan menggunakan file lokal TypeScript.

Website berfungsi sebagai:

**Company Profile + Program Bimbel + Katalog Kelas + Tutor + Jadwal + Harga + Tryout Demo + WhatsApp Registration**

Setelah implementasi selesai:

- cek seluruh route
- cek responsive
- cek filter program
- cek filter jadwal
- cek WhatsApp
- cek tryout demo
- cek TypeScript
- cek Vue warning
- jalankan `npm run build`
- perbaiki sampai build berhasil

---

# 2. INFORMASI PROJECT

Nama brand:

**BIMBEL ARAH JUARA**

Tagline:

**Belajar Terarah, Prestasi Meningkat.**

Kategori:

**Bimbingan Belajar & Learning Center**

Target:

- SD
- SMP
- SMA
- SMK
- Mahasiswa
- Umum

Jenis website:

**Multi-page Education Website**

Konsep desain:

**Modern Learning Platform**

Website harus terlihat:

- modern
- terpercaya
- friendly
- profesional
- mudah digunakan
- cocok untuk anak sekolah sampai orang dewasa
- tidak terlalu kekanak-kanakan
- tidak terlalu corporate

---

# 3. TUJUAN WEBSITE

Website bertujuan untuk:

1. Memperkenalkan Bimbel Arah Juara.
2. Menampilkan program belajar berdasarkan jenjang.
3. Menampilkan mata pelajaran.
4. Menampilkan kelas yang tersedia.
5. Menampilkan jadwal.
6. Menampilkan tutor.
7. Menampilkan harga.
8. Menampilkan program private.
9. Menampilkan program kelompok.
10. Menampilkan program mahasiswa.
11. Menampilkan kursus umum.
12. Menyediakan tryout demo.
13. Mempermudah pendaftaran.
14. Mengarahkan calon siswa ke WhatsApp.
15. Meningkatkan kepercayaan orang tua dan siswa.

---

# 4. TARGET USER

Target utama:

## Orang Tua

Mencari bimbingan belajar untuk anak SD, SMP, SMA atau SMK.

## Pelajar

Mencari bantuan memahami materi dan persiapan ujian.

## Mahasiswa

Mencari kelas seperti:

- Matematika
- Statistika
- Akuntansi
- Excel
- Bahasa Inggris
- Programming
- Web Development
- Database

Program mahasiswa merupakan **bimbingan belajar dan pemahaman materi**, bukan jasa mengerjakan tugas atau ujian atas nama mahasiswa.

## Umum

Mencari kursus:

- Bahasa Inggris
- Microsoft Office
- Microsoft Excel
- Komputer Dasar
- Programming
- Web Development
- Persiapan Interview
- Persiapan Kerja

---

# 5. BRAND IDENTITY

Nama:

**BIMBEL ARAH JUARA**

Tagline:

**Belajar Terarah, Prestasi Meningkat.**

Alternatif copy:

```text
Temukan Cara Belajar yang Tepat.
Dari Belajar Menuju Prestasi.
Belajar Hari Ini, Melangkah Lebih Jauh.
6. COLOR PALETTE

Gunakan warna pendidikan modern.

Primary Navy:

#172554

Primary Blue:

#2563EB

Light Blue:

#DBEAFE

Accent Yellow:

#FBBF24

Soft Background:

#F8FAFC

Dark:

#0F172A

White:

#FFFFFF

Accent yellow jangan digunakan berlebihan.

Gunakan terutama untuk:

badge
icon
highlight
CTA sekunder
7. TYPOGRAPHY

Heading:

Plus Jakarta Sans

Body:

Inter

atau cukup gunakan:

Plus Jakarta Sans

untuk seluruh website.

Desain typography harus:

mudah dibaca
modern
tidak terlalu formal
nyaman di mobile
8. ROUTE WEBSITE

Gunakan route:

/
├── /tentang
├── /program
├── /kelas
├── /tutor
├── /jadwal
├── /harga
├── /tryout
├── /faq
└── /kontak

Dynamic routes:

/program/[slug]
/kelas/[slug]
/tutor/[slug]
/tryout/[slug]
9. STRUKTUR PAGES
pages/
├── index.vue
├── tentang.vue
├── program.vue
├── kelas.vue
├── tutor.vue
├── jadwal.vue
├── harga.vue
├── tryout.vue
├── faq.vue
├── kontak.vue
│
├── program/
│   └── [slug].vue
│
├── kelas/
│   └── [slug].vue
│
├── tutor/
│   └── [slug].vue
│
└── tryout/
    └── [slug].vue
10. STRUKTUR COMPONENTS
components/
│
├── layout/
│   ├── Navbar.vue
│   └── Footer.vue
│
├── home/
│   ├── HeroSection.vue
│   ├── LevelSection.vue
│   ├── PopularPrograms.vue
│   ├── WhyUsSection.vue
│   ├── TutorPreview.vue
│   ├── SchedulePreview.vue
│   ├── PricingPreview.vue
│   ├── TryoutPreview.vue
│   ├── TestimonialSection.vue
│   └── CTASection.vue
│
├── program/
│   ├── ProgramHero.vue
│   ├── ProgramFilter.vue
│   ├── ProgramGrid.vue
│   └── ProgramCard.vue
│
├── class/
│   ├── ClassHero.vue
│   ├── ClassFilter.vue
│   ├── ClassGrid.vue
│   └── ClassCard.vue
│
├── tutor/
│   ├── TutorHero.vue
│   ├── TutorFilter.vue
│   ├── TutorGrid.vue
│   └── TutorCard.vue
│
├── schedule/
│   ├── ScheduleFilter.vue
│   └── ScheduleTable.vue
│
├── pricing/
│   ├── PricingCard.vue
│   └── PricingCalculator.vue
│
├── tryout/
│   ├── TryoutCard.vue
│   ├── QuestionCard.vue
│   ├── QuizProgress.vue
│   └── QuizResult.vue
│
├── contact/
│   ├── ContactHero.vue
│   ├── RegistrationForm.vue
│   └── ContactInfo.vue
│
└── ui/
    ├── SectionTitle.vue
    ├── PageHero.vue
    ├── PrimaryButton.vue
    ├── StatusBadge.vue
    └── WhatsAppFloating.vue
11. DATA STRUCTURE

Gunakan:

data/
├── site.ts
├── programs.ts
├── classes.ts
├── tutors.ts
├── schedules.ts
├── pricing.ts
├── tryouts.ts
├── testimonials.ts
└── faq.ts
12. SITE CONFIG

Buat:

export const siteConfig = {
  name: 'Bimbel Arah Juara',
  tagline: 'Belajar Terarah, Prestasi Meningkat.',
  whatsapp: '6281234567890',
  email: 'hello@arahjuara.com',
  instagram: '@bimbelarahjuara',
  address: 'Tangerang, Banten',
}

Semua WhatsApp/contact menggunakan data ini.

Jangan menulis nomor berbeda pada banyak component.

13. NAVBAR

Desktop:

ARAH JUARA

Beranda
Program
Kelas
Tutor
Jadwal
Harga
Tryout
Tentang
FAQ
Kontak

[Daftar Sekarang]

Routes:

Beranda  → /
Program  → /program
Kelas    → /kelas
Tutor    → /tutor
Jadwal   → /jadwal
Harga    → /harga
Tryout   → /tryout
Tentang  → /tentang
FAQ      → /faq
Kontak   → /kontak

CTA:

Daftar Sekarang

arah ke:

/kontak

Navbar wajib:

sticky
responsive
active state
hamburger mobile
smooth transition
14. HOMEPAGE

File:

pages/index.vue

Susunan:

Navbar
↓
Hero
↓
Pilih Jenjang
↓
Program Populer
↓
Kenapa Arah Juara
↓
Tutor Pilihan
↓
Jadwal Kelas
↓
Paket Harga
↓
Tryout Gratis
↓
Testimoni
↓
CTA
↓
Footer
15. HERO

Headline:

Belajar Lebih Terarah.
Raih Prestasi Lebih Tinggi.

Deskripsi:

Program belajar untuk SD, SMP, SMA/SMK, mahasiswa dan umum bersama tutor berpengalaman dan metode belajar yang mudah dipahami.

CTA:

Lihat Program

arah ke:

/program

CTA kedua:

Konsultasi Gratis

arah ke WhatsApp.

Hero harus:

responsive
modern
tidak terlalu ramai
menggunakan ilustrasi/foto belajar
memiliki badge kecil

Contoh badge:

SD • SMP • SMA/SMK • Mahasiswa • Umum
16. PILIH JENJANG

Component:

components/home/LevelSection.vue

Tampilkan 5 card:

SD
SMP
SMA / SMK
MAHASISWA
UMUM

Setiap card memiliki:

icon
nama
deskripsi singkat
link

Contoh:

SD

Bangun fondasi belajar yang kuat.

Kelas 1 - 6

[Lihat Program]
17. PROGRAM SD

Slug:

/program/sd

Mata pelajaran:

Matematika
Bahasa Indonesia
Bahasa Inggris
IPA
Calistung
Persiapan Ujian

Bagi jika perlu:

Kelas 1 - 3
Kelas 4 - 6
18. PROGRAM SMP

Slug:

/program/smp

Mata pelajaran:

Matematika
IPA
Bahasa Inggris
Bahasa Indonesia
Persiapan Ujian

Jenjang:

Kelas 7
Kelas 8
Kelas 9
19. PROGRAM SMA

Slug:

/program/sma

Program:

Matematika
Fisika
Kimia
Biologi
Bahasa Inggris
Bahasa Indonesia
Ekonomi
Akuntansi
Persiapan Ujian
20. PROGRAM SMK

Slug:

/program/smk

Program:

Matematika
Bahasa Inggris
Bahasa Indonesia
Microsoft Office
Microsoft Excel
Komputer Dasar
Pemrograman Dasar
Akuntansi
Persiapan Kerja
21. PROGRAM MAHASISWA

Slug:

/program/mahasiswa

Program:

Matematika Dasar
Statistika
Akuntansi
Bahasa Inggris
Microsoft Excel
Programming
Web Development
Database
Metodologi Penelitian
Penulisan Akademik

Catatan:

Program seperti:

Metodologi Penelitian
Penulisan Akademik

merupakan layanan pendampingan pembelajaran.

Tidak boleh dipromosikan sebagai:

jasa mengerjakan skripsi
jasa mengerjakan tugas
joki ujian
22. PROGRAM UMUM

Slug:

/program/umum

Program:

Bahasa Inggris
Microsoft Word
Microsoft Excel
Microsoft PowerPoint
Komputer Dasar
Programming Dasar
Web Development
Persiapan Interview
Persiapan Kerja
23. PROGRAM DATA

Interface:

export interface Program {
  id: number
  slug: string
  name: string
  level: 'SD' | 'SMP' | 'SMA' | 'SMK' | 'Mahasiswa' | 'Umum'
  subject: string
  description: string
  image: string
  features: string[]
}

Buat minimal 20 program dummy.

24. PROGRAM PAGE

Route:

/program

Hero:

Temukan Program Belajar yang Tepat.

Filter:

Semua
SD
SMP
SMA
SMK
Mahasiswa
Umum

Tambahkan search:

Cari mata pelajaran...

Gunakan computed untuk filter frontend.

25. PROGRAM CARD

Contoh:

MATEMATIKA

SMP

Matematika Intensif

Bangun pemahaman konsep dan latihan soal secara bertahap.

[Lihat Program]
26. CLASS PAGE

Route:

/kelas

Gunakan sebagai katalog kelas yang sedang tersedia.

Filter:

Jenjang
Mata Pelajaran
Mode Belajar
Hari
Harga

Mode:

Online
Offline
Private
Kelompok
27. CLASS DATA

Interface:

export interface LearningClass {
  id: number
  slug: string
  name: string
  level: string
  subject: string
  mode: 'Online' | 'Offline'
  type: 'Regular' | 'Intensive' | 'Private' | 'Group'
  meetingsPerMonth: number
  durationMinutes: number
  capacity: number
  price: number
  schedule: string
  tutorId: number
  description: string
  topics: string[]
}
28. CONTOH KELAS
Matematika Intensif SMP Kelas 9
8 Pertemuan / bulan

90 menit / pertemuan

Kapasitas:
8 siswa

Mode:
Offline

Harga:
Rp450.000 / bulan

Materi:

Aljabar
Persamaan
Bangun Ruang
Statistika
Latihan Ujian
Bahasa Inggris SMA
8 Pertemuan

90 menit

Online

Rp400.000 / bulan
Excel Mahasiswa
4 Pertemuan

120 menit

Online / Offline

Rp350.000
Web Development Basic
8 Pertemuan

120 menit

Online

Rp750.000
29. CLASS CARD

Contoh:

SMP • MATEMATIKA

Matematika Intensif Kelas 9

8 Pertemuan
90 Menit
8 Siswa

Offline

Rp450.000 / bulan

[Lihat Detail]
30. CLASS DETAIL

Dynamic route:

/kelas/[slug]

Isi:

Nama Kelas
↓
Jenjang
↓
Mata Pelajaran
↓
Harga
↓
Jadwal
↓
Tutor
↓
Tentang Kelas
↓
Materi
↓
Fasilitas
↓
CTA Daftar

Jika slug tidak ada:

throw createError({
  statusCode: 404,
  statusMessage: 'Kelas tidak ditemukan'
})
31. TUTOR PAGE

Route:

/tutor

Hero:

Belajar Bersama Tutor yang Tepat.

Filter:

Semua
SD
SMP
SMA/SMK
Mahasiswa
Umum

Tambahkan filter subject.

32. TUTOR DATA

Interface:

export interface Tutor {
  id: number
  slug: string
  name: string
  title: string
  education: string
  experience: string
  subjects: string[]
  levels: string[]
  image: string
  bio: string
}

Contoh:

Ahmad Rizky

Tutor Matematika

S1 Pendidikan Matematika

4 Tahun Pengalaman

SD • SMP • SMA
33. TUTOR DETAIL

Route:

/tutor/[slug]

Tampilkan:

Foto
Nama
Bidang
Pendidikan
Pengalaman
Bio
Mata Pelajaran
Jenjang
Kelas yang Diampu
Jadwal

CTA:

Belajar Bersama Tutor Ini

arah ke WhatsApp.

34. JADWAL PAGE

Route:

/jadwal

Filter:

Jenjang
Hari
Tutor
Mode

Contoh:

Senin

Matematika SMP
16:00 - 17:30

Tutor:
Ahmad Rizky

Offline
Selasa

Bahasa Inggris SMA
17:00 - 18:30

Online
Rabu

Excel Mahasiswa
19:00 - 21:00

Online
35. SCHEDULE DATA

Interface:

export interface Schedule {
  id: number
  classId: number
  day: string
  startTime: string
  endTime: string
  mode: 'Online' | 'Offline'
  room?: string
}
36. PRICING PAGE

Route:

/harga

Gunakan paket:

Regular
Mulai Rp350.000 / bulan

Fitur:

8 Pertemuan
Kelas Kelompok
Materi Belajar
Latihan Soal
Intensive
Mulai Rp500.000 / bulan

Fitur:

8 Pertemuan
Kelas Kecil
Latihan Intensif
Evaluasi
Private
Mulai Rp100.000 / pertemuan

Fitur:

1 Tutor
1 Siswa
Jadwal Fleksibel
Materi Disesuaikan
Group Private
Mulai Rp75.000 / siswa / pertemuan

Fitur:

3 - 5 siswa
Tutor private
Jadwal fleksibel
37. PRICE CALCULATOR

Tambahkan kalkulator sederhana.

Input:

Jenjang
Mode
Jenis Kelas
Jumlah Pertemuan

Contoh:

Jenjang:
SMA

Jenis:
Private

Pertemuan:
8

Harga / pertemuan:
Rp100.000

ESTIMASI
Rp800.000

Gunakan computed().

Harga hanya data demo.

Tambahkan disclaimer:

Harga merupakan estimasi dan dapat berbeda berdasarkan program, tutor, lokasi dan kebutuhan siswa.
38. TRYOUT PAGE

Route:

/tryout

Tampilkan tryout demo.

Contoh:

Tryout Matematika SMP

20 Soal

30 Menit

Gratis

[Mulai Tryout]
Tryout Matematika SMA

20 Soal

30 Menit

Gratis
English Basic Test

15 Soal

20 Menit
39. TRYOUT DATA

Interface:

export interface TryoutQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

export interface Tryout {
  id: number
  slug: string
  title: string
  level: string
  subject: string
  duration: number
  questions: TryoutQuestion[]
}

Untuk portfolio:

buat minimal 3 tryout.

Masing-masing minimal 5 soal demo.

Tidak perlu 20 soal sungguhan jika membuat project terlalu besar.

UI boleh tetap menampilkan:

Demo 5 soal
40. TRYOUT FLOW
Pilih Tryout
↓
Mulai
↓
Soal 1
↓
Soal 2
↓
...
↓
Selesai
↓
Nilai
↓
Pembahasan
41. TRYOUT QUESTION

Gunakan radio button.

Contoh:

1. Hasil dari 12 × 8 adalah?

○ 86
○ 96
○ 106
○ 116

Button:

Sebelumnya
Selanjutnya

Tampilkan:

1 / 5

dan progress bar.

42. TRYOUT RESULT

Contoh:

Hasil Tryout

4 / 5

80%

Bagus!

Tampilkan:

Jawaban Benar
Jawaban Salah
Nilai

Button:

Lihat Pembahasan
Coba Lagi
Cari Kelas yang Cocok
43. TESTIMONIAL

Gunakan data dummy.

Contoh:

"Anak saya jadi lebih percaya diri belajar matematika."

— Ibu Rina
Orang Tua Siswa SMP
"Materinya mudah dipahami dan tutornya sabar."

— Dimas
Siswa SMA
"Kelas Excel membantu saya memahami rumus yang sebelumnya sulit."

— Fajar
Mahasiswa
44. WHY US

Tampilkan 6 alasan:

Tutor Berpengalaman

Tutor berdasarkan bidangnya.

Kelas Terarah

Materi disusun berdasarkan jenjang.

Kelas Kecil

Belajar lebih fokus.

Jadwal Fleksibel

Tersedia berbagai pilihan jadwal.

Online & Offline

Pilih metode belajar.

Program Lengkap

SD sampai mahasiswa dan umum.

45. ABOUT PAGE

Route:

/tentang

Hero:

Belajar Bukan Sekadar Menghafal.

Isi:

Hero
↓
Tentang Arah Juara
↓
Visi
↓
Misi
↓
Metode Belajar
↓
Jenjang
↓
Tutor
↓
CTA

Contoh copy:

Bimbel Arah Juara hadir untuk membantu siswa memahami materi dengan metode belajar yang lebih terarah, nyaman dan sesuai kebutuhan.
46. FAQ PAGE

Route:

/faq

FAQ:

Apakah tersedia kelas online?

Ya, tersedia kelas online untuk program tertentu.

Apakah tersedia kelas offline?

Ya.

Apakah tersedia private?

Ya.

Mulai usia berapa?

Program tersedia mulai SD hingga dewasa.

Apakah mahasiswa bisa ikut?

Ya.

Apakah tersedia kursus komputer?

Ya, tersedia program tertentu seperti Office, Excel, programming dan web development.

Bagaimana cara mendaftar?

Pilih program lalu hubungi admin melalui WhatsApp.

Apakah jadwal bisa disesuaikan?

Untuk private, jadwal dapat dikonsultasikan terlebih dahulu.

Gunakan accordion.

47. CONTACT PAGE

Route:

/kontak

Hero:

Mulai Perjalanan Belajarmu.

Form:

Nama
Nomor WhatsApp
Jenjang
Program
Mode Belajar
Catatan

Jenjang:

SD
SMP
SMA
SMK
Mahasiswa
Umum

Mode:

Online
Offline
Private
Kelompok
Belum Tahu

Form tidak dikirim ke backend.

Saat submit:

generate pesan WhatsApp.

48. WHATSAPP MESSAGE

Contoh:

Halo Bimbel Arah Juara,

Saya ingin berkonsultasi mengenai program belajar.

Nama:
Muhammad Noval

Jenjang:
SMA

Program:
Matematika

Mode:
Private

Catatan:
Saya ingin persiapan ujian.

Mohon informasi jadwal dan biayanya.

Gunakan:

encodeURIComponent()

URL:

https://wa.me/
49. FLOATING WHATSAPP

Tampilkan di seluruh halaman.

Pesan default:

Halo Bimbel Arah Juara, saya melihat website Arah Juara dan ingin mengetahui informasi program belajar.
50. FOOTER

Isi:

BIMBEL
ARAH JUARA

Belajar Terarah,
Prestasi Meningkat.

Navigation:

Program
Kelas
Tutor
Jadwal
Harga
Tryout
Tentang
FAQ
Kontak

Program:

SD
SMP
SMA/SMK
Mahasiswa
Umum

Social:

Instagram
TikTok
WhatsApp

Copyright:

© 2026 Bimbel Arah Juara. Seluruh hak dilindungi.

Boleh tambahkan kecil:

Website dibuat oleh Muhammad Noval
51. RESPONSIVE DESIGN

Test minimal:

360px
390px
768px
1024px
1280px
1440px

Mobile:

Navbar hamburger
1 column cards
Filter responsive
Form 1 column
Jadwal mudah dibaca
Tryout nyaman
No horizontal scroll

Tablet:

2 column cards

Desktop:

3-4 column program cards
3-4 tutor cards
Large hero
52. ANIMATION

Gunakan animasi ringan:

fade-in
fade-up
card hover
button transition
image zoom
section reveal

Jangan berlebihan.

Hormati:

@media (prefers-reduced-motion: reduce)
53. SEO

Gunakan:

useSeoMeta()

Homepage:

Bimbel Arah Juara | Bimbingan Belajar SD hingga Mahasiswa

Description:

Bimbingan belajar untuk SD, SMP, SMA/SMK, mahasiswa dan umum dengan pilihan kelas online, offline, private dan kelompok.

Program:

Program Bimbingan Belajar | Bimbel Arah Juara

Tutor:

Tutor Bimbel | Bimbel Arah Juara

Harga:

Harga Bimbel & Kelas Private | Bimbel Arah Juara

Tryout:

Tryout Online Gratis | Bimbel Arah Juara

Kontak:

Pendaftaran Bimbel | Bimbel Arah Juara

Dynamic program:

Bimbel Matematika SMP | Bimbel Arah Juara
54. SEO KEYWORDS

Gunakan secara natural:

bimbel
bimbingan belajar
bimbel SD
bimbel SMP
bimbel SMA
bimbel SMK
les private
bimbel mahasiswa
kursus Excel
kursus komputer
kursus programming
kelas online
kelas offline

Jika nanti lokasi usaha sudah ditentukan, tambahkan keyword lokal seperti:

bimbel Tangerang
les private Tangerang
55. IMAGE STRUCTURE
public/images/
├── hero/
├── programs/
├── tutors/
├── classes/
├── testimonials/
└── general/

Jika foto asli belum tersedia:

gunakan placeholder yang konsisten.

Semua image wajib memiliki alt.

56. ACCESSIBILITY

Pastikan:

button menggunakan <button>
navigasi internal menggunakan NuxtLink
image memiliki alt
form memiliki label
radio button dapat digunakan keyboard
focus state terlihat
hamburger memiliki aria-label
kontras teks cukup
57. PERFORMANCE

Gunakan:

reusable component
lazy loading
data lokal
computed
minimal dependency
jangan menggunakan library berat jika tidak diperlukan
58. FITUR WAJIB BEKERJA

Pastikan fitur berikut berjalan:

Navbar desktop.
Navbar mobile.
Semua route.
Program filtering.
Program search.
Class filtering.
Tutor filtering.
Dynamic program page.
Dynamic class page.
Dynamic tutor page.
Jadwal filter.
Price calculator.
Tryout.
Tryout score.
Tryout explanation.
FAQ accordion.
WhatsApp form.
Floating WhatsApp.
Responsive design.
SEO metadata.
59. FITUR YANG TIDAK DIBUAT

Jangan membuat:

Login
Register
Student Dashboard
Tutor Dashboard
Admin Dashboard
Database
Firebase
Supabase
Payment Gateway
Midtrans
QRIS
Live Video Class
Zoom Integration
Realtime Chat
Attendance System
Student Grade Database
Certificate Generator
60. ERROR HANDLING

Jika program tidak ditemukan:

404

Jika kelas tidak ditemukan:

404

Jika tutor tidak ditemukan:

404

Jika filter kosong:

Belum ada kelas yang sesuai dengan pilihan Anda.

Tryout tidak boleh menghasilkan:

NaN
undefined
61. CODE QUALITY

Gunakan TypeScript interface/type.

Hindari:

any

Gunakan:

ref()
computed()
props
emits
composable

Pisahkan data dari UI.

Jangan membuat seluruh website pada satu file.

62. HOMEPAGE FINAL FLOW
NAVBAR

↓

HERO

Belajar Lebih Terarah.
Raih Prestasi Lebih Tinggi.

[Lihat Program]
[Konsultasi Gratis]

↓

PILIH JENJANG

SD
SMP
SMA / SMK
Mahasiswa
Umum

↓

PROGRAM POPULER

↓

KENAPA ARAH JUARA

↓

TUTOR PILIHAN

↓

JADWAL KELAS

↓

PAKET & HARGA

↓

TRYOUT GRATIS

↓

TESTIMONI

↓

CTA

Mulai Perjalanan Belajarmu.

[Daftar Sekarang]

↓

FOOTER
63. PRIORITAS IMPLEMENTASI
P0

Kerjakan terlebih dahulu:

Navbar
Homepage
Program
Kelas
Tutor
Kontak
WhatsApp
Responsive
P1

Lanjutkan:

Jadwal
Harga
Price Calculator
FAQ
Tentang
P2

Lanjutkan:

Tryout
SEO
Animation
Testimonial
Polishing
64. ACCEPTANCE CRITERIA

Website dianggap selesai jika:

semua route dapat dibuka
tidak ada broken link
mobile responsive
tidak ada horizontal scroll
program filter bekerja
class filter bekerja
tutor filter bekerja
dynamic routes bekerja
kalkulator harga bekerja
tryout dapat dijawab
skor tryout benar
WhatsApp menghasilkan pesan
form tidak menghasilkan error
tidak ada Vue warning penting
tidak ada TypeScript error
npm run build berhasil
65. FINAL OUTPUT

Hasil akhir harus berupa website:

BIMBEL ARAH JUARA

Tagline:

Belajar Terarah, Prestasi Meningkat.

Karakter:

Modern
Friendly
Professional
Education-focused
Responsive
Interactive
Portfolio-ready

Website harus cocok digunakan sebagai:

website bimbel
website kursus
learning center
portfolio Web Developer
demo jasa pembuatan website pendidikan
66. INSTRUKSI TERAKHIR UNTUK CODEX

Implementasikan seluruh requirement ini langsung pada source code.

Jangan hanya memberikan contoh code.

Jangan hanya memberikan penjelasan.

Jangan berhenti setelah homepage.

Buat seluruh pages, components, local data, filtering, dynamic routes, jadwal, pricing calculator, tryout, WhatsApp integration, responsive layout dan SEO.

Jika project sudah memiliki file atau konfigurasi tertentu:

evaluasi terlebih dahulu
gunakan kembali jika masih relevan
jangan merusak konfigurasi yang sudah berjalan

Jika Tailwind sudah tersedia:

gunakan konfigurasi yang ada.

Jika belum tersedia:

pasang dan konfigurasi dengan benar.

Setelah semua selesai:

jalankan aplikasi
cek console
cek semua route
cek mobile
cek filter
cek tryout
cek WhatsApp
jalankan npm run build
perbaiki error sampai build berhasil

Terakhir berikan ringkasan:

file yang dibuat
file yang diubah
fitur yang berhasil dibuat
hasil build
data yang masih placeholder

Setelah kamu menyimpan isi tersebut menjadi **`PRD.md`**, kirim perintah ini ke Codex:

```text
Baca file PRD.md sampai selesai lalu implementasikan seluruh website BIMBEL ARAH JUARA berdasarkan requirement tersebut.

Kerjakan langsung pada source code project ini dan jangan hanya memberikan contoh kode atau penjelasan.

Gunakan Nuxt 3, Vue 3, TypeScript dan Tailwind CSS.

Implementasikan seluruh pages, components, data dummy, program SD, SMP, SMA, SMK, mahasiswa dan umum, katalog kelas, tutor, jadwal, harga, kalkulator harga, tryout demo, filtering, dynamic routes, WhatsApp registration, responsive design dan SEO.

Jangan membuat backend, Firebase, database, login, register, dashboard, payment gateway atau LMS penuh.

Setelah selesai, jalankan npm run build.

Jika terdapat error Vue, TypeScript atau build, perbaiki sampai build berhasil.

Terakhir berikan ringkasan file yang dibuat/diubah, fitur yang selesai, hasil build dan data yang masih placeholder.

Untuk versi pertama, struktur ini sudah cukup lengkap untuk membuat Bimbel Arah Juara terlihat seperti platform pendidikan sungguhan, tetapi masih realistis dikerjakan sebagai frontend portfolio.
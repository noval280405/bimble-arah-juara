export interface LearningClass {
  id: number;
  slug: string;
  name: string;
  level: string;
  subject: string;
  mode: "Online" | "Offline";
  type: "Regular" | "Intensive" | "Private" | "Group";
  meetingsPerMonth: number;
  durationMinutes: number;
  capacity: number;
  price: number;
  schedule: string;
  tutorId: number;
  description: string;
  topics: string[];
}
export const classes: LearningClass[] = [
  {
    id: 1,
    slug: "matematika-intensif-smp",
    name: "Matematika Intensif Kelas 9",
    level: "SMP",
    subject: "Matematika",
    mode: "Offline",
    type: "Intensive",
    meetingsPerMonth: 8,
    durationMinutes: 90,
    capacity: 8,
    price: 450000,
    schedule: "Senin & Kamis, 16:00–17:30",
    tutorId: 1,
    description:
      "Bangun rasa percaya diri menghadapi ujian melalui pemahaman konsep dan latihan terarah.",
    topics: [
      "Aljabar",
      "Persamaan",
      "Bangun Ruang",
      "Statistika",
      "Latihan Ujian",
    ],
  },
  {
    id: 2,
    slug: "bahasa-inggris-sma",
    name: "Bahasa Inggris SMA",
    level: "SMA",
    subject: "Bahasa Inggris",
    mode: "Online",
    type: "Regular",
    meetingsPerMonth: 8,
    durationMinutes: 90,
    capacity: 10,
    price: 400000,
    schedule: "Selasa & Jumat, 17:00–18:30",
    tutorId: 2,
    description:
      "Kuasai grammar, reading, dan speaking dengan praktik yang menyenangkan.",
    topics: ["Grammar", "Reading comprehension", "Speaking", "Writing"],
  },
  {
    id: 3,
    slug: "excel-mahasiswa",
    name: "Excel untuk Mahasiswa",
    level: "Mahasiswa",
    subject: "Microsoft Excel",
    mode: "Online",
    type: "Group",
    meetingsPerMonth: 4,
    durationMinutes: 120,
    capacity: 5,
    price: 350000,
    schedule: "Rabu, 19:00–21:00",
    tutorId: 3,
    description:
      "Belajar mengolah data dan menyusun laporan dengan rumus Excel yang tepat.",
    topics: ["Formula dasar", "Lookup", "Pivot table", "Visualisasi data"],
  },
  {
    id: 4,
    slug: "web-development-basic",
    name: "Web Development Basic",
    level: "Umum",
    subject: "Web Development",
    mode: "Online",
    type: "Regular",
    meetingsPerMonth: 8,
    durationMinutes: 120,
    capacity: 10,
    price: 750000,
    schedule: "Sabtu & Minggu, 09:00–11:00",
    tutorId: 3,
    description:
      "Mulai membuat website sendiri dari dasar hingga proyek pertama.",
    topics: ["HTML", "CSS", "JavaScript", "Proyek website"],
  },
  {
    id: 5,
    slug: "matematika-sd",
    name: "Matematika Seru Kelas 4–6",
    level: "SD",
    subject: "Matematika",
    mode: "Offline",
    type: "Regular",
    meetingsPerMonth: 8,
    durationMinutes: 90,
    capacity: 8,
    price: 350000,
    schedule: "Senin & Kamis, 14:00–15:30",
    tutorId: 1,
    description:
      "Bangun fondasi numerasi dengan kegiatan interaktif dan contoh sehari-hari.",
    topics: ["Operasi hitung", "Pecahan", "Pengukuran", "Geometri"],
  },
  {
    id: 6,
    slug: "akuntansi-smk",
    name: "Akuntansi Praktis SMK",
    level: "SMK",
    subject: "Akuntansi",
    mode: "Offline",
    type: "Intensive",
    meetingsPerMonth: 8,
    durationMinutes: 90,
    capacity: 8,
    price: 500000,
    schedule: "Selasa & Jumat, 15:00–16:30",
    tutorId: 4,
    description:
      "Pahami siklus akuntansi melalui latihan transaksi dan laporan keuangan.",
    topics: ["Jurnal umum", "Buku besar", "Neraca saldo", "Laporan keuangan"],
  },
  {
    id: 7,
    slug: "english-private",
    name: "English Private",
    level: "Umum",
    subject: "Bahasa Inggris",
    mode: "Online",
    type: "Private",
    meetingsPerMonth: 4,
    durationMinutes: 60,
    capacity: 1,
    price: 400000,
    schedule: "Sabtu, 13:00–14:00",
    tutorId: 2,
    description:
      "Pendampingan personal untuk mengembangkan kemampuan bahasa Inggris sesuai tujuanmu.",
    topics: ["Conversation", "Vocabulary", "Interview", "Pronunciation"],
  },
];

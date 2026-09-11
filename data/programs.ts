import type { Level } from "./site";
export interface Program {
  id: number;
  slug: string;
  name: string;
  level: Level;
  subject: string;
  description: string;
  image: string;
  features: string[];
}
export const subjects: Record<Level, string[]> = {
  SD: [
    "Matematika",
    "Bahasa Indonesia",
    "Bahasa Inggris",
    "IPA",
    "Calistung",
    "Persiapan Ujian",
  ],
  SMP: [
    "Matematika",
    "IPA",
    "Bahasa Inggris",
    "Bahasa Indonesia",
    "Persiapan Ujian",
  ],
  SMA: [
    "Matematika",
    "Fisika",
    "Kimia",
    "Biologi",
    "Bahasa Inggris",
    "Bahasa Indonesia",
    "Ekonomi",
    "Akuntansi",
    "Persiapan Ujian",
  ],
  SMK: [
    "Matematika",
    "Bahasa Inggris",
    "Bahasa Indonesia",
    "Microsoft Office",
    "Microsoft Excel",
    "Komputer Dasar",
    "Pemrograman Dasar",
    "Akuntansi",
    "Persiapan Kerja",
  ],
  Mahasiswa: [
    "Matematika Dasar",
    "Statistika",
    "Akuntansi",
    "Bahasa Inggris",
    "Microsoft Excel",
    "Programming",
    "Web Development",
    "Database",
    "Metodologi Penelitian",
    "Penulisan Akademik",
  ],
  Umum: [
    "Bahasa Inggris",
    "Microsoft Word",
    "Microsoft Excel",
    "Microsoft PowerPoint",
    "Komputer Dasar",
    "Programming Dasar",
    "Web Development",
    "Persiapan Interview",
    "Persiapan Kerja",
  ],
};
export const programs: Program[] = Object.entries(subjects)
  .flatMap(([level, items]) =>
    items.map((subject) => ({
      id: 0,
      slug: `${level}-${subject}`.toLowerCase().replaceAll(" ", "-"),
      name: `${subject} ${level}`,
      level: level as Level,
      subject,
      description: `Pahami ${subject.toLowerCase()} dengan konsep yang jelas, latihan bertahap, dan pendampingan tutor sesuai kebutuhan ${level}.`,
      image: "/images/programs/learning.svg",
      features: [
        "Pemetaan kemampuan awal",
        "Materi dan latihan terstruktur",
        "Evaluasi perkembangan",
        "Konsultasi bersama tutor",
      ],
    })),
  )
  .map((p, i) => ({ ...p, id: i + 1 }));

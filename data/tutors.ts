export interface Tutor {
  id: number;
  slug: string;
  name: string;
  title: string;
  education: string;
  experience: string;
  subjects: string[];
  levels: string[];
  image: string;
  bio: string;
}
export const tutors: Tutor[] = [
  {
    id: 1,
    slug: "ahmad-rizky",
    name: "Ahmad Rizky",
    title: "Tutor Matematika",
    education: "S1 Pendidikan Matematika",
    experience: "4 tahun",
    subjects: ["Matematika", "Matematika Dasar", "Statistika", "IPA", "Fisika"],
    levels: ["SD", "SMP", "SMA", "Mahasiswa"],
    image: "/images/tutors/ahmad.svg",
    bio: "Mengajak siswa memahami alasan di balik rumus melalui contoh sehari-hari dan latihan yang bertahap.",
  },
  {
    id: 2,
    slug: "nadia-putri",
    name: "Nadia Putri",
    title: "Tutor Bahasa Inggris",
    education: "S1 Pendidikan Bahasa Inggris",
    experience: "5 tahun",
    subjects: [
      "Bahasa Inggris",
      "Bahasa Indonesia",
      "Calistung",
      "Persiapan Interview",
    ],
    levels: ["SD", "SMP", "SMA", "SMK", "Mahasiswa", "Umum"],
    image: "/images/tutors/nadia.svg",
    bio: "Menciptakan suasana belajar yang nyaman agar siswa berani berbicara, bertanya, dan mencoba.",
  },
  {
    id: 3,
    slug: "bima-pratama",
    name: "Bima Pratama",
    title: "Tutor Teknologi & Digital",
    education: "S1 Teknik Informatika",
    experience: "6 tahun",
    subjects: [
      "Microsoft Excel",
      "Microsoft Office",
      "Web Development",
      "Programming",
      "Database",
      "Komputer Dasar",
    ],
    levels: ["SMK", "Mahasiswa", "Umum"],
    image: "/images/tutors/bima.svg",
    bio: "Membantu peserta membangun keterampilan digital melalui praktik dan proyek sederhana.",
  },
  {
    id: 4,
    slug: "sarah-amalia",
    name: "Sarah Amalia",
    title: "Tutor Sains & Akuntansi",
    education: "S1 Pendidikan Ekonomi",
    experience: "4 tahun",
    subjects: ["Akuntansi", "Ekonomi", "Persiapan Kerja"],
    levels: ["SMA", "SMK", "Mahasiswa", "Umum"],
    image: "/images/tutors/sarah.svg",
    bio: "Menyederhanakan konsep ekonomi dan akuntansi melalui studi kasus yang dekat dengan kehidupan.",
  },
];

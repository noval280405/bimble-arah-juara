export const pricing = [
  {
    name: "Regular",
    price: 350000,
    unit: "/ bulan",
    features: [
      "8 pertemuan",
      "Kelas kelompok",
      "Materi belajar",
      "Latihan soal",
    ],
  },
  {
    name: "Intensive",
    price: 500000,
    unit: "/ bulan",
    features: [
      "8 pertemuan",
      "Kelas kecil",
      "Latihan intensif",
      "Evaluasi perkembangan",
    ],
  },
  {
    name: "Private",
    price: 100000,
    unit: "/ pertemuan",
    features: [
      "1 tutor, 1 siswa",
      "Jadwal fleksibel",
      "Materi disesuaikan",
      "Pendampingan personal",
    ],
  },
  {
    name: "Group Private",
    price: 75000,
    unit: "/ siswa / pertemuan",
    features: [
      "3–5 siswa",
      "Tutor private",
      "Jadwal fleksibel",
      "Belajar bersama teman",
    ],
  },
];
export const estimateRate = (level: string, mode: string, type: string) =>
  (type === "Private"
    ? 100000
    : type === "Group Private"
      ? 75000
      : type === "Intensive"
        ? 62500
        : 43750) +
  (["Mahasiswa", "Umum"].includes(level) ? 15000 : 0) +
  (mode === "Offline" ? 10000 : 0);

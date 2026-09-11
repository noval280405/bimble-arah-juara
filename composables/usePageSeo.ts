export const usePageSeo = (
  title: string,
  description = "Bimbingan belajar untuk SD, SMP, SMA/SMK, mahasiswa dan umum dengan pilihan kelas online, offline, private dan kelompok.",
) => {
  useSeoMeta({
    title: `${title} | Bimbel Arah Juara`,
    description,
    ogTitle: `${title} | Bimbel Arah Juara`,
    ogDescription: description,
    ogType: "website",
    twitterCard: "summary",
  });
};

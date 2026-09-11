export const siteConfig = {
  name: "Bimbel Arah Juara",
  tagline: "Belajar Terarah, Prestasi Meningkat.",
  whatsapp: "6281234567890",
  email: "hello@arahjuara.com",
  instagram: "@bimbelarahjuara",
  tiktok: "@bimbelarahjuara",
  address: "Tangerang, Banten",
};
export const levels = ["SD", "SMP", "SMA", "SMK", "Mahasiswa", "Umum"] as const;
export type Level = (typeof levels)[number];
export const nav = [
  ["Beranda", "/"],
  ["Program", "/program"],
  ["Kelas", "/kelas"],
  ["Tutor", "/tutor"],
  ["Jadwal", "/jadwal"],
  ["Harga", "/harga"],
  ["Tryout", "/tryout"],
  ["Tentang", "/tentang"],
  ["FAQ", "/faq"],
  ["Kontak", "/kontak"],
];
export const rupiah = (n: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n);
export const whatsappUrl = (
  message = "Halo Bimbel Arah Juara, saya melihat website Arah Juara dan ingin mengetahui informasi program belajar.",
) => `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;

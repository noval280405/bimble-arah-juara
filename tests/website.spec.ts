import { test, expect } from "@playwright/test";
import { programs } from "../data/programs";
import { classes } from "../data/classes";
import { tutors } from "../data/tutors";
import { tryouts } from "../data/tryouts";
const routes = [
  "/",
  "/tentang",
  "/program",
  "/kelas",
  "/tutor",
  "/jadwal",
  "/harga",
  "/tryout",
  "/faq",
  "/kontak",
  ...["sd", "smp", "sma", "smk", "mahasiswa", "umum"].map(
    (s) => "/program/" + s,
  ),
  ...programs.map((p) => "/program/" + p.slug),
  ...classes.map((c) => "/kelas/" + c.slug),
  ...tutors.map((t) => "/tutor/" + t.slug),
  ...tryouts.map((t) => "/tryout/" + t.slug),
];
test("all routes render with SEO, assets and no Vue warnings", async ({
  page,
}) => {
  test.setTimeout(180000);
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("console", (m) => {
    if (m.text().includes("[Vue warn]") || m.text().includes("Hydration"))
      errors.push(m.text());
  });
  for (const route of routes) {
    const res = await page.goto(route);
    expect(res?.status(), route).toBe(200);
    await expect(page.locator("h1")).toBeVisible();
    await expect(page).toHaveTitle(/Arah Juara/);
    expect(
      await page.locator('meta[name="description"]').getAttribute("content"),
    ).toBeTruthy();
    await expect(
      page
        .locator("main img")
        .evaluateAll((imgs) =>
          imgs.every(
            (img) =>
              (img as HTMLImageElement).complete &&
              (img as HTMLImageElement).naturalWidth > 0,
          ),
        ),
    ).resolves.toBeTruthy();
  }
  expect(errors).toEqual([]);
  for (const path of ["program", "kelas", "tutor", "tryout"]) {
    const res = await page.goto("/" + path + "/tidak-ada");
    expect(res?.status()).toBe(404);
  }
});
test("filters and calculator", async ({ page }) => {
  await page.goto("/program");
  await page.getByRole("button", { name: "SMP", exact: true }).click();
  await expect(page.locator("article")).toHaveCount(5);
  await page.getByLabel("Cari mata pelajaran").fill("Matematika");
  await expect(page.locator("article")).toHaveCount(1);
  await page.getByLabel("Cari mata pelajaran").fill("tidakada");
  await expect(page.locator("article")).toHaveCount(0);
  await page.goto("/kelas");
  await page.getByLabel("Jenjang").selectOption("SMP");
  await expect(page.locator("article")).toHaveCount(1);
  await page.getByLabel("Hari").selectOption("Rabu");
  await expect(page.getByText("Belum ada kelas yang sesuai")).toBeVisible();
  await page.getByLabel("Jenjang").selectOption("");
  await page.getByLabel("Hari").selectOption("");
  await page.getByLabel("Mode Belajar").selectOption("Private");
  await expect(page.locator("article")).toHaveCount(1);
  await page.goto("/tutor");
  await page.getByLabel("Jenjang").selectOption("SD");
  await expect(page.locator("article")).toHaveCount(2);
  await page.getByLabel("Mata Pelajaran").selectOption("Matematika");
  await expect(page.locator("article")).toHaveCount(1);
  await page.goto("/jadwal");
  await page.getByLabel("Hari").selectOption("Rabu");
  await expect(
    page.locator("main").getByRole("link", { name: /Excel untuk Mahasiswa/ }),
  ).toBeVisible();
  await page
    .getByRole("combobox", { name: "Mode", exact: true })
    .selectOption("Offline");
  await expect(page.getByText("Belum ada kelas yang sesuai")).toBeVisible();
  await page.goto("/harga");
  await expect(page.locator('main [aria-live="polite"]')).toContainText(
    "800.000",
  );
  await page.getByLabel("Jumlah Pertemuan").fill("4");
  await expect(page.locator('main [aria-live="polite"]')).toContainText(
    "400.000",
  );
});
test("tryouts score, navigation, explanations and retry", async ({ page }) => {
  for (const quiz of tryouts) {
    await page.goto("/tryout/" + quiz.slug);
    await page.getByRole("button", { name: "Mulai Sekarang" }).click();
    for (let i = 0; i < quiz.questions.length; i++) {
      await page
        .getByRole("radio")
        .nth(quiz.questions[i]!.correctAnswer)
        .check();
      if (i === 0) {
        await page.getByRole("button", { name: "Selanjutnya" }).click();
        await page.getByRole("button", { name: "Sebelumnya" }).click();
        await expect(
          page.getByRole("radio").nth(quiz.questions[i]!.correctAnswer),
        ).toBeChecked();
      }
      await page
        .getByRole("button", {
          name:
            i === quiz.questions.length - 1
              ? "Selesai & Lihat Nilai"
              : "Selanjutnya",
        })
        .click();
    }
    await expect(page.getByText("100%", { exact: true })).toBeVisible();
    await page.getByRole("button", { name: "Lihat Pembahasan" }).click();
    await expect(page.locator("article")).toHaveCount(5);
    await page.getByRole("button", { name: "Coba Lagi" }).click();
    await expect(page.getByText("0 terjawab")).toBeVisible();
  }
});
test("WhatsApp form and FAQ", async ({ page }) => {
  await page.goto("/kontak?level=SMA&program=Matematika");
  await page.evaluate(() => {
    window.open = () => null;
  });
  await page.getByLabel("Nama", { exact: true }).fill("Siswa Demo");
  await page.getByLabel("Nomor WhatsApp").fill("081234567890");
  await page.getByLabel("Catatan").fill("Persiapan ujian & latihan");
  await page.getByRole("button", { name: "Lanjutkan ke WhatsApp" }).click();
  const href = await page
    .getByRole("link", { name: /Pesan siap/ })
    .getAttribute("href");
  const url = new URL(href!);
  expect(url.hostname).toBe("wa.me");
  expect(url.pathname).toBe("/6281234567890");
  expect(url.searchParams.get("text")).toContain("Persiapan ujian & latihan");
  expect(url.searchParams.get("text")).toContain("Program: Matematika");
  expect(url.searchParams.get("text")).toContain("Siswa Demo");
  await page.goto("/faq");
  await page.locator("summary").first().click();
  await expect(page.locator("details").first()).toHaveAttribute("open", "");
});
test("responsive widths and mobile navigation", async ({ page }) => {
  test.setTimeout(120000);
  for (const width of [360, 390, 768, 1024, 1280, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of [
      "/",
      "/program",
      "/kelas",
      "/tutor",
      "/jadwal",
      "/harga",
      "/kontak",
      "/tryout/matematika-smp",
    ]) {
      await page.goto(route);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth,
        ),
        `${route} at ${width}`,
      ).toBe(true);
    }
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Buka menu navigasi" }).click();
  await page
    .locator("#mobile-menu")
    .getByRole("link", { name: "Program", exact: true })
    .click();
  await expect(page).toHaveURL(/\/program$/);
  await expect(page.locator("#mobile-menu")).toHaveCount(0);
  await page.goto("/");
  await page.screenshot({
    path: "tests/artifacts/home-mobile.png",
    fullPage: true,
  });
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.screenshot({
    path: "tests/artifacts/home-desktop.png",
    fullPage: true,
  });
});

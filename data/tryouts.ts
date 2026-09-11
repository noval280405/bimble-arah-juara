export interface TryoutQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}
export interface Tryout {
  id: number;
  slug: string;
  title: string;
  level: string;
  subject: string;
  duration: number;
  questions: TryoutQuestion[];
}
export const tryouts: Tryout[] = [
  {
    id: 1,
    slug: "matematika-smp",
    title: "Tryout Matematika SMP",
    level: "SMP",
    subject: "Matematika",
    duration: 10,
    questions: [
      {
        id: 1,
        question: "Hasil dari 12 × 8 adalah?",
        options: ["86", "96", "106", "116"],
        correctAnswer: 1,
        explanation: "12 × 8 = (10 × 8) + (2 × 8) = 80 + 16 = 96.",
      },
      {
        id: 2,
        question: "Jika 2x + 6 = 18, nilai x adalah?",
        options: ["4", "5", "6", "8"],
        correctAnswer: 2,
        explanation: "2x = 18 − 6 = 12, sehingga x = 6.",
      },
      {
        id: 3,
        question: "Luas persegi dengan sisi 7 cm adalah?",
        options: ["14 cm²", "28 cm²", "49 cm²", "56 cm²"],
        correctAnswer: 2,
        explanation: "Luas persegi = sisi × sisi = 7 × 7 = 49 cm².",
      },
      {
        id: 4,
        question: "Rata-rata dari 4, 6, dan 8 adalah?",
        options: ["5", "6", "7", "8"],
        correctAnswer: 1,
        explanation: "Rata-rata = (4 + 6 + 8) ÷ 3 = 6.",
      },
      {
        id: 5,
        question: "Bentuk desimal dari 3/4 adalah?",
        options: ["0,25", "0,5", "0,75", "1,25"],
        correctAnswer: 2,
        explanation: "3 dibagi 4 adalah 0,75.",
      },
    ],
  },
  {
    id: 2,
    slug: "matematika-sma",
    title: "Tryout Matematika SMA",
    level: "SMA",
    subject: "Matematika",
    duration: 10,
    questions: [
      {
        id: 1,
        question: "Akar-akar x² − 5x + 6 = 0 adalah?",
        options: ["1 dan 6", "2 dan 3", "−2 dan −3", "0 dan 5"],
        correctAnswer: 1,
        explanation: "Faktorisasi (x − 2)(x − 3) = 0 memberikan x = 2 atau 3.",
      },
      {
        id: 2,
        question: "Nilai log₁₀ 1000 adalah?",
        options: ["2", "3", "10", "100"],
        correctAnswer: 1,
        explanation: "10 pangkat 3 = 1000.",
      },
      {
        id: 3,
        question: "Turunan f(x) = x³ adalah?",
        options: ["x²", "3x", "3x²", "3x³"],
        correctAnswer: 2,
        explanation: "Aturan pangkat: turunan xⁿ adalah nxⁿ⁻¹.",
      },
      {
        id: 4,
        question: "Nilai sin 30° adalah?",
        options: ["0", "1/2", "√3/2", "1"],
        correctAnswer: 1,
        explanation: "Pada segitiga istimewa, sin 30° = 1/2.",
      },
      {
        id: 5,
        question: "Suku ke-5 barisan 3, 7, 11, … adalah?",
        options: ["15", "17", "19", "21"],
        correctAnswer: 2,
        explanation: "a₅ = 3 + (5 − 1) × 4 = 19.",
      },
    ],
  },
  {
    id: 3,
    slug: "english-basic",
    title: "English Basic Test",
    level: "Umum",
    subject: "Bahasa Inggris",
    duration: 10,
    questions: [
      {
        id: 1,
        question: "She ___ a student.",
        options: ["am", "is", "are", "be"],
        correctAnswer: 1,
        explanation: "Subjek she menggunakan to be “is”.",
      },
      {
        id: 2,
        question: "The plural form of “child” is …",
        options: ["childs", "childes", "children", "child"],
        correctAnswer: 2,
        explanation: "Children adalah bentuk jamak tidak beraturan dari child.",
      },
      {
        id: 3,
        question: "Yesterday, I ___ to school.",
        options: ["go", "goes", "went", "going"],
        correctAnswer: 2,
        explanation:
          "Yesterday menunjukkan masa lampau. Bentuk lampau go adalah went.",
      },
      {
        id: 4,
        question: "The opposite of “big” is …",
        options: ["tall", "small", "long", "wide"],
        correctAnswer: 1,
        explanation: "Big berarti besar, lawan katanya small (kecil).",
      },
      {
        id: 5,
        question: "Choose the correct sentence.",
        options: [
          "He like music.",
          "He liking music.",
          "He likes music.",
          "He are like music.",
        ],
        correctAnswer: 2,
        explanation:
          "Dalam simple present, kata kerja setelah he mendapat akhiran -s.",
      },
    ],
  },
];

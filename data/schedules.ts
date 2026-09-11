import { classes } from "./classes";
export interface Schedule {
  id: number;
  classId: number;
  day: string;
  startTime: string;
  endTime: string;
  mode: "Online" | "Offline";
  room?: string;
}
const slots = [
  [1, "Senin", "16:00", "17:30"],
  [1, "Kamis", "16:00", "17:30"],
  [2, "Selasa", "17:00", "18:30"],
  [2, "Jumat", "17:00", "18:30"],
  [3, "Rabu", "19:00", "21:00"],
  [4, "Sabtu", "09:00", "11:00"],
  [4, "Minggu", "09:00", "11:00"],
  [5, "Senin", "14:00", "15:30"],
  [5, "Kamis", "14:00", "15:30"],
  [6, "Selasa", "15:00", "16:30"],
  [6, "Jumat", "15:00", "16:30"],
  [7, "Sabtu", "13:00", "14:00"],
] as const;
export const days = [
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jumat",
  "Sabtu",
  "Minggu",
];
export const schedules: Schedule[] = slots.map(
  ([classId, day, startTime, endTime], i) => ({
    id: i + 1,
    classId,
    day,
    startTime,
    endTime,
    mode: classes.find((c) => c.id === classId)!.mode,
    room:
      classes.find((c) => c.id === classId)!.mode === "Offline"
        ? "Ruang Belajar A"
        : undefined,
  }),
);

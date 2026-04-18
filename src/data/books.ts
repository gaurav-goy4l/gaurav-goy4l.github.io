export interface BookEntry {
  title: string;
  author: string;
  coverUrl?: string;
  takeaway: string;
  rating: 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;
  dateRead: string; // YYYY-MM-DD
  tags?: string[];
}

/**
 * Add your books here.
 * They will appear on the /books page sorted by dateRead (newest first).
 */
export const books: BookEntry[] = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    takeaway:
      "Small changes compound into remarkable results. The 1% improvement mindset changed how I approach both personal goals and engineering practices. The habit stacking technique is something I use daily.",
    rating: 4.5,
    dateRead: "2024-11-05",
    tags: ["Self-Improvement", "Productivity"],
  },
];

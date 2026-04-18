export interface BlogEntry {
  title: string;
  description: string;
  url: string;
  platform: "medium" | "substack" | "other";
  date: string; // YYYY-MM-DD
  tags?: string[];
}

/**
 * Add your blog articles here.
 * They will appear on the /blogs page sorted by date (newest first).
 */
export const blogs: BlogEntry[] = [
  {
    title:
      "How I Went From Reading 0 to 30+ Books a Year (Without Forcing It)?",
    description:
      "This artcile is a deep dive into my journey of reading 0 to 30+ books a year without forcing it.",
    url: "https://medium.com/@gaurav-goyal/how-i-went-from-reading-0-to-30-books-a-year-without-forcing-it-724c67f3e4db",
    platform: "medium",
    date: "2025-04-07",
    tags: ["Books", "Reading", "Habits", "Writing"],
  },
  {
    title:
      "Testing Microservices Independently: A Deep Dive into Nock and WireMock",
    description:
      "This article is a deep dive into my journey of testing microservices independently using Nock and WireMock.",
    url: "https://medium.com/safe-engineering/testing-microservices-independently-a-deep-dive-into-nock-and-wiremock-63d9fc86cf32",
    platform: "medium",
    date: "2023-11-19",
    tags: ["Testing", "Microservices", "Mock", "Jest", "JavaScript"],
  },
  {
    title:
      "Balancing Act: Choosing Between API E2E, Service-Level Integration, and UI E2E Tests using GenAI",
    description:
      "This article is a deep dive into my journey of choosing between API E2E, Service-Level Integration, and UI E2E Tests using GenAI.",
    url: "https://medium.com/safe-engineering/balancing-act-choosing-between-api-e2e-service-level-integration-and-ui-e2e-tests-using-genai-ef821fe99361",
    platform: "medium",
    date: "2024-10-28",
    tags: [
      "Event Drive Architecture",
      "Testing Pyramid",
      "Generative AI Tools",
      "Software Testing Levels",
      "Software Engineering",
    ],
  },
  // {
  //   title: "Why Every SDET Should Learn Kubernetes",
  //   description:
  //     "Exploring the intersection of testing and container orchestration.",
  //   url: "https://YOUR_SUBSTACK.substack.com/p/example-article",
  //   platform: "substack",
  //   date: "2025-03-10",
  //   tags: ["Kubernetes", "Testing"],
  // },
];

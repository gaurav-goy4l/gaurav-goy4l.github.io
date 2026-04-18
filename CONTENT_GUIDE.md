# Content Guide

This guide explains how to add and update content on your portfolio site. All changes are made by editing files in this repo — push to `main` and the site deploys automatically.

---

## 1. Resume

**File:** `public/resume/gaurav-goyal-resume.pdf`

Drop your PDF resume into the `public/resume/` folder with the filename `gaurav-goyal-resume.pdf`. The `/resume` page will embed and link to it automatically.

To update your resume, simply replace the file with a new version.

---

## 2. Blog Articles

**File:** `src/data/blogs.ts`

Add entries to the `blogs` array. Each entry looks like:

```typescript
{
  title: "Your Article Title",
  description: "A one-line summary of the article.",
  url: "https://medium.com/@you/your-article",
  platform: "medium",       // "medium" | "substack" | "other"
  date: "2025-06-15",       // YYYY-MM-DD
  tags: ["DevOps", "CI/CD"],
}
```

Articles are automatically sorted by date (newest first) on the `/blogs` page.

---

## 3. Travel Stories

**Directory:** `content/travel/`

Travel stories are written as Markdown files with frontmatter. This is the recommended approach because:

- **Version controlled** — every edit is tracked in git
- **Easy to write** — Markdown is simple and readable
- **Supports images** — reference images from `public/` or use external URLs
- **Portable** — if you ever switch frameworks, the content moves with you
- **No database needed** — everything lives in the repo

### Creating a New Travel Story

1. Create a new `.md` file in `content/travel/`, e.g., `content/travel/backpacking-in-rajasthan.md`
2. The filename becomes the URL slug: `/travel/backpacking-in-rajasthan`
3. Use this template:

```markdown
---
title: "Backpacking Through Rajasthan"
date: "2025-12-01"
location: "Rajasthan, India"
excerpt: "A short summary that appears on the travel listing page (1-2 sentences)."
coverImage: "/travel-images/rajasthan-cover.jpg"
tags:
  - Culture
  - Solo Travel
  - India
---

## Your Story Starts Here

Write your travel story in Markdown. You can use:

- **Headers** (##, ###) to break up sections
- **Bold** and *italic* for emphasis
- **Blockquotes** for memorable quotes:

> "Not all those who wander are lost." — J.R.R. Tolkien

- **Lists** for tips and takeaways
- **Images**: ![Alt text](/travel-images/your-image.jpg)
- **Links**: [Link text](https://example.com)
- **Horizontal rules** (---) to separate sections
```

### Tips for Writing Great Travel Stories

- **Start with a hook** — Drop the reader into a moment. "The bus broke down 50km from anywhere" is more compelling than "I went to Rajasthan."
- **Use sensory details** — What did you smell, hear, taste? "Chai with cardamom from a roadside stall" beats "I had tea."
- **Include practical tips** — Other travelers will thank you. What to pack, where to stay, what to avoid.
- **End with a reflection** — What did you learn? How did the trip change you?
- **Keep it personal** — Your unique perspective is what makes it worth reading.

### Adding Images

Place images in `public/travel-images/` and reference them in your Markdown:

```markdown
![Sunset over the Thar Desert](/travel-images/thar-sunset.jpg)
```

---

## 4. Books

**File:** `src/data/books.ts`

Add entries to the `books` array. Each entry looks like:

```typescript
{
  title: "The Phoenix Project",
  author: "Gene Kim, Kevin Behr, George Spafford",
  takeaway: "Your personal takeaway — what stuck with you, what you learned, why it matters. 2-4 sentences.",
  rating: 5,               // 1 to 5
  dateRead: "2025-01-20",  // YYYY-MM-DD
  tags: ["DevOps", "Management"],
}
```

Books are automatically sorted by read date (newest first) on the `/books` page.

---

## 5. Social Links

**File:** `src/components/Footer.tsx`

Update the `href` values for GitHub, LinkedIn, and Medium in the footer component.

---

## 6. Personal Info

- **Name & tagline:** `src/app/layout.tsx` (metadata) and `src/app/page.tsx` (hero section)
- **Navigation links:** `src/components/Navbar.tsx`

---

## Local Development

```bash
npm run dev          # Start dev server at http://localhost:3000
npm run build        # Build static site to ./out
```

Changes to Markdown files and data files are picked up automatically during development (you may need to restart the dev server for new Markdown files).

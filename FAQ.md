# FAQ & Setup Guide

This document explains the decisions made while setting up this project, the exact steps taken, and how to debug common issues.

---

## Part 1: Setup Steps — What Was Done and Why

### Step 1: Initialize Next.js with TypeScript

```bash
npx create-next-app@15 . --typescript --tailwind --eslint --app --src-dir --use-npm
```

**Why Next.js?**
- File-based routing out of the box — each folder in `src/app/` becomes a route automatically
- First-class TypeScript support
- Static export (`output: 'export'`) generates plain HTML/CSS/JS that GitHub Pages can serve
- App Router (the `--app` flag) is the modern Next.js pattern with layouts, loading states, and server components built in
- Huge ecosystem — easy to add features later (MDX, image optimization, i18n, etc.)

**Why Tailwind CSS?**
- Utility-first CSS that keeps styles co-located with components
- No separate CSS files to manage
- Excellent dark mode support via `prefers-color-scheme`
- Tailwind v4 (used here) has a simpler config model and CSS-first configuration

### Step 2: Install Markdown processing libraries

```bash
npm install gray-matter remark remark-html
```

| Package | Purpose |
|---------|---------|
| `gray-matter` | Parses YAML frontmatter from Markdown files (title, date, tags, etc.) |
| `remark` | Processes Markdown into an AST (abstract syntax tree) |
| `remark-html` | Converts the Markdown AST into HTML for rendering |

These are used by `src/lib/travel.ts` to read `.md` files from `content/travel/` at build time.

### Step 3: Configure Next.js for GitHub Pages

In `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  output: "export",       // Generates static HTML into ./out
  images: {
    unoptimized: true,    // GitHub Pages can't run Next.js image optimizer
  },
};
```

- `output: "export"` tells Next.js to produce a fully static site (no Node.js server needed)
- `images.unoptimized: true` is required because the Next.js `<Image>` component normally relies on a server-side optimizer, which GitHub Pages doesn't have

### Step 4: Create the page structure

Next.js App Router uses folder-based routing:

```
src/app/
├── page.tsx                    →  /
├── resume/page.tsx             →  /resume
├── blogs/page.tsx              →  /blogs
├── travel/page.tsx             →  /travel
├── travel/[slug]/page.tsx      →  /travel/my-first-adventure  (dynamic)
└── books/page.tsx              →  /books
```

The `[slug]` folder is a **dynamic route**. The `generateStaticParams()` function inside that page tells Next.js which slugs to pre-render at build time by scanning the `content/travel/` directory.

### Step 5: Create shared layout and components

- `src/app/layout.tsx` — Root layout wrapping every page with `<Navbar />` and `<Footer />`
- `src/components/Navbar.tsx` — Sticky top nav with active-route highlighting (uses `usePathname()`)
- `src/components/Footer.tsx` — Social links in the footer

The layout uses `className="min-h-screen flex flex-col"` with `flex-1` on `<main>` so the footer always sticks to the bottom, even on short pages.

### Step 6: Create content data files

Instead of a database or CMS, content is stored directly in TypeScript files and Markdown:

| Content | Storage | File(s) |
|---------|---------|---------|
| Blog links | TypeScript array | `src/data/blogs.ts` |
| Book reviews | TypeScript array | `src/data/books.ts` |
| Travel stories | Markdown files | `content/travel/*.md` |
| Resume | PDF file | `public/resume/gaurav-goyal-resume.pdf` |

**Why TypeScript for blogs and books?** Type safety — the `BlogEntry` and `BookEntry` interfaces catch typos and missing fields at build time.

**Why Markdown for travel stories?** Long-form content is painful to write inside TypeScript strings. Markdown gives you formatting, headings, blockquotes, images, and links naturally.

### Step 7: Add `.nojekyll` file

```
public/.nojekyll
```

GitHub Pages uses Jekyll by default, which ignores files and folders starting with `_` (like `_next/`). The `.nojekyll` file disables Jekyll processing so Next.js output works correctly.

### Step 8: Set up GitHub Actions deployment

`.github/workflows/deploy.yml` does:

1. **Trigger:** Runs on every push to `main` (also manually via `workflow_dispatch`)
2. **Build job:** Checks out code → installs Node 20 → `npm ci` → `npm run build` → uploads `./out` as artifact
3. **Deploy job:** Takes the artifact and deploys it to GitHub Pages using `actions/deploy-pages@v4`

**Key permissions in the workflow:**
- `contents: read` — to check out the repo
- `pages: write` — to deploy to Pages
- `id-token: write` — required by the Pages deployment action for OIDC authentication

---

## Part 2: Architecture Decisions

### Why static export instead of a server?

GitHub Pages only serves static files. `output: "export"` pre-renders every page to HTML at build time. This means:
- Zero server costs
- Instant page loads (everything is pre-built)
- The trade-off: no server-side features like API routes, middleware, or ISR (incremental static regeneration)

### Why App Router instead of Pages Router?

Next.js has two routing systems. App Router (used here) is the modern one:
- Layouts are nested and shared automatically
- Server Components by default (smaller client bundles)
- Better metadata API (`generateMetadata`)
- `generateStaticParams` for dynamic routes replaces `getStaticPaths`

### Why `<img>` instead of Next.js `<Image>` for travel images?

The Next.js `<Image>` component requires knowing image dimensions at build time or using a loader. For travel story cover images (which come from Markdown frontmatter and could be any size or external URL), plain `<img>` with Tailwind classes is simpler and more flexible. The ESLint warning about this is expected and harmless for this use case.

### How dynamic routes work with static export

The travel story page (`src/app/travel/[slug]/page.tsx`) uses:

```typescript
export function generateStaticParams() {
  return getAllTravelSlugs().map((slug) => ({ slug }));
}
```

At build time, Next.js calls this function to discover all valid slugs (by reading filenames from `content/travel/`), then pre-renders a page for each one. If you add a new `.md` file, the next build will pick it up automatically.

---

## Part 3: Debugging Guide

### Build Failures

#### "Module not found: Can't resolve 'gray-matter'" (or remark, remark-html)

```bash
npm install gray-matter remark remark-html
```

These are runtime dependencies needed at build time. If `node_modules` is missing or corrupted:

```bash
rm -rf node_modules package-lock.json
npm install
```

#### "Error: Page ... is missing generateStaticParams()"

This happens when a dynamic route (`[slug]`) exists but doesn't export `generateStaticParams`. Every dynamic route must tell Next.js which pages to pre-render during static export. Check that `src/app/travel/[slug]/page.tsx` has the function.

#### "Error: Export encountered errors on following paths: /travel/[slug]"

Usually means a Markdown file has invalid frontmatter. Check:
- Every `.md` file in `content/travel/` starts with `---` and ends the frontmatter with `---`
- The YAML frontmatter is valid (watch for unescaped colons in titles — wrap in quotes)

#### TypeScript compilation errors

```bash
npm run lint        # Check for lint errors
npx tsc --noEmit   # Type-check without building
```

### Local Development Issues

#### "Port 3000 is already in use"

```bash
# Find and kill the process
lsof -i :3000
kill -9 <PID>

# Or run on a different port
npm run dev -- -p 3001
```

#### Changes to Markdown files not appearing

The dev server caches file reads. After adding or renaming a `.md` file in `content/travel/`, restart the dev server:

```bash
# Stop with Ctrl+C, then:
npm run dev
```

Edits to existing Markdown file *content* should hot-reload, but new files or changed filenames need a restart.

#### Styles not applying / Tailwind not working

1. Check that `postcss.config.mjs` exists and contains the Tailwind plugin
2. Check that `src/app/globals.css` starts with `@import "tailwindcss";`
3. Clear the Next.js cache: `rm -rf .next && npm run dev`

### GitHub Pages Deployment Issues

#### Site not deploying after push

1. Go to your repo on GitHub → **Actions** tab → check if the workflow ran
2. If the workflow hasn't run, verify `.github/workflows/deploy.yml` exists on the `main` branch
3. If it ran but failed, click into the run to see the error logs

#### 404 on the live site

1. **Check Pages source:** GitHub repo → Settings → Pages → Source must be set to **"GitHub Actions"** (not "Deploy from a branch")
2. **Check `.nojekyll`:** The file `public/.nojekyll` must exist. Without it, GitHub's Jekyll processor strips the `_next/` folder
3. **Check the build output:** Run `npm run build` locally and inspect the `out/` folder. Every route should have an `index.html`

#### 404 on subpages (e.g., /travel/my-story works but /blogs doesn't)

This usually means the static export didn't generate that page. Run `npm run build` and check the terminal output — it lists all generated routes. If a route is missing, its `page.tsx` may have an error.

#### CSS/JS not loading (page looks broken)

If you're using a **custom domain**, no extra config is needed. If you're deploying to a subpath (e.g., `username.github.io/repo-name`), you'd need to set `basePath` in `next.config.ts`. For this repo (`gaurav-goy4l.github.io`), it deploys to the root, so no `basePath` is needed.

#### Resume PDF not showing

1. Confirm the file is at `public/resume/gaurav-goyal-resume.pdf`
2. Files in `public/` are served from the root: the URL becomes `/resume/gaurav-goyal-resume.pdf`
3. Some browsers block embedded PDFs. The page includes a fallback "open in new tab" link for this reason

### Common Mistakes

#### Adding a travel story but forgetting frontmatter

Every Markdown file in `content/travel/` **must** have frontmatter at the top:

```markdown
---
title: "Your Title"
date: "2025-01-01"
location: "Place"
excerpt: "Summary"
---
```

Without it, `gray-matter` will still parse the file but the page will have blank metadata.

#### Date format issues

Always use `YYYY-MM-DD` format (e.g., `"2025-03-15"`) for dates in both TypeScript data files and Markdown frontmatter. Other formats may parse inconsistently across browsers and locales.

#### Forgetting to quote YAML strings with special characters

In Markdown frontmatter, if your title contains a colon, wrap it in quotes:

```yaml
# Bad — YAML thinks everything after the colon is a value
title: My Trip: A Story

# Good
title: "My Trip: A Story"
```

---

## Part 4: Useful Commands Reference

| Command | What It Does |
|---------|-------------|
| `npm run dev` | Start local dev server at `http://localhost:3000` |
| `npm run build` | Build the static site to `./out` |
| `npm run lint` | Run ESLint on the codebase |
| `npx tsc --noEmit` | Type-check without producing output |
| `rm -rf .next out && npm run build` | Clean build (clears all caches) |
| `ls out/` | Inspect build output to verify generated pages |

---

## Part 5: Extending the Site

### Adding a new page/route

1. Create a folder in `src/app/`, e.g., `src/app/projects/`
2. Add a `page.tsx` inside it
3. (Optional) Add a link in `src/components/Navbar.tsx`

### Adding a custom domain

1. Add a `CNAME` file in `public/` with your domain: `echo "yourdomain.com" > public/CNAME`
2. Configure DNS with your domain provider (A records or CNAME pointing to GitHub Pages)
3. In GitHub repo Settings → Pages → Custom domain, enter your domain

### Switching to MDX (Markdown + JSX)

If you want to embed React components inside travel stories (interactive maps, image galleries, etc.), consider migrating to MDX:

```bash
npm install @next/mdx @mdx-js/loader @mdx-js/react
```

This would let you write:

```mdx
import ImageGallery from '@/components/ImageGallery'

## My Trip

Here are the photos:

<ImageGallery images={["/img1.jpg", "/img2.jpg"]} />
```

### Adding analytics

For privacy-friendly analytics, consider [Plausible](https://plausible.io) or [Umami](https://umami.is). Add the script tag to `src/app/layout.tsx` inside `<head>` using Next.js `<Script>` component.

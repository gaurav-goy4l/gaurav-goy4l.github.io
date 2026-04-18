# gaurav-goy4l.github.io

Personal portfolio website for **Gaurav Goyal** — SDET, DevOps enthusiast, traveler, and avid reader.

Built with [Next.js](https://nextjs.org/) (TypeScript), styled with the dark noir aesthetic from [Google Stitch](https://stitch.withgoogle.com/), and deployed via [GitHub Pages](https://pages.github.com/).

## Live Site

[https://gaurav-goy4l.github.io](https://gaurav-goy4l.github.io)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, about, experience timeline, explore cards, CTA |
| `/resume` | Career timeline (Safe Security), technical skills, PDF embed & download |
| `/blogs` | Editorial layout linking to Medium articles |
| `/lifestyle` | Travel gallery + reading list (combines travel & books) |
| `/travel` | Full travel stories index |
| `/travel/[slug]` | Individual travel story page |
| `/books` | Full books list with ratings and takeaways |

## Design

The UI is built from templates generated with [Google Stitch](https://stitch.withgoogle.com/) — a dark, editorial design system featuring:

- **Fonts:** Epilogue (headings) + Manrope (body)
- **Colors:** Dark noir palette — `#131313` background, `#cdbdff` primary, `#7c4dff` accent, `#ffb688` tertiary
- **Icons:** Material Symbols Outlined
- **Layout:** Full-bleed hero sections, center-aligned timelines, bento grids, asymmetric layouts

## Tech Stack

- **Framework:** Next.js 16 (App Router, static export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Content:** Markdown files (travel stories), TypeScript data files (blogs, books)
- **Deployment:** GitHub Actions → GitHub Pages

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production (outputs to ./out)
npm run build
```

## How to Add Content

See [CONTENT_GUIDE.md](./CONTENT_GUIDE.md) for detailed instructions on:

- Adding your resume PDF
- Adding blog article links
- Writing travel stories
- Adding book reviews
- Updating social links

## Project Structure

```
├── .github/workflows/deploy.yml   # CI/CD pipeline
├── content/travel/                 # Travel stories (Markdown)
├── public/
│   ├── gaurav.jpg                 # Hero portrait image
│   └── resume/                    # Resume PDF file
├── src/
│   ├── app/                       # Next.js App Router pages
│   │   ├── blogs/
│   │   ├── books/
│   │   ├── lifestyle/
│   │   ├── resume/
│   │   └── travel/
│   ├── components/                # Navbar & Footer
│   ├── data/                      # Blog & book data files
│   └── lib/                       # Utilities (Markdown parser)
├── CONTENT_GUIDE.md               # How to update content
├── next.config.ts
└── package.json
```

## Deployment

Deployment is automatic — push to `main` and GitHub Actions will build and deploy the site.

**One-time setup required:** Go to your GitHub repo → Settings → Pages → Source → select "GitHub Actions".

## License

MIT

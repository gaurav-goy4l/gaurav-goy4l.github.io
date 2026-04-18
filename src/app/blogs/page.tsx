import type { Metadata } from "next";
import { blogs } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Blogs",
};

const platformLabel: Record<string, string> = {
  medium: "Medium",
  substack: "Substack",
  other: "Blog",
};

export default function BlogsPage() {
  const sorted = [...blogs].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const featured = sorted[0];
  const rest = sorted.slice(1);

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
      {/* Editorial Header */}
      <header className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24 items-end">
        <div className="md:col-span-8">
          <span className="text-tertiary font-label font-bold uppercase tracking-[0.2em] text-xs block mb-4">
            Essays &amp; Perspectives
          </span>
          <h1 className="font-headline font-black text-6xl md:text-8xl tracking-[-0.05em] leading-[0.9] text-foreground">
            THE CURATED <br />
            DIALOGUE.
          </h1>
        </div>
        <div className="md:col-span-4 md:pl-8">
          <p className="text-muted text-lg leading-relaxed mb-6">
            Articles on testing, DevOps, and software engineering. Published on
            Medium and beyond.
          </p>
          <div className="w-16 h-1 bg-primary" />
        </div>
      </header>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Featured Post */}
        {featured && (
          <a
            href={featured.url}
            target="_blank"
            rel="noopener noreferrer"
            className="md:col-span-12 group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-xl bg-linear-to-br from-primary-container/20 via-surface-container-low to-surface-container p-12 md:p-16">
              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="bg-primary-container/20 backdrop-blur-md text-primary px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest">
                    {platformLabel[featured.platform] ?? featured.platform}
                  </span>
                  <span className="text-tertiary font-label font-bold text-xs uppercase tracking-widest">
                    {new Date(featured.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                    })}
                  </span>
                </div>
                <h2 className="font-headline font-bold text-3xl md:text-5xl tracking-tight text-foreground group-hover:text-primary transition-colors mb-6">
                  {featured.title}
                </h2>
                <p className="text-muted max-w-2xl text-lg">
                  {featured.description}
                </p>
                {featured.tags && (
                  <div className="flex flex-wrap gap-2 mt-6">
                    {featured.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-surface-container-highest text-[10px] font-bold uppercase tracking-widest text-muted rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] bg-primary/5 blur-[100px] rounded-full" />
            </div>
          </a>
        )}

        {/* Remaining Posts */}
        {rest.map((blog) => (
          <a
            key={blog.url}
            href={blog.url}
            target="_blank"
            rel="noopener noreferrer"
            className="md:col-span-6 group cursor-pointer"
          >
            <div className="bg-surface-container-low rounded-xl p-8 h-full hover:bg-surface-container transition-colors duration-300">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-primary font-label font-bold uppercase tracking-widest text-[10px]">
                  {platformLabel[blog.platform] ?? blog.platform}
                </span>
                <span className="text-muted text-[10px] uppercase tracking-widest">
                  {new Date(blog.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                  })}
                </span>
              </div>
              <h3 className="font-headline font-bold text-2xl tracking-tight text-foreground mb-3 group-hover:text-primary transition-colors">
                {blog.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-4">
                {blog.description}
              </p>
              {blog.tags && (
                <div className="flex flex-wrap gap-2">
                  {blog.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-surface-container-highest text-[10px] font-bold uppercase tracking-widest text-muted rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </a>
        ))}
      </div>

      {sorted.length === 0 && (
        <div className="bg-surface-container-low rounded-xl p-16 text-center">
          <p className="text-muted">No blog posts yet. Check back soon!</p>
        </div>
      )}
    </div>
  );
}

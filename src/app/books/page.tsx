import type { Metadata } from "next";
import { books } from "@/data/books";

export const metadata: Metadata = {
  title: "Books",
};

function Stars({ rating }: { rating: number }) {
  return (
    <span
      className="inline-flex items-center gap-0.5 text-primary"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className="material-symbols-outlined text-lg"
          style={{
            fontVariationSettings:
              i < Math.floor(rating) ? '"FILL" 1' : '"FILL" 0',
          }}
        >
          star
        </span>
      ))}
    </span>
  );
}

export default function BooksPage() {
  const sorted = [...books].sort(
    (a, b) => new Date(b.dateRead).getTime() - new Date(a.dateRead).getTime()
  );

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
      <header className="mb-16">
        <span className="text-tertiary font-label text-sm uppercase tracking-[0.2em] mb-4 block">
          Library
        </span>
        <h1 className="text-6xl md:text-8xl font-headline font-black tracking-[-0.04em] leading-[0.9] text-foreground mb-6">
          READING <br />
          LIST.
        </h1>
        <p className="text-muted text-lg max-w-xl leading-relaxed">
          Books I&apos;ve read and the takeaways that stuck with me.
        </p>
      </header>

      <div className="space-y-12">
        {sorted.map((book, index) => (
          <article
            key={book.title}
            className={`flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 group p-8 bg-surface-container-low rounded-xl hover:bg-surface-container transition-colors duration-300`}
          >
            <div className="flex flex-col justify-center flex-1">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h2 className="text-2xl font-headline font-bold text-foreground group-hover:text-primary transition-colors">
                    {book.title}
                  </h2>
                  <p className="text-sm text-muted mt-1 italic">
                    by {book.author}
                  </p>
                </div>
                <Stars rating={book.rating} />
              </div>
              <p className="text-muted leading-relaxed mb-6">{book.takeaway}</p>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs text-muted font-label uppercase tracking-widest">
                  Read{" "}
                  {new Date(book.dateRead).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                  })}
                </span>
                {book.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="rounded px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest bg-primary-container/20 text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {sorted.length === 0 && (
        <div className="bg-surface-container-low rounded-xl p-16 text-center">
          <p className="text-muted">No books yet. Check back soon!</p>
        </div>
      )}
    </div>
  );
}

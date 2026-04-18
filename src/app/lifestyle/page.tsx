import type { Metadata } from "next";
import Link from "next/link";
import { getAllTravelStories } from "@/lib/travel";
import { books } from "@/data/books";

export const metadata: Metadata = {
  title: "Lifestyle",
};

export default function LifestylePage() {
  const travelStories = getAllTravelStories();
  const sortedBooks = [...books].sort(
    (a, b) => new Date(b.dateRead).getTime() - new Date(a.dateRead).getTime()
  );

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
      {/* Hero Section */}
      <header className="mb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <span className="text-tertiary font-label text-sm uppercase tracking-[0.2em] mb-4 block">
              Collection
            </span>
            <h1 className="text-6xl md:text-9xl font-headline font-black tracking-[-0.04em] leading-[0.9] text-foreground">
              LIFESTYLE <br />
              ARCHIVE
            </h1>
          </div>
          <div className="md:col-span-4 pb-2">
            <p className="text-muted text-lg leading-relaxed">
              A curated selection of transient moments and permanent thoughts.
              Exploring the intersection of travel and literary depth.
            </p>
          </div>
        </div>
      </header>

      {/* Travel Gallery */}
      <section className="mb-40">
        <div className="flex justify-between items-baseline mb-12">
          <h2 className="text-4xl font-headline font-bold tracking-tight">
            Travel Log
          </h2>
          <div className="h-px grow mx-8 bg-surface-container-highest" />
          <Link
            href="/travel"
            className="text-tertiary font-label text-xs uppercase tracking-widest hover:text-primary transition-colors"
          >
            View All
          </Link>
        </div>

        {travelStories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {travelStories.map((story) => (
              <Link
                key={story.slug}
                href={`/travel/${story.slug}`}
                className="group relative overflow-hidden rounded-xl bg-surface-container-low aspect-4/3"
              >
                {story.coverImage ? (
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    src={story.coverImage}
                    alt={story.title}
                  />
                ) : (
                  <div className="w-full h-full bg-linear-to-br from-primary-container/20 to-surface-container" />
                )}
                <div className="absolute bottom-0 left-0 p-6 w-full bg-linear-to-t from-background/90 to-transparent">
                  <span className="text-primary font-label text-xs uppercase tracking-widest">
                    {story.location}
                  </span>
                  <h3 className="text-xl font-headline font-bold mt-2 text-foreground">
                    {story.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[800px]">
            <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-xl bg-surface-container-low group">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                alt="Venice canals at dawn"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGlau3LGJC9YHvlSlt49IBsbb2KJIoo_OmlEtp47eLdc5WAbkahf1PECTH5j_XdAlVWBNgPIsAzX1ISAsIaOGZ5fXPK40xBgF-qAHEQshlqxpJSR7f66vTlcO07NLuiECMaK9A8dvxWQaVfqwWma4BBEx7fGxX76FPTeF-sxsJhi3XJSxAF-sFgpjY9D-s90bKcIag1Pa9d-Q3UAvwffEwve5k060Va6BNJpFuf2jvHDkjFiosYmADYi_UFrwpCP55DN5yd4A7dZA"
              />
              <div className="absolute bottom-0 left-0 p-8 w-full bg-linear-to-t from-background/90 to-transparent">
                <span className="text-primary font-label text-xs uppercase tracking-widest">
                  Venice, Italy
                </span>
                <h3 className="text-2xl font-headline font-bold mt-2">
                  The Silent Wake
                </h3>
              </div>
            </div>
            <div className="md:col-span-1 md:row-span-2 relative overflow-hidden rounded-xl bg-surface-container-low group">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                alt="Taj Mahal at sunset"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-LBSfKkP5DqZtFzIm4lJfLvbA0jQeZWnL54mVWdoLi3Ay5fabBjOOAygm1FkH5nkhPWSp5uuyQOREbkOE_HpknCB6BM3Opb0Kxax7LoH3HoYhSAwbU7Va5b5V1anPCGvJvtBre1CnT_tkZVTljqlWB3dCJrM2dok-6aWIqSuJvCGjHkaSqCk46VhPdLg1Z1HxMpKdQzSn46Ezt_kgxZiLHRkLPvCZXsBkKn9QAkAHOGQEXEWBeGaen6NzEFOHWB3JLknSCtRGJjA"
              />
              <div className="absolute bottom-0 left-0 p-6 w-full bg-linear-to-t from-background/90 to-transparent">
                <span className="text-primary font-label text-xs uppercase tracking-widest">
                  Agra, India
                </span>
                <h3 className="text-xl font-headline font-bold mt-2">
                  Symmetry in Stone
                </h3>
              </div>
            </div>
            <div className="md:col-span-1 md:row-span-1 relative overflow-hidden rounded-xl bg-surface-container-low group">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                alt="Yosemite valley"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1W4VQljFlOOfWrYULE8HOltEPwUrsu2oNkg-WTS3DQAxjN_TSeJN_wZxkSJse4FPDp7U6uDHNipL0GYq4xZopr1WQrdoS8SNymZ3l9PRpW4zZSWswOW7dKKilpVPPZyT3nrTjXrzyZT5MZ1dKhcEetxTfKdcFtld9m11ulRxgXw6YGLQEtSODAAyyhaUbKoCT_r0OZOqzR8UxgDeNiTyqCs4O85C6e06hYYxMHTUgfs-HoJJoH6VmZTgrL_qtwwjinsMX48NXQ54"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-foreground font-label text-xs uppercase tracking-[0.3em]">
                  View Gallery
                </span>
              </div>
            </div>
            <div className="md:col-span-1 md:row-span-1 relative overflow-hidden rounded-xl bg-surface-container-low group">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                alt="Japanese architecture in autumn"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCph35vTThpKCy74HYk5muMrbLqwHuHXn-oR9Bfj00etffsdxhNCBvqOsF50GKthQBDoH6jXmVuBxGKJ862nSkXmXSSXVff1PCNxNPYUvCR1eXbEs4H1T-9fdrWE4RoeRtXpl1L_3ZV8k4OQoBzY6EwisJ9SSGHAvd5Nmcc6iET2jscpgKKMvMDvtXxpwv-Nn8PzyIyHvPuhJGyauYnrTiRfY1tNt_IH69BqNqPvE85nvDodlckw7dZCVK_Bted9frXS22Kk9gLNlQ"
              />
              <div className="absolute bottom-0 left-0 p-6 w-full bg-linear-to-t from-background/90 to-transparent">
                <span className="text-primary font-label text-xs uppercase tracking-widest">
                  Kyoto, Japan
                </span>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Bookshelf Section */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4 sticky top-32 h-fit">
          <h2 className="text-5xl font-headline font-black tracking-tighter mb-6">
            READING <br />
            LIST
          </h2>
          <p className="text-muted mb-8">
            An ongoing documentation of the ideas, narratives, and theories
            currently shaping my perspective.
          </p>
          <Link
            href="/books"
            className="inline-block text-primary font-label text-xs uppercase tracking-widest hover:underline underline-offset-4"
          >
            View All Books &rarr;
          </Link>
        </div>
        <div className="md:col-span-8 space-y-16">
          {sortedBooks.length > 0 ? (
            sortedBooks.slice(0, 4).map((book, index) => (
              <article
                key={book.title}
                className={`flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 group`}
              >
                <div className="md:w-2/3 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-2 py-1 bg-surface-container-highest text-primary font-label text-[10px] uppercase rounded">
                      {book.tags?.[0] ?? "Book"}
                    </span>
                    <span className="text-muted font-label text-[10px] uppercase">
                      Read:{" "}
                      {new Date(book.dateRead).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                      })}
                    </span>
                  </div>
                  <h3 className="text-3xl font-headline font-bold mb-2 group-hover:text-primary transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-muted text-sm italic mb-4">
                    by {book.author}
                  </p>
                  <p className="text-muted leading-relaxed mb-6">
                    {book.takeaway}
                  </p>
                  <div className="flex gap-1 text-primary">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span
                        key={i}
                        className="material-symbols-outlined text-lg"
                        style={{
                          fontVariationSettings:
                            i < Math.floor(book.rating)
                              ? '"FILL" 1'
                              : '"FILL" 0',
                        }}
                      >
                        star
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="bg-surface-container-low rounded-xl p-12 text-center">
              <p className="text-muted">
                No books yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { getAllTravelStories } from "@/lib/travel";

export const metadata: Metadata = {
  title: "Travel",
};

export default function TravelPage() {
  const stories = getAllTravelStories();

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
      <header className="mb-16">
        <span className="text-tertiary font-label text-sm uppercase tracking-[0.2em] mb-4 block">
          Global Exploration
        </span>
        <h1 className="text-6xl md:text-8xl font-headline font-black tracking-[-0.04em] leading-[0.9] text-foreground mb-6">
          TRAVEL <br />
          STORIES.
        </h1>
        <p className="text-muted text-lg max-w-xl leading-relaxed">
          Places I&apos;ve been, things I&apos;ve seen, and the experiences that
          shaped me.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story) => (
          <Link
            key={story.slug}
            href={`/travel/${story.slug}`}
            className="group relative overflow-hidden rounded-xl bg-surface-container-low"
          >
            {story.coverImage ? (
              <div className="aspect-4/3 overflow-hidden">
                <img
                  src={story.coverImage}
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
              </div>
            ) : (
              <div className="aspect-4/3 bg-linear-to-br from-primary-container/20 to-surface-container" />
            )}
            <div className="p-6">
              <span className="text-primary font-label text-xs uppercase tracking-widest block mb-2">
                {story.location}
              </span>
              <h2 className="text-xl font-headline font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                {story.title}
              </h2>
              <p className="text-sm text-muted line-clamp-2">{story.excerpt}</p>
              <p className="text-xs text-muted/60 mt-4 font-label uppercase tracking-widest">
                {new Date(story.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {stories.length === 0 && (
        <div className="bg-surface-container-low rounded-xl p-16 text-center">
          <p className="text-muted">
            No travel stories yet. Adventures coming soon!
          </p>
        </div>
      )}
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { getAllTravelSlugs, getTravelStory } from "@/lib/travel";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllTravelSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = await getTravelStory(slug);
  return {
    title: story.title,
    description: story.excerpt,
  };
}

export default async function TravelStoryPage({ params }: PageProps) {
  const { slug } = await params;
  const story = await getTravelStory(slug);

  return (
    <article className="pt-32 pb-24 px-6 md:px-12 mx-auto max-w-4xl">
      <Link
        href="/travel"
        className="text-sm text-primary hover:underline underline-offset-4 inline-flex items-center gap-1.5 mb-8 font-label uppercase tracking-widest"
      >
        <span className="material-symbols-outlined text-sm">arrow_back</span>
        Back to Travel
      </Link>

      <header className="mb-10">
        <span className="text-primary font-label text-xs uppercase tracking-widest block mb-3">
          {story.location}
        </span>
        <h1 className="text-4xl md:text-5xl font-headline font-black tracking-tight mb-4 text-foreground">
          {story.title}
        </h1>
        <p className="text-muted font-label text-sm uppercase tracking-widest">
          {new Date(story.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        {story.tags && story.tags.length > 0 && (
          <div className="flex gap-2 mt-4">
            {story.tags.map((tag) => (
              <span
                key={tag}
                className="rounded px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest bg-primary-container/20 text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {story.coverImage && (
        <img
          src={story.coverImage}
          alt={story.title}
          className="w-full rounded-xl mb-10"
        />
      )}

      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: story.contentHtml }}
      />
    </article>
  );
}

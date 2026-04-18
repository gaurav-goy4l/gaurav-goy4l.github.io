import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const travelDir = path.join(process.cwd(), "content", "travel");

export interface TravelStoryMeta {
  slug: string;
  title: string;
  date: string;
  location: string;
  excerpt: string;
  coverImage?: string;
  tags?: string[];
}

export interface TravelStory extends TravelStoryMeta {
  contentHtml: string;
}

export function getAllTravelSlugs(): string[] {
  if (!fs.existsSync(travelDir)) return [];
  return fs
    .readdirSync(travelDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getAllTravelStories(): TravelStoryMeta[] {
  const slugs = getAllTravelSlugs();
  return slugs
    .map((slug) => getTravelStoryMeta(slug))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getTravelStoryMeta(slug: string): TravelStoryMeta {
  const filePath = path.join(travelDir, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(fileContent);

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    location: data.location ?? "",
    excerpt: data.excerpt ?? "",
    coverImage: data.coverImage,
    tags: data.tags,
  };
}

export async function getTravelStory(slug: string): Promise<TravelStory> {
  const filePath = path.join(travelDir, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const result = await remark().use(html).process(content);

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    location: data.location ?? "",
    excerpt: data.excerpt ?? "",
    coverImage: data.coverImage,
    tags: data.tags,
    contentHtml: result.toString(),
  };
}

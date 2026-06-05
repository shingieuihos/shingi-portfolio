import { ImageResponse } from "next/og";
import { getPost, publishedPosts } from "@/lib/blog";
import { OgCard, ogContentType, ogSize } from "@/lib/og";

export const dynamic = "force-static";
export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Field note by Shingi Mudyirwa";

// Required for static export: pre-render one image per post.
export function generateStaticParams() {
  return publishedPosts().map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  const title = post?.title ?? "Field Notes";
  const eyebrow = post?.category ?? "Field notes";
  const meta = post ? `${post.dateLabel} · ${post.readingMinutes} min read` : "shingi.tech";

  return new ImageResponse(<OgCard eyebrow={eyebrow} title={title} meta={meta} />, {
    ...size,
  });
}

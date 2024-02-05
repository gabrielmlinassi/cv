import { format } from "date-fns";

import { BackButton } from "@/components/buttons/BackButton";
import { getPostBySlug } from "@/lib/mdx";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { meta } = await getPostBySlug(params.slug);
  return { title: (meta as any).title };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { meta, content } = await getPostBySlug(params.slug);
  if (!content) throw new Error(`Post not found for slug: ${params.slug}`);

  return (
    <div className="container mt-8">
      <BackButton href="/blog">← Back to blog posts</BackButton>
      <article>
        <div className="mb-8 text-center">
          <h1 className="mt-8 text-2xl font-bold dark:text-[#c9a898]">{meta.title}</h1>
          <p className="mt-3">{meta.summary}</p>
          <time className="mt-3 text-sm dark:text-gray-3">
            {format(meta.date, "LLLL d, yyyy")}
          </time>
        </div>
        <div>{content}</div>
      </article>
    </div>
  );
}

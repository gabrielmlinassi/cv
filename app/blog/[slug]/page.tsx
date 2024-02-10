import { format } from "date-fns";

import { BackButton } from "@/components/buttons/BackButton";
import { getPostBySlug } from "@/lib/posts";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { frontmatter } = await getPostBySlug(params.slug);
  return { title: frontmatter.title };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { frontmatter, content } = await getPostBySlug(params.slug);
  if (!content) throw new Error(`Post not found for slug: ${params.slug}`);

  return (
    <div className="container mt-8">
      <BackButton href="/blog">← Back to blog posts</BackButton>
      <article className="mdx">
        <div className="mb-8 text-center">
          <h1 className="mt-8 text-2xl font-bold dark:text-[#c9a898]">
            {frontmatter.title}
          </h1>
          <p className="mt-3">{frontmatter.description}</p>
          <time className="mt-3 text-sm dark:text-gray-3">
            {format(frontmatter.publishedAt, "LLLL d, yyyy")}
          </time>
        </div>
        <div className="prose prose-fuchsia text-white prose-figcaption:text-white prose-pre:rounded-none">
          {content}
        </div>
      </article>
    </div>
  );
}

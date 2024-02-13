import { format } from "date-fns";

import { BackButton } from "@/components/buttons/BackButton";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import React from "react";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { frontmatter } = await getPostBySlug(params.slug);
  return { title: frontmatter.title };
}

export async function generateStaticParams() {
  const allPosts = await getAllPosts();

  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { frontmatter, content } = await getPostBySlug(params.slug);
  if (!content) throw new Error(`Post not found for slug: ${params.slug}`);

  return (
    <div className="container mt-8">
      <div className="space-y-3">
        <BackButton href="/blog">← Back to blog posts</BackButton>
        <h1 className="text-2xl font-bold dark:text-[#c9a898]">{frontmatter.title}</h1>
        <p>{frontmatter.description}</p>
        <p>
          <time className="mt-3 text-sm dark:text-gray-3">
            {format(frontmatter.publishedAt, "LLLL d, yyyy")}
          </time>
        </p>
      </div>
      <article className="mdx mt-12">
        <div className="flex flex-col gap-3">{content}</div>
      </article>
    </div>
  );
}

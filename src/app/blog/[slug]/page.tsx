import { getMDXComponent } from "next-contentlayer/hooks";

import { allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { BackButton } from "@/components/buttons/BackButton";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  const Content = getMDXComponent(post.body.code);

  return (
    <div className="container mt-8">
      <BackButton href="/blog">← Back to blog posts</BackButton>
      <article>
        <div className="mb-8 text-center">
          <h1 className="mt-8 text-2xl font-bold dark:text-[#c9a898]">{post.title}</h1>
          <p className="mt-3">{post?.summary}</p>
          <time dateTime={post.date} className="mt-3 text-sm dark:text-gray-3">
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
        </div>
        <Content />
      </article>
    </div>
  );
}

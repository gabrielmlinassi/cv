import Link from "next/link";
import { format } from "date-fns";

import { Heading } from "@/components/typography/Heading";
import { getAllPosts } from "@/lib/posts";

export const Posts = async () => {
  const posts = await getAllPosts();
  return (
    <section className="container mt-5">
      <Heading level="h2">Latest Posts</Heading>
      <ol>
        {posts.map((post) => (
          <li
            key={post.frontmatter.title}
            className="border-b p-[6px] dark:border-[#2c2c2c] border-[#dddddd]"
          >
            <Link href={`/blog/${post.slug}`}>
              <div className="flex flex-col md:flex-row justify-between md:items-center group">
                <p className="font-semibold antialiased text-base text-[#666666] md:text-[17px] dark:group-hover:text-white group-hover:underline group-hover:underline-offset-2 group-hover:decoration-2">
                  {post.frontmatter.description}
                </p>
                <time className="font-mono text-base text-[#666666] dark:text-[#5eddac] font-light">
                  {format(post.frontmatter.publishedAt, "MMMM yyyy")}
                </time>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
};

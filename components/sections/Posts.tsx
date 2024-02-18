import Link from "next/link";
import { format } from "date-fns";

import { getAllPosts } from "@/lib/posts";
import Image from "next/image";

export const Posts = async () => {
  const posts = await getAllPosts();
  return (
    <section className="container">
      <h2 className="text-2xl font-bold text-transparent bg-clip-text from-[#facc15] to-[#fb923c] bg-gradient-to-r inline-block">
        Latest posts
      </h2>
      <ol className="flex flex-col gap-2 mt-7">
        {posts.map((post) => (
          <li key={post.frontmatter.title}>
            <Link
              href={`/blog/${post.slug}`}
              className="flex gap-3 items-start group p-3 -mx-3"
            >
              <Image
                src={post.frontmatter.poster}
                alt=""
                width={100}
                height={70}
                className="rounded object-cover mt-1"
              />
              <div className="flex flex-col gap-1">
                <p className="font-medium dark:text-white group-hover:underline decoration-2 underline-offset-2">
                  {post.frontmatter.title}
                </p>
                <p className="text-sm dark:text-gray-300 text-gray-600">
                  {post.frontmatter.description}
                </p>
                <p className="text-sm dark:text-gray-400 text-gray-600">
                  {format(post.frontmatter.publishedAt, "MMMM yyyy")}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
};

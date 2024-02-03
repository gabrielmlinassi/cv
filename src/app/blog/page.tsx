import { Post, allPosts } from "contentlayer/generated";
import { groupPosts, sortPosts } from "@/lib/posts-utils";
import { Heading } from "@/components/typography/Heading";
import { PostCard } from "@/components/Post";

export default function Blog() {
  const groupedPosts = groupPosts(sortPosts(allPosts));

  return (
    <div>
      <section className="container mt-8">
        <Heading level="h1">Blog</Heading>
        <ol className="mt-12 space-y-8">
          {groupedPosts.map(([year, posts]) => (
            <li key={year}>
              <div className="flex items-baseline gap-2">
                <span className="shrink-0 font-mono font-bold text-xl">{year}</span>
                <hr className="grow border-gray-3 dark:border-gray-7" />
              </div>
              <ol className="space-y-1 mt-6">
                {(posts as unknown as Post[]).map((post, idx) => (
                  <li key={idx}>
                    <PostCard post={post} />
                  </li>
                ))}
              </ol>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}

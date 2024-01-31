import { PostCard } from "@/components/Post";
import { Heading } from "@/components/typography/Heading";
import { Post } from "@/domain/types";
import { groupBy } from "@/lib";
import { useMemo } from "react";

const posts: Post[] = [
  {
    title: "Improving the User Experience of Autoplay Videos",
    slug: "autoplay-videos-ux",
    description: `The power of a single parameter to achieve a seamless result`,
    createdAt: "01/01/2023",
    image: {
      src: "/posts/post1.avif",
      alt: "",
    },
  },
  {
    title: "Adding reading time to Astro without the hassle",
    slug: "astro-reading-time",
    description: `An alternative way to calculate reading time without full blog post rendering`,
    createdAt: "01/04/2023",
    image: {
      src: "/posts/post2.avif",
      alt: "",
    },
  },
  {
    title: "A fresh start",
    slug: "/a-fresh-start",
    description: `With the new year, I think it's the perfect time to make this website fresh again`,
    createdAt: "01/02/2020",
    image: {
      src: "/posts/post3.avif",
      alt: "",
    },
  },
];

function sortPosts(postA: Post, postB: Post) {
  return new Date(postB.createdAt).getTime() - new Date(postA.createdAt).getTime();
}

function groupPosts(post: Post) {
  return new Date(post.createdAt).getFullYear();
}

export default function Blog() {
  const groupedPosts = useMemo(() => {
    return [...groupBy(posts.sort(sortPosts), groupPosts).entries()];
  }, []);

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

import Link from "next/link";
import dayjs from "dayjs";

import { Heading } from "../typography/Heading";

const posts = [
  {
    title: "Using WebSockets in a Redux Application",
    date: "01-02-2024",
    url: "/websockets-in-redux",
  },
  {
    title: "Understanding the GraphQL Type System",
    date: "01-02-2024",
    url: "/graphql-type-system",
  },
  {
    title: "An Ode to Animorphs",
    date: "01-02-2024",
    url: "/animorphs",
  },
];

export const Posts = () => {
  return (
    <section className="container mt-5">
      <Heading level="h2">Latest Posts</Heading>
      <ol>
        {posts.map((post) => (
          <li
            key={post.title}
            className="border-b p-[6px] dark:border-[#2c2c2c] border-[#dddddd]"
          >
            <Link href={post.url}>
              <div className="flex flex-col md:flex-row justify-between md:items-center group">
                <p className="font-semibold antialiased text-base text-[#666666] md:text-[17px] dark:group-hover:text-white group-hover:underline group-hover:underline-offset-2 group-hover:decoration-2">
                  {post.title}
                </p>
                <time className="font-mono text-base text-[#666666] dark:text-[#5eddac] font-light">
                  {dayjs(post.date).format("MMMM YYYY")}
                </time>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
};

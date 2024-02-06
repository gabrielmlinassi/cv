import path from "node:path";
import fs from "node:fs";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";

import { H1, H2, H3 } from "@/components/mdx-components";

const rootDir = path.join(process.cwd(), "content");
const postsDir = path.join(rootDir, "posts");

export async function getPostBySlug(slug: string) {
  const realSlug = slug.replace(".mdx", "");
  const filePath = path.join(postsDir, `${realSlug}.mdx`);

  const fileContent = fs.readFileSync(filePath, "utf-8");

  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    options: {
      parseFrontmatter: true,
      mdxOptions: { rehypePlugins: [rehypeSlug] },
    },
    components: {
      h1: H1,
      h2: H2,
      h3: H3,
    },
  });

  return {
    meta: {
      ...frontmatter,
      slug: realSlug,
    } as Record<string, string>,
    content,
  };
}

export async function getAllPostsMeta() {
  const files = fs.readdirSync(postsDir);

  const posts = [];

  for (const file of files) {
    const { meta } = await getPostBySlug(file);
    posts.push(meta);
  }

  return posts;
}

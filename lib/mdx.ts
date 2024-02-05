import path from "node:path";
import fs from "node:fs";
import { compileMDX } from "next-mdx-remote/rsc";

const rootDir = path.join(process.cwd(), "content");
const postsDir = path.join(rootDir, "posts");

export async function getPostBySlug(slug: string) {
  const realSlug = slug.replace(".mdx", "");
  const filePath = path.join(postsDir, `${realSlug}.mdx`);

  const fileContent = fs.readFileSync(filePath, "utf-8");

  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    options: { parseFrontmatter: true },
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

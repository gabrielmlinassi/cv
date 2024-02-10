import path from "node:path";
import { readFileSync } from "node:fs";

import { compileMDX } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode, { Options as PrettyCodeOptions } from "rehype-pretty-code";

const cntl = String.raw;

const classes = {
  autoLink: cntl`before:absolute before:translate-x-[-0.85em] before:font-medium before:text-slate-400 before:opacity-0 before:transition before:content-['#'] md:before:hover:translate-x-[-1em] md:before:hover:opacity-100 md:before:focus-visible:translate-x-[-1em] md:before:focus-visible:opacity-100`,
  line: `border-x-4 border-transparent px-3 sm:px-5`,
  lineHighlighted: `bg-teal-100/10 border-l-teal-100/25`,
};

export async function readMDXFile<TFrontmatter = Record<string, string>>(slug: string) {
  const filePath = path.join(process.cwd(), slug);
  const source = readFileSync(filePath, "utf8");

  const result = await compileMDX<TFrontmatter>({
    source,
    components: {},
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [],
        rehypePlugins: [
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            { behavior: "wrap", properties: { className: [classes.autoLink] } },
          ],
          [
            // This type error is because next-mdx-remote uses an old version of vfile
            //  https://github.com/rehype-pretty/rehype-pretty-code/issues/145
            // @ts-ignore
            rehypePrettyCode,
            {
              keepBackground: false,
              theme: JSON.parse(
                readFileSync(
                  path.resolve(process.cwd(), "public/themes/moonlight-ii.json"),
                  "utf-8",
                ),
              ),
            } satisfies Partial<PrettyCodeOptions>,
          ],
        ],
      },
    },
  });

  return { ...result, source };
}

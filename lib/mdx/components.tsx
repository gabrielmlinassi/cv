import type { MDXComponents } from "mdx/types";

const H1 = (props: React.ComponentProps<"h1">) => (
  <h1 className="text-2xl font-medium my-2 text-green-500" {...props} />
);

const H2 = (props: React.ComponentProps<"h2">) => (
  <h2 className="text-2xl font-medium mt-6 mb-1 inline-block text-white" {...props} />
);

const Code = (props: React.ComponentProps<"code">) => <code {...props} />;

export const components: MDXComponents = {
  h1: H1,
  h2: H2,
  code: Code,
};

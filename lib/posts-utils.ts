import { Post } from "./posts";
import { groupBy } from "./utils";

export function groupPosts(posts: Post[]) {
  return [
    ...groupBy(posts, (post: Post) =>
      new Date(post.frontmatter.publishedAt).getFullYear()
    ).entries(),
  ];
}

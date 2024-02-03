import { Post } from "contentlayer/generated";
import { groupBy } from "./utils";
import { compareDesc } from "date-fns";

export function sortPosts(posts: Post[]) {
  return posts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
}

export function groupPosts(posts: Post[]) {
  return [...groupBy(posts, (post: Post) => new Date(post.date).getFullYear()).entries()];
}

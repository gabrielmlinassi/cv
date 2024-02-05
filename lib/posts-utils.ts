import { groupBy } from "./utils";
import { compareDesc } from "date-fns";

export function sortPosts(posts: any[]) {
  return posts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
}

export function groupPosts(posts: any[]) {
  return [...groupBy(posts, (post: any) => new Date(post.date).getFullYear()).entries()];
}

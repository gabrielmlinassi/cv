import { Post } from "@/domain/types";
import Image from "next/image";
import Link from "next/link";

type PostCardType = {
  post: Post;
};

export const PostCard = ({ post }: PostCardType) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="flex group items-start gap-4 -mx-3 rounded-xl p-3 dark:hover:bg-gray-8 hover:bg-gray-05 duration-100">
        <div className="w-[90px] border relative h-[70px] overflow-hidden rounded border-transparent dark:group-hover:border-gray-6 group-hover:border-gray-3 duration-200">
          <Image
            src={post.image.src}
            alt={post.image.alt}
            fill
            className="shrink-0 object-cover group-hover:scale-110 duration-150"
          />
        </div>
        <div>
          <h3 className="font-medium">{post.title}</h3>
          <p className="text-sm dark:text-gray-2 text-gray-7 mt-1">{post.description}</p>
          <time className="text-sm dark:text-gray-4 text-gray-6 mt-1 block">
            {post.createdAt}
          </time>
        </div>
      </div>
    </Link>
  );
};

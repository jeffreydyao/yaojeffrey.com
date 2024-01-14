import Link from "next/link";
import dayjs from "dayjs";
import { getBlogPosts, parseDateToString } from "../blog/utils";

export function PostList() {
  let posts = getBlogPosts();

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.slug}>
          <Link href={`/blog/${post.slug}`} className="text-[14px]">
            {post.metadata.title}{" "}
            <span className="text-gray-600">
              ({parseDateToString(post.metadata.publishedAt)})
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

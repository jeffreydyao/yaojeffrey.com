import { notFound } from "next/navigation";
import { getBlogPost as _getBlogPost } from "../utils";

function getBlogPost(slug: string) {
  return _getBlogPost(`${slug}.mdx`);
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  let post: ReturnType<typeof getBlogPost>;
  try {
    post = getBlogPost(params.slug);
  } catch {
    notFound();
  }

  return <div>{JSON.stringify(post)}</div>;
}

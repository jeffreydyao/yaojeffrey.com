import { notFound } from "next/navigation";
import { getBlogPost as _getBlogPost } from "../utils";
import { MDXRemote } from "next-mdx-remote/rsc";
import { CustomMDX } from "@/app/components/mdx";

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

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            url: `https://yaojeffrey.com/blog/${params.slug}`,
            author: {
              "@type": "Person",
              name: "Jeffrey Yao",
            },
          }),
        }}
      />
      <h1>{post.metadata.title}</h1>
      <div>
        <p>{post.metadata.publishedAt}</p>
      </div>
      <article className="prose prose-quoteless prose-neutral dark:prose-invert">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}

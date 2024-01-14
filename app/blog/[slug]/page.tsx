import { notFound } from "next/navigation";
import { getBlogPost as _getBlogPost, parseDateToString } from "../utils";
import { CustomMDX } from "@/app/components/mdx";
import Link from "next/link";
import { Metadata } from "next";

function getBlogPost(slug: string) {
  return _getBlogPost(`${slug}.mdx`);
}

export async function generateMetadata({
  params,
}: any): Promise<Metadata | undefined> {
  try {
    const post = getBlogPost(params.slug);

    let {
      title,
      publishedAt: publishedTime,
      summary: description,
    } = post.metadata;

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        type: "article",
        publishedTime,
        url: `https://yaojeffrey.com/blog/${post.slug}`,
        // TODO: Add OG images
      },
      twitter: {
        // card: "summary_large_image",
        title,
        description,
      },
    };
  } catch {
    return;
  }
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

      <header className="space-y-1 mb-8">
        <Link href="/" className="text-sm">
          ← Home
        </Link>
        <h1 className="font-serif font-medium text-2xl">
          {post.metadata.title}
        </h1>
        <p className="font-serif text-[14px]">
          {parseDateToString(post.metadata.publishedAt)}
        </p>
      </header>

      <article className="prose prose-sm prose-quoteless prose-neutral max-w-none">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}

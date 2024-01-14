import Link from "next/link";
import { PostList } from "../components/post-list";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing",
  description: "Musings on software engineering, design and life.",
};

export default function Writing() {
  return (
    <section className="space-y-4">
      <header className="space-y-2">
        <Link href="/" className="text-sm">
          ← Home
        </Link>
        <h1 className="font-serif font-medium">Writing</h1>
      </header>

      <PostList />
    </section>
  );
}

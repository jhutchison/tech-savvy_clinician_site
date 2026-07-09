import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { getBlogPostsSorted } from "@/lib/blog/posts";
import { companyName } from "@/lib/strings/strings";

export const metadata: Metadata = {
  title: `Blog | ${companyName}`,
  description:
    "Practical guidance on technology for clinicians—privacy, evaluation, and tools that support better care.",
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const posts = getBlogPostsSorted();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow">
        <section
          className="my-8 bg-linear-to-r from-gray-600 to-purple-600 text-white py-10 px-4 sm:px-6 lg:px-8 border border-gray-500"
          aria-label="Blog header"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Blog</h1>
            <p className="text-lg md:text-xl text-white/90">
              Practical guidance on technology for clinicians.
            </p>
          </div>
        </section>

        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white" aria-label="Blog posts">
          <div className="max-w-3xl mx-auto space-y-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="rounded-lg border border-gray-200 shadow-sm p-6 sm:p-8 hover:border-purple-300 transition-colors"
              >
                <time
                  dateTime={post.date}
                  className="text-sm text-gray-500"
                >
                  {formatDate(post.date)}
                </time>
                <h2 className="mt-2 text-2xl font-semibold text-gray-900">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-purple-700 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 text-gray-700 leading-relaxed">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-block text-purple-700 font-medium hover:text-purple-900 transition-colors"
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogPostContent from "@/components/BlogPostContent";
import Navbar from "@/components/Navbar";
import { blogPosts, getBlogPost } from "@/lib/blog/posts";
import { companyName } from "@/lib/strings/strings";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return { title: `Post not found | ${companyName}` };
  }

  return {
    title: `${post.title} | ${companyName}`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow">
        <section
          className="my-8 bg-linear-to-r from-gray-600 to-purple-600 text-white py-10 px-4 sm:px-6 lg:px-8 border border-gray-500"
          aria-label="Post header"
        >
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="text-white/80 hover:text-white text-sm transition-colors"
            >
              ← Back to blog
            </Link>
            <time
              dateTime={post.date}
              className="mt-4 block text-sm text-white/80"
            >
              {formatDate(post.date)}
            </time>
            <h1 className="mt-2 text-3xl md:text-4xl font-bold">{post.title}</h1>
          </div>
        </section>

        <article className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
          <BlogPostContent content={post.content} />
        </article>
      </main>
    </div>
  );
}

import type { BlogContentBlock } from "@/lib/blog/posts";

type BlogPostContentProps = {
  content: BlogContentBlock[];
};

export default function BlogPostContent({ content }: BlogPostContentProps) {
  return (
    <div className="max-w-3xl mx-auto space-y-5 text-gray-800 leading-relaxed text-lg">
      {content.map((block, index) => {
        switch (block.type) {
          case "heading":
            return (
              <h2
                key={`${block.type}-${index}`}
                className="text-2xl font-semibold text-gray-900 pt-2"
              >
                {block.text}
              </h2>
            );
          case "list":
            return (
              <ul
                key={`${block.type}-${index}`}
                className="list-disc pl-6 space-y-2"
              >
                {block.items.map((item) => (
                  <li key={item.slice(0, 40)}>{item}</li>
                ))}
              </ul>
            );
          case "paragraph":
            return (
              <p key={`${block.type}-${index}`}>{block.text}</p>
            );
        }
      })}
    </div>
  );
}

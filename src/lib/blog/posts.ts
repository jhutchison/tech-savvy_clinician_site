export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "choosing-technology-for-your-practice",
    title: "Choosing Technology for Your Practice",
    date: "2026-03-15",
    excerpt:
      "A practical framework for evaluating software and tools without getting overwhelmed by marketing claims.",
    content: [
      "Every week, clinicians are pitched new platforms, apps, and AI tools. The promise is always the same: save time, improve outcomes, reduce burnout. But how do you know what is worth adopting?",
      "Start with the problem you are actually trying to solve. If a tool does not map clearly to a workflow pain point you experience regularly, it is probably not the right fit—no matter how impressive the demo looks.",
      "Next, ask about data handling. Where is client information stored? Who has access? What happens if you stop using the service? These questions are not optional when confidentiality is central to your work.",
      "Finally, pilot before you commit. A two-week trial with a small number of cases will tell you more than any sales call. Pay attention to friction: extra clicks, confusing interfaces, and unreliable notifications add up fast in a busy practice.",
      "Technology should make your job easier while keeping client well-being front and center. That standard is worth holding every vendor to.",
    ],
  },
  {
    slug: "what-to-ask-before-adopting-ai-tools",
    title: "What to Ask Before Adopting AI Tools",
    date: "2026-04-02",
    excerpt:
      "Key questions clinicians should ask vendors about accuracy, privacy, and clinical responsibility.",
    content: [
      "AI tools are showing up everywhere in healthcare software—from note-taking to treatment planning. Before you bring one into your practice, slow down and ask the hard questions.",
      "Accuracy matters, but so does transparency. Can the vendor explain what the model was trained on? How often is it updated? What happens when it is wrong, and how will you know?",
      "Privacy is non-negotiable. Confirm whether client data is used to train models, whether data leaves your jurisdiction, and what contractual protections exist if there is a breach.",
      "Clinical responsibility stays with you. Any AI output should be treated as a draft, not a decision. Document your review process and make sure clients understand how technology is used in their care.",
      "The right AI tool can be genuinely helpful. The wrong one can create risk you did not sign up for. Asking better questions upfront is the best way to tell the difference.",
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogPostsSorted(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

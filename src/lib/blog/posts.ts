/** Plain text, or a link embedded in a paragraph. */
export type BlogInline = string | { text: string; url: string };

export type BlogContentBlock =
  | { type: "paragraph"; text: string | BlogInline[] }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: BlogContentBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "is-hippa-sufficient-for-ai-in-mental-health",
    title: "Is HIPAA Sufficient for AI in Mental Health?",
    date: "2026-09-24",
    excerpt:
      "HIPAA is a starting point to protect consumer information. But due to the dynamic and emerging technology there needs to be federal regulation, states can't do it all. Until then clinicians must do their own investigation to determine the risks and benefits to protect client information.",
    content: [
      { type: "heading", text: "Summary" },
      {
        type: "paragraph",
        text: "HIPAA is a starting point to protect consumer information. But due to the dynamic and emerging technology there needs to be federal regulation, states can't do it all. Until then clinicians must do their own investigation to determine the risks and benefits to protect client information.",
      },
      { type: "heading", text: "HIPAA is a Starting Point" },
      {
        type: "paragraph",
        text: "Every day, I look at the latest developments in AI, particularly as they affect mental health. The pace of change can be dizzying.",
      },
      {
        type: "paragraph",
        text: 'One question I frequently hear from mental health professionals is: "How do I protect my clients\' privacy when using technology and AI?"',
      },
      {
        type: "paragraph",
        text: "My answer is: HIPAA is important, but HIPAA alone is not enough.",
      },
      {
        type: "paragraph",
        text: "HIPAA protects protected health information (PHI) when it is handled by covered entities and business associates. But not every AI tool, mental health app, wearable device, or technology company is covered by HIPAA.",
      },
      {
        type: "paragraph",
        text: [
          "For example, consumer health information collected through apps or wearable devices may fall outside HIPAA when the company collecting it is not a HIPAA-covered entity or business associate. Other protections, such as the ",
          {
            text: "FTC's Health Breach Notification Rule",
            url: "https://www.ftc.gov/business-guidance/health-breach-notification-rule",
          },
          ", may apply.",
        ],
      },
      { type: "heading", text: "AI Regulation Is Still Evolving" },
      {
        type: "paragraph",
        text: "The FDA regulates certain AI-enabled medical technologies, and its 2026 guidance addresses Clinical Decision Support Software. However, there is not one comprehensive federal framework governing all AI applications in mental health. (fda.gov)",
      },
      {
        type: "paragraph",
        text: "States are also developing their own protections. Illinois, California, New York, and others have enacted or proposed legislation addressing different aspects of AI, including mental health and AI companions. Colorado's AI legislation against algorithmic bias was challenged by xAI and a new AI Litigation Task Force created by President Trump to challenge state legislation that impedes federal AI policies. Colorado enacted a less restrictive law.",
      },
      {
        type: "paragraph",
        text: "https://www.whitehouse.gov/presidential-actions/2025/12/eliminating-state-law-obstruction-of-national-artificial-intelligence-policy/",
      },
      {
        type: "paragraph",
        text: "https://mental.jmir.org/2026/1/e96389",
      },
      {
        type: "paragraph",
        text: "https://www.justice.gov/opa/pr/justice-department-intervenes-xai-lawsuit-challenging-colorados-algorithmic-discrimination",
      },
      {
        type: "paragraph",
        text: "This means clinicians may need to consider federal law, state law, professional ethics, and the specific technology being used.",
      },
      { type: "heading", text: "Health Data Is Not Always HIPAA Data" },
      {
        type: "paragraph",
        text: "A common misconception is that all health information is protected by HIPAA.",
      },
      {
        type: "paragraph",
        text: "It isn't.",
      },
      {
        type: "paragraph",
        text: "Health information may be collected through:",
      },
      {
        type: "list",
        items: [
          "AI chatbots",
          "Mental health apps",
          "Wearables and fitness trackers",
          "Online assessments",
          "Wellness platforms and consumer technology",
        ],
      },
      {
        type: "paragraph",
        text: "HIPAA-protected PHI and general health information are not necessarily the same thing.",
      },
      {
        type: "paragraph",
        text: 'Similarly, "deidentified" does not mean "risk-free." Properly deidentified information is generally no longer PHI under HIPAA, but research has demonstrated that information considered anonymous can sometimes be reidentified when combined with other information. (hhs.gov) https://techscience.org/a/2018100901/',
      },
      { type: "heading", text: "So, What Should Clinicians Do?" },
      {
        type: "paragraph",
        text: "Before using an AI tool with client information, ask questions about the data collected:",
      },
      {
        type: "list",
        items: [
          "What information does it collect?",
          "Where is it stored?",
          "How long is it retained?",
          "Who can access it?",
          "Is it shared or sold?",
          "Is it used to train AI models?",
          "Is it used for advertising or product development?",
          "Can the information be completely deleted?",
          "Does the vendor provide a BAA when one is required?",
          "What happens if the company changes its privacy policy? Are providers and consumers notified?",
        ],
      },
      {
        type: "paragraph",
        text: "Read the privacy policy and terms of service.",
      },
      {
        type: "paragraph",
        text: "And yes—AI can help.",
      },
      {
        type: "paragraph",
        text: "You can use AI to summarize a vendor's privacy policy or identify provisions related to data collection, retention, sharing, AI training, and deletion.",
      },
      {
        type: "paragraph",
        text: "But never upload client PHI into a consumer AI tool simply to analyze a vendor agreement. Upload the vendor agreement—not your client's therapy notes.",
      },
      {
        type: "paragraph",
        text: "And always verify AI-generated analysis against the original document. AI can make mistakes.",
      },
      { type: "heading", text: "HIPAA Is the Floor—Not the Ceiling" },
      {
        type: "paragraph",
        text: "When evaluating AI, ask four questions:",
      },
      {
        type: "list",
        items: [
          "Is it legal?",
          "Is it HIPAA compliant, when HIPAA applies?",
          "Is it ethical?",
          "Is it clinically safe?",
        ],
      },
      {
        type: "paragraph",
        text: "A tool can potentially meet HIPAA requirements and still raise concerns about bias, transparency, informed consent, confidentiality, or clinical safety.",
      },
      {
        type: "paragraph",
        text: "Our responsibility isn't to avoid technology.",
      },
      {
        type: "paragraph",
        text: "It is to understand enough to use it responsibly.",
      },
      { type: "heading", text: "A Tech-Savvy Clinician might ask:" },
      {
        type: "list",
        items: [
          "What does it do?",
          "What data does it collect?",
          "Who can access it?",
          "How is the data used?",
          "What laws apply?",
          "What could go wrong?",
        ],
      },
      {
        type: "paragraph",
        text: "And most importantly:",
      },
      {
        type: "paragraph",
        text: "Could I clearly explain to my client what happens to their information?",
      },
      {
        type: "paragraph",
        text: "If the answer is no, we're not ready to use the technology.",
      },
      {
        type: "paragraph",
        text: "AI is moving quickly. Our responsibility is to move thoughtfully.",
      },
    ],
  },
  {
    slug: "can-you-delete-information-from-the-cloud",
    title: "Can you delete information from the cloud?",
    date: "2026-07-09",
    excerpt:
      "In theory it's possible to remove data from the cloud, but it's near impossible for the average user to verify that the data is no longer stored",
    content: [
      { type: "heading", text: "Summary" },
      {
        type: "paragraph",
        text: "In theory it's possible to remove data from the cloud, but it's near impossible for the average user to verify that the data is no longer stored",
      },
      {
        type: "paragraph",
        text: 'At a recent meeting Dawn was asked the question "Can you really delete data from the cloud?" I thought I would spend a little time trying to answer that question in a blog post for anyone else wondering the same thing.',
      },
      {
        type: "paragraph",
        text: "To start with I think it's worth taking a step back and making sure that everyone understands what we really mean when we talk about \"the cloud.\" I plan to address this a little more deeply in a future post, but for now let's come up with a simple definition that we can work with.",
      },
      { type: "heading", text: "What Is the Cloud?" },
      {
        type: "paragraph",
        text: 'Let\'s say that for our purposes here, "The Cloud" is a combination of:',
      },
      {
        type: "list",
        items: [
          "A lot of computers in big dark rooms that store information (servers)",
          "Applications (like facebook, google drive, instagram, etc) that users can interact with and store data on the computers in section 1",
          'Some way of connecting the users to the application (wifi, cellular data, etc) so that they seem to be "always available, everywhere"',
        ],
      },
      {
        type: "paragraph",
        text: "To see this idea in action, you can think about a person uploading a picture to Instagram or Facebook. Here they are using the application (Facebook or Instagram) to upload their picture. They are connected by cell or wifi to the internet, where that picture is transmitted to the servers where the data (in this case the picture) is stored and can be retrieved whenever the application wants to show the picture - for example to any other people who subscribe to your feed or posts.",
      },
      {
        type: "paragraph",
        text: "This is an oversimplified explanation, but these are the main pieces.",
      },
      {
        type: "heading",
        text: "How can data be deleted from the cloud (in theory)?",
      },
      {
        type: "paragraph",
        text: "In theory, If I wanted to delete a picture I uploaded 10 years ago and then forgot about, I would just need to get access to the computers where the data is stored, and delete that picture. Once the picture is no longer stored, no applications could access it to show it to other people. Easy right?",
      },
      {
        type: "paragraph",
        text: "But it gets a little more complicated at this point.",
      },
      {
        type: "heading",
        text: "Why isn't it that easy to delete from the cloud (in practice)?",
      },
      {
        type: "paragraph",
        text: "First off all, you and I don't have access to the computers where our pictures are stored by Facebook and Instagram. We can use the applications to \"delete\" the images, but all we can really know is that the application stopped showing the images to us, and presumably to other users. It could still be stored on those computers in the dark rooms somewhere. For example, prior to 2008 Facebook did not give users a way to delete their accounts at all, leading to speculation that they kept user data on their servers indefinitely.",
      },
      {
        type: "paragraph",
        text: "Also, remember that I said that the picture I drew above was over simplified. In reality, the picture I uploaded is probably not stored on just 1 computer. Facebook and Instagram almost certainly have back ups of their data on a second and- probably a third- computer. Additionally, when my buddy Joe and my Aunt Sally looked at my pictures 5 years ago, a local copy of that picture may have been \"cached\" (copied and stored) on their computer without their knowing so the image could be pulled up quickly when they look for it again. While these additional copies in back up should all be deleted when the user clicks delete in the application, there is no guarantee that this application was actually written to do this. And while the local copy of my photo is unlikely to ever be uncovered from my aunt sally's browser cache, it's theoretically possible",
      },
      {
        type: "paragraph",
        text: "Additionally, imagine that Facebook got hacked a year before I deleted my photo, and the hackers gained access to the database that my photo was stored on and made a copy of the photo along with all the other data in that database. The image now is not just out of my control, but now it's out of Facebook's control too. In theory, the digital image could be copied hundreds or thousands of times and stored in hundreds of locations, none of which I am likely to know anything about.",
      },
      {
        type: "paragraph",
        text: "So this may not be a big deal if we're talking about an unflattering picture from a forgotten Halloween. It's out there, I don't have control over it, big deal. But, imagine that instead of the data being a photo of me dressed as an awkward pirate, the data is my social security number and my mothers maiden name. Or maybe it's a list of all the medications that I have ever taken. Or imagine that instead of the application being facebook, where I uploaded a photo, it's dropbox, or google drive, where I uploaded a prominent client's progress note.",
      },
      {
        type: "paragraph",
        text: "So this is not intended to suggest that big tech companies don't care about security in the cloud. They generally do care, quite a bit, but they are not infallible. Hacks of personal data happen all the time. So I'm not saying that it's likely that all data stored in the cloud will be kept somewhere without the creator's will or knowledge, I'm just pointing out that it's possible.",
      },
      { type: "heading", text: "What does this mean for clinicians?" },
      {
        type: "paragraph",
        text: "So does this mean that any data stored in the cloud is instantly available to the whole world for ever? No, but it does mean that it could be. We recommend that clinicians stay aware of what data they are storing in the cloud, and what apps they are using to store it. In future blog posts we'll try to address how to weigh the potential legal and ethical costs of mis-mangaged data with the benefits that technology can give us. As always feel free to reach out if you have follow up questions or want to schedule a consultation.",
      },
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

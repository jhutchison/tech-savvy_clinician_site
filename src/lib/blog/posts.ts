export type BlogContentBlock =
  | { type: "paragraph"; text: string }
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
    slug: "can-you-delete-information-from-the-cloud",
    title: "Can you delete information from the cloud?",
    date: "2026-07-09",
    excerpt:
      "In theory it's possible to remove data from the cloud, but it's near impossible for the average user to verify that the data is no longer stored",
    content: [
      { type: "heading", text: "Too Long; Didn't Read:" },
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

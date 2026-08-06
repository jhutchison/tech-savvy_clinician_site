export const tagline = "Empowering clinicians to make informed decisions about technology";
// export const tagline = "Helping empower clinicians to make the right choices about technology- for themselves and for their clients";
// export const tagline = "Helping empower clinicians to make informed decisions about what technology is right for themselves and for their clients";
export const aboutUsText =
  "Our company was founded by experienced clinicians and software engineers." +
  " We were brought together with the goal of helping make the job of busy clinicians easier through technology" +
  " while making sure that client confidentiality and well being are front and center.";

export const aboutPageSubtitle =
  "Clinicians and engineers working together so technology serves your practice—and your clients.";

export const aboutPageMission =
  "Too often, clinical technology is built without clinicians in the room. We reverse that." +
  " Our team pairs clinical experience with software engineering so the tools you use are practical," +
  " trustworthy, and designed around real workflows—not just feature checklists.";

export const aboutPageValues = [
  {
    title: "Client confidentiality first",
    body: "Privacy and well-being are non-negotiable. We help you evaluate tools with those obligations in mind.",
  },
  {
    title: "Practical over flashy",
    body: "Busy clinicians need technology that saves time and reduces friction—not another system to fight.",
  },
  {
    title: "Informed decisions",
    body: "We explain trade-offs clearly so you can choose what is right for your practice and your clients.",
  },
] as const;

export type TeamMember = {
  name: string;
  bio: string;
  imageSrc?: string;
  imageAlt?: string;
};

export const aboutPageTeam: TeamMember[] = [
  {
    name: "John Hutchison",
    bio: "A masters-level clinical social woker turned software engineer, John worked for over a decade as a software engineer, helping to buld software for major automobile companies, financial companies, andother large enterprises. John has returned to seeing clients and is now focused on helping clincians use software in their practices safely and effectively."
  },
  {
    name: "Dawn Brown",
    bio: "Kind words about Dawn go here",
  },
];

export const servicesPageSubtitle =
  "Practical guidance so you can choose and use technology with confidence.";

export const servicesPageIntro =
  "Whether you are evaluating a new tool, tightening up privacy practices, or figuring out what you actually need," +
  " we help clinicians make informed technology decisions without the sales pitch.";

export type ServiceOffering = {
  title: string;
  body: string;
};

export const servicesOfferings: ServiceOffering[] = [
  {
    title: "Technology consultation",
    body:
      "Talk through your practice goals, current tools, and constraints." +
      " We help you weigh options clearly—what helps, what creates risk, and what can wait.",
  },
  {
    title: "Tool and vendor evaluation",
    body:
      "Considering a new EHR feature, telehealth platform, or practice app?" +
      " We review usability, workflow fit, and confidentiality implications so you can decide with eyes open.",
  },
  {
    title: "Privacy and data practices review",
    body:
      "Client confidentiality comes first. We help you understand where clinical data lives," +
      " how it moves, and what questions to ask vendors before you commit.",
  },
  {
    title: "Workflow and documentation support",
    body:
      "Busy clinicians need tools that reduce friction. We look at documentation and day-to-day workflows" +
      " and suggest practical changes that save time without adding complexity.",
  },
];

export const companyName = "The Tech-Savvy Clinician";

export const initialContactEmail = "intake@techsavvyclinician.com";

const initialContactEmailSubject = "Tech-Savvy Clinician Inital Inquiry";
export const intakeMailtoHref = `mailto:${initialContactEmail}?subject=${encodeURIComponent(initialContactEmailSubject)}`;


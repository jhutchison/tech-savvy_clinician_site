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

export const companyName = "The Tech-Savvy Clinician";

export const initialContactEmail = "intake@techsavvyclinician.com";

const initialContactEmailSubject = "Tech-Savvy Clinician Inital Inquiry";
export const intakeMailtoHref = `mailto:${initialContactEmail}?subject=${encodeURIComponent(initialContactEmailSubject)}`;


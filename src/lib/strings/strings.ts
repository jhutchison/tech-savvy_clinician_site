export const tagline = "Empowering clinicians to make informed decisions about technology";
// export const tagline = "Helping empower clinicians to make the right choices about technology- for themselves and for their clients";
// export const tagline = "Helping empower clinicians to make informed decisions about what technology is right for themselves and for their clients";
export const aboutUsText =
  "We aim to help clinicians learn what they need to know to feel comfortable making their own decisions about the benefits and risks associated with using specific technologies (including Artificial Intelligence)." +
  " We hope to help clinicians free up time and energy to focus on what they’re passionate about - "+
  " helping their clients, and still sleep at night knowing that they understand how the technology works.";

export const aboutPageSubtitle =
  "Technology-minded clinicians working to help you understand the benefits and risks of using different technologies in your practice.";

export const aboutPageMission ="";

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
    name: "John Hutchison, LMSW",
    bio: "John brings a unique combination of social work and technology experience."+
    " After eight years as a social worker, John transitioned to software engineering,"+
    " spending over a decade working with companies including Thomson Reuters, VMware,"+
    " Pivotal Software, and ThoughtWorks. He has helped develop technology solutions across"+
    " industries and now combines his clinical and technology backgrounds to help mental"+
    " health professionals navigate technology (including AI) as it applies to clinical"+ 
    " practice. John is currently in private practice."
  },
  {
    name: "Dawn Brown, LMSW",
    bio: "Dawn brings nearly 40 years of social work experience across a wide range of settings,"+ 
    " including school social work, foster care, residential and inpatient care, and private practice. She has"+
    " taught graduate-level social work for 15 years, with a focus on ethics, theory, and clinical practice."+
   
    " Dawn has completed postgraduate training focused on the intersection of mental health and artificial intelligence."+
    " She provides in-services across the state for mental health professions regarding the use of technology with ethical integrity and social justice."+
    " She is passionate about helping clinicians navigate technology and AI while maintaining strong ethical standards and protecting client confidentiality."
  }
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


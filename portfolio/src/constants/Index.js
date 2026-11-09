import project1 from "../assets/projects/project-1.png";
import project3 from "../assets/projects/project-3.png";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";
import repoBrainAiUsage from "../assets/images/PageAiUsage.png";
import repoBrainAddProject from "../assets/images/RepoBrainAddProjetPage.png";
import repoBrainCredit from "../assets/images/RepoBrainCreditPage.png";
import repoBrainQA from "../assets/images/RepoBrainQAPage.png";
import repoBrainSignIn from "../assets/images/RepoBrainSignIn.png";
import repoBrainSignUp from "../assets/images/RepoBrainSignUp.png";
import repoBrainDashboard from "../assets/images/TableauBord.png";

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "postgresql"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "projectTitleRepoBrain",
    images: [
      repoBrainDashboard,
      repoBrainQA,
      repoBrainAddProject,
      repoBrainAiUsage,
      repoBrainSignIn,
      repoBrainSignUp,
      repoBrainCredit,
    ],
    description: "projectDescriptionRepoBrain",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Gemini", "AssemblyAI", "Stripe"],
    status: "projectStatusInDevelopment",
    link: "https://github.com/Niseiyen1607/RepoBrain",
  },
  {
    title: "projectTitle1",
    image: project1,
    description: "projectDescription1",
    technologies: ["HTML", "CSS", "React", "Node.js", "postgresql", "Scrum"],
  },
  {
    title: "projectTitle3",
    image: project3,
    description: "projectDescription3",
    technologies: ["Unity", "CSharp", "Blender", "Photoshop"],
  },
  {
    title: "projectTitle5",
    image: project5,
    description: "projectDescription5",
    technologies: ["React", "Tailwind", "Javascript", "HTML"],
  },
  {
    title: "projectTitle6",
    image: project6,
    description: "projectDescription6",
    technologies: ["React", "Microsoft Azure", "Javascript", "HTML", "CSS"],
  },
];

export const CONTACT = {
  email: "niseiyen@gmail.com",
};

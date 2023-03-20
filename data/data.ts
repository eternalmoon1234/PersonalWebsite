import { ExperienceEntity } from "@/entities/ExperienceEntity";
import { ProjectEntity } from "@/entities/ProjectEntity";
import { foyerUrl, neusleepUrl, tripleyUrl } from "@/utils/constants";

export const projects: ProjectEntity[] = [
  {
    title: "Tripley",
    description: "We're building the all-in-one platform to seamlessly plan & manage your trips. Currently in private alpha.",
    skills: "Cloud-Native Applications · Express.js · React Native · Docker · PostgreSQL · React.js · Prisma · TypeScript",
    viewLink: "https://google.com",
    imageUrl: "https://cdn.sanity.io/images/7ok6rxeh/production/77fc5b25cf36cb948791ba3932bd8011c2d72b8e-1767x985.png?rect=63,0,1642,985&w=500&h=300",
    openSource: false
  },
  {
    title: "Project 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    skills: "React, TypeScript, TailwindCSS",
    viewLink: "https://google.com",
    githubLink: "https://github.com",
    imageUrl: "/project2.jpg",
    openSource: false,
  },
  {
    title: "Project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    skills: "React, TypeScript, TailwindCSS",
    viewLink: "https://google.com",
    githubLink: "https://github.com",
    imageUrl: "/project3.jpg",
    openSource: true,
  },
];

export const experiences: ExperienceEntity[] = [
  {
    title: "Product Engineer",
    organizationColor: "foyerPurple",
    organization: "Foyer",
    organizationUrl: foyerUrl,
    description:
      "Contributed to Merlin, an AI-powered virtual assistant for the web, by developing and enhancing a range of features.",
    skills: "Firebase · React.js · Plasmo · APIs",
    dateRange: "Jan 2023 - Present",
  },
  {
    title: "Co-Founder",
    organizationColor: "tripleyBlue",
    organization: "Tripley",
    organizationUrl: tripleyUrl,
    description:
      "Building the all-in-one platform to seamlessly plan & manage your trips.",
    skills:
      "Cloud Native · APIs · DevOps · React Native · PostgreSQL · Prisma · TypeScript",
    dateRange: "May 2022 - Present",
  },
  {
    title: "Software Engineer",
    organizationColor: "gray-200",
    organization: "neusleep",
    organizationUrl: neusleepUrl,
    description:
      "Developed a custom developer dashboard for clinical studies with the neusleep hardware device, with features such as high volume data processing, data graphing and session association.",
    skills: "Big Data • Data Analysis • Firebase • Next.js • TypeScript",
    dateRange: "Jun 2022 - Oct 2022",
  },
];

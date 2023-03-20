import { ExperienceEntity } from "@/entities/ExperienceEntity";
import { ProjectEntity } from "@/entities/ProjectEntity";
import { foyerUrl, neusleepUrl, tripleyUrl } from "@/utils/constants";

export const projects: ProjectEntity[] = [
  {
    title: "Tripley",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    skills: "React, TypeScript, TailwindCSS",
    viewLink: "https://google.com",
    githubLink: "https://github.com",
    imageUrl:
      "https://media.licdn.com/dms/image/C562DAQFbz0Fhxv0mSw/profile-treasury-image-shrink_800_800/0/1672799338241?e=1673496000&v=beta&t=jELjtV5W1v-ZEuhUGVOFPNR8Cc36Iyrtvryh8hS3d6M",
  },
  {
    title: "Project 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    skills: "React, TypeScript, TailwindCSS",
    viewLink: "https://google.com",
    githubLink: "https://github.com",
    imageUrl: "/project2.jpg",
  },
  {
    title: "Project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    skills: "React, TypeScript, TailwindCSS",
    viewLink: "https://google.com",
    githubLink: "https://github.com",
    imageUrl: "/project3.jpg",
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
    skills: "Cloud Native · APIs · DevOps · React Native · PostgreSQL · Prisma · TypeScript",
    dateRange: "May 2022 - Present",
  },
  {
    title: "Software Engineer",
    organizationColor: "gray-200",
    organization: "neusleep",
    organizationUrl: neusleepUrl,
    description:
      "Developed a custom developer dashboard for clinical studies with the neusleep hardware device, with features such as high volume data processing, data graphing and session association.",
    skills:
      "Big Data • Data Analysis • Firebase • Next.js • TypeScript",
    dateRange: "Jun 2022 - Oct 2022",
  },
];

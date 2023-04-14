import { ExperienceEntity } from "@/entities/ExperienceEntity";
import { ProjectEntity } from "@/entities/ProjectEntity";
import { foyerUrl, neusleepUrl, tripleyUrl } from "@/utils/constants";

export const projects: ProjectEntity[] = [
  {
    title: "Tripley",
    description:
      "We're building the all-in-one platform to seamlessly plan & manage your trips. Currently in private alpha.",
    skills:
      "Cloud-Native Applications · Express.js · React Native · Docker · PostgreSQL · React.js · Prisma · TypeScript",
    viewLink: "https://tripley.app",
    imageUrl:
      "https://cdn.sanity.io/images/7ok6rxeh/production/77fc5b25cf36cb948791ba3932bd8011c2d72b8e-1767x985.png?rect=63,0,1642,985&w=500&h=300",
    openSource: false,
  },
  {
    title: "neusleep developer dashboard",
    description:
      "A custom, high-performing internal developer dashboard built for neusleep, to assist with clinical studies for their hardware device.",
    skills: "C++ · TypeScript · Express · Prisma",
    githubLink: "https://github.com/Bytecube-Packages/Bytecube",
  },
  {
    title: "Evergreen",
    description:
      "Evergreen is a platform that connects home gardeners and consumers, supplying local produce to the community. Home gardeners can sell their fresh produce to health-conscious consumers, providing high-quality and organic food instead of store-bought produce treated with pesticides.",
    skills:
      "TypeScript · Next.js, · TailwindCSS · Prisma · CockroachDB · Google Maps Places API · AWS S3",
    viewLink: "https://evergreen-app.vercel.app/",
    githubLink: "https://github.com/ShubhamPatilsd/evergreen",
    imageUrl: "https://i.imgur.com/HlBO0QG.png",
    openSource: true,
  },
  {
    title: "Pindrop",
    description:
      "Pindrop is a powerful, hyper-fast FRC robot localization library that utilizes AprilTags to precisely locate robots. It is designed to work seamlessly with a variety of co-processors and cameras, making it a simple, powerful, and versatile choice for teams of all sizes. ",
    skills:
      "TypeScript · Next.js, · TailwindCSS · Prisma · CockroachDB · Google Maps Places API · AWS S3",
    githubLink: "https://github.com/eternalmoon1234/pindrop",
    openSource: true,
    openSourceNoView: true,
  },
  {
    title: "Bytecube",
    description:
      "Bytecube is an open-source and cross-platform package manager that streamlines software development, deployment, and discovery. Built during the 2021 Hashnode x Auth0 hackathon.",
    skills: "C++ · TypeScript · Express · Prisma",
    githubLink: "https://github.com/Bytecube-Packages/Bytecube",
    imageUrl: "https://i.imgur.com/I09f17R.png",
    openSource: true,
    openSourceNoView: true,
  },
  {
    title: "ArtMart",
    description:
      "ArtMart is a web app that brings together a diverse community of passionate art enthusiasts and enables them to share and trade their collected pieces.",
    skills:
      "TypeScript · Next.js · Next.js API · TailwindCSS · CockroachDB · Prisma",
    githubLink: "https://github.com/ShubhamPatilsd/artmart",
    imageUrl: "https://i.imgur.com/mQPgEwc.png",
    openSource: true,
    openSourceNoView: false,
  },
];

export const experiences: ExperienceEntity[] = [
  {
    title: "Product Engineer",
    organizationColor: "foyerPurple",
    organization: "Foyer",
    organizationUrl: foyerUrl,
    description: '<span>Contributed to <strong>Merlin</strong>, an AI-powered virtual assistant for the web, by developing and enhancing a range of features.</span>',
    skills: "Firebase · React.js · Plasmo · APIs",
    dateRange: "Jan 2023 - Present",
  },
  {
    title: "Co-Founder",
    organizationColor: "tripleyBlue",
    organization: "Tripley",
    organizationUrl: tripleyUrl,
    description:
      '<span>Building the all-in-one platform to seamlessly plan & manage your trips.</span>',
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
      '<span>Developed a custom developer dashboard for clinical studies with the neusleep hardware device, with features such as high volume data processing, data graphing and session association.</span>',
    skills: "Big Data • Data Analysis • Firebase • Next.js • TypeScript",
    dateRange: "Jun 2022 - Oct 2022",
  },
];

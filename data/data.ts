import { ExperienceEntity } from "@/entities/ExperienceEntity";
import { ProjectEntity } from "@/entities/ProjectEntity";
import { constants } from "@/utils/constants";

export const projects: ProjectEntity[] = [
  {
    title: "Tripley",
    description:
      "We're building the all-in-one platform to seamlessly plan & manage your trips. Currently in private alpha.",
    skills:
      "Cloud-Native Applications · Express.js · React Native · Docker · PostgreSQL · React.js · Prisma · TypeScript",
    viewLink: constants.companies.tripley,
    imageUrl: "https://i.imgur.com/JUDkx7s.png",
  },
  {
    title: "neusleep developer dashboard",
    description:
      "A custom, high-performing internal developer dashboard built for neusleep, to assist with clinical studies for their hardware device.",
    skills: "C++ · TypeScript · Express · Prisma",
  },
  {
    title: "Evergreen",
    description:
      "Evergreen is a platform that connects home gardeners and consumers, supplying local produce to the community. \n Home gardeners can sell their fresh produce to health-conscious consumers, providing high-quality and organic food instead of store-bought produce treated with pesticides.",
    skills:
      "TypeScript · Next.js, · TailwindCSS · Prisma · CockroachDB · Google Maps Places API · AWS S3",
    viewLink: "https://evergreen-app.vercel.app/",
    githubLink: "https://github.com/ShubhamPatilsd/evergreen",
    imageUrl: "https://i.imgur.com/HlBO0QG.png",
  },
  {
    title: "Pindrop",
    description:
      "Pindrop is a powerful, hyper-fast robot localization library that utilizes AprilTags to precisely locate robots. It is designed to work seamlessly with a variety of co-processors and cameras, making it a simple, powerful, and versatile vision solution.",
    skills: "Rust · AprilTags · Co-processors · Computer Vision",
    githubLink: "https://github.com/eternalmoon1234/pindrop",
  },
  {
    title: "Bytecube",
    description:
      "Bytecube is an open-source and cross-platform package manager that streamlines software development, deployment, and discovery. Built during the 2021 Hashnode x Auth0 hackathon.",
    skills: "C++ · TypeScript · Express · Prisma",
    githubLink: "https://github.com/Bytecube-Packages/Bytecube",
    imageUrl: "https://i.imgur.com/I09f17R.png",
  },
  {
    title: "ArtMart",
    description:
      "ArtMart is a web app that brings together a diverse community of passionate art enthusiasts and enables them to share and trade their collected pieces.",
    skills:
      "TypeScript · Next.js · Next.js API · TailwindCSS · CockroachDB · Prisma",
    viewLink: "https://artmart.vercel.app/",
    githubLink: "https://github.com/ShubhamPatilsd/artmart",
    imageUrl: "https://i.imgur.com/mQPgEwc.png",
  },
];

export const experiences: ExperienceEntity[] = [
  {
    title: "Product Engineer",
    organizationColor: "foyerPurple",
    organization: "Foyer",
    organizationUrl: constants.companies.foyer,
    description:
      "Working on Merlin, an AI-powered virtual assistant for the web.",
    skills: "Firebase · React.js · Plasmo · APIs",
    dateRange: "Jan 2023 - Present",
  },
  {
    title: "Co-Founder",
    organizationColor: "tripleyBlue",
    organization: "Tripley",
    organizationUrl: constants.companies.tripley,
    description:
      "Building the all-in-one platform to seamlessly plan & manage your trips.",
    skills:
      "Cloud Native · APIs · DevOps · React Native · PostgreSQL · Prisma · TypeScript",
    dateRange: "May 2022 - Present",
  },
  {
    title: "Software Engineer",
    organizationColor: "gray-300",
    organization: "neusleep",
    organizationUrl: constants.companies.neusleep,
    description:
      "Developed a custom developer dashboard for analyzing data from clinical studies with neusleep's wearable device. Built features to support high-volume data processing, data graphing and session association.",
    skills: "Big Data • Data Analysis • Firebase • Next.js • TypeScript",
    dateRange: "Jun 2022 - Oct 2022",
  },
];

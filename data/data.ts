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
    viewLink: "https://google.com",
    imageUrl:
      "https://cdn.sanity.io/images/7ok6rxeh/production/77fc5b25cf36cb948791ba3932bd8011c2d72b8e-1767x985.png?rect=63,0,1642,985&w=500&h=300",
    openSource: false,
  },
  {
    title: "Evergreen",
    description: "Evergreen is a platform that connects home gardeners and consumers, supplying local produce to the community. Home gardeners can sell their fresh produce to health-conscious consumers, providing high-quality and organic food instead of store-bought produce treated with pesticides.",
    skills: "TypeScript · Next.js, · TailwindCSS · Prisma · CockroachDB · Google Maps Places API · AWS S3",
    viewLink: "https://google.com",
    githubLink: "https://github.com",
    imageUrl: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/993c5091-5100-43a5-bd85-5af8a5b01abd/Screen_Shot_2023-03-07_at_12.26.28_AM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230320T043422Z&X-Amz-Expires=86400&X-Amz-Signature=08f80765094546e25218175fc56ce7f33a859f556d6e1c03cd1f801c113239f2&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Screen%2520Shot%25202023-03-07%2520at%252012.26.28%2520AM.png%22&x-id=GetObject",
    openSource: true,
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

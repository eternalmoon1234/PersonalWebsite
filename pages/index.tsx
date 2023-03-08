import { NextPage } from "next";
import FadeIn from "react-fade-in";
import { Layout } from "@/components/Layout";
import { Navbar } from "@/components/navbar/Navbar";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/projects/Projects";
import { ProjectEntity } from "@/entities/ProjectEntity";
import { Footer } from "@/components/Footer";
import { About } from "@/components/About";
import { Experience } from "@/components/experience/Experience";
import { CurrentWork } from "@/components/CurrentWork";
import { PastWork } from "@/components/PastWork";
import { ExperienceEntity } from "@/entities/ExperienceEntity";
import { foyerUrl, neusleepUrl, tripleyUrl } from "@/utils/constants";

const projects: ProjectEntity[] = [
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

const experiences: ExperienceEntity[] = [
  {
    title: "Product Engineer",
    organizationColor: "foyerPurple",
    organization: "Foyer",
    organizationUrl: foyerUrl,
    description:
      "Seeing the Merdaugh trial on the news today perked my interest in the case so I watched this DocuSeries tonight…Wow!",
    skills: "Big Data · Firebase · Node.js · React.js · TypeScript",
    dateRange: "Jan 2023 - Present",
  },
  {
    title: "Co-Founder",
    organizationColor: "tripleyBlue",
    organization: "Tripley",
    organizationUrl: tripleyUrl,
    description:
      "Building the all-in-one platform to plan and manage your trips, effectively.",
    skills: "TS • Node",
    dateRange: "May 2022 - Present",
  },
  {
    title: "Software Engineer",
    organizationColor: "white",
    organization: "neusleep",
    organizationUrl: neusleepUrl,
    description:
      "Developed a custom, high-performing internal developer dashboard to assist with clinical studies using the neusleep hardware device.",
    skills:
      "Big Data • Data Analysis • Firebase • Node.js • React.js • TypeScript",
    dateRange: "Jun 2022 - Oct 2022",
  },
];
const IndexPage: NextPage = () => (
  <Layout>
    <FadeIn>
      <Navbar />
    </FadeIn>

    <div className="mx-auto flex w-full max-w-xl flex-col justify-center py-16">
      <section
        className="
              mt-16 w-full self-start text-dark-900"
      >
        <FadeIn delay={75}>
          <Hero />
          <div className="mt-12"></div>
          <About />
          <div className="mt-12"></div>
          <Experience experiences={experiences} />
          <div className="mt-12"></div>
          <Projects projects={projects} />
          <div className="mt-12"></div>
          <CurrentWork />
          <div className="mt-12"></div>
          <PastWork />
          <div className="mt-12"></div>
          <Footer />
        </FadeIn>
      </section>
    </div>
  </Layout>
);

export default IndexPage;

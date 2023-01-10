import { NextPage } from "next";
import { Layout } from "../components/Layout";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { ProjectEntity } from "../entities/ProjectEntity";
import { Footer } from "../components/Footer";

const projects: ProjectEntity[] = [
  {
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "https://project1.com",
    technologies: ["React", "TypeScript", "TailwindCSS"],
    imageUrl:
      "https://media.licdn.com/dms/image/C562DAQFbz0Fhxv0mSw/profile-treasury-image-shrink_800_800/0/1672799338241?e=1673496000&v=beta&t=jELjtV5W1v-ZEuhUGVOFPNR8Cc36Iyrtvryh8hS3d6M",
  },
  {
    title: "Project 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "https://project2.com",
    technologies: ["JavaScript", "Node.js", "Express"],
    imageUrl: "/project2.jpg",
  },
  {
    title: "Project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "https://project3.com",
    technologies: ["Python", "Flask", "PostgreSQL"],
    imageUrl: "/project3.jpg",
  },
];

const IndexPage: NextPage = () => (
  <Layout>
    <div className="p-5">
      <Navbar />
      <Hero />
      <section className="bg-gray-200 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
            About
          </h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-1/2 px-4 mb-8">
              <img alt="Profile" className="w-full rounded-full shadow-lg" />
            </div>
            <div className="w-1/2 px-4 mb-8">
              <p className="text-gray-700 leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                ornare magna eros, eu pellentesque tortor vestibulum ut.
                Maecenas non massa sem. Etiam finibus odio quis feugiat
                facilisis.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                ornare magna eros, eu pellentesque tortor vestibulum ut.
                Maecenas non massa sem. Etiam finibus odio quis feugiat
                facilisis.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                ornare magna eros, eu pellentesque tortor vestibulum ut.
                Maecenas non massa sem. Etiam finibus odio quis feugiat
                facilisis.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Projects projects={projects} />
      <Footer />
    </div>
  </Layout>
);

export default IndexPage;

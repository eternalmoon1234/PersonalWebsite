import { NextPage } from "next";
import FadeIn from "react-fade-in";
import { Layout } from "@/components/Layout";
import { Navbar } from "@/components/navbar/Navbar";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/projects/Projects";
import { Footer } from "@/components/Footer";
import { About } from "@/components/About";
import { Experience } from "@/components/experience/Experience";
import { CurrentWork } from "@/components/CurrentWork";
import { PastWork } from "@/components/PastWork";
import { experiences, projects } from "@/data/data";

const IndexPage: NextPage = () => (
  <Layout>
    <FadeIn delay={140}>
      <Navbar />
    </FadeIn>

    <div className="mx-auto flex w-full max-w-[45rem] flex-col justify-center py-16">
      <section
        className="
          my-5 w-full self-start text-dark-900 px-5 lg:px-0 lg:mt-16"
      >
        <FadeIn delay={140}>
          <Hero />
          <About />
          <Experience experiences={experiences} />
        </FadeIn>
        <Projects projects={projects.slice(0, 3)} projectsPage={false} />
        <FadeIn delay={140}>
          <CurrentWork />
          <PastWork />
        </FadeIn>
      </section>
    </div>
    <FadeIn>
      <Footer />
    </FadeIn>
  </Layout>
);

export default IndexPage;

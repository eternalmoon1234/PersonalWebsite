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
import { experiences, projects } from "data/data";

const IndexPage: NextPage = () => (
  <Layout>
    <FadeIn>
      <Navbar />
    </FadeIn>

    <div className="mx-auto flex w-full max-w-[38rem] flex-col justify-center py-16">
      <section
        className="
              mt-16 w-full self-start text-dark-900"
      >
        <FadeIn delay={75}>
          <Hero />
          <About />
          <Experience experiences={experiences} />
        </FadeIn>
        <Projects projects={projects} projectsPage={false} />
        <FadeIn delay={75}>
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

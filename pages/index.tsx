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

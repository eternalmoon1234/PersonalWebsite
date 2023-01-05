import { Layout } from "../components/Layout";
import { Navbar } from "../components/Navbar";
import { NextPage } from "next";
import { Hero } from "../components/Hero";

const IndexPage: NextPage = () => (
  <Layout>
    <div className="p-5">
      <Navbar />
      <Hero />
    </div>
  </Layout>
);

export default IndexPage;

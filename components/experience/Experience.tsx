import { foyerUrl, githubUrl, tripleyUrl } from "@/utils/links";
import { ExperienceCard } from "./ExperienceCard";

export const Experience = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-2 text-primary-extraLight">
        work experience
      </h2>
      <div className="">
        <div className="flex flex-col space-y-5">
          <div className="flex">
    <p className="0 w-8/12">Jan 2023 - present</p>
          <ExperienceCard title="Product Engineer" organizationColor="foyerPurple" organization="Foyer"  organizationUrl="https://foyer.work" description="Seeing the Merdaugh trial on the news today perked my interest in
            the case so I watched this DocuSeries tonight…Wow!" skills="Big Data · Firebase · Node.js · React.js · TypeScript"/>
            </div>
          <ExperienceCard title="Co-Founder" organizationColor="tripleyBlue" organization="Tripley" organizationUrl="https://tripley.app"  description="Seeing the Merdaugh trial on the news today perked my interest in
            the case so I watched this DocuSeries tonight…Wow!" skills="TS • Node"/>
            <ExperienceCard title="Software Engineer" organizationColor="white" organization="neusleep" organizationUrl="https://neusleep.com" description="Seeing the Merdaugh trial on the news today perked my interest in
            the case so I watched this DocuSeries tonight…Wow!" skills="TS • Node"/>
          </div>
      </div>
    </section>
  );
};

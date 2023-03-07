import { foyerUrl, githubUrl, tripleyUrl } from "@/utils/constants";
import { ExperienceCard } from "./ExperienceCard";

export const Experience = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-2 text-primary-extraLight">
        work experience
      </h2>
      <div className="space-x-10">
        <div className="flex flex-col space-y-5">
          <ExperienceCard
            title="Product Engineer"
            organizationColor="foyerPurple"
            organization="Foyer"
            organizationUrl="https://foyer.work"
            description="Seeing the Merdaugh trial on the news today perked my interest in
            the case so I watched this DocuSeries tonight…Wow!"
            skills="Big Data · Firebase · Node.js · React.js · TypeScript"
            dateRange="Jan 2023 - Present"
          />
          <ExperienceCard
            title="Co-Founder"
            organizationColor="tripleyBlue"
            organization="Tripley"
            organizationUrl="https://tripley.app"
            description="Building the all-in-one platform to plan and manage your trips, effectively."
            skills="TS • Node"
            dateRange="May 2022 - Present"
          />
          <ExperienceCard
            title="Software Engineer"
            organizationColor="white"
            organization="neusleep"
            organizationUrl="https://neusleep.com"
            description="Developed a custom, high-performing internal developer dashboard to assist with clinical studies using the neusleep hardware device."
            skills="Big Data • Data Analysis • Firebase • Node.js • React.js • TypeScript"
            dateRange="Jun 2022 - Oct 2022"
          />
        </div>
      </div>
    </section>
  );
};

import { FC } from "react";
import { ExperienceEntity } from "@/entities/ExperienceEntity";
import { ExperienceCard } from "./ExperienceCard";

interface ExperienceProps {
  experiences: ExperienceEntity[];
}

export const Experience: FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section id="work">
      <h2 className="text-2xl mb-2 text-primary-extraLight mt-12">
        work experience
      </h2>
      <div className="space-x-10">
        <div className="flex flex-col space-y-5">
          {experiences.map((experience) => {
            return (
              <ExperienceCard
                key={experience.title}
                title={experience.title}
                organizationColor={experience.organizationColor}
                organization={experience.organization}
                organizationUrl={experience.organizationUrl}
                description={experience.description}
                skills={experience.skills}
                dateRange={experience.dateRange}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

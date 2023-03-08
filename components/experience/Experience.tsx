import { ExperienceEntity } from "@/entities/ExperienceEntity";
import { foyerUrl, neusleepUrl, tripleyUrl } from "@/utils/constants";
import { FC } from "react";
import { ExperienceCard } from "./ExperienceCard";

interface ExperienceProps {
  experiences: ExperienceEntity[];
}

export const Experience: FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-2 text-primary-extraLight mt-12">
        work experience
      </h2>
      <div className="space-x-10">
        <div className="flex flex-col space-y-5">
          {experiences.map((experience) => {
            return (
              <ExperienceCard
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

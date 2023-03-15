import { FC } from "react";
import { ExperienceEntity } from "@/entities/ExperienceEntity";

export const ExperienceCard: FC<ExperienceEntity> = ({
  title,
  organizationColor,
  organization,
  organizationUrl,
  description,
  skills,
  dateRange,
}) => {
  return (
    <div className="lg:flex">
      <p className="hidden lg:visible lg:flex lg:w-6/12">{dateRange}</p>
      <div className="flex flex-col col-span-3 space-y-3 w-full">
        <h6 className="text-lg text-white md:text-xl font-beatriceSemibold">
          {title} •{" "}
          <a href={organizationUrl} target="_blank">
            <span className={`text-${organizationColor} font-beatriceSemibold`}>
              {organization}
            </span>
          </a>
        </h6>
        <p className="text-sm lg:hidden">{dateRange}</p>
        <p className="text-sm">{description}</p>
        <p className="text-sm">{skills}</p>
      </div>
    </div>
  );
};

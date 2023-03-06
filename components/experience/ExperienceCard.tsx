import { FC } from "react";

interface ExperienceCardProps {
  title: string;
  organizationColor: "foyerPurple" | "tripleyBlue" | "white";
  organization: string;
  organizationUrl: string;
  description: string;
  skills: string;
  dateRange: string;
}

export const ExperienceCard: FC<ExperienceCardProps> = ({
  title,
  organizationColor,
  organization,
  organizationUrl,
  description,
  skills,
  dateRange,
}) => {
  return (
    <div className="flex">
      <p className="w-8/12">{dateRange}</p>
      <div className="flex flex-col col-span-4 space-y-3">
        <h6 className="text-lg text-white md:text-xl font-beatriceSemibold">
          {title} •{" "}
          <a href={organizationUrl} target="_blank">
            <span className={`text-${organizationColor} font-beatriceSemibold`}>
              {organization}
            </span>
          </a>
        </h6>
        <p className="text-sm">{description}</p>
        <p className="text-sm">{skills}</p>
      </div>
    </div>
  );
};

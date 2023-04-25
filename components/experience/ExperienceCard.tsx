import { FC, Fragment } from "react";
import { AiOutlineLink as LinkButton } from "react-icons/ai";
import { ExperienceEntity } from "@/entities/ExperienceEntity";
import { Spacer } from "@/components/Spacer";

export const ExperienceCard: FC<ExperienceEntity> = ({
  title,
  organizationColor,
  organization,
  organizationUrl,
  description,
  skills,
  dateRange,
}) => {
  const spacedDescription = description.replace(/\n/g, "<Spacer />");
  const parts = spacedDescription.split(/<Spacer \/>/);

  return (
    <div className="lg:flex">
      <p className="hidden lg:visible lg:flex lg:w-6/12 text-gray-200">
        {dateRange}
      </p>
      <div className="flex flex-col col-span-3 space-y-3 w-full">
        <h6 className="text-lg text-white md:text-xl font-beatriceSemibold">
          {title} •{" "}
          <a href={organizationUrl} target="_blank">
            <span className={`text-${organizationColor} font-beatriceSemibold`}>
              {organization}
              <a href={""} target="_blank">
              <LinkButton
                color="white"
                size={20}
                className="hover:cursor-pointer"
              />
            </a>
            </span>
            <div className="flex justify-start items-center space-x-2">
          <h5 className="text-xl font-beatriceMedium text-white">{title}</h5>
            <a href={""} target="_blank">
              <LinkButton
                color="white"
                size={20}
                className="hover:cursor-pointer"
              />
            </a>
        </div>
          </a>
        </h6>
        <p className="text-sm lg:hidden">{dateRange}</p>
        <p className="font-beatrice text-white text-sm">
          {parts.map((part, index) => (
            <Fragment key={index}>
              <p className="text-sm text-white">{part}</p>
              {index < parts.length - 1 && <Spacer />}
            </Fragment>
          ))}
        </p>
        <p className="text-xs text-primary-extraLight">{skills}</p>
      </div>
    </div>
  );
};

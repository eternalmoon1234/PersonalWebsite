import { ProjectEntity as ProjectCardProps } from "@/entities/ProjectEntity";
import { AiOutlineLink as LinkButton } from "react-icons/ai";
import { AiFillGithub as GitHubButton } from "react-icons/ai";
import { FC, Fragment } from "react";
import Image from "next/image";
import { Spacer } from "../Spacer";

export const ProjectCard: FC<ProjectCardProps> = ({
  imageUrl,
  title,
  description,
  skills,
  githubLink,
  viewLink,
}) => {
  const spacedDescription = description.replace(/\n/g, "<Spacer />");
  const parts = spacedDescription.split(/<Spacer \/>/);

  return (
    <div className="w-full bg-[#3166A5] rounded-lg shadow">
      {imageUrl ? (
        <div className="hidden md:block">
          <Image
            className="p-4 object-cover h-[25rem] w-full"
            src={imageUrl}
            alt={`${title} image`}
            width={800}
            height={800}
          />
        </div>
      ) : (
        ""
      )}

      <div className={`px-5 pb-5 space-y-4 pt-5 ${!imageUrl || imageUrl ? "pt-5" : "pt-0"}`}>
        <div className="flex justify-start items-center space-x-2">
          <h5 className="text-xl font-beatriceMedium text-white">{title}</h5>
          {viewLink != undefined ? (
            <a href={viewLink} target="_blank" aria-label="Link Icon">
              <LinkButton
                color="white"
                size={20}
                className="hover:cursor-pointer"
              />
            </a>
          ) : (
            ""
          )}

          {githubLink != undefined ? (
            <a href={githubLink} target="_blank" aria-label="Github Icon">
              <GitHubButton
                color="white"
                href={githubLink}
                size={20}
                className="hover:cursor-pointer"
              />
            </a>
          ) : (
            ""
          )}
        </div>

        <div className="font-beatrice text-white text-sm">
          {" "}
          {parts.map((part, index) => (
            <Fragment key={index}>
              <p className="text-sm text-white">{part}</p>
              {index < parts.length - 1 && <Spacer />}
            </Fragment>
          ))}
        </div>

        <p className="text-white text-xs">{skills}</p>
      </div>
    </div>
  );
};

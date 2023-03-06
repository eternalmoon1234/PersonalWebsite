import { ProjectEntity as ProjectCardProps } from "@/entities/ProjectEntity";
import { AiOutlineLink as LinkButton } from "react-icons/ai";
import { AiFillGithub as GitHubButton } from "react-icons/ai";
import { FC } from "react";

export const ProjectCard: FC<ProjectCardProps> = ({
  imageUrl,
  title,
  viewLink,
  githubLink,
  description,
  skills,
}) => {
  return (
    <div className="w-full bg-[#3166A5] rounded-lg shadow">
      <img className="p-4" src={imageUrl} alt={`${title} image`} />
      <div className="px-5 pb-5 space-y-4">
        <div className="flex justify-start items-center space-x-2">
          <h5 className="text-xl font-beatriceMedium text-white">{title}</h5>
          <LinkButton
            color="white"
            size={20}
            className="hover:cursor-pointer"
          />
          <GitHubButton
            color="white"
            size={20}
            className="hover:cursor-pointer"
          />
        </div>

        <p className="font-beatrice text-white text-sm">{description}</p>

        <p className="text-white text-sm">{skills}</p>
      </div>
    </div>
  );
};

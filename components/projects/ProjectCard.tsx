import { FC } from "react";

interface ProjectCardProps {
    imageUrl?: string;
    title: string;
    description: string;
    skills: string;
}

export const ProjectCard: FC<ProjectCardProps>= ({ imageUrl, title, description, skills}) => {
    return (
        <div className="w-full bg-[#3166A5] rounded-lg shadow">
          <img
            className="p-4"
            src={imageUrl}
            alt={`${title} image`}
          />
        <div className="px-5 pb-5 space-y-4">
        <h5 className="text-xl font-beatriceMedium text-white">{title}</h5>

        <p className="font-beatrice text-white">
        {description}
        </p>

        <p className="text-white">{skills}</p>
        </div>
      </div>
    )
}
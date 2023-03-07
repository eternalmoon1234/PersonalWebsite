import React from "react";
import { ProjectEntity } from "@/entities/ProjectEntity";
import Link from "next/link";
import { HiOutlineArrowNarrowRight as RightArrowButton } from "react-icons/hi";
import { ProjectCard } from "./ProjectCard";
import { useRouter } from "next/router";

interface ProjectsProps {
  projects: ProjectEntity[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const router = useRouter();

  return (
    <section className="rounded-lg">
      <h2 className="text-2xl font-bold mb-2 text-primary-extraLight">
        featured projects
      </h2>
      <div className="space-y-10">
        {projects.map((project) => {
          return (
            <ProjectCard
              title={project.title}
              description={project.description}
              skills={project.skills}
            />
          );
        })}
      </div>
      <div
        className="flex items-center space-x-2 pt-5 cursor-pointer"
        onClick={() => router.push("/projects")}
      >
        <p className="text-gray-300">see all projects</p>
        <RightArrowButton className="text-gray-300" size={20} />{" "}
      </div>
    </section>
  );
};

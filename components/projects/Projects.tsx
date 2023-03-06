import React from "react";
import { ProjectEntity } from "@/entities/ProjectEntity";
import Link from "next/link";
import a from "../assets/tripley.png";
import { ProjectCard } from "./ProjectCard";

interface ProjectsProps {
  projects: ProjectEntity[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
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
    </section>
  );
};

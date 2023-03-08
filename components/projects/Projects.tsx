import { FC } from "react";
import { ProjectEntity } from "@/entities/ProjectEntity";
import { HiOutlineArrowNarrowRight as RightArrowButton } from "react-icons/hi";
import { ProjectCard } from "./ProjectCard";
import { useRouter } from "next/router";
import FadeIn from "react-fade-in/lib/FadeIn";

interface ProjectsProps {
  projects: ProjectEntity[];
  projectsPage: boolean;
}

export const Projects: FC<ProjectsProps> = ({
  projects,
  projectsPage,
}) => {
  const router = useRouter();

  return (
    <section className="rounded-lg mt-12">
      <h2 className="text-2xl font-bold mb-2 text-primary-extraLight">
        {projectsPage ? "projects" : "featured projects"}
      </h2>
      <FadeIn>
        <div className="space-y-7">
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
      </FadeIn>
      {projectsPage ? null : (
        <div
          className="flex items-center space-x-2 pt-5 cursor-pointer"
          onClick={() => router.push("/projects")}
        >
          <p className="text-gray-300">see all projects</p>
          <RightArrowButton className="text-gray-300" size={20} />{" "}
        </div>
      )}
    </section>
  );
};

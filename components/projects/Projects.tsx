import { FC } from "react";
import { HiOutlineArrowNarrowRight as RightArrowButton } from "react-icons/hi";
import { useRouter } from "next/router";
import FadeIn from "react-fade-in/lib/FadeIn";
import { ProjectEntity } from "@/entities/ProjectEntity";
import { ProjectCard } from "./ProjectCard";
import { Link } from "../Link";

interface ProjectsProps {
  projects: ProjectEntity[];
  projectsPage: boolean;
}

export const Projects: FC<ProjectsProps> = ({ projects, projectsPage }) => {
  const router = useRouter();

  return (
    <section className="rounded-lg mt-12">
      <h2 className="text-2xl font-bold mb-2 text-primary-extraLight">
        {projectsPage ? "projects" : "featured projects"}
      </h2>
      <FadeIn>
        {projectsPage ? (
          <p className="mb-2">
            Most of my work is on my{" "}
            <Link
              type="basic"
              displayName="GitHub"
              href="https://github.com/eternalmoon1234"
            />
            .
          </p>
        ) : (
          ""
        )}
        <div className="space-y-7">
          {projects.map((project) => {
            return (
              <ProjectCard
                key={project.title}
                imageUrl={project.imageUrl}
                githubLink={project.githubLink}
                viewLink={project.viewLink}
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
          className="flex items-center space-x-2 pt-5 cursor-pointer relative group"
          onClick={() => router.push("/projects")}
        >
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 rounded-lg bg-blue-400 transition-all group-hover:w-1/4"></span>
          <p className="text-gray-300 hover:text-white transition-all">
            see all projects
          </p>
          <RightArrowButton className="text-gray-300" size={20} />{" "}
        </div>
      )}
    </section>
  );
};

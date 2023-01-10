import React from "react";
import { ProjectEntity } from "../entities/ProjectEntity";

interface ProjectsProps {
  projects: ProjectEntity[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4 text-center text-white">
          Projects
        </h2>
        <div className="flex flex-wrap -mx-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="w-full md:w-1/2 lg:w-1/2 px-4 mb-8"
            >
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-56 object-cover object-center"
                  />
                </a>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 hover:text-gray-800"
                    >
                      {project.title}
                    </a>
                  </h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex items-center mb-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-bold bg-gray-300 rounded-full px-2 py-1 mr-1 text-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

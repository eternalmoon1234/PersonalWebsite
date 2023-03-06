import React from "react";
import { ProjectEntity } from "@/entities/ProjectEntity";
import Link from "next/link";
import a from "../assets/tripley.png";

interface ProjectsProps {
  projects: ProjectEntity[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section className="rounded-lg">
      <h2 className="text-2xl font-bold mb-2 text-primary-extraLight">
        featured projects
      </h2>

      <div className="w-full bg-[#3166A5] rounded-lg shadow">
          <img
            className="p-4"
            src="https://i.imgur.com/gU0rlhm.png"
            alt="product image"
          />
        <div className="px-5 pb-5 space-y-4">
        <h5 className="text-xl font-beatriceMedium text-white">Tripley</h5>

        <p className="font-beatrice text-white">
          Seeing the Merdaugh trial on the news today perked my interest in the
          case so I watched this DocuSeries tonight…Wow!
        </p>

        <p className="text-white">TS • Next • React • Mobx • Turbo</p>
        </div>
      </div>
    </section>
  );
};

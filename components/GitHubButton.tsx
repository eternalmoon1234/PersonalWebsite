import { githubUrl } from "@/utils/constants";
import { FC } from "react";

export const GitHubButton: FC = () => {
  return (
    <a href={githubUrl} target="_blank">
      <span className="bg-primary-light text-primary p-0.5 text-base rounded-lg">
        @eternalmoon1234
      </span>
    </a>
  );
};

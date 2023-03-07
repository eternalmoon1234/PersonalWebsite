import { githubUrl } from "@/utils/constants";

export const GitHubButton = () => {
  return (
    <a href={githubUrl} target="_blank">
      <span className="bg-primary-light text-primary p-0.5 text-base rounded-lg">
        @eternalmoon1234
      </span>
    </a>
  );
};

import { githubUrl } from "@/utils/links";

export const GitHubButton = () => {
  return (
    <a href={githubUrl} target="_blank">
      <span className="bg-primary-light text-primary p-1 rounded-lg leading-loose">
        @eternalmoon1234
      </span>
    </a>
  );
};

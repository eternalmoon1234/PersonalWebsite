import { FC } from "react";

interface LinkProps {
  type: "basic" | "color";
  href: string;
  displayName: string;
  className?: string;
}

export const Link: FC<LinkProps> = ({ href, displayName, type, className }) => {
  return (
    <a href={href} target="_blank">
      <span
        className={`${
          type == "color"
            ? `${className} font-beatriceSemibold `
            : "underline text-primary-light"
        }`}
      >
        {displayName}
      </span>
    </a>
  );
};

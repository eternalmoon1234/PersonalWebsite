import { FC } from "react";

interface NavbarLinkProps {
  title: string;
  onClick: any;
}

export const NavbarLink: FC<NavbarLinkProps> = ({ title, onClick }) => {
  return (
    <span
      onClick={onClick}
      className="hover:cursor-pointer text-xl text-primary-light font-syne relative group"
    >
      <span className="absolute -bottom-1 left-0 w-0 h-1 rounded-lg bg-blue-400 transition-all group-hover:w-full"></span>
      ./{title}
    </span>
  );
};

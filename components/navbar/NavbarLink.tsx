import { FC } from "react";

interface NavbarLinkProps {
  title: string;
  onClick: any;
}

export const NavbarLink: FC<NavbarLinkProps> = ({ title, onClick }) => {
  return (
    <span
      onClick={onClick}
      className="hover:cursor-pointer text-xl text-primary-light font-syne"
    >
      ./{title}
    </span>
  );
};

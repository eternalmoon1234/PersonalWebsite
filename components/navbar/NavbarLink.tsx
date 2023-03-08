import Link from "next/link";

export const NavbarLink = ({
  title,
  onClick
}: {
  title: string;
  onClick: any
}) => {
  return (
    <span onClick={onClick} className="hover:cursor-pointer text-xl text-primary-light font-syne">
        ./{title}
    </span>
  );
};

import React from "react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-5">
      <h2 className="font-normal">gp</h2>
      <div className="pr-4 flex gap-10">
        <NavbarLink href="/" title="Hello" />
      </div>
    </nav>
  );
};

const NavbarLink = ({ href, title }: { href: string; title: string }) => {
  return (
    <Link href={href}>
      <p className="hover:cursor-pointer text-lg">{title}</p>
    </Link>
  );
};

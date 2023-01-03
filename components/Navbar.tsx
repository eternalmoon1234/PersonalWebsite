import React from "react";
import Link from "next/link";

const Navbar = () => (
  <nav className="flex items-center justify-between p-5">
    <h2 className="font-normal">gp</h2>
    <div className="pr-4 flex gap-10">
      <Link href="/">
        <p className="hover:cursor-pointer text-lg">careers</p>
      </Link>
      <Link href="/">
        <p className="hover:cursor-pointer text-lg">careers</p>
      </Link>
    </div>
  </nav>
);

export default Navbar;

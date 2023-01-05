import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-5">
      <h3 className="font-normal">gp</h3>
      <div className="pr-4 flex gap-10">
        <NavbarLink href="/" title="work" />
        <NavbarLink href="/" title="blog" />
        <NavbarLink href="/" title="contact" />
      </div>
    </nav>
  );
};

const NavbarLink = ({ href, title }: { href: string; title: string }) => {
  return (
    <Link href={href}>
      <p className="hover:cursor-pointer text-xl">{title}</p>
    </Link>
  );
};

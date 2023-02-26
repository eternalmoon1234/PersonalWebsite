import Link from 'next/link'

export const NavbarLink = ({ href, title }: { href: string; title: string }) => {
    return (
      <Link href={href}>
        <p className="hover:cursor-pointer text-xl text-primary-light font-syne">
          ./{title}
        </p>
      </Link>
    );
  };
  
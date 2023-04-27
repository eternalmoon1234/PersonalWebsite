import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import {
  AiFillLinkedin as LinkedinButton,
  AiFillYoutube as YoutubeButton,
  AiFillGithub as GithubButton,
  AiFillMail as MailButton,
  AiOutlineTwitter as TwitterButton,
} from "react-icons/ai";
import { scrollTo } from "@/utils/scrollTo";
import { NavbarLink } from "./NavbarLink";
import { constants } from "@/utils/constants";

interface NavbarProps {
  scrollLinks?: boolean;
}

export const Navbar: FC<NavbarProps> = ({ scrollLinks }) => {
  const router = useRouter();

  return (
    <nav className="flex items-center justify-between pt-7">
      <div className="mx-auto flex w-full max-w-7xl px-5 justify-between">
        <div className="flex items-center space-x-0 text-xs sm:space-x-7 sm:text-lg">
          <Link href="/">
            <h3 className="flex">
              <span className="text-primary-light font-syne">g</span>
              <span className="hidden lg:flex lg:visible font-syne lg:pr-1">autam</span>
              <span className="text-primary-light font-syne">p</span>
              <span className="hidden lg:flex lg:visible font-syne">aranjape</span>
            </h3>
          </Link>
          <div className="space-x-7 hidden lg:flex lg:visible">
            <NavbarLink
              onClick={() =>
                scrollLinks ? scrollTo("work") : router.push("/")
              }
              title="work"
            />
            <NavbarLink
              onClick={() => router.push("/projects")}
              title="projects"
            />
            <NavbarLink
              onClick={() =>
                scrollLinks ? scrollTo("about") : router.push("/")
              }
              title="about"
            />
            <NavbarLink
              onClick={() => router.push(`mailto:${constants.contacts.email}`)}
              title="contact"
            />
          </div>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-4">
          <a href={constants.contacts.linkedin} target="_blank">
            <LinkedinButton color="white" size={30} />
          </a>
          <a href={constants.contacts.github} target="_blank">
            <GithubButton color="white" size={30} />
          </a>
          <a href={constants.contacts.youtube} target="_blank">
            <YoutubeButton color="white" size={30} />
          </a>
          <a href={constants.contacts.twitter} target="_blank">
            <TwitterButton color="white" size={30} />
          </a>
          <a href={`mailto:${constants.contacts.email}`}>
            <MailButton color="white" size={30} />
          </a>
        </div>
      </div>
    </nav>
  );
};

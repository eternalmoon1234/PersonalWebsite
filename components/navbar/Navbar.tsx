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
import {
  linkedinUrl,
  githubUrl,
  youtubeUrl,
  twitterUrl,
  email,
} from "@/utils/constants";
import { scrollTo } from "@/utils/scrollTo";
import { NavbarLink } from "./NavbarLink";


export const Navbar: FC = () => {
  const router = useRouter();

  return (
    <nav className="flex items-center justify-between pt-7">
      <div className="mx-auto flex w-full max-w-7xl px-5 justify-between">
        <div className="flex items-center space-x-0 text-xs sm:space-x-7 sm:text-lg">
          <Link href="/">
            <h3 className="font-semibold font-syne flex">
              <span className="text-primary-light">g</span>
              <span className="hidden lg:flex lg:visible lg:pr-1">autam</span>
              <span className="text-primary-light">p</span>
              <span className="hidden lg:flex lg:visible">aranjape</span>
            </h3>
          </Link>
          <div className="space-x-7 hidden lg:flex lg:visible">
            <NavbarLink onClick={() => scrollTo("work")} title="work" />
            <NavbarLink
              onClick={() => router.push("/projects")}
              title="projects"
            />
            <NavbarLink onClick={() => scrollTo("about")} title="about" />
            <NavbarLink
              onClick={() => router.push(`mailto:${email}`)}
              title="contact"
            />
          </div>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-4">
          <a href={linkedinUrl} target="_blank">
            <LinkedinButton color="white" size={30} />
          </a>
          <a href={githubUrl} target="_blank">
            <GithubButton color="white" size={30} />
          </a>
          <a href={youtubeUrl} target="_blank">
            <YoutubeButton color="white" size={30} />
          </a>
          <a href={twitterUrl} target="_blank">
            <TwitterButton color="white" size={30} />
          </a>
          <a href={`mailto:${email}`}>
            <MailButton color="white" size={30} />
          </a>
        </div>
      </div>
    </nav>
  );
};

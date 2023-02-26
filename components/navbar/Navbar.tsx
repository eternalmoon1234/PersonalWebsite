import Link from "next/link";
import {
  AiFillLinkedin as LinkedinButton,
  AiFillYoutube as YoutubeButton,
  AiFillGithub as GithubButton,
  AiFillMail as MailButton,
} from "react-icons/ai";
import { NavbarLink } from "./NavbarLink";
import { linkedinUrl, githubUrl, youtubeUrl, mailUrl } from "@/utils/siteInfo";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-0 sm:px-5">
      <div className="mx-auto flex w-full max-w-6xl justify-between">
        <div className="flex items-center space-x-0 text-xs sm:space-x-7 sm:text-lg">
          <Link href="/">
            <h3 className="font-semibold font-syne">
              <span className="text-primary-light">g</span>autam{" "}
              <span className="text-primary-light">p</span>aranjape
            </h3>
          </Link>
          <NavbarLink href="/work" title="work" />
          <NavbarLink href="/about" title="about" />
          <NavbarLink href="/posts" title="posts" />
          <NavbarLink href="/contact" title="contact" />
        </div>
        <div className="flex items-center space-x-2 sm:space-x-4">
          <a href={linkedinUrl} target="_blank">
            <LinkedinButton color="white" size={30} />
          </a>
          <a href={githubUrl} target="_blank">
            <GithubButton color="white" size={30} href={githubUrl} />
          </a>
          <a href={youtubeUrl} target="_blank">
            <YoutubeButton color="white" size={30} href={youtubeUrl} />
          </a>
          <a href={mailUrl} target="_blank">
            <MailButton color="white" size={30} href={mailUrl} />
          </a>
        </div>
      </div>
    </nav>
  );
};


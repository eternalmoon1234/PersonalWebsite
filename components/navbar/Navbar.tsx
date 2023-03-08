import Link from "next/link";
import {
  AiFillLinkedin as LinkedinButton,
  AiFillYoutube as YoutubeButton,
  AiFillGithub as GithubButton,
  AiFillMail as MailButton,
} from "react-icons/ai";
import { NavbarLink } from "./NavbarLink";
import { linkedinUrl, githubUrl, youtubeUrl, email } from "@/utils/constants";
import { scrollTo } from "@/utils/scrollTo";
import { useRouter } from "next/router";

export const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="flex items-center justify-between pt-5">
      <div className="mx-auto flex w-full max-w-7xl px-5 justify-between">
        <div className="flex items-center space-x-0 text-xs sm:space-x-7 sm:text-lg">
          <Link href="/">
            <h3 className="font-semibold font-syne">
              <span className="text-primary-light">g</span>autam{" "}
              <span className="text-primary-light">p</span>aranjape
            </h3>
          </Link>
          <NavbarLink onClick={() => scrollTo("work")} title="work" />
          <NavbarLink onClick={() => router.push("/projects")} title="projects" />
          <NavbarLink onClick={() => scrollTo("about")} title="about" />
          <NavbarLink onClick={() => {}} title="contact" />
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
          <a href={`mailto:${email}`}>
            <MailButton color="white" size={30} />
          </a>
        </div>
      </div>
    </nav>
  );
};

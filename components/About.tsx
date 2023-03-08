import { email, foyerUrl, githubUrl, tripleyUrl } from "@/utils/constants";
import { GitHubButton } from "./GitHubButton";
import { Link } from "./Link";

export const About = () => {
  return (
    <section className="rounded-lg mt-12">
      <h2 className="text-2xl font-bold mb-2 text-primary-extraLight">about</h2>
      <p className="mb-5">
        I'm Gautam, a high school student, passionate about startups, software,
        and open source.
      </p>
      <p className="mb-5">
        Currently, I work as a product engineer at{" "}
        <Link
          type="color"
          className="text-foyerPurple"
          href={foyerUrl}
          displayName="Foyer"
        />
        , helping maximize the performance of engineering teams.
      </p>

      <p className="mb-5">
        I'm also building{" "}
        <Link
          type="color"
          className="text-tripleyBlue"
          href={tripleyUrl}
          displayName="Tripley"
        />
        , a mobile app that enables travelers to plan and manage their trips
        effectively.
      </p>

      <p className="mb-5">
        Check out my <Link type="basic" href={""} displayName="work" />, and my
        GitHub <GitHubButton />
        {". "} If you'd like to chat about software, or would just like to
        connect, feel free to{" "}
        <Link type="basic" href={`mailto:${email}`} displayName="reach out" />!
      </p>
      <p className="mb-5"></p>
    </section>
  );
};

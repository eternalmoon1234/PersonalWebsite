import { email, foyerUrl, githubUrl, tripleyUrl } from "@/utils/links";
import { GitHubButton } from "./GitHubButton";
import { Link } from "./Link";

export const About = () => {
  return (
    <section className="rounded-lg">
      <h2 className="text-2xl font-bold mb-2 text-primary-extraLight">about</h2>
      <p className="mb-5">
        I'm Gautam, a high school freshman. I enjoy writing open source
        software, and building meaningful products and solutions.
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
        Check out my work, and my GitHub <GitHubButton />. Reach out to me at{" "}
        <Link type="basic" href={`mailto:${email}`} displayName={email} />
      </p>
    </section>
  );
};

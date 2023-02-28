import {
  email,
  foyerUrl,
  frcUrl,
  githubUrl,
  team5940Url,
  tripleyUrl,
  youtubeUrl,
} from "@/utils/links";

export const CurrentWork = () => {
  return (
    <section className="rounded-lg">
      <h2 className="text-2xl font-bold mb-2 text-primary-extraLight">
        currently, i'm
      </h2>
      <p className="mb-5">
        Working as a product engineer at{" "}
        <a href={foyerUrl} target="_blank">
          <span className="text-foyerPurple font-beatriceSemibold">Foyer</span>
        </a>
        , helping maximize the performance of engineering teams.
      </p>

      <p className="mb-5">
        Building{" "}
        <a href={tripleyUrl} target="_blank">
          <span className="text-tripleyBlue font-beatriceSemibold">
            Tripley
          </span>
        </a>
        , a mobile app that enables travelers to plan and manage their trips
        effectively.
      </p>

      <p className="mb-5">
        Creating content on my YouTube channel called{" "}
        <a href={youtubeUrl} target="_blank">
          <span className="underline text-primary-light">
            EternalProgramming
          </span>
        </a>
        , where I talk about and teach tech
      </p>
      <p className="mb-5">
        Technical team member in{" "}
        <a href={frcUrl} target="_blank">
          <span className="underline text-primary-light">
            First Robotics Competition
          </span>
        </a>{" "}
        <a href={team5940Url} target="_blank">
          <span className="underline font-beatriceSemibold text-team5940Red">
            Team 5940
          </span>
        </a>
        , in the software sub-team
      </p>
    </section>
  );
};

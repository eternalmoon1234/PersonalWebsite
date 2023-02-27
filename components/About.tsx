import { foyerUrl, githubUrl, tripleyUrl } from "@/utils/links";

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
        <a href={foyerUrl} target="_blank">
          <span className="text-foyer font-beatriceSemibold">Foyer</span>
        </a>
        , helping maximize the performance of engineering teams.
      </p>

      <p className="mb-5">
        I'm also building{" "}
        <a href={tripleyUrl} target="_blank">
          <span className="text-[#3290FF] font-beatriceSemibold">Tripley</span>
        </a>
        , a mobile app that enables travelers to plan and manage their trips
        effectively.
      </p>

      <p className="mb-5">
        Check out my work, and my GitHub{" "}
        <a href={githubUrl} target="_blank">
          <span className="bg-primary-light text-primary p-1 rounded-lg leading-loose">
            @eternalmoon1234
          </span>
        </a>
        . Reach out to me at{" "}
        <span className="text-primary-light underline">
          gautamparanjape8@gmail.com
        </span>
      </p>
    </section>
  );
};

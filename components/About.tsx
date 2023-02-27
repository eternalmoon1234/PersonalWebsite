import { foyerLink, tripleyLink } from "@/utils/links";

export const About = () => {
  return (
    <section className="rounded-lg">
      <h2 className="text-2xl font-bold mb-2 text-primary-extraLight">about</h2>
      <p className="mb-4">
        I'm Gautam, a high school freshman. I enjoy writing open source
        software, and building meaningful products and solutions.
      </p>
      <p className="mb-4">
        Currently, I work as a product engineer at{" "}
        <a href={foyerLink} target="_blank">
          <span className="text-[#AD58FF] font-beatriceSemibold">Foyer</span>
        </a>
        , helping maximize the performance of engineering teams.
      </p>

      <p className="mb-4">
        I'm also building{" "}
        <a href={tripleyLink} target="_blank">
          <span className="text-[#3290FF] font-beatriceSemibold">Tripley</span>
        </a>
        , a mobile app that enables travelers to plan and manage their trips
        effectively.
      </p>

      <p className="mb-4">
        Check out my work, and my GitHub{" "}
        <a href="https://github.com/eternalmoon1234" target="_blank">
          <span className="bg-[#74B3FF] text-primary p-1 rounded-lg leading-loose">
            @eternalmoon1234
          </span>
        </a>
        . Reach out to me at{" "}
        <span className="text-[#74B3FF] underline">
          gautamparanjape8@gmail.com
        </span>
      </p>
    </section>
  );
};

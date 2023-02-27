import { foyerUrl, githubUrl, tripleyUrl } from "@/utils/links";

export const Experience = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-2 text-primary-extraLight">work experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-6">
        <div className="flex flex-col col-span-2">
          <p>Jan 2023 - present</p>
        </div>
        <div className="flex flex-col col-span-4 space-y-3">
          <h6 className="text-lg text-white md:text-xl font-beatriceSemibold">
            Product Engineer •         <a href={foyerUrl} target="_blank">
          <span className="text-foyer font-beatriceSemibold">Foyer</span>
        </a>
          </h6>
          <p className="text-sm">
            Seeing the Merdaugh trial on the news today perked my interest in
            the case so I watched this DocuSeries tonight…Wow!
          </p>
          <p className="text-sm">TS • Next • React • Mobx • Turbo</p>
        </div>
      </div>
    </section>
  );
};

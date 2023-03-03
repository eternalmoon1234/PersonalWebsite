import {
  email,
  foyerUrl,
  frcUrl,
  githubUrl,
  team5940Url,
  tripleyUrl,
  verticalSpacing,
  youtubeUrl,
} from "@/utils/constants";
import { Link } from "./Link";

export const CurrentWork = () => {
  return (
    <section className="rounded-lg">
      <h2 className="text-2xl font-bold mb-2 text-primary-extraLight">
        currently, i'm
      </h2>
      <div className="pl-3">
        <li className={`${verticalSpacing}`}>
          Working as a product engineer at{" "}
          <Link
            type="color"
            className="text-foyerPurple"
            href={foyerUrl}
            displayName="Foyer"
          />
          , helping maximize the performance of engineering teams.
        </li>

        <li className={`${verticalSpacing}`}>
          Building{" "}
          <Link
            type="color"
            className="text-tripleyBlue"
            href={tripleyUrl}
            displayName="Tripley"
          />
          , a mobile app that enables travelers to plan and manage their trips
          effectively.
        </li>

        <li className={`${verticalSpacing}`}>
          Creating content on my YouTube channel called{" "}
          <Link
            type="basic"
            href={youtubeUrl}
            displayName="EternalProgramming"
          />
          , where I talk about and teach tech
        </li>
        <li className={`${verticalSpacing}`}>
          Technical team member in{" "}
          <Link
            type="basic"
            href={frcUrl}
            displayName="First Robotics Competition"
          />{" "}
          <Link
            type="color"
            className="text-team5940Red underline"
            href={team5940Url}
            displayName="Team 5940"
          />
          , in the software sub-team
        </li>
      </div>
    </section>
  );
};

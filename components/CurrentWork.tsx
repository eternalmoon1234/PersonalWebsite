import { FC } from "react";
import { constants } from "@/utils/constants";
import { Link } from "./Link";

export const CurrentWork: FC = () => {
  return (
    <section className="rounded-lg mt-12">
      <h2 className="text-2xl mb-2 text-primary-extraLight">currently, i'm</h2>
      <div className="pl-3">
        <li className={`${constants.verticalSpacing}`}>
          Working as a product engineer at{" "}
          <Link
            type="color"
            className="text-foyerPurple"
            href={constants.companies.foyer}
            displayName="Foyer"
          />
          , helping maximize the performance of engineering teams.
        </li>

        <li className={`${constants.verticalSpacing}`}>
          Building{" "}
          <Link
            type="color"
            className="text-tripleyBlue"
            href={constants.companies.tripley}
            displayName="Tripley"
          />
          , a mobile app that enables travelers to plan and manage their trips
          effectively.
        </li>

        <li className={`${constants.verticalSpacing}`}>
          Software sub-team member in{" "}
          <Link
            type="basic"
            href={constants.robotics.frc}
            displayName="FIRST Robotics Competition"
          />{" "}
          <Link
            type="color"
            className="text-team5940Red underline"
            href={constants.robotics.team5940}
            displayName="Team 5940"
          />
          .
        </li>

        <li className={`${constants.verticalSpacing}`}>
          Creating practical, useful, and informative videos about tech on my{" "}
          <Link
            type="basic"
            href={constants.contacts.youtube}
            displayName="YouTube channel"
          />
        </li>
      </div>
    </section>
  );
};

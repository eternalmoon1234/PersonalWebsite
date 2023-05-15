import { FC } from "react";
import { constants } from "@/utils/constants";
import { Link } from "./Link";

export const PastWork: FC = () => {
  return (
    <section className="rounded-lg mt-12">
      <h2 className="text-2xl mb-2 text-primary-extraLight">
        past work / achievements
      </h2>
      <div className="pl-2">
        <li className={`${constants.verticalSpacing}`}>
          Certified{" "}
          <Link
            type="basic"
            href={constants.certifications.ibmFullStackSweDev}
            displayName="IBM Full Stack Software Developer"
          />
          .
        </li>

        <li className={`${constants.verticalSpacing}`}>
          2nd place at{" "}
          <Link
            type="basic"
            href={constants.hackathons.lancerhacks.url}
            displayName="LancerHacks 2023"
          />{" "}
          with{" "}
          <Link
            type="basic"
            href={constants.hackathons.lancerhacks[2023].projectUrl}
            displayName="ArtMart"
          />
          , a platform for collectors to trade physical art.
        </li>
        <li className={`${constants.verticalSpacing}`}>
          3rd place at{" "}
          <Link
            type="basic"
            href={constants.hackathons.trivalleyhacks.url}
            displayName="Trivalley Hacks 2022"
          />{" "}
          with{" "}
          <Link
            type="basic"
            href={constants.hackathons.trivalleyhacks[2022].projectUrl}
            displayName="Evergreen"
          />
          , a way for home gardeners to sell their fresh and organic produce
          with consumers in their neighborhood.
        </li>
        <li className={`${constants.verticalSpacing}`}>
          3rd place at{" "}
          <Link
            type="basic"
            href={constants.hackathons.lancerhacks.url}
            displayName="LancerHacks 2022"
          />{" "}
          with{" "}
          <Link
            type="basic"
            href={constants.hackathons.lancerhacks[2022].projectUrl}
            displayName="Geochattr"
          />
          , a web app that enables users to chat with people in their city
          through doodles and drawings.
        </li>
        <li className={`${constants.verticalSpacing}`}>
          Over 115 subscribers and 5K views on my{" "}
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

import {
  artMartUrl,
  evergreenUrl,
  geochattrUrl,
  ibmFullStackCourseUrl,
  lancerHacksUrl,
  trivalleyHacksUrl,
  verticalSpacing,
  youtubeUrl,
} from "@/utils/constants";
import { FC } from "react";
import { Link } from "./Link";

export const PastWork: FC = () => {
  return (
    <section className="rounded-lg mt-12">
      <h2 className="text-2xl font-bold mb-2 text-primary-extraLight">
        past work / achievements
      </h2>
      <div className="pl-2">
        <li className={`${verticalSpacing}`}>
          Certified{" "}
          <Link
            type="basic"
            href={ibmFullStackCourseUrl}
            displayName="IBM Fullstack Software Developer"
          />
        </li>

        <li className={`${verticalSpacing}`}>
          Over 115 subscribers and 5K views on my{" "}
          <Link type="basic" href={youtubeUrl} displayName="YouTube channel" />
        </li>

        <li className={`${verticalSpacing}`}>
          2nd place at{" "}
          <Link
            type="basic"
            href={lancerHacksUrl}
            displayName="LancerHacks VI"
          />{" "}
          with <Link type="basic" href={artMartUrl} displayName="ArtMart" />, a
          platform for collectors to trade physical art.
        </li>
        <li className={`${verticalSpacing}`}>
          3rd place at{" "}
          <Link
            type="basic"
            href={trivalleyHacksUrl}
            displayName="Trivalley Hacks"
          />{" "}
          with <Link type="basic" href={evergreenUrl} displayName="Evergreen" />
          , a way for home gardeners to sell their fresh and organic produce
          with consumers in their neighborhood.
        </li>
        <li className={`${verticalSpacing}`}>
          3rd place at{" "}
          <Link
            type="basic"
            href={lancerHacksUrl}
            displayName="LancerHacks V"
          />{" "}
          with <Link type="basic" href={geochattrUrl} displayName="Geochattr" />
          , a web app that enables users to chat with people in their city
          through doodles and drawings.
        </li>
      </div>
    </section>
  );
};

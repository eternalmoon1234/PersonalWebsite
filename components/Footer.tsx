import { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className="rounded-lg shadow mt-12">
      <hr className=" border-gray-700 sm:mx-auto w-full" />
      <span className="flex justify-center items-center text-center font-beatrice text-sm text-gray-200 sm:text-left py-5">
        © {new Date().getFullYear()} Gautam Paranjape. All rights reserved.
      </span>
    </footer>
  );
};

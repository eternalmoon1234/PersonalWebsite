export const Footer = () => {
  return (
    <footer className="rounded-lg shadow mt-10">
      <hr className=" border-gray-400 sm:mx-auto lg:my-6 w-full" />
      <span className="flex justify-center items-center text-center font-beatrice text-sm text-gray-200 sm:text-left">
        © {new Date().getFullYear()} Gautam Paranjape. All rights reserved.
      </span>
    </footer>
  );
};

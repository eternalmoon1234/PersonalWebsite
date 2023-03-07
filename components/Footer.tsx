export const Footer = () => {
  return (
    <footer className="rounded-lg shadow">
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8 w-full" />
      <span className="flex justify-center items-center text-center font-beatriceMedium text-base text-[#C1DEFF] sm:text-left">
        © {new Date().getFullYear()} Gautam Paranjape. All rights reserved.
      </span>
    </footer>
  );
};
